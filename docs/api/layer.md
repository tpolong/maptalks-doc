---
title: Layer
---

# Layer

Layer是maptalks中所有图层的基类，定义了图层的公共能力：添加/移除地图、层级管理（zIndex）、透明度、可见性、缩放范围、遮罩（mask）、碰撞检测、识别、事件等。它本身是抽象类（`@abstract`），不直接实例化。

图层的继承关系：`TileLayer`、`VectorLayer`、`OverlayLayer`、`ImageLayer`、`CanvasLayer` 都继承自 `Layer`。其中 `TileLayer` 渲染瓦片，`OverlayLayer` 可增删几何，`VectorLayer` 是其子类。

Layer的继承链为 `Layer → JSONAble(Eventable(Renderable(Class)))`，因此具备事件（`on/off/fire`）、JSON序列化、渲染能力。

```js
import { TileLayer } from "maptalks";

const layer = new TileLayer("base", {
  urlTemplate: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
  subdomains: ["a", "b", "c", "d"],
}).addTo(map);
```

## 构造函数

```js
new Layer(id, options)
```

参数：

* **id** `String` 图层唯一标识（必填）。
* **options** `Object` 图层配置项（可选）。

## options 配置项

| 配置名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| `attribution` | String | 图层版权信息 | `null` |
| `minZoom` | Number | 图层显示的最小缩放级别 | `null` |
| `maxZoom` | Number | 图层显示的最大缩放级别 | `null` |
| `visible` | Boolean | 是否显示图层 | `true` |
| `opacity` | Number | 图层透明度（0~1） | `1` |
| `zIndex` | Number | 图层z序 | `undefined` |
| `hitDetect` | Boolean | 是否开启命中检测（影响光标样式） | `!mobile` |
| `renderer` | String | 渲染器类型（canvas/gl/gpu/dom） | `'canvas'` |
| `globalCompositeOperation` | String | canvas 2d 混合模式 | `null` |
| `cssFilter` | String | 应用于 canvas 的 CSS filter | `null` |
| `forceRenderOnMoving` | Boolean | 地图移动时强制重绘 | `false` |
| `forceRenderOnZooming` | Boolean | 地图缩放时强制重绘 | `false` |
| `forceRenderOnRotating` | Boolean | 地图旋转时强制重绘 | `false` |
| `collision` | Boolean | 是否开启碰撞检测 | `false` |
| `collisionScope` | String | 碰撞作用域（layer/map） | `'layer'` |
| `maskClip` | Boolean | 是否用遮罩裁剪图层 | `true` |
| `mask` | Geometry\|Object | 图层遮罩 | `null` |
| `canvas` | HTMLCanvasElement | 指定图层画布 | — |

## 成员方法

### 标识

- `getId(): string` / `setId(id): this` — 获取/设置图层id

### 添加与移除

- `addTo(map): this` — 将图层添加到地图
- `remove(): this` — 从地图移除图层

### 层级

- `getZIndex(): number` / `setZIndex(zIndex): this` — 获取/设置层级
- `bringToFront(): this` — 置顶
- `bringToBack(): this` — 置底

### 显示与透明度

- `show(): this` / `hide(): this` — 显示/隐藏图层
- `isVisible(): boolean` — 是否可见
- `getOpacity(): number` / `setOpacity(opacity): this` — 获取/设置透明度

### 缩放范围

- `getMinZoom(): number` / `getMaxZoom(): number` — 获取最小/最大缩放级别

### 加载

- `load(): this` — 加载图层
- `isLoaded(): boolean` — 是否已加载

### 渲染

- `getRenderer()` — 获取渲染器
- `isCanvasRender(): boolean` — 是否Canvas渲染

### 地图相关

- `getMap(): Map` — 获取图层所在的地图
- `getProjection()` — 获取所在投影

### 遮罩

- `getMask(): Geometry` / `setMask(mask): this` / `removeMask(): this` — 获取/设置/移除遮罩

### 识别

- `identify(coordinate, options)` — 在坐标处识别要素（由子类实现）
- `identifyAtPoint(containerPoint, options)` — 在容器点识别要素

### 碰撞

- `getCollisionIndex(): CollisionIndex` — 获取碰撞索引
- `clearCollisionIndex(): this` — 清除碰撞索引

### 序列化

- `toJSON(options?): Object` — 导出图层JSON

## 静态方法

- `Layer.fromJSON(layerJSON): Layer | null` — 从JSON还原图层
- `Layer.mergeOptions(options): this` — 合并默认配置

## 事件

| 事件 | 触发时机 |
| --- | --- |
| `idchange` | 图层id改变 |
| `setzindex` | 设置z序 |
| `setopacity` | 设置透明度 |
| `show` / `hide` | 显示/隐藏 |
| `visiblechange` | 可见性改变 |
| `add` / `remove` | 加入/移除地图 |
| `renderercreate` | 渲染器创建完成 |
| `layerload` | 图层加载完成 |

```js
layer.on("layerload", () => {
  console.log("layer loaded");
});
```
