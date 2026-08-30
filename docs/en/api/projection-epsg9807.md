---
title: projection.EPSG9807
---

# projection.EPSG9807

projection.EPSG9807 is a Transverse Mercator projection object whose source lives in `Projection.EPSG9807.ts`; its projection code is `'EPSG:9807'` with the alias `'Traverse_Mercator'`. It mixes in `projection.Common` and `measurer.WGS84Sphere`, creating parameterized projection instances through the `create` factory. It is an object mixin with no standalone constructor and is accessed at runtime as `projection.EPSG9807`.

```js
import { projection } from "maptalks";

const proj = projection.EPSG9807.create({
  centralMeridian: 114,
  scaleFactor: 1,
  falseEasting: 500000
});
```

## Properties / Static Methods

- `code: string` — The projection code, `'EPSG:9807'`.
- `aliases: string[]` — Alias list, `['Traverse_Mercator']`.
- `centralMeridian: number` — Central meridian, default `0`.
- `create(params): projection` — Static factory that creates a Transverse Mercator projection instance from parameters:
  - `falseEasting` — False easting, default `500000`.
  - `falseNorthing` — False northing, default `0`.
  - `scaleFactor` — Scale factor, default `0.9996`.
  - `centralMeridian` — Central meridian (degrees).
  - `latitudeOfOrigin` — Latitude of origin (degrees).
  - `startLongtitude` / `startLatitude` — Starting longitude / latitude.

## Methods

- `project(p, out?): Coordinate` — Project lng/lat into Transverse Mercator coordinates (meters).
- `unproject(p, out?): Coordinate` — Unproject Transverse Mercator coordinates back to lng/lat.
- Additionally inherits projection / batch / sphere methods from `projection.Common`.
