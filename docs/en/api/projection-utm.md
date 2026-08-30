---
title: projection.UTM
---

# projection.UTM

projection.UTM is the Universal Transverse Mercator (UTM) projection, located in `Projection.UTM.ts`. It extends `projection.EPSG9807` (Transverse Mercator) and creates parameterized projection instances by UTM zone via the `create` factory. It is an object mixin, accessed at runtime as `projection.UTM`.

```js
import { projection } from "maptalks";

// zone 1-60; south=true for the southern hemisphere (false northing 10000000)
const utm = projection.UTM.create({ zone: 50, south: false });
```

## Properties / Static Methods

- `code: string` — projection code, `'utm'`.
- `aliases: string[]` — alias list, `[]`.
- `create(params): projection` — Static factory creating a projection instance for a UTM zone. Parameters:
  - `zone` — UTM zone number (1~60), required; throws if invalid.
  - `south` — `Boolean`, whether southern hemisphere; false northing is 10000000 for south, 0 for north.

`create` computes `centralMeridian = (zone + 0.5) * 6 - 180`, `scaleFactor = 0.9996`, `falseEasting = 500000`, and reuses `projection.EPSG9807.create`'s Transverse Mercator projection.

## Methods

- `project(p, out?): Coordinate` — Project lng/lat into UTM coordinates (meters).
- `unproject(p, out?): Coordinate` — Unproject UTM coordinates back to lng/lat.
- Additionally inherits projection / batch / sphere methods from `projection.EPSG9807` / `projection.Common`.

## Example

```js
// Beijing (~116.4°E, 39.9°N) projected with zone 50
const proj = projection.UTM.create({ zone: 50, south: false });
const coord = proj.project([116.4, 39.9]);
```
