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

<!-- api-gen:start -->
### Other Public Methods of MultiGeometry

<!--@include: ./includes/api/multi-geometry-missing.md-->

### Methods Inherited from GeometryCollection

The following methods are provided by the parent class [GeometryCollection](/en/api/geometry-collection) and are available on instances of this class.

<!--@include: ./includes/api/geometry-collection-methods.md-->

### Methods Inherited from Geometry

The following methods are provided by the parent class [Geometry](/en/api/geometry) and are available on instances of this class.

<!--@include: ./includes/api/geometry-methods.md-->

### Mixed-in Methods

This class gains the following method groups from mixins; see the linked pages for details: [JSONAble](/en/api/json-able)（`getJSONType`…）；[Eventable](/en/api/eventable)（`on`、`addEventListener`、`once`、`off`、`removeEventListener`、`listens`、`getListeningEvents`、`copyEventListeners`…）；[Handlerable](/en/api/handlerable)；[Menuable](/en/api/menuable).
<!-- api-gen:end -->

## Static Methods

- `MultiGeometry.fromJSON(json): MultiGeometry` — Creates a MultiGeometry instance from a JSON object.

<!-- api-gen:start -->
### Other Static Methods of MultiGeometry

<!--@include: ./includes/api/multi-geometry-statics-missing.md-->

### Static Methods Inherited from Geometry

The following methods are provided by the parent class [Geometry](/en/api/geometry) and are available on instances of this class.

<!--@include: ./includes/api/geometry-statics.md-->
<!-- api-gen:end -->

## Events

No class-specific events.

<!-- api-gen:start -->
### Events Inherited from GeometryCollection

<!--@include: ./includes/api/geometry-collection-events.md-->

### Events Inherited from Geometry

<!--@include: ./includes/api/geometry-events.md-->
<!-- api-gen:end -->
