/**
 * scripts/api/verify.mjs — API 文档一致性校验（P6 门禁）
 *
 *   1) 链接：页面里 /api/xxx、/en/api/xxx 链接必须有对应页面
 *   2) include：每个 <!--@include: ...--> 目标必须存在
 *   3) 反向：页面上列出的成员必须能在源码模型里找到（防错写/过时）
 *   4) 正向：源码里的公开成员必须在页面（含 include）出现（防漏）
 *   5) 中英对照：每个中文页都要有 en 页，反之亦然
 *
 * 用法：node scripts/api/verify.mjs [--fix-links]
 */
import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { join, dirname, resolve, basename } from 'node:path';
import { ROOT, CACHE, loadPageMap, pageList, documentedBySection, writtenNames, readText } from './lib.mjs';

const MODEL = JSON.parse(readFileSync(join(CACHE, 'api-model.json'), 'utf8'));
const MAP = loadPageMap();
const classByName = new Map(MODEL.classes.map((c) => [c.name, c]));
const nsByName = new Map(MODEL.namespaces.map((n) => [n.name, n]));

// 兜底集合：整个模型里出现过的成员名。混入（mixin）里声明的方法未必挂在任何实体上
// （例：ConnectorLine.ts 里的 `@function Connectable.getConnectSource`），
// 逐实体比对会误报，故只有"全模型都查不到"的名字才算未知成员。
const ALL_MEMBERS = new Set([
  ...MODEL.classes.flatMap((c) => [...(c.methods || []).map((m) => m.n), ...(c.statics || []).map((m) => m.n)]),
  ...MODEL.namespaces.flatMap((n) => (n.members || []).map((m) => m.n)),
]);

const zhPages = new Set(pageList());
const enPages = new Set(readdirSync(join(ROOT, 'docs', 'en', 'api')).filter((f) => f.endsWith('.md') && f !== 'index.md').map((f) => f.replace(/\.md$/, '')));

const problems = { link: [], include: [], unknownMember: [], missingMember: [], parity: [] };

function expand(pageFile, lang) {
  let txt = readText(pageFile);
  const parts = [{ file: pageFile, txt }];
  for (const m of [...txt.matchAll(/<!--@include:\s*([^\s>]+?)\s*-->/g)]) {
    const p = resolve(dirname(pageFile), m[1]);
    if (!existsSync(p)) { problems.include.push(`${lang}/${basename(pageFile)}: ${m[1]}`); continue; }
    const inc = readText(p);
    parts.push({ file: p, txt: inc });
    txt = txt.replace(m[0], inc);
  }
  return { txt, parts };
}

/** 实体在源码模型里的全部成员名（自有 + 继承链 + 混入），供反向校验用 */
function classMembers(name, seen = new Set()) {
  const c = classByName.get(name);
  if (!c || seen.has(name)) return [];
  seen.add(name);
  const own = [...(c.methods || []).map((m) => m.n), ...(c.statics || []).map((m) => m.n)];
  const inherited = (c.chain || []).slice(1).flatMap((a) => {
    const p = classByName.get(a);
    return p ? [...(p.methods || []).map((m) => m.n), ...(p.statics || []).map((m) => m.n)] : [];
  });
  const mixed = (c.mixins || []).flatMap((m) => classMembers(m, seen));
  return [...own, ...inherited, ...mixed];
}

for (const lang of ['zh', 'en']) {
  const dir = join(ROOT, lang === 'zh' ? 'docs' : 'docs/en', 'api');
  for (const f of readdirSync(dir).filter((x) => x.endsWith('.md'))) {
    const page = f.replace(/\.md$/, '');
    const file = join(dir, f);
    const { txt } = expand(file, lang);
    // 1) 链接
    for (const m of txt.matchAll(/\]\((\/(?:en\/)?api\/[^)#\s]+)(#[^)\s]*)?\)/g)) {
      const target = m[1].replace(/^\/(en\/)?api\//, '').replace(/\/$/, '');
      const pool = m[1].startsWith('/en/') ? enPages : zhPages;
      if (!pool.has(target) && target !== '' && target !== 'index') {
        problems.link.push(`${lang}/${page}: ${m[1]}`);
      }
    }
    // 3/4) 成员一致性（仅对能映射到源码实体的页面）
    //   正向 missingMember：源码里的公开成员必须在页面出现 → 拦退出码
    //   反向 unknownMember：页面写出的成员必须在源码模型（含继承链与混入）里存在 → 暂只告警
    const e = MAP[page];
    if (!e) continue;
    let own = [];
    const allowed = new Set();
    if (e.kind === 'class') {
      own = (classByName.get(e.target)?.methods || []).map((x) => x.n);
      for (const n of classMembers(e.target)) allowed.add(n);
    } else if (e.kind === 'namespace') {
      own = (nsByName.get(e.target)?.members || []).map((x) => x.n);
      for (const n of [e.target, ...(e.merge || [])]) {
        for (const m of nsByName.get(n)?.members || []) allowed.add(m.n);
      }
    }
    if (allowed.size) {
      // 反向只在"方法 / 静态方法"章节里做判定：事件与 options 章节会带来大量同名噪声
      const b = documentedBySection(txt).bodies;
      for (const [sec, body] of [['方法', b.methods], ['静态方法', b.statics]]) {
        for (const n of writtenNames(body + '\n' + b.mixed)) {
          if (!allowed.has(n) && !ALL_MEMBERS.has(n)) {
            problems.unknownMember.push(`${lang}/${page} [${e.target}] ${sec}章节列出的 ${n} 在整个源码模型里都查不到`);
          }
        }
      }
    }
    // 与 gen-includes/audit 同口径：按章节取"已写成员"（反引号跨度里的开头标识符）
    if (own.length) {
      const listed = documentedBySection(txt).methods;
      const missing = [...new Set(own)].filter((n) => !listed.has(n));
      if (missing.length) problems.missingMember.push(`${lang}/${page} [${e.target}] 缺 ${missing.length}: ${missing.slice(0, 12).join(', ')}`);
    }
  }
}
// 5) 中英对照
for (const p of zhPages) if (!enPages.has(p)) problems.parity.push(`en 缺页: ${p}`);
for (const p of enPages) if (!zhPages.has(p)) problems.parity.push(`zh 缺页: ${p}`);

const counts = Object.entries(problems).map(([k, v]) => `${k}:${v.length}`).join('  ');
console.log(`校验完成 → ${counts}`);
for (const [k, list] of Object.entries(problems)) {
  if (!list.length) continue;
  console.log(`\n== ${k}（${list.length}）==`);
  for (const x of list.slice(0, 30)) console.log('  ' + x);
  if (list.length > 30) console.log(`  …还有 ${list.length - 30} 条`);
}
if (problems.unknownMember.length) {
  console.log('\n注意：unknownMember 目前只告警、不拦退出码；等它归零后再提升为门禁。');
}
const blocking = problems.link.length + problems.include.length + problems.parity.length + problems.missingMember.length;
process.exit(blocking ? 1 : 0);
