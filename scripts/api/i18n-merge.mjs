/**
 * scripts/api/i18n-merge.mjs — 合并 i18n-parts/*.json → scripts/api/i18n-overrides.json
 *
 * 覆盖文件形如 { "GLTFMarker.setUrl": { "zh": "设置模型资源地址", "en": "Sets the model url" } }，
 * gen-includes.mjs 生成片段时按语言分别取用（优先于源码 JSDoc 与 zh-overrides.json）。
 *
 * 用法：node scripts/api/i18n-merge.mjs [--write]
 */
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { CACHE, ROOT, writeJson, log } from './lib.mjs';

const partsDir = join(CACHE, 'i18n-parts');
const outPath = join(ROOT, 'scripts', 'api', 'i18n-overrides.json');
const cur = existsSync(outPath) ? JSON.parse(readFileSync(outPath, 'utf8')) : {};
const before = Object.keys(cur).length;

let added = 0, updated = 0, bad = 0, files = 0;
for (const f of readdirSync(partsDir).filter((x) => x.endsWith('.json')).sort()) {
  let obj;
  try { obj = JSON.parse(readFileSync(join(partsDir, f), 'utf8')); }
  catch (e) { bad++; log(`  !! 解析失败 ${f}: ${e.message}`); continue; }
  files++;
  for (const [k, v] of Object.entries(obj)) {
    const zh = typeof v === 'string' ? v : (v?.zh || '');
    const en = typeof v === 'object' ? (v?.en || '') : '';
    if (!zh && !en) { bad++; continue; }
    const prev = cur[k] || {};
    const next = { zh: prev.zh || zh, en: prev.en || en };
    if (!prev.zh && !prev.en) added++;
    else if (prev.zh !== next.zh || prev.en !== next.en) updated++;
    cur[k] = next;
  }
}
const sorted = {};
for (const k of Object.keys(cur).sort()) sorted[k] = cur[k];
log(`合并 ${files} 个分片：${before} → ${Object.keys(sorted).length} 条（新增 ${added}，补全 ${updated}，异常 ${bad}）`);
const both = Object.values(sorted).filter((v) => v.zh && v.en).length;
log(`  中英齐备 ${both} 条；仅中文 ${Object.values(sorted).filter((v) => v.zh && !v.en).length}；仅英文 ${Object.values(sorted).filter((v) => !v.zh && v.en).length}`);
if (process.argv.includes('--write')) {
  writeJson(outPath, sorted);
  log('  已写入 scripts/api/i18n-overrides.json');
}
