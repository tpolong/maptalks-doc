/**
 * scripts/archive-baseline.mjs — 把"这一次的模型与报告"归档到孤儿分支 baselines/<引擎版本>
 *
 * 为什么需要：影响分析要拿**上一版模型**做字段级 diff，而 api-model.json 放在被 gitignore 的
 * 缓存里、也没法进 main（1.9MB）。孤儿分支是 git 原生的存法，不依赖 GitHub release asset。
 *
 * 用法：
 *   node scripts/archive-baseline.mjs                 # 归档当前基线版本
 *   node scripts/archive-baseline.mjs --version 0.124.4
 *   node scripts/archive-baseline.mjs --push          # 归档后推送分支
 *   node scripts/archive-baseline.mjs --get 0.124.4 --out <file>   # 取回某版本模型
 *   node scripts/archive-baseline.mjs --list          # 列出已归档版本
 *
 * 归档内容（分支根目录）：
 *   api-model.json    抽取出的源码结构模型（影响分析的 base）
 *   docs-baseline.json 当时的基线定义
 *   impact-report.json / repl-report.json  若存在一并归档
 *   README.md         说明这份归档是什么、怎么用
 */
import { readFileSync, writeFileSync, existsSync, mkdirSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { spawnSync } from 'node:child_process';
import { ROOT, CACHE } from './api/lib.mjs';

const argv = process.argv.slice(2);
const arg = (n, d) => { const i = argv.indexOf(n); return i >= 0 ? argv[i + 1] : d; };
const BASELINE = join(ROOT, 'docs-baseline.json');

const git = (args, cwd = ROOT, quiet = true) => spawnSync('git', args, { cwd, encoding: 'utf8', stdio: quiet ? 'pipe' : 'inherit', maxBuffer: 128 * 1024 * 1024 });

/** 引擎版本号：优先 maptalks-gl，其次 maptalks，再退化为第一个包 */
function engineVersion() {
  if (!existsSync(BASELINE)) throw new Error('缺 docs-baseline.json（先跑 scripts/baseline.mjs --write）');
  const b = JSON.parse(readFileSync(BASELINE, 'utf8'));
  const e = b.engine || {};
  return e['maptalks-gl'] || e['maptalks'] || Object.values(e)[0] || 'unknown';
}

const mode = argv.includes('--get') ? 'get' : argv.includes('--list') ? 'list' : 'archive';
const version = arg('--version', engineVersion());
const BRANCH = `baselines/${version}`;

if (mode === 'list') {
  const r = git(['branch', '--list', 'baselines/*']);
  const local = (r.stdout || '').trim().split('\n').filter(Boolean).map((s) => s.replace(/^[*+]\s*/, ''));
  const rr = git(['ls-remote', '--heads', 'origin', 'baselines/*']);
  const remote = (rr.stdout || '').trim().split('\n').filter(Boolean).map((l) => l.split('\t')[1].replace('refs/heads/', ''));
  console.log('本地：', local.length ? local.join(', ') : '(无)');
  console.log('远端：', remote.length ? remote.join(', ') : '(无)');
  process.exit(0);
}

if (mode === 'get') {
  const out = arg('--out', join(CACHE, `api-model-${version}.json`));
  const r = git(['show', `${BRANCH}:api-model.json`]);
  if (r.status !== 0) {
    console.error(`取不到 ${BRANCH}:api-model.json —— ${(r.stderr || '').trim().split('\n')[0]}`);
    process.exit(1);
  }
  mkdirSync(join(out, '..'), { recursive: true });
  writeFileSync(out, r.stdout);
  console.log(`已取回 ${BRANCH} 的模型 → ${out.replace(ROOT, '.')}（${r.stdout.length} 字节）`);
  process.exit(0);
}

// ---------------- 归档
const model = join(CACHE, 'api-model.json');
if (!existsSync(model)) { console.error('缺 .vitepress/cache/api/api-model.json（先跑 scripts/api/inventory.mjs）'); process.exit(1); }

const WT = join(tmpdir(), `baselines-wt-${Date.now()}`);
rmSync(WT, { recursive: true, force: true });
let r = git(['worktree', 'add', '--detach', WT]);
if (r.status !== 0) { console.error('git worktree add 失败：' + (r.stderr || '').slice(0, 200)); process.exit(1); }

try {
  const has = git(['rev-parse', '--verify', '--quiet', `refs/heads/${BRANCH}`]).status === 0
    || git(['rev-parse', '--verify', '--quiet', `refs/remotes/origin/${BRANCH}`]).status === 0;
  if (has) {
    const base = git(['rev-parse', '--verify', '--quiet', `refs/heads/${BRANCH}`]).status === 0 ? BRANCH : `origin/${BRANCH}`;
    git(['checkout', '-B', BRANCH, base], WT);
    // 清空工作区（孤儿分支里只放归档文件）
    for (const f of ['api-model.json', 'docs-baseline.json', 'impact-report.json', 'repl-report.json', 'README.md']) rmSync(join(WT, f), { force: true });
  } else {
    git(['checkout', '--orphan', BRANCH], WT);
    const rm = git(['rm', '-rf', '.'], WT);
    if (rm.status !== 0) git(['rm', '-rf', '--cached', '.'], WT);
  }

  const files = [];
  files.push(['api-model.json', model]);
  if (existsSync(BASELINE)) files.push(['docs-baseline.json', BASELINE]);
  for (const extra of ['impact-report.json', 'repl-report.json']) {
    const p = join(CACHE, extra);
    if (existsSync(p)) files.push([extra, p]);
  }
  for (const [name, src] of files) writeFileSync(join(WT, name), readFileSync(src));
  writeFileSync(join(WT, 'README.md'), [
    `# baselines/${version}`,
    '',
    '本分支是 maptalks 文档站的**引擎版本归档**（孤儿分支，不进 main）：',
    '',
    '- `api-model.json`：该版本源码抽取出的结构模型，是影响分析（`scripts/impact.mjs --base`）的基准',
    '- `docs-baseline.json`：当时的基线定义（引擎各包版本、源码 commit、摘要）',
    '- `impact-report.json` / `repl-report.json`：若当时有则一并归档',
    '',
    '用法：`node scripts/archive-baseline.mjs --get ' + version + ' --out <file>`',
    '',
  ].join('\n'));

  git(['add', '-A'], WT);
  const dirty = git(['status', '--porcelain'], WT).stdout.trim();
  if (!dirty) {
    console.log(`${BRANCH}：内容无变化，跳过提交`);
  } else {
    const c = git(['-c', 'user.email=tpolong@users.noreply.github.com', '-c', 'user.name=Tangweilong', 'commit', '-qm', `chore(baselines): 归档引擎 ${version} 的模型与报告`], WT);
    if (c.status !== 0) { console.error('提交失败：' + (c.stderr || '').slice(0, 300)); process.exit(1); }
    console.log(`${BRANCH}：已提交 ${dirty.split('\n').length} 个文件（${dirty.split('\n').map((l) => l.slice(3)).join(', ')}）`);
  }
  if (argv.includes('--push')) {
    const p = git(['push', '-u', 'origin', `${BRANCH}:${BRANCH}`], WT, false);
    console.log(p.status === 0 ? `已推送 origin ${BRANCH}` : `推送失败（可能需要凭据）：exit=${p.status}`);
  }
} finally {
  git(['worktree', 'remove', '--force', WT]);
  rmSync(WT, { recursive: true, force: true });
}
