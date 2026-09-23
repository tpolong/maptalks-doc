---
title: Sector
---

# Sector

Sector is the sector geometry class of maptalks, inheriting from Circle. It is defined by a center point, a radius, a start angle, and an end angle, used to represent sector-shaped areal features such as radar scanning areas or parking radii.

```js
import { Sector } from "maptalks";
// Usage example
const sector = new Sector([0, 0], 1000, 0, Math.PI / 2);
```

## Constructor

```js
new Sector(center, radius, startAngle, endAngle, options?)
```

Parameters:

* `center` — The center point coordinates of the sector, e.g. `[x, y]`.
* `radius` — The radius of the sector.
* `startAngle` — The start angle of the sector.
* `endAngle` — The end angle of the sector.
* `options` — (Optional) Configuration options, see the table below.

## options

| Config | Type | Description | Default |
| --- | --- | --- | --- |
| numberOfShellPoints | `number` | The number of shell sample points when generating the sector | `60` |

## Methods

- `getStartAngle()` — Gets the start angle of the sector.
- `setStartAngle(angle)` — Sets the start angle of the sector.
- `getEndAngle()` — Gets the end angle of the sector.
- `setEndAngle(angle)` — Sets the end angle of the sector.
- `getShell()` — Gets the outer ring of the sector.
- `getRotateOffsetAngle()` — Returns the rotate offset angle of the sector (always 90).

<!-- api-gen:start -->
### Other Public Methods of Sector

<!--@include: ./includes/api/sector-missing.md-->

### Methods Inherited from Circle

The following methods are provided by the parent class [Circle](/en/api/circle) and are available on instances of this class.

<!--@include: ./includes/api/circle-methods.md-->

### Methods Inherited from Polygon

The following methods are provided by the parent class [Polygon](/en/api/polygon) and are available on instances of this class.

<!--@include: ./includes/api/polygon-methods.md-->

### Methods Inherited from Path

The following methods are provided by the parent class [Path](/en/api/path) and are available on instances of this class.

<!--@include: ./includes/api/path-methods.md-->

### Methods Inherited from Geometry

The following methods are provided by the parent class [Geometry](/en/api/geometry) and are available on instances of this class.

<!--@include: ./includes/api/geometry-methods.md-->

### Mixed-in Methods

This class gains the following method groups from mixins; see the linked pages for details: [CenterMixin](/en/api/center-mixin)（`getCoordinates`、`setCoordinates`、`getMap`、`onPositionChanged`…）；[JSONAble](/en/api/json-able)（`getJSONType`…）；[Eventable](/en/api/eventable)（`on`、`addEventListener`、`once`、`off`、`removeEventListener`、`listens`、`getListeningEvents`、`copyEventListeners`…）；[Handlerable](/en/api/handlerable)；[Menuable](/en/api/menuable).
<!-- api-gen:end -->

## Static Methods

- `fromJSON(json)` — Creates a Sector from a JSON object.

<!-- api-gen:start -->
### Static Methods Inherited from Circle

The following methods are provided by the parent class [Circle](/en/api/circle) and are available on instances of this class.

<!--@include: ./includes/api/circle-statics.md-->

### Static Methods Inherited from Geometry

The following methods are provided by the parent class [Geometry](/en/api/geometry) and are available on instances of this class.

<!--@include: ./includes/api/geometry-statics.md-->
<!-- api-gen:end -->

## Events

- `shapechange` — Fired when the shape of the sector changes.

<!-- api-gen:start -->
### Events Inherited from Circle

<!--@include: ./includes/api/circle-events.md-->

### Events Inherited from Polygon

<!--@include: ./includes/api/polygon-events.md-->

### Events Inherited from Geometry

<!--@include: ./includes/api/geometry-events.md-->
<!-- api-gen:end -->
