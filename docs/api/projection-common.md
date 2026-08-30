---
title: projection.Common
---

# projection.Common

projection.Common 是投影（Projection）的 mixin 基类，为所有具体投影对象提供恒等投影/反投影的默认实现，以及批量投影、球面检查等公共能力。它是一个对象 mixin，没有独立的构造函数，而是被混入 `projection.EPSG3857`、`projection.BAIDU`、`projection.EPSG4326` 等具体投影中；其 `code` 默认为空，`project`/`unproject` 默认恒等返回输入坐标。

```js
import { projection } from "maptalks";

// 具体投影混入了 Common
const proj = projection.EPSG3857;
console.log(proj.code); // "EPSG:3857"
```

## 属性 / 静态方法

- `code: string` — 投影代码，默认 `''`，由子类覆盖。
- `aliases: string[]` — 投影的别名列表，如 `['Traverse_Mercator']`。
- `circum` — 球面周长缓存，形如 `{ x, y }`。
- `sphere` — 球面测量器，声明投影是否为球面（球面投影如 `WGS84Sphere`）。
- `extent` — 球面范围缓存（`Extent`）。

## 方法

- `is(code): boolean` — 判断投影代码或别名是否等于传入的 `code`。
- `project(p): Coordinate` — 将地理坐标投影到投影坐标，默认恒等。
- `unproject(p): Coordinate` — 将投影坐标转回地理坐标，默认恒等。
- `projectCoords(coords, antiMeridian?): Coordinate[]` — 批量投影坐标，支持一维/多维数组，可处理跨越日期变更线。
- `unprojectCoords(coords): Coordinate[]` — 批量反投影坐标。
- `isSphere(): boolean` — 该投影是否为球面投影。
- `isOutSphere(pcoord): boolean` — 投影坐标是否超出球面范围。
- `wrapCoord(pcoord): Coordinate` — 将投影坐标限制/包裹进球面范围。
- `getCircum(): { x, y }` — 获取或计算球面周长（宽、高）。
- `getSphereExtent(): Extent` — 获取或计算球面范围。
