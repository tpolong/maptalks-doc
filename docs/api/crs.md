---
title: CRS
---

# CRS

CRS 是一个坐标系描述容器，表示 [GeoJSON](http://geojson.org/geojson-spec.html#coordinate-reference-system-objects) 定义的坐标参考系统（Coordinate Reference System）。它没有继承任何基类，由 `type` 和 `properties` 两部分组成，并提供若干预定义的常用坐标系常量。

```js
import { CRS } from "maptalks";
// 用法示例
const crs = new CRS("proj4", { proj: "+proj=longlat +datum=WGS84 +no_defs" });
console.log(crs.type); // proj4
```

## 构造函数

```js
new CRS(type, properties)
```

参数：

* `type` — CRS 的类型字符串，例如 `"proj4"`、`"epsg"`。
* `properties` — CRS 的属性对象，例如 `{ proj: "..." }`。

## 静态方法

- `CRS.createProj4(proj): CRS` — 使用 maptalks 创建 proj4 形式的 CRS，例如 `CRS.createProj4("+proj=longlat +datum=WGS84 +no_defs")`。
- `CRS.fromProjectionCode(code): CRS|null` — 根据 EPSG 代码（如 `"EPSG:4326"`）返回对应的内置 CRS，无效时返回 `null`。

## 预置常量

- `CRS.WGS84` — 预定义的 WGS84 坐标系（即 EPSG:4326）。
- `CRS.EPSG4326` — `CRS.WGS84` 的别名。
- `CRS.EPSG3857` — 谷歌地图使用的投影坐标系（别名 `EPSG:3785`、`GOOGLE`、`EPSG:900913`）。
- `CRS.IDENTITY` — 简单的笛卡尔坐标系，直接映射 x、y，适用于平面地图（室内地图、游戏地图）。
- `CRS.CGCS2000` — 中国官方坐标系（即 EPSG:4490），多数情况下可视为与 WGS84 相同。
- `CRS.EPSG4490` — `CRS.CGCS2000` 的别名。
- `CRS.BD09LL` — 百度地图使用的投影坐标系。
- `CRS.GCJ02` — 中国大多数在线地图服务使用的加密坐标系。

## 事件

CRS 没有事件。
