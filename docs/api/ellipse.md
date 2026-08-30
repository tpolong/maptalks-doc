---
title: Ellipse
---

# Ellipse

Ellipse 是 maptalks 的椭圆几何类，继承自 CenterMixin(Polygon)。它以中心点、宽度和高度定义，用于表示圆形或椭圆形的面状要素。

```js
import { Ellipse } from "maptalks";
// 用法示例
const ellipse = new Ellipse([0, 0], 1000, 600);
```

## 构造函数

```js
new Ellipse(center, width, height, options?)
```

参数：

* `center` — 椭圆的中心点坐标，如 `[x, y]`。
* `width` — 椭圆的宽度。
* `height` — 椭圆的高度。
* `options` — （可选）配置项，见下表。

## options 配置项

| 配置名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| numberOfShellPoints | `number` | 生成椭圆外环的采样点数 | `81` |

## 成员方法

- `getWidth()` — 获取椭圆的宽度。
- `setWidth(width)` — 设置椭圆的宽度。
- `getHeight()` — 获取椭圆的高度。
- `setHeight(height)` — 设置椭圆的高度。
- `getShell()` — 获取椭圆的外环。
- `getHoles()` — 获取椭圆的内环。
- `animateShow()` — 以动画方式显示椭圆。

## 静态方法

- `fromJSON(json)` — 从 JSON 对象创建 Ellipse。

## 事件

- `shapechange` — 当椭圆的形状发生变化时触发。
