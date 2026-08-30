---
title: MultiPolygon
---

# MultiPolygon

MultiPolygon 是多多边形几何类，继承自 MultiPath。它表示多个多边形面的集合，常用于行政区、地块或任意多边形数据的批量展示，可传入多边形坐标数组或 Polygon 数组进行构造。

```js
import { MultiPolygon } from "maptalks";

const polygons = new MultiPolygon([
  [[[100, 0], [101, 0], [101, 1], [100, 0]]],
  [[[102, 2], [103, 2], [103, 3], [102, 2]]]
]);
// 或传 Polygon[]：
const polyGeoms = [new Polygon([[[100, 0], [101, 0], [101, 1], [100, 0]]])];
const polygons2 = new MultiPolygon(polyGeoms);

layer.addGeometry(polygons);
```

## 构造函数

```js
new MultiPolygon(data, options?)
```

参数：

* `data` — 多边形坐标数组（每个多边形为坐标环的数组）或 `Polygon[]`。
* `options` — （可选）几何配置项，见 Path / Geometry 的 options。

## options 配置项

MultiPolygon 无特有 options，继承自 Path。

## 成员方法

无特有方法，继承自 MultiPath。

## 静态方法

- `MultiPolygon.fromJSON(json): MultiPolygon` — 从 JSON 对象创建 MultiPolygon 实例。

## 事件

无特有事件。
