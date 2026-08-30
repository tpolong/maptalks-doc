---
title: 矢量瓦片
---

# 矢量瓦片图层（VectorTileLayer）

矢量瓦片图层（`VectorTileLayer`）是三维场景中最常用的图层：它加载 [mvt](https://github.com/mapbox/vector-tile-spec) 格式的矢量瓦片数据，并在浏览器端按样式实时渲染。

与传统的栅格瓦片底图相比，矢量瓦片有以下特点：

- **数据与样式分离**：瓦片数据只包含矢量几何与属性，不含任何样式信息。底图的最终呈现由渲染引擎按样式实时计算，修改样式不需要重新生成瓦片。
- **三维更清晰**：三维场景中地图常被旋转、倾斜，栅格瓦片会出现明显的拉伸模糊，而矢量瓦片始终是实时矢量渲染，文字与线条保持清晰锐利。
- **支持三维元素**：矢量数据可以直接参与三维构建，例如将建筑面按高度属性挤出为立体模型。

更详细的原理介绍见[什么是矢量瓦片](/guide/vector-tile)。

## 加载矢量瓦片

创建 `VectorTileLayer` 时，通过 `urlTemplate` 指定瓦片服务的地址模板：

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

`{z}`、`{x}`、`{y}` 会被替换为瓦片的缩放级别与行列号。也可以使用支持坐标系参数的其他瓦片服务，例如 maptiler 的矢量瓦片：

```js
const vt = new VectorTileLayer("vt", {
  urlTemplate:
    "https://api.maptiler.com/tiles/v3/{z}/{x}/{y}.pbf?key=YOUR_MAPTILER_KEY",
});
```

如果瓦片数据使用 EPSG:4326 坐标系（而不是默认的 web mercator），需要在地图上指定 `spatialReference`，例如[加载 maptiler 4326 瓦片](/examples/#vector/vtlayer/load-maptiler-4326)示例：

```js
const map = new Map("map", {
  center: [-74.00912099912109, 40.71107610933129],
  zoom: 12,
  spatialReference: "EPSG:4326",
});
```

## 样式

`VectorTileLayer` 的 `style` 配置是可选的，不设置时图层只做基础渲染。设置样式后，图层会按样式实时渲染瓦片中的矢量数据。

样式可以是一个**插件式样式数组**，直接写在代码里，或存放为独立的 json 文件后用路径引用。以[道路样式示例](/examples/#vector/vt-visual/road)使用的样式文件为例，它的结构是：

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

样式数组中的每一项由三个部分组成：

- **`filter`**：数据过滤条件，决定这条样式作用于哪些数据。支持 `$layer`（瓦片源数据中的图层名）、`$type`（几何类型）以及数据的属性字段。
- **`renderPlugin`**：渲染插件，决定数据如何被渲染。`type` 为插件名（如 `fill` 填充、`line` 线、`water` 水面、`lit` 光照渲染），`dataConfig` 为数据配置，其中 `type` 决定渲染的数据形态：`fill` 面、`line` 线、`3d-extrusion` 将面按高度属性挤出为三维体。
- **`symbol`**：样式的具体参数，例如填充色 `polygonFill`、线宽 `lineWidth`、材质 `material` 等。不同渲染插件的 `symbol` 参数不同。

样式的渲染插件与参数非常丰富，完整定义见 [VectorTileLayer API](/api/vector-tile-layer)。也可以使用 [MapTalks IDE](https://studio.maptalks.com) 以所见即所得的方式定制样式。

### 样式随缩放级别变化

`symbol` 中的数值参数支持按缩放级别渐变。例如道路线宽随缩放级别从 2 增加到 200：

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

## 三维场景中的矢量瓦片

矢量瓦片通过 `GroupGLLayer` 加入三维场景。因为瓦片中的矢量数据在浏览器端实时渲染，可以与其他三维图层（gltf 模型、3dtiles 等）无缝叠加，也可以结合场景配置（光照、环境、阴影）获得更真实的三维效果。一个完整的示例：

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

## 参考

- [矢量瓦片相关示例](/examples/#vector/vtlayer/load-mapbox)
- [道路样式示例](/examples/#vector/vt-visual/road)
- [VectorTileLayer API](/api/vector-tile-layer)
- [什么是矢量瓦片](/guide/vector-tile)
