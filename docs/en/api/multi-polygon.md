---
title: MultiPolygon
---

# MultiPolygon

MultiPolygon is a multi-polygon geometry class that extends MultiPath. It represents a collection of polygon faces, commonly used for administrative regions, parcels, or arbitrary polygon data. It can be constructed from an array of polygon coordinates or an array of Polygons.

```js
import { MultiPolygon } from "maptalks";

const polygons = new MultiPolygon([
  [[[100, 0], [101, 0], [101, 1], [100, 0]]],
  [[[102, 2], [103, 2], [103, 3], [102, 2]]]
]);
// Or pass Polygon[]:
const polyGeoms = [new Polygon([[[100, 0], [101, 0], [101, 1], [100, 0]]])];
const polygons2 = new MultiPolygon(polyGeoms);

layer.addGeometry(polygons);
```

## Constructor

```js
new MultiPolygon(data, options?)
```

Parameters:

* `data` — An array of polygon coordinates (each polygon is an array of coordinate rings) or `Polygon[]`.
* `options` — (Optional) Geometry options, see the options of Path / Geometry.

## options

MultiPolygon has no class-specific options; it inherits the options of Path.

## Methods

No class-specific methods; it inherits the methods of MultiPath.

## Static Methods

- `MultiPolygon.fromJSON(json): MultiPolygon` — Creates a MultiPolygon instance from a JSON object.

## Events

No class-specific events.
