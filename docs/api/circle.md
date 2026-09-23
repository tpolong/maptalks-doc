---
title: Circle
---

# Circle

Circle 是 maptalks 的圆形几何类，继承自 CenterMixin(Polygon)。它由中心点和半径定义，用于表示圆形的面状要素。

```js
import { Circle } from "maptalks";
// 用法示例
const marker = new Circle([0, 0], 1000);
```

## 构造函数

```js
new Circle(center, radius, options?)
```

参数：

* `center` — 圆的中心点坐标，如 `[x, y]`。
* `radius` — 圆的半径。
* `options` — （可选）配置项，见下表。

## options 配置项

| 配置名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| numberOfShellPoints | `number` | 生成圆形外环的采样点数 | `60` |

## 成员方法

- `getRadius()` — 获取圆的半径。
- `setRadius(radius)` — 设置圆的半径。
- `getShell()` — 获取圆的外环。
- `getHoles()` — 获取圆的内环。
- `animateShow()` — 以动画方式显示圆。

<!-- api-gen:start -->
### Circle 的其他公开方法

<!--@include: ./includes/api/circle-missing.md-->

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

- `fromJSON(json)` — 从 JSON 对象创建 Circle。

<!-- api-gen:start -->
### 继承自 Geometry 的静态方法

下列方法由父类 [Geometry](/api/geometry) 提供，本类的实例同样可以调用。

<!--@include: ./includes/api/geometry-statics.md-->
<!-- api-gen:end -->

## 事件

- `shapechange` — 当圆的形状发生变化时触发。

<!-- api-gen:start -->
### 继承自 Polygon 的事件

<!--@include: ./includes/api/polygon-events.md-->

### 继承自 Geometry 的事件

<!--@include: ./includes/api/geometry-events.md-->
<!-- api-gen:end -->
