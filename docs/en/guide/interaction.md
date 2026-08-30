---
title: Interaction and Events
---

# Interaction and events

maptalks' maps, layers, geometries and various tools all inherit from a unified event system (`Eventable`), which lets you listen to and unbind events with `on` / `once` / `off`. It also has built-in interaction capabilities such as identify, highlighting, drawing, measurement and 3D model transformation. This article introduces the real usage of these capabilities through official examples.

> [!NOTE] Import notes
> - 2D capabilities (map, layers, geometries, DrawTool/DistanceTool/AreaTool, etc.) are imported from the core package `maptalks`
> - WebGL layer classes (`GroupGLLayer`, `VectorTileLayer`, `GeoJSONVectorTileLayer`, `GLTFLayer`, `GLTFMarker`, etc.) and `TransformControl` are imported from `@maptalks/gl-layers`

## Event listening

### Map events

The map is the main entry point for events; interactions such as clicking, zooming and panning all trigger corresponding events:

```js
import { Map, TileLayer } from "maptalks";

const map = new Map("map", {
  center: [-0.113049, 51.498568],
  zoom: 14,
  baseLayer: new TileLayer("base", {
    urlTemplate: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
    subdomains: ["a", "b", "c", "d"],
    attribution:
      "&copy; <a href='http://osm.org'>OpenStreetMap</a> contributors, &copy; <a href='https://carto.com/'>CARTO</a>",
  }),
});

map.on("click", function (param) {
  // param.coordinate 为点击位置的地理坐标
  console.log("click map on", param.coordinate.toFixed(5).toArray().join());
});
```

Multiple event types can be separated by spaces to bind the same handler at once. The following example refreshes the map status uniformly on `zoomend` (zoom ended), `moving` (view moving) and `moveend` (move ended):

```js
map.on("zoomend moving moveend", getStatus);

function getStatus() {
  const center = map.getCenter();
  const status = [
    "Center : " + [center.x.toFixed(5), center.y.toFixed(5)].join(),
    "Extent : " + map.getExtent().toArray().join(),
    "Size : " + map.getSize().toArray().join(),
    "Zoom : " + map.getZoom(),
    "MinZoom : " + map.getMinZoom(),
    "MaxZoom : " + map.getMaxZoom(),
    "Projection : " + map.getProjection().code,
  ];
  console.log(status.join("<br>"));
}
```

### Layer and geometry events

Geometry also supports mouse events; `e.target` in the event callback is the geometry object that triggered the event. The following example changes the fill color via `updateSymbol` when hovering a Marker, implementing a highlight effect:

```js
import { Map, TileLayer, VectorLayer, Marker } from "maptalks";

const layer = new VectorLayer("v").addTo(map);

const marker = new Marker([-0.113049, 51.498568], {
  symbol: {
    markerType: "ellipse",
    markerFill: "#0e595e",
    markerFillOpacity: 0.4,
    markerLineWidth: 2,
    markerLineColor: "white",
    markerWidth: 70,
    markerHeight: 70,
  },
})
  .on("mouseenter", function (e) {
    // 悬停时高亮
    e.target.updateSymbol({ markerFill: "#f00" });
  })
  .on("mouseout", function (e) {
    // 移出后恢复
    e.target.updateSymbol({ markerFill: "#0e595e" });
  });

layer.addGeometry(marker);
```

`GLTFMarker` in WebGL layers also supports the full event set, and the model material can be modified with `setUniform`:

```js
import { Map } from "maptalks";
import { GroupGLLayer, GLTFLayer, GLTFMarker } from "@maptalks/gl-layers";

const gltfLayer = new GLTFLayer("gltf");
const gltfMarker = new GLTFMarker(map.getCenter(), {
  symbol: {
    url: "{res}/gltf/alien/alien.gltf",
    modelHeight: 240,
    rotationZ: 180,
  },
}).addTo(gltfLayer);

gltfMarker.on("click", () => {
  console.log("click 事件");
});

gltfMarker.on("mouseenter", () => {
  // 悬停时修改材质颜色
  gltfMarker.setUniform("polygonFill", [0.0, 0.8, 0.0, 1.0]);
});

gltfMarker.on("mouseout", () => {
  map.resetCursor();
  gltfMarker.setUniform("polygonFill", [1, 1, 1, 1.0]);
});

gltfMarker.on("dblclick", () => {
  map.resetCursor();
  gltfMarker.setUniform("polygonFill", [1, 1, 1, 1.0]);
});
```

> [!NOTE] Event binding API
> All event objects provide `on(type, fn)` to listen, `once(type, fn)` to listen only once (auto-removed after being triggered), and `off(type, fn)` to unbind. Multiple event types are bound space-separated.

Related examples: [Map click events](/en/examples/#basic/map/map-events), [Map status](/en/examples/#basic/map/status), [Geometry hover highlight](/en/examples/#basic/interaction/mouse-highlight), [GLTFMarker mouse events](/en/examples/#gltf/gltf-marker/mouse-event)

## Identify

Identify means finding the feature hit at a given coordinate. 2D layers and GL layers provide different interfaces.

### 2D layers: map.identify

2D geometry layers (such as `VectorLayer`) are picked with `map.identify`, passing the `coordinate` and the array of layers to identify. When nothing is hit, the callback receives an empty array:

```js
import { Map, TileLayer, VectorLayer } from "maptalks";

const layer = new VectorLayer("v").addTo(map);

map.on("click", function (e) {
  map.identify(
    {
      coordinate: e.coordinate,
      layers: [layer],
    },
    function (geos) {
      if (geos.length === 0) {
        return;
      }
      geos.forEach(function (g) {
        g.updateSymbol({ markerFill: "#f00" });
      });
    }
  );
});
```

### Vector tile layers: layer.identify

`VectorTileLayer` / `GeoJSONVectorTileLayer` directly call `layer.identify(coordinate)`, returning an array of pick results (picks); `.data` of each result is the hit feature's data:

```js
import { Map } from "maptalks";
import { GroupGLLayer, GeoJSONVectorTileLayer } from "@maptalks/gl-layers";

const geo = new GeoJSONVectorTileLayer("geo", {
  data: "{res}/geojson/area.geojson",
  style,
});

map.on("click", (e) => {
  const data = geo.identify(e.coordinate);
  if (!data || !data.length) {
    return;
  }
  // 示例取最后一个命中结果的 feature 作为当前要素
  const feature = data[data.length - 1].data.feature;
  console.log(feature);
});
```

### GL layers: groupLayer.identify / identifyAtPoint

When identifying model layers (such as `GLTFLayer`) inside a `GroupGLLayer`, call on the `GroupGLLayer` itself:

```js
import { Map } from "maptalks";
import { GroupGLLayer, GLTFLayer, GLTFMarker } from "@maptalks/gl-layers";

const gltfLayer = new GLTFLayer("gltf");
const gltfMarker = new GLTFMarker(map.getCenter(), {
  symbol: { url: "{res}/gltf/alien/alien.gltf", modelHeight: 480, rotationZ: 180 },
});
gltfLayer.addGeometry(gltfMarker);

const groupLayer = new GroupGLLayer("group", [gltfLayer]).addTo(map);

map.on("click", (e) => {
  const identifyData = e.coordinate
    ? groupLayer.identify(e.coordinate, {
        childLayers: [gltfLayer],
        orderByCamera: true,
      })[0]
    : groupLayer.identifyAtPoint(e.containerPoint, {
        childLayers: [gltfLayer],
        orderByCamera: true,
      })[0];
  // 命中的要素对象（这里是 GLTFMarker）
  const target = identifyData && identifyData.data;
  console.log(target);
});
```

- `identify(coordinate, options)` takes geographic coordinates; `identifyAtPoint(containerPoint, options)` takes container pixel coordinates (such as `e.containerPoint` in events), used for picking by screen position
- `options.childLayers` limits the child layers participating in the identify; `options.orderByCamera: true` sorts the results by camera distance, so `[0]` is the hit nearest the viewpoint
- Each result `picks[i].data` is the hit feature object (e.g. `GLTFMarker`)

Related examples: [2D identify](/en/examples/#basic/interaction/mouse-identify), [Vector tile identify](/en/examples/#vector/interactive/identify), [GLTF model identify](/en/examples/#gltf/transform-control/trs)

## Highlight

### Vector tiles: layer.highlight / cancelHighlight

`VectorTileLayer` / `GeoJSONVectorTileLayer` provide the `highlight` method to highlight by feature `id`. The highlight config can specify `plugin` (only takes effect for that render plugin), `name` (highlight name, used for canceling) and `color` (highlight color):

```js
const highLightKey = "test";

function highLight(feature, layer) {
  layer.highlight([
    {
      id: feature.id,
      plugin: "area-fill", // 只对样式中的 area-fill 渲染插件生效
      name: highLightKey,
      color: "red",
    },
  ]);
}

function cancel(layer) {
  // 按高亮名称取消
  layer.cancelHighlight([highLightKey]);
}

map.on("click", (e) => {
  const data = geo.identify(e.coordinate);
  if (!data || !data.length) {
    cancel(geo);
    return;
  }
  const feature = data[data.length - 1].data.feature;
  highLight(feature, geo);
});
```

The same feature can highlight its fill and border separately: configure two highlights for the same `id`, with `plugin` pointing to the fill plugin (e.g. `area-fill`) and the border plugin (e.g. `area-border`) of the style respectively, each with its own `name` so they can be canceled independently.

### Polygon layer outline

Polygon layers such as `PolygonLayer` support outline highlighting based on post-processing. The `outline` post-process must first be enabled in `sceneConfig.postProcess` of the `GroupGLLayer`, otherwise the `outline` method has no effect:

```js
import { Map, Polygon } from "maptalks";
import { GroupGLLayer, PolygonLayer } from "@maptalks/gl-layers";

const layer = new PolygonLayer("polygon");
new Polygon(
  [
    [-0.123049, 51.503568],
    [-0.136049, 51.503568],
    [-0.136049, 51.488568],
    [-0.123049, 51.488568],
  ],
  {
    id: 1,
    symbol: {
      polygonFill: "rgb(135,196,240)",
      polygonOpacity: 1,
      lineColor: "#1bbc9b",
      lineWidth: 6,
    },
  }
).addTo(layer);

function highlightAll() {
  layer.outlineAll();
}
function highlightPart() {
  // 按要素 id 描边
  layer.outline([1, 2]);
}
function cancelhighlight() {
  layer.cancelOutline();
}

const groupLayer = new GroupGLLayer("group", [layer], {
  sceneConfig: {
    // 需要先开启后处理中的 outline 后处理
    postProcess: {
      enable: true,
      outline: {
        enable: true,
        outlineFactor: 0.3,
        highlightFactor: 0.2,
        outlineWidth: 1,
        outlineColor: [1, 1, 0],
      },
    },
  },
});
groupLayer.addTo(map);
```

Related examples: [Vector tile highlight](/en/examples/#vector/interactive/highlight), [Polygon layer outline](/en/examples/#vector/polygonlayer/highlight)

## Draw tool (DrawTool)

`DrawTool` interactively draws geometries on the map. It is a tool exported by the `maptalks` core package. After creation, mount it to the map with `addTo(map)`, switch draw modes with `setMode`, and control the enabled state with `enable` / `disable`. Each completed draw triggers `drawend`, whose callback parameter `param.geometry` is the drawn geometry:

```js
import { Map, TileLayer, VectorLayer, DrawTool } from "maptalks";

const layer = new VectorLayer("vector").addTo(map);

const drawTool = new DrawTool({
  mode: "Point",
})
  .addTo(map)
  .disable();

drawTool.on("drawend", function (param) {
  console.info(param.geometry);
  layer.addGeometry(param.geometry);
});

// 切换模式并启用绘制
drawTool.setMode("Polygon").enable();
// 停用绘制
drawTool.disable();
```

The following draw modes are supported by default:

`Point` · `LineString` · `Polygon` · `Circle` · `Ellipse` · `Rectangle` · `FreeHandLineString` · `FreeHandPolygon`

Completed geometries can be added directly to a layer with `addGeometry`, entering the normal event and identify flow.

Related example: [Draw tool](/en/examples/#basic/interaction/draw-tool), API reference: [DrawTool](https://maptalks.org/maptalks.js/api/0.x/DrawTool.html)

## Measurement tools (DistanceTool / AreaTool)

`DistanceTool` and `AreaTool` are also tools exported by the `maptalks` core package, for measuring distance and area respectively. Click on the map to add measurement points; the tool computes and displays the measurement values in real time. The measurement result style is controlled by `symbol` (measurement line), `vertexSymbol` (measurement points), `labelOptions` (value labels) and other config:

```js
import { Map, TileLayer, DistanceTool } from "maptalks";

const distanceTool = new DistanceTool({
  symbol: {
    lineColor: "#34495e",
    lineWidth: 2,
  },
  vertexSymbol: {
    markerType: "ellipse",
    markerFill: "#1bbc9b",
    markerLineColor: "#000",
    markerLineWidth: 3,
    markerWidth: 10,
    markerHeight: 10,
  },
  labelOptions: {
    textSymbol: {
      textFaceName: "monospace",
      textFill: "#fff",
      textHorizontalAlignment: "right",
      textDx: 15,
      markerLineColor: "#b4b3b3",
      markerFill: "#000",
    },
    boxStyle: {
      padding: [6, 2],
      symbol: {
        markerType: "square",
        markerFill: "#000",
        markerFillOpacity: 0.9,
        markerLineColor: "#b4b3b3",
      },
    },
  },
  clearButtonSymbol: [
    {
      markerType: "square",
      markerFill: "#000",
      markerLineColor: "#b4b3b3",
      markerLineWidth: 2,
      markerWidth: 15,
      markerHeight: 15,
      markerDx: 20,
    },
    {
      markerType: "x",
      markerWidth: 10,
      markerHeight: 10,
      markerLineColor: "#fff",
      markerDx: 20,
    },
  ],
  language: "en-US",
}).addTo(map);
```

`clearButtonSymbol` is the style of the clear button on the measurement result, and `language` controls the display language of the measurement values. `AreaTool` has the same config as `DistanceTool`, with `polygonFill` / `polygonOpacity` additionally available in `symbol` to control the fill style of the measured area; the result displays the area:

```js
import { Map, TileLayer, AreaTool } from "maptalks";

const areaTool = new AreaTool({
  symbol: {
    lineColor: "#1bbc9b",
    lineWidth: 2,
    polygonFill: "#fff",
    polygonOpacity: 0.3,
  },
  vertexSymbol: {
    markerType: "ellipse",
    markerFill: "#34495e",
    markerLineColor: "#1bbc9b",
    markerLineWidth: 3,
    markerWidth: 10,
    markerHeight: 10,
  },
  labelOptions: {
    textSymbol: {
      textFaceName: "monospace",
      textFill: "#fff",
      textHorizontalAlignment: "right",
      textDx: 15,
    },
    boxStyle: {
      padding: [6, 2],
      symbol: {
        markerType: "square",
        markerFill: "#000",
        markerFillOpacity: 0.9,
        markerLineColor: "#b4b3b3",
      },
    },
  },
  language: "",
}).addTo(map);
```

Related examples: [Distance measurement](/en/examples/#basic/interaction/distance-tool), [Area measurement](/en/examples/#basic/interaction/area-tool), API reference: [DistanceTool](https://maptalks.org/maptalks.js/api/0.x/DistanceTool.html) · [AreaTool](https://maptalks.org/maptalks.js/api/0.x/AreaTool.html)

## Model transform (TransformControl)

`TransformControl` is a 3D transform control exported by `@maptalks/gl-layers`, providing translation, rotation and scaling handles for models (such as `GLTFMarker`). The typical flow: click the map to identify a model → `transform(target)` binds the target and shows the handles → drag the handles to transform.

```js
import { Map } from "maptalks";
import {
  GroupGLLayer,
  GLTFLayer,
  GLTFMarker,
  TransformControl,
} from "@maptalks/gl-layers";

const transformControl = new TransformControl();
transformControl.addTo(map);

// 一次变换结束（松开鼠标）
transformControl.on("transformend", () => {
  console.log("操控模型完成");
});

map.on("click", (e) => {
  // 先拾取点击位置的模型
  const identifyData = e.coordinate
    ? groupLayer.identify(e.coordinate, {
        childLayers: [gltfLayer],
        orderByCamera: true,
      })[0]
    : groupLayer.identifyAtPoint(e.containerPoint, {
        childLayers: [gltfLayer],
        orderByCamera: true,
      })[0];
  const target = identifyData && identifyData.data;
  if (target) {
    transformControl.enable();
    transformControl.transform(target);
  } else {
    transformControl.disable();
  }
});
```

During transformation, the translation / rotation / scale components can be read and synced to the model in real time (using `setTRS` as an example):

```js
transformControl.on("transforming", (e) => {
  const target = transformControl.getTransformTarget();
  target.setTRS(e.translation, e.rotation, e.scale);
});

transformControl.on("positionchange", (e) => {
  const target = transformControl.getTransformTarget();
  target.setCoordinates(e.center);
});
```

### Constructor options

| Option | Default | Description |
| --- | --- | --- |
| `mode` | `'translate'` | initial transform mode: `'translate'` (translate), `'rotation'` (rotate), `'scaling'` / `'xyzScale'` (scale) |
| `scaleStrength` | `2.0` | scale strength |

### Methods

| Method | Description |
| --- | --- |
| `addTo(map)` | add to the map (internally creates a handle layer and listens to mouse events) |
| `transform(targets)` | bind the target(s) to transform (e.g. `GLTFMarker`), showing the handles |
| `getTransformTarget()` | get the current transform target object |
| `enable()` / `disable()` / `isEnable()` | enable / disable / query the control |
| `setMode(mode)` / `getMode()` | set / get the transform mode |
| `setCoordinates(coordinate)` | move the handles to a given coordinate |
| `picked(coordinate)` | determine whether a point hits a handle (usable for hover cursors) |
| `reset()` | reset the target transform and handle state |
| `remove()` | remove from the map and release resources |

### Events

| Event | Description |
| --- | --- |
| `transformend` | a transform ends (mouse released), params include `{ action, transformtarget }` |
| `transforming` | fired continuously during transformation, params include `{ translation, rotation, scale }` |
| `positionchange` | the target position changed, params include `{ center }` |
| `modechange` | transform mode switched, params include `{ mode }` |

> [!NOTE] Combining identify and transform
> In model editing scenarios, identify is usually combined to determine whether the click hits a model: when a model is hit, call `enable()` and `transform()` to bind the target; when nothing is hit but the click is on a handle, keep editing (check with `transformControl.picked(e.coordinate)`); otherwise call `disable()` to end editing.

Related examples: [Model transform (trs)](/en/examples/#gltf/transform-control/trs), [Transform in raycast analysis](/en/examples/#3d/spatial-analysis/raycaster)

## Related APIs

- [VectorTileLayer](../api/vector-tile-layer) · [GeoJSONVectorTileLayer](../api/geojson-vector-tile-layer)
- [GroupGLLayer](../api/group-gl-layer) · [GLTFLayer](../api/gltf-layer) · [GLTFMarker](../api/gltf-marker)
- [PolygonLayer](../api/polygon-layer)
