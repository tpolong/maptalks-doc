---
title: projection.Common
---

# projection.Common

projection.Common is the mixin base class for projections, providing default identity project/unproject implementations as well as batch projection and sphere-checking utilities. It is an object mixin with no standalone constructor: it is mixed into concrete projections such as `projection.EPSG3857`, `projection.BAIDU`, and `projection.EPSG4326`. Its `code` defaults to an empty string and `project`/`unproject` default to returning the input coordinate unchanged.

```js
import { projection } from "maptalks";

// Concrete projections inherit from Common
const proj = projection.EPSG3857;
console.log(proj.code); // "EPSG:3857"
```

## Properties / Static Methods

- `code: string` — The projection code, default `''`, overridden by subclasses.
- `aliases: string[]` — Alias list of the projection, e.g. `['Traverse_Mercator']`.
- `circum` — Cached sphere circumference, shaped `{ x, y }`.
- `sphere` — The sphere measurer, indicating whether the projection is spherical (e.g. `WGS84Sphere`).
- `extent` — Cached sphere extent (`Extent`).

## Methods

- `is(code): boolean` — Whether the projection code or one of its aliases equals the passed `code`.
- `project(p): Coordinate` — Project a geographical coordinate to a projected coordinate, identity by default.
- `unproject(p): Coordinate` — Unproject a projected coordinate back to a geographical coordinate, identity by default.
- `projectCoords(coords, antiMeridian?): Coordinate[]` — Project a batch of coordinates, supporting 1D/multi-dimensional arrays and handling antimeridian crossing.
- `unprojectCoords(coords): Coordinate[]` — Unproject a batch of projected coordinates.
- `isSphere(): boolean` — Whether the projection is spherical.
- `isOutSphere(pcoord): boolean` — Whether the projected coordinate is out of the sphere.
- `wrapCoord(pcoord): Coordinate` — Wrap the projected coordinate into the sphere extent.
- `getCircum(): { x, y }` — Get or compute the sphere circumference (width, height).
- `getSphereExtent(): Extent` — Get or compute the sphere extent.
