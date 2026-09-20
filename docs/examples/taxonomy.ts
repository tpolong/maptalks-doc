/**
 * 示例中心展示层分类（taxonomy）
 *
 * 背景：示例中心的分类树此前直接沿用物理目录
 * `docs/public/examples/<一级>/<二级>/<示例名>/`，导致一级维度不统一
 * （basic 是功能主题、vector 是渲染体系、3d/gltf 是内容形态），同一对象
 * 被切到多处（如 3d 下的三维样式其实全在矢量瓦片图层上）。
 *
 * 本文件提供「物理位置 → 展示分类」的映射，让展示树按**图层/渲染体系**组织，
 * 而下列三样**全部保持不变**：
 *   1. 物理目录结构（docs/public/examples/**）
 *   2. 缩略图文件名（public/thumbnails/{物理cat}_{物理sub}_{name}.webp）
 *   3. `#物理路径` 深链（如 #3d/3dtiles/load，REPL 与分享链接都用它）
 *
 * 归属依据：对 390 个示例逐个读源码判定的主图层/主主题（见 SUBCATEGORY_MAP
 * 与 EXAMPLE_MAP 的注释）。整组能定的走 SUBCATEGORY_MAP；需要逐例拆分的两个
 * 物理子分类（basic/layer、3d/spatial-analysis）走 EXAMPLE_MAP 覆盖。
 */

export interface CategoryDef {
  /** 展示一级分类的 key */
  key: string;
  zh: string;
  en: string;
}

export interface SubCategoryDef {
  /** 所属展示一级分类 key */
  cat: string;
  /** 展示二级分类 key，展示树锚点为 `${cat}/${sub}` */
  sub: string;
  zh: string;
  en: string;
}

/** 8 个展示一级分类，数组顺序即树中顺序 */
export const CATEGORIES: CategoryDef[] = [
  { key: "map", zh: "地图基础", en: "Map Basics" },
  { key: "tile", zh: "栅格瓦片图层", en: "Raster Tile Layers" },
  { key: "vector2d", zh: "二维矢量图层", en: "2D Vector Layers" },
  { key: "vt", zh: "矢量瓦片图层", en: "Vector Tile Layers" },
  { key: "glvec", zh: "WebGL 矢量图层", en: "WebGL Vector Layers" },
  { key: "gltf", zh: "GLTF 模型", en: "GLTF Models" },
  { key: "scene3d", zh: "三维场景与特效", en: "3D Scenes & Effects" },
  { key: "analysis", zh: "空间分析", en: "Spatial Analysis" },
];

/** 展示二级分类，数组顺序即组内顺序 */
export const SUBCATEGORIES: SubCategoryDef[] = [
  // 地图基础
  { cat: "map", sub: "view", zh: "视图与操作", en: "View & Operations" },
  { cat: "map", sub: "ui", zh: "控件与 UI", en: "Controls & UI" },
  { cat: "map", sub: "utils", zh: "全局工具", en: "Global Utilities" },
  { cat: "map", sub: "plugin", zh: "插件开发", en: "Plugin Development" },
  // 栅格瓦片图层
  { cat: "tile", sub: "tiles", zh: "瓦片与投影", en: "Tiles & Projection" },
  { cat: "tile", sub: "draw", zh: "Canvas 与绘制类图层", en: "Canvas & Drawing Layers" },
  { cat: "tile", sub: "customlayer", zh: "自定义图层开发", en: "Custom Layer Development" },
  // 二维矢量图层
  { cat: "vector2d", sub: "geometry", zh: "几何", en: "Geometry" },
  { cat: "vector2d", sub: "style", zh: "样式", en: "Styles" },
  { cat: "vector2d", sub: "animation", zh: "动画", en: "Animation" },
  { cat: "vector2d", sub: "interaction", zh: "交互", en: "Interaction" },
  { cat: "vector2d", sub: "json", zh: "JSON 序列化", en: "JSON Serialization" },
  { cat: "vector2d", sub: "altitude", zh: "三维高度", en: "Altitude" },
  { cat: "vector2d", sub: "layerops", zh: "图层操作", en: "Layer Operations" },
  // 矢量瓦片图层
  { cat: "vt", sub: "load", zh: "加载与数据", en: "Loading & Data" },
  { cat: "vt", sub: "visual", zh: "可视化", en: "Visualization" },
  { cat: "vt", sub: "geojson", zh: "GeoJSON 数据", en: "GeoJSON Data" },
  { cat: "vt", sub: "style", zh: "样式", en: "Styles" },
  { cat: "vt", sub: "pointstyle", zh: "点数据样式", en: "Point Styles" },
  { cat: "vt", sub: "linestyle", zh: "线数据样式", en: "Line Styles" },
  { cat: "vt", sub: "polygonstyle", zh: "面数据样式", en: "Polygon Styles" },
  { cat: "vt", sub: "style3d", zh: "三维样式", en: "3D Styles" },
  { cat: "vt", sub: "layerops", zh: "图层操作", en: "Layer Operations" },
  { cat: "vt", sub: "pick", zh: "拾取与交互", en: "Picking & Interaction" },
  // WebGL 矢量图层
  { cat: "glvec", sub: "point", zh: "点图层", en: "Point Layer" },
  { cat: "glvec", sub: "line", zh: "线图层", en: "Line Layer" },
  { cat: "glvec", sub: "polygon", zh: "面图层", en: "Polygon Layer" },
  // GLTF 模型
  { cat: "gltf", sub: "layer", zh: "图层", en: "Layer" },
  { cat: "gltf", sub: "marker", zh: "标记", en: "Marker" },
  { cat: "gltf", sub: "multimarker", zh: "批量标记", en: "Multi Marker" },
  { cat: "gltf", sub: "linestring", zh: "线", en: "LineString" },
  { cat: "gltf", sub: "transform", zh: "变换", en: "Transform Control" },
  // 三维场景与特效
  { cat: "scene3d", sub: "tiles3d", zh: "三维瓦片", en: "3D Tiles" },
  { cat: "scene3d", sub: "terrain", zh: "地形", en: "Terrain" },
  { cat: "scene3d", sub: "pipeline", zh: "管线", en: "Pipeline" },
  { cat: "scene3d", sub: "track", zh: "轨迹动画", en: "Track Animation" },
  { cat: "scene3d", sub: "weather", zh: "天气", en: "Weather" },
  { cat: "scene3d", sub: "water", zh: "水体", en: "Water" },
  { cat: "scene3d", sub: "video", zh: "视频", en: "Video" },
  { cat: "scene3d", sub: "traffic", zh: "交通", en: "Traffic" },
  { cat: "scene3d", sub: "postprocess", zh: "后处理", en: "Post-processing" },
  // 空间分析
  { cat: "analysis", sub: "cut", zh: "剖切与裁剪", en: "Cutting & Clipping" },
  { cat: "analysis", sub: "excavate", zh: "挖方", en: "Excavation" },
  { cat: "analysis", sub: "flood", zh: "淹没", en: "Flooding" },
  { cat: "analysis", sub: "heightlimit", zh: "限高", en: "Height Limit" },
  { cat: "analysis", sub: "insight", zh: "通视", en: "Line of Sight" },
  { cat: "analysis", sub: "viewshed", zh: "可视域", en: "Viewshed" },
  { cat: "analysis", sub: "skyline", zh: "天际线", en: "Skyline" },
  { cat: "analysis", sub: "measure", zh: "量测", en: "Measurement" },
  { cat: "analysis", sub: "sunshine", zh: "日照", en: "Sunshine" },
  { cat: "analysis", sub: "raycaster", zh: "射线检测", en: "Ray Casting" },
];

export interface Taxon {
  cat: string;
  sub: string;
}

/**
 * 物理子分类（`<物理一级>/<物理二级>`）→ 展示归属。
 * 42 个物理子分类中，40 个可整组映射；basic/layer 与 3d/spatial-analysis
 * 需要逐例拆分，这里给的是**默认归属**（占多数的那一类），个别示例由
 * EXAMPLE_MAP 覆盖。
 */
export const SUBCATEGORY_MAP: Record<string, Taxon> = {
  // basic：地图功能主题 → 按图层体系重新归位
  "basic/map": { cat: "map", sub: "view" },
  "basic/ui-control": { cat: "map", sub: "ui" },
  "basic/utils": { cat: "map", sub: "utils" },
  // MapTool / ui.UIComponent / control.Control 三个扩展点，属地图级插件
  "basic/plugin-develop": { cat: "map", sub: "plugin" },
  "basic/tilelayer-projection": { cat: "tile", sub: "tiles" },
  // 默认按矢量图层操作；canvaslayer/canvastilelayer/imagelayer/particlelayer/swipe 见 EXAMPLE_MAP
  "basic/layer": { cat: "vector2d", sub: "layerops" },
  // hellolayer 继承 Layer + renderer.CanvasRenderer（栅格 Canvas 绘制），非矢量图层
  "basic/hellolayer": { cat: "tile", sub: "customlayer" },
  "basic/geometry": { cat: "vector2d", sub: "geometry" },
  "basic/style": { cat: "vector2d", sub: "style" },
  "basic/animation": { cat: "vector2d", sub: "animation" },
  "basic/interaction": { cat: "vector2d", sub: "interaction" },
  "basic/json": { cat: "vector2d", sub: "json" },
  // basic/3d 是二维几何的 altitude，不是三维场景
  "basic/3d": { cat: "vector2d", sub: "altitude" },

  // vector 下的 vt 系（VectorTileLayer / GeoJSONVectorTileLayer）
  "vector/vtlayer": { cat: "vt", sub: "load" },
  "vector/vt-visual": { cat: "vt", sub: "visual" },
  "vector/geo": { cat: "vt", sub: "geojson" },
  "vector/style": { cat: "vt", sub: "style" },
  "vector/pointstyle": { cat: "vt", sub: "pointstyle" },
  "vector/linestyle": { cat: "vt", sub: "linestyle" },
  "vector/polygonstyle": { cat: "vt", sub: "polygonstyle" },
  // 7 个示例的主图层均为 VectorTileLayer
  "vector/operation": { cat: "vt", sub: "layerops" },
  // 12 个示例的拾取均落在 VectorTileLayer / GeoJSONVectorTileLayer
  "vector/interactive": { cat: "vt", sub: "pick" },

  // vector 下的 WebGL 矢量数据图层
  "vector/pointlayer": { cat: "glvec", sub: "point" },
  "vector/linelayer": { cat: "glvec", sub: "line" },
  "vector/polygonlayer": { cat: "glvec", sub: "polygon" },

  "gltf/gltf-layer": { cat: "gltf", sub: "layer" },
  "gltf/gltf-marker": { cat: "gltf", sub: "marker" },
  "gltf/multi-gltf-marker": { cat: "gltf", sub: "multimarker" },
  "gltf/gltf-linestring": { cat: "gltf", sub: "linestring" },
  "gltf/transform-control": { cat: "gltf", sub: "transform" },

  // 3d 下的三维场景与特效
  "3d/3dtiles": { cat: "scene3d", sub: "tiles3d" },
  "3d/terrain": { cat: "scene3d", sub: "terrain" },
  "3d/pipeline": { cat: "scene3d", sub: "pipeline" },
  "3d/track": { cat: "scene3d", sub: "track" },
  "3d/weather": { cat: "scene3d", sub: "weather" },
  "3d/waterstyle": { cat: "scene3d", sub: "water" },
  "3d/video": { cat: "scene3d", sub: "video" },
  "3d/traffic": { cat: "scene3d", sub: "traffic" },
  "3d/post-process": { cat: "scene3d", sub: "postprocess" },
  // 两个 3d 样式目录的主图层全是 VectorTileLayer / GeoJSONVectorTileLayer
  "3d/line-3d-style": { cat: "vt", sub: "style3d" },
  "3d/polygon-3d-style": { cat: "vt", sub: "style3d" },

  // 默认按分析类；具体分析见 EXAMPLE_MAP
  "3d/spatial-analysis": { cat: "analysis", sub: "cut" },
};

/**
 * 逐例覆盖（物理全路径 `物理一级/物理二级/示例名`）。
 * 只用于两个需要拆分的物理子分类，外加一个个例（3d/3dtiles/water）。
 */
export const EXAMPLE_MAP: Record<string, Taxon> = {
  // basic/layer 中真正演示栅格/画布绘制的 5 例
  "basic/layer/canvaslayer": { cat: "tile", sub: "draw" },
  "basic/layer/canvastilelayer": { cat: "tile", sub: "draw" },
  "basic/layer/imagelayer": { cat: "tile", sub: "draw" },
  "basic/layer/particlelayer": { cat: "tile", sub: "draw" },
  // swipe 演示的是两个 TileLayer 的渲染器画布卷帘合成
  "basic/layer/swipe": { cat: "tile", sub: "draw" },

  // 3d/spatial-analysis 按分析用途细分
  "3d/spatial-analysis/box-clip": { cat: "analysis", sub: "cut" },
  "3d/spatial-analysis/crosscut": { cat: "analysis", sub: "cut" },
  "3d/spatial-analysis/cut": { cat: "analysis", sub: "cut" },
  "3d/spatial-analysis/excavate": { cat: "analysis", sub: "excavate" },
  "3d/spatial-analysis/flood": { cat: "analysis", sub: "flood" },
  "3d/spatial-analysis/height-limit": { cat: "analysis", sub: "heightlimit" },
  "3d/spatial-analysis/insight": { cat: "analysis", sub: "insight" },
  "3d/spatial-analysis/measure": { cat: "analysis", sub: "measure" },
  "3d/spatial-analysis/raycaster": { cat: "analysis", sub: "raycaster" },
  "3d/spatial-analysis/skyline": { cat: "analysis", sub: "skyline" },
  "3d/spatial-analysis/sunshine": { cat: "analysis", sub: "sunshine" },
  "3d/spatial-analysis/viewshed": { cat: "analysis", sub: "viewshed" },

  // 3d/3dtiles/water 内容是水体参数面板（与 waterstyle 同主题），不是三维瓦片
  "3d/3dtiles/water": { cat: "scene3d", sub: "water" },
};

/**
 * 解析一个示例的展示归属。
 * @param category 物理一级目录名
 * @param subcategory 物理二级目录名
 * @param path 示例物理全路径，如 "3d/3dtiles/load"
 */
export function resolveTaxonomy(
  category: string,
  subcategory: string,
  path: string,
): Taxon {
  return (
    EXAMPLE_MAP[path] ??
    SUBCATEGORY_MAP[`${category}/${subcategory}`] ?? {
      cat: category,
      sub: subcategory,
    }
  );
}
