---
title: Polygon
---

# Polygon

Polygon is the polygon geometry class of maptalks, inheriting from Path. It consists of one outer ring (shell) and optional inner rings (holes), used to represent polygonal areas.

```js
import { Polygon } from "maptalks";
// Usage example
const poly = new Polygon([[0, 0], [0, 10], [10, 10], [10, 0]]);
```

## Constructor

```js
new Polygon(coordinates, options?)
```

Parameters:

* `coordinates` — The coordinate array of the polygon, either a single outer ring, or in the form `[outerRing, hole1, hole2, ...]`.
* `options` — (Optional) Configuration options.

## options

Polygon's options are inherited from [Path](/en/api/path); styling is controlled via `symbol`:

| Config | Type | Description | Default |
| --- | --- | --- | --- |
| `symbol` | Object | polygon style (polygonFill/polygonOpacity/lineColor/lineWidth) | — |
| `smoothness` | Number | smoothness (bezier smoothing) | `false` |
| `enableClip` | Boolean | enable clipping | `true` |
| `enableSimplify` | Boolean | simplify before render | `true` |
| `simplifyTolerance` | Number | simplify tolerance | `2` |

## Methods

- `setCoordinates(coords)` — Sets the coordinates of the polygon.
- `getCoordinates()` — Gets the coordinates of the polygon (outer ring and holes).
- `getShell()` — Gets the outer ring of the polygon.
- `getHoles()` — Gets all inner rings of the polygon.
- `hasHoles(): boolean` — Returns whether the polygon contains inner rings.
- `getCenterInExtent(extent)` — Returns the center point within the given extent.
- `getOutline()` — Returns the outline of the polygon.

## Static Methods

- `fromJSON(json)` — Creates a Polygon from a JSON object.

## Events

- `shapechange` — Fired when the shape of the polygon changes.
