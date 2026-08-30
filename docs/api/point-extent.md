---
title: PointExtent
---

# PointExtent

PointExtent 是 Extent 的点版本，继承自 [Extent](/api/extent)。它与 Extent 的构造方式完全相同，区别在于其 `getMin()`、`getMax()`、`getCenter()` 等方法返回的是 `Point` 对象而非 `Coordinate` 对象，因此适用于基于像素/屏幕坐标的区域。

```js
import { PointExtent } from "maptalks";
// 用法示例
const extent = new PointExtent(100, 10, 120, 20);
console.log(extent.getMin()); // Point(100, 10)
```

## 构造函数

```js
new PointExtent(xmin, ymin, xmax, ymax)
new PointExtent(c1, c2)
new PointExtent(json, projection?)
new PointExtent(extent)
```

参数：

* 与 `Extent` 完全一致：四个数字 `xmin`、`ymin`、`xmax`、`ymax`，或两个 `Point` 角点，或一个包含 `xmin`、`ymin`、`xmax`、`ymax` 的对象，或另一个 Extent，以及可选的 `projection`。

## 成员方法

PointExtent 没有特有的成员方法，它完全复用 `Extent` 的全部方法。区别在于：

- `getMin()`、`getMax()`、`getCenter()`、`toArray()` 等返回 `Point` 而不是 `Coordinate`。
- 其余方法（`getWidth`、`getHeight`、`contains`、`intersects`、`within`、`combine`、`expand`、`copy`、`toJSON`、`toBBOX` 等）行为与 `Extent` 一致，见 [Extent](/api/extent)。

## 静态方法

PointExtent 没有静态方法。

## 事件

PointExtent 没有事件。
