---
title: Ellipse
---

# Ellipse

Ellipse 是 maptalks 的椭圆几何类，继承自 CenterMixin(Polygon)。它以中心点、宽度和高度定义，用于表示圆形或椭圆形的面状要素。

```js
import { Ellipse } from "maptalks";
// 用法示例
const ellipse = new Ellipse([0, 0], 1000, 600);
```

## 构造函数

```js
new Ellipse(center, width, height, options?)
```

参数：

* `center` — 椭圆的中心点坐标，如 `[x, y]`。
* `width` — 椭圆的宽度。
* `height` — 椭圆的高度。
* `options` — （可选）配置项，见下表。

## options 配置项

| 配置名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| numberOfShellPoints | `number` | 生成椭圆外环的采样点数 | `81` |

## 成员方法

- `getWidth()` — 获取椭圆的宽度。
- `setWidth(width)` — 设置椭圆的宽度。
- `getHeight()` — 获取椭圆的高度。
- `setHeight(height)` — 设置椭圆的高度。
- `getShell()` — 获取椭圆的外环。
- `getHoles()` — 获取椭圆的内环。
- `animateShow()` — 以动画方式显示椭圆。

<!-- api-gen:start -->
### 继承自 Polygon 的方法

下列方法由父类 [Polygon](/api/polygon) 提供，本类的实例同样可以调用。

<!--@include: ./includes/api/polygon-methods.md-->

### 继承自 Path 的方法

下列方法由父类 [Path](/api/path) 提供，本类的实例同样可以调用。

<!--@include: ./includes/api/path-methods.md-->

### 继承自 Geometry 的方法

下列方法由父类 [Geometry](/api/geometry) 提供，本类的实例同样可以调用。

<!--@include: ./includes/api/geometry-methods.md-->

### 混入的方法

本类通过混入获得以下能力的方法，详见对应页面：[CenterMixin](/api/center-mixin)（`getCoordinates`、`setCoordinates`、`getMap`、`onPositionChanged`…）；[JSONAble](/api/json-able)（`getJSONType`…）；[Eventable](/api/eventable)（`on`、`addEventListener`、`once`、`off`、`removeEventListener`、`listens`、`getListeningEvents`、`copyEventListeners`…）；[Handlerable](/api/handlerable)；[Menuable](/api/menuable)。
<!-- api-gen:end -->

## 静态方法

- `fromJSON(json)` — 从 JSON 对象创建 Ellipse。

## 事件

- `shapechange` — 当椭圆的形状发生变化时触发。

<!-- api-gen:start -->
### 继承自 Polygon 的事件

<!--@include: ./includes/api/polygon-events.md-->

### 继承自 Geometry 的事件

<!--@include: ./includes/api/geometry-events.md-->
<!-- api-gen:end -->
