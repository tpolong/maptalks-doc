/**
 * scripts/deploy-pages.mjs — 把构建产物镜像到产物仓库（跨平台，等价 robocopy /MIR）
 *
 * 规则：
 *   - 以 src 为准：dest 里多出来的文件/空目录会被删除（.git 与 .nojekyll 除外）
 *   - 只复制内容有变化的文件（先比大小，再比 sha256）
 *   - 保证 dest 根目录有 .nojekyll（GitHub Pages 跳过 Jekyll）
 *
 * 用法：
 *   node scripts/deploy-pages.mjs --src .vitepress/dist --dest ../tpolong.github.io
 *   node scripts/deploy-pages.mjs --src .vitepress/dist --dest ../tpolong.github.io --dry
 *
 * 退出码：0 成功（含"无变化"）；1 参数/IO 错误
 */
import { readdirSync, statSync, readFileSync, writeFileSync, copyFileSync, mkdirSync, rmSync, existsSync } from 'node:fs';
import { join, relative, dirname, resolve } from 'node:path';
import { createHash } from 'node:crypto';

const argv = process.argv.slice(2);
const arg = (n, d) => { const i = argv.indexOf(n); return i >= 0 ? argv[i + 1] : d; };
const SRC = resolve(arg('--src', '.vitepress/dist'));
const DEST = resolve(arg('--dest', '../tpolong.github.io'));
const DRY = argv.includes('--dry');
const NO_DELETE = argv.includes('--no-delete');
const SKIP_NAMES = new Set(['.git', '.nojekyll']);

if (!existsSync(SRC)) { console.error(`源目录不存在：${SRC}`); process.exit(1); }
if (!existsSync(DEST)) { console.error(`目标目录不存在：${DEST}`); process.exit(1); }

const sha = (f) => createHash('sha256').update(readFileSync(f)).digest('hex');

/** 递归收集文件（相对顶层目录的路径 → 绝对路径），跳过 .git */
function walk(root, dir = root, out = new Map()) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    if (SKIP_NAMES.has(e.name)) continue;
    const p = join(dir, e.name);
    if (e.isDirectory()) walk(root, p, out);
    else if (e.isFile()) out.set(relative(root, p).split('\\').join('/'), p);
  }
  return out;
}

const srcFiles = walk(SRC);
const destFiles = walk(DEST);
const stats = { added: 0, updated: 0, deleted: 0, unchanged: 0, bytes: 0 };

for (const [rel, srcPath] of srcFiles) {
  const destPath = join(DEST, rel);
  if (!existsSync(destPath)) {
    stats.added++;
    stats.bytes += statSync(srcPath).size;
    if (!DRY) { mkdirSync(dirname(destPath), { recursive: true }); copyFileSync(srcPath, destPath); }
    continue;
  }
  const a = statSync(srcPath), b = statSync(destPath);
  if (a.size === b.size && sha(srcPath) === sha(destPath)) { stats.unchanged++; continue; }
  stats.updated++;
  stats.bytes += a.size;
  if (!DRY) { mkdirSync(dirname(destPath), { recursive: true }); copyFileSync(srcPath, destPath); }
}

if (!NO_DELETE) {
  for (const [rel, destPath] of destFiles) {
    if (srcFiles.has(rel)) continue;
    stats.deleted++;
    if (!DRY) rmSync(destPath, { force: true });
  }
  // 清理空目录（自底向上，跳过根与 .git）
  if (!DRY) {
    const dirs = [];
    const rec = (d) => {
      for (const e of readdirSync(d, { withFileTypes: true })) {
        if (e.name === '.git') continue;
        const p = join(d, e.name);
        if (e.isDirectory()) { rec(p); dirs.push(p); }
      }
    };
    rec(DEST);
    for (const d of dirs.sort((x, y) => y.length - x.length)) {
      try { if (readdirSync(d).length === 0) rmSync(d, { recursive: true, force: true }); } catch { /* 忽略 */ }
    }
  }
}

if (!DRY && !existsSync(join(DEST, '.nojekyll'))) writeFileSync(join(DEST, '.nojekyll'), '');

console.log(`${DRY ? '[dry] ' : ''}镜像 ${SRC} → ${DEST}`);
console.log(`  新增 ${stats.added} / 更新 ${stats.updated} / 删除 ${stats.deleted} / 未变 ${stats.unchanged}；传输 ${(stats.bytes / 1024 / 1024).toFixed(1)} MB`);
if (stats.added + stats.updated + stats.deleted === 0) console.log('  产物无变化');
