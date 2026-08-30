---
title: projection.EPSG3857
---

# projection.EPSG3857

projection.EPSG3857 是 Web 墨卡托（Web Mercator）投影对象，混入 `projection.Common` 与 `measurer.WGS84Sphere`。它把经纬度坐标转换为以米为单位的墨卡托平面坐标，是 maptalks 地图的默认投影（Google 地图 / OSM 所使用）。它是一个对象 mixin，没有独立的构造函数。

```js
import { projection } from "maptalks";

const p = projection.EPSG3857.project([116.39, 39.9]);
console.log(p.x, p.y); // 米制投影坐标
```

## 属性 / 静态方法

- `code: string` — 投影代码，`'EPSG:3857'`。
- `maxLatitude: number` — 最大有效纬度，`85.0511287798`。
- `metersPerDegree` — 每度对应的米数，`6378137 * Math.PI / 180`。
- `rad: number` — 弧度转换系数，`Math.PI / 180`。

## 方法

- `project(lnglat, out?): Coordinate` — Web 墨卡托投影，将经纬度转换为米制投影坐标。
- `unproject(p, out?): Coordinate` — Web 墨卡托反投影，将米制投影坐标转回经纬度。
- 继承自 `projection.Common` 的 `projectCoords` / `unprojectCoords` / `isSphere` / `isOutSphere` / `wrapCoord` / `getCircum` / `getSphereExtent` 等方法。
