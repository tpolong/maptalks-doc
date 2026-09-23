---
title: measurer.WGS84Sphere
---

# measurer.WGS84Sphere

measurer.WGS84Sphere 是 WGS84 椭球/球面测量器，混入 `measurer.Common`，是 maptalks 的默认测量器（球面半径 `6378137`）。它使用球面大圆距离公式计算长度、使用球面投影公式计算面积，适用于大多数 GIS 坐标系。它是一个对象 mixin，没有独立的构造函数。

```js
import { measurer } from "maptalks";

const m = measurer.Measurer.getInstance(); // 默认 WGS84Sphere
m.measureLenBetween([116.39, 39.9], [121.47, 31.23]); // 球面距离
```

## 属性 / 静态方法

- `measure: string` — 测量器代码，`'EPSG:4326'`。
- `sphere: Sphere` — 底层球体测量器，半径 `6378137`。

## 方法

- `measureLenBetween(c1, c2): number` — 球面大圆距离（米）。
- `measureArea(coords): number` — 球面几何的闭合面积。
- `locate(c, xDist, yDist, out?): Coordinate` — 从源坐标按 x 轴 / y 轴距离定位得到新坐标。
- `rotate(c, pivot, angle): Coordinate` — 绕枢轴旋转给定角度的坐标。
- 继承自 `measurer.Common` 的 `measureLength`。
