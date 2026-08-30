---
title: GeoJSON
---

# GeoJSON

GeoJSON is the GeoJSON utility object of maptalks (not a geometry class). It converts between GeoJSON data and maptalks [Geometry](/en/api/geometry), and provides async paged conversion for large datasets and remote file fetching. It is a namespace object whose methods are all called statically; it cannot be instantiated.

```js
import { GeoJSON } from "maptalks";

const geos = GeoJSON.toGeometry(collection, geo => geo.config("draggable", true));
```

## Methods

- `toGeometry(geoJSON, foreachFn?, filterFn?): Geometry | Geometry[]` — Converts one or more GeoJSON objects to geometry. `geoJSON` can be an object, an array of objects or a GeoJSON string; `foreachFn` is called for each geometry and `filterFn` filters the results. Returns an array of geometries when the input is a FeatureCollection.
- `toGeometryAsync(geoJSON, foreachFn?, countPerTime?, filterFn?): Promise<Geometry[]>` — Async paged conversion that converts at most `countPerTime` (default `2000`) features per frame without blocking the main thread, returning a Promise.
- `fetch(url, countPerTime?): Promise<object>` — Fetches a large GeoJSON file asynchronously via a Worker (default `2000` features per page) to avoid blocking the main thread, resolving a FeatureCollection object.

```js
// Async paged conversion
GeoJSON.toGeometryAsync(geoJSON).then(geos => {
  console.log(geos);
});

// Fetch a large file via a Worker
GeoJSON.fetch("https://abc.com/file.geojson", 2000).then(geojson => {
  console.log(geojson);
});
```
