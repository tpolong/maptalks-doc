---
title: WMSTileLayer
---

# WMSTileLayer

WMSTileLayer loads WMS (Web Map Service) services as tile layers on the map, extending [TileLayer](/en/api/tile-layer). It is implemented based on Leaflet's TileLayer.WMS, with request params configured through `layers` (required), `styles`, `format`, `transparent`, `version`, `crs`, etc.

```js
import { Map, WMSTileLayer } from "maptalks";

const map = new Map("map", { center: [0, 0], zoom: 2 });

const layer = new WMSTileLayer("wms", {
  urlTemplate: "https://demo.boundlessgeo.com/geoserver/ows",
  crs: "EPSG:3857",
  layers: "ne:ne",
  styles: "",
  version: "1.3.0",
  format: "image/png",
  transparent: true,
  uppercase: true,
}).addTo(map);
```

## Constructor

```js
new WMSTileLayer(id, options)
```

Parameters:

* **id** `String` layer id.
* **options** `Object` WMS options, see below.

## options

| Option | Type | Description | Default |
| --- | --- | --- | --- |
| `service` | String | WMS service type | `'WMS'` |
| `layers` | String | comma-separated WMS layers to show (required) | `''` |
| `styles` | String | comma-separated WMS styles | `''` |
| `format` | String | WMS image format (use `'image/png'` for transparent layers) | `'image/jpeg'` |
| `transparent` | Boolean | whether the tile is transparent | `false` |
| `version` | String | WMS service version | `'1.1.1'` |
| `crs` | String | coordinate reference system for requests, defaults to the map CRS | `null` |
| `uppercase` | Boolean | whether WMS request param names are uppercased | `false` |
| `detectRetina` | Boolean | request higher-resolution tiles on retina displays | `false` |
| `width` | Number | WMS request image width (usually from tileSize) | — |
| `height` | Number | WMS request image height (usually from tileSize) | — |

Other tile options (`urlTemplate`, `tileSize`, `spatialReference`, etc.) — see [TileLayer](/en/api/tile-layer).

## Static Methods

- `WMSTileLayer.fromJSON(layerJSON): WMSTileLayer | null` — restore a layer from JSON

## Member Methods

- `getTileUrl(x, y, z): string` — get the WMS request URL for tile `(x,y,z)`

## Events

Tile events and common layer events — see [TileLayer](/en/api/tile-layer) / [Layer](/en/api/layer).
