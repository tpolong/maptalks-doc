/**
 * scripts/check-assets.mjs — 示例与静态资产一致性门禁
 *
 * 校验：
 *   1) 每个示例目录（三级 <cat>/<sub>/<name>）必须含 index.html
 *   2) 示例 ↔ 缩略图 1:1（public/thumbnails/<cat>_<sub>_<name>.webp）
 *   3) 缩略图不得有孤儿（没有对应示例）
 *   4) 物理 (cat/sub) 与 docs/examples/taxonomy.ts 的 SUBCATEGORIES 必须双向一致
 *
 * 用法：node scripts/check-assets.mjs
 * 退出码：有 FAIL 即 1
 */
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { ROOT } from './api/lib.mjs';

const EX = join(ROOT, 'docs', 'public', 'examples');
const THUMBS = join(ROOT, 'docs', 'public', 'thumbnails');
const TAXONOMY = join(ROOT, 'docs', 'examples', 'taxonomy.ts');

const fail = [];
const warn = [];
const dirs = (p) => readdirSync(p, { withFileTypes: true }).filter((d) => d.isDirectory()).map((d) => d.name);

const examples = [];
const pairs = new Map();
for (const cat of dirs(EX)) {
  if (cat === 'resources') continue;
  for (const sub of dirs(join(EX, cat))) {
    for (const name of dirs(join(EX, cat, sub))) {
      if (!existsSync(join(EX, cat, sub, name, 'index.html'))) fail.push(`示例缺 index.html：${cat}/${sub}/${name}`);
      examples.push({ cat, sub, name });
      pairs.set(`${cat}/${sub}`, (pairs.get(`${cat}/${sub}`) || 0) + 1);
    }
  }
}

const thumbFiles = readdirSync(THUMBS);
const thumbs = new Set(thumbFiles.filter((f) => f.endsWith('.webp')));
const expected = new Set(examples.map((e) => `${e.cat}_${e.sub}_${e.name}.webp`));
for (const f of expected) if (!thumbs.has(f)) fail.push(`缺缩略图：${f}`);
for (const f of thumbs) if (!expected.has(f)) fail.push(`孤儿缩略图：${f}`);
const others = thumbFiles.filter((f) => !f.endsWith('.webp'));
if (others.length) warn.push(`thumbnails 下有非 webp 文件：${others.slice(0, 5).join(', ')}${others.length > 5 ? ` …共 ${others.length}` : ''}`);

const tax = readFileSync(TAXONOMY, 'utf8');
const cats = new Set([...tax.matchAll(/\{\s*key:\s*"([^"]+)"/g)].map((m) => m[1]));
const subs = new Set([...tax.matchAll(/\{\s*cat:\s*"([^"]+)",\s*sub:\s*"([^"]+)"/g)].map((m) => `${m[1]}/${m[2]}`));
for (const p of pairs.keys()) if (!subs.has(p)) fail.push(`taxonomy 未登记二级分类：${p}`);
for (const p of subs) if (!pairs.has(p)) fail.push(`taxonomy 登记了不存在的二级分类：${p}`);
for (const p of pairs.keys()) {
  const c = p.split('/')[0];
  if (!cats.has(c)) fail.push(`taxonomy 未登记一级分类：${c}`);
}

console.log(`示例 ${examples.length}；缩略图 ${thumbs.size}；一级分类 ${cats.size}；二级分类 ${pairs.size}（taxonomy ${subs.size}）`);
for (const w of warn) console.log(`  WARN ${w}`);
if (fail.length) {
  console.log(`\n== FAIL（${fail.length}）==`);
  for (const f of fail.slice(0, 40)) console.log('  ' + f);
  if (fail.length > 40) console.log(`  …还有 ${fail.length - 40} 条`);
  process.exit(1);
}
console.log('资产一致性：全部通过。');
