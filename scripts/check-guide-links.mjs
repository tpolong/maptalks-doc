/**
 * scripts/check-guide-links.mjs — 站内链接 / 锚点 / include / 示例深链体检
 *
 * 覆盖 docs/**\/*.md（中英双语树），检查四类问题：
 *   1. 站内链接（/guide/x、/api/x、/examples/…、相对路径）指向的页面是否存在；
 *   2. 链接带的 #锚点 在该页是否存在（按 VitePress 的 slug 规则近似复现）；
 *   3. `<!--@include: path -->` 片段文件是否存在；
 *   4. /examples/#<一级>/<二级>/<示例> 深链对应目录是否真实存在（且含 index.html）。
 *
 * 只读；发现死链以非 0 退出码结束，便于接入流程。
 */
import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join, dirname, normalize } from 'node:path';
import { ROOT } from './api/lib.mjs';

const DOCS = join(ROOT, 'docs');

const mdFiles = [];
(function walk(d) {
  for (const e of readdirSync(d, { withFileTypes: true })) {
    if (e.name === 'public' || e.name === 'node_modules') continue;
    const p = join(d, e.name);
    if (e.isDirectory()) walk(p);
    else if (e.name.endsWith('.md')) mdFiles.push(p);
  }
})(DOCS);

/** VitePress 默认 slug：小写、空白转 -、去掉标点（保留 - _ 与中日韩文字） */
const slugify = (s) => s
  .replace(/<[^>]*>/g, '')
  .replace(/`([^`]*)`/g, '$1')
  .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
  .replace(/[*_~]/g, '')
  .trim()
  .toLowerCase()
  .replace(/\s+/g, '-')
  .replace(/[^\p{L}\p{N}\-_]/gu, '');

/** 取一个 md 文件里全部可用锚点 */
function anchorsOf(file) {
  const txt = readFileSync(file, 'utf8');
  const set = new Set();
  const seen = new Map();
  // 注意：仓库里的 md 是 CRLF，必须按 \r?\n 切行——JS 的 `.` 不匹配 `\r`，
  // 直接用 split('\n') 会让 /^#{1,6}\s+(.*)$/ 一条标题都匹配不到。
  for (const line of txt.split(/\r?\n/)) {
    const h = line.match(/^#{1,6}\s+(.*)$/);
    if (h) {
      const explicit = h[1].match(/\{#([^}]+)\}\s*$/);
      let s = slugify(explicit ? h[1].replace(/\{#[^}]+\}\s*$/, '') : h[1]);
      if (s) {
        const n = seen.get(s) || 0; seen.set(s, n + 1);
        set.add(n === 0 ? s : `${s}-${n}`);
      }
    }
    for (const m of line.matchAll(/<a\s+id="([^"]+)"/g)) set.add(m[1]);
    for (const m of line.matchAll(/<h[1-6]\s+id="([^"]+)"/g)) set.add(m[1]);
  }
  return set;
}

const anchorCache = new Map();
const getAnchors = (f) => {
  if (!anchorCache.has(f)) anchorCache.set(f, anchorsOf(f));
  return anchorCache.get(f);
};

/** 路由（/guide/x）→ 磁盘文件 */
function routeToFile(route) {
  const clean = decodeURIComponent(route.replace(/^\/+|\/+$/g, ''));
  const candidates = clean === ''
    ? [join(DOCS, 'index.md')]
    : [join(DOCS, clean + '.md'), join(DOCS, clean, 'index.md')];
  return candidates.find((c) => existsSync(c) && statSync(c).isFile()) || null;
}

const problems = [];
const stats = { links: 0, anchors: 0, includes: 0, deepLinks: 0 };

for (const src of mdFiles) {
  const rel = src.replace(ROOT + '\\', '').replace(/\\/g, '/');
  const txt = readFileSync(src, 'utf8');
  const lines = txt.split(/\r?\n/);

  // 3. include 片段
  for (const [i, line] of lines.entries()) {
    const m = line.match(/<!--\s*@include:\s*([^\s]+)\s*-->/);
    if (!m) continue;
    stats.includes++;
    const target = m[1].startsWith('/') ? join(DOCS, m[1]) : normalize(join(dirname(src), m[1]));
    if (!existsSync(target)) problems.push(`${rel}:${i + 1}  include 片段不存在 → ${m[1]}`);
  }

  // 1./2./4. markdown 链接
  for (const [i, line] of lines.entries()) {
    if (/^\s*(```|~~~)/.test(line)) continue; // 跳过围栏代码行（粗过滤）
    for (const m of line.matchAll(/\[[^\]]*\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g)) {
      const raw = m[1];
      if (/^(https?:|mailto:|#)/.test(raw)) {
        // 纯页内锚点也校验
        if (raw.startsWith('#')) {
          stats.anchors++;
          const a = raw.slice(1);
          if (a && !getAnchors(src).has(a)) problems.push(`${rel}:${i + 1}  页内锚点不存在 → ${raw}`);
        }
        continue;
      }
      stats.links++;
      const [path, hash] = raw.split('#');
      const hasExt = /\.[a-z0-9]+$/i.test(path);
      let file = null;
      if (path.startsWith('/')) {
        if (hasExt) {
          // 静态资源：VitePress 下 /x 指向 docs/public/x，也允许 docs/x
          file = [join(DOCS, 'public', path.slice(1)), join(DOCS, path.slice(1))].find(existsSync) || null;
        } else {
          file = routeToFile(path);
        }
      } else {
        const abs = normalize(join(dirname(src), path));
        file = existsSync(abs) ? abs : (!hasExt ? abs + '.md' : abs);
        if (!existsSync(file)) {
          const idx = join(normalize(join(dirname(src), path)), 'index.md');
          if (existsSync(idx)) file = idx; else file = null;
        }
      }
      if (!file) { problems.push(`${rel}:${i + 1}  链接目标不存在 → ${raw}`); continue; }

      // 4. 示例深链：/examples/#<一级>/<二级>/<示例> 的 hash 是 REPL 路由，不是锚点
      if (path.replace(/^\/(en\/)?/, '').startsWith('examples') && hash) {
        stats.deepLinks++;
        const parts = hash.split('/').filter(Boolean);
        if (parts.length >= 3) {
          const dir = join(DOCS, 'public', 'examples', parts[0], parts[1], parts[2]);
          if (!existsSync(dir)) problems.push(`${rel}:${i + 1}  示例目录不存在 → #${hash}`);
          else if (!existsSync(join(dir, 'index.html'))) problems.push(`${rel}:${i + 1}  示例缺 index.html → #${hash}`);
        }
        continue;
      }

      // 2. 锚点
      if (hash && existsSync(file)) {
        stats.anchors++;
        if (!getAnchors(file).has(hash)) {
          problems.push(`${rel}:${i + 1}  锚点不存在 → ${raw}`);
        }
      }
    }
  }
}

console.log(`扫描 ${mdFiles.length} 个 md：站内链接 ${stats.links}、锚点 ${stats.anchors}、include ${stats.includes}、示例深链 ${stats.deepLinks}`);
if (!problems.length) {
  console.log('全部通过。');
} else {
  console.log(`\n发现 ${problems.length} 处问题：`);
  for (const p of problems) console.log('  ' + p);
  process.exitCode = 1;
}
