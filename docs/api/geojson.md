---
title: GeoJSON
---

# GeoJSON

GeoJSON 是 maptalks 的 GeoJSON 工具对象（非几何类），用于在 GeoJSON 数据与 maptalks [Geometry](/api/geometry) 之间进行转换，并提供大数据量时的异步分页转换与远程文件抓取能力。它是一个命名空间对象，所有方法均为静态调用，不能实例化。

```js
import { GeoJSON } from "maptalks";

const geos = GeoJSON.toGeometry(collection, geo => geo.config("draggable", true));
```

## 方法

- `toGeometry(geoJSON, foreachFn?, filterFn?): Geometry | Geometry[]` — 将一个或多个 GeoJSON 对象转换为几何体。`geoJSON` 可为对象、对象数组或 GeoJSON 字符串；`foreachFn` 对每个几何回调，`filterFn` 过滤结果。输入为 FeatureCollection 时返回几何数组。
- `toGeometryAsync(geoJSON, foreachFn?, countPerTime?, filterFn?): Promise<Geometry[]>` — 异步分页转换，每帧最多转换 `countPerTime`（默认 `2000`）个要素，避免阻塞主线程，返回 Promise。
- `fetch(url, countPerTime?): Promise<object>` — 通过 Worker 异步请求大容量 GeoJSON 文件（默认每批 `2000` 个要素），解决主线程阻塞问题，resolve 一个 FeatureCollection 对象。

```js
// 异步分页转换
GeoJSON.toGeometryAsync(geoJSON).then(geos => {
  console.log(geos);
});

// Worker 抓取大文件
GeoJSON.fetch("https://abc.com/file.geojson", 2000).then(geojson => {
  console.log(geojson);
});
```
