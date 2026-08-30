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

## Static Methods

- `fromJSON(json)` — Creates a Sector from a JSON object.

## Events

- `shapechange` — Fired when the shape of the sector changes.
