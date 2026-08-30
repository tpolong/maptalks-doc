---
title: Sector
---

# Sector

Sector 是 maptalks 的扇形几何类，继承自 Circle。它由中心点、半径、起始角度和结束角度定义，用于表示扇形的面状要素，如雷达扫描区域或泊车半径。

```js
import { Sector } from "maptalks";
// 用法示例
const sector = new Sector([0, 0], 1000, 0, Math.PI / 2);
```

## 构造函数

```js
new Sector(center, radius, startAngle, endAngle, options?)
```

参数：

* `center` — 扇形的中心点坐标，如 `[x, y]`。
* `radius` — 扇形的半径。
* `startAngle` — 扇形的起始角度。
* `endAngle` — 扇形的结束角度。
* `options` — （可选）配置项，见下表。

## options 配置项

| 配置名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| numberOfShellPoints | `number` | 生成扇形外环的采样点数 | `60` |

## 成员方法

- `getStartAngle()` — 获取扇形的起始角度。
- `setStartAngle(angle)` — 设置扇形的起始角度。
- `getEndAngle()` — 获取扇形的结束角度。
- `setEndAngle(angle)` — 设置扇形的结束角度。
- `getShell()` — 获取扇形的外环。
- `getRotateOffsetAngle()` — 返回扇形的旋转偏移角度（固定为 90）。

## 静态方法

- `fromJSON(json)` — 从 JSON 对象创建 Sector。

## 事件

- `shapechange` — 当扇形的形状发生变化时触发。
