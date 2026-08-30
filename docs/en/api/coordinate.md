---
title: Coordinate
---

# Coordinate

Coordinate represents a coordinate point, e.g. a geographic point (longitude, latitude) or a projected coordinate. It is the base data structure for maptalks coordinate conversions, extending `Position` (the common parent of `Point` and `Coordinate`).

```js
import { Coordinate } from "maptalks";

const coord = new Coordinate(0, 0);
const coord2 = new Coordinate([121.47, 31.23]);
const coord3 = new Coordinate({ x: 0, y: 0 });
```

## Constructor

```js
new Coordinate(x, y, z?)
new Coordinate([x, y, z])
new Coordinate({ x, y, z })
new Coordinate(coordinate)
```

Parameters:

* **x** `Number` x coordinate value.
* **y** `Number` y coordinate value.
* **z** `Number` z value (optional; a plain property not used in operations).

Array `[x, y]`, JSON object `{x, y}`, and another `Coordinate` are also accepted.

> Throws if x/y are `NaN`.

## Member Methods

### Value & conversion

- `toArray(): number[]` — convert to an array `[x, y]` (`[x, y, z]` if z exists)
- `toJSON(): { x, y, z? }` — convert to a JSON object
- `toFixed(n): Coordinate` — round to n decimals
- `copy(): Coordinate` — return a copy

### Arithmetic

- `add(x, y?, z?): Coordinate` — add another coordinate
- `sub(x, y?, z?): Coordinate` — subtract another coordinate
- `substract(x, y?): Coordinate` — alias of `sub`
- `multi(ratio): Coordinate` — multiply by a number
- `div(n): Coordinate` — divide by a number
- `abs(): Coordinate` — absolute value
- `round(): Coordinate` — round
- `ceil(): Coordinate` — ceil
- `floor(): Coordinate` — floor

### Distance & comparison

- `distanceTo(point): number` — Euclidean distance to a point
- `mag(): number` — distance from the origin
- `closeTo(p, delta?): boolean` — whether within a delta
- `equals(c): boolean` — whether equal
- `isZero(): boolean` — whether zero

### In-place set

- `set(x, y, z?): this` — set the coordinates (mutates and returns this)

## Static Methods

- `Coordinate.toNumberArrays(coordinates)` — convert Coordinates to GeoJSON-style coordinate arrays (recursive)
- `Coordinate.toCoordinates(coordinates)` — convert GeoJSON-style coordinates to Coordinates (recursive)

```js
const coord = new Coordinate(121.47, 31.23);
const arr = coord.toArray(); // [121.47, 31.23]
const dist = coord.distanceTo(new Coordinate(121.48, 31.24));
```

> Coordinate is a pure data type with no event system. Coordinate projection conversion (lon/lat ↔ Web Mercator / pixel) is done by `CRS`/projection classes, not by Coordinate methods.
