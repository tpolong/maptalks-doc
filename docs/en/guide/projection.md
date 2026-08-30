---
title: Coordinate Systems and Projections
---

# Coordinate systems and projections

By default, a maptalks map uses the Web Mercator projection (EPSG:3857, the tile coordinate system used by Google/OSM). Through the `spatialReference` option of `Map`, you can switch to other built-in coordinate systems (such as EPSG:4326), or define custom projections with third-party libraries like proj4js and d3-proj.

> [!NOTE] Import notes
> All capabilities in this article (`Map`, `TileLayer`, `Coordinate`, `GeoJSON`, `VectorLayer`, etc.) come from the core package `maptalks`; proj4js and d3 are third-party libraries that must be installed separately:

```js
import { Map, TileLayer, Coordinate, GeoJSON, VectorLayer } from "maptalks";
import * as proj4 from "proj4"; // used for custom projections
```

## The spatialReference option

The `spatialReference` option of `Map` defines the map's spatial reference, which consists of three parts:

1. **`projection`**: the projection that converts between geographic (lng/lat) and planar coordinates;
2. **`resolutions`**: zoom levels and their resolutions (meters/pixel);
3. **`fullExtent`**: the map's full extent.

When not set, it defaults to `EPSG:3857`. The following presets are built in:

| Preset | Description |
| --- | --- |
| `EPSG:3857` | Default, Web Mercator projection, used by Google/OSM and most online tiles |
| `EPSG:4326` | WGS84 lng/lat coordinates, commonly used by Chinese tile services such as Tianditu |
| `EPSG:4490` | CGCS2000 geodetic coordinate system, same resolutions as 4326 |
| `BAIDU` | Baidu Map projection |
| `IDENTITY` | Planar Cartesian coordinates, x/y mapped directly; suited for indoor maps, game maps and other flat scenes |
| `PRESET-VT-3857` / `PRESET-VT-4326` | 3857 / 4326 presets for vector tiles (with `PRESET-3857-512`, `PRESET-4326-512`, `PRESET-4490-512` as 512-resolution aliases) |

The simplest usage is to specify only the projection name; `resolutions` and `fullExtent` are then taken from the matching preset automatically:

```js
const map = new Map("map", {
  center: [105.08052356963802, 36.04231948670001],
  zoom: 4,
  spatialReference: {
    projection: "EPSG:4326",
  },
  baseLayer: new TileLayer("base", {
    urlTemplate: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
    subdomains: ["a", "b", "c", "d"],
  }),
});
```

## EPSG:4326 example

With EPSG:4326, the tile coordinate system becomes a lng/lat grid. Services such as Tianditu also require a matching `tileSystem` setting. Here is the official example ([epsg4326](/en/examples/#basic/tilelayer-projection/epsg4326)):

```js
import { Map, TileLayer } from "maptalks";

const map = new Map("map", {
  center: [105.08052356963802, 36.04231948670001],
  zoom: 4,
  minZoom: 1,
  maxZoom: 18,
  spatialReference: {
    projection: "EPSG:4326",
  },
  baseLayer: new TileLayer("base", {
    tileSystem: [1, -1, -180, 90],
    urlTemplate:
      "https://t{s}.tianditu.gov.cn/vec_c/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=vec&STYLE=default&TILEMATRIXSET=c&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=YOUR_TK",
    subdomains: ["1", "2", "3", "4", "5"],
    attribution: "&copy; Tianditu",
  }),
});
```

Here `tileSystem: [1, -1, -180, 90]` means the tile origin is at top-left lng/lat `(-180, 90)`, with x growing to the right and y growing downward — the typical configuration for a lng/lat grid.

## Custom projection with proj4js

When the built-in presets are not enough, you can pass a custom projection object. It must provide `project` (lng/lat to planar coordinates) and `unproject` (planar coordinates to lng/lat), both returning a `Coordinate`; `measure` declares how distance/area is measured (use `"identity"` for planar Cartesian coordinates). The official example ([proj4js](/en/examples/#basic/tilelayer-projection/proj4js)) defines a custom projection equivalent to EPSG:3857 with proj4:

```js
import { Coordinate, Map, TileLayer } from "maptalks";
import * as proj4 from "proj4";

// proj definition of EPSG:3857
const proj3857 =
  "+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext  +no_defs";
const proj = proj4("WGS84", proj3857);

// custom projection object
const projection = {
  code: "proj4-merc", // code of the projection
  project: function (c) {
    // from wgs84 to EPSG3857
    const pc = proj.forward(c.toArray());
    return new Coordinate(pc);
  },
  unproject: function (pc) {
    // from EPSG3857 back to wgs84
    const c = proj.inverse(pc.toArray());
    return new Coordinate(c);
  },
  // tell the projection how to measure
  // for planar Cartesian coordinates change this to: measure: 'identity'
  measure: "EPSG:4326",
};

const map = new Map("map", {
  center: [-0.113049, 51.498568],
  zoom: 13,
  spatialReference: {
    projection: projection, // the projection defined by proj4js
    resolutions: [
      // the map's zoom levels and resolutions
      156543.03392804097, 78271.51696402048, 9135.75848201024,
      19567.87924100512, 9783.93962050256, 4891.96981025128, 2445.98490512564,
      1222.99245256282, 611.49622628141, 305.748113140705, 152.8740565703525,
      76.43702828517625, 38.21851414258813, 19.109257071294063,
      9.554628535647032, 4.777314267823516, 2.388657133911758,
      1.194328566955879, 0.5971642834779395, 0.29858214173896974,
    ],
    fullExtent: {
      // the map's full extent
      top: 6378137 * Math.PI,
      left: -6378137 * Math.PI,
      bottom: -6378137 * Math.PI,
      right: 6378137 * Math.PI,
    },
  },
  baseLayer: new TileLayer("base", {
    urlTemplate: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
    subdomains: ["a", "b", "c", "d"],
    attribution: "&copy; OpenStreetMap contributors, &copy; CARTO",
  }),
});
```

A custom projection usually needs `resolutions` and `fullExtent` to be provided as well (they cannot be inferred from the built-in presets).

## Custom projection with d3-proj

The projection object does not have to come from proj4js — any object providing `project` / `unproject` works. The official example ([d3-proj](/en/examples/#basic/tilelayer-projection/d3-proj)) wraps D3's orthographic projection `d3.geoOrthographic()` directly:

```js
import { Coordinate, Map, GeoJSON, VectorLayer } from "maptalks";
import * as d3 from "d3-geo";

// D3's Versor Dragging projection
const projection = d3.geoOrthographic().scale(148).precision(0.1);

// convert to a maptalks projection object
const proj = {
  project: function (c) {
    const pc = projection([c.x, c.y]);
    return new Coordinate(pc[0], pc[1]);
  },
  unproject: function (pc) {
    const c = projection.invert([pc.x, pc.y]);
    if (!c || isNaN(c[0]) || isNaN(c[1])) {
      return null;
    }
    return new Coordinate(c);
  },
};

const min = proj.project(new Coordinate(-180, -90)),
  max = proj.project(new Coordinate(180, 90)),
  fullExtent = {
    top: max.y,
    left: min.x,
    right: max.x,
    bottom: min.y,
  };

// initialize the map with the custom projection
const map = new Map("map", {
  center: [0, 0],
  centerCross: true,
  zoom: 2,
  spatialReference: {
    projection: proj,
    resolutions: (function () {
      const resolutions = [];
      for (let i = 0; i < 10; i++) {
        resolutions[i] = 4 / Math.pow(2, i);
      }
      return resolutions;
    })(),
    fullExtent: fullExtent,
  },
});
```

Note that `unproject` returns `null` when the projection is not invertible; maptalks skips those coordinates.

## Other built-in projections: Baidu and planar coordinates

The built-in `BAIDU` preset is used for loading Baidu Map tiles. Baidu tiles define resolutions differently from 3857; in `spatialReference` you only need to declare the projection name, and the resolutions and full extent are taken from the Baidu preset:

```js
const map = new Map("map-bd09", {
  center: [105.08052356963802, 36.04231948670001],
  zoom: 4,
  minZoom: 1,
  maxZoom: 19,
  spatialReference: {
    projection: "baidu",
  },
  baseLayer: new TileLayer("base", {
    urlTemplate:
      "http://online{s}.map.bdimg.com/tile/?qt=tile&x={x}&y={y}&z={z}&styles=pl",
    subdomains: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    attribution: '&copy; <a target="_blank" href="http://map.baidu.com">Baidu</a>',
  }),
});
```

`IDENTITY` (planar Cartesian coordinates) suits flat scenes such as indoor maps and CAD drawings: coordinates use planar x/y directly, and distance is measured in planar units.

## Getting and changing the spatial reference

After creating the map, you can get and update the spatial reference with these methods:

```js
// get the spatial reference object
const spatialReference = map.getSpatialReference();
// get the projection object
const projection = map.getProjection();

// switch to a built-in preset (accepts a preset name or a config object)
map.setSpatialReference("EPSG:4326");
map.setSpatialReference({ projection: "EPSG:3857" });

// equivalent form
map.config("spatialReference", { projection: "EPSG:4326" });
```

`setSpatialReference` accepts a preset name string, a `{ projection, resolutions, fullExtent }` config object, or a config object containing a custom projection. Changing the spatial reference fires the `spatialreferencechange` event.

## Related examples

- [EPSG:4326 Tianditu](/en/examples/#basic/tilelayer-projection/epsg4326) · [proj4js custom projection](/en/examples/#basic/tilelayer-projection/proj4js) · [d3 custom projection](/en/examples/#basic/tilelayer-projection/d3-proj)
- [Different projections](/en/examples/#basic/tilelayer-projection/projection) · [Baidu tiles](/en/examples/#basic/tilelayer-projection/baidu) · [Identity](/en/examples/#basic/tilelayer-projection/identity)

## Related APIs

- [Map](https://maptalks.org/maptalks.js/api/0.x/Map.html) · [Coordinate](https://maptalks.org/maptalks.js/api/0.x/Coordinate.html) · [TileLayer](https://maptalks.org/maptalks.js/api/0.x/TileLayer.html)

> This document has been cross-checked against the maptalks 2026 source (maptalks.js packages/maptalks core package)
