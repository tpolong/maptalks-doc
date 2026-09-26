/**
 * scripts/capture.mjs — 抓取上游变更信号（"引擎发版 → 文档/示例跟上"流水线第一步）
 *
 *   node scripts/capture.mjs [--engine-ref <ref>] [--src <引擎 packages 路径或仓库根>]
 *                            [--offline] [--no-fetch] [--out <file>] [--print]
 *
 * 抓的是三层信号里的 L1 + L2：
 *   L1 发布信号  npm 各包 dist-tags.latest（只认 latest，忽略 snapshot/next）+ 上游稳定 tag
 *   L2 源码区间  docs-baseline.json 的 source.commit → <engine-ref> 的变更包 / 变更文件 / 提交
 *
 * 选项：
 *   --engine-ref <ref>  要比对的引擎 ref（tag / commit / 分支）；默认取上游最新稳定 tag
 *   --src <path>        引擎源码位置（packages 目录或仓库根）；默认 docs-baseline.json 的 source.path
 *   --offline           不查 npm，只用本地 git 信息（同时也不执行 git fetch）
 *   --no-fetch          只跳过 git fetch（npm 照查）
 *   --out <file>        输出文件，默认 .vitepress/cache/capture.json（git-ignored）
 *   --print             打印详细摘要（不加也打一行简摘）
 *
 * 稳定 tag 判定：/^v\d+\.\d+\.\d+$/ 或 /<包名>@\d+\.\d+\.\d+$/；
 * 名字含 snapshot / next / beta / alpha / rc 的一律不算。
 * latestStable 在 <包名>@<版本> 里取主包 maptalks-gl（聚合包、changesets 发版驱动）的最高版本，
 * 没有则退到 maptalks，再退到全体稳定 tag 的最高版本；候选只取本地 tag
 * （默认会先 git fetch --tags 刷新本地，远端独有 tag 仅记录在 tags.remote）。
 *
 * npmBehind = npm 上 latest 与基线记录不一致的包，即「文档还没跟上的已发布版本」。
 *
 * 退出码：
 *   0  正常完成（upToDate: true 也是 0，是否有更新交给 workflow 读 JSON 判断）
 *   1  基线 / 引擎仓库缺失或不可读
 *   2  <engine-ref> 解析失败
 */
import { spawnSync } from 'node:child_process';
import { existsSync, statSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { ROOT, readText, writeJson, log } from './api/lib.mjs';

const argv = process.argv.slice(2);
const arg = (k, d) => { const i = argv.indexOf(k); return i >= 0 ? argv[i + 1] : d; };

const OFFLINE = argv.includes('--offline');
// --offline 意味着「只用本地 git 信息」，故连 fetch 一起跳过
const NO_FETCH = argv.includes('--no-fetch') || OFFLINE;
const PRINT = argv.includes('--print');
const OUT = resolve(ROOT, arg('--out', join(ROOT, '.vitepress', 'cache', 'capture.json')));
const BASELINE = join(ROOT, 'docs-baseline.json');
const MAXBUF = 128 * 1024 * 1024;

const warnings = [];
const warn = (m) => { warnings.push(m); };
const fatal = (m, code) => { log(`错误：${m}`); process.exit(code); };

// ---------------------------------------------------------------- git

/** 跑一条 git 命令；不经过 shell（无管道），失败时返回错误文本而不是抛异常 */
function git(repo, args, { timeout = 120000 } = {}) {
  const r = spawnSync('git', ['-C', repo, ...args], {
    encoding: 'utf8', maxBuffer: MAXBUF, timeout, windowsHide: true,
  });
  const out = r.stdout || '';
  if (r.error || r.status !== 0) {
    const err = r.error ? r.error.message : (r.stderr || '').trim() || `git 退出码 ${r.status}`;
    return { ok: false, out, err };
  }
  return { ok: true, out, err: (r.stderr || '').trim() };
}

/** 校验一个 ref 能解析成 commit（annotated tag 也要落到 commit 上） */
function revParse(repo, ref) {
  const r = git(repo, ['rev-parse', '--verify', '--quiet', `${ref}^{commit}`]);
  return r.ok ? r.out.trim() : null;
}

// ---------------------------------------------------------------- 选项解析

if (!existsSync(BASELINE)) fatal(`缺少 ${BASELINE}（先跑 node scripts/baseline.mjs --write）`, 1);
let base;
try { base = JSON.parse(readText(BASELINE)); } catch (e) { fatal(`docs-baseline.json 解析失败：${e.message}`, 1); }
const engine = base.engine || {};

// 引擎源码位置：默认取基线里的 source.path；传仓库根时自动补 /packages，并据此推出仓库根
function resolveSrc() {
  const raw = arg('--src', base.source && base.source.path);
  if (!raw) fatal('缺少 --src，且 docs-baseline.json 里没有 source.path', 1);
  let src = resolve(raw);
  if (!existsSync(src)) fatal(`引擎源码目录不存在：${src}`, 1);
  const sub = join(src, 'packages');
  if (existsSync(sub) && statSync(sub).isDirectory()) src = sub;
  let repo = dirname(src);
  let probe = git(repo, ['rev-parse', '--git-dir']);
  if (!probe.ok) {
    // 兜底：--src 指向的是仓库里更深的子目录时，让 git 自己推导仓库根
    const tl = git(src, ['rev-parse', '--show-toplevel']);
    if (tl.ok) { repo = tl.out.trim(); probe = git(repo, ['rev-parse', '--git-dir']); }
  }
  if (!probe.ok) fatal(`找不到引擎仓库（git 仓库根）：${repo}\n  git 报错：${probe.err}`, 1);
  return { src, repo };
}

// ---------------------------------------------------------------- L1 发布信号

/** npm dist-tags.latest（忽略 snapshot / next），并发查询 */
async function npmLatest() {
  if (OFFLINE) return null;
  const pkgs = Object.keys(engine);
  const out = {};
  await Promise.all(pkgs.map(async (p) => {
    try {
      const r = await fetch(`https://registry.npmjs.org/${p.replace('/', '%2F')}`, { signal: AbortSignal.timeout(15000) });
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      const d = await r.json();
      const latest = (d['dist-tags'] && d['dist-tags'].latest) || null;
      out[p] = { latest, at: (latest && d.time && d.time[latest]) || null, baseline: engine[p] ?? null };
    } catch (e) {
      warn(`npm 查询失败：${p}（${e.message}）`);
      out[p] = { latest: null, at: null, baseline: engine[p] ?? null };
    }
  }));
  return Object.fromEntries(Object.entries(out).sort(([a], [b]) => a.localeCompare(b)));
}

/** 稳定 tag：v1.2.3 或 <包名>@1.2.3；预发布/快照一律排除 */
const isStableTag = (t) => !/snapshot|next|beta|alpha|rc/i.test(t)
  && (/^v\d+\.\d+\.\d+$/.test(t) || /@\d+\.\d+\.\d+$/.test(t));

const verOf = (t) => (/(\d+)\.(\d+)\.(\d+)$/.exec(t) || [0, 0, 0, 0]).slice(1).map(Number);
const byVersion = (a, b) => {
  const x = verOf(a), y = verOf(b);
  for (let i = 0; i < 3; i++) if (x[i] !== y[i]) return x[i] - y[i];
  return a.localeCompare(b);
};

/** latestStable：主包 maptalks-gl → maptalks → 全体稳定 tag，取版本最高者 */
function pickLatestStable(local) {
  const stable = local.filter(isStableTag);
  for (const pkg of ['maptalks-gl', 'maptalks']) {
    const hit = stable.filter((t) => t.startsWith(`${pkg}@`)).sort(byVersion);
    if (hit.length) return hit[hit.length - 1];
  }
  const rest = stable.sort(byVersion);
  return rest.length ? rest[rest.length - 1] : null;
}

function collectTags(repo) {
  const loc = git(repo, ['tag', '--list']);
  const local = loc.ok ? loc.out.split('\n').map((s) => s.trim()).filter(Boolean) : [];
  if (!loc.ok) warn(`git tag --list 失败：${loc.err}`);

  // 远端可失败（无网/无权限），失败只告警不崩
  const rem = git(repo, ['ls-remote', '--tags', 'origin'], { timeout: 60000 });
  let remote = [];
  if (rem.ok) {
    const set = new Set();
    for (const line of rem.out.split('\n')) {
      const tab = line.indexOf('\t');
      if (tab < 0) continue;
      const name = line.slice(tab + 1).trim().replace(/\^\{\}$/, '').replace(/^refs\/tags\//, '');
      if (name) set.add(name);
    }
    remote = [...set].sort();
  } else {
    warn(`git ls-remote --tags origin 失败（忽略远端 tag）：${rem.err}`);
  }
  return { local: [...local].sort(), remote };
}

// ---------------------------------------------------------------- L2 源码区间

/** name-status 的语义优先级：删 > 增/重命名 > 改 */
const STATUS_RANK = { D: 3, A: 2, R: 2, C: 2, M: 1, T: 1 };

/** 解析 `git log --name-status` 的混合输出：提交头行 + 随后的 name-status 行 */
function parseLog(text) {
  const commits = [];
  const files = new Map();
  for (const line of text.split('\n')) {
    if (!line) continue;
    if (/^[0-9a-f]{40}\t/.test(line)) {
      const p = line.split('\t');
      commits.push({ hash: p[0], author: p[1] || '', date: p[2] || '', subject: p.slice(3).join('\t') });
      continue;
    }
    const p = line.split('\t');
    if (p.length < 2) continue;
    const status = p[0].trim();
    // 重命名/复制是 `R100\told\tnew`，取新路径
    const file = p[p.length - 1].trim();
    if (!status || !file) continue;
    // 同一文件在区间内可能被多次改动（git log 从新到旧），取语义最强的一次：
    // 区间内被删 → D；区间内新增 → A（含重命名/复制，文件是新出现的）；其余 → 原状态
    const prev = files.get(file);
    if (!prev || STATUS_RANK[status[0]] > STATUS_RANK[prev[0]]) files.set(file, status);
  }
  return { commits, files };
}

// ---------------------------------------------------------------- 主流程

const { src, repo } = resolveSrc();

if (!NO_FETCH) {
  const f = git(repo, ['fetch', '--tags', 'origin'], { timeout: 180000 });
  if (!f.ok) warn(`git fetch --tags origin 失败（继续用本地 git 信息）：${f.err}`);
}

const tags = collectTags(repo);
const latestStable = pickLatestStable(tags.local);
const ref = arg('--engine-ref', null) || latestStable;
if (!ref) fatal('无法确定 engine-ref：本地没有任何稳定 tag，请显式传 --engine-ref <ref>', 2);

const to = revParse(repo, ref);
if (!to) fatal(`--engine-ref 解析失败：${ref}（本地没有这个 ref？先 git fetch --tags）`, 2);

const fromRaw = base.source && base.source.commit;
const from = fromRaw ? revParse(repo, fromRaw) : null;
if (!from) fatal(`基线 commit 无法解析：${fromRaw || '(docs-baseline.json 缺 source.commit)'}`, 1);

const logRes = git(repo, ['log', '--name-status', '--format=%H%x09%an%x09%ad%x09%s', '--date=short', `${from}..${to}`]);
if (!logRes.ok) fatal(`git log ${from.slice(0, 7)}..${to.slice(0, 7)} 失败：${logRes.err}`, 1);
const { commits, files } = parseLog(logRes.out);

const changedFiles = [...files.entries()].map(([file, status]) => ({ status, file })).sort((a, b) => a.file.localeCompare(b.file));
const changedPackages = [...new Set(changedFiles
  .map((f) => /^packages\/([^/]+)\//.exec(f.file))
  .filter(Boolean)
  .map((m) => m[1]))].sort();

const npm = await npmLatest();
const npmBehind = npm
  ? Object.entries(npm).filter(([, v]) => v.latest && v.latest !== v.baseline).map(([p]) => p).sort()
  : [];

const out = {
  generatedAt: new Date().toISOString().slice(0, 16).replace('T', ' '),
  upToDate: from === to || commits.length === 0,
  from,
  to,
  ref,
  srcRepo: repo,
  npm,
  npmBehind,
  tags: { local: tags.local, remote: tags.remote, latestStable },
  changedPackages,
  changedFiles,
  commits: commits.slice(0, 50),
};

writeJson(OUT, out);

// ---------------------------------------------------------------- 终端输出

const short = (h) => String(h || '').slice(0, 7);
const behind = OFFLINE ? '（--offline 跳过 npm 查询）' : (npmBehind.length ? npmBehind.join(', ') : '无');

if (out.upToDate) {
  log(`up-to-date（基线 ${short(from)} 已覆盖 ${ref} @ ${short(to)}，区间无提交）`);
} else {
  log(`有更新：${short(from)}..${short(to)}，涉及 ${changedPackages.length} 个包 / ${changedFiles.length} 个文件 / ${commits.length} 个提交；npm 落后：${behind}`);
}

if (PRINT) {
  log(`  引擎仓库  ${repo}`);
  log(`  源码根    ${src}`);
  log(`  ref       ${ref} → ${to}`);
  log(`  npm       ${npm ? `${Object.keys(npm).length} 个包，落后 ${npmBehind.length}：${behind}` : '未查询（--offline）'}`);
  log(`  tags      本地 ${tags.local.length} / 远端 ${tags.remote.length} / latestStable ${latestStable || '(无)'}`);
  log(`  变更包    ${changedPackages.join(', ') || '(无)'}`);
  if (changedFiles.length) {
    log(`  变更文件（前 20 / 共 ${changedFiles.length}）`);
    for (const f of changedFiles.slice(0, 20)) log(`    ${f.status}\t${f.file}`);
  }
  if (commits.length) {
    log(`  提交（前 10 / 共 ${commits.length}）`);
    for (const c of commits.slice(0, 10)) log(`    ${short(c.hash)} ${c.date} ${c.author}  ${c.subject}`);
  }
  log(`  已写      ${OUT.replace(ROOT, '.').replace(/\\/g, '/')}`);
}

for (const w of warnings) log(`警告：${w}`);
