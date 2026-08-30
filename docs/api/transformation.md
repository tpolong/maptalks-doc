---
title: Transformation
---

# Transformation

Transformation 是投影坐标与基础二维点系统（2D 点）之间的转换类，用于将地图（通常是地理）坐标映射到屏幕上的二维点。它没有继承任何基类，通过一个 4 个数字的矩阵 `[a, b, c, d]` 定义仿射映射方式。

```js
import { Transformation } from "maptalks";
// 用法示例
const t = new Transformation([1, -1, -20037508.34, 20037508.34]);
const point = t.transform(coordinate, 1, pointOut);
```

## 构造函数

```js
new Transformation(matrix)
```

参数：

* `matrix` — `[a, b, c, d]` 四元数组，其中 `a` 为 X 轴的方向系数（`1` 表示右边更大，`-1` 表示左边更大）；`b` 为 Y 轴方向系数（`1` 表示下方更大，`-1` 表示上方更大）；`c`、`d` 分别为投影坐标系原点的 x、y。

## 成员方法

- `transform(coordinate, scale, out?): Point` — 将投影坐标转换为二维点；`scale` 用于在不同缩放级别下缩放结果 2D 点。
- `untransform(point, scale, out?): Coordinate` — 将二维点转换回投影坐标；`scale` 用于在不同缩放级别下缩放结果。

## 静态方法

Transformation 没有静态方法。

## 事件

Transformation 没有事件。
