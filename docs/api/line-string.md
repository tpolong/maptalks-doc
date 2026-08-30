---
title: LineString
---

# LineString

LineString 是 maptalks 的线几何类，继承自 Path。它由一串坐标点构成一条折线，支持设置箭头样式与箭头放置位置，常用于表示道路、轨迹等线性要素。

```js
import { LineString } from "maptalks";
// 用法示例
const draw = new LineString([[0, 0], [1, 1], [2, 0]]);
```

## 构造函数

```js
new LineString(coordinates, options?)
```

参数：

* `coordinates` — 线段的坐标数组，支持 `[[x, y], ...]`、`[[x, y, z], ...]` 或 `[{x, y}, ...]` 等形式。
* `options` — （可选）配置项，见下表。

## options 配置项

| 配置名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| arrowStyle | `string \| Array` | 箭头样式，`'classic'` 或 `[宽, 高]` | `null` |
| arrowPlacement | `string` | 箭头放置位置：`'vertex-last'`、`'vertex-first'`、`'vertex-firstlast'` 或 `'point'` | `'vertex-last'` |

## 成员方法

- `setCoordinates(coords)` — 设置线的坐标点。
- `getCoordinates()` — 获取线的坐标点。
- `getCenterInExtent(extent)` — 返回给定 extents 范围内的中心点。
- `getOutline()` — 返回线的轮廓内容。

## 静态方法

- `fromJSON(json)` — 从 JSON 对象创建 LineString。

## 事件

- `shapechange` — 当线的形状发生变化时触发。
