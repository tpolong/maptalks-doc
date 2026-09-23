---
title: ArcCurve
---

# ArcCurve

ArcCurve 是圆弧曲线几何类，继承自 [Curve](/api/curve)。它表示一段由圆弧或折线近似生成的曲线，常用于绘制弧线连接、流向等可视化场景。

```js
import { ArcCurve } from "maptalks";

const arc = new ArcCurve([[100, 0], [101, 1]]);
layer.addGeometry(arc);
```

## 构造函数

```js
new ArcCurve(coordinates, options?)
```

参数：

* `coordinates` — 坐标数组，定义圆弧的两个端点。
* `options` — （可选）几何配置项，见 Curve / LineString 的 options。

## options 配置项

| 配置名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| `arcDegree` | `Number` | 圆弧的张开角度。 | `90` |

## 成员方法

无特有方法，继承自 Curve。

<!-- api-gen:start -->
### ArcCurve 的其他公开方法

<!--@include: ./includes/api/arc-curve-missing.md-->

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

- `ArcCurve.fromJSON(json): ArcCurve` — 从 JSON 对象创建 ArcCurve 实例。

<!-- api-gen:start -->
### ArcCurve 的其他静态方法

<!--@include: ./includes/api/arc-curve-statics-missing.md-->

### 继承自 Geometry 的静态方法

下列方法由父类 [Geometry](/api/geometry) 提供，本类的实例同样可以调用。

<!--@include: ./includes/api/geometry-statics.md-->
<!-- api-gen:end -->

## 事件

无特有事件。

<!-- api-gen:start -->
### 继承自 LineString 的事件

<!--@include: ./includes/api/line-string-events.md-->

### 继承自 Geometry 的事件

<!--@include: ./includes/api/geometry-events.md-->
<!-- api-gen:end -->
