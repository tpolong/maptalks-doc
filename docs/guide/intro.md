---
title: 快速开始
---

# maptalks 快速开始

## maptalks 是什么

[maptalks](https://maptalks.org) 是一个开源的 Web 地图引擎，使用 [MIT 协议](https://github.com/maptalks/maptalks.js/blob/master/LICENSE)，同时支持二维地图与三维场景：

- **二维**：提供地图（Map）、瓦片图层（TileLayer）、矢量图层（VectorLayer）、几何图形、控件等完整的地图渲染与交互能力。
- **三维**：基于 WebGL 渲染，提供矢量瓦片、gltf 模型、3dtiles、视频、地形、空间分析等三维图层能力。

二维与三维使用同一套地图容器，切换与叠加简单直接，可以自由地在同一张地图上混合使用两类图层。

## 包结构

maptalks 的代码按功能拆分为多个 npm 包，日常开发只需要两个：

| 包 | 说明 |
| --- | --- |
| [maptalks](https://www.npmjs.com/package/maptalks) | 核心包。包含地图、二维图层、几何图形、UI 控件等基础能力。 |
| [@maptalks/gl-layers](https://www.npmjs.com/package/@maptalks/gl-layers) | WebGL 图层汇总包。包含三维图层的渲染基础设施（GroupGLLayer）以及所有三维图层插件（矢量瓦片、gltf、3dtiles、视频等）。 |

`@maptalks/gl-layers` 是三维图层插件的汇总包，内部封装了 `@maptalks/gl`、`@maptalks/vt`、`@maptalks/gltf-layer`、`@maptalks/3dtiles` 等插件，安装这一个包即可使用全部三维图层，无需再单独安装和引入其他 WebGL 插件。

## 安装

使用 npm 或 pnpm 安装两个包：

```bash
npm install maptalks @maptalks/gl-layers
```

然后在代码中引入 maptalks 的样式（核心包构建后自带）：

```js
import "maptalks/dist/maptalks.css";
```

## 创建二维地图

创建一个 `div` 作为地图容器：

```html
<div id="map" style="width: 800px; height: 600px;"></div>
```

在地图容器上创建 `Map`，并添加一个瓦片底图：

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

`Map` 的第一个参数是容器元素的 `id`，第二个参数是地图配置。`center` 为地图中心点经纬度，`zoom` 为缩放级别，`baseLayer` 指定底图图层。

## 创建三维场景

三维图层与二维图层最明显的区别是：三维图层由 `GroupGLLayer` 统一管理。`GroupGLLayer` 是一个 WebGL 图层容器，它负责 WebGL 资源的创建与共享，三维图层需要先加入 `GroupGLLayer`，再将 `GroupGLLayer` 添加到地图上。

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

`VectorTileLayer` 是三维场景中最常用的图层，负责加载 [mvt](https://github.com/mapbox/vector-tile-spec) 格式的矢量瓦片数据。它的 `style` 配置是可选的：设置 style 后，图层会按样式实时渲染瓦片中的矢量数据，样式的修改不需要重新生成瓦片。样式采用[插件式样式定义](https://github.com/maptalks/maptalks-vt)：由 `renderPlugin`、`filter`、`symbol` 三项组成，可以是一个样式数组、单个样式对象，或一个样式 json 文件（样式文件还支持 `background`、`featureStyle`、`sprites` 等配置）。注意 maptalks 的矢量瓦片样式格式与 mapbox style（sources/layers/sprite/glyphs）不同，不兼容 mapbox 的 style json。具体说明见 [VectorTileLayer API](/api/vector-tile-layer)。

为了让三维场景更真实，通常还会给 `Map` 配置光照（`lights`）与场景（`sceneConfig`），完整的配置示例可以参考[三维示例](/examples/#3d/track/auto-roaming)和[gltf 示例](/examples/#gltf/gltf-marker/add-marker)。

## 下一步

- [示例中心](/examples/)：大量可直接运行、修改的二维/三维示例
- [VectorTileLayer API](/api/vector-tile-layer)：矢量瓦片图层的 API 参考
- [什么是矢量瓦片](/guide/vector-tile)：矢量瓦片概念介绍
- [maptalks 旧版文档](https://maptalks.org)：maptalks 1.x API 参考，`GroupGLLayer` 等三维图层大量继承了其中的基础类
