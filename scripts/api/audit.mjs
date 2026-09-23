/**
 * scripts/api/audit.mjs — API 页面内容体检（中英全部页面）
 *
 * 对每个页面检查（**分章节统计**，避免把 options 表当成方法）：
 *   1) 方法覆盖：源码里该类（含继承链）的公开实例方法，是否都在页面上出现（框架基类单列，不算错）
 *   2) 静态方法覆盖
 *   3) 事件覆盖
 *   4) 解释齐全度：已列条目里有多少是占位说明
 *   5) 反向校验：`<summary>` 里的成员名在源码模型中是否存在（非标识符的折叠块算散文，不计）
 *   6) 中英对称：同一页中英条目数是否一致
 *
 * 用法：node scripts/api/audit.mjs [--json] [--only <页名>]
 * 产物：.vitepress/cache/api/audit.txt / audit.json
 */
import { readFileSync, existsSync, readdirSync, writeFileSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { ROOT, CACHE, loadPageMap, writeJson, log, documentedBySection, sectionBodies } from './lib.mjs';

const MODEL = JSON.parse(readFileSync(join(CACHE, 'api-model.json'), 'utf8'));
const MAP = loadPageMap();
const cls = new Map(MODEL.classes.map((c) => [c.name, c]));
const ns = new Map(MODEL.namespaces.map((n) => [n.name, n]));
const fnsByFile = new Map(MODEL.functionFiles.map((f) => [f.file, f.fns]));
const events = MODEL.events;

/** 框架基类/混入：页面只列名字、不展开条目（与 wire-pages.mjs 的 FRAMEWORK 保持一致） */
const FRAMEWORK = new Set(['Base', 'Class', 'Eventable', 'JSONAble', 'Handlerable', 'Renderable', 'Menuable', 'EventableMixin']);
const PLACEHOLDER = ['源码未提供文字说明', 'No prose description in source'];
const isPlaceholder = (s) => PLACEHOLDER.some((p) => (s || '').includes(p));
const IDENT = /^[A-Za-z_$][\w$]*$/;

function expand(pageFile) {
  if (!existsSync(pageFile)) return { txt: '', missing: [] };
  let txt = readFileSync(pageFile, 'utf8');
  const missing = [];
  for (const m of [...txt.matchAll(/<!--@include:\s*([^\s>]+?)\s*-->/g)]) {
    const p = resolve(dirname(pageFile), m[1]);
    if (!existsSync(p)) { missing.push(m[1]); continue; }
    txt = txt.replace(m[0], readFileSync(p, 'utf8'));
  }
  return { txt, missing };
}

/** 解析 `<details><summary>…</summary>…</details>`：返回标识符条目与散文块 */
function parseDetails(txt) {
  const members = [], prose = [];
  for (const m of txt.matchAll(/<details><summary>([^<]+)<\/summary>([\s\S]*?)<\/details>/g)) {
    const summary = m[1].trim();
    const body = m[2].replace(/<[^>]+>/g, '\n').split('\n').map((x) => x.trim()).filter(Boolean);
    const name = summary.split('(')[0].trim();
    // 只把「整行就是标签」的行当标签：以「返回」「Returns」开头的说明是正文，
    // 否则「返回分析当前是否启用」会被误判成没有说明
    const LABEL = /^(参数|返回|触发事件|参数属性|属性名|Properties|Returns|Fires|Property|Event properties)\s*[:：]?$/;
    const desc = body.find((l) => !LABEL.test(l)) || '';
    if (!IDENT.test(name)) { prose.push({ summary }); continue; }
    members.push({ name, summary, desc, hasDesc: desc.length > 0 && !isPlaceholder(desc) });
  }
  return { members, prose };
}

/** 章节内出现的成员名：`<summary>` 条目 + **任意反引号标识符**
 *  （与 gen-includes 的"已写"口径一致；事件汇总表格常见 `| \`a\` / \`b\` |` 多名字单元格） */
function listedNames(body) {
  const s = new Set();
  for (const m of body.matchAll(/<summary>([^<]+)<\/summary>/g)) s.add(m[1].split('(')[0].trim());
  for (const m of body.matchAll(/`([A-Za-z_$][\w$]*)`/g)) s.add(m[1]);
  return s;
}

const only = (() => { const i = process.argv.indexOf('--only'); return i >= 0 ? process.argv[i + 1] : null; })();
const rows = [];

for (const lang of ['zh', 'en']) {
  const dir = join(ROOT, lang === 'zh' ? 'docs' : 'docs/en', 'api');
  for (const f of readdirSync(dir).filter((x) => x.endsWith('.md') && x !== 'index.md')) {
    const page = f.replace(/\.md$/, '');
    if (only && page !== only) continue;
    const { txt, missing } = expand(join(dir, f));
    const e = MAP?.[page] || {};
    const byKind = sectionBodies(txt);
    const doc = documentedBySection(txt);

    const dm = parseDetails(byKind.methods);
    const ds = parseDetails(byKind.statics);
    const dev = parseDetails(byKind.events);
    const docMethods = doc.methods;
    const docStatics = doc.statics;
    const docEvents = doc.events;
    const docOptions = doc.options;

    // 源码侧期望
    let srcMethods = [], srcStatics = [], srcEvents = [], fwMethods = [], fwStatics = [];
    if (e.kind === 'class') {
      const c = cls.get(e.target);
      const chain = (c?.chain || [e.target]).slice(1);
      for (const a of chain) {
        const ac = cls.get(a);
        if (!ac) continue;
        const bucket = FRAMEWORK.has(a) ? fwMethods : srcMethods;
        bucket.push(...ac.methods.map((m) => m.n));
        (FRAMEWORK.has(a) ? fwStatics : srcStatics).push(...(ac.statics || []).map((m) => m.n));
        srcEvents.push(...events.filter((x) => x.owner === a).map((x) => x.name));
      }
      const own = cls.get(e.target);
      srcMethods = [...new Set([...srcMethods, ...(own?.methods || []).map((m) => m.n)])];
      srcStatics = [...new Set([...srcStatics, ...(own?.statics || []).map((m) => m.n)])];
      srcEvents = [...new Set([...srcEvents, ...events.filter((x) => x.owner === e.target).map((x) => x.name)])];
    } else if (e.kind === 'namespace') {
      for (const n of [e.target, ...(e.merge || [])]) srcMethods.push(...(ns.get(n)?.members || []).map((m) => m.n));
      srcMethods = [...new Set(srcMethods)];
    } else if (e.kind === 'functions') {
      srcMethods = [...new Set((fnsByFile.get(e.file) || []).map((m) => m.n))];
    }

    const missMethods = srcMethods.filter((n) => !docMethods.has(n));
    const missStatics = srcStatics.filter((n) => !docStatics.has(n));
    const missEvents = srcEvents.filter((n) => !docEvents.has(n));
    const known = new Set([...srcMethods, ...srcStatics, ...srcEvents, ...fwMethods, ...fwStatics, ...docOptions,
      'fromJSON', 'toJSON', 'on', 'off', 'fire', 'once', 'listens']);
    const unknown = [...dm.members, ...ds.members, ...dev.members].map((x) => x.name).filter((n) => !known.has(n));
    const noDesc = [...dm.members, ...ds.members].filter((x) => !x.hasDesc).map((x) => x.name);
    const noDescEvents = dev.members.filter((x) => !x.hasDesc).map((x) => x.name);

    rows.push({
      lang, page, kind: e.kind || 'prose', target: e.target || '',
      entries: dm.members.length + ds.members.length + dev.members.length,
      methods: dm.members.length, statics: ds.members.length, events: dev.members.length,
      srcMethods: srcMethods.length, srcEvents: srcEvents.length,
      missMethods, missStatics, missEvents, unknown: [...new Set(unknown)], noDesc, noDescEvents,
      includeMissing: missing, proseDetails: dm.prose.length,
      sections: Object.keys(byKind),
    });
  }
}

const byPage = new Map();
for (const r of rows) { if (!byPage.has(r.page)) byPage.set(r.page, {}); byPage.get(r.page)[r.lang] = r; }
for (const [, pair] of byPage) {
  if (pair.zh && pair.en && pair.zh.entries !== pair.en.entries) {
    pair.zh.asym = pair.en.entries - pair.zh.entries;
    pair.en.asym = pair.zh.entries - pair.en.entries;
  }
}

const bad = (r) => r.missMethods.length || r.missStatics.length || r.missEvents.length
  || r.unknown.length || r.noDesc.length || r.noDescEvents.length || r.includeMissing.length || r.asym;
const problems = rows.filter(bad);

const T = [];
T.push(`== 汇总（${rows.length} 个页面文件 = ${rows.length / 2} 页 × 中英）==`);
T.push(`缺方法 ${rows.reduce((a, r) => a + r.missMethods.length, 0)}；缺静态 ${rows.reduce((a, r) => a + r.missStatics.length, 0)}；缺事件 ${rows.reduce((a, r) => a + r.missEvents.length, 0)}`);
T.push(`无解释条目 ${rows.reduce((a, r) => a + r.noDesc.length + r.noDescEvents.length, 0)}；源码查不到 ${rows.reduce((a, r) => a + r.unknown.length, 0)}；include 缺失 ${rows.reduce((a, r) => a + r.includeMissing.length, 0)}`);
T.push(`有问题的页面 ${problems.length} / ${rows.length}`);
T.push('');
T.push('== 逐页问题 ==');
for (const r of problems.sort((a, b) => (b.missMethods.length + b.missEvents.length + b.noDesc.length) - (a.missMethods.length + a.missEvents.length + a.noDesc.length))) {
  T.push([r.page.padEnd(26), r.lang, r.kind.padEnd(9), (r.target || '-').padEnd(20),
    `m${r.methods}/${r.srcMethods}`, `ev${r.events}/${r.srcEvents}`,
    `缺m${r.missMethods.length}`, `缺s${r.missStatics.length}`, `缺ev${r.missEvents.length}`,
    `无解释${r.noDesc.length + r.noDescEvents.length}`, `unk${r.unknown.length}`,
    r.asym ? `不对称${r.asym > 0 ? '+' : ''}${r.asym}` : '', r.includeMissing.length ? 'INC' : ''].join(' '));
}
T.push('');
T.push('== 明细 ==');
for (const r of problems) {
  T.push(`${r.lang}/${r.page} [${r.target}] 方法 ${r.methods}/${r.srcMethods}，事件 ${r.events}/${r.srcEvents}`);
  if (r.missMethods.length) T.push(`  缺方法(${r.missMethods.length}): ${r.missMethods.slice(0, 30).join(', ')}`);
  if (r.missStatics.length) T.push(`  缺静态(${r.missStatics.length}): ${r.missStatics.slice(0, 15).join(', ')}`);
  if (r.missEvents.length) T.push(`  缺事件(${r.missEvents.length}): ${r.missEvents.slice(0, 30).join(', ')}`);
  if (r.noDesc.length) T.push(`  方法无解释(${r.noDesc.length}): ${r.noDesc.slice(0, 30).join(', ')}`);
  if (r.noDescEvents.length) T.push(`  事件无解释(${r.noDescEvents.length}): ${r.noDescEvents.slice(0, 30).join(', ')}`);
  if (r.unknown.length) T.push(`  源码查不到: ${r.unknown.slice(0, 20).join(', ')}`);
  if (r.includeMissing.length) T.push(`  include 缺失: ${r.includeMissing.join(', ')}`);
}
writeFileSync(join(CACHE, 'audit.txt'), T.join('\n'), 'utf8');
if (process.argv.includes('--json')) writeJson(join(CACHE, 'audit.json'), rows);
log(T.slice(0, 4).join('\n'));
log('\n完整报告：.vitepress/cache/api/audit.txt');
