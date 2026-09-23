---
title: WMSTileLayer
---

# WMSTileLayer

WMSTileLayer 用于在地图上以瓦片形式加载 WMS（Web Map Service）服务，继承自 [TileLayer](/api/tile-layer)。实现基于 Leaflet 的 TileLayer.WMS，可通过 `layers`（必填）、`styles`、`format`、`transparent`、`version`、`crs` 等配置请求参数。

```js
import { Map, WMSTileLayer } from "maptalks";

const map = new Map("map", { center: [0, 0], zoom: 2 });

const layer = new WMSTileLayer("wms", {
  urlTemplate: "https://maps4.geosolutionsgroup.com/geoserver/osm/wms",
  crs: "EPSG:3857",
  layers: "osm",
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


<!-- api-gen:start -->
### WMSTileLayer 的其他静态方法

<!--@include: ./includes/api/wms-tile-layer-statics-missing.md-->

### 继承自 Layer 的静态方法

下列方法由父类 [Layer](/api/layer) 提供，本类的实例同样可以调用。

<!--@include: ./includes/api/layer-statics.md-->
<!-- api-gen:end -->

## 成员方法

- `getTileUrl(x, y, z): string` — 获取瓦片 `(x,y,z)` 的 WMS 请求 URL


<!-- api-gen:start -->
### WMSTileLayer 的其他公开方法

<!--@include: ./includes/api/wms-tile-layer-missing.md-->

### 继承自 TileLayer 的方法

下列方法由父类 [TileLayer](/api/tile-layer) 提供，本类的实例同样可以调用。

<!--@include: ./includes/api/tile-layer-methods.md-->

### 继承自 Layer 的方法

下列方法由父类 [Layer](/api/layer) 提供，本类的实例同样可以调用。

<!--@include: ./includes/api/layer-methods.md-->

### 混入的方法

本类通过混入获得以下能力的方法，详见对应页面：[JSONAble](/api/json-able)（`getJSONType`…）；[Eventable](/api/eventable)（`on`、`addEventListener`、`once`、`off`、`removeEventListener`、`listens`、`getListeningEvents`、`copyEventListeners`…）；[Renderable](/api/renderable)。
<!-- api-gen:end -->

## 事件

瓦片事件与图层通用事件见 [TileLayer](/api/tile-layer) / [Layer](/api/layer)。

<!-- api-gen:start -->
### 继承自 TileLayer 的事件

<!--@include: ./includes/api/tile-layer-events.md-->

### 继承自 Layer 的事件

<!--@include: ./includes/api/layer-events.md-->
<!-- api-gen:end -->
