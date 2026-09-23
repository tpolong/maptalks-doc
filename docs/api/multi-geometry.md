---
title: MultiGeometry
---

# MultiGeometry

MultiGeometry 是多重几何的抽象基类，继承自 [GeometryCollection](/api/geometry-collection)。它是 MultiPoint、MultiLineString、MultiPolygon 的抽象父类，用于承载包含多个子几何对象的几何集合，并提供统一的坐标读写接口。通常不直接实例化。

```js
import { MultiGeometry } from "maptalks";

// MultiGeometry 为抽象基类，通常不直接实例化，
// 而是通过其子类 MultiPoint / MultiLineString / MultiPolygon 使用。
const multi = new MultiGeometry("MultiPoint", "Point", [[100, 0], [101, 1]]);
```

## 构造函数

```js
new MultiGeometry(geoType, type, data, options?)
```

参数：

* `geoType` — 几何类型名（如 `"MultiPoint"`）。
* `type` — 子几何类型名（如 `"Point"`）。
* `data` — 子几何数据数组。
* `options` — （可选）几何配置项，见 Geometry 的 options。

## options 配置项

MultiGeometry 无特有 options，继承自 [GeometryCollection](/api/geometry-collection)。

## 成员方法

- `getCoordinates(): object` — 返回所有子几何的坐标（GeoJSON 风格结构）。
- `setCoordinates(coords): this` — 设置所有子几何的坐标。

<!-- api-gen:start -->
### MultiGeometry 的其他公开方法

<!--@include: ./includes/api/multi-geometry-missing.md-->

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

- `MultiGeometry.fromJSON(json): MultiGeometry` — 从 JSON 对象创建 MultiGeometry 实例。

<!-- api-gen:start -->
### MultiGeometry 的其他静态方法

<!--@include: ./includes/api/multi-geometry-statics-missing.md-->

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
