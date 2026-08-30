---
title: CanvasLayer
---

# CanvasLayer

CanvasLayer 是带 HTML5 2D canvas 上下文的图层，继承自 [Layer](/api/layer)。它提供了一组供 canvas 绘制的接口方法，可直接实例化使用，但更推荐通过子类化扩展并覆写 `draw()` 实现自定义绘制。注意：CanvasLayer 不能用 JSON 序列化/反序列化恢复。

```js
import { Map, CanvasLayer } from "maptalks";

const map = new Map("map", { center: [0, 0], zoom: 2 });

const layer = new CanvasLayer("canvas");

layer.prepareToDraw = function (context) {
  const size = map.getSize();
  return [size.width, size.height];
};

layer.draw = function (context, width, height) {
  context.fillStyle = "#f00";
  context.fillRect(0, 0, width, height);
};

layer.addTo(map);
```

## 构造函数

```js
new CanvasLayer(id, options?)
```

参数：

* **id** `String|Number` 图层 id。
* **options** `Object` 图层配置项（可选）。

## options 配置项

| 配置名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| `doubleBuffer` | Boolean | 是否用双缓冲渲染 | `false` |
| `animation` | Boolean | 是否为动画图层 | `false` |
| `fps` | Number\|String | 动画帧率，`1000 / 16` | `1000/16` |

## 成员方法

### 绘制接口（覆写用）

- `prepareToDraw(context): Object[]` — 首次绘制前只调用一次的接口，返回传给 `draw()` 的参数
- `draw(context, ...params): void` — 在图层 canvas 上绘制内容的接口（必须覆写）
- `doubleBuffer(bufferContext, context?): this` — 双缓冲回调，默认清空缓冲区后返回

### 渲染控制

- `isCanvasRender(): boolean` — 是否为 canvas 渲染
- `redraw(): this` — 重绘图层
- `play(): this` — 开始动画
- `pause(): this` — 暂停动画
- `isPlaying(): boolean` — 动画是否播放中
- `clearCanvas(): this` — 清空图层画布
- `requestMapToRender(): this` — 要求地图不触发事件重绘画布
- `completeRender(): this` — 要求地图重绘并触发 layerload 事件

### 生命周期回调（覆写接口）

- `onCanvasCreate(): this` — canvas 创建完成后的回调
- `onZoomStart(param)` / `onZooming(param)` / `onZoomEnd(param)` — 地图缩放回调
- `onMoveStart(param)` / `onMoving(param)` / `onMoveEnd(param)` — 地图移动回调
- `onResize(param)` — 地图尺寸变化回调

## 事件

图层通用事件（`show`/`hide`、`setopacity`、`add`/`remove` 等）见 [Layer](/api/layer)。
