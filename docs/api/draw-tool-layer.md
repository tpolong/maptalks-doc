---
title: DrawToolLayer
---

# DrawToolLayer

DrawToolLayer 是承载绘制结果的图层，继承自 [OverlayLayer](/api/overlay-layer)。它自身不参与渲染，而是按几何类型把几何分发到内部的 marker/line/polygon 三个子图层，并始终保持隐藏。使用时需先通过 `setLayerClass()` 注册各类型的图层类。

```js
import { Map, DrawToolLayer, MarkerLayer, LineStringLayer, PolygonLayer } from "maptalks";

const map = new Map("map", { center: [0, 0], zoom: 2 });

DrawToolLayer.setLayerClass(MarkerLayer, LineStringLayer, PolygonLayer);

const layer = new DrawToolLayer("draw-tool").addTo(map);
```

## 构造函数

```js
new DrawToolLayer(id, geometries?, options?)
```

参数：

* **id** `String` 图层 id。
* **geometries** `Geometry[]`（可选）要添加的几何。
* **options** `Object` 图层配置项（可选）。

## options 配置项

| 配置名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| `renderer` | String | 渲染器（DrawToolLayer 自身无渲染器） | `null` |
| `depthFunc` | String | 深度函数 | `'always'` |
| `sceneConfig` | Object | 场景配置，构造时会设为 `{ depthFunc }` | `null` |
| `enableAltitude` | Boolean | 是否启用高度 | — |
| `enableSimplify` | Boolean | 是否启用简化 | — |

## 静态方法

- `DrawToolLayer.setLayerClass(markerLayerClass, lineLayerClass, polygonLayerClass): void` — 设置各几何类型对应的图层类

## 成员方法

- `addGeometry(geometries: Geometry | Geometry[]): this` — 添加几何并按类型分发到子图层
- `removeGeometry(geometries: Geometry | Geometry[]): void` — 移除几何
- `getGeometryById(id): Geometry` — 按 id 在子图层中查找几何
- `clear(): this` — 清空
- `bringToFront(): this` — 子图层置顶

## 事件

图层通用事件（`show`/`hide`、`setopacity`、`add`/`remove` 等）见 [OverlayLayer](/api/overlay-layer) / [Layer](/api/layer)。
