---
title: Spatial Analysis
---

# Spatial analysis

maptalks' spatial analysis is a set of WebGL-based analysis layers/analysis objects that work on GroupGLLayer 3D scenes: they perform real-time cut, excavation, flood, height limit, line-of-sight, skyline and viewshed analysis on gltf models, 3dtiles, vector tiles and other layers in the scene, commonly used in urban planning, construction engineering, emergency management and military simulation scenarios.

Analysis objects are mounted to a GroupGLLayer via `addTo(groupGLLayer)`. Internally they wait for the layer's `contextinit` event to obtain the renderer, then set up the rendering pass; the analysis results are updated in real time along with the scene.

Most analysis classes inherit from the `Analysis` base class, with the exception of `ExcavateAnalysis` — it inherits `ExtrudePolygonLayer` from `@maptalks/vt` (see [Excavate](#excavate) below).

## Common usage

All analysis classes are imported from `@maptalks/gl-layers`:

```js
import { Map } from "maptalks";
import {
  CutAnalysis,
  CrossCutAnalysis,
  ExcavateAnalysis,
  FloodAnalysis,
  HeightLimitAnalysis,
  InSightAnalysis,
  SkylineAnalysis,
  ViewshedAnalysis
} from "@maptalks/gl-layers";
```

The `Analysis` base class provides unified lifecycle management for each analysis task. Common methods:

| Method | Description |
| --- | --- |
| `addTo(layer)` | add to a GroupGLLayer (analysis only works on GroupGLLayer; it cannot be added to other WebGL layers) |
| `enable()` / `disable()` | enable / disable the analysis |
| `isEnable()` | query whether the analysis is enabled |
| `update(name, value)` | update an option and trigger redraw (e.g. `update("waterHeight", 80)`) |
| `remove()` | remove the analysis from the layer and release the pass / FBO / mesh |
| `setExcludeLayers(layerIds)` / `getExcludeLayers()` | set / get the layer ids ignored by the analysis (these layers do not participate) |
| `exportAnalysisMap(meshes)` | export the analysis result map (RGBA pixel data) |

Subclasses at a glance: `CutAnalysis`, `CrossCutAnalysis`, `FloodAnalysis`, `HeightLimitAnalysis` (inherits FloodAnalysis), `InSightAnalysis`, `SkylineAnalysis`, `ViewshedAnalysis` all inherit `Analysis`; `ExcavateAnalysis` inherits `ExtrudePolygonLayer`.

## Cut

Use a cutting region defined by `position` / `rotation` / `scale` to cut the model, hiding the parts outside the region — commonly used to view building interiors or geological sections.

| Option | Default | Description |
| --- | --- | --- |
| `position` | — | position of the cutting region (array of longitude/latitude coordinates) |
| `rotation` | `[0, 0, 0]` | Euler angles of the cutting region |
| `scale` | `[1, 1, 1]` | scale of the cutting region |

```js
import { Map } from "maptalks";
import { GroupGLLayer, GLTFLayer, GLTFMarker, CutAnalysis } from "@maptalks/gl-layers";

const map = new Map("map", {
  center: [108.9605239272878, 34.21955775963946],
  zoom: 15,
  pitch: 70,
  bearing: 135
});
const center = map.getCenter();
const gltfLayer = new GLTFLayer("gltf");
new GLTFMarker(center, {
  symbol: {
    url: "{res}/gltf/koncepcja/scene.gltf",
    scaleX: 30,
    scaleY: 30,
    scaleZ: 30
  }
}).addTo(gltfLayer);
const groupGLLayer = new GroupGLLayer("gl", [gltfLayer]).addTo(map);

const cutAnalysis = new CutAnalysis({
  position: [center.x, center.y, 10],
  rotation: [45, 0, 0],
  scale: [8, 8, 8]
});
cutAnalysis.addTo(groupGLLayer);
```

`reset()` resets the cutting planes to the initial position / rotation / scale:

```js
cutAnalysis.reset();
```

API: [Analysis](../api/analysis) · Example: [Cut analysis](/en/examples/#3d/spatial-analysis/cut)

## Excavate

"Excavate" a block out of the model along a polygon boundary, exposing a textured bottom surface — commonly used for underground utility tunnels and foundation pit excavation displays.

> Note: `ExcavateAnalysis` does not inherit `Analysis`; instead it inherits `ExtrudePolygonLayer` from `@maptalks/vt`, is constructed the same way (`new ExcavateAnalysis(id, data, options)`), and registers both the gl / gpu renderers. The layers to be excavated are specified via `excavate(layers)`.

| Option | Description |
| --- | --- |
| `boundary` | coordinate ring of the excavation boundary `Array<Array>` |
| `textureUrl` | texture url of the excavated bottom surface |
| `height` | excavation height |

```js
import { Map, Polygon } from "maptalks";
import { GroupGLLayer, GLTFLayer, ExcavateAnalysis } from "@maptalks/gl-layers";

const map = new Map("map", {
  center: [108.9605239272878, 34.21955775963946],
  zoom: 12,
  pitch: 45
});
const gltfLayer = new GLTFLayer("gltf");
const groupGLLayer = new GroupGLLayer("gl", [gltfLayer]).addTo(map);

// 挖方边界（一个坐标环）
const boundary = [
  [-0.0003325939178466797, 0.00039696693420410156],
  [-0.00039696693420410156, -0.0002574920654012658],
  [0.00037550926208496094, -0.00023603439328212517],
  [0.00037550926208496094, 0.00046133995053310173]
];

const excavateAnalysis = new ExcavateAnalysis("excavate", [
  new Polygon(boundary, {
    properties: { height: 500 }
  })
], {
  dataConfig: {
    type: "3d-extrusion",
    altitudeProperty: "height",
    altitudeScale: 1,
    defaultAltitude: 0,
    top: false,
    side: true
  },
  material: {
    baseColorFactor: [0, 1, 1, 1]
  }
});
// 指定被挖方的图层
excavateAnalysis.excavate(gltfLayer);
excavateAnalysis.addTo(groupGLLayer);
```

API: [Analysis](../api/analysis) · Example: [Excavate analysis](/en/examples/#3d/spatial-analysis/excavate) (interactively draw the boundary and adjust the excavation height and bottom/side textures)

## Flood

Render the flooded area according to a given water altitude: regions below the water level are colored with `waterColor`, and `boundary` can limit the analysis range. Commonly used for flood simulation.

| Option | Default | Description |
| --- | --- | --- |
| `boundary` | — | coordinate ring of the flood boundary (optional; if not set, the whole map is analyzed) |
| `waterHeight` | — | water surface altitude in meters |
| `waterColor` | `[0.1451, 0.2588, 0.4863]` | water color |
| `waterOpacity` | `0.6` | water opacity |

```js
import { Map } from "maptalks";
import { GroupGLLayer, Geo3DTilesLayer, FloodAnalysis } from "@maptalks/gl-layers";

const map = new Map("map", {
  center: [108.95965, 34.21776],
  zoom: 18.865,
  pitch: 50
});
const layer = new Geo3DTilesLayer("3dtiles", {
  services: [
    {
      url: "http://resource.dvgis.cn/data/3dtiles/dayanta/tileset.json",
      heightOffset: -400
    }
  ]
});
const groupGLLayer = new GroupGLLayer("gl", [layer]).addTo(map);

const floodAnalysis = new FloodAnalysis({
  boundary: [
    [108.95888623345706, 34.220502132776204],
    [108.9582019833017, 34.21987192350153],
    [108.95866479224173, 34.21879554904879],
    [108.95976365662978, 34.21870809810403],
    [108.96043811487289, 34.219454268264116],
    [108.96030941797153, 34.2204038033789]
  ],
  waterHeight: 50,
  waterColor: [0.1, 0.5, 0.6],
  waterOpacity: 0.4
});
floodAnalysis.addTo(groupGLLayer);
```

During analysis, the water level and range can be adjusted dynamically via `update` (in the example, a slider/animation loop changes the water level to achieve a "rising water" effect):

```js
floodAnalysis.update("waterHeight", 80);
floodAnalysis.update("boundary", coordinates); // coordinates 为新的淹没范围坐标环
floodAnalysis.disable();
```

API: [FloodAnalysis](../api/flood-analysis) · Example: [Flood analysis](/en/examples/#3d/spatial-analysis/flood)

## HeightLimit

Height limit (over-height detection) analysis: model parts exceeding `limitHeight` are highlighted with `limitColor`, used for height limit review in urban regulatory planning and airport clearance. `HeightLimitAnalysis` inherits from `FloodAnalysis`, reusing its water rendering mechanism (`analysisType = 2`).

| Option | Default | Description |
| --- | --- | --- |
| `limitHeight` | — | height limit value in meters |
| `limitColor` | `[0.8, 0.1, 0.1]` | color of the over-height parts |
| others | — | inherited from FloodAnalysis (e.g. `boundary`) |

```js
import { Map } from "maptalks";
import { GroupGLLayer, Geo3DTilesLayer, HeightLimitAnalysis } from "@maptalks/gl-layers";

// map / layer / groupGLLayer：3dtiles 场景搭建同上文「淹没 Flood」
const heightLimitAnalysis = new HeightLimitAnalysis({
  limitHeight: 25,
  limitColor: [1, 0.2, 0.2]
});
heightLimitAnalysis.addTo(groupGLLayer);

// 动态调整限高与颜色
heightLimitAnalysis.update("limitHeight", 50);
heightLimitAnalysis.update("limitColor", [1, 0, 0]);
```

API: [Analysis](../api/analysis) (`HeightLimitAnalysis` has no dedicated API page) · Example: [Height limit analysis](/en/examples/#3d/spatial-analysis/height-limit)

## InSight

Draw a line between the viewpoint (from) and the target point (to) to determine whether the two points are blocked by models: visible segments are shown in `visibleColor`, invisible segments in `invisibleColor`. Commonly used for observation point siting and communication base station coverage analysis.

| Option | Default | Description |
| --- | --- | --- |
| `lines` | `[]` | array of sight lines, each item `{ from, to }` (coordinate arrays or Coordinate) |
| `visibleColor` | `[0, 1, 0, 1]` | visible segment color (green) |
| `invisibleColor` | `[1, 0, 0, 1]` | invisible segment color (red) |
| `excludeLayers` | — | ignored layer ids (not participating in the occlusion judgment) |

```js
import { Map } from "maptalks";
import { InSightAnalysis } from "@maptalks/gl-layers";

// map / groupGLLayer：三维场景搭建见上文「淹没 Flood」
const center = map.getCenter();
const eyePos = [center.x + 0.003, center.y + 0.002, 50];
let lookPoint = [center.x - 0.001, center.y - 0.0005, 100];

const insightAnalysis = new InSightAnalysis({
  lines: [
    {
      from: eyePos,
      to: lookPoint
    }
  ],
  visibleColor: [0, 1, 0, 1],
  invisibleColor: [1, 0, 0, 1]
});
insightAnalysis.addTo(groupGLLayer);

// 移动目标点后更新通视线
lookPoint = [center.x - 0.0005, center.y, 100];
insightAnalysis.update("lines", [
  {
    from: eyePos,
    to: lookPoint
  }
]);
```

API: [Analysis](../api/analysis) (`InSightAnalysis` has no dedicated API page) · Example: [InSight analysis](/en/examples/#3d/spatial-analysis/insight)

## Skyline

Render the model silhouette (skyline) against the sky background, exportable as a skyline image with a transparent background — commonly used for building form and urban skyline studies.

| Option | Default | Description |
| --- | --- | --- |
| `lineColor` | `[1, 0, 0]` | skyline color |
| `lineWidth` | `1.0` | skyline width |

```js
import { Map } from "maptalks";
import { GroupGLLayer, Geo3DTilesLayer, SkylineAnalysis } from "@maptalks/gl-layers";

// map / layer / groupGLLayer：3dtiles 场景搭建同上文「淹没 Flood」
const skylineAnalysis = new SkylineAnalysis({
  lineColor: [234 / 255, 107 / 255, 72 / 255],
  lineWidth: 1.8
});
skylineAnalysis.addTo(groupGLLayer);

skylineAnalysis.update("lineColor", [1, 0, 0]);
```

Export the skyline image (returns an image dataURL):

```js
const url = skylineAnalysis.exportSkylineMap({});
// options.save 设为 true 时弹出下载，options.filename 指定文件名（默认 'export'）
```

API: [SkylineAnalysis](../api/skyline-analysis) · Example: [Skyline analysis](/en/examples/#3d/spatial-analysis/skyline)

## Viewshed

From a viewpoint (`eyePos`) toward a target point (`lookPoint`), a four-sided pyramid field of view is formed to analyze the visible/invisible regions under model occlusion: visible areas are shown in `visibleColor`, occluded areas in `invisibleColor`. Commonly used for line-of-sight coverage analysis of radar stations and watchtowers.

| Option | Default | Description |
| --- | --- | --- |
| `eyePos` | — | viewpoint position `[longitude, latitude, height]` |
| `lookPoint` | — | target point position |
| `verticalAngle` | `90` | vertical field of view (degrees) |
| `horizontalAngle` | `90` | horizontal field of view (degrees) |
| `visibleColor` | `[0, 1, 0, 0.3]` | visible area color |
| `invisibleColor` | `[1, 0, 0, 0.3]` | invisible area color |

```js
import { Map } from "maptalks";
import { GroupGLLayer, Geo3DTilesLayer, ViewshedAnalysis } from "@maptalks/gl-layers";

// map / layer / groupGLLayer：3dtiles 场景搭建同上文「淹没 Flood」
let lookPoint = [108.95948541183475, 34.21971441232435, 67.59082];
const viewshedAnalysis = new ViewshedAnalysis({
  eyePos: [108.96104505157473, 34.219553384558736, 34.55867],
  lookPoint,
  verticalAngle: 30,
  horizontalAngle: 60
});
viewshedAnalysis.addTo(groupGLLayer);

// 移动目标点或调整视场角
lookPoint = [108.9599, 34.2195, 60];
viewshedAnalysis.update("lookPoint", lookPoint);
viewshedAnalysis.update("horizontalAngle", 90);
viewshedAnalysis.update("verticalAngle", 45);
```

`getVertexCoordinates()` returns the 4 vertex coordinates of the viewshed pyramid.

API: [ViewshedAnalysis](../api/viewshed-analysis) · Example: [Viewshed analysis](/en/examples/#3d/spatial-analysis/viewshed)

## Related capabilities

- **3D measurement**: `Distance3DTool` / `Area3DTool` / `Height3DTool` provide distance, area and height measurement in 3D space — see the [measurement example](/en/examples/#3d/spatial-analysis/measure).
- **Ray casting**: `RayCaster` performs ray casting against model meshes and returns intersection coordinates (the occlusion judgment inside `InSightAnalysis` is also based on it) — see the [ray casting example](/en/examples/#3d/spatial-analysis/raycaster).

## Reference

- API reference
  - [Analysis](../api/analysis): the Analysis base class and descriptions of the Cut / Excavate / HeightLimit / InSight and other analysis classes
  - [FloodAnalysis](../api/flood-analysis)
  - [SkylineAnalysis](../api/skyline-analysis)
  - [ViewshedAnalysis](../api/viewshed-analysis)
- Related examples
  - [Cut analysis](/en/examples/#3d/spatial-analysis/cut)
  - [Excavate analysis](/en/examples/#3d/spatial-analysis/excavate)
  - [Flood analysis](/en/examples/#3d/spatial-analysis/flood)
  - [Height limit analysis](/en/examples/#3d/spatial-analysis/height-limit)
  - [InSight analysis](/en/examples/#3d/spatial-analysis/insight)
  - [Skyline analysis](/en/examples/#3d/spatial-analysis/skyline)
  - [Viewshed analysis](/en/examples/#3d/spatial-analysis/viewshed)
  - [Measure](/en/examples/#3d/spatial-analysis/measure)
  - [Ray casting](/en/examples/#3d/spatial-analysis/raycaster)
