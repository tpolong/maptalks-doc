---
title: projection.EPSG4326
---

# projection.EPSG4326

projection.EPSG4326 是等距矩形（Equirectangular）投影对象，混入 `projection.Common` 与 `measurer.WGS84Sphere`。它是 GIS 中常见的坐标系，投影/反投影均为恒等操作，直接把经纬度作为平面坐标输出。它是一个对象 mixin，没有独立的构造函数。

```js
import { projection } from "maptalks";

const p = projection.EPSG4326.project([116.39, 39.9]);
console.log(p.x, p.y); // 116.39, 39.9
```

## 属性 / 静态方法

- `code: string` — 投影代码，`'EPSG:4326'`。
- `aliases: string[]` — 别名列表，`['EPSG:4490']`。

## 方法

- `project(p, out?): Coordinate` — 恒等投影，复制 x/y/z。
- `unproject(p, out?): Coordinate` — 恒等反投影，复制 x/y/z。
- 继承自 `projection.Common` 的投影/批量/球面方法。
