/**
 * 旧示例深链（2026-09 目录重组前）的兼容跳转
 *
 * 背景：示例中心以前直接按物理目录建树，深链形如 `#3d/3dtiles/load`。
 * 目录重组后深链变成 `#scene3d/tiles3d/load`，此前分享出去的旧链接会查不到示例。
 *
 * 这里把**当时的搬迁规则**原样保留成一张兼容表：整个二级目录搬家（42 条），
 * 外加少量逐例例外（18 条）。解析顺序为「先查逐例例外，再查二级目录，最后原样返回」，
 * 所以只需要几十行，而不是把 390 条新旧路径全列一遍。
 *
 * 旧路径不会再变化，因此本文件属于**一次性兼容层**，不需要日常维护。
 *
 * 注意：仅示例中心 `/examples/` 页的 hash 需要它；新路径命中不到就直接透传。
 */

/** 旧二级目录（`旧一级/旧二级`）-> 新二级目录（`新一级/新二级`） */
const LEGACY_SUBCATEGORIES: Record<string, string> = {
  // basic：按图层体系重新归位
  "basic/map": "map/view",
  "basic/ui-control": "map/ui",
  "basic/utils": "map/utils",
  // MapTool / ui.UIComponent / control.Control 三个扩展点，属地图级插件
  "basic/plugin-develop": "map/plugin",
  "basic/tilelayer-projection": "tile/tiles",
  // 默认按矢量图层操作；5 个绘制类示例见 LEGACY_EXAMPLES
  "basic/layer": "vector2d/layerops",
  // hellolayer 继承 Layer + renderer.CanvasRenderer（栅格 Canvas 绘制）
  "basic/hellolayer": "tile/customlayer",
  "basic/geometry": "vector2d/geometry",
  "basic/style": "vector2d/style",
  "basic/animation": "vector2d/animation",
  "basic/interaction": "vector2d/interaction",
  "basic/json": "vector2d/json",
  // basic/3d 是二维几何的 altitude，不是三维场景
  "basic/3d": "vector2d/altitude",

  // vector 下的 vt 系（VectorTileLayer / GeoJSONVectorTileLayer）
  "vector/vtlayer": "vt/load",
  "vector/vt-visual": "vt/visual",
  "vector/geo": "vt/geojson",
  "vector/style": "vt/style",
  "vector/pointstyle": "vt/pointstyle",
  "vector/linestyle": "vt/linestyle",
  "vector/polygonstyle": "vt/polygonstyle",
  "vector/operation": "vt/layerops",
  "vector/interactive": "vt/pick",

  // vector 下的 WebGL 矢量数据图层
  "vector/pointlayer": "glvec/point",
  "vector/linelayer": "glvec/line",
  "vector/polygonlayer": "glvec/polygon",

  "gltf/gltf-layer": "gltf/layer",
  "gltf/gltf-marker": "gltf/marker",
  "gltf/multi-gltf-marker": "gltf/multimarker",
  "gltf/gltf-linestring": "gltf/linestring",
  "gltf/transform-control": "gltf/transform",

  // 3d 下的三维场景与特效
  "3d/3dtiles": "scene3d/tiles3d",
  "3d/terrain": "scene3d/terrain",
  "3d/pipeline": "scene3d/pipeline",
  "3d/track": "scene3d/track",
  "3d/weather": "scene3d/weather",
  "3d/waterstyle": "scene3d/water",
  "3d/video": "scene3d/video",
  "3d/traffic": "scene3d/traffic",
  "3d/post-process": "scene3d/postprocess",
  // 两个 3d 样式目录的主图层全是 VectorTileLayer / GeoJSONVectorTileLayer
  "3d/line-3d-style": "vt/style3d",
  "3d/polygon-3d-style": "vt/style3d",

  // 默认按分析类；具体分析见 LEGACY_EXAMPLES
  "3d/spatial-analysis": "analysis/cut",
};

/** 旧示例全路径（`旧一级/旧二级/示例名`）-> 新示例全路径 */
const LEGACY_EXAMPLES: Record<string, string> = {
  // basic/layer 中真正演示栅格/画布绘制的 4 例
  // （原 canvastilelayer 依赖已停运的 tile.mapzen.com，该示例已下线，故不再保留映射）
  "basic/layer/canvaslayer": "tile/draw/canvaslayer",
  "basic/layer/imagelayer": "tile/draw/imagelayer",
  "basic/layer/particlelayer": "tile/draw/particlelayer",
  // swipe 演示的是两个 TileLayer 的渲染器画布卷帘合成
  "basic/layer/swipe": "tile/draw/swipe",

  // 3d/spatial-analysis 按分析用途细分
  "3d/spatial-analysis/box-clip": "analysis/cut/box-clip",
  "3d/spatial-analysis/crosscut": "analysis/cut/crosscut",
  "3d/spatial-analysis/cut": "analysis/cut/cut",
  "3d/spatial-analysis/excavate": "analysis/excavate/excavate",
  "3d/spatial-analysis/flood": "analysis/flood/flood",
  "3d/spatial-analysis/height-limit": "analysis/heightlimit/height-limit",
  "3d/spatial-analysis/insight": "analysis/insight/insight",
  "3d/spatial-analysis/measure": "analysis/measure/measure",
  "3d/spatial-analysis/raycaster": "analysis/raycaster/raycaster",
  "3d/spatial-analysis/skyline": "analysis/skyline/skyline",
  "3d/spatial-analysis/sunshine": "analysis/sunshine/sunshine",
  "3d/spatial-analysis/viewshed": "analysis/viewshed/viewshed",

  // 3d/3dtiles/water 内容是水体参数面板（与 waterstyle 同主题），不是三维瓦片
  "3d/3dtiles/water": "scene3d/water/water",
};

/**
 * 把旧深链解析为新深链；不是旧路径时原样返回。
 * @param path 形如 `3d/3dtiles/load` 的示例路径（不含 `#`）
 */
export function resolveLegacyPath(path: string): string {
  if (!path) return path;
  const direct = LEGACY_EXAMPLES[path];
  if (direct) return direct;
  const cut = path.lastIndexOf("/");
  if (cut < 0) return path; // 只给了分类，不是示例深链
  const mapped = LEGACY_SUBCATEGORIES[path.slice(0, cut)];
  return mapped ? `${mapped}/${path.slice(cut + 1)}` : path;
}

/**
 * 读取 `location.hash` 中的示例路径，并把旧路径就地升级为新路径：
 * 命中兼容表时用 `history.replaceState` 改写地址栏（不触发 hashchange，
 * 因此不会二次渲染，也不会污染后退历史）。
 */
export function readExampleHash(): string {
  if (typeof window === "undefined") return "";
  const raw = window.location.hash.slice(1);
  const next = resolveLegacyPath(raw);
  if (next !== raw) {
    window.history.replaceState(null, "", `#${next}`);
  }
  return next;
}
