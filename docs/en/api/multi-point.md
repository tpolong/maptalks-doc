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

<!-- api-gen:start -->
### Other Public Methods of MultiPoint

<!--@include: ./includes/api/multi-point-missing.md-->

### Methods Inherited from MultiGeometry

The following methods are provided by the parent class [MultiGeometry](/en/api/multi-geometry) and are available on instances of this class.

<!--@include: ./includes/api/multi-geometry-methods.md-->

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

- `MultiPoint.fromJSON(json): MultiPoint` — Creates a MultiPoint instance from a JSON object.

<!-- api-gen:start -->
### Other Static Methods of MultiPoint

<!--@include: ./includes/api/multi-point-statics-missing.md-->

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
