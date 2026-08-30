---
title: VectorLayer
---

# VectorLayer

VectorLayer is the base vector layer for managing and rendering geometry (Marker, LineString, Polygon, MultiPolygon, etc.), extending [OverlayLayer](/en/api/overlay-layer) (a subclass of [Layer](/en/api/layer)). It provides geometry add/remove/query, style setting, identify, and filtering.

```js
import { Map, VectorLayer, Marker } from "maptalks";

const map = new Map("map", { center: [0, 0], zoom: 3 });
const layer = new VectorLayer("vector");
layer.addGeometry(new Marker([0, 0]));
layer.addTo(map);
```

## Constructor

```js
new VectorLayer(id, geometries?, options?)
```

Parameters:

* **id** `String` layer id (required).
* **geometries** `Geometry[] | Object` geometries to add; a plain options object is recognized as `options`.
* **options** `Object` construction options; `options.style` sets the layer style.

## Options

| Option | Type | Description | Default |
| --- | --- | --- | --- |
| `debug` | Boolean | geometry debug mode | `false` |
| `enableSimplify` | Boolean | simplify geometry before render | `true` |
| `geometryEvents` | Boolean | fire geometry events | `true` |
| `defaultIconSize` | `[number, number]` | default Marker icon size | `[20,20]` |
| `enableAltitude` | Boolean | render geometry by altitude | `true` |
| `altitudeProperty` | String | geometry altitude property | `'altitude'` |
| `drawAltitude` | Boolean | draw altitude lines | `false` |
| `altitude` | Number | layer altitude | `0` |
| `sortByDistanceToCamera` | Boolean | sort Markers by camera distance | `false` |
| `roundPoint` | Boolean | round points before drawing | `false` |
| `collision` | Boolean | enable collision detection | `false` |
| `collisionScope` | String | collision scope (layer/map) | `'layer'` |
| `cursor` | String | layer cursor style | — |

Common options inherited from [Layer](/en/api/layer) also apply.

## Member Methods

### Geometry management

- `addGeometry(geometries, fitView?): this` — add one or more geometries; `fitView=true` auto-fits the view
- `removeGeometry(geometries): this` — remove one or more geometries
- `getGeometryById(id): Geometry` — get a single geometry by id
- `getGeometries(filter?): Geometry[]` — get all or filtered geometries
- `getFirstGeometry(): Geometry` / `getLastGeometry(): Geometry` — get the bottom/top geometry
- `getCount(): number` — geometry count
- `getExtent(): Extent` — merged extent of all geometries
- `forEach(fn, context?): this` — iterate geometries
- `filter(fn, context?): Geometry[]` — return geometries passing a test
- `isEmpty(): boolean` — whether the layer is empty
- `clear(): this` — remove all geometries

### Style

- `getStyle(): any` / `setStyle(style): this` — get/set the layer style (mapbox-style filter)
- `removeStyle(): this` — remove the layer style

### Identify & altitude

- `identify(coordinate, options?): Geometry[]` — identify geometry at a coordinate
- `identifyAtPoint(point, options?)` — identify geometry at a container point
- `getAltitude()` — get the layer altitude

### Inherited from Layer

`addTo`, `remove`, `show`/`hide`, `setOpacity`, `setZIndex`, `bringToFront`/`bringToBack`, `getMap`, `toJSON`, etc. — see [Layer](/en/api/layer).

## Static Methods

- `VectorLayer.fromJSON(json): VectorLayer | null` — restore a layer from JSON

## Events

| Event | Fired when |
| --- | --- |
| `addgeo` | geometry added |
| `clear` | layer cleared |
| `setstyle` | style set |
| `removestyle` | style removed |

Common layer events — see [Layer](/en/api/layer).

```js
layer.on("addgeo", (e) => {
  console.log("added", e.geometries.length, "geometries");
});
```
