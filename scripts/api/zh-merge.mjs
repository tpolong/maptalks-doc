/**
 * scripts/api/zh-merge.mjs — 合并 zh-parts/*.json → scripts/api/zh-overrides.json
 *
 * zh-overrides.json 形如 { "GLTFMarker.setUrl": "设置模型资源地址" }，
 * 由 gen-includes.mjs 优先用于中文说明（覆盖源码里缺失/英文的注释）。
 *
 * 用法：node scripts/api/zh-merge.mjs
 */
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { CACHE, ROOT, writeJson, log } from './lib.mjs';

const partsDir = join(CACHE, 'zh-parts');
const todoPath = join(CACHE, 'zh-todo.json');
const outPath = join(ROOT, 'scripts', 'api', 'zh-overrides.json');

const todo = existsSync(todoPath) ? JSON.parse(readFileSync(todoPath, 'utf8')) : [];
const todoKeys = new Set(todo.map((x) => x.key));

const merged = {};
let files = 0, bad = 0, dupes = 0;
const seenIn = new Map();
for (const f of readdirSync(partsDir).filter((x) => x.endsWith('.json')).sort()) {
  let obj;
  try { obj = JSON.parse(readFileSync(join(partsDir, f), 'utf8')); }
  catch (e) { bad++; log(`  !! 解析失败 ${f}: ${e.message}`); continue; }
  files++;
  for (const [k, v] of Object.entries(obj)) {
    if (typeof v !== 'string' || !v.trim()) { bad++; log(`  !! 空值 ${f}: ${k}`); continue; }
    if (merged[k] !== undefined) { dupes++; continue; }
    merged[k] = v.trim();
    seenIn.set(k, f);
  }
}

const written = Object.keys(merged);
const missing = [...todoKeys].filter((k) => !(k in merged));
const extra = written.filter((k) => !todoKeys.has(k));
log(`分片 ${files} 个 → 本次 ${written.length} 条（重复跳过 ${dupes}，异常 ${bad}）`);
if (missing.length) log(`  本批未覆盖 ${missing.length} 条：${missing.slice(0, 12).join(', ')}${missing.length > 12 ? ' …' : ''}`);
if (extra.length) log(`  多出（不在待办清单里）${extra.length} 条：${extra.slice(0, 8).join(', ')}`);

if (process.argv.includes('--write')) {
  // **增量合并**：先读入现有 zh-overrides.json 再并入本次结果。
  // 不能只用分片并集重写——事件中文来自 zh-event-parts，分片里没有，重写会把它们删掉。
  const cur = existsSync(outPath) ? JSON.parse(readFileSync(outPath, 'utf8')) : {};
  const before = Object.keys(cur).length;
  let added = 0, updated = 0;
  for (const [k, v] of Object.entries(merged)) {
    if (cur[k] === undefined) added++;
    else if (cur[k] !== v) updated++;
    if (cur[k] === undefined) cur[k] = v;      // 已有的一律保留（人工修正优先于重跑结果）
  }
  const sorted = {};
  for (const k of Object.keys(cur).sort()) sorted[k] = cur[k];
  writeJson(outPath, sorted);
  log(`  已写入 scripts/api/zh-overrides.json：${before} → ${Object.keys(sorted).length} 条（新增 ${added}，保留旧值 ${updated}）`);
}
