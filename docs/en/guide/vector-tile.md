---
title: Vector Tiles
---

# Vector tile layer (VectorTileLayer)

The vector tile layer (`VectorTileLayer`) is the most commonly used layer in 3D scenes: it loads vector tile data in [mvt](https://github.com/mapbox/vector-tile-spec) format and renders it in real time on the browser side against a style.

Compared with traditional raster tile base layers, vector tiles have the following features:

- **Separation of data and style**: tile data contains only vector geometry and attributes, with no style information. The final appearance of the base layer is computed in real time by the rendering engine from the style, so style changes do not require regenerating tiles.
- **Sharper in 3D**: in 3D scenes the map is often rotated and tilted, which makes raster tiles visibly stretched and blurred, while vector tiles are always rendered as real-time vectors, keeping text and lines crisp.
- **3D elements supported**: vector data can be directly used for 3D construction — for example, extruding building polygons into 3D models by their height attribute.

For a more detailed introduction, see [What are vector tiles](/en/guide/vector-tile).

## Loading vector tiles

When creating a `VectorTileLayer`, specify the tile service URL template with `urlTemplate`:

```js
import { Map } from "maptalks";
import { GroupGLLayer, VectorTileLayer } from "@maptalks/gl-layers";

const map = new Map("map", {
  center: [-74.00912099912109, 40.71107610933129],
  zoom: 16,
  pitch: 56,
});

const vt = new VectorTileLayer("vt", {
  urlTemplate: "https://tiles.maptalks.com/test/{z}/{x}/{y}.mvt",
});

const groupLayer = new GroupGLLayer("group", [vt]).addTo(map);
```

`{z}`, `{x}`, `{y}` are replaced with the tile zoom level and tile row/column numbers. Other tile services with coordinate system parameters can also be used, e.g. maptiler vector tiles:

```js
const vt = new VectorTileLayer("vt", {
  urlTemplate:
    "https://api.maptiler.com/tiles/v3/{z}/{x}/{y}.pbf?key=YOUR_MAPTILER_KEY",
});
```

If the tile data uses the EPSG:4326 coordinate system (instead of the default web mercator), you need to specify `spatialReference` on the map — see the [load maptiler 4326 tiles](/en/examples/#vector/vtlayer/load-maptiler-4326) example:

```js
const map = new Map("map", {
  center: [-74.00912099912109, 40.71107610933129],
  zoom: 12,
  spatialReference: "EPSG:4326",
});
```

## Style

The `style` option of `VectorTileLayer` is optional — without it the layer only does basic rendering. With a style set, the layer renders the vector data in the tiles in real time against the style.

The style can be a **plugin-style array**, written directly in code, or stored as a standalone json file and referenced by path. Take the style file used in the [road style example](/en/examples/#vector/vt-visual/road); its structure is:

```json
[
  {
    "filter": ["all", ["==", "$layer", "water"], ["==", "$type", "Polygon"]],
    "renderPlugin": {
      "type": "water",
      "dataConfig": { "type": "fill" }
    },
    "symbol": {
      "waterBaseColor": [0.72, 0.82, 1, 1],
      "animation": true,
      "waterSpeed": 1
    }
  },
  {
    "filter": ["all", ["==", "$layer", "building"], ["==", "$type", "Polygon"]],
    "renderPlugin": {
      "type": "lit",
      "dataConfig": {
        "type": "3d-extrusion",
        "altitudeProperty": "height",
        "altitudeScale": 1,
        "defaultAltitude": 10,
        "top": true,
        "side": true
      }
    },
    "symbol": {
      "material": {
        "baseColorFactor": [1, 1, 1, 1],
        "roughnessFactor": 1,
        "metallicFactor": 0
      }
    }
  }
]
```

Each item in the style array consists of three parts:

- **`filter`**: the data filter condition that determines which data this style applies to. Supports `$layer` (the layer name in the tile source data), `$type` (geometry type) and the attribute fields of the data.
- **`renderPlugin`**: the render plugin that determines how the data is rendered. `type` is the plugin name (e.g. `fill` for polygon fill, `line` for lines, `water` for water surfaces, `lit` for lit rendering), and `dataConfig` is the data configuration whose `type` determines the rendered data form: `fill` for polygons, `line` for lines, and `3d-extrusion` to extrude polygons into 3D volumes by a height attribute.
- **`symbol`**: the concrete style parameters, e.g. the fill color `polygonFill`, line width `lineWidth`, material `material`, etc. `symbol` parameters differ between render plugins.

The render plugins and parameters are very rich — see the full definitions in the [VectorTileLayer API](/en/api/vector-tile-layer). You can also use [MapTalks IDE](https://studio.maptalks.com) for WYSIWYG style customization.

### Style varying with zoom level

Numeric parameters in `symbol` support interpolation by zoom level. For example, the road line width increases from 2 to 200 as the zoom level changes:

```json
{
  "symbol": {
    "lineColor": [1, 1, 1, 1],
    "lineWidth": {
      "type": "exponential",
      "default": 2,
      "stops": [
        [14, 2],
        [15, 4],
        [16, 10],
        [17, 20],
        [18, 50],
        [20.7, 100],
        [22, 200]
      ]
    }
  }
}
```

## Vector tiles in 3D scenes

Vector tiles join a 3D scene through `GroupGLLayer`. Because the vector data in the tiles is rendered in real time on the browser side, it can be seamlessly overlaid with other 3D layers (gltf models, 3dtiles, etc.), and combined with scene configuration (lighting, environment, shadow) for more realistic 3D results. A complete example:

```js
import { Map } from "maptalks";
import { GroupGLLayer, VectorTileLayer } from "@maptalks/gl-layers";
import "maptalks/dist/maptalks.css";

const map = new Map("map", {
  center: [-74.01493663, 40.705559],
  zoom: 17.8,
  pitch: 43.2,
  bearing: 57.1,
  lights: {
    directional: { direction: [0.5, 0, -1], color: [1, 1, 1] },
    ambient: { color: [1, 1, 1] },
  },
});

const vt = new VectorTileLayer("vt", {
  urlTemplate: "https://tiles.maptalks.com/test/{z}/{x}/{y}.mvt",
  style: [
    /* 样式数组，见上文 */
  ],
});

const groupLayer = new GroupGLLayer("gl", [vt], {
  sceneConfig: {
    environment: { enable: true, mode: 1, level: 0, brightness: 0.489 },
    ground: {
      enable: true,
      renderPlugin: { type: "fill" },
      symbol: { polygonFill: [0.8, 0.8, 0.8, 1] },
    },
  },
}).addTo(map);
```

## Reference

- [Vector tile examples](/en/examples/#vector/vtlayer/load-mapbox)
- [Road style example](/en/examples/#vector/vt-visual/road)
- [VectorTileLayer API](/en/api/vector-tile-layer)
- [What are vector tiles](/en/guide/vector-tile)
