/**
 * scripts/api/gen-includes.mjs — 由源码模型生成 API 片段（include）
 *
 * 产物（中英双份）：
 *   docs/api/includes/api/<slug>-methods.md    该实体自有实例方法
 *   docs/api/includes/api/<slug>-statics.md    该实体静态方法
 *   docs/api/includes/api/<slug>-events.md     该实体自有事件
 *   docs/api/includes/api/<slug>-missing.md    页面上尚未列出的自有成员（用于增量补全）
 *   docs/en/api/includes/api/...
 *
 * 片段**不带标题** —— 标题由引用它的页面提供，因此同一片段可被所有子类页复用。
 *
 * 用法：node scripts/api/gen-includes.mjs [--dry]
 */
import { mkdirSync, writeFileSync, readFileSync, existsSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { ROOT, CACHE, loadPageMap, pageList, log, renderMethod, renderEvent, expandIncludes, writtenNames, slug } from './lib.mjs';

const DRY = process.argv.includes('--dry');
const MODEL = JSON.parse(readFileSync(join(CACHE, 'api-model.json'), 'utf8'));
const MAP = loadPageMap();
if (!MAP) throw new Error('缺少 scripts/api/page-map.json');

const cls = new Map(MODEL.classes.map((c) => [c.name, c]));
const ns = new Map(MODEL.namespaces.map((n) => [n.name, n]));
const fnsByFile = new Map(MODEL.functionFiles.map((f) => [f.file, f.fns]));
const eventsOf = (owner) => MODEL.events.filter((e) => e.owner === owner);

/** 框架基类/混入：只列名字，不展开整段成员（决策 2：只展开业务父类） */
const FRAMEWORK = new Set(['Base', 'Class', 'Eventable', 'JSONAble', 'Handlerable', 'Renderable', 'Menuable', 'EventableMixin']);

const outDirs = [join(ROOT, 'docs', 'api', 'includes', 'api'), join(ROOT, 'docs', 'en', 'api', 'includes', 'api')];
if (!DRY) {
  for (const d of outDirs) {
    rmSync(d, { recursive: true, force: true });
    mkdirSync(d, { recursive: true });
  }
}

/** 人工/批量补写的中文说明（scripts/api/zh-overrides.json）优先于源码注释；仅用于中文侧 */
const OVERRIDE_PATH = join(ROOT, 'scripts', 'api', 'zh-overrides.json');
const OVERRIDES = existsSync(OVERRIDE_PATH) ? JSON.parse(readFileSync(OVERRIDE_PATH, 'utf8')) : {};
let overridesUsed = 0;
const withZh = (entity, m, lang) => {
  if (lang !== 'zh') return m;
  const ov = OVERRIDES[`${entity}.${m.n ?? m.name}`];
  if (!ov) return m;
  overridesUsed++;
  return { ...m, zh: ov };
};
/** 事件的中文说明键是 `Event:<触发类>#<事件名>` */
const withZhEvent = (e, lang) => {
  if (lang !== 'zh') return e;
  const ov = OVERRIDES[`Event:${e.owner}#${e.name}`];
  if (!ov) return e;
  overridesUsed++;
  return { ...e, zh: ov };
};

const written = [];
const write = (dirIdx, file, content) => {
  written.push({ file, size: content.length });
  if (!DRY) writeFileSync(join(outDirs[dirIdx], file), content + '\n', 'utf8');
};

// ---- 需要产出的实体集合 ----
const entities = new Set();      // {kind:'class'|'namespace'|'functions', name}
const entityKey = (k, n) => `${k}:${n}`;
for (const [page, e] of Object.entries(MAP)) {
  if (e.kind === 'class') {
    entities.add(entityKey('class', e.target));
    for (const a of cls.get(e.target)?.chain || []) entities.add(entityKey('class', a));
  } else if (e.kind === 'namespace') {
    entities.add(entityKey('namespace', e.target));
    for (const m of e.merge || []) entities.add(entityKey('namespace', m));
  } else if (e.kind === 'functions') {
    entities.add(entityKey('functions', e.target));
  }
}

const stats = { methods: 0, statics: 0, events: 0, missing: 0, files: 0 };

for (const key of entities) {
  const [kind, name] = key.split(':');
  const sl = slug(name);
  let methods = [], statics = [], events = [], homeFile = null;

  if (kind === 'class') {
    const c = cls.get(name);
    if (!c) continue;
    methods = c.methods;
    statics = c.statics;
    events = eventsOf(name);
    homeFile = c.rel;
  } else if (kind === 'namespace') {
    const n = ns.get(name);
    if (!n) continue;
    methods = n.members.filter((m) => !m.isPrivate);
    homeFile = n.rel;
  } else {
    const f = fnsByFile.get(name) || [];
    methods = f;
    homeFile = MODEL.functionFiles.find((x) => x.file === name)?.file || name;
  }

  for (const lang of ['zh', 'en']) {
    const dirIdx = lang === 'zh' ? 0 : 1;
    if (methods.length) {
      const body = methods.map((m) => renderMethod(withZh(name, m, lang), lang)).join('\n\n');
      write(dirIdx, `${sl}-methods.md`, body);
      if (lang === 'zh') stats.methods += methods.length;
    }
    if (statics.length) {
      const body = statics.map((m) => renderMethod(withZh(name, m, lang), lang)).join('\n\n');
      write(dirIdx, `${sl}-statics.md`, body);
      if (lang === 'zh') stats.statics += statics.length;
    }
    if (events.length) {
      const body = events.map((e) => renderEvent(withZhEvent(e, lang), lang)).join('\n\n');
      write(dirIdx, `${sl}-events.md`, body);
      if (lang === 'zh') stats.events += events.length;
    }
  }
}

// ---- 页面增量片段：页面上还没有的自有成员（中英各自计算，两边列出的成员并不相同）----
// 注意：计算"已写成员"时要**排除页面自己的 <page>-missing.md**，否则会自我抵消
//（片段里有这些成员 → 下一轮认为已写 → 不再生成片段 → include 变死链）。
function writtenExcludingOwnMissing(page, lang) {
  const dir = lang === 'zh' ? join(ROOT, 'docs', 'api') : join(ROOT, 'docs', 'en', 'api');
  const pageFile = join(dir, `${page}.md`);
  if (!existsSync(pageFile)) return new Set();
  let txt = readFileSync(pageFile, 'utf8');
  const own = `includes/api/${slug(page)}-missing.md`;
  for (const m of [...txt.matchAll(/<!--@include:\s*([^\s>]+?)\s*-->/g)]) {
    const raw = m[1];
    if (raw.includes(own)) continue;
    const p = join(dir, raw.replace(/^\.\//, ''));
    if (existsSync(p)) txt += '\n' + readFileSync(p, 'utf8');
  }
  return writtenNames(txt);
}

for (const page of pageList()) {
  const e = MAP[page];
  if (!e || (e.kind !== 'class' && e.kind !== 'namespace' && e.kind !== 'functions')) continue;
  for (const lang of ['zh', 'en']) {
    const have = writtenExcludingOwnMissing(page, lang);
    let list = [];
    if (e.kind === 'class') list = (cls.get(e.target)?.methods || []).filter((m) => !have.has(m.n));
    else if (e.kind === 'namespace') list = (ns.get(e.target)?.members || []).filter((m) => !m.isPrivate && !have.has(m.n));
    else list = (fnsByFile.get(e.file) || []).filter((m) => !have.has(m.n));
    if (!list.length) continue;
    const body = list.map((m) => renderMethod(withZh(e.target, m, lang), lang)).join('\n\n');
    write(lang === 'zh' ? 0 : 1, `${slug(page)}-missing.md`, body);
    if (lang === 'zh') stats.missing += list.length;
  }
}

log(`实体 ${entities.size} 个；输出片段文件 ${written.length} 个${DRY ? '（dry-run，未落盘）' : ''}`);
log(`  方法条目 ${stats.methods}；静态方法 ${stats.statics}；事件 ${stats.events}；页面增量成员 ${stats.missing}`);
const total = written.reduce((a, w) => a + w.size, 0);
log(`  总字节 ${(total / 1024).toFixed(0)} KB`);
