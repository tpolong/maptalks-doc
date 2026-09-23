/**
 * scripts/api/check-render.mjs — 构建前的快速门禁：逐页展开 include → VitePress markdown → Vue 解析
 *
 * 比整站 build 快得多（秒级），能在构建前抓出：
 *   - 未转义的 `<`（Vue：Element is missing end tag）
 *   - `{...}` 被当成属性语法（Vue：Duplicate attribute）
 *   - include 路径不存在
 *
 * 用法：node scripts/api/check-render.mjs [页面数量上限]
 */
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { resolve, join, dirname } from 'node:path';
import { pathToFileURL } from 'node:url';
import { createMarkdownRenderer } from 'vitepress';
import { ROOT, pageList } from './lib.mjs';

function loadCompilerDom() {
  const store = resolve(ROOT, 'node_modules/.pnpm');
  const dir = readdirSync(store).find((d) => d.startsWith('@vue+compiler-dom@'));
  const base = join(store, dir, 'node_modules/@vue/compiler-dom/dist');
  const file = readdirSync(base).find((f) => /^compiler-dom\.cjs\.js$/.test(f));
  return import(pathToFileURL(join(base, file)).href);
}
const { baseParse } = await loadCompilerDom();
const md = await createMarkdownRenderer(ROOT, { html: true, linkify: true }, '/');

function expand(absPath) {
  let txt = readFileSync(absPath, 'utf8');
  const missing = [];
  for (const m of [...txt.matchAll(/<!--@include:\s*([^\s>]+?)\s*-->/g)]) {
    const p = resolve(dirname(absPath), m[1]);
    if (!existsSync(p)) { missing.push(m[1]); continue; }
    txt = txt.replace(m[0], readFileSync(p, 'utf8'));
  }
  return { txt, missing };
}

const badges = [];
let fails = 0, warns = 0, checked = 0;
for (const lang of ['zh', 'en']) {
  const dir = join(ROOT, lang === 'zh' ? 'docs' : 'docs/en', 'api');
  for (const f of readdirSync(dir).filter((x) => x.endsWith('.md'))) {
    const abs = join(dir, f);
    const { txt, missing } = expand(abs);
    checked++;
    if (missing.length) { fails++; badges.push(`[include 缺失] ${lang}/${f}: ${missing.join(', ')}`); continue; }
    let html;
    try { html = md.render(txt, { path: abs, relativePath: f, cleanUrls: false }); }
    catch (e) { fails++; badges.push(`[markdown] ${lang}/${f}: ${e.message}`); continue; }
    const htmlLines = html.split('\n');
    const errs = [];
    try {
      baseParse(html, {
        onError: (e) => {
          const src = e.loc ? (htmlLines[e.loc.start.line - 1] || '') : '';
          if (/<img\b/.test(src)) return;                 // void 标签假阳性
          errs.push(`${String(e.message).split('\n')[0]}${e.loc ? ` @${e.loc.start.line}:${e.loc.start.column}` : ''}${src ? `\n      ⟶ ${src.slice(0, 160)}` : ''}`);
        },
      });
    } catch (e) { errs.push(String(e.message).split('\n')[0]); }
    if (errs.length) { fails++; badges.push(`[vue] ${lang}/${f}: ${errs[0]}`); }
  }
}
console.log(`检查 ${checked} 个页面：失败 ${fails}，告警 ${warns}`);
for (const b of badges.slice(0, 40) ) console.log('  ' + b);
if (badges.length > 40) console.log(`  …还有 ${badges.length - 40} 条`);
process.exit(fails ? 1 : 0);
