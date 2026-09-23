/**
 * scripts/api/zh-batches.mjs — 把"缺中文"清单切成若干批，供并行补写
 *
 * 产物：.vitepress/cache/api/zh-batches/<NN>.json   每批 ≤ BATCH 条
 *       .vitepress/cache/api/zh-parts/               补写结果目录（每批一个文件）
 *
 * 用法：node scripts/api/zh-batches.mjs [每批条数，默认 20]
 */
import { mkdirSync, rmSync, readFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { CACHE, writeJson, log } from './lib.mjs';

const BATCH = Number(process.argv[2] || 20);
const items = JSON.parse(readFileSync(join(CACHE, 'zh-todo.json'), 'utf8'));

// 按实体分组，尽量让同一批里的成员来自同一批文件（子代理读文件更集中）
const byEntity = new Map();
for (const it of items) {
  if (!byEntity.has(it.entity)) byEntity.set(it.entity, []);
  byEntity.get(it.entity).push(it);
}
const flat = [];
for (const [, list] of [...byEntity.entries()].sort((a, b) => b[1].length - a[1].length)) flat.push(...list);

const dir = join(CACHE, 'zh-batches');
const parts = join(CACHE, 'zh-parts');
rmSync(dir, { recursive: true, force: true });
mkdirSync(dir, { recursive: true });
mkdirSync(parts, { recursive: true });

const n = Math.ceil(flat.length / BATCH);
for (let i = 0; i < n; i++) {
  const chunk = flat.slice(i * BATCH, (i + 1) * BATCH);
  writeJson(join(dir, `${String(i).padStart(2, '0')}.json`), chunk);
}
log(`共 ${flat.length} 条 → ${n} 批（每批 ${BATCH}），目录 .vitepress/cache/api/zh-batches/`);
log(`批号：${Array.from({ length: n }, (_, i) => String(i).padStart(2, '0')).join(' ')}`);
