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

## Static Methods

- `fromJSON(json)` — Creates a Circle from a JSON object.

## Events

- `shapechange` — Fired when the shape of the circle changes.
