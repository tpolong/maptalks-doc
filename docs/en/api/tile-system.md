---
title: TileSystem
---

# TileSystem

TileSystem is a tile-system utility class that describes the tile X/Y axis index direction and the world projection origin. It does not extend any base class. It is used by [TileLayer](/en/api/tile-layer) or [GroupTileLayer](/en/api/group-tile-layer) through `options.tileSystem`, where you can pass a built-in preset name or a `[sx, sy, ox, oy]` tuple.

```js
import { TileSystem } from "maptalks";

const ts = new TileSystem([1, -1, -20037508.34, 20037508.34]);
```

## Constructor

```js
new TileSystem(sx, sy, ox, oy)
new TileSystem([sx, sy, ox, oy])
```

Parameters:

* `sx` `Number|Number[]` X-axis tile index direction (1 means right is larger, -1 the reverse); when an array is passed it is `[sx, sy, ox, oy]`.
* `sy` `Number` Y-axis tile index direction (1 means bottom is larger, -1 the reverse).
* `ox` `Number` x of the world's projected coordinate system origin.
* `oy` `Number` y of the world's projected coordinate system origin.

## Static Methods

- `TileSystem.getDefault(projection): string | number[]` — return the default tile system code for a projection

Built-in presets:

| Constant | Meaning |
| --- | --- |
| `web-mercator` | Web Mercator (google/bing/AMap) |
| `tms-global-mercator` | TMS / mapbox mbtiles (EPSG:3857) |
| `global-geodetic` | EPSG:4326 global geodetic grid |
| `tms-global-geodetic` | TMS / OSGEO (EPSG:4326) |
| `baidu` | Baidu Maps |
