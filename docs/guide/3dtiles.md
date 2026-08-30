---
title: 3dtiles
---

# 3dtiles 倾斜摄影（Geo3DTilesLayer）

[3dtiles](https://github.com/CesiumGS/3d-tiles) 是 Cesium 提出的三维瓦片数据标准，常用于倾斜摄影、BIM、点云等海量三维数据的流式加载。maptalks 使用 `Geo3DTilesLayer` 加载和渲染 3dtiles 数据。

## 加载 3dtiles

通过 `services` 数组配置一个或多个 3dtiles 数据服务：

```js
import { Map } from "maptalks";
import { Geo3DTilesLayer, GroupGLLayer } from "@maptalks/gl-layers";

const map = new Map("map", {
  center: [108.95965, 34.2189],
  zoom: 18,
  pitch: 45,
});

const layer = new Geo3DTilesLayer("3dtiles", {
  services: [
    {
      url: "http://resource.dvgis.cn/data/3dtiles/dayanta/tileset.json",
      maximumScreenSpaceError: 16.0, // 屏幕空间误差，控制模型精细程度
      heightOffset: -400, // 高度偏移（米）
    },
  ],
});

const groupLayer = new GroupGLLayer("group", [layer]).addTo(map);
```

每个 service 的常用参数：

- **`url`**：`tileset.json` 的地址。
- **`maximumScreenSpaceError`**：屏幕空间误差（SSE），值越小模型加载越精细，性能消耗也越大。
- **`heightOffset`**：模型整体高度偏移（米），用于修正模型与底图的贴合。

## 定位到模型

3dtiles 数据加载是异步的，模型范围（extent）需要等瓦片加载后才能获取。监听 `loadtileset` 事件并配合 `map.fitExtent` 将视角定位到模型：

```js
layer.once("loadtileset", (e) => {
  const extent = layer.getExtent(e.index);
  map.fitExtent(extent, 0, { animation: false });
});
```

## 与矢量瓦片叠加

倾斜摄影模型通常配合矢量瓦片底图一起使用，把 `Geo3DTilesLayer` 与 `VectorTileLayer` 放入同一个 `GroupGLLayer` 即可叠加渲染：

```js
import { Map } from "maptalks";
import { Geo3DTilesLayer, GroupGLLayer, VectorTileLayer } from "@maptalks/gl-layers";

const map = new Map("map", {
  center: [108.95965, 34.2189],
  zoom: 18,
  pitch: 45,
});

const tilesLayer = new Geo3DTilesLayer("3dtiles", {
  services: [{ url: "http://resource.dvgis.cn/data/3dtiles/dayanta/tileset.json" }],
});

const vt = new VectorTileLayer("vt", {
  urlTemplate: "https://tiles.maptalks.com/test/{z}/{x}/{y}.mvt",
});

const groupLayer = new GroupGLLayer("group", [tilesLayer, vt]).addTo(map);
```

## 参考

- [加载 3dtiles 示例](/examples/#3d/3dtiles/load)
- [旋转 3dtiles 示例](/examples/#3d/3dtiles/rotate)
- [3dtiles 数据查看示例](/examples/#3d/3dtiles/view)
