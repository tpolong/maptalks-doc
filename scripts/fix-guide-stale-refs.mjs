/**
 * scripts/fix-guide-stale-refs.mjs — 修正 guide 里过时的"路径与用法"引用
 *
 * 背景：guide 多数内容由 maptalks.com 旧站迁移而来，存在以下过时点：
 *   1. `@maptalks/gl-layers` —— 该包停更于 2024-03（当前为 maptalks-gl 0.124.4，
 *      分析类自 0.124.4 起不再包含在 GL 包内，需单独从 @maptalks/analysis 导入）
 *   2. `https://tiles.maptalks.com/test/{z}/{x}/{y}.mvt` —— 域名不可达
 *      （可用：https://tile.maptalks.com/test/planet-single/{z}/{x}/{y}.mvt，实测 200）
 *   3. `@import "https://maptalks.com/api/maptalks.css"` —— 旧域名已下线
 *      （可用：https://unpkg.com/maptalks/dist/maptalks.css，实测 200）
 *   4. 旧版 API 外链 maptalks.org/maptalks.js/api/0.x/*.html —— 本站已有对应 API 页
 *   5. maptalks.org/examples/... 旧站示例链接、studio.maptalks.com（已下线）
 *   6. http:// 明文外链（HTTPS 站点上会被浏览器拦截）
 *
 * 用法：node scripts/fix-guide-stale-refs.mjs [--dry]
 */
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { ROOT } from './api/lib.mjs';

const DRY = process.argv.includes('--dry');

/** 0.124.4 起分析类不再由 GL 包导出，需从 @maptalks/analysis 导入 */
const ANALYSIS = new Set([
  'CutAnalysis', 'CrossCutAnalysis', 'ViewshedAnalysis', 'SkylineAnalysis',
  'FloodAnalysis', 'HeightLimitAnalysis', 'InSightAnalysis', 'ExcavateAnalysis',
]);

/** 旧版 API 文档 → 本站 API 页 slug */
const API_SLUG = {
  Map: 'map', Layer: 'layer', Geometry: 'geometry', GeoJSON: 'geojson', Marker: 'marker',
  MultiPoint: 'multi-point', LineString: 'line-string', MultiLineString: 'multi-line-string',
  Polygon: 'polygon', MultiPolygon: 'multi-polygon', Coordinate: 'coordinate',
  DrawTool: 'draw-tool', DistanceTool: 'distance-tool', AreaTool: 'area-tool',
  TileLayer: 'tile-layer', VectorLayer: 'vector-layer', Extent: 'extent', Point: 'point',
  Circle: 'circle', Ellipse: 'ellipse', Rectangle: 'rectangle', Sector: 'sector',
  TextMarker: 'text-marker', Label: 'label', CanvasLayer: 'canvas-layer',
  ImageLayer: 'image-layer', GroupTileLayer: 'group-tile-layer', WMSTileLayer: 'wms-tile-layer',
};
const slugOf = (cls) => API_SLUG[cls] || cls.replace(/([a-z0-9])([A-Z])/g, '$1-$2').replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2').toLowerCase();

const files = [];
for (const dir of ['docs/guide', 'docs/en/guide']) {
  const walk = (d) => {
    const abs = join(ROOT, d);
    if (!existsSync(abs)) return;
    for (const e of readdirSync(abs, { withFileTypes: true })) {
      if (e.isDirectory()) walk(`${d}/${e.name}`);
      else if (e.name.endsWith('.md')) files.push(`${d}/${e.name}`);
    }
  };
  walk(dir);
}

const counts = {};
const bump = (k, n = 1) => { counts[k] = (counts[k] || 0) + n; };
let changedFiles = 0;

for (const rel of files) {
  const abs = join(ROOT, rel);
  const orig = readFileSync(abs, 'utf8');
  let txt = orig;
  const en = rel.startsWith('docs/en/');

  // A. import 行：@maptalks/gl-layers → maptalks-gl（分析类拆到 @maptalks/analysis）
  // 注意：`[^}]*` 而非 `[\s\S]*?` —— 后者会跨过前一行 `import { Map } from "maptalks";`
  // 把两条 import 吞成一条；import 名单里不会出现 `}`，所以排除 `}` 既安全又精确。
  txt = txt.replace(/import\s*\{([^}]*)\}\s*from\s*"@maptalks\/gl-layers";/g, (m, names) => {
    const list = names.split(/[,\n]/).map((s) => s.trim()).filter(Boolean);
    const main = list.filter((n) => !ANALYSIS.has(n));
    const ana = list.filter((n) => ANALYSIS.has(n));
    const out = [];
    if (main.length) { out.push(`import { ${main.join(', ')} } from "maptalks-gl";`); bump(en ? 'import→maptalks-gl(en)' : 'import→maptalks-gl(zh)'); }
    if (ana.length) { out.push(`import { ${ana.join(', ')} } from "@maptalks/analysis";`); bump('import→@maptalks/analysis'); }
    return out.join('\n') || m;
  });

  // B. 散文里的包名
  const proseRules = en ? [
    [/All analysis classes are imported from `@maptalks\/gl-layers`/g, 'All analysis classes are imported from `@maptalks/analysis`'],
    [/cross-checked against the @maptalks\/gl-layers 2026 source code/g, 'cross-checked against the maptalks-gl 0.124.4 source code'],
    [/\(@maptalks\/gl-layers vt package\)/g, '(@maptalks/vt package)'],
    [/exported by `@maptalks\/gl-layers`/g, 'exported by `maptalks-gl`'],
    [/in the `@maptalks\/gl-layers` package/g, 'in the `@maptalks/video-layer` package'],
    [/`@maptalks\/gl-layers`/g, '`maptalks-gl`'],
    [/@maptalks\/gl-layers/g, 'maptalks-gl'],
  ] : [
    [/所有分析类都从 `@maptalks\/gl-layers` 导入/g, '所有分析类都从 `@maptalks/analysis` 导入'],
    [/已与 @maptalks\/gl-layers 2026 源码核对/g, '已与 maptalks-gl 0.124.4 源码核对'],
    [/（@maptalks\/gl-layers vt 包）/g, '（@maptalks/vt 包）'],
    [/`@maptalks\/gl-layers` 导出的/g, '`maptalks-gl` 导出的'],
    [/见 `@maptalks\/gl-layers` 包/g, '见 `@maptalks/video-layer` 包'],
    [/`@maptalks\/gl-layers`/g, '`maptalks-gl`'],
    [/@maptalks\/gl-layers/g, 'maptalks-gl'],
  ];
  for (const [re, to] of proseRules) {
    const n = (txt.match(re) || []).length;
    if (n) { txt = txt.replace(re, to); bump(en ? 'prose(en)' : 'prose(zh)', n); }
  }

  // C. 不可达的瓦片域名
  const tileRe = /https:\/\/tiles\.maptalks\.com\/test\/\{z\}\/\{x\}\/\{y\}\.mvt/g;
  { const n = (txt.match(tileRe) || []).length; if (n) { txt = txt.replace(tileRe, 'https://tile.maptalks.com/test/planet-single/{z}/{x}/{y}.mvt'); bump('tile-host', n); } }

  // D. 旧域名的样式 @import
  const cssRe = /https:\/\/maptalks\.com\/api\/maptalks\.css/g;
  { const n = (txt.match(cssRe) || []).length; if (n) { txt = txt.replace(cssRe, 'https://unpkg.com/maptalks/dist/maptalks.css'); bump('css-url', n); } }

  // E. 旧版 API 外链 → 站内 API 页（英文树指向 /en/api）
  const apiRe = /\[(maptalks\.)?([A-Za-z]+)\]\(https:\/\/maptalks\.org\/maptalks\.js\/api\/0\.x\/[A-Za-z]+\.html\)/g;
  txt = txt.replace(apiRe, (m, ns, cls) => {
    const slug = slugOf(cls);
    bump('api-link', 1);
    return `[${cls}](${en ? '/en' : ''}/api/${slug})`;
  });

  // F. 旧站示例链接 → 站内**同名**示例。只做逐条确认过的映射：
  //    旧站 examples/cn/style/vector-marker 在站内有同名示例 vector2d/style/vector-marker。
  //    不要写"任意旧示例链接都指向某个示例"的兜底规则——那会把读者带到不相干的示例。
  //    （旧站 maptalks.org/examples 本身仍可访问，改动的意义是不再依赖旧站。）
  const exRe = /\[([^\]]+)\]\(https:\/\/maptalks\.org\/examples\/[^)]*vector-marker[^)]*\)/g;
  txt = txt.replace(exRe, (m, label) => { bump('example-link', 1); return `[${label}](${en ? '/en' : ''}/examples/#vector2d/style/vector-marker)`; });

  // G. 曾经的规则：把 studio.maptalks.com 去链接。**该前提是错的** ——
  //    实测 https://studio.maptalks.com/ 返回 200（一个在线的 umi SPA），链接必须保留。
  //    这里不再改写，只留注释以免后人重犯。

  // H. http → https（含可用域名迁移）
  const httpRules = [
    [/http:\/\/resource\.dvgis\.cn/g, 'https://resource.dvgis.cn'],
    [/http:\/\/osm\.org/g, 'https://www.openstreetmap.org/copyright'],
    [/http:\/\/map\.baidu\.com/g, 'https://map.baidu.com'],
    [/http:\/\/online\{s\}\.map\.bdimg\.com\/tile\//g, 'https://maponline{s}.bdimg.com/tile/'],
  ];
  for (const [re, to] of httpRules) {
    const n = (txt.match(re) || []).length;
    if (n) { txt = txt.replace(re, to); bump('http→https', n); }
  }

  // I-1. 页脚括号里引用的调研笔记（D:\code\maptalks\progress\api-notes-*.md）既不进仓库、
  //      也不发布到站点，读者无从打开，去掉该括号；结论（核对到哪个版本）保留在正文里。
  txt = txt.replace(en ? /\s*\(api-notes-(?:vt-gl|others)\.md\)/g : /（api-notes-(?:vt-gl|others)\.md）/g, '');

  // I-2. maptalks 核心包页脚：core 的真实版本是 1.12.1（"2026" 不是版本号）
  const coreFooter = en
    ? [/cross-checked against the maptalks 2026 source \(maptalks\.js packages\/maptalks core package\)/g,
      'cross-checked against the maptalks 1.12.1 source (maptalks.js packages/maptalks core package)']
    : [/已与 maptalks 2026 源码核对（maptalks\.js packages\/maptalks 核心包源码）/g,
      '已与 maptalks 1.12.1 源码核对（maptalks.js packages/maptalks 核心包）'];
  { const n = (txt.match(coreFooter[0]) || []).length; if (n) { txt = txt.replace(coreFooter[0], coreFooter[1]); bump('footer-core-version', n); } }

  // I-3. 正文里把年份当版本号的写法：年份不能说明版本，版本号由页脚统一交待，
  //      正文改成不带年份的说法（先处理会被通用规则改得别扭的整句，再通用替换）。
  const yearRules = en ? [
    [/newly added or supplemented in the 2026 source code \(@maptalks\/vt package\) and were not/g,
      'newly added or supplemented in the @maptalks/vt package source and were not'],
    [/added in the 2026 source code:/g, 'added in the current version:'],
    [/ \*?\(2026 cross-check\*?\)/g, ''],
    [/## New in 2026/g, '## New'],
    [/the 2026 source code/g, 'the source code'],
    [/2026 source code/g, 'source code'],
    [/the 2026 source\b/g, 'the source'],
  ] : [
    [/以下 symbol 属性为 2026 源码（@maptalks\/vt 包）中新增或补充/g,
      '以下 symbol 属性为 @maptalks/vt 包源码中新增或补充'],
    [/新增于 2026 源码/g, '新增于当前版本'],
    [/（2026 核对）/g, ''],
    [/## 2026 新增/g, '## 新增'],
    [/2026 源码/g, '源码'],
    [/2026 新增/g, '新增'],
  ];
  for (const [re, to] of yearRules) {
    const n = (txt.match(re) || []).length;
    if (n) { txt = txt.replace(re, to); bump(en ? 'year-wording(en)' : 'year-wording(zh)', n); }
  }

  // J. 上一组把"2026 源码"缩成"源码"后留下的中文病句（"以 源码为准为…"这种断句）。
  //    英文侧无此问题，故只对中文树生效。
  if (!en) {
    const proseFix = [
      ['默认值以 源码为准为', '默认值为'],
      ['在 源码（PhongMaterial / PhongShader 均无此属性）中已不存在', '在源码中已不存在（PhongMaterial / PhongShader 均无此属性）'],
      ['为 源码 PhongMaterial 默认项', '为 PhongMaterial 的默认项'],
      ['已从 源码的', '已从源码的'],
      ['已按 源码核对', '已按源码核对'],
      ['在 源码（vt 包全仓库 grep）中已不存在', '在源码中已不存在（vt 包全仓库 grep）'],
      ['在 源码中类型为', '在源码中类型为'],
      ['已按 源码调整为', '已按源码调整为'],
    ];
    for (const [from, to] of proseFix) {
      const n = txt.split(from).length - 1;
      if (n) { txt = txt.split(from).join(to); bump('prose-fix(zh)', n); }
    }
  }

  if (txt !== orig) {
    changedFiles++;
    if (!DRY) writeFileSync(abs, txt, 'utf8');
  }
}

console.log(`guide 文件 ${files.length} 个；${DRY ? '[dry-run] ' : ''}改动 ${changedFiles} 个`);
for (const [k, v] of Object.entries(counts).sort((a, b) => b[1] - a[1])) console.log(`  ${k.padEnd(28)} ${v}`);
