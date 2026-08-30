---
title: WebGPU rendering
---

# WebGPU rendering

In addition to WebGL, maptalks also supports a WebGPU rendering path. By setting `renderer: 'gpu'` on a `Map` or `GroupGLLayer`, 3D scenes can be rendered with WebGPU (`MapGPURenderer`). Compared with WebGL, WebGPU offers lower overhead, more granular GPU resource management, and a modern rendering pipeline based on WGSL.

## How to enable

WebGPU is one of the map's renderers; the default renderer list is `['canvas','gl','gpu']`. Pass `'gpu'` explicitly to force WebGPU rendering:

```js
import { Map } from "maptalks";
import { GroupGLLayer, VectorTileLayer } from "@maptalks/gl-layers";

// 1. Map uses the WebGPU renderer
const map = new Map("map", {
  center: [-74.009, 40.711],
  zoom: 16,
  pitch: 56,
  renderer: "gpu",                  // key: enable WebGPU
  preserveGpuDrawingBuffer: true,   // enable when you need screenshots/export
});

// 2. Put 3D layers into the same GroupGLLayer
const vt = new VectorTileLayer("vt", {
  urlTemplate: "https://tiles.maptalks.com/test/{z}/{x}/{y}.mvt",
});
const groupLayer = new GroupGLLayer("group", [vt]).addTo(map);
```

`GroupGLLayer` itself also registers both `'gl'` and `'gpu'` renderers (`registerRenderer('gl'|'gpu', Renderer)`), so you can switch it with `renderer: 'gpu'` as well. However, layers added to a `GroupGLLayer` as sub-layers must still use the `'gl'` renderer (`addLayer` throws for non-`'gl'` sub-layers in the source).

## Browser and device requirements

WebGPU is the latest-generation GPU API and requires support from both the browser and the hardware:

- **Browser**: modern Chromium-based browsers (desktop Chrome, Edge), as well as newer Safari and Firefox, provide support.
- **Device**: requires a WebGPU-capable GPU and driver (usually available on newer desktop/mobile GPUs).
- **Detection**: check `navigator.gpu` to see whether the current environment supports it:

```js
if (!navigator.gpu) {
  console.warn("This browser does not support WebGPU; fall back to WebGL rendering");
}
```

## The device option and the GPU device

In WebGPU mode, the context is created with `canvas.getContext('webgpu')`, and the underlying device is `reshader.GraphicsDevice`. A layer's `contextcreate` event carries the `device` (`reshader.GraphicsDevice`) and the `context` (the WebGPU context):

```js
layer.on("contextcreate", (e) => {
  // e.device is a reshader.GraphicsDevice, e.context is the WebGPU context
});
```

Use `map.getRenderer().isWebGPU()` to check whether the current renderer is WebGPU (when it returns `true`, `isWebGL()` returns `false`).

## preserveGpuDrawingBuffer

WebGPU does not preserve the drawing buffer by default, so `toDataURL()` / screenshot relies on the `preserveGpuDrawingBuffer` option. When enabled, each frame reads the GPU framebuffer back into a readback canvas (via `device.preserveDrawingBuffer`), enabling screenshot export.

## Differences from `gl` rendering

| Dimension | `gl` (WebGL) | `gpu` (WebGPU) |
| --- | --- | --- |
| Renderer | `MapGLRenderer` | `MapGPURenderer` |
| Context | `canvas.getContext('webgl')` | `canvas.getContext('webgpu')` |
| GPU device | regl | `reshader.GraphicsDevice` |
| State detection | `isWebGL()` returns `true` | `isWebGPU()` returns `true` |
| Screenshot | preserves the drawing buffer by default | requires `preserveGpuDrawingBuffer` |
| Shaders | GLSL | WGSL (managed via `getWGSLSource` / `registerWGSLSource`) |

## Limitations

- The examples and tests in the source repository do not yet cover the `renderer: 'gpu'` combination (no usage found); validate the WebGPU path with your actual device.
- Sub-layers added to a `GroupGLLayer` must still use the `'gl'` renderer.

## Reference

- [Map](/en/api/map): the `renderer` option and WebGPU notes
- [GroupGLLayer](/en/api/group-gl-layer): the `renderer` option and WebGPU notes
