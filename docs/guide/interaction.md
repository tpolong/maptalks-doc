---
title: 交互与事件
---

# 交互与事件

maptalks 的地图、图层、几何与各类工具都继承自统一的事件体系（`Eventable`），可以通过 `on` / `once` / `off` 监听与解绑事件；同时内置了拾取（identify）、高亮、绘制、测量与三维模型变换等交互能力。本文通过官方示例介绍这些能力的真实用法。

> [!NOTE] 导入说明
> - 二维能力（地图、图层、几何、DrawTool/DistanceTool/AreaTool 等）从核心包 `maptalks` 导入
> - WebGL 图层类（`GroupGLLayer`、`VectorTileLayer`、`GeoJSONVectorTileLayer`、`GLTFLayer`、`GLTFMarker` 等）与 `TransformControl` 从 `@maptalks/gl-layers` 导入

## 事件监听

### 地图事件

地图是事件的主要入口，点击、缩放、平移等交互都会触发对应事件：

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

多个事件类型可以用空格分隔，一次性绑定同一个处理函数。下面的示例在 `zoomend`（缩放结束）、`moving`（视图移动中）、`moveend`（移动结束）时统一刷新地图状态：

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

### 图层与几何事件

几何（Geometry）同样支持鼠标事件，事件回调中的 `e.target` 即触发事件的几何对象。下面的示例在鼠标悬停 Marker 时通过 `updateSymbol` 改变填充色，实现高亮效果：

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

WebGL 图层中的 `GLTFMarker` 也支持完整的事件，并可通过 `setUniform` 修改模型材质：

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

> [!NOTE] 事件绑定 API
> 所有事件对象都提供 `on(type, fn)` 监听、`once(type, fn)` 仅监听一次（触发后自动移除）、`off(type, fn)` 解绑监听，多个事件类型用空格分隔绑定。

相关示例：[地图点击事件](/examples/#basic/map/map-events)、[地图状态](/examples/#basic/map/status)、[几何悬停高亮](/examples/#basic/interaction/mouse-highlight)、[GLTFMarker 鼠标事件](/examples/#gltf/gltf-marker/mouse-event)

## 拾取（identify）

拾取是指给定一个坐标，找出该位置命中的要素。二维图层与 GL 图层提供不同的接口。

### 二维图层：map.identify

二维几何图层（如 `VectorLayer`）通过 `map.identify` 拾取，传入 `coordinate` 与参与拾取的图层数组，未命中时回调收到空数组：

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

### 矢量瓦片图层：layer.identify

`VectorTileLayer` / `GeoJSONVectorTileLayer` 直接调用 `layer.identify(coordinate)`，返回拾取结果数组（picks），每个结果的 `.data` 是命中要素的数据：

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

### GL 图层：groupLayer.identify / identifyAtPoint

在 `GroupGLLayer` 中拾取模型图层（如 `GLTFLayer`）时，需要从 `GroupGLLayer` 上调用：

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

- `identify(coordinate, options)` 接收地理坐标；`identifyAtPoint(containerPoint, options)` 接收容器像素坐标（如事件中的 `e.containerPoint`），用于按屏幕位置拾取
- `options.childLayers` 限定参与拾取的子图层；`options.orderByCamera: true` 使结果按相机距离排序，`[0]` 即最近视点的命中
- 结果 `picks[i].data` 为命中的要素对象（如 `GLTFMarker`）

相关示例：[二维拾取](/examples/#basic/interaction/mouse-identify)、[矢量瓦片拾取](/examples/#vector/interactive/identify)、[GLTF 模型拾取](/examples/#gltf/transform-control/trs)

## 高亮

### 矢量瓦片：layer.highlight / cancelHighlight

`VectorTileLayer` / `GeoJSONVectorTileLayer` 提供 `highlight` 方法，按要素 `id` 高亮。高亮配置可以指定 `plugin`（只对该渲染插件生效）、`name`（高亮名称，用于取消）与 `color`（高亮颜色）：

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

同一要素可以分别高亮填充与边框：对同一个 `id` 配置两条高亮，`plugin` 分别指向样式中的填充插件（如 `area-fill`）与边框插件（如 `area-border`），各自使用独立的 `name` 以便分别取消。

### 面图层描边：outline

`PolygonLayer` 等面图层支持基于后处理的描边高亮。使用前必须在 `GroupGLLayer` 的 `sceneConfig.postProcess` 中开启 `outline` 后处理，否则 `outline` 方法不生效：

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

相关示例：[矢量瓦片高亮](/examples/#vector/interactive/highlight)、[面图层描边](/examples/#vector/polygonlayer/highlight)

## 绘制工具（DrawTool）

`DrawTool` 用于在地图上交互式绘制几何，是 `maptalks` 核心包导出的工具。创建后 `addTo(map)` 挂载到地图，通过 `setMode` 切换绘制模式，用 `enable` / `disable` 控制启用状态；每次绘制完成触发 `drawend`，回调参数 `param.geometry` 即绘制出的几何：

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

默认支持以下绘制模式：

`Point` · `LineString` · `Polygon` · `Circle` · `Ellipse` · `Rectangle` · `FreeHandLineString` · `FreeHandPolygon`

绘制完成的几何可以直接 `addGeometry` 到图层，进入正常的事件、拾取流程。

相关示例：[绘制工具](/examples/#basic/interaction/draw-tool)，API 参考：[DrawTool](https://maptalks.org/maptalks.js/api/0.x/DrawTool.html)

## 测量工具（DistanceTool / AreaTool）

`DistanceTool` 与 `AreaTool` 同样是 `maptalks` 核心包导出的工具，分别用于测量距离与面积。在地图上点击添加测量点，工具会实时计算并展示测量数值，测量结果样式由 `symbol`（测量线）、`vertexSymbol`（测量点）、`labelOptions`（数值标签）等配置控制：

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

其中 `clearButtonSymbol` 是测量结果上的清除按钮样式，`language` 控制测量数值的显示语言。`AreaTool` 的配置与 `DistanceTool` 一致，`symbol` 中多出 `polygonFill` / `polygonOpacity` 用于控制测量区域的填充样式，测量结果展示的是面积：

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

相关示例：[距离测量](/examples/#basic/interaction/distance-tool)、[面积测量](/examples/#basic/interaction/area-tool)，API 参考：[DistanceTool](https://maptalks.org/maptalks.js/api/0.x/DistanceTool.html) · [AreaTool](https://maptalks.org/maptalks.js/api/0.x/AreaTool.html)

## 模型变换（TransformControl）

`TransformControl` 是 `@maptalks/gl-layers` 导出的三维变换控件，为模型（如 `GLTFMarker`）提供平移、旋转、缩放交互手柄。典型用法是：点击地图拾取模型 → `transform(target)` 绑定目标并显示手柄 → 拖动手柄变换。

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

变换过程中可以读取平移 / 旋转 / 缩放分量，实时同步到模型（以 `setTRS` 为例）：

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

### 构造 options

| 选项 | 默认值 | 说明 |
| --- | --- | --- |
| `mode` | `'translate'` | 初始变换模式：`'translate'`（平移）、`'rotation'`（旋转）、`'scaling'` / `'xyzScale'`（缩放） |
| `scaleStrength` | `2.0` | 缩放强度 |

### 方法

| 方法 | 说明 |
| --- | --- |
| `addTo(map)` | 添加到地图（内部创建手柄图层并监听鼠标事件） |
| `transform(targets)` | 绑定要变换的目标（如 `GLTFMarker`），显示手柄 |
| `getTransformTarget()` | 获取当前变换目标对象 |
| `enable()` / `disable()` / `isEnable()` | 启用 / 禁用 / 查询控件 |
| `setMode(mode)` / `getMode()` | 设置 / 获取变换模式 |
| `setCoordinates(coordinate)` | 移动手柄到指定坐标 |
| `picked(coordinate)` | 判断某点是否命中手柄（可用于悬停光标） |
| `reset()` | 重置目标变换与手柄状态 |
| `remove()` | 从地图移除并释放资源 |

### 事件

| 事件名 | 说明 |
| --- | --- |
| `transformend` | 一次变换结束（松开鼠标），参数含 `{ action, transformtarget }` |
| `transforming` | 变换过程中持续触发，参数含 `{ translation, rotation, scale }` |
| `positionchange` | 目标位置变化，参数含 `{ center }` |
| `modechange` | 切换变换模式，参数含 `{ mode }` |

> [!NOTE] 拾取与变换的配合
> 在模型编辑场景中，通常需要结合拾取来判断点击是否命中模型：命中模型时 `enable()` 并 `transform()` 绑定目标；未命中但点击在手柄上时保持编辑状态（可用 `transformControl.picked(e.coordinate)` 判断），否则 `disable()` 结束编辑。

相关示例：[模型变换（trs）](/examples/#gltf/transform-control/trs)、[射线分析中的变换联动](/examples/#3d/spatial-analysis/raycaster)

## 相关 API

- [VectorTileLayer](../api/vector-tile-layer) · [GeoJSONVectorTileLayer](../api/geojson-vector-tile-layer)
- [GroupGLLayer](../api/group-gl-layer) · [GLTFLayer](../api/gltf-layer) · [GLTFMarker](../api/gltf-marker)
- [PolygonLayer](../api/polygon-layer)
