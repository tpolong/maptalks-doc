---
title: Data Loading and Serialization
---

# Data loading and serialization

maptalks supports loading external data into the map in several ways, and also lets you serialize maps, layers and geometries to JSON for saving, transfer or copying scenes. This article introduces GeoJSON loading/export, adding geometries to layers, and JSON serialization of layers and maps, following the official examples.

> [!NOTE] Import notes
> All capabilities in this article (`Map`, `TileLayer`, `VectorLayer`, geometry classes, `GeoJSON`, etc.) come from the core package `maptalks`:

```js
import { Map, TileLayer, VectorLayer, Marker, Rectangle, GeoJSON, Geometry, Layer } from "maptalks";
```

## Loading GeoJSON

[GeoJSON](https://geojson.org) is the most common data format in web maps. The static method `GeoJSON.toGeometry(geoJSON)` converts one or more GeoJSON objects into maptalks geometries, which can then be added to a layer like any other geometry:

```js
import { Map, TileLayer, VectorLayer, GeoJSON } from "maptalks";

const map = new Map("map", {
  center: [-0.113049, 51.498568],
  zoom: 14,
  baseLayer: new TileLayer("base", {
    urlTemplate: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
    subdomains: ["a", "b", "c", "d"],
    attribution:
      "&copy; <a href='http://osm.org'>OpenStreetMap</a> contributors, &copy; <a href='https://carto.com/'>CARTO</a>",
  }),
  layers: [new VectorLayer("v")],
});

const json = {
  type: "Feature",
  geometry: {
    type: "Point",
    coordinates: [-0.113049, 51.498568],
  },
  properties: {
    name: "point marker",
  },
};
const marker = GeoJSON.toGeometry(json).addTo(map.getLayer("v"));
```

The argument of `toGeometry` can be:

- a single GeoJSON object (`Feature` / `Geometry`), returning a single geometry;
- a `FeatureCollection` or an array of GeoJSON objects, returning an array of geometries;
- a GeoJSON string (parsed internally).

It also accepts two optional callbacks: `foreachFn` performs an operation on each converted geometry (for example, setting a uniform symbol), and `filterFn` filters out unwanted geometries:

```js
const geometries = GeoJSON.toGeometry(
  featureCollection,
  (geo) => geo.setSymbol({ lineColor: "#fff", lineWidth: 0.5 }),
  (geo) => geo.getType() !== "Polygon"
);
```

For large data sets, use the async version `GeoJSON.toGeometryAsync(geoJSON, foreachFn, countPerTime, filterFn)`, which converts in batches to avoid blocking the UI:

```js
GeoJSON.toGeometryAsync(featureCollection, null, 2000).then((geos) => {
  layer.addGeometry(geos);
});
```

Related example: [GeoJSON to geometry](/en/examples/#basic/json/geojson-to-geometry).

## Exporting geometries to GeoJSON

Every geometry has a `toGeoJSON()` method that exports it as a GeoJSON `Feature`; the geometry's `properties` are exported along with it:

```js
import { Map, TileLayer, VectorLayer, Marker } from "maptalks";

const map = new Map("map", {
  center: [-0.113049, 51.498568],
  zoom: 14,
  baseLayer: new TileLayer("base", {
    urlTemplate: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
    subdomains: ["a", "b", "c", "d"],
    attribution:
      "&copy; <a href='http://osm.org'>OpenStreetMap</a> contributors, &copy; <a href='https://carto.com/'>CARTO</a>",
  }),
  layers: [new VectorLayer("v")],
});

const marker = new Marker([-0.113049, 51.498568], {
  properties: {
    name: "point marker",
  },
}).addTo(map.getLayer("v"));

// {"type":"Feature","geometry":{"type":"Point","coordinates":[...]},"properties":{"name":"point marker"}}
const geojson = marker.toGeoJSON();
```

Related example: [Geometry to GeoJSON](/en/examples/#basic/json/geometry-to-geojson).

## Adding geometries to a layer

When creating a `VectorLayer`, you can pass an array of geometries as its second argument, then keep adding geometries with `addGeometry`:

```js
const c = [-0.113049, 51.498568];

// pass geometries at construction time
const layer = new VectorLayer("v", [new Marker(c), new Rectangle(c, 1000, 800)]);

// append geometries: a single one, an array, or multiple arguments
layer.addGeometry(new Marker(c));
layer.addGeometry([new Marker(c), new Rectangle(c, 1000, 800)]);
layer.addGeometry(marker1, marker2);

// a GeoJSON FeatureCollection is converted to geometries and added automatically
layer.addGeometry(featureCollection);

// with fitView set to true, the map view is automatically adjusted to show the added geometries
layer.addGeometry(new Marker(c), true);
```

The second argument `fitView` of `addGeometry` can also be an object to configure the view animation (`easing`, `duration`, etc.). Related example: [Geometry JSON](/en/examples/#basic/json/geometry-json).

## Layer JSON serialization

A layer (with its geometries) can be serialized to JSON with `toJSON()` and deserialized into a new layer with `Layer.fromJSON(json)`. The official example uses this to copy a layer to another map:

```js
const c = [-0.113049, 51.498568];
const map = new Map("map", {
  center: c,
  zoom: 13,
  baseLayer: new TileLayer("base", {
    urlTemplate: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
    subdomains: ["a", "b", "c", "d"],
  }),
  layers: [new VectorLayer("v0", [new Marker(c)])],
});

const map1 = new Map("map1", {
  center: c,
  zoom: 13,
  baseLayer: new TileLayer("base1", {
    urlTemplate: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
    subdomains: ["a", "b", "c", "d"],
  }),
});

// copy the layer via JSON
Layer.fromJSON(map.getLayer("v0").toJSON()).addTo(map1);
```

The result of `toJSON()` contains the layer's type, id, options and the geometries array. `VectorLayer.toJSON(options)` can also pass arguments through `options.geometries` to each geometry's `toJSON`. Related example: [Layer JSON](/en/examples/#basic/json/layer-json).

## Geometry JSON serialization

A single geometry also supports `toJSON()` / `Geometry.fromJSON(json)`. `Geometry.fromJSON` also accepts an array of geometry JSONs and returns an array of geometries:

```js
const rect = new Rectangle(c, 1000, 800);
const newLayer = new VectorLayer("v").addTo(map1);

// copy the geometry via JSON
Geometry.fromJSON(rect.toJSON()).addTo(newLayer);
```

Related example: [Geometry JSON](/en/examples/#basic/json/geometry-json).

## Map JSON serialization

An entire map can be serialized with `map.toJSON()`, including the map options (center, zoom, bearing, pitch), the `baseLayer` and all layers:

```js
const mapJSON = map.toJSON();
```

`toJSON(options)` supports the following options to control the export:

- `baseLayer`: whether to export the base layer;
- `layers`: `true` to export all layers, or an array of `{ id, options }` to export specific layers;
- `clipExtent`: only export geometries intersecting the given extent (`true` means the map's current view extent).

Restore a map from JSON with `Map.fromJSON(container, mapJSON)` (the third argument `options` controls whether the base layer and layers are imported):

```js
import { Map } from "maptalks";

const mapJSON = {
  version: "1.0",
  options: {
    center: { x: -0.113049, y: 51.49856800000001 },
    zoom: 13,
  },
  baseLayer: {
    type: "TileLayer",
    id: "base",
    options: {
      urlTemplate: "https://{s}.tile.osm.org/{z}/{x}/{y}.png",
      subdomains: ["a", "b", "c"],
    },
  },
  layers: [
    {
      type: "VectorLayer",
      id: "v",
      geometries: [
        {
          feature: {
            type: "Feature",
            geometry: { type: "Point", coordinates: [-0.113049, 51.498568] },
          },
        },
      ],
    },
  ],
};

Map.fromJSON("map", mapJSON);
```

Related examples: [Map to JSON](/en/examples/#basic/json/map-to-json), [JSON to map](/en/examples/#basic/json/json-to-map).

## Related APIs

- [GeoJSON](https://maptalks.org/maptalks.js/api/0.x/GeoJSON.html) · [Geometry](https://maptalks.org/maptalks.js/api/0.x/Geometry.html) · [VectorLayer](https://maptalks.org/maptalks.js/api/0.x/VectorLayer.html)
- [Layer](https://maptalks.org/maptalks.js/api/0.x/Layer.html) · [Map](https://maptalks.org/maptalks.js/api/0.x/Map.html)

> This document has been cross-checked against the maptalks 2026 source (maptalks.js packages/maptalks core package)
