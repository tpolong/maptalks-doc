---
title: Position
---

# Position

Position is the abstract parent class of [Point](/en/api/point) and [Coordinate](/en/api/coordinate), defining the `x`, `y`, `z` fields and a set of common operations. It is an abstract base class and cannot be instantiated directly; use its subclasses `Point` or `Coordinate`.

```js
import { Position } from "maptalks";
// Abstract base class, use the subclass instead
// Position cannot be new'd directly; use new Point(...) or new Coordinate(...)
```

## Constructor

```js
new Position(x, y, z?)
// or
new Position([x, y, z?])
// or
new Position({ x, y, z? })
```

> Position is abstract and cannot be instantiated directly; the signatures above describe how the subclasses are constructed.

Parameters:

* `x` — The x value, or an `[x, y, z?]` array, or an `{ x, y, z? }` object.
* `y` — The y value.
* `z` — (Optional) The third-dimensional value; a plain property not used in operations.

## Methods

- `set(x, y, z?): this` — Set the x, y values directly (z optional, defaults to 0).
- `distanceTo(point): number` — Return the Euclidean distance to the given point.
- `mag(): number` — Return the magnitude of this point, i.e. the Euclidean distance from the origin `(0,0)` to this point.
- `div(n): Point|Coordinate` — Return the result of dividing the current point by the given number.
- `substract(x, y?): Point|Coordinate` — Alias for `sub`.
- `isZero(): boolean` — Whether x and y are both 0.
- `toArray(): number[]` — Convert to an array `[x, y]` (`[x, y, z]` if z exists).
- `toJSON(): { x, y, z? }` — Convert to a JSON object.

> Abstract methods (implemented by subclasses): `abs()`, `round()`, `ceil()`, `floor()`, `copy()`, `add()`, `sub()`, `multi()`, `toFixed()`, `equals()`.

## Static Methods

Position has no static methods.

## Events

Position has no events.
