/**
 * scripts/api/zh-todo.mjs — 导出"缺中文描述"的成员清单（供批量补写中文）
 *
 * 覆盖范围（缺一不可，早期版本漏了后三类）：
 *   1) 页面直接映射的类/命名空间的实例成员
 *   2) 类/命名空间的**静态**成员
 *   3) **函数模块**（util / DomUtil / StringUtil 这类 `export function` 集合）的导出函数
 *   4) 父类（只出现在继承链里、没有独立页面的实体，如 Vector3DLayer）的成员
 *
 * 产物：.vitepress/cache/api/zh-todo.json  [{ key, entity, kind, name, signature, file, line, en }]
 * 补写结果写入 scripts/api/zh-overrides.json 的 {"<key>": "中文"}
 *
 * 用法：node scripts/api/zh-todo.mjs [--emit]
 */
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { CACHE, loadPageMap, writeJson, log } from './lib.mjs';

const MODEL = JSON.parse(readFileSync(join(CACHE, 'api-model.json'), 'utf8'));
const MAP = loadPageMap();
const cls = new Map(MODEL.classes.map((c) => [c.name, c]));
const ns = new Map(MODEL.namespaces.map((n) => [n.name, n]));
const fnsByFile = new Map(MODEL.functionFiles.map((f) => [f.file, f.fns]));

// 页面直接指向的实体 + 链上所有父类（父类片段也会被引用到页面上）
const wantedClasses = new Set();
const wantedNamespaces = new Set();
const functionPages = [];         // { target, file }
for (const e of Object.values(MAP || {})) {
  if (e.kind === 'class') {
    wantedClasses.add(e.target);
    for (const a of cls.get(e.target)?.chain || []) wantedClasses.add(a);
  } else if (e.kind === 'namespace') {
    wantedNamespaces.add(e.target);
    for (const m of e.merge || []) wantedNamespaces.add(m);
  } else if (e.kind === 'functions') {
    functionPages.push({ target: e.target, file: e.file });
  }
}

const items = [];
const push = (entity, kind, m) => {
  const zh = m.zh || m.doc?.zh || '';
  if (zh) return;
  items.push({
    key: `${entity}.${m.n ?? m.name}`, entity, kind, name: m.n ?? m.name,
    signature: m.sig || m.signature || '', line: m.line, en: m.en || m.doc?.en || '',
  });
};

for (const name of wantedClasses) {
  const c = cls.get(name);
  if (!c) continue;
  for (const m of c.methods) push(name, 'class', m);
  for (const m of c.statics || []) push(name, 'class-static', m);
}
for (const name of wantedNamespaces) {
  const n = ns.get(name);
  if (!n) continue;
  for (const m of n.members) { if (!m.isPrivate) push(name, 'namespace', m); }
}
for (const { target, file } of functionPages) {
  for (const m of fnsByFile.get(file) || []) push(target, 'functions', m);
}

const withEn = items.filter((x) => x.en);
log(`缺中文的成员 ${items.length} 个：有英文注释 ${withEn.length}，无任何注释 ${items.length - withEn.length}`);
const byEntity = {};
for (const x of items) byEntity[x.entity] = (byEntity[x.entity] || 0) + 1;
log('  最多的实体: ' + Object.entries(byEntity).sort((a, b) => b[1] - a[1]).slice(0, 12).map(([k, v]) => `${k}(${v})`).join(', '));
if (process.argv.includes('--emit')) {
  writeJson(join(CACHE, 'zh-todo.json'), items);
  log('  已写入 .vitepress/cache/api/zh-todo.json');
}
