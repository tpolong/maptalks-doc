---
title: GroupTileLayer
---

# GroupTileLayer

GroupTileLayer groups several [TileLayer](/en/api/tile-layer) instances into one display, extending [TileLayer](/en/api/tile-layer). It lets multiple tile layers share a single WebGL context, avoiding the browser's "too many active WebGL contexts" limit and performing better than adding separate TileLayers.

```js
import { Map, GroupTileLayer, TileLayer } from "maptalks";

const map = new Map("map", { center: [0, 0], zoom: 2 });

const group = new GroupTileLayer("group-tiles", [
  new TileLayer("base", { urlTemplate: "https://{s}.example.com/base/{z}/{x}/{y}.png" }),
  new TileLayer("labels", { urlTemplate: "https://{s}.example.com/labels/{z}/{x}/{y}.png" }),
]).addTo(map);
```

## Constructor

```js
new GroupTileLayer(id, layers, options?)
```

Parameters:

* **id** `String|Number` layer id.
* **layers** `TileLayer[]` the TileLayers to add.
* **options** `Object` layer options (optional, see [TileLayer](/en/api/tile-layer)).

## options

| Option | Type | Description | Default |
| --- | --- | --- | --- |
| `maxCacheSize` | Number | max number of cached tiles | `1024` |

Other tile options (`urlTemplate`, `tileSize`, `spatialReference`, etc.) — see [TileLayer](/en/api/tile-layer).

## Static Methods

- `GroupTileLayer.fromJSON(layerJSON): GroupTileLayer | null` — restore a layer from JSON

## Member Methods

- `getLayers(): TileLayer[]` — get the child layer list
- `addLayer(tileLayers: TileLayer[] | TileLayer): this` — add child layers
- `removeLayer(tileLayers: TileLayer[] | TileLayer): this` — remove child layers
- `clearLayers(): this` — clear the child layers
- `getLayer(id): TileLayer` — get a child layer (equivalent to getChildLayer)
- `getChildLayer(id): TileLayer` — look up a child layer recursively
- `toJSON(): Object` — export the layer JSON
- `getTiles(z, parentLayer): TilesType` — aggregate child-layer tiles by zoom

## Events

Tile events and common layer events — see [TileLayer](/en/api/tile-layer) / [Layer](/en/api/layer).
