---
title: WMSTileLayer
---

# WMSTileLayer

WMSTileLayer 用于在地图上以瓦片形式加载 WMS（Web Map Service）服务，继承自 [TileLayer](/api/tile-layer)。实现基于 Leaflet 的 TileLayer.WMS，可通过 `layers`（必填）、`styles`、`format`、`transparent`、`version`、`crs` 等配置请求参数。

```js
import { Map, WMSTileLayer } from "maptalks";

const map = new Map("map", { center: [0, 0], zoom: 2 });

const layer = new WMSTileLayer("wms", {
  urlTemplate: "https://demo.boundlessgeo.com/geoserver/ows",
  crs: "EPSG:3857",
  layers: "ne:ne",
  styles: "",
  version: "1.3.0",
  format: "image/png",
  transparent: true,
  uppercase: true,
}).addTo(map);
```

## 构造函数

```js
new WMSTileLayer(id, options)
```

参数：

* **id** `String` 图层 id。
* **options** `Object` WMS 配置项，见下表。

## options 配置项

| 配置名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| `service` | String | WMS 服务类型 | `'WMS'` |
| `layers` | String | 逗号分隔的 WMS 图层列表（必填） | `''` |
| `styles` | String | 逗号分隔的 WMS 样式 | `''` |
| `format` | String | WMS 图片格式（透明图层用 `'image/png'`） | `'image/jpeg'` |
| `transparent` | Boolean | 瓦片是否透明 | `false` |
| `version` | String | WMS 服务版本 | `'1.1.1'` |
| `crs` | String | 请求所用的坐标参考系，缺省取地图 CRS | `null` |
| `uppercase` | Boolean | WMS 请求参数名是否大写 | `false` |
| `detectRetina` | Boolean | 视网膜屏下用高分辨率瓦片替换 | `false` |
| `width` | Number | WMS 请求图片宽度（通常由 tileSize 决定） | — |
| `height` | Number | WMS 请求图片高度（通常由 tileSize 决定） | — |

其余瓦片配置项（`urlTemplate`、`tileSize`、`spatialReference` 等）见 [TileLayer](/api/tile-layer)。

## 静态方法

- `WMSTileLayer.fromJSON(layerJSON): WMSTileLayer | null` — 从 JSON 还原图层

## 成员方法

- `getTileUrl(x, y, z): string` — 获取瓦片 `(x,y,z)` 的 WMS 请求 URL

## 事件

瓦片事件与图层通用事件见 [TileLayer](/api/tile-layer) / [Layer](/api/layer)。
