---
title: 3dtiles
---

# 3dtiles oblique photography (Geo3DTilesLayer)

[3dtiles](https://github.com/CesiumGS/3d-tiles) is the 3D tile data standard proposed by Cesium, commonly used for streaming loading of massive 3D data such as oblique photography, BIM and point clouds. maptalks uses the `Geo3DTilesLayer` to load and render 3dtiles data.

## Loading 3dtiles

Configure one or more 3dtiles data services through the `services` array:

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

Common parameters of each service:

- **`url`**: the address of `tileset.json`.
- **`maximumScreenSpaceError`**: the screen space error (SSE); the smaller the value, the finer the loaded model and the higher the performance cost.
- **`heightOffset`**: the overall height offset of the model in meters, used to fix the fit between the model and the base layer.

## Locating to the model

3dtiles data loading is asynchronous; the model extent is only available after the tiles are loaded. Listen to the `loadtileset` event and use `map.fitExtent` to move the viewpoint to the model:

```js
layer.once("loadtileset", (e) => {
  const extent = layer.getExtent(e.index);
  map.fitExtent(extent, 0, { animation: false });
});
```

## Overlaying with vector tiles

Oblique photography models are usually used together with a vector tile base layer — put the `Geo3DTilesLayer` and the `VectorTileLayer` into the same `GroupGLLayer` to render them together:

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

## Reference

- [Load 3dtiles example](/en/examples/#3d/3dtiles/load)
- [Rotate 3dtiles example](/en/examples/#3d/3dtiles/rotate)
- [View 3dtiles data example](/en/examples/#3d/3dtiles/view)
