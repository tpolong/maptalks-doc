/**
 * scripts/api/zh-todo.mjs — 导出"缺中文描述"的成员清单（供批量补写中文）
 *
 * 产物：.vitepress/cache/api/zh-todo.json  [{ key, entity, kind, name, signature, file, line, en }]
 *       key = "<Entity>.<member>"，补写结果写入 scripts/api/zh-overrides.json 的 {"<key>": "中文"}
 *
 * 用法：node scripts/api/zh-todo.mjs [--emit]
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { CACHE, loadPageMap, writeJson, log } from './lib.mjs';

const MODEL = JSON.parse(readFileSync(join(CACHE, 'api-model.json'), 'utf8'));
const MAP = loadPageMap();
const wanted = new Set();
for (const e of Object.values(MAP || {})) {
  if (e.kind === 'class' || e.kind === 'namespace' || e.kind === 'functions') wanted.add(`${e.kind}:${e.target}`);
}

const items = [];
for (const c of MODEL.classes) {
  if (!wanted.has(`class:${c.name}`)) continue;
  for (const m of c.methods) {
    if (m.zh) continue;
    items.push({ key: `${c.name}.${m.n}`, entity: c.name, kind: 'class', name: m.n, signature: m.sig, file: c.rel, line: m.line, en: m.en || '' });
  }
}
for (const n of MODEL.namespaces) {
  if (!wanted.has(`namespace:${n.name}`)) continue;
  for (const m of n.members) {
    if (m.zh) continue;
    items.push({ key: `${n.name}.${m.n}`, entity: n.name, kind: 'namespace', name: m.n, signature: m.sig, file: n.rel, line: m.line, en: m.en || '' });
  }
}
const withEn = items.filter((x) => x.en);
const noEn = items.filter((x) => !x.en);
log(`缺中文描述的成员 ${items.length} 个：有英文注释 ${withEn.length}，无任何注释 ${noEn.length}`);
const byEntity = {};
for (const x of items) byEntity[x.entity] = (byEntity[x.entity] || 0) + 1;
log('  最多的实体: ' + Object.entries(byEntity).sort((a, b) => b[1] - a[1]).slice(0, 12).map(([k, v]) => `${k}(${v})`).join(', '));
if (process.argv.includes('--emit')) {
  writeJson(join(CACHE, 'zh-todo.json'), items);
  log(`  已写入 .vitepress/cache/api/zh-todo.json`);
}
