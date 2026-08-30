---
title: projection.EPSG9807
---

# projection.EPSG9807

projection.EPSG9807 是横轴墨卡托（Transverse Mercator）投影对象，源码位于 `Projection.EPSG9807.ts`，投影代码为 `'EPSG:9807'`，别名 `'Traverse_Mercator'`。它混入 `projection.Common` 与 `measurer.WGS84Sphere`，通过 `create` 工厂函数生成带参数的投影实例。它是对象 mixin，没有独立构造函数；运行时通过 `projection.EPSG9807` 访问。

```js
import { projection } from "maptalks";

const proj = projection.EPSG9807.create({
  centralMeridian: 114,
  scaleFactor: 1,
  falseEasting: 500000
});
```

## 属性 / 静态方法

- `code: string` — 投影代码，`'EPSG:9807'`。
- `aliases: string[]` — 别名列表，`['Traverse_Mercator']`。
- `centralMeridian: number` — 中央经线，默认 `0`。
- `create(params): projection` — 静态工厂，按参数创建一个横轴墨卡托投影实例，参数包括：
  - `falseEasting` — 假东移，默认 `500000`。
  - `falseNorthing` — 假北移，默认 `0`。
  - `scaleFactor` — 比例因子，默认 `0.9996`。
  - `centralMeridian` — 中央经线（度）。
  - `latitudeOfOrigin` — 原点纬度（度）。
  - `startLongtitude` / `startLatitude` — 起始经度 / 起始纬度。

## 方法

- `project(p, out?): Coordinate` — 将经纬度投影为横轴墨卡托坐标（米）。
- `unproject(p, out?): Coordinate` — 将横轴墨卡托坐标反投影为经纬度。
- 继承自 `projection.Common` 的投影/批量/球面方法。
