---
title: ParticleLayer
---

# ParticleLayer

ParticleLayer 是粒子动画图层，继承自 [CanvasLayer](/api/canvas-layer)，用来绘制随时间运动的粒子。它提供了渲染粒子的接口方法，可直接使用，但不能用 JSON 序列化/反序列化恢复；更建议通过子类化实现并覆写 `getParticles()`。

```js
import { Map, ParticleLayer } from "maptalks";

const map = new Map("map", { center: [0, 0], zoom: 2 });

const layer = new ParticleLayer("particle");

layer.getParticles = function (t) {
  return particles[t];
};

layer.addTo(map);
```

## 构造函数

```js
new ParticleLayer(id, options?)
```

参数：

* **id** `String` 图层 id。
* **options** `Object` 图层配置项（可选）。

## options 配置项

| 配置名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| `animation` | Boolean | 是否为动画图层 | `true` |
| `trail` | Number | 拖尾长度（越小拖尾越长） | `30` |
| `lineColor` | String | 粒子默认颜色，未指定时用 `#fff` | `null` |

## 成员方法

- `getParticles(t?): {point, color?, r?}[]` — 获取 `t` 时刻粒子位置的接口（覆写）
- `draw(context, view): void` — 在当前视图上绘制粒子

## 事件

图层通用事件（`show`/`hide`、`setopacity`、`add`/`remove` 等）见 [CanvasLayer](/api/canvas-layer) / [Layer](/api/layer)。
