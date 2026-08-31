---
title: 坐标系与投影
---

# 坐标系与投影

maptalks 的地图默认使用 Web 墨卡托投影（EPSG:3857，即 Google/OSM 使用的瓦片坐标系）。通过 `Map` 的 `spatialReference` 配置，可以切换到其他内置坐标系（如 EPSG:4326），也可以结合 proj4js 等第三方库自定义投影。

> [!NOTE] 导入说明
> 本文的能力（`Map`、`TileLayer`、`Coordinate`、`GeoJSON`、`VectorLayer` 等）全部来自核心包 `maptalks`；proj4js 为第三方库，需单独安装：

```js
import { Map, TileLayer, Coordinate, GeoJSON, VectorLayer } from "maptalks";
import * as proj4 from "proj4"; // 自定义投影时使用
```

## 空间参考 spatialReference

`Map` 的 `spatialReference` 选项决定地图的空间参考，由三部分组成：

1. **`projection`**：投影，决定经纬度坐标与平面坐标的换算方式；
2. **`resolutions`**：缩放级别与对应的分辨率（米/像素）；
3. **`fullExtent`**：地图的全幅范围。

不设置时默认使用 `EPSG:3857`。maptalks 内置了以下预置：

| 预置 | 说明 |
| --- | --- |
| `EPSG:3857` | 默认值，Web 墨卡托投影，Google/OSM 等在线瓦片均基于此 |
| `EPSG:4326` | WGS84 经纬度坐标，天地图等国内瓦片服务常用 |
| `EPSG:4490` | CGCS2000 大地坐标系，分辨率与 4326 相同 |
| `BAIDU` | 百度地图投影 |
| `IDENTITY` | 平面直角坐标，x、y 直接映射，适合室内图、游戏地图等平面场景 |
| `PRESET-VT-3857` / `PRESET-VT-4326` | 矢量瓦片专用的 3857 / 4326 预置（另有 `PRESET-3857-512`、`PRESET-4326-512`、`PRESET-4490-512` 等 512 分辨率别名） |

最简单的用法是只指定投影名，`resolutions` 与 `fullExtent` 会自动采用对应预置：

```js
const map = new Map("map", {
  center: [105.08052356963802, 36.04231948670001],
  zoom: 4,
  spatialReference: {
    projection: "EPSG:4326",
  },
  baseLayer: new TileLayer("base", {
    urlTemplate: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
    subdomains: ["a", "b", "c", "d"],
  }),
});
```

## EPSG:4326 示例

使用 EPSG:4326 时，瓦片坐标系也相应变为经纬度网格，天地图等瓦片服务需要同时配合 `tileSystem` 设置。以官方示例（[epsg4326](/examples/#basic/tilelayer-projection/epsg4326)）为例：

```js
import { Map, TileLayer } from "maptalks";

const map = new Map("map", {
  center: [105.08052356963802, 36.04231948670001],
  zoom: 4,
  minZoom: 1,
  maxZoom: 18,
  spatialReference: {
    projection: "EPSG:4326",
  },
  baseLayer: new TileLayer("base", {
    tileSystem: [1, -1, -180, 90],
    urlTemplate:
      "https://t{s}.tianditu.gov.cn/vec_c/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=vec&STYLE=default&TILEMATRIXSET=c&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=YOUR_TK",
    subdomains: ["1", "2", "3", "4", "5"],
    attribution: "&copy; Tianditu",
  }),
});
```

其中 `tileSystem: [1, -1, -180, 90]` 表示瓦片原点在左上角经纬度 `(-180, 90)`、x 轴向右为正、y 轴向下为正，这是经纬度网格瓦片的典型配置。

## 自定义投影：proj4js

当地图不满足内置预置时，可以传入自定义的投影对象。投影对象需要提供 `project`（经纬度转平面坐标）与 `unproject`（平面坐标转经纬度）两个方法，返回 `Coordinate`；`measure` 用于声明距离/面积测量方式（平面直角坐标用 `"identity"`）。官方示例（[proj4js](/examples/#basic/tilelayer-projection/proj4js)）用 proj4 定义了一个与 EPSG:3857 等效的自定义投影：

```js
import { Coordinate, Map, TileLayer } from "maptalks";
import * as proj4 from "proj4";

// EPSG:3857 的 proj 定义
const proj3857 =
  "+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext  +no_defs";
const proj = proj4("WGS84", proj3857);

// 自定义投影对象
const projection = {
  code: "proj4-merc", // 投影的 code
  project: function (c) {
    // 从 wgs84 转换到 EPSG3857
    const pc = proj.forward(c.toArray());
    return new Coordinate(pc);
  },
  unproject: function (pc) {
    // 从 EPSG3857 转换回 wgs84
    const c = proj.inverse(pc.toArray());
    return new Coordinate(c);
  },
  // 告诉投影如何测量
  // 平面直角坐标请改为: measure: 'identity'
  measure: "EPSG:4326",
};

const map = new Map("map", {
  center: [-0.113049, 51.498568],
  zoom: 13,
  spatialReference: {
    projection: projection, // 由 proj4js 定义的投影
    resolutions: [
      // 地图的缩放级别与分辨率
      156543.03392804097, 78271.51696402048, 9135.75848201024,
      19567.87924100512, 9783.93962050256, 4891.96981025128, 2445.98490512564,
      1222.99245256282, 611.49622628141, 305.748113140705, 152.8740565703525,
      76.43702828517625, 38.21851414258813, 19.109257071294063,
      9.554628535647032, 4.777314267823516, 2.388657133911758,
      1.194328566955879, 0.5971642834779395, 0.29858214173896974,
    ],
    fullExtent: {
      // 地图的全幅范围
      top: 6378137 * Math.PI,
      left: -6378137 * Math.PI,
      bottom: -6378137 * Math.PI,
      right: 6378137 * Math.PI,
    },
  },
  baseLayer: new TileLayer("base", {
    urlTemplate: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
    subdomains: ["a", "b", "c", "d"],
    attribution: "&copy; OpenStreetMap contributors, &copy; CARTO",
  }),
});
```

自定义投影通常需要同时提供 `resolutions` 与 `fullExtent`（自定义投影无法从内置预置中推断）。

## 其他内置投影：百度、平面坐标

内置的 `BAIDU` 预置用于加载百度地图瓦片。百度瓦片的分辨率定义与 3857 不同，`spatialReference` 中只需声明投影名，分辨率与全幅范围会使用百度预置：

```js
const map = new Map("map-bd09", {
  center: [105.08052356963802, 36.04231948670001],
  zoom: 4,
  minZoom: 1,
  maxZoom: 19,
  spatialReference: {
    projection: "baidu",
  },
  baseLayer: new TileLayer("base", {
    urlTemplate:
      "http://online{s}.map.bdimg.com/tile/?qt=tile&x={x}&y={y}&z={z}&styles=pl",
    subdomains: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    attribution: '&copy; <a target="_blank" href="http://map.baidu.com">Baidu</a>',
  }),
});
```

`IDENTITY`（平面直角坐标）适合室内图、CAD 等平面场景，坐标直接使用平面 x/y，距离测量也按平面单位计算。

## 获取与切换空间参考

创建地图后可以通过以下方法获取与更新空间参考：

```js
// 获取空间参考对象
const spatialReference = map.getSpatialReference();
// 获取投影对象
const projection = map.getProjection();

// 切换到内置预置（支持传预置名或配置对象）
map.setSpatialReference("EPSG:4326");
map.setSpatialReference({ projection: "EPSG:3857" });

// 等价写法
map.config("spatialReference", { projection: "EPSG:4326" });
```

`setSpatialReference` 的入参可以是一个预置名字符串、一个 `{ projection, resolutions, fullExtent }` 配置对象，或一个包含自定义投影对象的配置。切换空间参考会触发 `spatialreferencechange` 事件。

## 相关示例

- [EPSG:4326 天地图](/examples/#basic/tilelayer-projection/epsg4326) · [proj4js 自定义投影](/examples/#basic/tilelayer-projection/proj4js)
- [不同投影对比](/examples/#basic/tilelayer-projection/projection) · [百度瓦片](/examples/#basic/tilelayer-projection/baidu) · [平面坐标](/examples/#basic/tilelayer-projection/identity)

## 相关 API

- [Map](https://maptalks.org/maptalks.js/api/0.x/Map.html) · [Coordinate](https://maptalks.org/maptalks.js/api/0.x/Coordinate.html) · [TileLayer](https://maptalks.org/maptalks.js/api/0.x/TileLayer.html)

> 本文档已与 maptalks 2026 源码核对（maptalks.js packages/maptalks 核心包源码）
