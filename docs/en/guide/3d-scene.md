---
title: 3D Scene
---

# Creating a 3D scene

maptalks uses the same map container for 2D and 3D: configure a tilt angle (`pitch`) on the `Map` and add WebGL layers, and the 2D map becomes a 3D scene.

## 3D layers and GroupGLLayer

Unlike 2D layers, which are added directly with `addTo(map)`, **all 3D layers must first be added to a `GroupGLLayer`, and then the `GroupGLLayer` is added to the map**:

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

`GroupGLLayer` is a WebGL layer container responsible for creating the WebGL context and sharing resources (textures, shaders, buffers, etc.). Multiple layers within the same `GroupGLLayer` share rendering resources for better performance. 3D layers such as vector tiles (`VectorTileLayer`), gltf models (`GLTFLayer`), 3dtiles (`Geo3DTilesLayer`) and video (`VideoLayer`) can all be placed in it and rendered together:

```js
const groupLayer = new GroupGLLayer("group", [vt, gltfLayer, tilesLayer]).addTo(map);
```

## 3D viewpoint

The 3D effect comes from tilting and rotating the map:

- **`pitch`**: the map tilt angle (0 is top-down; the larger the angle, the stronger the perspective effect). 45°~60° generally looks best.
- **`bearing`**: the map rotation angle (0 means north is up), used to change the viewing direction.
- **`center` / `zoom`**: same as in 2D — the center longitude/latitude and the zoom level respectively.

```js
const map = new Map("map", {
  center: [-74.01493663, 40.705559],
  zoom: 17.8,
  pitch: 43.2,
  bearing: 57.1,
});
```

## Lighting

3D scenes have basic lighting by default, but for a more realistic result you usually configure `lights` on the `Map`. Lighting consists of ambient light (`ambient`) and directional light (`directional`):

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

- **`directional`**: directional light, simulating the sun. `direction` is the light direction and `color` is the light color.
- **`ambient`**: ambient light. When an **hdr environment map** (six-face images) is used as the light source, models get more realistic environment reflections. `exposure` controls the exposure and `orientation` controls the ambient light direction.

## Scene configuration

`GroupGLLayer`'s `sceneConfig` configures the rendering of the 3D scene, including environment (`environment`), shadow (`shadow`) and ground (`ground`):

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

- **`environment`**: scene environment. When `enable` is on, `brightness`, `level` and other options adjust the overall lighting atmosphere.
- **`shadow`**: shadow effect. `type: "esm"` uses shadow maps, and `quality` controls the shadow quality.
- **`ground`**: the ground — the base color layer beneath models and buildings in a 3D scene. `renderPlugin` and `symbol` follow the same syntax as vector tile styles.

## Reference

- [Vector tiles](/en/guide/vector-tile): the most commonly used base layer in 3D scenes
- [WebGPU rendering](/en/guide/webgpu): the WebGPU rendering path for 3D scenes
- [gltf model example](/en/examples/#gltf/gltf-marker/add-marker): complete lighting and environment configuration
- [3dtiles example](/en/examples/#3d/3dtiles/load): oblique photography model loading
- [Auto-roaming example](/en/examples/#3d/track/auto-roaming): 3D viewpoint animation
