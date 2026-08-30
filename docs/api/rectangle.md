---
title: Rectangle
---

# Rectangle

Rectangle 是 maptalks 的矩形几何类，继承自 Polygon。它由西北角（northwest）、宽度和高度定义，常用于表示边界框或矩形区域。

```js
import { Rectangle } from "maptalks";
// 用法示例
const rect = new Rectangle([0, 0], 1000, 600);
```

## 构造函数

```js
new Rectangle(nw, width, height, options?)
```

参数：

* `nw` — 矩形的西北角坐标，如 `[x, y]`。
* `width` — 矩形的宽度。
* `height` — 矩形的高度。
* `options` — （可选）配置项。

## options 配置项

Rectangle 无特有配置项，配置项继承自 [Polygon](/api/polygon) / [Path](/api/path)；样式通过 `symbol` 控制。

## 成员方法

- `getCoordinates()` — 获取矩形的坐标（返回西北角）。
- `setCoordinates(nw)` — 设置矩形的西北角坐标。
- `getWidth()` — 获取矩形的宽度。
- `setWidth(width)` — 设置矩形的宽度。
- `getHeight()` — 获取矩形的高度。
- `setHeight(height)` — 设置矩形的高度。
- `getShell()` — 获取矩形的外环。
- `getHoles()` — 获取矩形的内环。
- `animateShow()` — 以动画方式显示矩形。

## 静态方法

- `fromJSON(json)` — 从 JSON 对象创建 Rectangle。

## 事件

- `positionchange` — 当矩形的位置发生变化时触发。
- `shapechange` — 当矩形的形状发生变化时触发。
