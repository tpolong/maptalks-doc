---
title: projection.BAIDU
---

# projection.BAIDU

projection.BAIDU is the projection used by [Baidu Map](http://map.baidu.com), mixing in `projection.Common`, `measurer.BaiduSphere`, and the internal Mercator/coordinate-conversion methods. It converts between Baidu Mercator planar coordinates (MC) and lng/lat (LL). It is an object mixin with no standalone constructor.

```js
import { projection } from "maptalks";

const p = projection.BAIDU.project([116.404, 39.915]); // Baidu Mercator coordinates
```

## Properties / Static Methods

- `code: string` — The projection code, `'BAIDU'`.
- `EARTHRADIUS` — The Earth radius, `6370996.81`.
- `MCBAND` / `LLBAND` / `MC2LL` / `LL2MC` — Coefficient tables used for Baidu coordinate conversion.

## Methods

- `project(p, out?): Coordinate` — Convert lng/lat into Baidu Mercator coordinates (internally calls `convertLL2MC`).
- `unproject(p, out?): Coordinate` — Convert Baidu Mercator coordinates back to lng/lat (internally calls `convertMC2LL`).
- `convertLL2MC` / `convertMC2LL` / `convertor` — Lower-level coordinate-conversion methods.
- Additionally inherits projection / batch / sphere methods from `projection.Common`.
