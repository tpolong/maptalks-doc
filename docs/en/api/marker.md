---
title: Marker
---

# Marker

Marker is the most common point geometry, drawing a marker icon (vector, image, or SVG path) at a geographic coordinate. It extends [Geometry](/en/api/geometry); `getCoordinates()`/`setCoordinates()` are provided by `CenterMixin`.

```js
import { VectorLayer, Marker } from "maptalks";

const layer = new VectorLayer("vector");
const marker = new Marker([100, 0], {
  symbol: {
    markerType: "path",
    markerPath: "M 0 0 L 10 10 L 0 10 Z",
    markerFill: "#DE3333",
  },
}).addTo(layer);
```

## Constructor

```js
new Marker(coordinates, options?)
```

Parameters:

* **coordinates** `Coordinate | Number[]` the marker's geographic coordinate (`[x,y]` or `Coordinate`, may include z).
* **options** `Object` construction options.

## Options

### Marker-specific

| Option | Type | Description | Default |
| --- | --- | --- | --- |
| `symbol` | Object | marker symbol | path-style default |
| `hitTestForEvent` | Boolean | hit-test for events | `false` |
| `collision` | Boolean | participate in collision detection | `true` |

Options inherited from [Geometry](/en/api/geometry) — `id`, `visible`, `interactive`, `draggable`, `zIndex`, `properties`, etc. — also apply.

### marker-style fields inside `symbol`

**Common marker properties** (MarkerCommonSymbol):

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `markerType` | String | `'path'` | vector marker type (ellipse/cross/x/diamond/bar/square/rectangle/triangle/pin/pie/path) |
| `markerFile` | String | — | image marker URL (highest priority) |
| `markerWidth` / `markerHeight` | Number | `24 × 34` | marker pixel width/height |
| `markerDx` / `markerDy` | Number | `0` | pixel offset from the anchor |
| `markerHorizontalAlignment` | String | by type | horizontal alignment |
| `markerVerticalAlignment` | String | by type | vertical alignment |
| `markerPlacement` | String | `'point'` | placement mode |
| `markerRotation` | Number | `0` | rotation angle (deg) |
| `markerOpacity` | Number | `1` | opacity |

**Vector-marker specific**: `markerFill`, `markerFillOpacity`, `markerFillPatternFile`, `markerLineColor`, `markerLineWidth`, `markerLineOpacity`, `markerLineDasharray`.

**Image-marker specific**: `markerFile`.

**Path-marker specific** (Marker default): `markerPath`, `markerPathWidth`, `markerPathHeight`, `markerFill`, `markerLineColor`, etc.

**Text marker** (Marker also supports): `textName`, `textFaceName`, `textSize`, `textFill`, `textOpacity`, `textHaloFill`, `textHaloRadius`, `textWrapWidth`, `textLineSpacing`, `textDx`, `textDy`, etc.

## Member Methods

- `getCoordinates(): Coordinate` / `setCoordinates(coordinates): this` — get/set the marker coordinate (from CenterMixin)
- `getOutline(): Marker` — return an outline marker of the current marker's bounding box

Other methods (`getCenter`, `getExtent`, `getSymbol`/`setSymbol`, `getProperties`/`setProperties`, `getId`/`setId`, `show`/`hide`, `translate`, `addTo`/`remove`, `toGeoJSON`/`toJSON`, etc.) are inherited from [Geometry](/en/api/geometry).

## Static Methods

- `Marker.mergeOptions(options): this` — merge default options
- `Marker.fromJSON(json)` — restore geometry from JSON (uses Geometry.fromJSON)

## Events

Marker events are all inherited from [Geometry](/en/api/geometry): `positionchange`, `symbolchange`, `idchange`, `propertieschange`, `zindexchange`, `show`/`hide`, `removestart`/`removeend`/`remove`, etc.

```js
marker.on("positionchange", () => {
  console.log("marker at", marker.getCoordinates());
});
```
