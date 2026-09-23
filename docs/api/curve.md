---
title: Curve
---

# Curve

Curve 是曲线几何的抽象基类，继承自 LineString。它是 ArcCurve、CubicBezierCurve、QuadBezierCurve 的抽象父类，用于实现曲线类几何。通常不直接实例化，而是通过其子类使用，并提供曲线绘制相关的内部方法。

```js
import { Curve } from "maptalks";

// Curve 为抽象基类，通常不直接实例化，
// 而是通过其子类 ArcCurve / CubicBezierCurve / QuadBezierCurve 使用。
const arc = new ArcCurve([[100, 0], [101, 1]]);
```

## 构造函数

Curve 为抽象基类，构造函数由其子类调用。

## options 配置项

| 配置名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| `enableSimplify` | `Boolean` | 是否启用简化。 | `false` |
| `enableClip` | `Boolean` | 是否启用裁剪。 | `false` |

## 成员方法

Curve 无公开的特有方法，其子类通过绘制内部方法（`_arc`、`_quadraticCurve`、`_bezierCurve`）实现曲线绘制逻辑。

<!-- api-gen:start -->
### Curve 的其他公开方法

<!--@include: ./includes/api/curve-missing.md-->

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
### Curve 的其他静态方法

<!--@include: ./includes/api/curve-statics-missing.md-->

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
