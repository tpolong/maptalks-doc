---
title: 空间分析
---

# 空间分析

maptalks 的空间分析是一组基于 WebGL 的分析图层/分析对象，作用于 GroupGLLayer 三维场景：对场景中的 gltf 模型、3dtiles、矢量瓦片等图层实时进行剖切、挖方、淹没、限高、通视、天际线、可视域等分析，常用于城市规划、建筑工程、应急管理、军事仿真等场景。

分析对象通过 `addTo(groupGLLayer)` 挂载到 GroupGLLayer 上，内部会等待图层的 `contextinit` 事件拿到渲染器后建立渲染 pass，分析结果随场景一起实时更新。

绝大多数分析类继承自 `Analysis` 基类，唯 `ExcavateAnalysis` 例外——它继承自 `@maptalks/vt` 的 `ExtrudePolygonLayer`（见下文 [挖方 Excavate](#挖方-excavate)）。

## 通用用法

所有分析类都从 `@maptalks/gl-layers` 导入：

```js
import { Map } from "maptalks";
import {
  CutAnalysis,
  CrossCutAnalysis,
  ExcavateAnalysis,
  FloodAnalysis,
  HeightLimitAnalysis,
  InSightAnalysis,
  SkylineAnalysis,
  ViewshedAnalysis
} from "@maptalks/gl-layers";
```

`Analysis` 基类为各分析任务提供了统一的生命周期管理，常用方法如下：

| 方法 | 说明 |
| --- | --- |
| `addTo(layer)` | 添加到 GroupGLLayer（分析只能在 GroupGLLayer 上使用，无法添加到其他 WebGL 图层） |
| `enable()` / `disable()` | 启用 / 禁用分析 |
| `isEnable()` | 查询分析是否启用 |
| `update(name, value)` | 更新选项并触发重绘（如 `update("waterHeight", 80)`） |
| `remove()` | 从图层移除分析并释放 pass / FBO / mesh |
| `setExcludeLayers(layerIds)` / `getExcludeLayers()` | 设置 / 获取分析时忽略的图层 id（这些图层不参与分析） |
| `exportAnalysisMap(meshes)` | 导出分析结果图（RGBA 像素数据） |

子类一览：`CutAnalysis`、`CrossCutAnalysis`、`FloodAnalysis`、`HeightLimitAnalysis`（继承 FloodAnalysis）、`InSightAnalysis`、`SkylineAnalysis`、`ViewshedAnalysis` 均继承 `Analysis`；`ExcavateAnalysis` 继承 `ExtrudePolygonLayer`。

## 剖切 Cut

用一个由 `position` / `rotation` / `scale` 定义的切割区域剖切模型，隐藏区域外的部分，常用于查看建筑内部结构或地质剖面。

| 选项 | 默认值 | 说明 |
| --- | --- | --- |
| `position` | — | 切割区域的位置（经纬度坐标数组） |
| `rotation` | `[0, 0, 0]` | 切割区域的欧拉角 |
| `scale` | `[1, 1, 1]` | 切割区域的缩放 |

```js
import { Map } from "maptalks";
import { GroupGLLayer, GLTFLayer, GLTFMarker, CutAnalysis } from "@maptalks/gl-layers";

const map = new Map("map", {
  center: [108.9605239272878, 34.21955775963946],
  zoom: 15,
  pitch: 70,
  bearing: 135
});
const center = map.getCenter();
const gltfLayer = new GLTFLayer("gltf");
new GLTFMarker(center, {
  symbol: {
    url: "{res}/gltf/koncepcja/scene.gltf",
    scaleX: 30,
    scaleY: 30,
    scaleZ: 30
  }
}).addTo(gltfLayer);
const groupGLLayer = new GroupGLLayer("gl", [gltfLayer]).addTo(map);

const cutAnalysis = new CutAnalysis({
  position: [center.x, center.y, 10],
  rotation: [45, 0, 0],
  scale: [8, 8, 8]
});
cutAnalysis.addTo(groupGLLayer);
```

`reset()` 可将切割平面重置为初始的 position / rotation / scale：

```js
cutAnalysis.reset();
```

API：[Analysis](../api/analysis) · 示例：[剖切分析](/examples/#3d/spatial-analysis/cut)

## 挖方 Excavate

沿一个多边形边界把模型"挖"掉一块，露出带纹理的底面，常用于地下管廊、基坑开挖等展示。

> 注意：`ExcavateAnalysis` 不继承 `Analysis`，而是继承 `@maptalks/vt` 的 `ExtrudePolygonLayer`，构造方式与其一致（`new ExcavateAnalysis(id, data, options)`），并注册了 gl / gpu 两个渲染器。被挖方的图层通过 `excavate(layers)` 指定。

| 选项 | 说明 |
| --- | --- |
| `boundary` | 挖方边界的坐标环 `Array<Array>` |
| `textureUrl` | 挖方底面纹理 url |
| `height` | 挖方高度 |

```js
import { Map, Polygon } from "maptalks";
import { GroupGLLayer, GLTFLayer, ExcavateAnalysis } from "@maptalks/gl-layers";

const map = new Map("map", {
  center: [108.9605239272878, 34.21955775963946],
  zoom: 12,
  pitch: 45
});
const gltfLayer = new GLTFLayer("gltf");
const groupGLLayer = new GroupGLLayer("gl", [gltfLayer]).addTo(map);

// 挖方边界（一个坐标环）
const boundary = [
  [-0.0003325939178466797, 0.00039696693420410156],
  [-0.00039696693420410156, -0.0002574920654012658],
  [0.00037550926208496094, -0.00023603439328212517],
  [0.00037550926208496094, 0.00046133995053310173]
];

const excavateAnalysis = new ExcavateAnalysis("excavate", [
  new Polygon(boundary, {
    properties: { height: 500 }
  })
], {
  dataConfig: {
    type: "3d-extrusion",
    altitudeProperty: "height",
    altitudeScale: 1,
    defaultAltitude: 0,
    top: false,
    side: true
  },
  material: {
    baseColorFactor: [0, 1, 1, 1]
  }
});
// 指定被挖方的图层
excavateAnalysis.excavate(gltfLayer);
excavateAnalysis.addTo(groupGLLayer);
```

API：[Analysis](../api/analysis) · 示例：[挖方分析](/examples/#3d/spatial-analysis/excavate)（交互式绘制边界并调整挖方高度与底面/侧边纹理）

## 淹没 Flood

按设定的水面海拔高度渲染淹没范围：低于水面的区域用 `waterColor` 着色，可指定 `boundary` 限定分析范围。常用于洪水淹没推演。

| 选项 | 默认值 | 说明 |
| --- | --- | --- |
| `boundary` | — | 淹没范围边界坐标环（可选，不设则全图分析） |
| `waterHeight` | — | 水面海拔高度（米） |
| `waterColor` | `[0.1451, 0.2588, 0.4863]` | 水面颜色 |
| `waterOpacity` | `0.6` | 水面透明度 |

```js
import { Map } from "maptalks";
import { GroupGLLayer, Geo3DTilesLayer, FloodAnalysis } from "@maptalks/gl-layers";

const map = new Map("map", {
  center: [108.95965, 34.21776],
  zoom: 18.865,
  pitch: 50
});
const layer = new Geo3DTilesLayer("3dtiles", {
  services: [
    {
      url: "http://resource.dvgis.cn/data/3dtiles/dayanta/tileset.json",
      heightOffset: -400
    }
  ]
});
const groupGLLayer = new GroupGLLayer("gl", [layer]).addTo(map);

const floodAnalysis = new FloodAnalysis({
  boundary: [
    [108.95888623345706, 34.220502132776204],
    [108.9582019833017, 34.21987192350153],
    [108.95866479224173, 34.21879554904879],
    [108.95976365662978, 34.21870809810403],
    [108.96043811487289, 34.219454268264116],
    [108.96030941797153, 34.2204038033789]
  ],
  waterHeight: 50,
  waterColor: [0.1, 0.5, 0.6],
  waterOpacity: 0.4
});
floodAnalysis.addTo(groupGLLayer);
```

分析过程中可通过 `update` 动态调整水位与范围（示例中以滑块/动画循环改变水位实现"水面上涨"效果）：

```js
floodAnalysis.update("waterHeight", 80);
floodAnalysis.update("boundary", coordinates); // coordinates 为新的淹没范围坐标环
floodAnalysis.disable();
```

API：[FloodAnalysis](../api/flood-analysis) · 示例：[水淹分析](/examples/#3d/spatial-analysis/flood)

## 限高 HeightLimit

限高（超高检测）分析：超过 `limitHeight` 的模型部分用 `limitColor` 着色标出，用于城市控规、机场净空等限高审查。`HeightLimitAnalysis` 继承自 `FloodAnalysis`，复用其水面渲染机制（`analysisType = 2`）。

| 选项 | 默认值 | 说明 |
| --- | --- | --- |
| `limitHeight` | — | 限高值（米） |
| `limitColor` | `[0.8, 0.1, 0.1]` | 超高部分的着色 |
| 其余 | — | 继承自 FloodAnalysis（如 `boundary`） |

```js
import { Map } from "maptalks";
import { GroupGLLayer, Geo3DTilesLayer, HeightLimitAnalysis } from "@maptalks/gl-layers";

// map / layer / groupGLLayer：3dtiles 场景搭建同上文「淹没 Flood」
const heightLimitAnalysis = new HeightLimitAnalysis({
  limitHeight: 25,
  limitColor: [1, 0.2, 0.2]
});
heightLimitAnalysis.addTo(groupGLLayer);

// 动态调整限高与颜色
heightLimitAnalysis.update("limitHeight", 50);
heightLimitAnalysis.update("limitColor", [1, 0, 0]);
```

API：[Analysis](../api/analysis)（`HeightLimitAnalysis` 未提供独立 API 页） · 示例：[限高分析](/examples/#3d/spatial-analysis/height-limit)

## 通视 InSight

在视点（from）与目标点（to）之间连线，判断两点是否被模型遮挡：可见段显示为 `visibleColor`，不可见段显示为 `invisibleColor`。常用于观察点选址、通信基站覆盖分析。

| 选项 | 默认值 | 说明 |
| --- | --- | --- |
| `lines` | `[]` | 通视线数组，每项 `{ from, to }`（坐标数组或 Coordinate） |
| `visibleColor` | `[0, 1, 0, 1]` | 可见段颜色（绿） |
| `invisibleColor` | `[1, 0, 0, 1]` | 不可见段颜色（红） |
| `excludeLayers` | — | 忽略的图层 id（不参与遮挡判断） |

```js
import { Map } from "maptalks";
import { InSightAnalysis } from "@maptalks/gl-layers";

// map / groupGLLayer：三维场景搭建见上文「淹没 Flood」
const center = map.getCenter();
const eyePos = [center.x + 0.003, center.y + 0.002, 50];
let lookPoint = [center.x - 0.001, center.y - 0.0005, 100];

const insightAnalysis = new InSightAnalysis({
  lines: [
    {
      from: eyePos,
      to: lookPoint
    }
  ],
  visibleColor: [0, 1, 0, 1],
  invisibleColor: [1, 0, 0, 1]
});
insightAnalysis.addTo(groupGLLayer);

// 移动目标点后更新通视线
lookPoint = [center.x - 0.0005, center.y, 100];
insightAnalysis.update("lines", [
  {
    from: eyePos,
    to: lookPoint
  }
]);
```

API：[Analysis](../api/analysis)（`InSightAnalysis` 未提供独立 API 页） · 示例：[通视分析](/examples/#3d/spatial-analysis/insight)

## 天际线 Skyline

以天空为背景渲染模型的轮廓（天际线），可导出带透明背景的天际线图片，常用于建筑形态与城市天际线研究。

| 选项 | 默认值 | 说明 |
| --- | --- | --- |
| `lineColor` | `[1, 0, 0]` | 天际线颜色 |
| `lineWidth` | `1.0` | 天际线宽度 |

```js
import { Map } from "maptalks";
import { GroupGLLayer, Geo3DTilesLayer, SkylineAnalysis } from "@maptalks/gl-layers";

// map / layer / groupGLLayer：3dtiles 场景搭建同上文「淹没 Flood」
const skylineAnalysis = new SkylineAnalysis({
  lineColor: [234 / 255, 107 / 255, 72 / 255],
  lineWidth: 1.8
});
skylineAnalysis.addTo(groupGLLayer);

skylineAnalysis.update("lineColor", [1, 0, 0]);
```

导出天际线图片（返回图片 dataURL）：

```js
const url = skylineAnalysis.exportSkylineMap({});
// options.save 设为 true 时弹出下载，options.filename 指定文件名（默认 'export'）
```

API：[SkylineAnalysis](../api/skyline-analysis) · 示例：[天际线分析](/examples/#3d/spatial-analysis/skyline)

## 可视域 Viewshed

从视点（`eyePos`）看向目标点（`lookPoint`）形成一个四棱锥视野，分析模型遮挡下的可见/不可见区域：可视区域显示为 `visibleColor`，遮蔽区域显示为 `invisibleColor`。常用于雷达站、瞭望塔等的通视覆盖分析。

| 选项 | 默认值 | 说明 |
| --- | --- | --- |
| `eyePos` | — | 视点位置 `[经度, 纬度, 高度]` |
| `lookPoint` | — | 目标点位置 |
| `verticalAngle` | `90` | 垂直视场角（度） |
| `horizontalAngle` | `90` | 水平视场角（度） |
| `visibleColor` | `[0, 1, 0, 0.3]` | 可见区域颜色 |
| `invisibleColor` | `[1, 0, 0, 0.3]` | 不可见区域颜色 |

```js
import { Map } from "maptalks";
import { GroupGLLayer, Geo3DTilesLayer, ViewshedAnalysis } from "@maptalks/gl-layers";

// map / layer / groupGLLayer：3dtiles 场景搭建同上文「淹没 Flood」
let lookPoint = [108.95948541183475, 34.21971441232435, 67.59082];
const viewshedAnalysis = new ViewshedAnalysis({
  eyePos: [108.96104505157473, 34.219553384558736, 34.55867],
  lookPoint,
  verticalAngle: 30,
  horizontalAngle: 60
});
viewshedAnalysis.addTo(groupGLLayer);

// 移动目标点或调整视场角
lookPoint = [108.9599, 34.2195, 60];
viewshedAnalysis.update("lookPoint", lookPoint);
viewshedAnalysis.update("horizontalAngle", 90);
viewshedAnalysis.update("verticalAngle", 45);
```

`getVertexCoordinates()` 可获取可视域棱锥的 4 个顶点坐标。

API：[ViewshedAnalysis](../api/viewshed-analysis) · 示例：[可视域分析](/examples/#3d/spatial-analysis/viewshed)

## 相关能力

- **三维测量**：`Distance3DTool` / `Area3DTool` / `Height3DTool` 提供三维空间中的距离、面积、高度测量，见[测量示例](/examples/#3d/spatial-analysis/measure)。
- **射线检测**：`RayCaster` 可对模型网格做射线检测并返回交点坐标（`InSightAnalysis` 内部的遮挡判断也基于它），见[射线检测示例](/examples/#3d/spatial-analysis/raycaster)。

## 参考

- API 参考
  - [Analysis](../api/analysis)：Analysis 基类，及 Cut / Excavate / HeightLimit / InSight 等分析类说明
  - [FloodAnalysis](../api/flood-analysis)
  - [SkylineAnalysis](../api/skyline-analysis)
  - [ViewshedAnalysis](../api/viewshed-analysis)
- 相关示例
  - [剖切分析](/examples/#3d/spatial-analysis/cut)
  - [挖方分析](/examples/#3d/spatial-analysis/excavate)
  - [水淹分析](/examples/#3d/spatial-analysis/flood)
  - [限高分析](/examples/#3d/spatial-analysis/height-limit)
  - [通视分析](/examples/#3d/spatial-analysis/insight)
  - [天际线分析](/examples/#3d/spatial-analysis/skyline)
  - [可视域分析](/examples/#3d/spatial-analysis/viewshed)
  - [测量](/examples/#3d/spatial-analysis/measure)
  - [射线检测](/examples/#3d/spatial-analysis/raycaster)
