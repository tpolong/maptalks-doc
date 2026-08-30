---
title: MultiPoint
---

# MultiPoint

MultiPoint is a multi-point geometry class that extends [MultiGeometry](/en/api/multi-geometry). It represents a collection of independent points, commonly used for point facilities, POIs, or discrete point data. It can be constructed from an array of coordinates or an array of Markers.

```js
import { MultiPoint } from "maptalks";

const points = new MultiPoint([[100, 0], [101, 1], [102, 2]]);
// Or pass Marker[]:
const markers = [map.addMarker([100, 0]), map.addMarker([101, 1])];
const points2 = new MultiPoint(markers);

layer.addGeometry(points);
```

## Constructor

```js
new MultiPoint(data, options?)
```

Parameters:

* `data` — An array of coordinates (e.g. `Coordinate[]`) or `Marker[]` representing the points to create.
* `options` — (Optional) Geometry options, see the options of Geometry.

## options

MultiPoint has no class-specific options; it inherits the options of Geometry.

## Methods

- `findClosest(coordinate): Coordinate` — Finds the coordinate of the point closest to the given coordinate.

## Static Methods

- `MultiPoint.fromJSON(json): MultiPoint` — Creates a MultiPoint instance from a JSON object.

## Events

No class-specific events.
