---
title: projection.EPSG4326
---

# projection.EPSG4326

projection.EPSG4326 is an Equirectangular projection object, mixing in `projection.Common` and `measurer.WGS84Sphere`. It is a common CRS among GIS applications: both project and unproject are identity operations that output lng/lat directly as planar coordinates. It is an object mixin with no standalone constructor.

```js
import { projection } from "maptalks";

const p = projection.EPSG4326.project([116.39, 39.9]);
console.log(p.x, p.y); // 116.39, 39.9
```

## Properties / Static Methods

- `code: string` — The projection code, `'EPSG:4326'`.
- `aliases: string[]` — Alias list, `['EPSG:4490']`.

## Methods

- `project(p, out?): Coordinate` — Identity projection, copying x/y/z.
- `unproject(p, out?): Coordinate` — Identity unprojection, copying x/y/z.
- Additionally inherits projection / batch / sphere methods from `projection.Common`.
