---
title: Polygon
---

# Polygon

Polygon 是 maptalks 的面几何类，继承自 Path。它由一个外环（shell）和若干可选的内环（holes）构成，用于表示多边形区域。

```js
import { Polygon } from "maptalks";
// 用法示例
const poly = new Polygon([[0, 0], [0, 10], [10, 10], [10, 0]]);
```

## 构造函数

```js
new Polygon(coordinates, options?)
```

参数：

* `coordinates` — 多边形的坐标数组，可以是单个外环，也可以是 `[外环, 内环1, 内环2, ...]` 的形式。
* `options` — （可选）配置项。

## options 配置项

Polygon 的配置项继承自 [Path](/api/path)（基类），主要通过 `symbol` 控制样式：

| 配置名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| `symbol` | Object | 面样式，含 polygonFill/polygonOpacity/lineColor/lineWidth 等 | — |
| `smoothness` | Number | 平滑程度（贝塞尔平滑） | `false` |
| `enableClip` | Boolean | 是否启用裁剪 | `true` |
| `enableSimplify` | Boolean | 渲染前是否简化 | `true` |
| `simplifyTolerance` | Number | 简化容差 | `2` |

## 成员方法

- `setCoordinates(coords)` — 设置多边形的坐标。
- `getCoordinates()` — 获取多边形的坐标（外环与内环）。
- `getShell()` — 获取多边形的外环。
- `getHoles()` — 获取多边形的所有内环。
- `hasHoles(): boolean` — 判断多边形是否包含内环。
- `getCenterInExtent(extent)` — 返回给定 extents 范围内的中心点。
- `getOutline()` — 返回多边形的轮廓内容。

## 静态方法

- `fromJSON(json)` — 从 JSON 对象创建 Polygon。

## 事件

- `shapechange` — 当多边形的形状发生变化时触发。
