---
title: Circle
---

# Circle

Circle is the circle geometry class of maptalks, inheriting from CenterMixin(Polygon). It is defined by a center point and a radius, used to represent circular areal features.

```js
import { Circle } from "maptalks";
// Usage example
const marker = new Circle([0, 0], 1000);
```

## Constructor

```js
new Circle(center, radius, options?)
```

Parameters:

* `center` — The center point coordinates of the circle, e.g. `[x, y]`.
* `radius` — The radius of the circle.
* `options` — (Optional) Configuration options, see the table below.

## options

| Config | Type | Description | Default |
| --- | --- | --- | --- |
| numberOfShellPoints | `number` | The number of shell sample points when generating the circle | `60` |

## Methods

- `getRadius()` — Gets the radius of the circle.
- `setRadius(radius)` — Sets the radius of the circle.
- `getShell()` — Gets the outer ring of the circle.
- `getHoles()` — Gets the inner rings of the circle.
- `animateShow()` — Shows the circle with an animation.

<!-- api-gen:start -->
### Other Public Methods of Circle

<!--@include: ./includes/api/circle-missing.md-->

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

- `fromJSON(json)` — Creates a Circle from a JSON object.

<!-- api-gen:start -->
### Static Methods Inherited from Geometry

The following methods are provided by the parent class [Geometry](/en/api/geometry) and are available on instances of this class.

<!--@include: ./includes/api/geometry-statics.md-->
<!-- api-gen:end -->

## Events

- `shapechange` — Fired when the shape of the circle changes.

<!-- api-gen:start -->
### Events Inherited from Polygon

<!--@include: ./includes/api/polygon-events.md-->

### Events Inherited from Geometry

<!--@include: ./includes/api/geometry-events.md-->
<!-- api-gen:end -->
