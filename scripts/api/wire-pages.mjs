/**
 * scripts/api/wire-pages.mjs — 把生成的片段接进 API 页面（中英双份，幂等）
 *
 * 每个页面注入三类生成块（用 HTML 注释标记，重跑时先删旧块再插新块）：
 *   1) 自有成员补充    ### <实体> 的其他公开方法      ← includes/api/<page>-missing.md
 *   2) 继承方法        ### 继承自 <父类> 的方法        ← includes/api/<父类>-methods.md
 *                      ### 混入的方法（Eventable /…）
 *   3) 继承事件        ### 继承自 <父类> 的事件        ← includes/api/<父类>-events.md
 *
 * 已是早期迁移页（用 includes/<x>-methods.md 这类旧片段）的页面，跳过被旧片段覆盖的父类，避免重复。
 *
 * 用法：node scripts/api/wire-pages.mjs [--dry]
 */
import { readFileSync, writeFileSync, existsSync, readdirSync } from 'node:fs';
import { join, basename } from 'node:path';
import { ROOT, CACHE, loadPageMap, pageList, log, slug } from './lib.mjs';

const DRY = process.argv.includes('--dry');
const MODEL = JSON.parse(readFileSync(join(CACHE, 'api-model.json'), 'utf8'));
const MAP = loadPageMap();
const cls = new Map(MODEL.classes.map((c) => [c.name, c]));
const ns = new Map(MODEL.namespaces.map((n) => [n.name, n]));

const FRAMEWORK = new Set(['Base', 'Class', 'Eventable', 'JSONAble', 'Handlerable', 'Renderable', 'Menuable', 'EventableMixin']);
const START = '<!-- api-gen:start -->';
const END = '<!-- api-gen:end -->';

/** 实体名 → 页面名（只有存在页面的父类才生成链接，避免死链） */
const PAGE_OF = new Map();
for (const [page, e] of Object.entries(MAP || {})) {
  if (e && e.target) PAGE_OF.set(e.target, page);
}
const linkTo = (name, lang) => {
  const page = PAGE_OF.get(name);
  if (!page) return null;
  return lang === 'zh' ? `/api/${page}` : `/en/api/${page}`;
};

const norm = (s) => s.toLowerCase().replace(/-/g, '');

/** 页面里已有的**旧** include 文件名（排除本工具生成的 includes/api/*，否则重跑会把自己误判为"已覆盖"） */
const includeNames = (txt) => [...txt.matchAll(/<!--@include:\s*([^\s>]+?)\s*-->/g)]
  .map((m) => m[1])
  .filter((p) => !/includes[\\/]api[\\/]/.test(p))
  .map((p) => basename(p).replace(/\.md$/, ''));

const M = {
  zh: {
    memberHead: /^##\s*(成员方法|成员函数|方法|主要函数|属性\s*\/\s*静态方法)\s*$/,
    staticHead: /^##\s*静态方法\s*$/,
    eventHead: /^##\s*事件/,
    anyHead: /^##\s+/,
    missingTitle: (t) => `### ${t} 的其他公开方法`,
    inheritTitle: (t) => `### 继承自 ${t} 的方法`,
    inheritNote: (t, link) => `下列方法由父类 [${t}](${link}) 提供，本类的实例同样可以调用。`,
    inheritNotePlain: (t) => `下列方法由父类 ${t} 提供，本类的实例同样可以调用。`,
    mixinTitle: '### 混入的方法',
    mixinNote: (names) => `本类通过混入获得以下能力的方法，详见对应页面：${names}。`,
    eventTitle: (t) => `### 继承自 ${t} 的事件`,
    noMemberSection: '## 成员方法',
    noEventSection: '## 事件',
  },
  en: {
    memberHead: /^##\s*(Methods|Member Methods|Main Functions|Functions|Properties\s*\/\s*Static Methods)\s*$/i,
    staticHead: /^##\s*Static Methods\s*$/i,
    eventHead: /^##\s*Events/i,
    anyHead: /^##\s+/,
    missingTitle: (t) => `### Other Public Methods of ${t}`,
    inheritTitle: (t) => `### Methods Inherited from ${t}`,
    inheritNote: (t, link) => `The following methods are provided by the parent class [${t}](${link}) and are available on instances of this class.`,
    inheritNotePlain: (t) => `The following methods are provided by the parent class ${t} and are available on instances of this class.`,
    mixinTitle: '### Mixed-in Methods',
    mixinNote: (names) => `This class gains the following method groups from mixins; see the linked pages for details: ${names}.`,
    eventTitle: (t) => `### Events Inherited from ${t}`,
    noMemberSection: '## Methods',
    noEventSection: '## Events',
  },
};

/** 该页是否已有旧片段覆盖某父类 */
function legacyCovers(includes, ancestor) {
  const n = norm(ancestor);
  return includes.some((f) => {
    const b = norm(f);
    return b === `${n}methods` || b === `${n}events` || b === `${n}statics`;
  });
}

function stripGenerated(txt) {
  let out = txt, i;
  while ((i = out.indexOf(START)) >= 0) {
    const j = out.indexOf(END, i);
    out = out.slice(0, i) + (j >= 0 ? out.slice(j + END.length) : '');
  }
  return out.replace(/\n{3,}/g, '\n\n');
}

function buildBlocks(page, e, lang, includes) {
  const t = M[lang];
  const blocks = [];
  // 1) 自有成员补充
  if (existsSync(join(ROOT, lang === 'zh' ? 'docs' : 'docs/en', 'api', 'includes', 'api', `${slug(page)}-missing.md`))) {
    blocks.push({ slot: 'member', text: `${t.missingTitle(e.target)}\n\n<!--@include: ./includes/api/${slug(page)}-missing.md-->` });
  }
  if (e.kind !== 'class') return blocks;

  const c = cls.get(e.target);
  if (!c) return blocks;
  const chain = (c.chain || []).slice(1);
  // 混入可能声明在链上任意一层（如 Polygon 的 Eventable/JSONAble 来自 Geometry）
  const mixins = [...new Set((c.chain || []).flatMap((n) => cls.get(n)?.mixins || []))];
  const parts = [];
  for (const a of chain) {
    if (FRAMEWORK.has(a)) continue;
    if (legacyCovers(includes, a)) continue;
    const hasMethods = existsSync(join(ROOT, 'docs', 'api', 'includes', 'api', `${slug(a)}-methods.md`));
    const hasEvents = existsSync(join(ROOT, 'docs', 'api', 'includes', 'api', `${slug(a)}-events.md`));
    const link = linkTo(a, lang);
    const note = link ? t.inheritNote(a, link) : t.inheritNotePlain(a);
    if (hasMethods) {
      parts.push(`${t.inheritTitle(a)}\n\n${note}\n\n<!--@include: ./includes/api/${slug(a)}-methods.md-->`);
    }
    if (hasEvents) {
      blocks.push({ slot: 'event', text: `${t.eventTitle(a)}\n\n<!--@include: ./includes/api/${slug(a)}-events.md-->` });
    }
  }
  // 框架混入：只列名字与方法名
  const mixinNames = mixins.filter((m) => FRAMEWORK.has(m) || m === 'CenterMixin');
  if (mixinNames.length) {
    const desc = mixinNames.map((m) => {
      const mc = cls.get(m);
      const names = (mc?.methods || []).slice(0, 8).map((x) => `\`${x.n}\``).join('、');
      const link = linkTo(m, lang);
      return `${link ? `[${m}](${link})` : m}${names ? `（${names}…）` : ''}`;
    }).join('；');
    parts.push(`${t.mixinTitle}\n\n${t.mixinNote(desc)}`);
  }
  if (parts.length) blocks.push({ slot: 'member', text: parts.join('\n\n') });
  return blocks;
}

function insertBlocks(lines, blocks, lang) {
  const t = M[lang];
  const headings = lines.map((l, i) => (l.match(t.anyHead) ? i : -1)).filter((i) => i >= 0);
  const memberIdx = headings.find((i) => t.memberHead.test(lines[i]));
  const eventIdx = headings.find((i) => t.eventHead.test(lines[i]));
  const sectionEnd = (startIdx) => {
    if (startIdx < 0) return lines.length;
    const next = headings.find((i) => i > startIdx);
    return next === undefined ? lines.length : next;
  };
  let memberIns = memberIdx === undefined ? null : sectionEnd(memberIdx);
  let eventIns = eventIdx === undefined ? null : sectionEnd(eventIdx);

  // 没有成员/事件章节时，创建它们
  const needMember = blocks.some((b) => b.slot === 'member') && memberIns === null;
  const needEvent = blocks.some((b) => b.slot === 'event') && eventIns === null;
  if (needMember) {
    const anchor = headings.find((i) => t.staticHead.test(lines[i]) ?? false) ?? headings.find((i) => t.eventHead.test(lines[i]));
    const at = anchor === undefined ? lines.length : anchor;
    lines.splice(at, 0, t.noMemberSection, '');
    return insertBlocks(lines, blocks, lang);          // 重新计算位置
  }
  if (needEvent) {
    if (!lines.length || lines[lines.length - 1].trim() !== '') lines.push('');
    lines.push(t.noEventSection, '');
    return insertBlocks(lines, blocks, lang);
  }

  const memberText = blocks.filter((b) => b.slot === 'member').map((b) => b.text).join('\n\n');
  const eventText = blocks.filter((b) => b.slot === 'event').map((b) => b.text).join('\n\n');
  // 先插事件（后面的位置不受影响），再插成员
  if (eventText) {
    const block = ['', START, eventText, END, ''];
    lines.splice(eventIns, 0, ...block);
  }
  if (memberText) {
    const block = ['', START, memberText, END, ''];
    lines.splice(memberIns, 0, ...block);
  }
  return lines;
}

let changed = 0, skipped = 0;
for (const page of pageList()) {
  const e = MAP[page];
  if (!e || e.kind === 'prose') { skipped++; continue; }
  for (const lang of ['zh', 'en']) {
    const file = join(ROOT, lang === 'zh' ? 'docs' : 'docs/en', 'api', `${page}.md`);
    if (!existsSync(file)) { log(`  !! 缺文件 ${file}`); continue; }
    let txt = readFileSync(file, 'utf8');
    const includes = includeNames(txt);
    txt = stripGenerated(txt);
    const blocks = buildBlocks(page, e, lang, includes);
    if (!blocks.length) continue;
    const lines = insertBlocks(txt.split('\n'), blocks, lang);
    const out = lines.join('\n').replace(/\n{3,}/g, '\n\n').replace(/\n*$/, '\n');
    if (out !== readFileSync(file, 'utf8')) {
      changed++;
      if (!DRY) writeFileSync(file, out, 'utf8');
    }
  }
}
log(`处理完成：改动 ${changed} 个文件${DRY ? '（dry-run）' : ''}；跳过 ${skipped} 个非类页面`);
