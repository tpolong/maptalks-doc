---
title: TileLayer
---

# TileLayer

TileLayer is the base layer for displaying tile map services (Google Maps, OSM, AMap, etc.), extending [Layer](/en/api/layer). It encapsulates tile URL template, subdomains, spatial reference, tile size, offset, world repeat, caching and load animation as options and a set of calculation/control methods.

```js
import { Map, TileLayer } from "maptalks";

const map = new Map("map", { center: [0, 0], zoom: 2 });
const layer = new TileLayer("base", {
  urlTemplate: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
  subdomains: ["a", "b", "c", "d"],
}).addTo(map);
```

## Constructor

```js
new TileLayer(id, options)
```

Parameters:

* **id** `String` layer id.
* **options** `Object` layer options (optional).

## Options

### Tile-specific

| Option | Type | Description | Default |
| --- | --- | --- | --- |
| `urlTemplate` | String\|Function | URL template, supports `{x}{y}{z}{s}`; or a function `(x,y,z,domain)=>url` | `null` |
| `subdomains` | `String[]` | subdomains replacing `{s}` | `null` |
| `spatialReference` | Object | tile layer spatial reference, defaults to map's | `null` |
| `tileSize` | Number\|`[n,n]` | tile image size | `[256, 256]` |
| `offset` | Number[]\|Function | overall tile offset | `[0,0]` |
| `tileSystem` | `[sx,sy,ox,oy]`\|String | tile system or preset name | `null` |
| `maxAvailableZoom` | Number | max available tile zoom; reused beyond it | `null` |
| `repeatWorld` | Boolean | repeat tiles beyond the world | `true` |
| `background` | Boolean | draw background after interaction | `true` |
| `fadeAnimation` | Boolean | tile fade-in animation | `true` |
| `fadeDuration` | Number | fade-in duration (ms) | `167` |
| `crossOrigin` | String | tile image crossOrigin | `null` |
| `errorUrl` | String | replacement image on load error | `null` |
| `token` | String | token replacing `{token}` | `null` |
| `customTags` | Object | custom tag values in template | `null` |
| `maxCacheSize` | Number | max cached tiles | `256` |
| `zoomOffset` | Number | offset between map and tile zoom | `0` |
| `cascadeTiles` | Boolean | draw cascading tiles across zooms | `true` |
| `renderer` | String | renderer type (gl/canvas) | `webgl?'gl':'canvas'` |
| `debug` | Boolean | draw tile borders and coordinates | `false` |

### Inherited from Layer

`attribution`, `minZoom`, `maxZoom`, `visible`, `opacity`, `zIndex`, `hitDetect`, etc. — see [Layer](/en/api/layer).

## Member Methods

### Tile URL & size

- `getTileUrl(x, y, z): string` — get the URL of tile `(x,y,z)`
- `getTileSize(id?): Size` — get the tile size

### Tile calculation

- `getTiles(z, parentLayer): TilesType` — get the tile descriptions at a zoom level
- `getTileId(x, y, zoom, id): string` — get the unique tile id

### Zoom & spatial reference

- `getSpatialReference(): SpatialReference` — get the tile spatial reference
- `getMinZoom(): number` / `getMaxZoom(): number` — get min/max zoom
- `getMaxAvailableZoom(): number` — get the max available zoom

### Layer control

- `forceReload(): this` — force reload the layer
- `clear(): this` — clear the layer
- `toJSON(): Object` — export layer JSON

## Static Methods

- `TileLayer.fromJSON(layerJSON): TileLayer | null` — restore a layer from JSON

## Events

| Event | Fired when |
| --- | --- |
| `tileload` | tile loaded |
| `tileerror` | tile load error |
| `tiledelete` | tile deleted |
| `forcereloadstart` / `forcereloadend` | force reload |
| `clear` | layer cleared |

Common layer events (`idchange`, `setopacity`, `show`/`hide`, `layerload`, `add`/`remove`, etc.) — see [Layer](/en/api/layer).

## TileSystem

`TileSystem` is a tile-system utility class describing the tile X/Y axis direction and the world projection origin. Pass a preset name or `[sx, sy, ox, oy]` to `options.tileSystem`.

Built-in presets:

| Constant | Meaning |
| --- | --- |
| `web-mercator` | Web Mercator (google/bing/AMap) |
| `tms-global-mercator` | TMS / mapbox mbtiles (EPSG:3857) |
| `global-geodetic` | EPSG:4326 global geodetic grid |
| `tms-global-geodetic` | TMS / OSGEO (EPSG:4326) |
| `baidu` | Baidu Maps |

```js
layer.on("tileload", (e) => {
  console.log("tile loaded", e.tileInfo);
});
```
