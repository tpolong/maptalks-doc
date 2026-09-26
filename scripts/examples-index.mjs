/**
 * scripts/examples-index.mjs — 示例符号索引（影响分析的反查表）
 *
 * 扫描 docs/public/examples 下的每个示例（index.html / index.js），抽出：
 *   - imports      裸模块导入：包名 → 导入的符号名列表
 *   - globals      `maptalks.Xxx` 形式的全局用法
 *   - cdn          外链资源（unpkg / esm.sh / cdnjs …），尽量解析出 包名@版本
 *   - placeholders 站点占位符（{res} / {urlTemplate} / {attribution}）
 *   - aliases      站点本地别名与本地 shim（gl-layers、/lib/*）
 *
 * 产出两份：`examples`（逐例明细）与三张反查表 `bySymbol` / `byPackage` / `byVersion`。
 * 引擎发版时用反查表把"改了什么"直接映射到"要改哪些示例"。
 *
 * 用法：
 *   node scripts/examples-index.mjs [--out <file>] [--print] [--symbol <name>] [--package <name>]
 *   默认输出 .vitepress/cache/examples-symbol-index.json（git-ignored）
 */
import { readFileSync, readdirSync, existsSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { ROOT, readText, writeJson } from './api/lib.mjs';

const argv = process.argv.slice(2);
const arg = (n, d) => { const i = argv.indexOf(n); return i >= 0 ? argv[i + 1] : d; };

const EX = join(ROOT, 'docs', 'public', 'examples');
const OUT = arg('--out', join(ROOT, '.vitepress', 'cache', 'examples-symbol-index.json'));

const dirs = (p) => readdirSync(p, { withFileTypes: true }).filter((d) => d.isDirectory()).map((d) => d.name);

/** 解析 unpkg / esm.sh / cdnjs 形式的 URL，尽量得到 包名@版本 */
function parseCdn(url) {
  const out = { url, pkg: null, version: null };
  try {
    const path = url.replace(/^https?:\/\//, '');
    const seg = path.split('/');
    const host = seg.shift();
    out.host = host;
    if (host === 'unpkg.com' || host === 'cdn.jsdelivr.net' || host === 'esm.sh') {
      let i = 0;
      if (seg[i] === 'npm') i++;
      let name = seg[i] || '';
      if (name.startsWith('@') && seg[i + 1]) name += '/' + seg[i + 1];
      const m = /^(.+?)@(.+)$/.exec(name);
      if (m) { out.pkg = m[1]; out.version = m[2]; }
      else out.pkg = name || null;
    }
  } catch { /* 忽略畸形 URL */ }
  return out;
}

/** 从一段源码里抽 import 语句 → [{ spec, symbols[], sideEffect }]
 *  只在行首匹配、且用 [^;]*? 限定同一语句，避免跨语句误配（踩过：副作用 import 后面的语句被并进 clause） */
function parseImports(code) {
  const res = [];
  for (const m of code.matchAll(/^[ \t]*import\s+([^;]*?)\s+from\s*["']([^"']+)["']/gm)) {
    const clause = m[1].trim();
    const symbols = [];
    const braced = /\{([\s\S]*?)\}/.exec(clause);
    if (braced) {
      for (const part of braced[1].split(',')) {
        const name = part.trim().split(/\s+as\s+/)[0].trim();
        if (name) symbols.push(name);
      }
    }
    const star = /\*\s+as\s+([\w$]+)/.exec(clause);
    const def = clause.replace(/\{[\s\S]*?\}/, '').replace(/\*\s+as\s+[\w$]+/, '').replace(/,/g, '').trim();
    if (def) symbols.push(def);
    res.push({ spec: m[2], symbols, ns: star ? star[1] : null, sideEffect: false });
  }
  for (const m of code.matchAll(/^[ \t]*import\s*["']([^"']+)["']/gm)) res.push({ spec: m[1], symbols: [], ns: null, sideEffect: true });
  return res;
}

export function buildIndex() {
  const examples = {};
  const bySymbol = {}, byPackage = {}, byVersion = {}, byCdnHost = {};
  const add = (map, key, path) => { if (!key) return; (map[key] = map[key] || []).push(path); };

  let total = 0;
  for (const cat of dirs(EX)) {
    if (cat === 'resources') continue;
    for (const sub of dirs(join(EX, cat))) {
      for (const name of dirs(join(EX, cat, sub))) {
        const dir = join(EX, cat, sub, name);
        const p = `${cat}/${sub}/${name}`;
        const rec = { imports: {}, globals: [], cdn: [], placeholders: [], aliases: [] };
        const sources = [];
        for (const f of ['index.html', 'index.js']) {
          const file = join(dir, f);
          if (existsSync(file)) sources.push(readText(file));
        }
        if (!sources.length) continue;
        total++;
        const code = sources.join('\n');
        for (const imp of parseImports(code)) {
          if (!/^[./]/.test(imp.spec) && !/^https?:/.test(imp.spec)) {
            rec.imports[imp.spec] = [...new Set([...(rec.imports[imp.spec] || []), ...imp.symbols])];
            add(byPackage, imp.spec, p);
            for (const s of imp.symbols) add(bySymbol, s, p);
            // 命名空间别名用法：import * as gl from "gl-layers" → `gl.Foo` 记到该包
            if (imp.ns) {
              for (const u of code.matchAll(new RegExp('\\b' + imp.ns + '\\.([A-Z][\\w$]*)', 'g'))) {
                rec.imports[imp.spec] = [...new Set([...(rec.imports[imp.spec] || []), u[1]])];
                add(bySymbol, u[1], p);
              }
            }
          }
        }
        for (const g of code.matchAll(/\bmaptalks\.([A-Z][\w$]*)/g)) {
          // 只收大写开头的（真类名）；`maptalks.css` 这类样式引用不算符号
          if (!rec.globals.includes(g[1])) rec.globals.push(g[1]);
          add(bySymbol, g[1], p);
        }
        for (const u of code.matchAll(/https?:\/\/[^\s"'`)>]+?\.(?:js|mjs|css|json|wasm|pbf|jpg|png|webp)/g)) {
          const c = parseCdn(u[0]);
          rec.cdn.push(c);
          add(byCdnHost, c.host, p);
          if (c.pkg) { add(byPackage, c.pkg, p); if (c.version) add(byVersion, `${c.pkg}@${c.version}`, p); }
        }
        for (const ph of ['{res}', '{urlTemplate}', '{attribution}']) if (code.includes(ph)) rec.placeholders.push(ph);
        if (/["']gl-layers["']/.test(code)) rec.aliases.push('gl-layers');
        for (const m of code.matchAll(/["'](\/lib\/[\w.\-]+\.(?:mjs|js))["']/g)) rec.aliases.push(m[1]);
        rec.aliases = [...new Set(rec.aliases)];
        rec.cdn = rec.cdn.slice(0, 40);
        examples[p] = rec;
      }
    }
  }
  const uniq = (o) => Object.fromEntries(Object.entries(o).map(([k, v]) => [k, [...new Set(v)].sort()]));
  return {
    generatedAt: new Date().toISOString().slice(0, 16).replace('T', ' '),
    total,
    examples,
    bySymbol: uniq(bySymbol),
    byPackage: uniq(byPackage),
    byVersion: uniq(byVersion),
    byCdnHost: uniq(byCdnHost),
  };
}

const isMain = process.argv[1] && process.argv[1].replace(/\\/g, '/').endsWith('scripts/examples-index.mjs');
if (isMain) {
  const idx = buildIndex();
  if (argv.includes('--print') || argv.includes('--symbol') || argv.includes('--package')) {
    console.log(`示例 ${idx.total}；符号 ${Object.keys(idx.bySymbol).length}；包 ${Object.keys(idx.byPackage).length}；版本 pin ${Object.keys(idx.byVersion).length}`);
    const sym = arg('--symbol'), pkg = arg('--package');
    if (sym) console.log(`\n符号《${sym}》出现在：`, idx.bySymbol[sym] || '(未命中)');
    if (pkg) console.log(`\n包《${pkg}》出现在（前 20）：`, (idx.byPackage[pkg] || []).slice(0, 20));
  }
  mkdirSync(dirname(OUT), { recursive: true });
  writeJson(OUT, idx);
  console.log(`\n已写 ${OUT.replace(ROOT, '.')}（${idx.total} 例）`);
}

export default buildIndex;
