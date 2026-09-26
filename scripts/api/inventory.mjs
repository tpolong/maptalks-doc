/**
 * scripts/api/inventory.mjs — P0：源码结构盘点（消费 scripts/api/page-map.json 作为权威映射）
 *
 * 用法：
 *   node scripts/api/inventory.mjs                # 全量抽取 + 建模 + 报告
 *   node scripts/api/inventory.mjs --no-extract   # 复用已有 raw/*.jsonl（快）
 *
 * 产物（.vitepress/cache/api/，git-ignored）：
 *   raw/*.jsonl         ast-grep 抽取
 *   api-model.json      类 / 成员 / 事件 / 命名空间 / options 模型
 *   api-coverage.txt    页面 × 源码 覆盖报告
 */
import { join } from 'node:path';
import { readFileSync, existsSync, writeFileSync } from 'node:fs';
import {
  CACHE, DEFAULT_SRC, ROOT, buildModel, extractRaw, findAstGrep, log, pageList, writeJson, loadPageMap,
  expandIncludes, writtenNames,
} from './lib.mjs';

const argv = process.argv.slice(2);
const arg = (k, d) => { const i = argv.indexOf(k); return i >= 0 ? argv[i + 1] : d; };
const SRC = arg('--src', DEFAULT_SRC);
const RAW = join(CACHE, 'raw');

// 源码路径 → 相对 packages/ 的 POSIX 路径（两端平台一致，page-map 的 file 字段即此形态）
const relToPackages = (p) => String(p).replace(/\\/g, '/').replace(/^.*\/packages\//, '');

log(`源码根：${SRC}`);
let raw;
if (argv.includes('--no-extract') && existsSync(join(RAW, 'ts-methods.jsonl'))) {
  log('复用已有 raw/*.jsonl');
  raw = {};
  const names = ['class-decls', 'class-abs', 'class-exprs', 'objlits', 'objlits-typed', 'methods', 'fields', 'signatures', 'objpairs', 'funcs'];
  for (const n of names) {
    for (const lang of ['ts', 'js']) {
      const p = join(RAW, `${lang}-${n}.jsonl`);
      const arr = existsSync(p)
        ? readFileSync(p, 'utf8').split('\n').filter((l) => l.trim().startsWith('{')).map((l) => { try { return JSON.parse(l); } catch { return null; } }).filter(Boolean)
        : [];
      raw[`${lang}:${n}`] = arr;
      raw[n] = [...(raw[n] || []), ...arr];
    }
  }
} else {
  const bin = findAstGrep();
  log(`ast-grep：${bin}`);
  raw = extractRaw(bin, SRC, RAW);
}

log('建模…');
const M = buildModel(raw);
log(`  类 ${M.classes.length}；成员 ${M.members.length}；事件 ${M.events.size}；命名空间 ${M.namespaces.size}；函数文件 ${M.functions.size}；options 定义 ${M.optionsOf.size}`);
const FN_BY_REL = new Map([...M.functions.entries()].map(([f, list]) => [relToPackages(f), list]));

const MAP = loadPageMap();
if (!MAP) log('!! 未找到 scripts/api/page-map.json（先跑 node scripts/api/init-page-map.mjs --write）');

// ---------- 每页覆盖 ----------
const nsByName = M.namespaces;
const evOf = (owner) => [...M.events.values()].filter((e) => e.owner === owner);
const uniq = (a) => [...new Set(a)];

const rows = [];
for (const p of pageList()) {
  const e = MAP?.[p] || {};
  const pageFile = join(ROOT, 'docs', 'api', `${p}.md`);
  const txt = expandIncludes(pageFile);          // 展开 include，避免把片段里的成员误判为缺失
  let enTxt = ''; try { enTxt = expandIncludes(join(ROOT, 'docs', 'en', 'api', `${p}.md`)); } catch { }
  const written = writtenNames(txt);
  let own = 0, ownZh = 0, ownEn = 0, ownNo = 0, inh = 0, evOwn = 0, evInh = 0, chain = '', missing = [];
  if (e.kind === 'class') {
    const c = M.byName.get(e.target);
    chain = c ? M.chainOf(e.target).chain.join(' < ') : '';
    if (c) {
      own = c.instanceMethods.length;
      ownZh = c.instanceMethods.filter((m) => m.doc?.zh).length;
      ownEn = c.instanceMethods.filter((m) => m.doc && !m.doc.zh && m.doc.en).length;
      ownNo = c.instanceMethods.filter((m) => !m.doc).length;
      missing = uniq(c.instanceMethods.filter((m) => !written.has(m.name)).map((m) => m.name));
    }
    const seen = new Set([e.target]);
    for (const a of (c ? M.chainOf(e.target).chain : []).slice(1)) {
      const ac = M.byName.get(a); if (!ac || seen.has(a)) continue; seen.add(a);
      inh += ac.instanceMethods.length;
    }
    evOwn = evOf(e.target).length;
    for (const a of (c ? M.chainOf(e.target).chain : []).slice(1)) evInh += evOf(a).length;
  } else if (e.kind === 'namespace') {
    const n = nsByName.get(e.target);
    own = n ? n.members.filter((m) => !m.isPrivate).length : 0;
    ownZh = n ? n.members.filter((m) => m.doc?.zh).length : 0;
    ownEn = n ? n.members.filter((m) => m.doc && !m.doc.zh).length : 0;
    for (const mg of e.merge || []) { const mn = nsByName.get(mg); if (mn) inh += mn.members.filter((m) => !m.isPrivate).length; }
    missing = n ? uniq(n.members.filter((m) => !m.isPrivate && !written.has(m.name)).map((m) => m.name)) : [];
  } else if (e.kind === 'functions') {
    const fns = FN_BY_REL.get(relToPackages(e.file)) || [];
    own = fns.length; ownZh = fns.filter((f) => f.doc?.zh).length; ownEn = fns.filter((f) => f.doc && !f.doc.zh).length;
    missing = uniq(fns.filter((f) => !written.has(f.name)).map((f) => f.name));
  }
  rows.push({ page: p, kind: e.kind || '?', target: e.target || '', lines: txt.split('\n').length,
    enLines: enTxt ? enTxt.split('\n').length : 0, chain, own, ownZh, ownEn, ownNo, inh, evOwn, evInh,
    written: written.size, incs: (readFileSync(pageFile, 'utf8').match(/<!--@include:/g) || []).length, missing });
}

const T = [];
const sum = (k) => rows.reduce((a, r) => a + r[k], 0);
T.push('== 汇总 ==');
T.push(`页面 ${rows.length}；映射 ${rows.filter((r) => r.own || r.kind === 'prose').length}/${rows.length}`);
T.push(`自有实例方法 ${sum('own')}（中文 ${sum('ownZh')} / 仅英 ${sum('ownEn')} / 无注释 ${sum('ownNo')}）`);
T.push(`可继承实例方法 ${sum('inh')}；自有事件 ${sum('evOwn')}；可继承事件 ${sum('evInh')}`);
T.push(`页面已列成员 ${sum('written')}；引用 include 的页面 ${rows.filter((r) => r.incs > 0).length}`);
T.push('');
T.push('== 逐页（页面 行数/en 类型 目标 | 自有(中/英/无) 可继承 事件(自/继) 已列 inc 缺） ==');
for (const r of rows.sort((a, b) => (b.own + b.inh) - (a.own + a.inh))) {
  T.push([r.page.padEnd(28), String(r.lines).padStart(4), String(r.enLines).padStart(4), r.kind.padEnd(10),
    (r.target || '-').padEnd(22), `own${String(r.own).padStart(3)}(${r.ownZh}/${r.ownEn}/${r.ownNo})`,
    `inh${String(r.inh).padStart(4)}`, `ev${r.evOwn}/${r.evInh}`, `w${r.written}`, `inc${r.incs}`,
    r.missing.length ? `缺${r.missing.length}` : ''].join(' '));
}
T.push('');
T.push('== 继承链 ==');
for (const r of rows.filter((x) => x.chain)) T.push(`${r.page}: ${r.chain}`);
T.push('');
T.push('== 页面缺失的自有成员（按页） ==');
for (const r of rows.filter((x) => x.missing.length).sort((a, b) => b.missing.length - a.missing.length)) {
  T.push(`${r.page} [${r.target}] 缺 ${r.missing.length}: ${r.missing.join(', ')}`);
}
writeFileSync(join(CACHE, 'api-coverage.txt'), T.join('\n'), 'utf8');

writeJson(join(CACHE, 'api-model.json'), {
  generatedFrom: SRC,
  classes: M.classes.map((c) => ({
    name: c.name, pkg: c.pkg, rel: c.rel, parent: c.parent, parentText: c.parentText, mixins: c.mixins,
    extendsTag: c.extendsTag, category: c.category, zh: c.zh, en: c.en, abstract: c.abstract, isMixin: c.isMixin,
    chain: M.chainOf(c.name).chain,
    methods: c.instanceMethods.map((m) => ({ n: m.name, line: m.line, sig: m.signature, zh: m.doc?.zh || '', en: m.doc?.en || '', params: m.doc?.params || [], returns: m.doc?.returns || [], fires: m.doc?.fires || [] })),
    statics: c.staticMethods.map((m) => ({ n: m.name, sig: m.signature, zh: m.doc?.zh || '', en: m.doc?.en || '' })),
  })),
  events: [...M.events.values()],
  namespaces: [...M.namespaces.values()].map((n) => ({
    name: n.name, rel: n.rel,
    members: n.members.filter((m) => !m.isPrivate).map((m) => ({ n: m.name, line: m.line, sig: m.signature, zh: m.doc?.zh || '', en: m.doc?.en || '', params: m.doc?.params || [], returns: m.doc?.returns || [] })),
  })),
  functionFiles: [...M.functions.entries()].map(([f, list]) => ({
    file: f.replace(/^.*packages[\\/]/, '').replace(/\\/g, '/'),
    fns: list.map((x) => ({ n: x.name, line: x.line, sig: x.signature, zh: x.doc?.zh || '', en: x.doc?.en || '', params: x.doc?.params || [], returns: x.doc?.returns || [] })),
  })),
  options: [...M.optionsOf.entries()].map(([f, list]) => ({ file: f.replace(/^.*packages[\\/]/, '').replace(/\\/g, '/'), list })),
});

log('');
log(T.slice(0, 6).join('\n'));
log(`\n报告：.vitepress/cache/api/api-coverage.txt\n模型：.vitepress/cache/api/api-model.json`);
