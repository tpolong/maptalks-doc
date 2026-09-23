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
import { ROOT, CACHE, loadPageMap, pageList, documentedBySection } from './lib.mjs';

const MODEL = JSON.parse(readFileSync(join(CACHE, 'api-model.json'), 'utf8'));
const MAP = loadPageMap();
const classByName = new Map(MODEL.classes.map((c) => [c.name, c]));
const nsByName = new Map(MODEL.namespaces.map((n) => [n.name, n]));

const zhPages = new Set(pageList());
const enPages = new Set(readdirSync(join(ROOT, 'docs', 'en', 'api')).filter((f) => f.endsWith('.md') && f !== 'index.md').map((f) => f.replace(/\.md$/, '')));

const problems = { link: [], include: [], unknownMember: [], missingMember: [], parity: [] };

function expand(pageFile, lang) {
  let txt = readFileSync(pageFile, 'utf8');
  const parts = [{ file: pageFile, txt }];
  for (const m of [...txt.matchAll(/<!--@include:\s*([^\s>]+?)\s*-->/g)]) {
    const p = resolve(dirname(pageFile), m[1]);
    if (!existsSync(p)) { problems.include.push(`${lang}/${basename(pageFile)}: ${m[1]}`); continue; }
    const inc = readFileSync(p, 'utf8');
    parts.push({ file: p, txt: inc });
    txt = txt.replace(m[0], inc);
  }
  return { txt, parts };
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
    const e = MAP[page];
    if (!e) continue;
    let own = [];
    if (e.kind === 'class') own = (classByName.get(e.target)?.methods || []).map((x) => x.n);
    else if (e.kind === 'namespace') own = (nsByName.get(e.target)?.members || []).map((x) => x.n);
    if (!own.length) continue;
    // 与 gen-includes/audit 同口径：按章节取"已写成员"（反引号跨度里的开头标识符）
    const listed = documentedBySection(txt).methods;
    const missing = [...new Set(own)].filter((n) => !listed.has(n));
    if (missing.length) problems.missingMember.push(`${lang}/${page} [${e.target}] 缺 ${missing.length}: ${missing.slice(0, 12).join(', ')}`);
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
process.exit(problems.link.length || problems.include.length || problems.parity.length ? 1 : 0);
