---
title: VectorLayer
---

# VectorLayer

VectorLayer是用于管理和渲染几何（Marker、LineString、Polygon、MultiPolygon 等）的矢量图层基类，继承自 [OverlayLayer](/api/overlay-layer)（[Layer](/api/layer) 的子类）。它提供几何的增删查、样式设置、识别、过滤器等能力。

```js
import { Map, VectorLayer, Marker } from "maptalks";

const map = new Map("map", { center: [0, 0], zoom: 3 });
const layer = new VectorLayer("vector");
layer.addGeometry(new Marker([0, 0]));
layer.addTo(map);
```

## 构造函数

```js
new VectorLayer(id, geometries?, options?)
```

参数：

* **id** `String` 图层id（必填）。
* **geometries** `Geometry[] | Object` 待添加的几何数组；若为普通配置对象则识别为 options。
* **options** `Object` 构造选项，`options.style` 可指定图层样式。

## options 配置项

| 配置名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| `debug` | Boolean | 几何是否处于调试模式 | `false` |
| `enableSimplify` | Boolean | 渲染前是否简化几何 | `true` |
| `geometryEvents` | Boolean | 是否触发几何事件 | `true` |
| `defaultIconSize` | `[number, number]` | Marker默认图标尺寸 | `[20,20]` |
| `enableAltitude` | Boolean | 是否按高程渲染几何 | `true` |
| `altitudeProperty` | String | 几何的高程属性名 | `'altitude'` |
| `drawAltitude` | Boolean | 是否绘制高程线 | `false` |
| `altitude` | Number | 图层高程 | `0` |
| `sortByDistanceToCamera` | Boolean | Marker是否按相机距离排序 | `false` |
| `roundPoint` | Boolean | 绘制前对点取整 | `false` |
| `collision` | Boolean | 是否启用碰撞检测 | `false` |
| `collisionScope` | String | 碰撞范围（layer/map） | `'layer'` |
| `cursor` | String | 图层光标样式 | — |

继承自 [Layer](/api/layer) 的通用配置项同样适用。

## 成员方法

### 几何管理

- `addGeometry(geometries, fitView?): this` — 添加一个或多个几何；`fitView=true` 自动适配视野
- `removeGeometry(geometries): this` — 移除一个或多个几何
- `getGeometryById(id): Geometry` — 按id获取单个几何
- `getGeometries(filter?): Geometry[]` — 获取全部或过滤后的几何
- `getFirstGeometry(): Geometry` / `getLastGeometry(): Geometry` — 获取底部/顶部几何
- `getCount(): number` — 几何数量
- `getExtent(): Extent` — 所有几何合并范围
- `forEach(fn, context?): this` — 对每个几何执行回调
- `filter(fn, context?): Geometry[]` — 返回通过测试的几何
- `isEmpty(): boolean` — 图层是否为空
- `clear(): this` — 清除所有几何

### 样式

- `getStyle(): any` / `setStyle(style): this` — 获取/设置图层样式（基于 mapbox 风格filter）
- `removeStyle(): this` — 移除图层样式

### 识别与高程

- `identify(coordinate, options?): Geometry[]` — 在坐标处识别几何
- `identifyAtPoint(point, options?)` — 在容器点识别几何
- `getAltitude()` — 获取图层高程

### 继承自 Layer

`addTo`、`remove`、`show`/`hide`、`setOpacity`、`setZIndex`、`bringToFront`/`bringToBack`、`getMap`、`toJSON` 等，见 [Layer](/api/layer)。

## 静态方法

- `VectorLayer.fromJSON(json): VectorLayer | null` — 从JSON还原图层

## 事件

| 事件 | 触发时机 |
| --- | --- |
| `addgeo` | 添加几何后 |
| `clear` | 清空图层后 |
| `setstyle` | 设置样式后 |
| `removestyle` | 移除样式后 |

图层通用事件见 [Layer](/api/layer)。

```js
layer.on("addgeo", (e) => {
  console.log("added", e.geometries.length, "geometries");
});
```
