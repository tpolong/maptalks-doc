---
title: renderer.CanvasRenderer
---

# renderer.CanvasRenderer

renderer.CanvasRenderer 是在 HTMLCanvasElement 上渲染图层的基础渲染器，继承自 `LayerAbstractRenderer`。它负责创建 canvas 2D 上下文、在渲染生命周期内重置/清空/裁剪画布，并派发 `canvascreate`、`renderstart`、`renderend`、`resourceload` 等图层事件。它通常由渲染器内部使用，一般不会直接实例化。

```js
import { renderer } from "maptalks";

// 通常由图层内部创建
const r = new renderer.CanvasRenderer(layer);
```

## 构造函数

```js
new CanvasRenderer(layer)
```

参数：

* **layer** `Layer` — 要被渲染的图层。

## options 配置项

CanvasRenderer 自身没有独立的配置项，渲染相关配置通过所渲染图层（Layer）的选项控制，例如 `forceRenderOnMoving`（移动时是否强制重绘）、`globalCompositeOperation`（画布混合模式）、`renderer`（渲染器类型）等。详见各图层的 options 文档。

## 成员方法

- `needToRedraw(): boolean` — 判断当前帧是否需要重绘，当地图处于交互或视图发生变化时返回 `true`。
- `createContext(): void` — 为当前 canvas 创建 2D 上下文，并应用设备像素比与混合模式。
- `resetCanvasTransform(): void` — 按设备像素比重置 canvas 变换。
- `clearCanvas(): void` — 将 canvas 清空为空白。
- `clear(): void` — 清空 canvas 并标记需要重绘。
- `prepareCanvas(): PointExtent` — 为渲染做准备：首次创建 canvas 或重置/清空现有 canvas，并返回遮罩的 2D 范围。
- `onResize(param): void` — 地图尺寸变化时删除范围缓存、调整 canvas 大小并重绘。

## 事件

渲染器通过 `layer.fire` 触发以下图层事件：

- `canvascreate` — canvas 创建完成时触发，事件参数含 `context` 与 `gl`。
- `renderstart` — 图层开始渲染时触发，事件参数含 `context` 与 `gl`。
- `renderend` — 图层渲染完成时触发。
- `resourceload` — 图层资源加载完成时触发。
