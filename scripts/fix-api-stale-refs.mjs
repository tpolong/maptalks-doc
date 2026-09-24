/**
 * scripts/fix-api-stale-refs.mjs — 修正 API 页（docs/api/**、docs/en/api/**）里过时的引用
 *
 * 与 guide 同一类问题，形态更多（CJS require、UMD script、npm i 行、页脚核对行等）。
 * 只改**手写区**：
 *   - 生成块 `<!-- api-gen:start -->` … `<!-- api-gen:end -->` 之间的行跳过（改了下一次 wire 会冲突）；
 *   - `docs/api/includes/api/**` 是生成片段，整目录跳过。
 *   - `docs/api/includes/*.md`（顶层 26 个）是旧站手写片段，可以改。
 *
 * 依据（实测，见 .vitepress/cache/reverify-hosts.mjs 等）：
 *   - 分析类 8 个不在 maptalks-gl 内，必须从 @maptalks/analysis 导入；
 *   - https://tiles.maptalks.com/** 不可达，可用 https://tile.maptalks.com/test/planet-single/{z}/{x}/{y}.mvt；
 *   - 旧站 maptalks.org（含 0.x API 页、旧示例页）仍可访问，但站内已有对应页，改为站内链接；
 *   - 页脚引用的 api-notes-*.md 在 D:\code\maptalks\progress\，不进仓库也不发布，读者打不开。
 *
 * 用法：node scripts/fix-api-stale-refs.mjs [--dry]
 */
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { ROOT } from './api/lib.mjs';

const DRY = process.argv.includes('--dry');

const ANALYSIS = new Set([
  'CutAnalysis', 'CrossCutAnalysis', 'ViewshedAnalysis', 'SkylineAnalysis',
  'FloodAnalysis', 'HeightLimitAnalysis', 'InSightAnalysis', 'ExcavateAnalysis',
]);

/** 旧版 API 外链里的类名 → 站内 slug（含旧站 ui.* 命名空间） */
const API_SLUG = {
  Map: 'map', Layer: 'layer', OverlayLayer: 'overlay-layer', TileLayer: 'tile-layer',
  VectorLayer: 'vector-layer', Geometry: 'geometry', GeoJSON: 'geojson', Marker: 'marker',
  MultiPoint: 'multi-point', LineString: 'line-string', MultiLineString: 'multi-line-string',
  Polygon: 'polygon', MultiPolygon: 'multi-polygon', Coordinate: 'coordinate', Extent: 'extent',
  Point: 'point', Circle: 'circle', Ellipse: 'ellipse', Rectangle: 'rectangle', Sector: 'sector',
  TextMarker: 'text-marker', Label: 'label', CanvasLayer: 'canvas-layer', ImageLayer: 'image-layer',
  GroupTileLayer: 'group-tile-layer', WMSTileLayer: 'wms-tile-layer', GroupGLLayer: 'group-gl-layer',
  VectorTileLayer: 'vector-tile-layer', PointLayer: 'point-layer', LineStringLayer: 'line-string-layer',
  PolygonLayer: 'polygon-layer', GLTFLayer: 'gltf-layer', GLTFMarker: 'gltf-marker',
  MultiGLTFMarker: 'multi-gltf-marker', Geo3DTilesLayer: 'geo-3dtiles-layer',
  VideoLayer: 'video-layer', ParticleLayer: 'particle-layer', TransformControl: 'transform-control',
  InfoWindow: 'info-window', Menu: 'menu', ToolTip: 'tool-tip', UiComponent: 'ui-component',
  DrawTool: 'draw-tool', DistanceTool: 'distance-tool', AreaTool: 'area-tool',
};
const slugOf = (cls) => {
  const bare = cls.replace(/^ui\./, '');
  return API_SLUG[cls] || API_SLUG[bare] || bare.replace(/([a-z0-9])([A-Z])/g, '$1-$2').replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2').toLowerCase();
};

// 收集目标文件
const files = [];
for (const dir of [join(ROOT, 'docs', 'api'), join(ROOT, 'docs', 'en', 'api')]) {
  const walk = (d) => {
    for (const e of readdirSync(d, { withFileTypes: true })) {
      const p = join(d, e.name);
      if (e.isDirectory()) {
        if (e.name === 'api' && d.endsWith('includes')) continue; // 生成片段目录
        walk(p);
      } else if (e.name.endsWith('.md')) files.push(p);
    }
  };
  walk(dir);
}

const counts = {};
const bump = (k, n = 1) => { counts[k] = (counts[k] || 0) + n; };
let changedFiles = 0;

/** 把一段 import/require 名单按"是否分析类"拆成两条语句 */
function splitNames(names, wrap) {
  const list = names.split(',').map((s) => s.trim()).filter(Boolean);
  const main = list.filter((n) => !ANALYSIS.has(n));
  const ana = list.filter((n) => ANALYSIS.has(n));
  const out = [];
  if (main.length) out.push(wrap(main.join(', '), 'maptalks-gl'));
  if (ana.length) out.push(wrap(ana.join(', '), '@maptalks/analysis'));
  return out.join('\n');
}

for (const abs of files) {
  const rel = abs.replace(ROOT + '\\', '').replace(/\\/g, '/');
  const en = rel.includes('/en/api/');
  const orig = readFileSync(abs, 'utf8');
  const lines = orig.split(/\r?\n/);
  let inGen = false;
  const out = lines.map((line) => {
    if (/<!--\s*api-gen:start\s*-->/.test(line)) { inGen = true; return line; }
    if (/<!--\s*api-gen:end\s*-->/.test(line)) { inGen = false; return line; }
    if (inGen) return line;
    let txt = line;

    // A. import / require
    txt = txt.replace(/import\s*\{([^}]*)\}\s*from\s*(['"])@maptalks\/gl-layers\2;/g, (m, names, q) => {
      bump('import');
      return splitNames(names, (n, pkg) => `import { ${n} } from ${q}${pkg}${q};`);
    });
    txt = txt.replace(/const\s*\{([^}]*)\}\s*=\s*require\((['"])@maptalks\/gl-layers\2\);/g, (m, names, q) => {
      bump('require');
      return splitNames(names, (n, pkg) => `const { ${n} } = require(${q}${pkg}${q});`);
    });

    // B. 页脚核对行：先去掉 api-notes 括号，再把包名与版本对上
    txt = txt.replace(en ? /\s*\(api-notes-(?:others|vt-gl)(?:\s*\/\s*api-notes-(?:others|vt-gl))?[^)]*\)/g
      : /（api-notes-(?:others|vt-gl)(?:\s*\/\s*api-notes-(?:others|vt-gl))?[^）]*）/g, (m) => { bump('api-notes'); return ''; });
    const footer = en ? [
      [/@maptalks\/gl-layers 2026 source code/g, 'maptalks-gl 0.124.4 source code'],
      [/@maptalks\/gl-layers 2026 source\b/g, 'maptalks-gl 0.124.4 source'],
      [/2026 source code of @maptalks\/gl-layers/g, 'source code of maptalks-gl 0.124.4'],
      [/2026 source of @maptalks\/gl-layers/g, 'source of maptalks-gl 0.124.4'],
    ] : [
      [/@maptalks\/gl-layers 2026 源码核对/g, 'maptalks-gl 0.124.4 源码核对'],
    ];
    for (const [re, to] of footer) {
      const n = (txt.match(re) || []).length;
      if (n) { txt = txt.replace(re, to); bump('footer'); }
    }

    // C. 其余包名写法
    txt = txt.replace(/https:\/\/unpkg\.com\/@maptalks\/gl-layers\/dist\/maptalks-gl-layers\.js/g,
      'https://unpkg.com/maptalks-gl/dist/maptalks-gl.js');
    const pkgRules = en ? [
      [/npm i @maptalks\/gl-layers/g, 'npm i maptalks-gl'],
      [/the WebGL extension `@maptalks\/gl-layers`/g, 'the WebGL packages `maptalks-gl` and `@maptalks/analysis`'],
      [/`@maptalks\/gl-layers`/g, '`maptalks-gl`'],
      [/@maptalks\/gl-layers/g, 'maptalks-gl'],
    ] : [
      [/npm i @maptalks\/gl-layers/g, 'npm i maptalks-gl'],
      [/WebGL 扩展 `@maptalks\/gl-layers`/g, '三维汇总包 `maptalks-gl` 与空间分析包 `@maptalks/analysis`'],
      [/`@maptalks\/gl-layers`/g, '`maptalks-gl`'],
      [/@maptalks\/gl-layers/g, 'maptalks-gl'],
    ];
    const before = txt;
    for (const [re, to] of pkgRules) txt = txt.replace(re, to);
    if (before !== txt) bump(en ? 'pkg-prose(en)' : 'pkg-prose(zh)');

    // D. 不可达的瓦片地址
    const tileRe = /https:\/\/tiles\.maptalks\.com\/test\/\{z\}\/\{x\}\/\{y\}\.mvt/g;
    { const n = (txt.match(tileRe) || []).length; if (n) { txt = txt.replace(tileRe, 'https://tile.maptalks.com/test/planet-single/{z}/{x}/{y}.mvt'); bump('tile-host', n); } }

    // E. 旧版 API 外链 → 站内页
    const apiRe = /\[([^\]]+)\]\(https:\/\/maptalks\.org\/maptalks\.js\/api\/0\.x\/([A-Za-z.]+)\.html\)/g;
    txt = txt.replace(apiRe, (m, label, cls) => {
      bump('api-link');
      return `[${label}](${en ? '/en' : ''}/api/${slugOf(cls)})`;
    });

    // F. 旧站示例外链 → 站内**同名**示例（逐条确认过目标目录存在）：
    //    旧站 ui-control/ui-custom-infownd → map/ui/ui-custom-infownd
    //    旧站 ui-control/ui-custom-menu    → map/ui/ui-custom-menu
    const exRules = [
      [/\[([^\]]+)\]\(https:\/\/maptalks\.org\/examples\/[^)]*ui-custom-infownd[^)]*\)/g, 'map/ui/ui-custom-infownd'],
      [/\[([^\]]+)\]\(https:\/\/maptalks\.org\/examples\/[^)]*ui-custom-menu[^)]*\)/g, 'map/ui/ui-custom-menu'],
    ];
    for (const [re, target] of exRules) {
      const n = (txt.match(re) || []).length;
      if (n) { txt = txt.replace(re, (m, l) => `[${l}](${en ? '/en' : ''}/examples/#${target})`); bump('example-link', n); }
    }

    // G. 把年份当版本号的写法
    const yearRules = en ? [
      [/added in the 2026 source code/g, 'added in the current version'],
      [/in the 2026 source code/g, 'in the source code'],
      [/the 2026 source code/g, 'the source code'],
      [/2026 source code/g, 'source code'],
      [/the 2026 source\b/g, 'the source'],
      [/ in the 2026 source\b/g, ' in the source'],
      [/ \*?\(verified in 2026\*?\)/g, ''],
      [/ \*?\(verified 2026\*?\)/g, ''],
      [/ \*?\(2026 cross-check\*?\)/g, ''],
      [/ \*?\(checked against 2026\*?\)/g, ''],
    ] : [
      [/新增于 2026 源码/g, '新增于当前版本'],
      [/在 2026 源码中/g, '在源码中'],
      [/为 2026 源码/g, '为源码'],
      [/2026 源码核对/g, '源码核对'],
      [/2026 源码/g, '源码'],
      [/（2026 核对）/g, ''],
      [/（2026 新增）/g, '（新增）'],
      [/## 2026 新增/g, '## 新增'],
    ];
    for (const [re, to] of yearRules) {
      const n = (txt.match(re) || []).length;
      if (n) { txt = txt.replace(re, to); bump(en ? 'year(en)' : 'year(zh)', n); }
    }

    // H. 上面几组规则收尾：残留的年份碎片、断句空格、双"与"等
    txt = txt.replace(/2026源码/g, '源码').replace(/2026 源码/g, '源码').replace(/2026 核对/g, '核对');
    const polish = [
      ['（2026 核对，', '（'],
      ['，2026 核对）', '）'],
      ['（2026 核对）', ''],
      ['（核对，', '（'],
      ['，核对）', '）'],
      ['` 、', '`、'],
      ['(verified 2026; ', '('],
      [', verified 2026)', ')'],
      ['(verified 2026)', ''],
      ['但 源码中', '但源码中'],
      ['存在于 源码', '存在于源码'],
      ['在 源码', '在源码'],
      ['为 源码', '为源码'],
      ['与 三维汇总包', '、三维汇总包'],
      ['(verified against 2026 source code)', '(verified against the source code)'],
      ['(verified against 2026 source)', '(verified against the source)'],
      ['2026 source defaults:', 'source defaults:'],
      ['2026 source code', 'source code'],
      ['2026 source', 'source'],
    ];
    for (const [from, to] of polish) {
      const n = txt.split(from).length - 1;
      if (n) { txt = txt.split(from).join(to); bump('polish', n); }
    }

    return txt;
  });

  let txt = out.join(orig.includes('\r\n') ? '\r\n' : '\n');
  if (txt !== orig) {
    changedFiles++;
    if (!DRY) writeFileSync(abs, txt, 'utf8');
  }
}

console.log(`API md ${files.length} 个；${DRY ? '[dry-run] ' : ''}改动 ${changedFiles} 个`);
for (const [k, v] of Object.entries(counts).sort((a, b) => b[1] - a[1])) console.log(`  ${k.padEnd(16)} ${v}`);
if (!existsSync(join(ROOT, 'docs', 'api', 'index.md'))) console.log('警告：docs/api/index.md 不存在');
