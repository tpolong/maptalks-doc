---
title: QuadBezierCurve
---

# QuadBezierCurve

QuadBezierCurve 是二次贝塞尔曲线几何类，继承自 [Curve](/api/curve)。它表示由点序列定义的二次贝塞尔曲线的折线近似，常用于生成带弧度的平滑路径。

```js
import { QuadBezierCurve } from "maptalks";

const curve = new QuadBezierCurve([[100, 0], [101, 1], [102, 2]]);
layer.addGeometry(curve);
```

## 构造函数

```js
new QuadBezierCurve(coordinates, options?)
```

参数：

* `coordinates` — 坐标数组，定义二次贝塞尔曲线的点序列。
* `options` — （可选）几何配置项，见 Curve / LineString 的 options。

## options 配置项

QuadBezierCurve 无特有 options，继承自 Curve。

## 成员方法

无特有方法，继承自 Curve。

<!-- api-gen:start -->
### 继承自 LineString 的方法

下列方法由父类 [LineString](/api/line-string) 提供，本类的实例同样可以调用。

<!--@include: ./includes/api/line-string-methods.md-->

### 继承自 Path 的方法

下列方法由父类 [Path](/api/path) 提供，本类的实例同样可以调用。

<!--@include: ./includes/api/path-methods.md-->

### 继承自 Geometry 的方法

下列方法由父类 [Geometry](/api/geometry) 提供，本类的实例同样可以调用。

<!--@include: ./includes/api/geometry-methods.md-->

### 混入的方法

本类通过混入获得以下能力的方法，详见对应页面：[JSONAble](/api/json-able)（`getJSONType`…）；[Eventable](/api/eventable)（`on`、`addEventListener`、`once`、`off`、`removeEventListener`、`listens`、`getListeningEvents`、`copyEventListeners`…）；[Handlerable](/api/handlerable)；[Menuable](/api/menuable)。
<!-- api-gen:end -->

## 静态方法

- `QuadBezierCurve.fromJSON(json): QuadBezierCurve` — 从 JSON 对象创建 QuadBezierCurve 实例。

## 事件

无特有事件。

<!-- api-gen:start -->
### 继承自 LineString 的事件

<!--@include: ./includes/api/line-string-events.md-->

### 继承自 Geometry 的事件

<!--@include: ./includes/api/geometry-events.md-->
<!-- api-gen:end -->
