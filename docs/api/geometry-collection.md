---
title: GeometryCollection
---

# GeometryCollection

GeometryCollection 是几何集合类，继承自 Geometry。它提供将多个几何对象作为整体进行管理的能力，包括批量增删、遍历、过滤、平移、显隐与编辑等操作。典型用法是将若干几何组合为一个集合统一添加到图层并统一控制。

```js
import { GeometryCollection } from "maptalks";

const collection = new GeometryCollection([
  new Marker([100, 0]),
  new LineString([[100, 0], [101, 1]]),
  new Polygon([[[100, 0], [101, 0], [101, 1], [100, 0]]])
]);

layer.addGeometry(collection);
```

## 构造函数

```js
new GeometryCollection(geometries?, options?)
```

参数：

* `geometries` — （可选）几何对象数组，作为集合的初始子几何。
* `options` — （可选）几何配置项，见 Geometry 的 options。

## options 配置项

GeometryCollection 无特有 options，继承自 Geometry。

## 成员方法

- `setGeometries(geos): this` — 设置集合中的几何对象数组。
- `getGeometries(): Geometry[]` — 获取集合中的几何对象数组。
- `forEach(fn, ctx): this` — 遍历每个子几何，`fn(geometry, index)`，`ctx` 为回调上下文。
- `filter(fn): Geometry[]` — 过滤子几何，返回满足条件的几何数组。
- `translate(offset): this` — 将所有子几何平移指定的坐标偏移。
- `isEmpty(): boolean` — 判断集合是否为空。
- `remove(): this` — 从图层中移除集合及其子几何。
- `show(): this` — 显示集合。
- `hide(): this` — 隐藏集合。
- `getSymbol(): object` — 获取集合的 symbol。
- `setSymbol(s): this` — 设置集合的 symbol。
- `startEdit` / `endEdit` / `isEditing` — 开始编辑 / 结束编辑 / 判断是否正在编辑。
- `undoEdit` / `redoEdit` — 撤销 / 重做编辑。

<!-- api-gen:start -->
### GeometryCollection 的其他公开方法

<!--@include: ./includes/api/geometry-collection-missing.md-->

### 继承自 Geometry 的方法

下列方法由父类 [Geometry](/api/geometry) 提供，本类的实例同样可以调用。

<!--@include: ./includes/api/geometry-methods.md-->

### 混入的方法

本类通过混入获得以下能力的方法，详见对应页面：[JSONAble](/api/json-able)（`getJSONType`…）；[Eventable](/api/eventable)（`on`、`addEventListener`、`once`、`off`、`removeEventListener`、`listens`、`getListeningEvents`、`copyEventListeners`…）；[Handlerable](/api/handlerable)；[Menuable](/api/menuable)。
<!-- api-gen:end -->

## 静态方法

- `GeometryCollection.fromJSON(json): GeometryCollection` — 从 JSON 对象创建 GeometryCollection 实例。

<!-- api-gen:start -->
### GeometryCollection 的其他静态方法

<!--@include: ./includes/api/geometry-collection-statics-missing.md-->

### 继承自 Geometry 的静态方法

下列方法由父类 [Geometry](/api/geometry) 提供，本类的实例同样可以调用。

<!--@include: ./includes/api/geometry-statics.md-->
<!-- api-gen:end -->

## 事件

- `shapechange` — 几何形状发生改变。
- `removestart` / `remove` / `removeend` — 移除过程开始、进行、结束。
- `show` / `hide` — 显示 / 隐藏。
- `editstart` / `editend` — 开始 / 结束编辑。

<!-- api-gen:start -->
### 继承自 Geometry 的事件

<!--@include: ./includes/api/geometry-events.md-->
<!-- api-gen:end -->
