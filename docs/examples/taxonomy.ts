/**
 * 示例中心的分类展示定义
 *
 * 物理目录 `docs/public/examples/<一级>/<二级>/<示例名>/` 与展示树现已一一对应，
 * 因此本文件只负责**分组顺序与中英标签**：
 *   - `CATEGORIES`     8 个展示一级分类，数组顺序即树中顺序
 *   - `SUBCATEGORIES`  各一级下的展示二级分类，数组顺序即组内顺序
 *
 * 缩略图文件名（`public/thumbnails/{cat}_{sub}_{name}.webp`）与
 * `#物理路径` 深链（如 `#scene3d/tiles3d/load`）都由物理目录直接决定，本文件不参与。
 *
 * 新增示例目录时，到这里补一条 `SUBCATEGORIES` 记录即可；
 * 漏补也不会丢示例 —— 组件会把未登记的二级按目录名人性化后追加显示。
 */

export interface CategoryDef {
  /** 展示一级分类的 key，与物理一级目录同名 */
  key: string;
  zh: string;
  en: string;
}

export interface SubCategoryDef {
  /** 所属一级分类 key */
  cat: string;
  /** 展示二级分类 key，与物理二级目录同名；锚点为 `${cat}/${sub}` */
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
