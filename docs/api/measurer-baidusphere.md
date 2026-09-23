---
title: measurer.BaiduSphere
---

# measurer.BaiduSphere

measurer.BaiduSphere 是百度地图所使用的球面测量器，混入 `measurer.Common`，方法与 `WGS84Sphere` 一致，仅球面半径不同（`6370996.81`）。它是一个对象 mixin，没有独立的构造函数。

```js
import { measurer } from "maptalks";

const m = measurer.Measurer.getInstance("BAIDU");
m.measureLenBetween([116.404, 39.915], [121.47, 31.23]);
```

## 属性 / 静态方法

- `measure: string` — 测量器代码，`'BAIDU'`。
- `sphere: Sphere` — 底层球体测量器，半径 `6370996.81`。

## 方法

- `measureLenBetween(c1, c2): number` — 球面大圆距离（米）。
- `measureArea(coords): number` — 球面几何的闭合面积。
- `locate(c, xDist, yDist, out?): Coordinate` — 从源坐标按 x 轴 / y 轴距离定位得到新坐标。
- `rotate(c, pivot, angle): Coordinate` — 绕枢轴旋转给定角度的坐标。
- 继承自 `measurer.Common` 的 `measureLength`。
