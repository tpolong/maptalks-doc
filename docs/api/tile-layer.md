---
title: TileLayer
---

# TileLayer

TileLayer是用于显示瓦片地图服务（如 Google Maps、OSM、高德等）的基类图层，继承自 [Layer](/api/layer)。它把瓦片URL模板、子域名、空间参考、瓦片尺寸、偏移、重复世界、缓存与加载动画等能力封装为配置项与一组计算/控制方法。

```js
import { Map, TileLayer } from "maptalks";

const map = new Map("map", { center: [0, 0], zoom: 2 });
const layer = new TileLayer("base", {
  urlTemplate: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
  subdomains: ["a", "b", "c", "d"],
}).addTo(map);
```

## 构造函数

```js
new TileLayer(id, options)
```

参数：

* **id** `String` 图层id。
* **options** `Object` 图层配置项（可选）。

## options 配置项

### 瓦片特有

| 配置名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| `urlTemplate` | String\|Function | URL模板，支持`{x}{y}{z}{s}`占位符；也可传函数`(x,y,z,domain)=>url` | `null` |
| `subdomains` | `String[]` | 替换`{s}`的子域名数组 | `null` |
| `spatialReference` | Object | 瓦片图层空间参考，缺省继承地图 | `null` |
| `tileSize` | Number\|`[n,n]` | 瓦片图片尺寸 | `[256, 256]` |
| `offset` | Number[]\|Function | 瓦片整体偏移 | `[0,0]` |
| `tileSystem` | `[sx,sy,ox,oy]`\|String | 瓦片系统或预设名 | `null` |
| `maxAvailableZoom` | Number | 瓦片可用最大zoom，地图放大超过时复用该级 | `null` |
| `repeatWorld` | Boolean | 是否在世界外重复加载瓦片 | `true` |
| `background` | Boolean | 交互后是否绘制背景 | `true` |
| `fadeAnimation` | Boolean | 瓦片淡入动画 | `true` |
| `fadeDuration` | Number | 淡入时长（ms） | `167` |
| `crossOrigin` | String | 瓦片图片crossOrigin属性 | `null` |
| `errorUrl` | String | 加载失败时替换的图片 | `null` |
| `token` | String | 替换`{token}`的令牌 | `null` |
| `customTags` | Object | 模板中自定义标签值 | `null` |
| `maxCacheSize` | Number | 缓存的最大瓦片数 | `256` |
| `zoomOffset` | Number | 地图与瓦片zoom之间偏移 | `0` |
| `cascadeTiles` | Boolean | 绘制不同zoom的级联瓦片 | `true` |
| `renderer` | String | 渲染器类型（gl/canvas） | `webgl?'gl':'canvas'` |
| `debug` | Boolean | 瓦片带边框和坐标标题 | `false` |

### 继承自 Layer

`attribution`、`minZoom`、`maxZoom`、`visible`、`opacity`、`zIndex`、`hitDetect` 等通用配置项见 [Layer](/api/layer)。

## 成员方法

### 瓦片URL与尺寸

- `getTileUrl(x, y, z): string` — 获取瓦片`(x,y,z)`的URL（支持函数式或模板替换，注入token/customTags/subdomains）
- `getTileSize(id?): Size` — 获取瓦片尺寸

### 瓦片计算

- `getTiles(z, parentLayer): TilesType` — 获取zoom级别的瓦片描述集合
- `getTileId(x, y, zoom, id): string` — 获取瓦片唯一id

### 缩放与空间参考

- `getSpatialReference(): SpatialReference` — 获取瓦片空间参考
- `getMinZoom(): number` / `getMaxZoom(): number` — 获取最小/最大缩放
- `getMaxAvailableZoom(): number` — 获取最大可用缩放

### 图层控制

- `forceReload(): this` — 强制重载图层
- `clear(): this` — 清空图层
- `toJSON(): Object` — 导出图层JSON

## 静态方法

- `TileLayer.fromJSON(layerJSON): TileLayer | null` — 从JSON还原图层

## 事件

| 事件 | 触发时机 |
| --- | --- |
| `tileload` | 瓦片加载成功 |
| `tileerror` | 瓦片加载出错 |
| `tiledelete` | 瓦片被删除 |
| `forcereloadstart` / `forcereloadend` | 强制重载开始/结束 |
| `clear` | 清空图层 |

图层通用事件（`idchange`、`setopacity`、`show`/`hide`、`layerload`、`add`/`remove` 等）见 [Layer](/api/layer)。

## TileSystem

`TileSystem` 是瓦片系统描述工具类，描述瓦片X/Y轴索引方向与世界投影坐标系原点。可通过 `options.tileSystem` 传入内置预设名或 `[sx, sy, ox, oy]` 四元数组。

内置预设：

| 常量名 | 含义 |
| --- | --- |
| `web-mercator` | Web Mercator（google/bing/高德） |
| `tms-global-mercator` | TMS / mapbox mbtiles（EPSG:3857） |
| `global-geodetic` | EPSG:4326 全球地理网格 |
| `tms-global-geodetic` | TMS / OSGEO（EPSG:4326） |
| `baidu` | 百度地图 |

```js
map.on("zoomend", () => {});
layer.on("tileload", (e) => {
  console.log("tile loaded", e.tileInfo);
});
```
