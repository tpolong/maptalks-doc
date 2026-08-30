---
title: CenterMixin
---

# CenterMixin

CenterMixin is a mixin factory that provides unified coordinate read/write access to center-based geometry classes such as [Marker](/en/api/marker), Circle and Ellipse. It accesses a geometry's center coordinate through `getCoordinates()`/`setCoordinates()` and maintains a projected-coordinate cache. It is not a class that can be instantiated directly and has no independent constructor.

```js
import { Marker } from "maptalks";

// CenterMixin is mixed into center-based geometry classes
const marker = new Marker([0, 0]);
marker.setCoordinates([10, 20]);          // mixed-in method
console.log(marker.getCoordinates());     // Coordinate [10, 20]
```

## Constructor

Mixin, no independent constructor. CenterMixin is integrated into center-based geometry classes such as Marker, Circle and Ellipse via injection.

## options

Mixin, no independent options. Options are provided by the host geometry class.

## Methods

- `getCoordinates(): Coordinate` — Gets the center coordinate of the geometry.
- `setCoordinates(coordinates): this` — Sets a new center, updating the projected coordinates and firing the `positionchange` event. The argument can be a `Coordinate` or an `[x, y, z]` array.

## Events

- `positionchange` — Fired when the center position changes.
