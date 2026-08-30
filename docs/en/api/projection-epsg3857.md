---
title: projection.EPSG3857
---

# projection.EPSG3857

projection.EPSG3857 is the Web Mercator projection object, mixing in `projection.Common` and `measurer.WGS84Sphere`. It converts geographical coordinates into meter-based Mercator planar coordinates and is maptalks' default projection (used by Google Maps / OSM). It is an object mixin with no standalone constructor.

```js
import { projection } from "maptalks";

const p = projection.EPSG3857.project([116.39, 39.9]);
console.log(p.x, p.y); // meter-based projected coordinates
```

## Properties / Static Methods

- `code: string` — The projection code, `'EPSG:3857'`.
- `maxLatitude: number` — The maximum valid latitude, `85.0511287798`.
- `metersPerDegree` — Meters per degree, `6378137 * Math.PI / 180`.
- `rad: number` — The radian conversion factor, `Math.PI / 180`.

## Methods

- `project(lnglat, out?): Coordinate` — Web Mercator projection, converting lng/lat into meter-based projected coordinates.
- `unproject(p, out?): Coordinate` — Web Mercator inverse projection, converting meter-based coordinates back to lng/lat.
- Additionally inherits `projectCoords` / `unprojectCoords` / `isSphere` / `isOutSphere` / `wrapCoord` / `getCircum` / `getSphereExtent` from `projection.Common`.
