---
title: Map
---

# Map

Map是maptalks的核心类，负责在给定的HTML容器上创建并管理地图。它承载空间参考（projection）、视图状态（center/zoom/pitch/bearing）、图层管理、交互（拖拽/缩放/旋转/倾斜）、坐标换算、事件系统等核心能力。

Map的继承链为 `Map → Handlerable(Eventable(Renderable(Class)))`，因此它天然具备事件（`on/off/once/fire`）、配置读写（`config`）、可渲染（`getRendererClass`）与交互处理器能力。

```js
import { Map, TileLayer } from "maptalks";

const map = new Map("map", {
  center: [121.47, 31.23],
  zoom: 14,
  baseLayer: new TileLayer("base", {
    urlTemplate: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
    subdomains: ["a", "b", "c", "d"],
  }),
});
```

## 构造函数

```js
new Map(container, options)
```

参数：

* **container** `String | HTMLElement` 地图容器，可以是DOM元素或元素id。
* **options** `Object` **必填**。常用构造参数：

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| `center` | `Number[] \| Coordinate` | **必填**，初始地图中心 |
| `zoom` | `Number` | **必填**，初始缩放级别 |
| `spatialReference` | `Object` | 空间参考，默认 EPSG:3857 |
| `baseLayer` | `Layer` | 初始基础图层 |
| `layers` | `Layer[]` | 初始添加的其它图层 |
| `pitch` | `Number` | 初始俯仰角（度） |
| `bearing` | `Number` | 初始方位角（度） |

## options 配置项

Map的完整配置项可通过 `map.config()` 动态更新。常用配置如下（默认值以源码为准）：

### 视图与缩放

| 配置名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| `centerCross` | Boolean | 在地图中心显示红色十字 | `false` |
| `seamlessZoom` | Boolean | 是否使用无缝缩放模式 | `true` |
| `zoomAnimation` | Boolean | 启用缩放动画 | `true` |
| `zoomAnimationDuration` | Number | 缩放动画时长（ms） | `330` |
| `panAnimation` | Boolean | 拖拽/触摸结束后继续平移动画 | `true` |
| `panAnimationDuration` | Number | 平移动画时长（ms） | `600` |
| `rotateAnimation` | Boolean | 旋转结束后继续动画 | `true` |
| `rotateAnimationDuration` | Number | 旋转动画时长（ms） | `800` |
| `maxZoom` | Number | 最大缩放级别 | `null` |
| `minZoom` | Number | 最小缩放级别 | `null` |
| `maxExtent` | Extent | 最大范围限制 | `null` |
| `maxPitch` | Number | 最大俯仰角 | `80` |
| `maxVisualPitch` | Number | 可视最大俯仰角 | `70` |

### 交互

| 配置名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| `draggable` | Boolean | 是否可拖拽 | `true` |
| `dragPan` | Boolean | 拖拽平移 | `true` |
| `dragRotate` | Boolean | 右键或Ctrl+左键拖拽旋转 | `true` |
| `dragPitch` | Boolean | 右键或Ctrl+左键拖拽倾斜 | `true` |
| `switchDragButton` | Boolean | 切换左键旋转、右键移动 | `false` |
| `zoomable` | Boolean | 是否可缩放 | `true` |
| `scrollWheelZoom` | Boolean | 滚轮缩放 | `true` |
| `doubleClickZoom` | Boolean | 双击缩放 | `true` |
| `touchGesture` | Boolean | 允许双指触摸缩放/旋转/倾斜 | `true` |
| `touchZoom` | Boolean | 触摸缩放 | `true` |
| `touchRotate` | Boolean | 触摸旋转 | `true` |
| `touchPitch` | Boolean | 触摸倾斜 | `true` |
| `boxZoom` | Boolean | 框选缩放 | `false` |

### 渲染与性能

| 配置名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| `renderer` | `String \| String[]` | 渲染器类型（`canvas` / `gl` / `gpu`，见下方说明） | `['canvas','gl','gpu']` |
| `devicePixelRatio` | Number | 覆盖设备DPR | `null` |
| `hitDetect` | Boolean | 图层命中检测（光标样式） | `true` |
| `hitDetectLimit` | Number | 命中检测的最大图层数 | `5` |
| `fpsOnInteracting` | Number | 交互时帧率，0禁用 | `25` |
| `stopRenderOnOffscreen` | Boolean | 容器离屏时停止渲染 | `true` |
| `fog` | Boolean | 远景绘制雾 | `true` |
| `fogColor` | `Number[]` | 雾颜色[r,g,b] | `[233,233,233]` |
| `cameraFarUndergroundInMeter` | Number | 相机地下远距离（米） | `2000` |

地图按 `renderer` 列表的顺序取第一个可用的渲染器。默认 `['canvas','gl','gpu']` 表示优先使用 canvas 2D 渲染；显式传入 `'gpu'` 可强制启用 WebGPU 渲染（`MapGPURenderer`）。

- **`'canvas'`** — 2D canvas 渲染，二维图层（瓦片、Marker 等）的默认渲染路径。
- **`'gl'`** — WebGL 渲染（`MapGLRenderer`），三维场景的渲染路径。
- **`'gpu'`** — WebGPU 渲染（`MapGPURenderer`），通过 `Map.registerRenderer('gpu', MapGPURenderer)` 注册，使用 `canvas.getContext('webgpu')` 创建上下文，并以 `reshader.GraphicsDevice` 作为 GPU 设备（`isWebGPU()` 返回 `true`）。

**WebGPU 渲染注意点**（详见 [WebGPU 渲染](/guide/webgpu)）：

- **浏览器/设备要求**：需要支持 WebGPU 的浏览器（现代 Chromium 系如桌面版 Chrome/Edge，以及较新的 Safari、Firefox）和支持 WebGPU 的 GPU/驱动；可通过 `navigator.gpu` 判断是否可用。
- **截图与导出**：WebGPU 默认不保留绘图缓冲，`toDataURL()` 等截图能力依赖 `preserveGpuDrawingBuffer` 选项；开启后每帧会把帧缓冲读入一张读取用的 canvas（`device.preserveDrawingBuffer`）。

### 控件

| 配置名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| `control` | Boolean | 是否允许添加控件 | `true` |
| `attribution` | `Boolean \| Object` | 是否显示版权控件 | `true` |
| `zoomControl` | `Boolean \| Object` | 缩放控件 | `false` |
| `scaleControl` | `Boolean \| Object` | 比例尺控件 | `false` |
| `overviewControl` | `Boolean \| Object` | 鹰眼控件 | `false` |

更多配置项请参见源码 `Map.ts` 顶部的完整选项注释，或通过 `new Map(container, options).getOptions()` 查看。

## 成员方法

### 生命周期与基本信息

- `isLoaded(): boolean` — 地图是否加载完成
- `getContainer(): HTMLElement` — 获取地图容器
- `getSize(): Size` — 获取地图像素尺寸
- `remove(): Map` — 移除地图
- `isRemoved(): boolean` — 地图是否已移除
- `checkSize(force?): Map` — 检查并更新容器尺寸
- `setDevicePixelRatio(dpr): Map` — 设置DPR
- `getDevicePixelRatio(): number` — 获取DPR
- `toJSON(options?): Object` — 导出地图JSON快照
- `getRenderer()` — 获取渲染器实例

### 视图与相机

- `getZoom(): number` / `setZoom(zoom, options?): Map` — 获取/设置缩放级别
- `zoomIn(): Map` / `zoomOut(): Map` — 放大/缩小一级
- `getCenter(): Coordinate` / `setCenter(center, padding?): Map` — 获取/设置中心
- `setCenterAndZoom(center, zoom?, padding?): Map` — 同时设置中心与缩放
- `getView(): MapViewType` / `setView(view): Map` — 获取/设置视图（center/zoom/pitch/bearing）
- `getMaxZoom(): number` / `setMaxZoom(maxZoom): Map`
- `getMinZoom(): number` / `setMinZoom(minZoom): Map`
- `getPitch(): number` / `setPitch(pitch): Map` — 获取/设置俯仰角
- `getBearing(): number` / `setBearing(bearing): Map` — 获取/设置方位角
- `getFov(): number` / `setFov(fov): Map` — 获取/设置视野角
- `getResolution(zoom?): number` — 获取分辨率
- `getScale(zoom?): number` — 获取缩放比例
- `setCameraPosition(coordinate): Map` — 根据坐标设置相机
- `setCameraMovements(frameOptions, option?): Map` — 依次执行多帧相机移动（自动飞行）
- `lookAt(params): Map` — 相机看向给定坐标
- `getFrustumAltitude(): number` — 获取视锥体底部海拔
- `isZooming(): boolean` — 是否正在缩放
- `isTransforming(): boolean` — 是否正在旋转或倾斜
- `isAnimating(): boolean` — 是否在动画中

### 平移与动画

- `panTo(coordinate, options?, step?): Map` — 平滑平移到目标
- `panBy(offset, options?, step?): Map` — 按像素偏移平移
- `animateTo(view, options?, step?): Player` — 动画更新视图
- `flyTo(view, options?, step?): this` — 平滑飞行到目标视图
- `isRotating(): boolean` — 是否在旋转
- `isMoving(): boolean` — 是否在移动

### 图层管理

- `getBaseLayer(): Layer` / `setBaseLayer(baseLayer): Map` — 获取/设置基础图层
- `removeBaseLayer(): Map` — 移除基础图层
- `getLayers(filter?): Layer[]` — 获取图层列表
- `getLayer(id): Layer | null` — 按id获取图层
- `addLayer(layers, ...otherLayers): this` — 添加图层
- `removeLayer(layers): this` — 移除图层
- `sortLayers(layers): Map` — 排序图层

### 空间参考与范围

- `getSpatialReference()` / `setSpatialReference(ref): Map` — 获取/设置空间参考
- `getProjection()` — 获取投影
- `getFullExtent(): Extent` — 获取全图范围
- `getMaxExtent(): Extent` / `setMaxExtent(extent): Map` — 获取/设置最大范围

### 坐标换算

- `coordinateToPoint(coordinate, zoom?, out?): Point` — 坐标转2D点
- `pointToCoordinate(point, zoom?, out?): Coordinate` — 2D点转坐标
- `coordinateToContainerPoint(coordinate, zoom?, out?): Point` — 坐标转容器点
- `containerPointToCoordinate(containerPoint, out?): Coordinate` — 容器点转坐标
- `coordinateToViewPoint(coordinate, out?, altitude?): Point` — 坐标转视图点
- `viewPointToCoordinate(viewPoint, out?): Coordinate`
- `getExtent(): Extent` — 当前视图地理范围
- `getContainerExtent(): PointExtent` — 当前容器范围

### 距离与度量

- `distanceToPixel(xDist, yDist, zoom?): Size` — 地理距离转像素
- `pixelToDistance(width, height): number` — 像素转地理距离
- `computeLength(coord1, coord2): number` — 两坐标距离（米）
- `computeGeometryLength(geometry): number` — 几何长度（米）
- `computeGeometryArea(geometry): number` — 几何面积（平米）

### 查询与识别

- `identify(opts, callback): Map` — 在坐标处识别几何
- `identifyAtPoint(point, opts, callback): Map` — 在容器点识别几何
- `getCollisionIndex(): CollisionIndex` — 获取碰撞索引

### 视图历史

- `getViewHistory(): MapViewType[]` — 获取视图历史
- `hasPreviousView(): boolean` / `hasNextView(): boolean` — 是否有上/下一个视图
- `zoomToPreviousView(options?): MapViewType` / `zoomToNextView(options?): MapViewType` — 跳转上/下一个视图

### 导出与全屏

- `toDataURL(options?): string | null` — 导出图片
- `isFullScreen(): boolean` — 是否全屏
- `requestFullScreen(dom?): Map` — 请求全屏
- `cancelFullScreen(): Map` — 取消全屏

## 静态方法

- `Map.VERSION` — 版本号
- `Map.fromJSON(container, profile, options?): Map` — 从JSON重建地图
- `Map.addOnLoadHook(fn, ...args): Map` — 增加地图加载完成后的钩子

## 事件

### 视图与交互

| 事件 | 触发时机 |
| --- | --- |
| `movestart` / `moving` / `moveend` | 平移开始/进行中/结束 |
| `zoomstart` / `zooming` / `zoomend` | 缩放开始/进行中/结束 |
| `rotatestart` / `rotate` / `rotateend` | 方位角变化开始/中/结束 |
| `pitchstart` / `pitch` / `pitchend` | 俯仰角变化开始/中/结束 |
| `dragrotatestart` / `dragrotating` / `dragrotateend` | 拖拽旋转开始/中/结束 |
| `fovchange` | 视野角改变 |
| `resize` | 容器尺寸变化 |
| `viewchange` | 视图变更 |

### 图层

| 事件 | 触发时机 |
| --- | --- |
| `addlayer` | 添加图层 |
| `removelayer` | 移除图层 |
| `setbaselayer` | 设置基础图层 |
| `baselayerchangestart` / `baselayerload` / `baselayerchangeend` | 基础图层变更开始/加载/结束 |

### 动画

| 事件 | 触发时机 |
| --- | --- |
| `animatestart` / `animating` / `animateend` | 动画开始/进行中/结束 |
| `animateinterrupted` | 动画被打断 |

### 生命周期

| 事件 | 触发时机 |
| --- | --- |
| `removestart` / `removeend` | 地图移除开始/结束 |
| `fullscreenstart` / `fullscreenend` / `cancelfullscreen` | 全屏进入/完成/取消 |

```js
map.on("zoomend", (e) => {
  console.log("zoom:", map.getZoom(), "center:", map.getCenter());
});
```
