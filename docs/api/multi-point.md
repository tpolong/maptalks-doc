---
title: MultiPoint
---

# MultiPoint

MultiPoint 是多点几何类，继承自 [MultiGeometry](/api/multi-geometry)。它表示一组相互独立的点的集合，常用于点状设施、POI 或离散点数据的展示，可传入坐标数组或 Marker 数组进行构造。

```js
import { MultiPoint } from "maptalks";

const points = new MultiPoint([[100, 0], [101, 1], [102, 2]]);
// 或传 Marker[]：
const markers = [map.addMarker([100, 0]), map.addMarker([101, 1])];
const points2 = new MultiPoint(markers);

layer.addGeometry(points);
```

## 构造函数

```js
new MultiPoint(data, options?)
```

参数：

* `data` — 坐标数组（如 `Coordinate[]`）或 `Marker[]`，表示要创建的多点数据。
* `options` — （可选）几何配置项，见 Geometry 的 options。

## options 配置项

MultiPoint 无特有 options，继承自 Geometry。

## 成员方法

- `findClosest(coordinate): Coordinate` — 查找距离给定 `coordinate` 最近的点坐标。

<!-- api-gen:start -->
### MultiPoint 的其他公开方法

<!--@include: ./includes/api/multi-point-missing.md-->

### 继承自 MultiGeometry 的方法

下列方法由父类 [MultiGeometry](/api/multi-geometry) 提供，本类的实例同样可以调用。

<!--@include: ./includes/api/multi-geometry-methods.md-->

### 继承自 GeometryCollection 的方法

下列方法由父类 [GeometryCollection](/api/geometry-collection) 提供，本类的实例同样可以调用。

<!--@include: ./includes/api/geometry-collection-methods.md-->

### 继承自 Geometry 的方法

下列方法由父类 [Geometry](/api/geometry) 提供，本类的实例同样可以调用。

<!--@include: ./includes/api/geometry-methods.md-->

### 混入的方法

本类通过混入获得以下能力的方法，详见对应页面：[JSONAble](/api/json-able)（`getJSONType`…）；[Eventable](/api/eventable)（`on`、`addEventListener`、`once`、`off`、`removeEventListener`、`listens`、`getListeningEvents`、`copyEventListeners`…）；[Handlerable](/api/handlerable)；[Menuable](/api/menuable)。
<!-- api-gen:end -->

## 静态方法

- `MultiPoint.fromJSON(json): MultiPoint` — 从 JSON 对象创建 MultiPoint 实例。

<!-- api-gen:start -->
### MultiPoint 的其他静态方法

<!--@include: ./includes/api/multi-point-statics-missing.md-->

### 继承自 Geometry 的静态方法

下列方法由父类 [Geometry](/api/geometry) 提供，本类的实例同样可以调用。

<!--@include: ./includes/api/geometry-statics.md-->
<!-- api-gen:end -->

## 事件

无特有事件。

<!-- api-gen:start -->
### 继承自 GeometryCollection 的事件

<!--@include: ./includes/api/geometry-collection-events.md-->

### 继承自 Geometry 的事件

<!--@include: ./includes/api/geometry-events.md-->
<!-- api-gen:end -->
