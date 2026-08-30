---
title: Quick Start
---

# maptalks Quick Start

## What is maptalks

[maptalks](https://maptalks.org) is an open-source Web map engine released under the [MIT license](https://github.com/maptalks/maptalks.js/blob/master/LICENSE), supporting both 2D maps and 3D scenes:

- **2D**: full map rendering and interaction capabilities, including Map, TileLayer, VectorLayer, geometries, controls and more.
- **3D**: WebGL-based rendering with 3D layer capabilities such as vector tiles, gltf models, 3dtiles, video, terrain and spatial analysis.

2D and 3D share the same map container — switching and overlaying is straightforward, and you can freely mix both kinds of layers on the same map.

## Package structure

maptalks is split into multiple npm packages by feature. For everyday development you only need two:

| Package | Description |
| --- | --- |
| [maptalks](https://www.npmjs.com/package/maptalks) | Core package. Contains the map, 2D layers, geometries, UI controls and other basic capabilities. |
| [@maptalks/gl-layers](https://www.npmjs.com/package/@maptalks/gl-layers) | Aggregate package of WebGL layers. Contains the rendering infrastructure for 3D layers (GroupGLLayer) and all 3D layer plugins (vector tiles, gltf, 3dtiles, video, etc.). |

`@maptalks/gl-layers` is the aggregate package of 3D layer plugins. It wraps `@maptalks/gl`, `@maptalks/vt`, `@maptalks/gltf-layer`, `@maptalks/3dtiles` and other plugins internally, so installing this single package gives you all 3D layers without installing or importing other WebGL plugins separately.

## Installation

Install the two packages with npm or pnpm:

```bash
npm install maptalks @maptalks/gl-layers
```

Then import the maptalks stylesheet in your code (bundled with the built core package):

```js
import "maptalks/dist/maptalks.css";
```

## Creating a 2D map

Create a `div` as the map container:

```html
<div id="map" style="width: 800px; height: 600px;"></div>
```

Create a `Map` on the container and add a tile base layer:

```js
import { Map, TileLayer } from "maptalks";
import "maptalks/dist/maptalks.css";

const map = new Map("map", {
  center: [116.397428, 39.90923], // 北京
  zoom: 14,
  baseLayer: new TileLayer("base", {
    urlTemplate:
      "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
    subdomains: ["a", "b", "c", "d"],
    attribution:
      "&copy; <a href='http://osm.org'>OpenStreetMap</a> contributors, &copy; <a href='https://carto.com/'>CARTO</a>",
  }),
});
```

`Map` takes the container element's `id` as its first argument and the map options as the second. `center` is the longitude/latitude of the map center, `zoom` is the zoom level, and `baseLayer` specifies the base layer.

## Creating a 3D scene

The most obvious difference between 3D layers and 2D layers is that 3D layers are managed uniformly by `GroupGLLayer`. `GroupGLLayer` is a WebGL layer container responsible for creating and sharing WebGL resources. 3D layers must first be added to a `GroupGLLayer`, and then the `GroupGLLayer` is added to the map.

```js
import { Map } from "maptalks";
import { GroupGLLayer, VectorTileLayer } from "@maptalks/gl-layers";
import "maptalks/dist/maptalks.css";

const map = new Map("map", {
  center: [-74.00912099912109, 40.71107610933129], // 纽约
  zoom: 16,
  pitch: 56, // 地图倾斜角度，体现三维透视效果
});

// 矢量瓦片图层：加载 mvt 格式的矢量瓦片数据
const vt = new VectorTileLayer("vt", {
  urlTemplate: "https://tiles.maptalks.com/test/{z}/{x}/{y}.mvt",
});

// 三维图层加入 GroupGLLayer，再添加到地图
const groupLayer = new GroupGLLayer("group", [vt]).addTo(map);
```

`VectorTileLayer` is the most commonly used layer in 3D scenes; it loads vector tile data in [mvt](https://github.com/mapbox/vector-tile-spec) format. Its `style` option is optional: once a style is set, the layer renders the vector data in the tiles in real time against the style, and style changes do not require regenerating tiles. Styles use the [plugin-style definition](https://github.com/maptalks/maptalks-vt), composed of `renderPlugin`, `filter` and `symbol`. A style can be an array of styles, a single style object, or a style JSON file (style files also support `background`, `featureStyle`, `sprites` and other configurations). Note that maptalks' vector tile style format differs from mapbox style (`sources`/`layers`/`sprite`/`glyphs`) and is not compatible with mapbox style JSON. See [VectorTileLayer API](/en/api/vector-tile-layer) for details.

For a more realistic 3D scene, you usually also configure `lights` and `sceneConfig` on the `Map`. See the [3D examples](/en/examples/#3d/track/auto-roaming) and [gltf examples](/en/examples/#gltf/gltf-marker/add-marker) for complete configuration examples.

## Next steps

- [Examples](/en/examples/): a large collection of directly runnable and editable 2D/3D examples
- [VectorTileLayer API](/en/api/vector-tile-layer): API reference for the vector tile layer
- [What are vector tiles](/en/guide/vector-tile): introduction to the vector tile concept
- [maptalks old docs](https://maptalks.org): maptalks 1.x API reference; `GroupGLLayer` and other 3D layers heavily inherit its base classes
