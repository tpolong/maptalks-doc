---
title: MultiLineString
---

# MultiLineString

MultiLineString 是多线字符串几何类，继承自 MultiPath。它表示多条折线的集合，常用于道路、河流或轨迹数据的批量展示，可传入坐标数组或 LineString 数组进行构造。

```js
import { MultiLineString } from "maptalks";

const lines = new MultiLineString([
  [[100, 0], [101, 1], [102, 2]],
  [[103, 3], [104, 4]]
]);
// 或传 LineString[]：
const lineGeoms = [new LineString([[100, 0], [101, 1]])];
const lines2 = new MultiLineString(lineGeoms);

layer.addGeometry(lines);
```

## 构造函数

```js
new MultiLineString(data, options?)
```

参数：

* `data` — 坐标数组（线坐标数组的数组）或 `LineString[]`。
* `options` — （可选）几何配置项，见 Path / Geometry 的 options。

## options 配置项

MultiLineString 无特有 options，继承自 Path。

## 成员方法

无特有方法，继承自 MultiPath。

<!-- api-gen:start -->
### MultiLineString 的其他公开方法

<!--@include: ./includes/api/multi-line-string-missing.md-->

### 继承自 MultiPath 的方法

下列方法由父类 MultiPath 提供，本类的实例同样可以调用。

<!--@include: ./includes/api/multi-path-methods.md-->

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

- `MultiLineString.fromJSON(json): MultiLineString` — 从 JSON 对象创建 MultiLineString 实例。

<!-- api-gen:start -->
### MultiLineString 的其他静态方法

<!--@include: ./includes/api/multi-line-string-statics-missing.md-->

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
