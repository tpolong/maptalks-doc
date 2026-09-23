---
title: Ellipse
---

# Ellipse

Ellipse is the ellipse geometry class of maptalks, inheriting from CenterMixin(Polygon). It is defined by a center point, a width, and a height, and is used to represent circular or elliptical areal features.

```js
import { Ellipse } from "maptalks";
// Usage example
const ellipse = new Ellipse([0, 0], 1000, 600);
```

## Constructor

```js
new Ellipse(center, width, height, options?)
```

Parameters:

* `center` — The center point coordinates of the ellipse, e.g. `[x, y]`.
* `width` — The width of the ellipse.
* `height` — The height of the ellipse.
* `options` — (Optional) Configuration options, see the table below.

## options

| Config | Type | Description | Default |
| --- | --- | --- | --- |
| numberOfShellPoints | `number` | The number of shell sample points when generating the ellipse | `81` |

## Methods

- `getWidth()` — Gets the width of the ellipse.
- `setWidth(width)` — Sets the width of the ellipse.
- `getHeight()` — Gets the height of the ellipse.
- `setHeight(height)` — Sets the height of the ellipse.
- `getShell()` — Gets the outer ring of the ellipse.
- `getHoles()` — Gets the inner rings of the ellipse.
- `animateShow()` — Shows the ellipse with an animation.

<!-- api-gen:start -->
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

- `fromJSON(json)` — Creates an Ellipse from a JSON object.

## Events

- `shapechange` — Fired when the shape of the ellipse changes.

<!-- api-gen:start -->
### Events Inherited from Polygon

<!--@include: ./includes/api/polygon-events.md-->

### Events Inherited from Geometry

<!--@include: ./includes/api/geometry-events.md-->
<!-- api-gen:end -->
