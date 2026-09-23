---
title: ArcConnectorLine
---

# ArcConnectorLine

ArcConnectorLine 是圆弧连接线几何类，继承自 Connectable([ArcCurve](/api/arc-curve))。它以圆弧曲线的形式连接两个对象，源与目标可以是几何对象、控件或 UI 组件，常用于弯曲的引线、流向关系等可视化场景。

```js
import { ArcConnectorLine } from "maptalks";

const source = map.addMarker([100, 0]);
const target = map.addMarker([101, 1]);
const connector = new ArcConnectorLine(source, target);
layer.addGeometry(connector);
```

## 构造函数

```js
new ArcConnectorLine(src, target, options?)
```

参数：

* `src` — 连接源，可为几何对象、控件或 UI 组件。
* `target` — 连接目标，可为几何对象、控件或 UI 组件。
* `options` — （可选）几何配置项，见 ArcCurve / Curve 的 options。

## options 配置项

| 配置名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| `showOn` | `String` | 显示条件，可为 `'always'`、`'moving'`、`'click'`、`'mouseover'`。 | `'always'` |
| `arcDegree` | `Number` | 圆弧的张开角度。 | `90` |

## 成员方法

- `getConnectSource()` — 获取连接源。
- `setConnectSource(src): this` — 设置连接源。
- `getConnectTarget()` — 获取连接目标。
- `setConnectTarget(target): this` — 设置连接目标。

<!-- api-gen:start -->
### ArcConnectorLine 的其他公开方法

<!--@include: ./includes/api/arc-connector-line-missing.md-->

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

无特有静态方法。

<!-- api-gen:start -->
### ArcConnectorLine 的其他静态方法

<!--@include: ./includes/api/arc-connector-line-statics-missing.md-->

### 继承自 ArcCurve 的静态方法

下列方法由父类 [ArcCurve](/api/arc-curve) 提供，本类的实例同样可以调用。

<!--@include: ./includes/api/arc-curve-statics.md-->

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
