---
title: WebGPU 渲染
---

# WebGPU 渲染

maptalks 在 WebGL 之外还支持 WebGPU 渲染路径。通过给 `Map` 或 `GroupGLLayer` 设置 `renderer: 'gpu'`，可以让三维场景使用 WebGPU 渲染（`MapGPURenderer`）。相比 WebGL，WebGPU 提供更低的开销、更精细的 GPU 资源管理，以及基于 WGSL 的现代渲染管线。

## 开启方式

WebGPU 是地图的渲染器之一，默认渲染器列表为 `['canvas','gl','gpu']`。显式传入 `'gpu'` 即可强制使用 WebGPU 渲染：

```js
import { Map } from "maptalks";
import { GroupGLLayer, VectorTileLayer } from "@maptalks/gl-layers";

// 1. 地图使用 WebGPU 渲染器
const map = new Map("map", {
  center: [-74.009, 40.711],
  zoom: 16,
  pitch: 56,
  renderer: "gpu",                  // 关键：开启 WebGPU
  preserveGpuDrawingBuffer: true,   // 需要截图/导出时开启
});

// 2. 三维图层放入同一个 GroupGLLayer
const vt = new VectorTileLayer("vt", {
  urlTemplate: "https://tiles.maptalks.com/test/{z}/{x}/{y}.mvt",
});
const groupLayer = new GroupGLLayer("group", [vt]).addTo(map);
```

`GroupGLLayer` 自身也注册了 `'gl'` 与 `'gpu'` 两种渲染器（`registerRenderer('gl'|'gpu', Renderer)`），因此同样可以通过 `renderer: 'gpu'` 切换。不过，作为子图层加入 `GroupGLLayer` 的图层，其 `renderer` 仍须为 `'gl'`（源码 `addLayer` 会对非 `'gl'` 子图层抛错）。

## 浏览器与设备要求

WebGPU 是最新一代的 GPU API，需要浏览器与硬件同时支持：

- **浏览器**：现代 Chromium 系（桌面版 Chrome、Edge），以及较新的 Safari、Firefox 已提供支持。
- **设备**：需要支持 WebGPU 的 GPU 与驱动（通常在较新的桌面/移动 GPU 上可用）。
- **检测**：可以用 `navigator.gpu` 判断当前环境是否可用：

```js
if (!navigator.gpu) {
  console.warn("当前浏览器不支持 WebGPU，请回退到 WebGL 渲染");
}
```

## device 选项与 GPU 设备

进入 WebGPU 模式后，上下文通过 `canvas.getContext('webgpu')` 创建，底层设备为 `reshader.GraphicsDevice`。图层的 `contextcreate` 事件会携带 `device`（`reshader.GraphicsDevice`）与 `context`（WebGPU 上下文）：

```js
layer.on("contextcreate", (e) => {
  // e.device 为 reshader.GraphicsDevice，e.context 为 WebGPU 上下文
});
```

可通过 `map.getRenderer().isWebGPU()` 判断当前渲染路径是否为 WebGPU（返回 `true` 时 `isWebGL()` 为 `false`）。

## preserveGpuDrawingBuffer

WebGPU 默认不保留绘图缓冲，因此 `toDataURL()` / 截图依赖 `preserveGpuDrawingBuffer` 选项。开启后，每帧都会把 GPU 帧缓冲读入一张读取用的 canvas（内部调用 `device.preserveDrawingBuffer`），从而支持截图导出。

## 与 gl 渲染的差异

| 维度 | `gl`（WebGL） | `gpu`（WebGPU） |
| --- | --- | --- |
| 渲染器 | `MapGLRenderer` | `MapGPURenderer` |
| 上下文 | `canvas.getContext('webgl')` | `canvas.getContext('webgpu')` |
| GPU 设备 | regl | `reshader.GraphicsDevice` |
| 状态判断 | `isWebGL()` 为 `true` | `isWebGPU()` 为 `true` |
| 截图 | 默认保留绘图缓冲 | 需 `preserveGpuDrawingBuffer` |
| 着色器 | GLSL | WGSL（通过 `getWGSLSource` / `registerWGSLSource` 管理） |

## 限制

- 当前源码仓库内的示例与测试尚未覆盖 `renderer: 'gpu'` 组合（未检索到用例），WebGPU 路径建议结合实际设备验证。
- 加入 `GroupGLLayer` 的子图层其 `renderer` 仍须为 `'gl'`。

## 参考

- [Map](/api/map)：`renderer` 选项与 WebGPU 说明
- [GroupGLLayer](/api/group-gl-layer)：`renderer` 选项与 WebGPU 说明
