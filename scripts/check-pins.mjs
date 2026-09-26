/**
 * scripts/check-pins.mjs — REPL import map / Vite exclude / 示例裸导入 一致性门禁
 *
 * 校验：
 *   1) import map 里的引擎包（docs-baseline.json 的 engine 字段有版本记录的）必须 pin 同一版本
 *   2) 示例源码（index.html / index.js）里 import 的裸模块必须能在 import map 里解析
 *   3) 被示例引用的 import map 裸模块必须列入 .vitepress/config.ts 的 optimizeDeps.exclude
 *
 * 用法：node scripts/check-pins.mjs
 * 退出码：有 FAIL 即 1
 */
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { ROOT } from './api/lib.mjs';

const REPL = join(ROOT, 'docs', 'examples', 'ExampleRepl.vue');
const CONFIG = join(ROOT, '.vitepress', 'config.ts');
const BASELINE = join(ROOT, 'docs-baseline.json');
const EX = join(ROOT, 'docs', 'public', 'examples');

const fail = [];
const warn = [];

if (!existsSync(BASELINE)) {
  console.error(`缺 ${BASELINE}（先跑 node scripts/baseline.mjs --write）`);
  process.exit(1);
}
const baseline = JSON.parse(readFileSync(BASELINE, 'utf8'));
const engine = baseline.engine || {};

// ---------- import map
const replTxt = readFileSync(REPL, 'utf8');
const start = replTxt.indexOf('imports: {');
if (start < 0) { console.error('ExampleRepl.vue 里找不到 imports: {'); process.exit(1); }
const tail = replTxt.slice(start);
const endM = /\n\s{0,4}\},?\s*\n/.exec(tail);
const region = endM ? tail.slice(0, endM.index) : tail;
const imports = new Map();
for (const m of region.matchAll(/(?:^|[\s,{])(?:"([^"\s]+)"|([A-Za-z_$][\w$.-]*))\s*:\s*"([^"]+)"/g)) {
  const spec = m[1] || m[2];
  if (spec && !imports.has(spec)) imports.set(spec, m[3]);
}

const pinnedVersion = (url) => {
  const m = /@(\d[^/?#]*)(?:\/|$)/.exec(url);
  return m ? m[1] : null;
};

// 站点本地 shim（/lib/*）没有可解析的 URL 版本，在此声明其打包来源版本并与基线核对
const SHIM_SOURCE_VERSION = {
  '@maptalks/traffic': '0.124.4', // docs/public/lib/maptalks.traffic.es.js 的来源版本
};

// 1) 引擎包必须与基线同版本
let checked = 0;
for (const [spec, url] of imports) {
  const want = engine[spec];
  if (!want) continue;
  checked++;
  if (url.startsWith('/')) {
    const declared = SHIM_SOURCE_VERSION[spec];
    if (!declared) fail.push(`本地 shim 未声明来源版本：${spec} → ${url}（基线 ${want}；请在 check-pins.mjs 的 SHIM_SOURCE_VERSION 里声明）`);
    else if (declared !== want) fail.push(`本地 shim 来源版本与基线不一致：${spec} 声明 ${declared}，基线 ${want}`);
    continue;
  }
  const got = pinnedVersion(url);
  if (!got) fail.push(`未 pin 版本：${spec} → ${url}（基线要求 ${want}）`);
  else if (got !== want) fail.push(`版本与基线不一致：${spec} 现 ${got}，基线 ${want}`);
}
if (!checked) warn.push('import map 里没有匹配到任何基线引擎包，请确认 baseline.engine 的键名');

// ---------- 示例里的裸导入
const files = [];
const walk = (dir) => {
  for (const d of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, d.name);
    if (d.isDirectory()) { if (d.name !== 'resources') walk(p); }
    else if (/^index\.(html|js)$/.test(d.name)) files.push(p);
  }
};
walk(EX);

const used = new Map(); // 包名 → 出现处
for (const f of files) {
  const txt = readFileSync(f, 'utf8');
  for (const re of [/\bfrom\s*["']([^"']+)["']/g, /\bimport\s*\(\s*["']([^"']+)["']\s*\)/g, /\bimport\s*["']([^"']+)["']/g]) {
    for (const m of txt.matchAll(re)) {
      const s = m[1];
      if (/^[./]/.test(s) || /^(https?:)?\/\//.test(s) || /^data:/.test(s)) continue;
      const pkg = s.startsWith('@') ? s.split('/').slice(0, 2).join('/') : s.split('/')[0];
      if (!used.has(pkg)) used.set(pkg, f.slice(ROOT.length + 1).replace(/\\/g, '/'));
    }
  }
}

// 2) 必须能被 import map 解析
for (const [pkg, where] of used) {
  if (!imports.has(pkg)) fail.push(`示例裸导入无法解析：《${pkg}》（如 ${where}）不在 import map 里`);
}

// 3) 被示例引用的 import map 键必须列入 optimizeDeps.exclude
const cfg = readFileSync(CONFIG, 'utf8');
const exM = /optimizeDeps:\s*\{[\s\S]*?exclude:\s*\[([\s\S]*?)\]/.exec(cfg);
const exclude = new Set(exM ? [...exM[1].matchAll(/"([^"]+)"/g)].map((m) => m[1]) : []);
if (!exM) warn.push('config.ts 里找不到 optimizeDeps.exclude');
for (const pkg of used.keys()) {
  if (imports.has(pkg) && !exclude.has(pkg)) {
    fail.push(`《${pkg}》被示例引用且已在 import map，但未列入 config.ts 的 optimizeDeps.exclude`);
  }
}

console.log(`import map 条目 ${imports.size}；引擎包核对 ${checked}；示例裸导入包 ${used.size}；exclude 白名单 ${exclude.size}`);
for (const w of warn) console.log(`  WARN ${w}`);
if (fail.length) {
  console.log(`\n== FAIL（${fail.length}）==`);
  for (const f of fail) console.log('  ' + f);
  process.exit(1);
}
console.log('版本 pin 与依赖映射：全部通过。');
