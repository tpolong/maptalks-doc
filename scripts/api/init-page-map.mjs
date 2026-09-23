/**
 * scripts/api/init-page-map.mjs — 生成/刷新 scripts/api/page-map.json
 *
 * 页面（docs/api/<name>.md）→ 源码实体 的权威映射表。
 * 映射表是"人工确认过的一次性资产"：本脚本按规则自动生成初稿，人工修正后由
 * inventory.mjs / gen-includes.mjs / verify.mjs 共同消费。
 *
 * 用法：node scripts/api/init-page-map.mjs [--write]
 */
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { CACHE, pageList, writeJson } from './lib.mjs';

const MODEL = JSON.parse(readFileSync(join(CACHE, 'api-model.json'), 'utf8'));
const cls = new Map(MODEL.classes.map((c) => [c.name, c]));
const ns = new Map(MODEL.namespaces.map((n) => [n.name, n]));

// ---- 人工指定（覆盖规则推导）----------------------------------------------
// kind: class | namespace | functions | prose
const SPEC = {
  // 几何族
  point: { kind: 'class', target: 'Point' },
  // 图层族（gl / vt / gltf / 3dtiles 包）
  'geo-3dtiles-layer': { kind: 'class', target: 'Geo3DTilesLayer' },
  'vector-tile-layer': { kind: 'class', target: 'VectorTileLayer' },
  'geojson-vector-tile-layer': { kind: 'class', target: 'GeoJSONVectorTileLayer' },
  'group-gl-layer': { kind: 'class', target: 'GroupGLLayer' },
  'gltf-layer': { kind: 'class', target: 'GLTFLayer' },
  'gltf-marker': { kind: 'class', target: 'GLTFMarker' },
  'multi-gltf-marker': { kind: 'class', target: 'MultiGLTFMarker' },
  'extrude-polygon-layer': { kind: 'class', target: 'ExtrudePolygonLayer' },
  'point-layer': { kind: 'class', target: 'PointLayer' },
  'polygon-layer': { kind: 'class', target: 'PolygonLayer' },
  'line-string-layer': { kind: 'class', target: 'LineStringLayer' },
  // 三维分析族（analysis 包是 JS，类名与页面名不同）
  analysis: { kind: 'class', target: 'Analysis' },
  'cut-analysis': { kind: 'class', target: 'CutAnalysis' },
  'crosscut-analysis': { kind: 'class', target: 'CrossCutAnalysis' },
  'flood-analysis': { kind: 'class', target: 'FloodAnalysis' },
  'height-limit-analysis': { kind: 'class', target: 'HeightLimitAnalysis' },
  'insight-analysis': { kind: 'class', target: 'InSightAnalysis' },
  'skyline-analysis': { kind: 'class', target: 'SkylineAnalysis' },
  'viewshed-analysis': { kind: 'class', target: 'ViewshedAnalysis' },
  'excavate-analysis': { kind: 'class', target: 'ExcavateAnalysis' },
  // control 族（control.* 命名空间成员，类名去 Control. 前缀）
  control: { kind: 'class', target: 'Control' },
  'control-attribution': { kind: 'class', target: 'Attribution' },
  'control-compass': { kind: 'class', target: 'Compass' },
  'control-layer-switcher': { kind: 'class', target: 'LayerSwitcher' },
  'control-nav': { kind: 'class', target: 'Nav' },
  'control-overview': { kind: 'class', target: 'Overview' },
  'control-panel': { kind: 'class', target: 'Panel' },
  'control-reset': { kind: 'class', target: 'Reset' },
  'control-scale': { kind: 'class', target: 'Scale' },
  'control-toolbar': { kind: 'class', target: 'Toolbar' },
  'control-zoom': { kind: 'class', target: 'Zoom' },
  // projection 族（对象 mixin；变体 = 自身对象 + projection.Common）
  'projection-common': { kind: 'namespace', target: 'CommonProjection' },
  'projection-epsg3857': { kind: 'namespace', target: 'EPSG3857Projection', merge: ['CommonProjection'] },
  'projection-epsg4326': { kind: 'namespace', target: 'EPSG4326Projection', merge: ['CommonProjection'] },
  'projection-epsg9807': { kind: 'namespace', target: 'EPSG9807Projection', merge: ['CommonProjection'] },
  'projection-identity': { kind: 'namespace', target: 'IdentityProjection', merge: ['CommonProjection'] },
  'projection-baidu': { kind: 'namespace', target: 'BAIDUProjection', merge: ['CommonProjection'] },
  'projection-utm': { kind: 'namespace', target: 'UTMProjection', merge: ['CommonProjection'] },
  // measurer 族
  'measurer-measurer': { kind: 'namespace', target: 'Measurer' },
  'measurer-common': { kind: 'namespace', target: 'common' },
  'measurer-identity': { kind: 'namespace', target: 'identity', merge: ['common'] },
  'measurer-wgs84sphere': { kind: 'namespace', target: 'wgs84', merge: ['common'] },
  'measurer-baidusphere': { kind: 'namespace', target: 'baidu', merge: ['common'] },
  // animation 族
  'animation-animation': { kind: 'namespace', target: 'Animation' },
  'animation-easing': { kind: 'namespace', target: 'Easing' },
  'animation-frame': { kind: 'class', target: 'Frame' },
  'animation-player': { kind: 'class', target: 'Player' },
  // 核心对象与 mixin
  'json-able': { kind: 'class', target: 'JSONAble' },
  'ui-component': { kind: 'class', target: 'UIComponent' },
  'ui-marker': { kind: 'class', target: 'UIMarker' },
  'tile-system': { kind: 'class', target: 'TileSystem' },
  geojson: { kind: 'namespace', target: 'GeoJSON' },
  eventable: { kind: 'class', target: 'Eventable' },
  handler: { kind: 'class', target: 'Handler' },
  handlerable: { kind: 'class', target: 'Handlerable' },
  renderable: { kind: 'class', target: 'Renderable' },
  'center-mixin': { kind: 'class', target: 'CenterMixin' },
  menuable: { kind: 'namespace', target: 'Menuable' },
  menu: { kind: 'class', target: 'Menu' },
  'info-window': { kind: 'class', target: 'InfoWindow' },
  'tool-tip': { kind: 'class', target: 'ToolTip' },
  class: { kind: 'class', target: 'Class' },
  ajax: { kind: 'namespace', target: 'Ajax' },
  crs: { kind: 'class', target: 'CRS' },
  // 工具函数集合（`export function` 形态，按模块文件归组）
  util: { kind: 'functions', target: 'util', file: 'maptalks/src/core/util/util.ts' },
  'dom-util': { kind: 'functions', target: 'dom', file: 'maptalks/src/core/util/dom.ts' },
  'string-util': { kind: 'functions', target: 'strings', file: 'maptalks/src/core/util/strings.ts' },
  // 纯说明页（无对应源码实体）
  'vt-intro': { kind: 'prose' },
  'vt-compare': { kind: 'prose' },
  'vt-performance': { kind: 'prose' },
};

const kebab2pascal = (s) => s.split('-').map((x) => x.charAt(0).toUpperCase() + x.slice(1)).join('');

// ---- 生成 ---------------------------------------------------------------
const map = {}; const problems = [];
for (const p of pageList()) {
  let e = SPEC[p] ? { ...SPEC[p] } : null;
  if (!e) {
    const cands = [kebab2pascal(p), kebab2pascal(p.split('-').slice(1).join('-')), kebab2pascal(p.split('-').pop())];
    const hit = cands.find((c) => c && cls.has(c));
    if (hit) e = { kind: 'class', target: hit };
    else { const n = cands.find((c) => c && ns.has(c)); if (n) e = { kind: 'namespace', target: n }; }
  }
  if (!e) { e = { kind: 'prose' }; problems.push(`${p}: 未找到源码实体，暂标 prose`); }
  // 补 source 信息
  if (e.kind === 'class' && cls.has(e.target)) e.source = cls.get(e.target).rel;
  else if (e.kind === 'namespace' && ns.has(e.target)) e.source = ns.get(e.target).rel;
  else if (e.kind === 'class' || e.kind === 'namespace') problems.push(`${p}: target「${e.target}」在源码模型中不存在`);
  if (e.merge) for (const m of e.merge) {
    if (ns.has(m)) { e.mergeSources = e.mergeSources || {}; e.mergeSources[m] = ns.get(m).rel; }
    else problems.push(`${p}: merge 目标「${m}」不存在`);
  }
  map[p] = e;
}

const stats = {};
for (const e of Object.values(map)) stats[e.kind] = (stats[e.kind] || 0) + 1;
console.log(`页面 ${Object.keys(map).length} 条映射：${Object.entries(stats).map(([k, v]) => `${k}:${v}`).join('  ')}`);
if (problems.length) { console.log(`\n需人工确认 ${problems.length} 条：`); for (const p of problems) console.log('  ' + p); }

if (process.argv.includes('--write')) {
  const sorted = {};
  for (const k of Object.keys(map).sort()) sorted[k] = map[k];
  writeFileSync('scripts/api/page-map.json', JSON.stringify(sorted, null, 1) + '\n', 'utf8');
  console.log('\n已写入 scripts/api/page-map.json');
} else {
  writeJson(join(CACHE, 'page-map.preview.json'), map);
  console.log('\n（预览）加 --write 写入 scripts/api/page-map.json');
}
