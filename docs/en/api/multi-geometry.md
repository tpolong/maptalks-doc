---
title: MultiGeometry
---

# MultiGeometry

MultiGeometry is an abstract base class for multi-geometries that extends [GeometryCollection](/en/api/geometry-collection). It is the abstract parent of MultiPoint, MultiLineString, and MultiPolygon, and provides a unified coordinate read/write interface on top of a collection of child geometries. It is usually not instantiated directly.

```js
import { MultiGeometry } from "maptalks";

// MultiGeometry is an abstract base class, usually not instantiated directly.
// Use its subclasses MultiPoint / MultiLineString / MultiPolygon instead.
const multi = new MultiGeometry("MultiPoint", "Point", [[100, 0], [101, 1]]);
```

## Constructor

```js
new MultiGeometry(geoType, type, data, options?)
```

Parameters:

* `geoType` — The geometry type name (e.g. `"MultiPoint"`).
* `type` — The child geometry type name (e.g. `"Point"`).
* `data` — The array of child geometry data.
* `options` — (Optional) Geometry options, see the options of Geometry.

## options

MultiGeometry has no class-specific options; it inherits the options of [GeometryCollection](/en/api/geometry-collection).

## Methods

- `getCoordinates(): object` — Returns the coordinates of all child geometries (GeoJSON-style structure).
- `setCoordinates(coords): this` — Sets the coordinates of all child geometries.

## Static Methods

- `MultiGeometry.fromJSON(json): MultiGeometry` — Creates a MultiGeometry instance from a JSON object.

## Events

No class-specific events.
