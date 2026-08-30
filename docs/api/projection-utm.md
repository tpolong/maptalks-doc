---
title: projection.UTM
---

# projection.UTM

projection.UTM 是通用横轴墨卡托（Universal Transverse Mercator, UTM）投影，源码位于 `Projection.UTM.ts`。它继承 `projection.EPSG9807`（横轴墨卡托），通过 `create` 工厂按 UTM 分区带参数生成投影实例。它是对象 mixin，运行时通过 `projection.UTM` 访问。

```js
import { projection } from "maptalks";

// zone 1-60；south 为 true 表示南半球(假北移 10000000)
const utm = projection.UTM.create({ zone: 50, south: false });
```

## 属性 / 静态方法

- `code: string` — 投影代码，`'utm'`。
- `aliases: string[]` — 别名列表，`[]`。
- `create(params): projection` — 静态工厂，按 UTM 分区创建一个投影实例。参数：
  - `zone` — UTM 分区编号（1~60），必填；非法则抛错。
  - `south` — `Boolean`，是否南半球；南半球假北移为 10000000，北半球为 0。

`create` 根据 zone 计算中央经线 `centralMeridian = (zone + 0.5) * 6 - 180`，`scaleFactor = 0.9996`，`falseEasting = 500000`，并复用 `projection.EPSG9807.create` 的横轴墨卡托投影。

## 方法

- `project(p, out?): Coordinate` — 将经纬度投影为 UTM 坐标（米）。
- `unproject(p, out?): Coordinate` — 将 UTM 坐标反投影为经纬度。
- 继承自 `projection.EPSG9807` / `projection.Common` 的投影/批量/球面方法。

## 示例

```js
// 北京（约 116.4°E, 39.9°N）按 zone 50 投影
const proj = projection.UTM.create({ zone: 50, south: false });
const coord = proj.project([116.4, 39.9]);
```
