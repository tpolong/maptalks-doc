#!/usr/bin/env node
/**
 * MapLibre / Mapbox GL style JSON  →  maptalks VectorTileLayer 样式 JSON 转换器
 *
 * 背景：maptalks 的矢量瓦片样式（renderPlugin / symbol / filter 三段式）与
 * mapbox style（sources / layers / sprite / glyphs）不是同一套格式，不能直接使用。
 * 本脚本把一份 MapLibre 样式（如 OpenFreeMap 的 liberty / bright / dark / positron / fiord）
 * 转换成 maptalks 能直接渲染的样式文件。
 *
 * 用法：
 *   node scripts/convert-maplibre-style.mjs <styleUrl 或本地路径> <输出文件> [选项]
 *
 * 选项：
 *   --sprites <url>     覆盖样式里的 sprite 地址（不含 .png/.json 后缀）
 *   --no-sprites        不输出 sprites 配置，也不输出任何图标（只保留几何与文字）
 *
 * 映射要点（细节见函数注释）：
 *   sources.vector      → 由调用方（示例代码）作为 urlTemplate 传给 VectorTileLayer
 *   layer.type=fill     → renderPlugin fill     + polygonFill/polygonOpacity/polygonPatternFile
 *   layer.type=line     → renderPlugin line     + lineColor/lineWidth/lineDasharray/lineJoin/lineCap
 *   layer.type=symbol   → renderPlugin icon|text（icon 插件同时支持 marker* 与 text*）
 *   layer.type=fill-extrusion → 退化为 fill（二维底图下与挤出层的顶面观感一致）
 *   layer.minzoom/maxzoom → renderPlugin.sceneConfig.minZoom/maxZoom
 *   layer.filter        → { condition: <原 mapbox 过滤表达式>, layer: <source-layer> }
 *   paint/layout 里的 interpolate/step/match/get 表达式 → function-type（stops/base/property/default）
 *   text-field 表达式（case/concat/coalesce/to-string）→ 原样保留（maptalks 用同一套表达式引擎求值）
 *   sprite 图标         → style.sprites 配置 + markerFile: "$<sourceName><iconName>"
 *   glyphs              → 丢弃（maptalks 用系统字体渲染文字，不需要 glyph 服务）
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

/* ------------------------------------------------------------------ *
 * 表达式判定
 * ------------------------------------------------------------------ */

// mapbox style spec 的表达式操作符（与 maptalks vt 内置的 compact style-spec 对齐）
const EXPR_OPS = new Set([
  // 判断与逻辑
  '!', '!=', '<', '<=', '==', '>', '>=', 'all', 'any', 'case', 'coalesce', 'match', 'step',
  'in', 'index-of', 'has', 'within', 'boolean', 'number', 'string', 'object', 'typeof',
  // 取值
  'get', 'properties', 'feature-state', 'geometry-type', 'id', 'zoom', 'pitch',
  'distance-from-center', 'heatmap-density', 'line-progress', 'sky-radial-progress',
  'literal', 'let', 'var', 'error',
  // 数学
  '+', '-', '*', '/', '%', '^', 'abs', 'ceil', 'floor', 'round', 'sqrt',
  'e', 'ln', 'log10', 'log2', 'max', 'min', 'pi', 'sin', 'cos', 'tan', 'asin', 'acos', 'atan',
  // 字符串与格式化
  'concat', 'downcase', 'upcase', 'slice', 'length', 'number-format',
  // 类型与颜色
  'to-boolean', 'to-color', 'to-number', 'to-string', 'to-rgba', 'rgb', 'rgba',
  'interpolate', 'interpolate-hcl', 'interpolate-lab', 'format', 'image', 'collator',
]);

function isExpression(v) {
  return Array.isArray(v) && typeof v[0] === 'string' && EXPR_OPS.has(v[0]);
}

/* ------------------------------------------------------------------ *
 * 颜色
 * ------------------------------------------------------------------ */

const NAMED_COLORS = {
  transparent: [0, 0, 0, 0], white: [255, 255, 255, 1], black: [0, 0, 0, 1],
  red: [255, 0, 0, 1], green: [0, 128, 0, 1], blue: [0, 0, 255, 1], yellow: [255, 255, 0, 1],
  orange: [255, 165, 0, 1], gray: [128, 128, 128, 1], grey: [128, 128, 128, 1],
  silver: [192, 192, 192, 1], maroon: [128, 0, 0, 1], olive: [128, 128, 0, 1],
  lime: [0, 255, 0, 1], aqua: [0, 255, 255, 1], teal: [0, 128, 128, 1], navy: [0, 0, 128, 1],
  fuchsia: [255, 0, 255, 1], purple: [128, 0, 128, 1], brown: [165, 42, 42, 1],
  pink: [255, 192, 203, 1], gold: [255, 215, 0, 1], ivory: [255, 255, 240, 1],
};

function hslToRgb(h, s, l) {
  h = ((h % 360) + 360) % 360 / 360;
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  const hue2rgb = (t) => {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  };
  return [hue2rgb(h + 1 / 3) * 255, hue2rgb(h) * 255, hue2rgb(h - 1 / 3) * 255];
}

/** css 颜色 → 归一化 rgba 数组；无法解析时返回 null */
function parseColor(input) {
  if (typeof input !== 'string') return null;
  const str = input.trim().toLowerCase();
  if (NAMED_COLORS[str]) {
    const c = NAMED_COLORS[str];
    return [c[0] / 255, c[1] / 255, c[2] / 255, c[3]];
  }
  if (str[0] === '#') {
    const hex = str.slice(1);
    const expand = (h) => parseInt(h.length === 1 ? h + h : h, 16);
    if (hex.length === 3 || hex.length === 4) {
      return [expand(hex[0]) / 255, expand(hex[1]) / 255, expand(hex[2]) / 255,
        hex.length === 4 ? expand(hex[3]) / 255 : 1];
    }
    if (hex.length === 6 || hex.length === 8) {
      return [expand(hex.slice(0, 2)) / 255, expand(hex.slice(2, 4)) / 255, expand(hex.slice(4, 6)) / 255,
        hex.length === 8 ? expand(hex.slice(6, 8)) / 255 : 1];
    }
    return null;
  }
  const m = str.match(/^(rgba?|hsla?)\(([^)]+)\)$/);
  if (!m) return null;
  const fn = m[1];
  const parts = m[2].split(/[\s,\/]+/).filter(Boolean);
  const num = (v) => (v.endsWith('%') ? parseFloat(v) / 100 : parseFloat(v));
  if (fn === 'rgb' || fn === 'rgba') {
    const [r, g, b] = parts.slice(0, 3).map(num);
    const a = parts.length > 3 ? num(parts[3]) : 1;
    return [r / 255, g / 255, b / 255, a];
  }
  const h = parseFloat(parts[0]);
  const s = num(parts[1]);
  const l = num(parts[2]);
  const [r, g, b] = hslToRgb(h, s, l);
  const a = parts.length > 3 ? num(parts[3]) : 1;
  return [r / 255, g / 255, b / 255, a];
}

function toRgba(value) {
  if (value == null) return value;
  if (Array.isArray(value)) return value;
  const c = parseColor(value);
  return c || value;
}

/* ------------------------------------------------------------------ *
 * symbol 属性类型表
 * ------------------------------------------------------------------ */

const COLOR_PROPS = new Set([
  'polygonFill', 'lineColor', 'lineDashColor', 'lineStrokeColor',
  'markerFill', 'markerLineColor', 'textFill', 'textHaloFill', 'waterBaseColor',
]);
const ARRAY_PROPS = new Set(['lineDasharray', 'markerLineDasharray']);

/* ------------------------------------------------------------------ *
 * 值转换：mapbox 表达式 → maptalks function-type
 * ------------------------------------------------------------------ */

/** mapbox line-dasharray（2 或 4 位）→ maptalks lineDasharray（固定 4 位） */
function toDash4(arr) {
  if (!Array.isArray(arr) || !arr.length) return [0, 0, 0, 0];
  if (arr.length >= 4) return arr.slice(0, 4);
  if (arr.length === 2) return [arr[0], arr[1], arr[0], arr[1]];
  if (arr.length === 3) return [arr[0], arr[1], arr[2], arr[0]];
  return [arr[0], arr[0], arr[0], arr[0]];
}

function convertPlain(prop, value) {
  if (value == null) return value;
  if (COLOR_PROPS.has(prop)) return toRgba(value);
  if (ARRAY_PROPS.has(prop)) return toDash4(value);
  return value;
}

/** interpolate/step/match/get 表达式 → maptalks function-type；不支持的表达式返回 undefined */
function convertExpression(prop, expr) {
  const op = expr[0];
  if (op === 'literal') return convertPlain(prop, expr[1]);
  if (op === 'get' && expr.length === 2 && typeof expr[1] === 'string') {
    return { type: 'identity', property: expr[1] };
  }
  // 输入是 zoom 或某个属性时，才能转成 function-type
  const parseInput = (input) => {
    if (!Array.isArray(input)) return null;
    if (input[0] === 'zoom') return {};
    if (input[0] === 'get' && typeof input[1] === 'string') return { property: input[1] };
    if (input[0] === 'to-number' && Array.isArray(input[1]) && input[1][0] === 'get') {
      return { property: input[1][1] };
    }
    return null;
  };
  if (op === 'interpolate') {
    const interp = expr[1];
    const input = parseInput(expr[2]);
    if (!input) return undefined;
    const base = Array.isArray(interp) && interp[0] === 'exponential' ? (interp[1] == null ? 1 : interp[1]) : 1;
    const rest = expr.slice(3);
    const stops = [];
    for (let i = 0; i + 1 < rest.length; i += 2) {
      stops.push([rest[i], convertValue(prop, rest[i + 1])]);
    }
    const fn = { type: 'exponential', stops, ...input };
    if (base !== 1) fn.base = base;
    return fn;
  }
  if (op === 'step') {
    const input = parseInput(expr[1]);
    if (!input) return undefined;
    const def = convertValue(prop, expr[2]);
    const stops = [];
    for (let i = 3; i + 1 < expr.length; i += 2) {
      stops.push([expr[i], convertValue(prop, expr[i + 1])]);
    }
    return { type: 'interval', stops, default: def, ...input };
  }
  if (op === 'match') {
    const input = parseInput(expr[1]);
    if (!input || !input.property) return undefined;
    const rest = expr.slice(2);
    const fallback = rest[rest.length - 1];
    const stops = [];
    for (let i = 0; i + 1 < rest.length - 1; i += 2) {
      const keys = Array.isArray(rest[i]) ? rest[i] : [rest[i]];
      const out = convertValue(prop, rest[i + 1]);
      for (const k of keys) stops.push([k, out]);
    }
    if (!stops.length) return undefined;
    return { type: 'categorical', stops, default: convertValue(prop, fallback), ...input };
  }
  return undefined;
}

/** 转换任意样式值：表达式能转就转，转不了原样保留（maptalks 的 symbol 支持 mapbox 表达式） */
function convertValue(prop, value) {
  if (value == null) return value;
  if (isExpression(value)) {
    const fn = convertExpression(prop, value);
    return fn === undefined ? value : fn;
  }
  return convertPlain(prop, value);
}

/** function-type / 数值中取一个“代表值”（用于换算 em → px 这类静态量） */
function representativeNumber(value, zoom = 16) {
  if (typeof value === 'number') return value;
  if (value && Array.isArray(value.stops) && value.stops.length) {
    if (value.type === 'identity' || value.property) return value.stops[value.stops.length - 1][1];
    // 取最接近目标 zoom 的档位
    let best = value.stops[0];
    for (const s of value.stops) {
      if (Math.abs(s[0] - zoom) < Math.abs(best[0] - zoom)) best = s;
    }
    return best[1];
  }
  return undefined;
}

/* ------------------------------------------------------------------ *
 * 字体 / 对齐
 * ------------------------------------------------------------------ */

function convertFont(fonts) {
  const raw = Array.isArray(fonts) ? fonts[0] : fonts;
  const name = typeof raw === 'string' && raw ? raw : 'Noto Sans Regular';
  const style = /italic/i.test(name) ? 'italic' : 'normal';
  const weight = /bold/i.test(name) ? 'bold' : 'normal';
  let face = name
    .replace(/\b(regular|italic|bold|medium|light|semibold|semi|extrabold|extra|black|thin|book|heavy)\b/gi, '')
    .replace(/\s+/g, ' ').trim();
  if (!face) face = 'Noto Sans';
  return { textFaceName: `${face}, sans-serif`, textWeight: weight, textStyle: style };
}

const H_ALIGN = { left: 'left', center: 'middle', right: 'right' };
const V_ALIGN = { top: 'top', center: 'middle', bottom: 'bottom' };

function convertAnchor(anchor, hKey, vKey) {
  if (typeof anchor !== 'string') return {};
  const out = {};
  const parts = anchor.split('-');
  for (const p of parts) {
    if (H_ALIGN[p]) out[hKey] = H_ALIGN[p];
    if (V_ALIGN[p]) out[vKey] = V_ALIGN[p];
  }
  return out;
}

/* ------------------------------------------------------------------ *
 * sprite
 * ------------------------------------------------------------------ */

async function loadSprite(spriteUrl) {
  for (const suffix of ['@2x', '']) {
    try {
      const res = await fetch(`${spriteUrl}${suffix}.json`);
      if (!res.ok) continue;
      const json = await res.json();
      return { suffix, json, imgUrl: `${spriteUrl}${suffix}.png`, jsonUrl: `${spriteUrl}${suffix}.json` };
    } catch {
      // 试下一个后缀
    }
  }
  return null;
}

function spriteSize(sprite, name) {
  const item = sprite && sprite.json && sprite.json[name];
  if (!item) return null;
  const ratio = item.pixelRatio || 1;
  return [item.width / ratio, item.height / ratio];
}

/* ------------------------------------------------------------------ *
 * 图层转换
 * ------------------------------------------------------------------ */

const SCENE_ZOOM = (layer) => {
  const cfg = {};
  if (typeof layer.minzoom === 'number') cfg.minZoom = layer.minzoom;
  // mapbox 的 maxzoom 是开区间（z < maxzoom），maptalks 是闭区间（z <= maxZoom）
  if (typeof layer.maxzoom === 'number') cfg.maxZoom = layer.maxzoom - 0.01;
  return cfg;
};

function baseFilter(layer) {
  const raw = layer.filter == null ? true : layer.filter;
  return { condition: convertFilter(raw) || raw, layer: layer['source-layer'] };
}

/**
 * 把 mapbox 过滤表达式转成 maptalks 原生的 feature-filter（经典写法）。
 *
 * 为什么需要：经典 feature-filter 走强类型比较，属性缺失时直接判 false；
 * 而 mapbox 表达式过滤器在 `[">=", ["get","rank"], 20]` 这类比较里，
 * 属性缺失会抛 “Expected value to be of type number, but found null instead”，
 * 被 maptalks 捕获后打成 console 警告（结果虽然没有错，但控制台很吵）。
 *
 * 转换不了（如 ["has", k]、["!", ...] 等）时返回 null，调用方回退为原表达式。
 */
function convertFilter(expr) {
  if (expr === true || expr == null) return true;
  if (!Array.isArray(expr)) return null;
  const [op] = expr;
  const getKey = (v) => (Array.isArray(v) && v[0] === 'get' && typeof v[1] === 'string' ? v[1] : null);
  const isLiteral = (v) => v === null || ['string', 'number', 'boolean'].includes(typeof v);
  if (op === 'all' || op === 'any') {
    const parts = [];
    for (const child of expr.slice(1)) {
      const c = convertFilter(child);
      if (c == null) return null;
      parts.push(c);
    }
    return [op, ...parts];
  }
  if (['==', '!=', '>', '>=', '<', '<='].includes(op)) {
    const key = getKey(expr[1]);
    if (!key || !isLiteral(expr[2]) || expr.length !== 3) return null;
    return [op, key, expr[2]];
  }
  if (op === 'in') {
    const key = getKey(expr[1]);
    if (!key || !expr.slice(2).every(isLiteral)) return null;
    return ['in', key, ...expr.slice(2)];
  }
  if (op === 'has' && expr.length === 2 && typeof expr[1] === 'string') {
    return ['has', expr[1]];
  }
  if (op === '!') {
    // ["!", ["has", k]] → ["!has", k]；其余取反 → ["none", <转换结果>]
    const inner = expr[1];
    if (Array.isArray(inner) && inner[0] === 'has' && typeof inner[1] === 'string') {
      return ['!has', inner[1]];
    }
    const c = convertFilter(inner);
    return c == null ? null : ['none', c];
  }
  if (op === 'match') {
    const key = getKey(expr[1]);
    const geoKey = Array.isArray(expr[1]) && expr[1][0] === 'geometry-type' ? '$type' : null;
    const propKey = key || geoKey;
    const rest = expr.slice(2);
    const fallback = rest[rest.length - 1];
    // keys → true / fallback false → ["in", ...]；keys → false / fallback true → ["none", ["in", ...]]
    if (propKey && (fallback === false || fallback === true)) {
      const wanted = fallback === false;
      const keys = [];
      for (let i = 0; i + 1 < rest.length - 1; i += 2) {
        if (rest[i + 1] !== wanted) return null;
        keys.push(...(Array.isArray(rest[i]) ? rest[i] : [rest[i]]));
      }
      if (!keys.length) return null;
      const inFilter = ['in', propKey, ...keys];
      return wanted ? inFilter : ['none', inFilter];
    }
    return null;
  }
  return null;
}

function fillEntry(layer, ctx) {
  const paint = layer.paint || {};
  const symbol = {
    visible: true,
    polygonFill: paint['fill-color'] == null ? '#000' : convertValue('polygonFill', paint['fill-color']),
    polygonOpacity: paint['fill-opacity'] == null ? 1 : convertValue('polygonOpacity', paint['fill-opacity']),
  };
  if (paint['fill-pattern'] && ctx.sprite) {
    const name = Array.isArray(paint['fill-pattern']) ? paint['fill-pattern'][0] : paint['fill-pattern'];
    symbol.polygonPatternFile = `$${ctx.spritePrefix}${name}`;
  }
  const entries = [{
    name: layer.id,
    renderPlugin: { type: 'fill', dataConfig: { type: 'fill', only2D: true }, sceneConfig: SCENE_ZOOM(layer) },
    symbol,
    filter: baseFilter(layer),
  }];
  // fill-outline-color：maptalks 的 fill 插件没有描边属性，用一条同数据的 line 样式画多边形轮廓
  if (paint['fill-outline-color'] != null) {
    entries.push({
      name: `${layer.id}-outline`,
      renderPlugin: { type: 'line', dataConfig: { type: 'line', only2D: true }, sceneConfig: SCENE_ZOOM(layer) },
      symbol: {
        visible: true,
        lineColor: convertValue('lineColor', paint['fill-outline-color']),
        lineWidth: 1,
        lineOpacity: paint['fill-opacity'] == null ? 1 : convertValue('lineOpacity', paint['fill-opacity']),
      },
      filter: baseFilter(layer),
    });
  }
  return entries;
}

function lineEntry(layer) {
  const paint = layer.paint || {};
  const layout = layer.layout || {};
  const symbol = {
    visible: true,
    lineColor: paint['line-color'] == null ? '#fff' : convertValue('lineColor', paint['line-color']),
    lineWidth: paint['line-width'] == null ? 1 : convertValue('lineWidth', paint['line-width']),
    lineOpacity: paint['line-opacity'] == null ? 1 : convertValue('lineOpacity', paint['line-opacity']),
    lineDasharray: paint['line-dasharray'] == null ? [0, 0, 0, 0] : toDash4(paint['line-dasharray']),
    lineJoin: layout['line-join'] == null ? 'miter' : layout['line-join'],
    lineCap: layout['line-cap'] == null ? 'butt' : layout['line-cap'],
  };
  // line-gap-width 没有对应属性，近似为描边宽度（隧道线看起来会更接近原样式）
  if (paint['line-gap-width'] != null) {
    symbol.lineStrokeWidth = convertValue('lineStrokeWidth', paint['line-gap-width']);
    symbol.lineStrokeColor = symbol.lineColor;
  }
  return [{
    name: layer.id,
    renderPlugin: { type: 'line', dataConfig: { type: 'line', only2D: true }, sceneConfig: SCENE_ZOOM(layer) },
    symbol,
    filter: baseFilter(layer),
  }];
}

function symbolEntry(layer, ctx) {
  const layout = layer.layout || {};
  const paint = layer.paint || {};
  const hasText = layout['text-field'] != null;
  const iconImage = layout['icon-image'];
  // 只处理静态字符串图标（动态表达式图标无法静态算出 sprite 尺寸，跳过图标、保留文字）
  let iconName = null;
  if (typeof iconImage === 'string') iconName = iconImage;
  else if (Array.isArray(iconImage) && iconImage.length && iconImage.every((i) => typeof i === 'string')) {
    iconName = iconImage[0];
  }
  const size = iconName ? spriteSize(ctx.sprite, iconName) : null;
  const hasIcon = !!(iconName && size);

  if (!hasText && !hasIcon) return [];

  const symbol = { visible: true };

  if (hasIcon) {
    const iconSize = layout['icon-size'] == null ? 1 : convertValue('iconSize', layout['icon-size']);
    const scale = (v) => {
      const r = representativeNumber(v, 16);
      return r == null ? 1 : r;
    };
    symbol.markerFile = `$${ctx.spritePrefix}${iconName}`;
    if (typeof iconSize === 'number') {
      symbol.markerWidth = size[0] * iconSize;
      symbol.markerHeight = size[1] * iconSize;
    } else if (iconSize && Array.isArray(iconSize.stops)) {
      // icon-size 是 zoom 函数：把宽高一起按每档 s 值缩放
      const scaleStops = (idx) => ({
        ...iconSize,
        stops: iconSize.stops.map(([z, v]) => [z, size[idx] * (typeof v === 'number' ? v : 1)]),
      });
      symbol.markerWidth = scaleStops(0);
      symbol.markerHeight = scaleStops(1);
    } else {
      symbol.markerWidth = size[0] * scale(iconSize);
      symbol.markerHeight = size[1] * scale(iconSize);
    }
    Object.assign(symbol, convertAnchor(layout['icon-anchor'] || 'center',
      'markerHorizontalAlignment', 'markerVerticalAlignment'));
    if (layout['icon-rotate'] != null) symbol.markerRotation = convertValue('markerRotation', layout['icon-rotate']);
    if (layout['icon-allow-overlap'] != null) symbol.markerAllowOverlap = !!layout['icon-allow-overlap'];
    if (layout['icon-ignore-placement'] != null) symbol.markerIgnorePlacement = !!layout['icon-ignore-placement'];
    if (layout['icon-rotation-alignment'] === 'map') symbol.markerRotationAlignment = 'map';
    if (layout['icon-pitch-alignment'] === 'map') symbol.markerPitchAlignment = 'map';
    if (layout['symbol-placement'] === 'line') {
      symbol.markerPlacement = 'line';
      if (layout['symbol-spacing'] != null) symbol.markerSpacing = layout['symbol-spacing'];
    }
  }

  if (hasText) {
    const textSize = layout['text-size'] == null ? 16 : convertValue('textSize', layout['text-size']);
    const sizePx = representativeNumber(textSize, 14);
    symbol.textName = layout['text-field'];
    symbol.textSize = textSize;
    symbol.textPlacement = layout['symbol-placement'] === 'line' ? 'line' : 'point';
    if (paint['text-color'] != null) symbol.textFill = convertValue('textFill', paint['text-color']);
    if (paint['text-opacity'] != null) symbol.textOpacity = convertValue('textOpacity', paint['text-opacity']);
    if (paint['text-halo-color'] != null) symbol.textHaloFill = convertValue('textHaloFill', paint['text-halo-color']);
    if (paint['text-halo-width'] != null) symbol.textHaloRadius = convertValue('textHaloRadius', paint['text-halo-width']);
    if (paint['text-halo-blur'] != null) symbol.textHaloBlur = convertValue('textHaloBlur', paint['text-halo-blur']);
    Object.assign(symbol, convertFont(layout['text-font']));
    Object.assign(symbol, convertAnchor(layout['text-anchor'] || 'center',
      'textHorizontalAlignment', 'textVerticalAlignment'));
    if (layout['text-rotation-alignment'] === 'map') symbol.textRotationAlignment = 'map';
    if (layout['text-pitch-alignment'] === 'map') symbol.textPitchAlignment = 'map';
    if (layout['text-allow-overlap'] != null) symbol.textAllowOverlap = !!layout['text-allow-overlap'];
    if (layout['text-ignore-placement'] != null) symbol.textIgnorePlacement = !!layout['text-ignore-placement'];
    if (layout['text-max-width'] != null && sizePx) symbol.textWrapWidth = layout['text-max-width'] * sizePx;
    if (layout['symbol-placement'] === 'line' && layout['symbol-spacing'] != null) {
      symbol.textSpacing = layout['symbol-spacing'];
    }
    // text-offset 单位是 em（1em = text-size），换算成像素偏移
    const offset = layout['text-offset'];
    if (Array.isArray(offset) && offset.length === 2 && !isExpression(offset) && sizePx) {
      symbol.textDx = offset[0] * sizePx;
      symbol.textDy = offset[1] * sizePx;
    }
  }

  const sceneConfig = {
    collision: true,
    fading: true,
    uniquePlacement: true,
    depthFunc: 'always',
    ...SCENE_ZOOM(layer),
  };
  return [{
    name: layer.id,
    renderPlugin: {
      // icon 插件同时支持 marker* 与 text*，因此“图标 + 文字”的 symbol 图层只产出一条样式
      type: hasIcon ? 'icon' : 'text',
      dataConfig: { type: 'point', only2D: true },
      sceneConfig,
    },
    symbol,
    filter: baseFilter(layer),
  }];
}

function extrusionEntry(layer) {
  // 二维底图下没有光照场景，把挤出层退化成同色填充（等价于俯视看到的屋顶）
  return fillEntry({ ...layer, type: 'fill', paint: { 'fill-color': (layer.paint || {})['fill-extrusion-color'], 'fill-opacity': (layer.paint || {})['fill-extrusion-opacity'] } });
}

function circleEntry(layer) {
  const paint = layer.paint || {};
  const radius = representativeNumber(paint['circle-radius'] == null ? 5 : paint['circle-radius'], 14) || 5;
  return [{
    name: layer.id,
    renderPlugin: { type: 'icon', dataConfig: { type: 'point', only2D: true }, sceneConfig: { collision: true, ...SCENE_ZOOM(layer) } },
    symbol: {
      visible: true,
      markerType: 'ellipse',
      markerWidth: radius * 2,
      markerHeight: radius * 2,
      markerFill: paint['circle-color'] == null ? '#000' : convertValue('markerFill', paint['circle-color']),
      markerFillOpacity: paint['circle-opacity'] == null ? 1 : convertValue('markerFillOpacity', paint['circle-opacity']),
      markerLineColor: paint['circle-stroke-color'] == null ? '#000' : convertValue('markerLineColor', paint['circle-stroke-color']),
      markerLineWidth: paint['circle-stroke-width'] == null ? 0 : paint['circle-stroke-width'],
    },
    filter: baseFilter(layer),
  }];
}

/* ------------------------------------------------------------------ *
 * 主流程
 * ------------------------------------------------------------------ */

export async function convertStyle(style, options = {}) {
  const warnings = [];
  const entries = [];
  let background = null;

  // sprite 地址：样式里可能是字符串，也可能是 { default: url } 对象
  let spriteUrl = options.spriteUrl;
  if (spriteUrl === undefined) {
    const s = style.sprite;
    spriteUrl = typeof s === 'string' ? s : (s && s.default) || null;
  }
  let sprite = null;
  const spritePrefix = options.spritePrefix == null ? 'ofm' : options.spritePrefix;
  if (spriteUrl && !options.noSprites) {
    sprite = await loadSprite(spriteUrl);
    if (!sprite) warnings.push(`sprite 加载失败：${spriteUrl}`);
  }

  const ctx = { sprite, spritePrefix };

  for (const layer of style.layers || []) {
    let converted = [];
    switch (layer.type) {
      case 'background': {
        const color = (layer.paint || {})['background-color'];
        background = { enable: true, color: toRgba(color == null ? '#fff' : color), opacity: 1 };
        break;
      }
      case 'fill':
        // 只有 fill-pattern 没有 fill-color 的图层（如 Liberty 的湿地、步行区）：没有 sprite 可画，
        // 直接跳过，否则会退化成默认的黑色填充
        if ((layer.paint || {})['fill-pattern'] && (layer.paint || {})['fill-color'] == null) {
          warnings.push(`跳过纯 pattern 填色图层 ${layer.id}（fill-pattern 需要 sprite，未启用 sprite）`);
          break;
        }
        converted = fillEntry(layer, ctx);
        break;
      case 'line':
        converted = lineEntry(layer);
        break;
      case 'symbol':
        converted = symbolEntry(layer, ctx);
        break;
      case 'fill-extrusion':
        converted = extrusionEntry(layer);
        break;
      case 'circle':
        converted = circleEntry(layer);
        break;
      case 'raster':
        warnings.push(`跳过栅格图层 ${layer.id}（VectorTileLayer 不渲染栅格，需要在示例里用 TileLayer 叠加）`);
        break;
      default:
        warnings.push(`跳过不支持的图层类型 ${layer.type}（${layer.id}）`);
    }
    // 文字/图标的 collision 需要图层 options.collision（默认开启），其余样式无需过滤
    for (const e of converted) entries.push(e);
  }

  const out = {};
  if (background) out.background = background;
  if (sprite) {
    out.sprites = [{ imgUrl: sprite.imgUrl, jsonUrl: sprite.jsonUrl, sourceName: spritePrefix }];
  }
  out.style = entries;
  return { style: out, warnings };
}

/** 从样式里取出矢量源的瓦片地址模板（用于生成示例代码 / 打印信息） */
export async function resolveTileInfo(style) {
  const sources = style.sources || {};
  for (const [id, source] of Object.entries(sources)) {
    if (source.type !== 'vector') continue;
    if (Array.isArray(source.tiles) && source.tiles.length) {
      return { id, urlTemplate: source.tiles[0], minzoom: source.minzoom, maxzoom: source.maxzoom };
    }
    if (source.url) {
      try {
        const res = await fetch(source.url);
        const json = await res.json();
        return {
          id, urlTemplate: (json.tiles || [])[0], minzoom: json.minzoom, maxzoom: json.maxzoom,
          attribution: json.attribution,
        };
      } catch (e) {
        return { id, urlTemplate: null, error: e.message };
      }
    }
  }
  return {};
}

async function main() {
  const args = process.argv.slice(2);
  const positional = args.filter((a) => !a.startsWith('--'));
  const flags = args.filter((a) => a.startsWith('--'));
  const [input, output] = positional;
  if (!input || !output) {
    console.error('用法: node scripts/convert-maplibre-style.mjs <styleUrl 或本地路径> <输出文件> [--no-sprites] [--sprites <url>]');
    process.exit(1);
  }
  const getFlagValue = (name) => {
    const i = flags.indexOf(name);
    return i >= 0 ? args[args.indexOf(name) + 1] : undefined;
  };

  const style = /^https?:/.test(input)
    ? await (await fetch(input)).json()
    : JSON.parse(fs.readFileSync(input, 'utf8'));

  const { style: converted, warnings } = await convertStyle(style, {
    noSprites: flags.includes('--no-sprites'),
    spriteUrl: getFlagValue('--sprites'),
  });

  fs.mkdirSync(path.dirname(path.resolve(output)), { recursive: true });
  fs.writeFileSync(output, JSON.stringify(converted, null, 2) + '\n', 'utf8');

  const info = await resolveTileInfo(style);
  console.log(`已写入 ${output}`);
  console.log(`  样式条目: ${converted.style.length}`);
  console.log(`  背景色: ${converted.background ? JSON.stringify(converted.background.color) : '无'}`);
  console.log(`  sprite: ${converted.sprites ? converted.sprites[0].jsonUrl : '无'}`);
  console.log(`  矢量源: ${info.id || '未知'} ${info.urlTemplate || ''} maxzoom=${info.maxzoom}`);
  if (warnings.length) {
    console.log('  警告:');
    for (const w of warnings) console.log('   - ' + w);
  }
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
