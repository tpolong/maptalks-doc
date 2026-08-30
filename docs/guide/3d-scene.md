---
title: 三维场景
---

# 创建三维场景

maptalks 的二维与三维使用同一套地图容器：给 `Map` 配置倾斜角（`pitch`）并添加 WebGL 图层，二维地图就变成了三维场景。

## 三维图层与 GroupGLLayer

与二维图层直接 `addTo(map)` 不同，**所有三维图层都必须先加入 `GroupGLLayer`，再把 `GroupGLLayer` 添加到地图**：

```js
import { Map } from "maptalks";
import { GroupGLLayer, VectorTileLayer } from "@maptalks/gl-layers";

const map = new Map("map", { center: [-74.009, 40.711], zoom: 16, pitch: 56 });

const vt = new VectorTileLayer("vt", {
  urlTemplate: "https://tiles.maptalks.com/test/{z}/{x}/{y}.mvt",
});

// 所有三维图层放入一个 GroupGLLayer
const groupLayer = new GroupGLLayer("group", [vt]).addTo(map);
```

`GroupGLLayer` 是一个 WebGL 图层容器，负责 WebGL 上下文的创建与资源（纹理、着色器、缓冲等）的共享。同一个 `GroupGLLayer` 内的多个图层共享渲染资源，性能更好。矢量瓦片（`VectorTileLayer`）、gltf 模型（`GLTFLayer`）、3dtiles（`Geo3DTilesLayer`）、视频（`VideoLayer`）等三维图层都可以放入其中，混合叠加：

```js
const groupLayer = new GroupGLLayer("group", [vt, gltfLayer, tilesLayer]).addTo(map);
```

## 三维视角

三维效果来自地图的倾斜与旋转：

- **`pitch`**：地图倾斜角（0 为俯视，角度越大透视感越强），一般 45°~60° 效果较好。
- **`bearing`**：地图旋转角（0 为北朝上），用于改变观察方向。
- **`center` / `zoom`**：与二维一致，分别为中心点经纬度与缩放级别。

```js
const map = new Map("map", {
  center: [-74.01493663, 40.705559],
  zoom: 17.8,
  pitch: 43.2,
  bearing: 57.1,
});
```

## 光照

三维场景默认带有基础光照，但为了更真实的效果，通常给 `Map` 配置 `lights`。光照由环境光（`ambient`）与方向光（`directional`）组成：

```js
const map = new Map("map", {
  center: [-74.009, 40.711],
  zoom: 16,
  pitch: 56,
  lights: {
    directional: {
      direction: [0.5, 0, -1], // 光线方向
      color: [1, 1, 1], // 颜色
    },
    ambient: {
      resource: {
        url: {
          front: "/resources/hdr/923/front.jpg",
          back: "/resources/hdr/923/back.jpg",
          left: "/resources/hdr/923/left.jpg",
          right: "/resources/hdr/923/right.jpg",
          top: "/resources/hdr/923/top.jpg",
          bottom: "/resources/hdr/923/bottom.jpg",
        },
      },
      exposure: 0.787,
      hsv: [0, 0, 0],
      orientation: 0,
    },
  },
});
```

- **`directional`**：方向光，模拟太阳。`direction` 为光线方向，`color` 为光的颜色。
- **`ambient`**：环境光。使用 **hdr 环境贴图**（六面图）作为光源时，模型会有更真实的环境反射效果，其中 `exposure` 控制曝光度，`orientation` 控制环境光方向。

## 场景配置

`GroupGLLayer` 的 `sceneConfig` 配置三维场景的渲染效果，包括环境（`environment`）、阴影（`shadow`）与地面（`ground`）：

```js
const groupLayer = new GroupGLLayer("gl", [vt], {
  sceneConfig: {
    // 环境：可调节场景整体亮度
    environment: {
      enable: true,
      mode: 1,
      level: 0,
      brightness: 0.489,
    },
    // 阴影：esm 阴影
    shadow: {
      type: "esm",
      enable: true,
      quality: "high",
      opacity: 0.5,
      color: [0, 0, 0],
    },
    // 地面：三维场景的底色
    ground: {
      enable: true,
      renderPlugin: { type: "fill" },
      symbol: { polygonFill: [0.8, 0.8, 0.8, 1] },
    },
  },
}).addTo(map);
```

- **`environment`**：场景环境，`enable` 开启后通过 `brightness`（亮度）、`level` 等调节整体光照氛围。
- **`shadow`**：阴影效果，`type: "esm"` 使用阴影贴图，`quality` 控制阴影质量。
- **`ground`**：地面，三维场景中模型、建筑底部的底色层，`renderPlugin` 与 `symbol` 的写法和矢量瓦片样式一致。

## 参考

- [矢量瓦片](/guide/vector-tile)：三维场景中最常用的底图图层
- [WebGPU 渲染](/guide/webgpu)：三维场景的 WebGPU 渲染路径
- [gltf 模型示例](/examples/#gltf/gltf-marker/add-marker)：完整的光照与环境配置
- [3dtiles 示例](/examples/#3d/3dtiles/load)：倾斜摄影模型加载
- [自动巡航示例](/examples/#3d/track/auto-roaming)：三维视角动画
