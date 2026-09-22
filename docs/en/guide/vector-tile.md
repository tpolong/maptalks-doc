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

If the tile data uses the EPSG:4326 coordinate system (instead of the default web mercator), you need to specify `spatialReference` on the map — see the [load maptiler 4326 tiles](/en/examples/#vt/load/load-maptiler-4326) example:

```js
const map = new Map("map", {
  center: [-74.00912099912109, 40.71107610933129],
  zoom: 12,
  spatialReference: "EPSG:4326",
});
```

## Style

The `style` option of `VectorTileLayer` is optional — without it the layer only does basic rendering. With a style set, the layer renders the vector data in the tiles in real time against the style.

The style can be a **plugin-style array**, written directly in code, or stored as a standalone json file and referenced by path. Take the style file used in the [road style example](/en/examples/#vt/visual/road); its structure is:

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

### Rendering MapLibre / Mapbox base layer styles

maptalks vector tile styles and Mapbox / MapLibre style json (sources / layers / sprite / glyphs) are different formats and cannot be used interchangeably, but base layer styles can be converted and then rendered. Take the free [OpenFreeMap](https://openfreemap.org/quick_start/) base maps as an example:

- [Liberty base map example](/en/examples/#vt/load/load-openfreemap-liberty)
- [Dark base map example](/en/examples/#vt/load/load-openfreemap-dark)

The style files of these two examples are converted from the MapLibre styles with `scripts/convert-maplibre-style.mjs`:

```bash
node scripts/convert-maplibre-style.mjs https://tiles.openfreemap.org/styles/liberty \
  docs/public/examples/resources/styles/openfreemap/liberty.json
```

The conversion keeps each layer's visible zoom range (written into `minZoom`/`maxZoom` of `renderPlugin.sceneConfig`), its data filter (converted into a maptalks feature-filter) and the `interpolate`/`step`/`match` expressions that vary with zoom or feature attributes (converted into [function-type](/en/guide/style/function-type)). Text is rendered with system fonts, so no glyph service is needed; raster layers (such as the Natural Earth shaded relief) are out of scope.

#### Sprite icons

The converter writes the style's sprite atlas into `sprites` and maps `icon-image` to `markerFile: "$<prefix><icon name>"` (the prefix is inferred from the style source — `ofm` / `mb` — and `sourceName` registers the atlas in maptalks' `ResourceProxy`):

```js
const style = await fetch("{res}/styles/mapbox/streets-v12.json").then((r) => r.json());
// the CDN build (maptalks-gl 0.124.4) does not read style.sprites automatically yet,
// so register the atlas into ResourceProxy yourself; newer builds do it for you
await Promise.all(style.sprites.map((sprite) => maptalks.ResourceProxy.loadSprite(sprite)));
new VectorTileLayer("vt", { urlTemplate, style }).addTo(map);
```

Two things to keep in mind:

- **Dynamic icon names are expressed as function-types**: `["get","maki"]`, `["concat","road_",["get","ref_length"]]`, `["step",["zoom"],…]` and `["match",["get","class"],…]` become categorical / interval functions, and `markerWidth`/`markerHeight` come from each icon's real size in the sprite. Mapbox expressions are not used here because the current build parses `markerFile` expressions as colors (`Could not parse color from value …`) and fails the whole tile.
- Icon names the converter cannot resolve (`case`/`image`, `concat` with several dynamic parts, …) are skipped and only the label is kept; pattern-only fills without a sprite are skipped too.

Mapbox's official base layer styles can be ported the same way (the `mapbox://` sources and sprite URLs are converted to their https equivalents automatically; the sprite needs the token):

- [Mapbox Streets v12 example](/en/examples/#vt/load/load-mapbox-streets) (`mapbox://styles/mapbox/streets-v12`)
- [Mapbox Dark v11 example](/en/examples/#vt/load/load-mapbox-dark) (`mapbox://styles/mapbox/dark-v11`)

```bash
curl -s "https://api.mapbox.com/styles/v1/mapbox/streets-v12?access_token=$TOKEN" -o streets-v12.json
node scripts/convert-maplibre-style.mjs streets-v12.json \
  docs/public/examples/resources/styles/mapbox/streets-v12.json --token $TOKEN
# the tile template is the first tileset of the style's composite source (the script prints it):
# https://api.mapbox.com/v4/mapbox.mapbox-streets-v8/{z}/{x}/{y}.vector.pbf?access_token=$TOKEN
```

Classic v8 styles such as streets-v12 / outdoors-v12 / light-v11 / dark-v11 / navigation-day-v1 all convert; **Mapbox Standard (`mapbox://styles/mapbox/standard`) does not** — it relies on v3 features such as `slot`, `model` and `raster-array` that the maptalks vector tile style has no equivalent for.

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

- [Vector tile examples](/en/examples/#vt/load/load-mapbox)
- [Road style example](/en/examples/#vt/visual/road)
- [VectorTileLayer API](/en/api/vector-tile-layer)
- [What are vector tiles](/en/guide/vector-tile)
