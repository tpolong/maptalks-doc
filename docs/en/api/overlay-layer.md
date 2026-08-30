---
title: OverlayLayer
---

# OverlayLayer

OverlayLayer is the base class of all layers that can add/remove geometry, extending [Layer](/en/api/layer). It is abstract (`@abstract`) and not instantiated directly. `VectorLayer` is its subclass.

```js
import { VectorLayer } from "maptalks";

const layer = new VectorLayer("vector");
```

## Constructor

```js
new OverlayLayer(id, geometries?, options?)
```

Parameters:

* **id** `String` layer id (required).
* **geometries** `Geometry[] | Object` geometries to add, or an options object.
* **options** `Object` construction options.

## Options

| Option | Type | Description | Default |
| --- | --- | --- | --- |
| `drawImmediate` | Boolean | draw immediately (instead of per RAF frame) | `false` |
| `geometryEvents` | Boolean | fire geometry events | `true` |
| `geometryEventTolerance` | Number | geometry event tolerance (px) | `1` |
| `style` | any | layer style | — |

## Member Methods

### Geometry management

- `addGeometry(geometries, fitView?): this` — add one or more geometries
- `removeGeometry(geometries): this` — remove one or more geometries
- `getGeometryById(id): Geometry` — get a geometry by id
- `getGeometries(filter?): Geometry[]` — get all or filtered geometries
- `getFirstGeometry(): Geometry` / `getLastGeometry(): Geometry` — bottom/top geometry
- `getCount(): number` — geometry count
- `getExtent(): Extent` — merged extent
- `forEach(fn, context?): this` — iterate geometries
- `filter(fn, context?): Geometry[]` — filter geometries
- `isEmpty(): boolean` — whether empty
- `clear(): this` — clear geometries

### Style

- `getStyle(): any` / `setStyle(style): this` — get/set the layer style
- `removeStyle(): this` — remove the layer style

Common methods inherited from [Layer](/en/api/layer) also apply.

## Static Methods

- `OverlayLayer.fromJSON(json)` — restore a layer from JSON

## Events

| Event | Fired when |
| --- | --- |
| `addgeo` | geometry added |
| `clear` | layer cleared |
| `setstyle` | style set |
| `removestyle` | style removed |

Common layer events — see [Layer](/en/api/layer).
