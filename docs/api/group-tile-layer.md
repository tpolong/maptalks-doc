---
title: GroupTileLayer
---

# GroupTileLayer

GroupTileLayer 用于把多个 [TileLayer](/api/tile-layer) 组合在一起显示，继承自 [TileLayer](/api/tile-layer)。它让多个瓦片图层共享同一个 WebGL 上下文，避免触发浏览器"太多 active WebGL context"的上限，性能优于逐个单独添加 TileLayer。

```js
import { Map, GroupTileLayer, TileLayer } from "maptalks";

const map = new Map("map", { center: [0, 0], zoom: 2 });

const group = new GroupTileLayer("group-tiles", [
  new TileLayer("base", { urlTemplate: "https://{s}.example.com/base/{z}/{x}/{y}.png" }),
  new TileLayer("labels", { urlTemplate: "https://{s}.example.com/labels/{z}/{x}/{y}.png" }),
]).addTo(map);
```

## 构造函数

```js
new GroupTileLayer(id, layers, options?)
```

参数：

* **id** `String|Number` 图层 id。
* **layers** `TileLayer[]` 要添加的 TileLayer 数组。
* **options** `Object` 图层配置项（可选，见 [TileLayer](/api/tile-layer)）。

## options 配置项

| 配置名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| `maxCacheSize` | Number | 缓存的最大瓦片数 | `1024` |

其余瓦片配置项（`urlTemplate`、`tileSize`、`spatialReference` 等）见 [TileLayer](/api/tile-layer)。

## 静态方法

- `GroupTileLayer.fromJSON(layerJSON): GroupTileLayer | null` — 从 JSON 还原图层

## 成员方法

- `getLayers(): TileLayer[]` — 获取子图层列表
- `addLayer(tileLayers: TileLayer[] | TileLayer): this` — 添加子图层
- `removeLayer(tileLayers: TileLayer[] | TileLayer): this` — 移除子图层
- `clearLayers(): this` — 清空子图层
- `getLayer(id): TileLayer` — 获取子图层（等价于 getChildLayer）
- `getChildLayer(id): TileLayer` — 递归查找子图层
- `toJSON(): Object` — 导出图层 JSON
- `getTiles(z, parentLayer): TilesType` — 按 zoom 聚合子图层的瓦片

## 事件

瓦片事件与图层通用事件见 [TileLayer](/api/tile-layer) / [Layer](/api/layer)。
