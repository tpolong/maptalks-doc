---
title: API 参考
---

# API 参考

本参考以 maptalks 最新源码为准整理，覆盖核心库 `maptalks`、三维汇总包 `maptalks-gl` 与空间分析包 `@maptalks/analysis`。共 117 个类与参考条目，中英双语页面一一对应，左侧按类的性质（而非使用频率）分组。

## 导入约定

```js
// 核心库：地图、图层基类、几何、控件、工具
import { Map, TileLayer, VectorLayer, Marker, Polygon } from "maptalks";

// WebGL 扩展：矢量瓦片、WebGL 矢量图层、三维场景、空间分析
import { VectorTileLayer, PointLayer, GroupGLLayer } from "maptalks-gl";
import { ViewshedAnalysis } from "@maptalks/analysis";
```

> 站内[示例中心](/examples/)的 REPL 使用同一套导入约定，页面中的代码可直接复制运行。

## 分组索引

| 分组 | 涵盖 | 主要类 |
| --- | --- | --- |
| 地图 | 地图实例与视图操作 | [Map](/api/map) |
| 几何 | 几何基类与各类几何体 | [Geometry](/api/geometry)、[Marker](/api/marker)、[Point](/api/point)、[LineString](/api/line-string)、[Polygon](/api/polygon) |
| 图层 | 图层继承体系（栅格瓦片与二维矢量绘制） | [Layer](/api/layer)、[TileLayer](/api/tile-layer)、[OverlayLayer](/api/overlay-layer)、[VectorLayer](/api/vector-layer) |
| 基础类 | 类系统、事件与 JSON 基础设施 | [Class](/api/class)、[Eventable](/api/eventable)、[Handler](/api/handler) |
| Geo 值类型 | 坐标、范围与投影变换值类型 | [Position](/api/position)、[Coordinate](/api/coordinate)、[Extent](/api/extent)、[CRS](/api/crs) |
| 地图工具 | 绘制与量测工具 | [DrawTool](/api/draw-tool)、[AreaTool](/api/area-tool)、[DistanceTool](/api/distance-tool) |
| UI 组件 | 信息窗口、菜单与提示 | [UIMarker](/api/ui-marker)、[InfoWindow](/api/info-window)、[ToolTip](/api/tool-tip) |
| 动画 | 帧动画与播放控制 | [Animation](/api/animation-animation)、[Player](/api/animation-player)、[Easing](/api/animation-easing) |
| 控件 | 地图控件 | [Control](/api/control)、[Zoom](/api/control-zoom)、[LayerSwitcher](/api/control-layer-switcher) |
| 投影 | 内置投影定义 | [projection.EPSG3857](/api/projection-epsg3857)、[projection.EPSG4326](/api/projection-epsg4326)、[projection.BAIDU](/api/projection-baidu) |
| 测量器 | 距离与面积测量实现 | [measurer.Measurer](/api/measurer-measurer)、[measurer.WGS84Sphere](/api/measurer-wgs84sphere) |
| 渲染器 | 二维 Canvas 渲染器 | [CanvasRenderer](/api/canvas-renderer) |
| 工具函数 | 通用工具对象 | [Util](/api/util)、[DomUtil](/api/dom-util)、[GeoJSON](/api/geojson)、[TileSystem](/api/tile-system) |
| 矢量瓦片图层 | MVT / GeoJSON 矢量瓦片 | [VectorTileLayer](/api/vector-tile-layer)、[GeoJSONVectorTileLayer](/api/geojson-vector-tile-layer) |
| WebGL 矢量图层 | 基于 WebGL 的点线面数据图层 | [PointLayer](/api/point-layer)、[LineStringLayer](/api/line-string-layer)、[PolygonLayer](/api/polygon-layer)、[ExtrudePolygonLayer](/api/extrude-polygon-layer) |
| 三维图层与模型 | GL 场景合成、3DTiles 与 GLTF | [GroupGLLayer](/api/group-gl-layer)、[Geo3DTilesLayer](/api/geo-3dtiles-layer)、[GLTFLayer](/api/gltf-layer)、[GLTFMarker](/api/gltf-marker) |
| 空间分析 | 剖切、淹没、限高、通视等三维分析 | [CutAnalysis](/api/cut-analysis)、[ExcavateAnalysis](/api/excavate-analysis)、[ViewshedAnalysis](/api/viewshed-analysis)、[SkylineAnalysis](/api/skyline-analysis) |
| 参考 | 矢量瓦片的概念、对比与性能 | [矢量瓦片简介](/api/vt-intro)、[图层对比](/api/vt-compare)、[性能优化](/api/vt-performance) |

## 相关指南

- [三维场景](/guide/3d-scene) —— 三维图层与全局效果的组织方式
- [矢量瓦片](/guide/vector-tile) —— 矢量瓦片的数据与样式
- [样式指南](/guide/style/intro) —— Symbol、材质与渲染插件
- [空间分析](/guide/analysis) —— 各类分析的用法
- [WebGPU 渲染](/guide/webgpu) —— 用 `renderer: 'gpu'` 开启
- [示例中心](/examples/) —— 可在线运行的示例
