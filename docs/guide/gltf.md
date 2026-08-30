---
title: gltf 模型
---

# gltf 模型（GLTFLayer）

gltf（GL Transmission Format）是三维场景中传输模型的通用格式。maptalks 使用 `GLTFLayer` 图层和 `GLTFMarker` 模型来加载和展示 gltf 模型。

## 加载模型

`GLTFMarker` 是一个带地理位置的三维模型，通过 `symbol.url` 指定模型文件地址，加入 `GLTFLayer` 后放入 `GroupGLLayer`：

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

`GLTFMarker` 与普通几何图形一样，坐标是经纬度，通过 `symbol` 控制模型的显示：

- **`url`**：模型文件地址，支持 `.gltf` / `.glb` 格式。
- **`modelHeight`**：模型高度（米）。gltf 模型没有真实世界的尺度，设置高度后引擎会按模型原始比例自动缩放。
- **`scaleX` / `scaleY` / `scaleZ`**：三个轴向的缩放。
- **`rotationZ`**：绕 Z 轴的旋转角度。
- **`animation` / `loop`**：加载带骨骼动画的模型时，`animation: true` 播放动画，`loop` 控制是否循环。

## 添加多个模型

一个 `GLTFLayer` 可以添加任意多个 `GLTFMarker`，通过坐标偏移放置在不同的位置：

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

## 模型交互

### 模型事件

`GLTFMarker` 与二维几何一样支持鼠标事件：

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

`setUniform` 可以修改模型着色器的 uniform 值，常用于实现悬停高亮。

### 拾取（identify）

在地图事件中通过 `gltfLayer.identify(coordinate)` 拾取该坐标处的模型：

```js
map.on("click", (e) => {
  const picks = gltfLayer.identify(e.coordinate);
  if (picks && picks.length > 0) {
    const target = picks[0].data; // 命中的模型
    target.setUniform("polygonFill", [0.2, 0.2, 1.0, 1.0]);
  }
});
```

### 自定义属性

给模型附加业务数据，用于后续的查询与联动：

```js
gltfMarker.setProperties({ num: 100, value: 1 });

gltfMarker.on("click", (e) => {
  const properties = e.target.getProperties();
  console.log(properties);
});
```

## 模型加载完成事件

多个模型（尤其大模型）加载是异步的，可以在图层上监听 `modelload` 事件：

```js
gltfLayer.on("modelload", () => {
  console.log("所有模型载入完成");
});
```

## 参考

- [添加模型示例](/examples/#gltf/gltf-marker/add-marker)
- [模型交互示例](/examples/#gltf/gltf-marker/mouse-event)
- [模型拾取示例](/examples/#gltf/gltf-layer/identify)
- [动画模型示例](/examples/#gltf/gltf-marker/animation-model)
