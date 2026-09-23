/**
 * scripts/api/lib.mjs — API 文档生成的共享库
 *
 * 职责：
 *  1) 驱动 ast-grep 抽取源码结构（沙箱下不能用管道，故 stdout 重定向到文件）
 *  2) 解析 JSDoc（中文 → @english → 英文 的双语块）
 *  3) 建类模型：成员 / 事件 / options / 继承链（含 mixin 形态）/ 命名空间
 *  4) 页面映射与片段渲染（与 docs/api/includes 现有体例一致）
 *
 * 事实来源：D:\code\maptalks\maptalks.js\packages（只读）
 */
import { spawnSync } from 'node:child_process';
import { openSync, closeSync, readFileSync, writeFileSync, existsSync, mkdirSync, readdirSync, rmSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';

export const ROOT = 'D:\\code\\maptalks-docs';
export const DEFAULT_SRC = 'D:\\code\\maptalks\\maptalks.js\\packages';
export const CACHE = join(ROOT, '.vitepress', 'cache', 'api');

export const log = (...a) => console.log(...a);

// ---------------------------------------------------------------- ast-grep

export function findAstGrep() {
  const cand = ['ast-grep', 'C:\\Users\\13698\\.local\\bin\\ast-grep.exe'];
  for (const c of cand) {
    const r = spawnSync(c, ['--version'], { stdio: 'ignore', shell: false });
    if (!r.error && r.status === 0) return c;
  }
  throw new Error('未找到 ast-grep，请先安装（本机: C:\\Users\\13698\\.local\\bin\\ast-grep.exe）');
}

/**
 * 跑一条 ast-grep 查询。stdout 必须重定向到文件（沙箱禁止管道）。
 * @returns {Array<object>} JSON 记录
 */
export const GLOBS = [
  '!**/node_modules/**', '!**/dist/**', '!**/build/**', '!**/lib/**', '!**/*.min.js', '!**/*.d.ts',
  '!**/demo/**', '!**/test/**', '!**/karma.conf.js', '!**/rollup.config.js', '!**/babel.config.js',
];

export function sg(bin, outFile, args, srcRoot, lang = 'ts') {
  mkdirSync(dirname(outFile), { recursive: true });
  const fd = openSync(outFile, 'w');
  const argv = ['run', '-l', lang];
  for (const g of GLOBS) argv.push('--globs', g);
  argv.push(...args, '--json=stream', srcRoot);
  const r = spawnSync(bin, argv, { stdio: ['ignore', fd, 'ignore'] });
  closeSync(fd);
  if (r.error) throw r.error;
  const txt = existsSync(outFile) ? readFileSync(outFile, 'utf8') : '';
  const out = [];
  for (const line of txt.split('\n')) {
    if (!line.trim().startsWith('{')) continue;
    try { out.push(JSON.parse(line)); } catch { /* 忽略半行 */ }
  }
  return out;
}

export const LANGS = ['ts', 'js'];

/** 遍历源码目录（与 ast-grep 的排除规则一致），用于全量文本扫描（事件 / options） */
export function walkSource(srcRoot = DEFAULT_SRC) {
  const out = [];
  const SKIP = /node_modules|[\\/]dist[\\/]|[\\/]build[\\/]|[\\/]lib[\\/]|[\\/]demo[\\/]|[\\/]test[\\/]|\.min\.js$|\.d\.ts$/;
  const rec = (dir, depth = 0) => {
    if (depth > 8) return;
    let ents = [];
    try { ents = readdirSync(dir, { withFileTypes: true }); } catch { return; }
    for (const e of ents) {
      const p = join(dir, e.name);
      if (SKIP.test(p)) continue;
      if (e.isDirectory()) rec(p, depth + 1);
      else if (/\.(ts|tsx|js|jsx)$/.test(e.name) && !/\.config\.js$/.test(e.name)) out.push(p);
    }
  };
  rec(srcRoot);
  return out;
}

export function extractRaw(bin, srcRoot, rawDir) {
  rmSync(rawDir, { recursive: true, force: true });
  mkdirSync(rawDir, { recursive: true });
  // 每种语言的查询。类一律按 kind 抽（模式匹配不到泛型/抽象声明）：
  //   class_declaration → `class X<T> extends Y`、`abstract class X ...` 全覆盖
  //   class             → 类表达式（mixin 工厂 `return class extends Base {...}`）
  const queries = [
    ['class-decls', ['-k', 'class_declaration']],
    ['class-abs', ['-k', 'abstract_class_declaration']],
    ['class-exprs', ['-k', 'class']],
    ['objlits', ['-p', 'const $N = { $$$B }']],
    ['objlits-typed', ['-p', 'const $N: $T = { $$$B }']],
    ['methods', ['-k', 'method_definition']],
    ['fields', ['-k', 'public_field_definition']],
    ['signatures', ['-k', 'method_signature']],
    ['objpairs', ['-k', 'pair']],
    ['funcs', ['-k', 'function_declaration']],
  ];
  const MERGE = ['class-decls', 'class-abs', 'class-exprs', 'objlits', 'objlits-typed', 'methods', 'fields', 'signatures', 'objpairs', 'funcs'];
  const res = {};
  for (const lang of LANGS) {
    for (const [name, args] of queries) {
      const t0 = Date.now();
      const key = `${lang}:${name}`;
      res[key] = sg(bin, join(rawDir, `${lang}-${name}.jsonl`), args, srcRoot, lang);
      log(`  ast-grep ${key.padEnd(20)} ${String(res[key].length).padStart(6)} 条  ${((Date.now() - t0) / 1000).toFixed(1)}s`);
    }
  }
  for (const name of MERGE) res[name] = [...(res[`ts:${name}`] || []), ...(res[`js:${name}`] || [])];
  return res;
}

// ---------------------------------------------------------------- JSDoc

const fileCache = new Map();
export const fileText = (f) => {
  if (!fileCache.has(f)) { try { fileCache.set(f, readFileSync(f, 'utf8')); } catch { fileCache.set(f, ''); } }
  return fileCache.get(f);
};
const offsCache = new Map();
export function lineOffsets(f) {
  if (!offsCache.has(f)) {
    const t = fileText(f); const offs = [0];
    for (let i = 0; i < t.length; i++) if (t[i] === '\n') offs.push(i + 1);
    offsCache.set(f, offs);
  }
  return offsCache.get(f);
}
export function lineText(f, i) {
  const t = fileText(f), offs = lineOffsets(f);
  if (i < 0 || i >= offs.length) return '';
  return t.slice(offs[i], i + 1 < offs.length ? offs[i + 1] - 1 : t.length).replace(/\r$/, '');
}
export const hasCJK = (s) => /[\u3400-\u9fff\uf900-\ufaff]/.test(s || '');

/**
 * 取 line（0 基）紧邻上方的 JSDoc 块。
 * 注意：不要用 ast-grep 的 range.byteOffset 定位——语义不可靠，会漏判。
 */
export function docByLine(file, line) {
  let i = line - 1, sawInternal = false;
  while (i >= 0) {
    const s = lineText(file, i).trim();
    if (s === '') { i--; continue; }
    if (s.startsWith('//')) {
      if (/@internal|@ignore|@private|@protected/.test(s)) sawInternal = true;
      i--; continue;
    }
    break;
  }
  if (i < 0) return null;
  if (!lineText(file, i).trim().endsWith('*/')) return null;
  const endLine = i;
  let j = i;
  while (j >= 0 && !lineText(file, j).trim().startsWith('/**')) j--;
  if (j < 0) return null;
  const t = fileText(file), offs = lineOffsets(file);
  const raw = t.slice(offs[j], offs[endLine] + lineText(file, endLine).length);
  return { raw, sawInternal };
}

/** 取**包含**指定字节位置的 JSDoc 块（`@event` 常写在块的中间，不能向上找 `*​/`） */
export function docEnclosingIndex(file, idx) {
  const t = fileText(file);
  const open = t.lastIndexOf('/**', idx);
  if (open < 0) return null;
  const closeBefore = t.lastIndexOf('*/', idx);
  if (closeBefore > open) return null;            // 已经在块外
  const close = t.indexOf('*/', idx);
  if (close < 0) return null;
  return { raw: t.slice(open, close + 2) };
}

export function parseDoc(raw) {
  if (!raw) return null;
  const body = raw.replace(/^\s*\/\*\*/, '').replace(/\*\/\s*$/, '')
    .split('\n').map((l) => l.replace(/^\s*\*[ \t]?/, '').replace(/\s+$/, ''));
  const tags = []; const zhLines = []; const enLines = []; let cur = null; let inEn = false;
  for (const line of body) {
    const t = line.trim();
    // `@english` 是双语分隔标记，不是标签
    if (/^@?english$/i.test(t)) { inEn = true; cur = null; continue; }
    const m = /^@(\w+)\b\s*(.*)$/.exec(t);
    if (m) { cur = { tag: m[1], text: m[2] }; tags.push(cur); continue; }
    if (cur) { cur.text += (cur.text ? ' ' : '') + t; continue; }
    (inEn ? enLines : zhLines).push(line);
  }
  let zh = zhLines.join('\n').trim();
  let en = enLines.join('\n').trim();
  // 没有 @english 分隔时按 CJK 判定语种
  if (!en && zh && !hasCJK(zh)) { en = zh; zh = ''; }
  else if (zh && en && !hasCJK(zh)) { en = `${zh}\n${en}`.trim(); zh = ''; }
  else if (!en && zh) {
    // 中英写在同一段、又没有 @english 标记（如 Geometry.setProperties）：按行分流，
    // 否则中文页里会混进一整句英文。只认"像英文散文"的行，避免把 `<br/>`、代码片段搬走。
    const lines = zh.split('\n');
    const isProse = (l) => /^[A-Za-z][A-Za-z0-9 ,.'’()/:-]{12,}$/.test(l.trim());
    const enPart = lines.filter(isProse);
    if (enPart.length && enPart.length < lines.filter((l) => l.trim()).length) {
      zh = lines.filter((l) => !isProse(l)).join('\n').trim();
      en = enPart.join('\n').trim();
    }
  }
  const get = (t) => tags.filter((x) => x.tag === t).map((x) => x.text);
  const has = (t) => tags.some((x) => x.tag === t);
  return {
    zh, en, tags,
    isInternal: has('internal') || has('ignore') || has('private') || has('protected'),
    isStatic: has('static'), isAbstract: has('abstract'), isPrivateTag: has('private'),
    params: [...get('param'), ...get('argument')],
    returns: [...get('returns'), ...get('return')],
    fires: get('fires'), properties: get('property'), events: get('event'),
    type: get('type'), example: get('example'),
    extendsTag: get('extends'),
    mixes: get('mixes').flatMap((s) => s.split(/[,\s]+/).filter(Boolean)),
    category: get('category'),
  };
}

// ---------------------------------------------------------------- 继承链

/** 从类声明/类表达式的源码文本里取 名字 / 类型参数 / 继承子句 */
export function parseClassHeader(text) {
  const head = text.slice(0, 800);
  const m = /^\s*(?:export\s+)?(?:default\s+)?(abstract\s+)?class\s*([A-Za-z_$][\w$]*)?\s*(<[\s\S]*?>)?\s*(?:extends\s+([\s\S]+?))?\s*\{/.exec(head);
  if (!m) return { name: null, typeParams: null, heritage: null, abstract: false };
  return { name: m[2] || null, typeParams: m[3] || null, heritage: (m[4] || '').trim() || null, abstract: !!m[1] };
}

/** 把 `JSONAble(Eventable(Handlerable(Class)))` / `Control<T>` 拆成 {mixins, base} */
export function parseHeritage(text) {
  if (!text) return { mixins: [], base: null };
  const mixins = [];
  let cur = text.trim();
  for (let i = 0; i < 8; i++) {
    cur = cur.replace(/<[^<>]*>/g, '').trim();               // 去泛型
    const m = /^([A-Za-z_$][\w$]*)\s*\(([\s\S]*)\)$/.exec(cur);
    if (!m) break;
    mixins.push(m[1]);
    cur = m[2].trim();
  }
  // 末段：`maptalks.OverlayLayer` → OverlayLayer（JS 包里常见命名空间前缀）
  const base = /^[A-Za-z_$][\w$.]*/.exec(cur.trim())?.[0]?.split('.').pop() || null;
  return { mixins, base };
}

// ---------------------------------------------------------------- 模型

const REL = (f) => f.replace(/^.*packages[\\/]/, '').replace(/\\/g, '/');
const PKG = (f) => f.replace(/^.*packages[\\/]/, '').split(/[\\/]/)[0];
const BASE = (f) => f.replace(/\\/g, '/').split('/').pop().replace(/\.(ts|tsx|js|jsx)$/, '');
const mixinFileCache = new Map();
/** maptalks 的 mixin 都是 `export default function (Base) { return class ... }` */
export const isMixinFactory = (f) => {
  if (!mixinFileCache.has(f)) mixinFileCache.set(f, /export\s+default\s+function/.test(fileText(f)));
  return mixinFileCache.get(f);
};

export function buildModel(raw) {
  const classes = [];
  const seenDecl = new Set();
  const push = (name, parentText, j, extra = {}) => {
    const key = `${name}@${j.file}:${j.range.start.line}`;
    if (seenDecl.has(key)) return;
    seenDecl.add(key);
    const doc = parseDoc(docByLine(j.file, j.range.start.line)?.raw);
    const h = parseHeritage(parentText);
    classes.push({
      name, parentText: parentText || null, parent: h.base,
      mixins: [...new Set([...h.mixins, ...(doc?.mixes || []).map((m) => m.split('.').pop())])],
      file: j.file, rel: REL(j.file), pkg: PKG(j.file),
      startLine: j.range.start.line, endLine: j.range.end.line,
      doc, zh: doc?.zh || '', en: doc?.en || '',
      category: doc?.category?.[0] || null,
      extendsTag: doc?.extendsTag?.map((s) => s.split(/[\s,]+/)[0]) || [],
      abstract: !!doc?.isAbstract, isMixin: false, ...extra,
    });
  };

  // 1) 类声明（kind 抽取；抽象类在 TS 语法树里是独立 kind）
  for (const j of [...(raw['class-decls'] || []), ...(raw['class-abs'] || [])]) {
    const h = parseClassHeader(j.text);
    if (!h.name) continue;
    push(h.name, h.heritage, j, { typeParams: h.typeParams, abstract: h.abstract || undefined });
  }
  // 2) 类表达式：mixin 工厂文件里的匿名类按文件名命名；具名且在类外的也收
  for (const j of raw['class-exprs'] || []) {
    const h = parseClassHeader(j.text);
    const mixin = isMixinFactory(j.file);
    const insideClass = classes.some((c) => c.file === j.file && j.range.start.line > c.startLine && j.range.start.line <= c.endLine);
    if (insideClass) continue;
    const name = mixin ? BASE(j.file) : h.name;
    if (!name) continue;
    push(name, h.heritage, j, { isMixin: true, innerName: h.name });
  }

  // 同名类去重：优先 maptalks 包，其次非 mixin
  const byName = new Map();
  for (const c of classes) {
    const p = byName.get(c.name);
    if (!p) { byName.set(c.name, c); continue; }
    if (p.pkg !== 'maptalks' && c.pkg === 'maptalks') byName.set(c.name, c);
  }

  // ---- 成员
  const memberName = (text) => {
    const t = text.replace(/^\s+/, '');
    let m = /^(?:static\s+)?(?:get|set)\s+([A-Za-z_$][\w$]*)/.exec(t);
    if (m) return { name: m[1], accessor: true, isStatic: /^static/.test(t) };
    m = /^((?:public|private|protected|static|async|readonly|\*)\s+)*([A-Za-z_$][\w$]*)\s*[(<:?]/.exec(t);
    if (!m) return null;
    return { name: m[2], accessor: false, isStatic: /\bstatic\b/.test(m[1] || '') };
  };
  const members = [];
  for (const [src, kind] of [['methods', 'method'], ['fields', 'field'], ['signatures', 'signature']]) {
    for (const j of raw[src] || []) {
      const nm = memberName(j.text);
      if (!nm || nm.name === 'constructor') continue;
      const doc = parseDoc(docByLine(j.file, j.range.start.line)?.raw);
      const prevLine = lineText(j.file, j.range.start.line - 1).trim();
      members.push({
        kind, name: nm.name, accessor: nm.accessor, isStatic: nm.isStatic || !!doc?.isStatic,
        file: j.file, line: j.range.start.line, doc,
        signature: j.text.split('\n')[0].trim().slice(0, 200),
        isPrivate: /^\s*(private|protected)\s/.test(j.text) || nm.name.startsWith('_')
          || /@(internal|ignore|private|protected)/.test(prevLine) || !!doc?.isInternal,
      });
    }
  }
  // 归属：类 → 对象字面量命名空间 → mixin 文件
  const classesByFile = new Map();
  for (const c of classes) {
    if (!classesByFile.has(c.file)) classesByFile.set(c.file, []);
    classesByFile.get(c.file).push(c);
  }
  const enclosingObjectLiteral = makeObjlitIndex(raw);
  // 成员归属：类（最内层）→ 对象字面量 → 无
  for (const m of members) {
    const cands = (classesByFile.get(m.file) || [])
      .filter((c) => m.line >= c.startLine && m.line <= c.endLine)
      .sort((a, b) => (a.endLine - a.startLine) - (b.endLine - b.startLine));
    if (cands[0]) { m.owner = cands[0].name; m.ownerKind = 'class'; continue; }
    const ns = enclosingObjectLiteral(m.file, m.line);
    m.owner = ns ? ns.name : null;
    m.ownerKind = ns ? 'namespace' : null;
  }
  const namespaces = new Map();
  // 命名空间成员 = 对象字面量的**直接子节点**（ast-grep `$$$B` 多重捕获），
  // 这样天然排除方法体内嵌套对象（如 `{pageSize: 2000}`）造成的噪音。
  const itemName = (t) => {
    const s = t.trim();
    let m = /^['"]([^'"]+)['"]\s*:/.exec(s); if (m) return m[1];
    m = /^([A-Za-z_$][\w$]*)\s*:/.exec(s); if (m) return m[1];
    m = /^(?:async\s+|static\s+|get\s+|set\s+|\*)*([A-Za-z_$][\w$]*)\s*[({<]/.exec(s); if (m) return m[1];
    m = /^([A-Za-z_$][\w$]*)\s*,?$/.exec(s); if (m) return m[1];
    return null;
  };
  for (const j of [...(raw.objlits || []), ...(raw['objlits-typed'] || [])]) {
    const name = j.metaVariables?.single?.N?.text;
    const items = j.metaVariables?.multi?.B;
    if (!name || !Array.isArray(items)) continue;
    const doc = parseDoc(docByLine(j.file, j.range.start.line)?.raw);
    const node = namespaces.get(name) || {
      name, file: j.file, rel: REL(j.file), pkg: PKG(j.file),
      startLine: j.range.start.line, endLine: j.range.end.line,
      doc, zh: doc?.zh || '', en: doc?.en || '', members: [],
    };
    if (!namespaces.has(name)) namespaces.set(name, node);
    let pendingDoc = null;
    for (const it of items) {
      const t = (it.text || '').trim();
      if (!t || t === ',') continue;
      if (t.startsWith('/**')) { pendingDoc = parseDoc(it.text); continue; }
      const nm = itemName(t);
      // 成员自身的 JSDoc 优先（词法上是上一个注释节点）
      const own = it.range ? parseDoc(docByLine(j.file, it.range.start.line)?.raw) : null;
      if (!nm) { pendingDoc = null; continue; }
      node.members.push({
        kind: /:\s*(function|\()/.test(t) || /[({]/.test(t.slice(nm.length)) ? 'method' : 'property',
        name: nm, file: j.file, line: it.range ? it.range.start.line : j.range.start.line,
        doc: own || pendingDoc, signature: t.split('\n')[0].trim().slice(0, 200),
        isPrivate: nm.startsWith('_') || !!((own || pendingDoc)?.isInternal),
      });
      pendingDoc = null;
    }
  }
  for (const c of [...byName.values()]) {
    const own = members.filter((m) => m.owner === c.name && m.file === c.file);
    c.members = own;
    c.publicMethods = own.filter((m) => !m.isPrivate && (m.kind === 'method' || m.kind === 'signature' || m.accessor));
    c.publicFields = own.filter((m) => !m.isPrivate && m.kind === 'field');
    c.staticMethods = c.publicMethods.filter((m) => m.isStatic);
    c.instanceMethods = c.publicMethods.filter((m) => !m.isStatic);
  }

  // ---- 事件（@event Class#name 定义 + @fires Class#name 引用 + fire('literal') 调用）
  // 事件定义常常写在没有任何类/方法的文件里（如 map/handler/Map.GeometryEvents.ts），
  // 因此必须扫描**全部源文件**，不能只扫有类/成员的文件的。
  const events = new Map();
  const files = new Set([...walkSource(), ...members.map((m) => m.file), ...classes.map((c) => c.file)]);
  for (const f of files) {
    const t = fileText(f);
    for (const m of t.matchAll(/@(event|fires)\s+([\w.$]+)#([\w:-]+)/g)) {
      const key = `${m[2]}#${m[3]}`;
      const prev = events.get(key) || {
        owner: m[2].split('.').pop(), name: m[3], zh: '', en: '', props: [], type: '', defined: false, file: f.replace(/^.*packages[\\/]/, ''),
      };
      if (m[1] === 'event') {
        const d = parseDoc(docEnclosingIndex(f, m.index)?.raw);
        if (d) {
          prev.defined = true;
          prev.zh = d.zh || prev.zh; prev.en = d.en || prev.en;
          prev.props = d.properties.length ? d.properties : prev.props;
          prev.type = d.type?.[0] || prev.type;
        }
      }
      events.set(key, prev);
    }
  }

  // ---- options（const options 上方的 @property options.x=default - desc）
  const optionsOf = new Map();
  for (const f of files) {
    const t = fileText(f);
    const i = t.search(/^const options\b/m);
    if (i < 0) continue;
    const line = lineOfIndex(f, i);
    const d = parseDoc(docByLine(f, line)?.raw);
    if (!d || !d.properties.length) continue;
    const list = [];
    for (const p of d.properties) {
      const m = /^\s*(?:\[)?options\.([\w$]+)\s*(?:=([^\]]*))?\]?\s*(?:-\s*)?([\s\S]*)$/.exec(p);
      if (!m) continue;
      list.push({ name: m[1], def: (m[2] || '').trim(), desc: (m[3] || '').trim(), raw: p });
    }
    if (list.length) optionsOf.set(f, list);
  }

  // ---- 事件补充：`fire('literal')` / `_fireEvent('literal')` 调用（JS 包常见，没有 @event 注释）
  // 归到包含该行的最内层类；找不到类就跳过（避免把工具函数里的事件算到别人头上）。
  const classesByFileTmp = new Map();
  for (const c of classes) {
    if (!classesByFileTmp.has(c.file)) classesByFileTmp.set(c.file, []);
    classesByFileTmp.get(c.file).push(c);
  }
  for (const f of files) {
    const t = fileText(f);
    for (const m of t.matchAll(/\b(?:fire|_fireEvent|_fire)\s*\(\s*['"`]([A-Za-z][\w:-]*)['"`]/g)) {
      const line = lineOfIndex(f, m.index);
      const owner = (classesByFileTmp.get(f) || [])
        .filter((c) => line >= c.startLine && line <= c.endLine)
        .sort((a, b) => (a.endLine - a.startLine) - (b.endLine - b.startLine))[0];
      if (!owner) continue;
      const key = `${owner.name}#${m[1]}`;
      if (!events.has(key)) {
        events.set(key, { owner: owner.name, name: m[1], zh: '', en: '', props: [], type: '', defined: false, file: REL(f) });
      }
    }
  }

  // ---- 独立导出函数（按文件归组，供 util / DomUtil / StringUtil 这类函数集合页使用）
  const functions = new Map();   // file -> [{name, ...}]
  for (const j of raw.funcs || []) {
    const txt = j.text.replace(/^\s*export\s+/, '');
    const m = /^(?:async\s+)?function\s+([A-Za-z_$][\w$]*)/.exec(txt);
    if (!m) continue;
    const lineTxt = lineText(j.file, j.range.start.line);
    const prevTxt = lineText(j.file, j.range.start.line - 1);
    const exported = /\bexport\b/.test(lineTxt) || /\bexport\b/.test(prevTxt);
    if (!exported) continue;
    if (!functions.has(j.file)) functions.set(j.file, []);
    functions.get(j.file).push({
      name: m[1], file: j.file, line: j.range.start.line,
      doc: parseDoc(docByLine(j.file, j.range.start.line)?.raw),
      signature: j.text.split('\n')[0].trim().slice(0, 200),
    });
  }

  // ---- 继承链（可跨类，含 mixins）
  function chainOf(name, depth = 0, seen = new Set()) {
    const c = byName.get(name);
    if (!c || seen.has(name) || depth > 10) return { chain: [], mixins: [] };
    seen.add(name);
    const out = { chain: [name], mixins: [...c.mixins] };
    const next = c.parent || c.extendsTag[0] || null;
    if (next) {
      const sub = chainOf(next, depth + 1, seen);
      out.chain.push(...sub.chain);
      out.mixins.push(...sub.mixins);
    }
    return out;
  }

  return { classes: [...byName.values()], byName, members, events, optionsOf, namespaces, functions, chainOf, files };
}

export function lineOfIndex(f, idx) {
  const offs = lineOffsets(f);
  let lo = 0, hi = offs.length - 1;
  while (lo < hi) { const mid = (lo + hi + 1) >> 1; if (offs[mid] <= idx) lo = mid; else hi = mid - 1; }
  return lo;
}

/** 判断某行落在哪个顶层对象字面量里（索引由 ast-grep 的 `const $N = { $$$B }` 抽取，避免手写大括号匹配被模板串打乱） */
function makeObjlitIndex(raw) {
  const idx = new Map();   // file -> [{name,file,rel,startLine,endLine}]
  for (const j of [...(raw.objlits || []), ...(raw['objlits-typed'] || [])]) {
    const name = j.metaVariables?.single?.N?.text;
    if (!name) continue;
    if (!idx.has(j.file)) idx.set(j.file, []);
    idx.get(j.file).push({ name, file: j.file, rel: REL(j.file), startLine: j.range.start.line, endLine: j.range.end.line });
  }
  return (file, line) => {
    const cands = (idx.get(file) || [])
      .filter((o) => line >= o.startLine && line <= o.endLine)
      .sort((a, b) => (a.endLine - a.startLine) - (b.endLine - b.startLine));
    return cands[0] || null;
  };
}

// ---------------------------------------------------------------- 渲染

/** `@param {Number} x - desc` / `@param x` → { type, name, desc, optional } */
export function parseParam(p) {
  const s = String(p).trim();
  let m = /^\{([^}]*)\}\s*(\[?[\w$.,\s]+\]?)\s*(?:-\s*)?([\s\S]*)$/.exec(s);
  if (m) return { type: m[1].trim(), name: m[2].replace(/[[\]]/g, '').trim(), desc: m[3].trim(), optional: /^\[/.test(m[2]) };
  m = /^(\[?[\w$.]+\]?)\s*(?:-\s*)?([\s\S]*)$/.exec(s);
  if (m) return { type: '', name: m[1].replace(/[[\]]/g, '').trim(), desc: m[2].trim(), optional: /^\[/.test(m[1]) };
  return { type: '', name: s, desc: '', optional: false };
}
export function parseReturn(r) {
  const m = /^\{([^}]*)\}\s*([\s\S]*)$/.exec(r.trim());
  if (!m) return { type: '', desc: r.trim() };
  return { type: m[1].trim(), desc: m[2].trim() };
}
/** 取成员签名里的参数名列表（供无注释方法兜底） */
export function paramNames(signature) {
  const m = /\(([\s\S]*)\)/.exec(signature);
  if (!m) return [];
  return m[1].split(',').map((s) => s.trim().split(/[:=?]/)[0].trim()).filter(Boolean);
}

/** 从 TS/JS 签名里解析参数与返回类型：`setCoordinates(coords: RingCoordinates): void` */
export function parseTsSignature(sig) {
  const s = (sig || '').trim();
  const open = s.indexOf('(');
  const name = open > 0 ? s.slice(0, open).replace(/^(?:static\s+|async\s+|get\s+|set\s+|\*\s*)*/, '').trim() : '';
  let params = [];
  if (open >= 0) {
    // 括号配对（参数里可能有函数类型/对象字面量）
    let depth = 0, end = -1;
    for (let i = open; i < s.length; i++) {
      if (s[i] === '(') depth++;
      else if (s[i] === ')') { depth--; if (depth === 0) { end = i; break; } }
    }
    const inner = end > open ? s.slice(open + 1, end) : '';
    let cur = '', d2 = 0;
    for (const ch of inner) {
      if ('([{<'.includes(ch)) d2++;
      if (')]}>'.includes(ch)) d2--;
      if (ch === ',' && d2 === 0) { params.push(cur); cur = ''; continue; }
      cur += ch;
    }
    if (cur.trim()) params.push(cur);
    params = params.map((p) => {
      const t = p.trim();
      const m = /^([A-Za-z_$][\w$]*)(\?)?\s*(?::\s*([\s\S]+))?$/.exec(t.replace(/^\.\.\./, ''));
      return m ? { name: m[1], optional: !!m[2], type: (m[3] || '').trim() } : { name: t, optional: false, type: '' };
    }).filter((p) => p.name);
    const rest = end > 0 ? s.slice(end + 1) : '';
    const rm = /^\s*:\s*([^{;]+)/.exec(rest);
    return { name, params, returns: rm ? rm[1].trim() : '' };
  }
  return { name, params, returns: '' };
}

/** HTML 转义（源码注释里偶有 `<br/>`，单独放行）。
 *  `<` 必须转义，否则 Vue 模板会当成未闭合标签；
 *  `{}` 必须转义，否则 VitePress 的属性语法会把 `{"top":100}` 解析成标签属性（Duplicate attribute）。 */
export const escHtml = (s) => String(s ?? '')
  .replace(/&(?!(amp|lt|gt|quot|#\d+);)/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/\{/g, '&#123;')
  .replace(/\}/g, '&#125;');
export const allowBr = (s) => String(s ?? '').replace(/&lt;br\s*\/?&gt;/g, '<br/>');
/** 把 JSDoc 的行内标签转成 Markdown：仅当目标是 URL/站内绝对路径时才生成链接，
 *  否则退化成纯文本（`[文字]{@link Polygon}` 会变成站内相对链接 → VitePress 死链）。 */
export const cleanJsdoc = (s) => String(s ?? '')
  .replace(/\[([^\]]+)\]\{@link\s+([^\s}]+)(?:\s+[^}]*)?\}/g, (_m, text, target) =>
    (/^(https?:|mailto:|#|\/)/.test(target) ? `[${text}](${target})` : text))
  .replace(/\{@link\s+([^\s}]+)(?:\s+([^}]*))?\}/g, (_m, url, label) => (label ? label : url))
  .replace(/\{@tutorial\s+([^\s}]+)\}/g, '$1');
const esc = (s) => allowBr(escHtml(cleanJsdoc(s)));
/** 类型放进反引号（代码跨度里无需转义，泛型 `Array<Point>` 才能安全显示） */
const code = (s) => (s ? `\`${String(s).trim()}\`` : '');

/** 兼容两种成员形态：模型内部对象（name/signature/doc）与 api-model.json 的序列化形态（n/sig/zh/en/params/returns/fires） */
function normMember(m) {
  if (m.doc || m.signature !== undefined && m.name !== undefined) return m;
  return {
    name: m.n ?? m.name, signature: m.sig ?? m.signature, line: m.line,
    doc: m.doc || { zh: m.zh || '', en: m.en || '', params: m.params || [], returns: m.returns || [], fires: m.fires || [], properties: [] },
  };
}

/** 与 docs/api/includes 现有体例保持一致的方法条目（中/英各一套文案） */
export function renderMethod(raw, lang = 'zh') {
  const m = normMember(raw);
  const zh = lang === 'zh';
  const ts = parseTsSignature(m.signature || '');
  const docParams = (m.doc?.params || []).map(parseParam).filter((p) => p.name);
  // 以 TS 签名的参数名为骨架（JSDoc 里常见无名/无类型的 `@param p`），描述按名字或位置对齐
  let allParams;
  if (ts.params.length) {
    allParams = ts.params.map((p, i) => {
      const d = docParams.find((x) => x.name === p.name) || (docParams.length === ts.params.length ? docParams[i] : null);
      return { name: p.name, type: p.type || d?.type || '', desc: d?.desc || '', optional: p.optional || !!d?.optional };
    });
  } else {
    allParams = docParams;
  }
  const sig = `${m.name}(${allParams.map((p) => (p.optional ? `${p.name}?` : p.name)).join(', ')})`;
  const desc = zh ? (m.doc?.zh || m.doc?.en || '') : (m.doc?.en || m.doc?.zh || '');
  const L = [];
  L.push(`<details><summary>${sig}</summary>`);
  L.push('<div>');
  L.push('<br/>');
  L.push('');
  L.push(desc ? esc(desc) : (zh ? '源码未提供文字说明，参数与返回类型取自类型签名。' : 'No prose description in source; parameters and return type come from the type signature.'));
  if (allParams.length) {
    L.push('');
    L.push(zh ? '参数：' : 'Parameters:');
    L.push('');
    for (const p of allParams) L.push(`* ${p.name}${p.optional ? (zh ? '（可选）' : ' (optional)') : ''} ${code(p.type || 'Any')}${p.desc ? ' ' + esc(p.desc) : ''}`);
  }
  const rs = (m.doc?.returns || []).map(parseReturn).filter((r) => r.type || r.desc);
  if (rs.length) {
    L.push('');
    L.push(zh ? '返回：' : 'Returns:');
    L.push('');
    for (const r of rs) L.push(`* ${code(r.type || 'Any')}${r.desc ? ' ' + esc(r.desc) : ''}`);
  } else if (ts.returns && ts.returns !== 'void') {
    L.push('');
    L.push(zh ? '返回：' : 'Returns:');
    L.push('');
    L.push(`* ${code(ts.returns)}`);
  }
  const fires = m.doc?.fires || [];
  if (fires.length) {
    L.push('');
    L.push(zh ? '触发事件：' : 'Fires:');
    L.push('');
    for (const f of fires) L.push(`* \`${String(f).trim()}\``);
  }
  L.push('');
  L.push('</div>');
  L.push('</details>');
  return L.join('\n');
}

/** 事件条目：沿用 includes/geometry-events.md 的「参数属性」表格体例 */
export function renderEvent(e, lang = 'zh') {
  const zh = lang === 'zh';
  const desc = (zh ? (e.zh || e.en) : (e.en || e.zh)) || `${e.name} ${zh ? '事件。' : 'event.'}`;
  const L = [];
  L.push(`<details><summary>${e.name}</summary>`);
  L.push('<div>');
  L.push('<br/>');
  L.push('');
  L.push(esc(desc));
  if (e.props?.length) {
    L.push('');
    L.push(zh ? '参数属性：' : 'Event properties:');
    L.push('');
    L.push(zh ? '| 属性名 | 类型 | 值 |' : '| Property | Type | Value |');
    L.push('| --- | :-: | --- |');
    for (const p of e.props) {
      const m = /^\{([^}]*)\}\s*(\[[\w$.]+\]|[\w$.]+)\s*(?:-\s*)?([\s\S]*)$/.exec(String(p).trim());
      if (m) L.push(`| ${m[2].replace(/[[\]]/g, '')} | ${code(m[1])} | ${esc(m[3]).replace(/\|/g, '\\|')} |`);
      else L.push(`| ${esc(p).replace(/\|/g, '\\|')} |  |  |`);
    }
  }
  L.push('');
  L.push('</div>');
  L.push('</details>');
  return L.join('\n');
}

// ---------------------------------------------------------------- 页面映射

export const PAGES_DIR = join(ROOT, 'docs', 'api');
export const EN_PAGES_DIR = join(ROOT, 'docs', 'en', 'api');
export const INCLUDES_DIR = join(ROOT, 'docs', 'api', 'includes');
export const EN_INCLUDES_DIR = join(ROOT, 'docs', 'en', 'api', 'includes');

export function pageList() {
  return readdirSync(PAGES_DIR).filter((f) => f.endsWith('.md') && f !== 'index.md').sort().map((f) => f.replace(/\.md$/, ''));
}

/** 实体名 → kebab（片段文件名/站内链接用）：Polygon→polygon，UIMarker→ui-marker，EPSG4326Projection→epsg4326-projection */
export const slug = (s) => s.replace(/([a-z0-9])([A-Z])/g, '$1-$2').replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2').toLowerCase();

export function loadPageMap() {
  const p = resolve(ROOT, 'scripts', 'api', 'page-map.json');
  if (!existsSync(p)) return null;
  return JSON.parse(readFileSync(p, 'utf8'));
}

/** 页面正文 + 其 `<!--@include: ...-->` 片段内容（判断"已写成员"必须展开 include，否则会误判为缺） */
export function expandIncludes(pageFile) {
  if (!existsSync(pageFile)) return '';
  const txt = readFileSync(pageFile, 'utf8');
  const dir = dirname(pageFile);
  const parts = [txt];
  for (const m of txt.matchAll(/<!--@include:\s*([^\s>]+?)\s*-->/g)) {
    const p = resolve(dir, m[1]);
    if (existsSync(p)) parts.push(readFileSync(p, 'utf8'));
  }
  return parts.join('\n');
}

/** 从页面/片段文本里解析"已列出"的成员名 */
export function writtenNames(txt) {
  const s = new Set();
  for (const m of txt.matchAll(/<summary>([^<]+)<\/summary>/g)) s.add(m[1].split('(')[0].trim());
  for (const m of txt.matchAll(/^[-*]\s*`([A-Za-z_$][\w$]*)\(/gm)) s.add(m[1]);
  for (const m of txt.matchAll(/^\|\s*`?([A-Za-z_$][\w$]*)`?\s*\|/gm)) s.add(m[1]);
  return s;
}

// ---------------------------------------------------------------- 章节级"已写"判定
// 生成器算缺口、审计查覆盖都用同一套（口径不一致会导致"生成器认为写了、审计认为没写"）。

const SEC_EVENTS = /(事件|Events)/i;
const SEC_STATICS = /(静态方法|Static Methods)/i;
const SEC_METHODS = /(成员方法|成员函数|^方法$|主要函数|方法（|Methods|Functions|属性\s*\/\s*静态方法|Properties\s*\/\s*Static)/i;
const SEC_OPTIONS = /^(options|Options|配置项|样式说明|Symbol)/;
const SEC_CTOR = /^(构造函数|构造 options|Constructor)/i;

export function sectionKind(title) {
  // `## 属性 / 静态方法`、`## Properties / Static Methods` 是混合章节：方法名与静态名都算
  if (/^(属性\s*\/\s*静态方法|Properties\s*\/\s*Static)/i.test(title)) return 'mixed';
  if (SEC_EVENTS.test(title)) return 'events';
  if (SEC_STATICS.test(title)) return 'statics';
  if (SEC_METHODS.test(title)) return 'methods';
  if (SEC_OPTIONS.test(title)) return 'options';
  if (SEC_CTOR.test(title)) return 'ctor';
  return 'other';
}

/** 按 `## ` 切分，返回各类章节正文拼接（mixed 同时计入 methods 与 statics） */
export function sectionBodies(txt) {
  const lines = txt.split('\n');
  const heads = lines.map((l, i) => (/^##\s+/.test(l) ? i : -1)).filter((i) => i >= 0);
  const out = { methods: '', statics: '', events: '', options: '', mixed: '', other: heads.length ? lines.slice(0, heads[0]).join('\n') : txt };
  for (let k = 0; k < heads.length; k++) {
    const start = heads[k];
    const end = k + 1 < heads.length ? heads[k + 1] : lines.length;
    out[sectionKind(lines[start].replace(/^##\s+/, '').trim())] += lines.slice(start, end).join('\n') + '\n';
  }
  return out;
}

/** 章节内出现的成员名：`<summary>` 条目 + 反引号跨度里的开头标识符
 *  （覆盖 `\`name(args): type\``、`\`code: string\``、`| \`a\` / \`b\` |` 等写法） */
export function sectionNames(body) {
  const s = new Set();
  for (const m of body.matchAll(/<summary>([^<]+)<\/summary>/g)) s.add(m[1].split('(')[0].trim());
  for (const m of body.matchAll(/`([^`\n]+)`/g)) {
    const id = /^\s*([A-Za-z_$][\w$]*)/.exec(m[1]);
    if (id) s.add(id[1]);
  }
  return s;
}

/** 页面按章节解析出的"已写"名单（mixed 章节同时进 methods 与 statics） */
export function documentedBySection(txt) {
  const b = sectionBodies(txt);
  const methods = sectionNames(b.methods);
  const statics = sectionNames(b.statics);
  for (const n of sectionNames(b.mixed)) { methods.add(n); statics.add(n); }
  return {
    methods, statics,
    events: sectionNames(b.events), options: sectionNames(b.options), bodies: b,
  };
}

export function writeJson(file, obj) {
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, JSON.stringify(obj, null, 1), 'utf8');
}
