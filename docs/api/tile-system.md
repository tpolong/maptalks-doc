---
title: TileSystem
---

# TileSystem

TileSystem 是瓦片系统描述工具类，描述瓦片 X/Y 轴索引方向与世界投影坐标系原点，不继承任何基类。它由 [TileLayer](/api/tile-layer) 或 [GroupTileLayer](/api/group-tile-layer) 通过 `options.tileSystem` 使用，可传入内置预设名或 `[sx, sy, ox, oy]` 四元数组。

```js
import { TileSystem } from "maptalks";

const ts = new TileSystem([1, -1, -20037508.34, 20037508.34]);
```

## 构造函数

```js
new TileSystem(sx, sy, ox, oy)
new TileSystem([sx, sy, ox, oy])
```

参数：

* `sx` `Number|Number[]` X 轴瓦片索引方向（1 表示右侧更大，-1 相反）；传数组时为 `[sx, sy, ox, oy]`。
* `sy` `Number` Y 轴瓦片索引方向（1 表示下方更大，-1 相反）。
* `ox` `Number` 世界投影坐标系原点的 x。
* `oy` `Number` 世界投影坐标系原点的 y。

## 静态方法

- `TileSystem.getDefault(projection): string | number[]` — 根据投影返回默认瓦片系统代码

内置预设：

| 常量名 | 含义 |
| --- | --- |
| `web-mercator` | Web Mercator（google/bing/高德） |
| `tms-global-mercator` | TMS / mapbox mbtiles（EPSG:3857） |
| `global-geodetic` | EPSG:4326 全球地理网格 |
| `tms-global-geodetic` | TMS / OSGEO（EPSG:4326） |
| `baidu` | 百度地图 |
