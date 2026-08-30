---
title: gltf Models
---

# gltf models (GLTFLayer)

gltf (GL Transmission Format) is the common format for transmitting models in 3D scenes. maptalks uses the `GLTFLayer` layer and the `GLTFMarker` model to load and display gltf models.

## Loading models

`GLTFMarker` is a geolocated 3D model. Its `symbol.url` specifies the model file address; add it to a `GLTFLayer`, then put the layer into a `GroupGLLayer`:

```js
import { Map } from "maptalks";
import { GroupGLLayer, GLTFLayer, GLTFMarker } from "@maptalks/gl-layers";

const map = new Map("map", {
  center: [-74.01252272617671, 40.70709931736744],
  zoom: 16,
  pitch: 80,
});

const symbol = {
  url: "/models/alien/alien.gltf", // 模型文件地址
  modelHeight: 240, // 模型高度（米），会自动按模型比例缩放
  rotationZ: 180, // 绕 Z 轴旋转角度
};

const gltfLayer = new GLTFLayer("gltf");
const gltfMarker = new GLTFMarker(map.getCenter(), {
  symbol,
}).addTo(gltfLayer);

const groupLayer = new GroupGLLayer("group", [gltfLayer]).addTo(map);
```

Like ordinary geometries, `GLTFMarker` takes coordinates as longitude/latitude and controls the model display through `symbol`:

- **`url`**: the model file address, supporting `.gltf` / `.glb` formats.
- **`modelHeight`**: the model height in meters. gltf models have no real-world scale; once the height is set, the engine auto-scales the model proportionally.
- **`scaleX` / `scaleY` / `scaleZ`**: scaling on the three axes.
- **`rotationZ`**: the rotation angle around the Z axis.
- **`animation` / `loop`**: when loading a model with skeletal animation, `animation: true` plays the animation and `loop` controls whether it loops.

## Adding multiple models

A single `GLTFLayer` can hold any number of `GLTFMarker`s, placed at different positions by coordinate offsets:

```js
const gltfLayer = new GLTFLayer("gltf");

const position = map.getCenter();
const marker1 = new GLTFMarker(position, {
  symbol: { url: "/models/alien/alien.gltf", modelHeight: 240 },
}).addTo(gltfLayer);

// position.add(dx, dy) 按经纬度偏移
const marker2 = new GLTFMarker(position.add(0.01, 0), {
  symbol: { url: "/models/robot/scene.gltf", animation: true, loop: true, modelHeight: 500 },
}).addTo(gltfLayer);
```

## Model interaction

### Model events

`GLTFMarker` supports mouse events just like 2D geometries:

```js
gltfMarker.on("click", (e) => {
  console.log("点击了模型", e.target);
});

gltfMarker.on("mouseenter", () => {
  gltfMarker.setUniform("polygonFill", [0.0, 0.8, 0.0, 1.0]); // 悬停时改变模型颜色
});

gltfMarker.on("mouseleave", () => {
  gltfMarker.setUniform("polygonFill", [1.0, 1.0, 1.0, 1.0]);
});
```

`setUniform` can modify uniform values of the model shader, commonly used to implement hover highlighting.

### Identify

Pick the model at a coordinate via `gltfLayer.identify(coordinate)` in a map event:

```js
map.on("click", (e) => {
  const picks = gltfLayer.identify(e.coordinate);
  if (picks && picks.length > 0) {
    const target = picks[0].data; // 命中的模型
    target.setUniform("polygonFill", [0.2, 0.2, 1.0, 1.0]);
  }
});
```

### Custom properties

Attach business data to a model for later querying and linking:

```js
gltfMarker.setProperties({ num: 100, value: 1 });

gltfMarker.on("click", (e) => {
  const properties = e.target.getProperties();
  console.log(properties);
});
```

## Model load completion event

Loading multiple models (especially large ones) is asynchronous — listen to the `modelload` event on the layer:

```js
gltfLayer.on("modelload", () => {
  console.log("所有模型载入完成");
});
```

## Reference

- [Add model example](/en/examples/#gltf/gltf-marker/add-marker)
- [Model interaction example](/en/examples/#gltf/gltf-marker/mouse-event)
- [Model identify example](/en/examples/#gltf/gltf-layer/identify)
- [Animated model example](/en/examples/#gltf/gltf-marker/animation-model)
