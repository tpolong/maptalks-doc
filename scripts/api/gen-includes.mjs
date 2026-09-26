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
import { ROOT, CACHE, loadPageMap, pageList, log, renderMethod, renderEvent, expandIncludes, writtenNames, slug, documentedBySection, writeJson, readText, writeText } from './lib.mjs';

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

/** 人工/批量补写的说明（优先于源码 JSDoc）：
 *  · zh-overrides.json —— 纯中文字符串（历史资产）
 *  · i18n-overrides.json —— { zh, en } 双语（新链路）
 *  生成片段时按语言分别取用。 */
const ZH_PATH = join(ROOT, 'scripts', 'api', 'zh-overrides.json');
const I18N_PATH = join(ROOT, 'scripts', 'api', 'i18n-overrides.json');
const OVERRIDES = existsSync(ZH_PATH) ? JSON.parse(readFileSync(ZH_PATH, 'utf8')) : {};
const I18N = existsSync(I18N_PATH) ? JSON.parse(readFileSync(I18N_PATH, 'utf8')) : {};
let overridesUsed = 0;
/** 缺文字条目（写完片段后落盘，供 i18n-todo --from-gaps 消费） */
const GAPS = [];
/** 登记"该语言没有对应文字"的条目：
 *  · 中文侧：中文与英文都没有 → 页面上会出现占位说明
 *  · 英文侧：没有英文也算缺（英文页落到中文兜底不算英文文档） */
const noteGap = (key, entity, name, kind, lang, hasZh, hasEn) => {
  if (lang === 'zh' ? !(hasZh || hasEn) : !hasEn) GAPS.push({ key, entity, name, kind, lang });
};
/** 渲染一个成员条目，并登记缺口 */
const renderM = (entity, m, lang) => {
  const key = `${entity}.${m.n ?? m.name}`;
  const hit = I18N[key] || {};
  const hasZh = !!(hit.zh || OVERRIDES[key] || m.zh);
  const hasEn = !!(hit.en || m.en);
  noteGap(key, entity, m.n ?? m.name, 'member', lang, hasZh, hasEn);
  return renderMethod(withText(entity, m, lang), lang);
};
/** 渲染一个事件条目，并登记缺口 */
const renderE = (e, lang) => {
  const key = `Event:${e.owner}#${e.name}`;
  const hit = I18N[key] || {};
  const hasZh = !!(hit.zh || OVERRIDES[key] || e.zh);
  const hasEn = !!(hit.en || e.en);
  noteGap(key, e.owner, e.name, 'event', lang, hasZh, hasEn);
  return renderEvent(withTextEvent(e, lang), lang);
};
/** 成员：中英分别取用覆盖表，缺哪侧补哪侧（返回新对象，不污染模型） */
const withText = (entity, m, lang) => {
  const key = `${entity}.${m.n ?? m.name}`;
  const i18n = I18N[key] || {};
  const zh = i18n.zh || OVERRIDES[key];
  const en = i18n.en;
  const out = { ...m };
  // 中文说明两侧都注入：英文侧没有英文时可作为兜底，避免出现占位文字
  if (zh) out.zh = zh;
  if (en) out.en = en;
  if (zh || en) overridesUsed++;
  return out;
};
/** 事件：键是 `Event:<触发类>#<事件名>` */
const withTextEvent = (e, lang) => {
  const key = `Event:${e.owner}#${e.name}`;
  const i18n = I18N[key] || {};
  const zh = i18n.zh || OVERRIDES[key];
  const en = i18n.en;
  const out = { ...e };
  if (zh) out.zh = zh;
  if (en) out.en = en;
  if (zh || en) overridesUsed++;
  return out;
};

const written = [];
const write = (dirIdx, file, content) => {
  written.push({ file, size: content.length });
  if (!DRY) writeText(join(outDirs[dirIdx], file), content + '\n');
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

const stats = { methods: 0, statics: 0, events: 0, missing: 0, statMissing: 0, evMissing: 0, files: 0 };

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
      const body = methods.map((m) => renderM(name, m, lang)).join('\n\n');
      write(dirIdx, `${sl}-methods.md`, body);
      if (lang === 'zh') stats.methods += methods.length;
    }
    if (statics.length) {
      const body = statics.map((m) => renderM(name, m, lang)).join('\n\n');
      write(dirIdx, `${sl}-statics.md`, body);
      if (lang === 'zh') stats.statics += statics.length;
    }
    if (events.length) {
      const body = events.map((e) => renderE(e, lang)).join('\n\n');
      write(dirIdx, `${sl}-events.md`, body);
      if (lang === 'zh') stats.events += events.length;
    }
  }
}

// ---- 页面增量片段：页面上还没有的成员（中英各自计算，两边列出的成员并不相同）----
// 缺口按"整页展开后、**按章节**已写内容"计算（含 legacy 片段）：
//   · 不重复：已经写在对应章节里的不再生成
//   · 不漏：只在别处被提及（简介、options 表）或 legacy 片段没覆盖的会被补齐
// 口径与 audit.mjs 共用 lib.mjs 的 documentedBySection，避免两者漂移。
// 排除页面自己的三个生成片段，否则缺口会被自己填平（→ include 变死链）。
const OWN_SNIPPETS = (page) => [`${slug(page)}-missing.md`, `${slug(page)}-statics-missing.md`, `${slug(page)}-events-missing.md`];
function documentedFor(page, lang) {
  const dir = lang === 'zh' ? join(ROOT, 'docs', 'api') : join(ROOT, 'docs', 'en', 'api');
  const pageFile = join(dir, `${page}.md`);
  if (!existsSync(pageFile)) return { methods: new Set(), statics: new Set(), events: new Set() };
  let txt = readText(pageFile);
  const own = OWN_SNIPPETS(page);
  for (const m of [...txt.matchAll(/<!--@include:\s*([^\s>]+?)\s*-->/g)]) {
    const raw = m[1];
    if (own.some((o) => raw.endsWith(o))) continue;
    const p = join(dir, raw.replace(/^\.\//, ''));
    if (existsSync(p)) txt += '\n' + readText(p);
  }
  return documentedBySection(txt);
}

const NON_FRAMEWORK_ANCESTORS = (target) => (cls.get(target)?.chain || []).slice(1).filter((a) => !FRAMEWORK.has(a));

for (const page of pageList()) {
  const e = MAP[page];
  if (!e || (e.kind !== 'class' && e.kind !== 'namespace' && e.kind !== 'functions')) continue;
  for (const lang of ['zh', 'en']) {
    const have = documentedFor(page, lang);
    const dirIdx = lang === 'zh' ? 0 : 1;

    // ① 方法缺口（自有 + 非框架父类）
    let methods = [];
    if (e.kind === 'class') {
      methods = [...(cls.get(e.target)?.methods || []), ...NON_FRAMEWORK_ANCESTORS(e.target).flatMap((a) => cls.get(a)?.methods || [])];
    } else if (e.kind === 'namespace') {
      methods = [...(ns.get(e.target)?.members || []), ...(e.merge || []).flatMap((n) => ns.get(n)?.members || [])].filter((m) => !m.isPrivate);
    } else {
      methods = fnsByFile.get(e.file) || [];
    }
    const missingMethods = methods.filter((m) => !have.methods.has(m.n ?? m.name));
    if (missingMethods.length) {
      write(dirIdx, `${slug(page)}-missing.md`, missingMethods.map((m) => renderM(e.target, m, lang)).join('\n\n'));
      if (lang === 'zh') stats.missing += missingMethods.length;
    }

    // ② 静态方法缺口（自有 + 非框架父类）
    if (e.kind === 'class') {
      const statics = [...(cls.get(e.target)?.statics || []), ...NON_FRAMEWORK_ANCESTORS(e.target).flatMap((a) => cls.get(a)?.statics || [])];
      const missingStatics = statics.filter((m) => !have.statics.has(m.n));
      if (missingStatics.length) {
        write(dirIdx, `${slug(page)}-statics-missing.md`, missingStatics.map((m) => renderM(e.target, m, lang)).join('\n\n'));
        if (lang === 'zh') stats.statMissing += missingStatics.length;
      }
    }

    // ③ 事件缺口（自有 + 非框架父类）
    if (e.kind === 'class') {
      const evs = [...MODEL.events.filter((x) => x.owner === e.target),
        ...NON_FRAMEWORK_ANCESTORS(e.target).flatMap((a) => MODEL.events.filter((x) => x.owner === a))];
      const missingEvents = evs.filter((ev) => !have.events.has(ev.name));
      if (missingEvents.length) {
        write(dirIdx, `${slug(page)}-events-missing.md`, missingEvents.map((ev) => renderE(ev, lang)).join('\n\n'));
        if (lang === 'zh') stats.evMissing += missingEvents.length;
      }
    }
  }
}

writeJson(join(CACHE, 'text-gaps.json'), GAPS);
log(`文字缺口条目 ${GAPS.length}`);
log(`实体 ${entities.size} 个；输出片段文件 ${written.length} 个${DRY ? '（dry-run，未落盘）' : ''}`);
log(`  方法条目 ${stats.methods}；静态方法 ${stats.statics}；事件 ${stats.events}`);
log(`  页面缺口补齐：方法 ${stats.missing} / 静态 ${stats.statMissing} / 事件 ${stats.evMissing}`);
const total = written.reduce((a, w) => a + w.size, 0);
log(`  总字节 ${(total / 1024).toFixed(0)} KB`);
