/**
 * scripts/check-gen-portable.mjs — 生成器跨平台一致性检查（本地复现 CI 的 gen/wire 幂等步骤）
 *
 * 做法：在临时目录里造一个「Linux 等价环境」——
 *   1) 站点仓库：LF 工作区（git clone -c core.autocrlf=false，或 --worktree 用当前工作区文件）
 *   2) 引擎源码：packages 的副本，CRLF 全部归一为 LF（**不改只读的引擎仓库**）
 *   3) 依次跑 inventory（--src 指向该副本）→ gen-includes → wire-pages
 *   4) git diff：有差异则打印摘要与前若干行 diff 并非零退出
 *
 * 用法：
 *   node scripts/check-gen-portable.mjs            # 用已提交状态（默认，等价 CI）
 *   node scripts/check-gen-portable.mjs --worktree # 用当前工作区文件（改代码后即时验证）
 *   node scripts/check-gen-portable.mjs --keep     # 保留临时目录，便于人工查看
 *   node scripts/check-gen-portable.mjs --src <引擎 packages 路径>   # 指定引擎源码根
 *
 * 退出码：0 = 生成产物与检出内容零差异；1 = 有差异或出错
 */
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync, copyFileSync, statSync, rmSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { tmpdir } from 'node:os';
import { spawnSync } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';

const argv = process.argv.slice(2);
const flag = (n) => argv.includes(n);
const arg = (n, d) => { const i = argv.indexOf(n); return i >= 0 ? argv[i + 1] : d; };

const ROOT = fileURLToPath(new URL('..', import.meta.url)).replace(/[\\/]+$/, '');
const ENGINE_SRC = arg('--src', 'D:\\code\\maptalks\\maptalks.js\\packages');
const KEEP = flag('--keep');
const USE_WORKTREE = flag('--worktree');

const TMP = join(tmpdir(), `maptalks-docs-portable-${process.pid}`);
const REPO = join(TMP, 'repo');
const ENGINE = join(TMP, 'engine');

const run = (cmd, args, cwd) => {
  const r = spawnSync(cmd, args, { cwd, encoding: 'utf8', shell: false });
  return { code: r.status, out: r.stdout || '', err: r.stderr || '' };
};
const runInherit = (cmd, args, cwd) => {
  const r = spawnSync(cmd, args, { cwd, stdio: 'inherit', shell: false });
  return r.status;
};

const skipDir = new Set(['node_modules', '.git', 'dist', '.vitepress']);
/** 递归复制目录，并把文本文件里的 CRLF/CR 归一为 LF */
function copyNormalized(src, dst) {
  mkdirSync(dst, { recursive: true });
  for (const e of readdirSync(src, { withFileTypes: true })) {
    if (skipDir.has(e.name)) continue;
    const s = join(src, e.name), d = join(dst, e.name);
    if (e.isDirectory()) { copyNormalized(s, d); continue; }
    if (!e.isFile()) continue;
    const buf = readFileSync(s);
    const isText = !/\0/.test(buf.subarray(0, 4096).toString('latin1'));
    if (isText && buf.includes(0x0d)) writeFileSync(d, buf.toString('utf8').replace(/\r\n?/g, '\n'), 'utf8');
    else copyFileSync(s, d);
  }
}

console.log(`临时目录：${TMP}`);
rmSync(TMP, { recursive: true, force: true });
mkdirSync(REPO, { recursive: true });

// 1) 站点仓库（LF 工作区）
if (USE_WORKTREE) {
  console.log('模式：--worktree（用当前工作区文件）');
  const ls = run('git', ['ls-files', '-z'], ROOT);
  if (ls.code !== 0) { console.error('git ls-files 失败：' + ls.out); process.exit(1); }
  const files = ls.out.split('\0').filter(Boolean);
  for (const f of files) {
    const s = join(ROOT, f), d = join(REPO, f);
    if (!existsSync(s) || !statSync(s).isFile()) continue;
    mkdirSync(dirname(d), { recursive: true });
    const buf = readFileSync(s);
    const isText = !/\0/.test(buf.subarray(0, 4096).toString('latin1'));
    if (isText && buf.includes(0x0d)) writeFileSync(d, buf.toString('utf8').replace(/\r\n?/g, '\n'), 'utf8');
    else copyFileSync(s, d);
  }
  run('git', ['init', '-q'], REPO);
  run('git', ['add', '-A'], REPO);
  run('git', ['-c', 'user.email=x@y', '-c', 'user.name=x', 'commit', '-qm', 'baseline'], REPO);
} else {
  console.log('模式：默认（克隆已提交状态，等价 CI）');
  const url = pathToFileURL(ROOT).href;
  const r = run('git', ['-c', 'core.autocrlf=false', 'clone', '-q', '--depth', '1', url, REPO], undefined);
  if (r.code !== 0) { console.error('克隆失败：' + r.out); process.exit(1); }
}

// 2) 引擎源码副本（归一为 LF）
if (!existsSync(ENGINE_SRC)) { console.error(`引擎源码不存在：${ENGINE_SRC}`); process.exit(1); }
copyNormalized(ENGINE_SRC, join(ENGINE, 'packages'));
const enginePkgs = join(ENGINE, 'packages');
const probe = join(enginePkgs, 'maptalks', 'src', 'map', 'handler', 'Map.Touch.ts');
if (existsSync(probe) && readFileSync(probe).includes(0x0d)) { console.error('引擎副本归一失败（仍有 CR）'); process.exit(1); }
console.log('引擎副本已归一为 LF');

// 3) 跑生成链
console.log('— inventory / gen / wire');
let code = runInherit(process.execPath, ['scripts/api/inventory.mjs', '--src', enginePkgs], REPO);
if (code !== 0) { console.error('inventory 失败'); process.exit(code || 1); }
code = runInherit(process.execPath, ['scripts/api/gen-includes.mjs'], REPO);
if (code !== 0) { console.error('gen-includes 失败'); process.exit(code || 1); }
code = runInherit(process.execPath, ['scripts/api/wire-pages.mjs'], REPO);
if (code !== 0) { console.error('wire-pages 失败'); process.exit(code || 1); }

// 4) 比较
const stat = run('git', ['diff', '--stat', '--', 'docs/api', 'docs/en/api'], REPO);
const diff = run('git', ['diff', '--', 'docs/api', 'docs/en/api'], REPO);
if (!stat.out.trim()) {
  console.log('\nportable: OK（生成产物与检出内容零差异）');
  if (!KEEP) rmSync(TMP, { recursive: true, force: true });
  process.exit(0);
}
console.log('\n== 差异摘要 ==');
console.log(stat.out.trim());
console.log('\n== diff 前 120 行 ==');
console.log(diff.out.split('\n').slice(0, 120).join('\n'));
console.log(`\nportable: FAIL（临时目录${KEEP ? '保留在 ' + TMP : '已清理'}）`);
if (!KEEP) rmSync(TMP, { recursive: true, force: true });
process.exit(1);
