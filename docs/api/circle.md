---
title: Circle
---

# Circle

Circle 是 maptalks 的圆形几何类，继承自 CenterMixin(Polygon)。它由中心点和半径定义，用于表示圆形的面状要素。

```js
import { Circle } from "maptalks";
// 用法示例
const marker = new Circle([0, 0], 1000);
```

## 构造函数

```js
new Circle(center, radius, options?)
```

参数：

* `center` — 圆的中心点坐标，如 `[x, y]`。
* `radius` — 圆的半径。
* `options` — （可选）配置项，见下表。

## options 配置项

| 配置名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| numberOfShellPoints | `number` | 生成圆形外环的采样点数 | `60` |

## 成员方法

- `getRadius()` — 获取圆的半径。
- `setRadius(radius)` — 设置圆的半径。
- `getShell()` — 获取圆的外环。
- `getHoles()` — 获取圆的内环。
- `animateShow()` — 以动画方式显示圆。

## 静态方法

- `fromJSON(json)` — 从 JSON 对象创建 Circle。

## 事件

- `shapechange` — 当圆的形状发生变化时触发。
