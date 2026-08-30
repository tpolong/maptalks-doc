---
title: 数据加载与序列化
---

# 数据加载与序列化

maptalks 支持多种方式将外部数据加载到地图中，也可以把地图、图层、几何序列化为 JSON，用于保存、传输或复制场景。本文围绕官方示例介绍 GeoJSON 加载/导出、向图层添加几何，以及图层与地图的 JSON 序列化。

> [!NOTE] 导入说明
> 本文的能力（`Map`、`TileLayer`、`VectorLayer`、几何类、`GeoJSON` 等）全部来自核心包 `maptalks`：

```js
import { Map, TileLayer, VectorLayer, Marker, Rectangle, GeoJSON, Geometry, Layer } from "maptalks";
```

## GeoJSON 加载

[GeoJSON](https://geojson.org) 是 Web 地图中最常见的数据格式。`GeoJSON.toGeometry(geoJSON)` 静态方法把一个或多个 GeoJSON 对象转换为 maptalks 几何，之后可以像普通几何一样添加到图层：

```js
import { Map, TileLayer, VectorLayer, GeoJSON } from "maptalks";

const map = new Map("map", {
  center: [-0.113049, 51.498568],
  zoom: 14,
  baseLayer: new TileLayer("base", {
    urlTemplate: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
    subdomains: ["a", "b", "c", "d"],
    attribution:
      "&copy; <a href='http://osm.org'>OpenStreetMap</a> contributors, &copy; <a href='https://carto.com/'>CARTO</a>",
  }),
  layers: [new VectorLayer("v")],
});

const json = {
  type: "Feature",
  geometry: {
    type: "Point",
    coordinates: [-0.113049, 51.498568],
  },
  properties: {
    name: "point marker",
  },
};
const marker = GeoJSON.toGeometry(json).addTo(map.getLayer("v"));
```

`toGeometry` 的入参可以是：

- 单个 GeoJSON 对象（`Feature` / `Geometry`），返回单个几何；
- `FeatureCollection` 或 GeoJSON 数组，返回几何数组；
- GeoJSON 字符串（内部会先解析）。

它还接受两个可选回调：`foreachFn` 对每个转换出的几何执行操作（例如统一设置符号），`filterFn` 过滤不需要的几何：

```js
const geometries = GeoJSON.toGeometry(
  featureCollection,
  (geo) => geo.setSymbol({ lineColor: "#fff", lineWidth: 0.5 }),
  (geo) => geo.getType() !== "Polygon"
);
```

数据量较大时可以改用异步版本 `GeoJSON.toGeometryAsync(geoJSON, foreachFn, countPerTime, filterFn)`，它会分批转换避免阻塞 UI：

```js
GeoJSON.toGeometryAsync(featureCollection, null, 2000).then((geos) => {
  layer.addGeometry(geos);
});
```

相关示例：[GeoJSON 转几何](/examples/#basic/json/geojson-to-geometry)。

## 几何导出为 GeoJSON

每个几何都有 `toGeoJSON()` 方法，把它导出为一个 GeoJSON `Feature`，几何的 `properties` 也会一并导出：

```js
import { Map, TileLayer, VectorLayer, Marker } from "maptalks";

const map = new Map("map", {
  center: [-0.113049, 51.498568],
  zoom: 14,
  baseLayer: new TileLayer("base", {
    urlTemplate: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
    subdomains: ["a", "b", "c", "d"],
    attribution:
      "&copy; <a href='http://osm.org'>OpenStreetMap</a> contributors, &copy; <a href='https://carto.com/'>CARTO</a>",
  }),
  layers: [new VectorLayer("v")],
});

const marker = new Marker([-0.113049, 51.498568], {
  properties: {
    name: "point marker",
  },
}).addTo(map.getLayer("v"));

// {"type":"Feature","geometry":{"type":"Point","coordinates":[...]},"properties":{"name":"point marker"}}
const geojson = marker.toGeoJSON();
```

相关示例：[几何转 GeoJSON](/examples/#basic/json/geometry-to-geojson)。

## 向图层添加几何

创建 `VectorLayer` 时可以把几何数组作为第二个参数传入，之后用 `addGeometry` 继续添加：

```js
const c = [-0.113049, 51.498568];

// 构造时传入几何数组
const layer = new VectorLayer("v", [new Marker(c), new Rectangle(c, 1000, 800)]);

// 追加几何，可以传单个、数组，也可以传多个参数
layer.addGeometry(new Marker(c));
layer.addGeometry([new Marker(c), new Rectangle(c, 1000, 800)]);
layer.addGeometry(marker1, marker2);

// 传入 GeoJSON FeatureCollection 会被自动转换为几何后添加
layer.addGeometry(featureCollection);

// fitView 为 true 时自动调整地图视口以完整显示新增几何
layer.addGeometry(new Marker(c), true);
```

`addGeometry` 的第二个参数 `fitView` 还可以是一个对象，用于配置视口动画（`easing`、`duration` 等）。相关示例：[几何 JSON](/examples/#basic/json/geometry-json)。

## 图层 JSON 序列化

图层（及其中的几何）可以通过 `toJSON()` 序列化为 JSON，再用 `Layer.fromJSON(json)` 反序列化出新图层。官方示例用它把图层复制到另一张地图：

```js
const c = [-0.113049, 51.498568];
const map = new Map("map", {
  center: c,
  zoom: 13,
  baseLayer: new TileLayer("base", {
    urlTemplate: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
    subdomains: ["a", "b", "c", "d"],
  }),
  layers: [new VectorLayer("v0", [new Marker(c)])],
});

const map1 = new Map("map1", {
  center: c,
  zoom: 13,
  baseLayer: new TileLayer("base1", {
    urlTemplate: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
    subdomains: ["a", "b", "c", "d"],
  }),
});

// 通过 JSON 复制图层
Layer.fromJSON(map.getLayer("v0").toJSON()).addTo(map1);
```

`toJSON()` 的结果包含图层的类型、id、配置与几何数组；`VectorLayer.toJSON(options)` 还可以通过 `options.geometries` 透传参数给每个几何的 `toJSON`。相关示例：[图层 JSON](/examples/#basic/json/layer-json)。

## 几何 JSON 序列化

单个几何同样支持 `toJSON()` / `Geometry.fromJSON(json)`。`Geometry.fromJSON` 也接受几何 JSON 数组，返回几何数组：

```js
const rect = new Rectangle(c, 1000, 800);
const newLayer = new VectorLayer("v").addTo(map1);

// 通过 JSON 复制几何
Geometry.fromJSON(rect.toJSON()).addTo(newLayer);
```

相关示例：[几何 JSON](/examples/#basic/json/geometry-json)。

## 地图 JSON 序列化

整张地图可以用 `map.toJSON()` 序列化，包含地图配置（center、zoom、bearing、pitch）、`baseLayer` 与所有图层：

```js
const mapJSON = map.toJSON();
```

`toJSON(options)` 支持以下选项控制导出内容：

- `baseLayer`：是否导出底图；
- `layers`：`true` 导出全部图层，或一个 `{ id, options }` 数组按需导出指定图层；
- `clipExtent`：只导出与指定范围相交的几何（`true` 表示地图当前可视范围）。

用 `Map.fromJSON(container, mapJSON)` 从 JSON 还原地图（第三个参数 `options` 可控制是否导入底图与图层）：

```js
import { Map } from "maptalks";

const mapJSON = {
  version: "1.0",
  options: {
    center: { x: -0.113049, y: 51.49856800000001 },
    zoom: 13,
  },
  baseLayer: {
    type: "TileLayer",
    id: "base",
    options: {
      urlTemplate: "https://{s}.tile.osm.org/{z}/{x}/{y}.png",
      subdomains: ["a", "b", "c"],
    },
  },
  layers: [
    {
      type: "VectorLayer",
      id: "v",
      geometries: [
        {
          feature: {
            type: "Feature",
            geometry: { type: "Point", coordinates: [-0.113049, 51.498568] },
          },
        },
      ],
    },
  ],
};

Map.fromJSON("map", mapJSON);
```

相关示例：[地图转 JSON](/examples/#basic/json/map-to-json)、[JSON 转地图](/examples/#basic/json/json-to-map)。

## 相关 API

- [GeoJSON](https://maptalks.org/maptalks.js/api/0.x/GeoJSON.html) · [Geometry](https://maptalks.org/maptalks.js/api/0.x/Geometry.html) · [VectorLayer](https://maptalks.org/maptalks.js/api/0.x/VectorLayer.html)
- [Layer](https://maptalks.org/maptalks.js/api/0.x/Layer.html) · [Map](https://maptalks.org/maptalks.js/api/0.x/Map.html)

> 本文档已与 maptalks 2026 源码核对（maptalks.js packages/maptalks 核心包源码）
