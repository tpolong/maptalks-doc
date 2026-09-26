/**
 * scripts/baseline.mjs — 文档基线：机器可读地记录"这批文档按哪个引擎版本核对"
 *
 *   node scripts/baseline.mjs --write    # 重算并写 docs-baseline.json
 *   node scripts/baseline.mjs --check    # 与现状比对，有差异则退出码 1（CI 用）
 *   node scripts/baseline.mjs --print    # 只打印
 *
 * 选项：
 *   --src <path>   引擎源码根（默认 lib.DEFAULT_SRC 或 $MAPTALKS_SRC）
 *   --offline      不查 npm dist-tags（只读源码 package.json）
 *
 * 基线内容：
 *   engine     引擎各包版本（源码 packages/*\/package.json 的 name/version）
 *   published   npm dist-tags latest（联网时；用于判断"文档是否落后于已发布版本"）
 *   source      源码根路径、git commit、分支
 *   digests     apiModel（规范化投影的 sha256） / thumbnails / examples 计数
 *   verified    运行时复测报告摘要（由本地 repl 结果填；没有则 null）
 */
import { readFileSync, writeFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { createHash } from 'node:crypto';
import { spawnSync } from 'node:child_process';
import { ROOT, CACHE, DEFAULT_SRC, log } from './api/lib.mjs';

const argv = process.argv.slice(2);
const arg = (k, d) => { const i = argv.indexOf(k); return i >= 0 ? argv[i + 1] : d; };
const SRC = arg('--src', DEFAULT_SRC);
const OFFLINE = argv.includes('--offline');
const FILE = join(ROOT, 'docs-baseline.json');
const sha = (s) => 'sha256:' + createHash('sha256').update(s).digest('hex').slice(0, 32);

// ---------------------------------------------------------------- 采集

function engineVersions() {
  const out = {};
  for (const d of readdirSync(SRC, { withFileTypes: true })) {
    if (!d.isDirectory()) continue;
    const pj = join(SRC, d.name, 'package.json');
    if (!existsSync(pj)) continue;
    try {
      const { name, version } = JSON.parse(readFileSync(pj, 'utf8'));
      if (name && version && /^(maptalks|@maptalks\/)/.test(name)) out[name] = version;
    } catch { /* 忽略坏 package.json */ }
  }
  return Object.fromEntries(Object.entries(out).sort(([a], [b]) => a.localeCompare(b)));
}

function sourceInfo() {
  const repo = dirname(SRC);
  const g = (a) => { const r = spawnSync('git', ['-C', repo, ...a], { encoding: 'utf8' }); return r.status === 0 ? r.stdout.trim() : null; };
  return { path: SRC, commit: g(['rev-parse', 'HEAD']), branch: g(['rev-parse', '--abbrev-ref', 'HEAD']), dirty: !!g(['status', '--porcelain']) };
}

/** 规范化投影：排序 + 只保留稳定字段，避免抽取顺序/空白导致假变化 */
function apiModelDigest() {
  const model = join(CACHE, 'api-model.json');
  if (!existsSync(model)) return null;
  const m = JSON.parse(readFileSync(model, 'utf8'));
  const byName = (a, b) => a.name.localeCompare(b.name);
  const ms = (list) => [...(list || [])].sort((a, b) => a.n.localeCompare(b.n)).map((x) => [x.n, x.sig || '', x.zh || '', x.en || '']);
  const canon = {
    classes: [...m.classes].sort(byName).map((c) => ({
      name: c.name, pkg: c.pkg, parent: c.parent || null,
      mixins: [...(c.mixins || [])].sort(), chain: c.chain || [],
      methods: ms(c.methods), statics: ms(c.statics),
    })),
    namespaces: [...m.namespaces].sort(byName).map((n) => ({ name: n.name, members: ms(n.members) })),
    events: [...m.events].map((e) => [e.owner || '', e.name || e.n || '']).sort(),
    functionFiles: [...m.functionFiles].map((f) => ({ file: f.file, fns: ms(f.fns) })).sort((a, b) => a.file.localeCompare(b.file)),
    options: [...m.options].map((o) => o.file).sort(),
  };
  return { digest: sha(JSON.stringify(canon)), counts: { classes: canon.classes.length, members: canon.classes.reduce((a, c) => a + c.methods.length, 0), namespaces: canon.namespaces.length, events: canon.events.length } };
}

function assetsInfo() {
  const EX = join(ROOT, 'docs', 'public', 'examples');
  let examples = 0; const byCategory = {};
  for (const cat of readdirSync(EX, { withFileTypes: true }).filter((d) => d.isDirectory()).map((d) => d.name)) {
    if (cat === 'resources') continue;
    for (const sub of readdirSync(join(EX, cat), { withFileTypes: true }).filter((d) => d.isDirectory()).map((d) => d.name)) {
      for (const name of readdirSync(join(EX, cat, sub), { withFileTypes: true }).filter((d) => d.isDirectory()).map((d) => d.name)) {
        if (existsSync(join(EX, cat, sub, name, 'index.html'))) { examples++; byCategory[cat] = (byCategory[cat] || 0) + 1; }
      }
    }
  }
  const TH = join(ROOT, 'docs', 'public', 'thumbnails');
  const thumbs = readdirSync(TH).filter((f) => f.endsWith('.webp'));
  const thumbDigest = sha(thumbs.sort().map((f) => `${f}:${statSync(join(TH, f)).size}`).join('\n'));
  return { examples, byCategory, thumbnails: thumbs.length, thumbDigest };
}

async function publishedVersions(engine) {
  if (OFFLINE) return null;
  const out = {};
  await Promise.all(Object.keys(engine).map(async (p) => {
    try {
      const r = await fetch(`https://registry.npmjs.org/${p.replace('/', '%2F')}`, { signal: AbortSignal.timeout(10000) });
      const d = await r.json();
      const latest = d['dist-tags']?.latest;
      if (latest) out[p] = latest;
    } catch { /* 网络失败忽略：published 只是参考 */ }
  }));
  return Object.keys(out).length ? Object.fromEntries(Object.entries(out).sort(([a], [b]) => a.localeCompare(b))) : null;
}

// ---------------------------------------------------------------- 主流程

const engine = engineVersions();
const source = sourceInfo();
const api = apiModelDigest();
const assets = assetsInfo();
const model = existsSync(FILE) ? JSON.parse(readFileSync(FILE, 'utf8')) : null;

const next = {
  schema: 1,
  updatedAt: new Date().toISOString().slice(0, 16).replace('T', ' '),
  engine,
  published: await publishedVersions(engine),
  source,
  digests: { apiModel: api?.digest || null, modelCounts: api?.counts || null, thumbnails: assets.thumbDigest },
  examples: { total: assets.examples, byCategory: assets.byCategory, thumbnails: assets.thumbnails },
  verified: model?.verified || null,
};

if (argv.includes('--write')) {
  writeFileSync(FILE, JSON.stringify(next, null, 2) + '\n', 'utf8');
  log(`已写 docs-baseline.json：引擎 ${Object.keys(engine).length} 包；示例 ${assets.examples}；缩略图 ${assets.thumbnails}；模型 ${api ? api.digest.slice(0, 16) : '(缺，先跑 api:inventory)'}`);
  process.exit(api ? 0 : 1);
}

if (argv.includes('--print') || !model) {
  log(JSON.stringify(next, null, 2));
  if (!model) { log(`\n还没有 ${FILE}，先跑 --write`); process.exit(1); }
  process.exit(0);
}

// --check
const diffs = [];
const cmp = (label, a, b) => { if (JSON.stringify(a) !== JSON.stringify(b)) diffs.push(`${label}\n    基线: ${JSON.stringify(a)}\n    当前: ${JSON.stringify(b)}`); };
cmp('引擎包版本', model.engine, next.engine);
cmp('源码 commit', model.source?.commit, next.source.commit);
if (!api) diffs.push('apiModel 摘要缺失：先跑 node scripts/api/inventory.mjs');
else cmp('apiModel 摘要', model.digests?.apiModel, next.digests.apiModel);
cmp('缩略图摘要', model.digests?.thumbnails, next.digests.thumbnails);
cmp('示例数量', model.examples?.total, next.examples.total);
if (model.published && next.published) {
  const newer = Object.entries(next.published).filter(([p, v]) => model.published[p] && model.published[p] !== v);
  if (newer.length) log(`提示：npm 上已有更新版本（基线未跟）→ ${newer.map(([p, v]) => `${p}@${v}`).join(', ')}`);
}
if (diffs.length) {
  log(`基线与现状不一致（${diffs.length} 项）：`);
  for (const d of diffs) log('  - ' + d);
  log('\n确认无误后跑 node scripts/baseline.mjs --write 更新基线。');
  process.exit(1);
}
log(`基线一致：引擎 ${Object.keys(engine).length} 包 @ ${String(source.commit).slice(0, 8)}；示例 ${assets.examples}；缩略图 ${assets.thumbnails}；模型 ${api.digest.slice(0, 16)}`);
