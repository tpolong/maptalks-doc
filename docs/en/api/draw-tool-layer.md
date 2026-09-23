---
title: DrawToolLayer
---

# DrawToolLayer

DrawToolLayer is a layer that hosts drawing results, extending [OverlayLayer](/en/api/overlay-layer). It does not render itself; instead it dispatches geometries by type to its internal marker/line/polygon child layers and always keeps itself hidden. Before use you must register the layer class for each type via `setLayerClass()`.

```js
import { Map, DrawToolLayer, MarkerLayer, LineStringLayer, PolygonLayer } from "maptalks";

const map = new Map("map", { center: [0, 0], zoom: 2 });

DrawToolLayer.setLayerClass(MarkerLayer, LineStringLayer, PolygonLayer);

const layer = new DrawToolLayer("draw-tool").addTo(map);
```

## Constructor

```js
new DrawToolLayer(id, geometries?, options?)
```

Parameters:

* **id** `String` layer id.
* **geometries** `Geometry[]` (optional) geometries to add.
* **options** `Object` layer options (optional).

## options

| Option | Type | Description | Default |
| --- | --- | --- | --- |
| `renderer` | String | renderer (DrawToolLayer has no renderer) | `null` |
| `depthFunc` | String | depth function | `'always'` |
| `sceneConfig` | Object | scene config, set to `{ depthFunc }` during construction | `null` |
| `enableAltitude` | Boolean | whether altitude is enabled | — |
| `enableSimplify` | Boolean | whether simplification is enabled | — |

## Static Methods

- `DrawToolLayer.setLayerClass(markerLayerClass, lineLayerClass, polygonLayerClass): void` — set the layer class for each geometry type

## Member Methods

- `addGeometry(geometries: Geometry | Geometry[]): this` — add geometries and dispatch them to child layers by type
- `removeGeometry(geometries: Geometry | Geometry[]): void` — remove geometries
- `getGeometryById(id): Geometry` — look up a geometry by id in the child layers
- `clear(): this` — clear
- `bringToFront(): this` — bring the child layers to front

<!-- api-gen:start -->
### Methods Inherited from OverlayLayer

The following methods are provided by the parent class [OverlayLayer](/en/api/overlay-layer) and are available on instances of this class.

<!--@include: ./includes/api/overlay-layer-methods.md-->

### Methods Inherited from Layer

The following methods are provided by the parent class [Layer](/en/api/layer) and are available on instances of this class.

<!--@include: ./includes/api/layer-methods.md-->

### Mixed-in Methods

This class gains the following method groups from mixins; see the linked pages for details: [JSONAble](/en/api/json-able)（`getJSONType`…）；[Eventable](/en/api/eventable)（`on`、`addEventListener`、`once`、`off`、`removeEventListener`、`listens`、`getListeningEvents`、`copyEventListeners`…）；[Renderable](/en/api/renderable).
<!-- api-gen:end -->

## Events

Common layer events (`show`/`hide`, `setopacity`, `add`/`remove`, etc.) — see [OverlayLayer](/en/api/overlay-layer) / [Layer](/en/api/layer).

<!-- api-gen:start -->
### Events Inherited from OverlayLayer

<!--@include: ./includes/api/overlay-layer-events.md-->

### Events Inherited from Layer

<!--@include: ./includes/api/layer-events.md-->
<!-- api-gen:end -->
