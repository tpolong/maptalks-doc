---
title: CenterMixin
---

# CenterMixin

CenterMixin 是一个混入（Mixin）工厂函数，为基于中心点的几何类（如 [Marker](/api/marker)、Circle、Ellipse 等）提供统一的坐标读写能力。它通过 `getCoordinates()`/`setCoordinates()` 访问几何的中心坐标，并维持投影坐标缓存。它不是一个可直接实例化的类，也没有独立的构造函数。

```js
import { Marker } from "maptalks";

// CenterMixin 被混入到基于中心的几何类中
const marker = new Marker([0, 0]);
marker.setCoordinates([10, 20]);          // 混入方法
console.log(marker.getCoordinates());     // Coordinate [10, 20]
```

## 构造函数

混入，无独立构造。CenterMixin 通过 `setCoordinates` 方法整合进 Marker、Circle、Ellipse 等基于中心点的几何类。

## options 配置项

混入，无独立 options。配置项由宿主几何类提供。

## 成员方法

- `getCoordinates(): Coordinate` — 获取几何的中心点坐标。
- `setCoordinates(coordinates): this` — 设置几何的中心点，更新投影坐标并触发 `positionchange` 事件。参数可为 `Coordinate` 或 `[x, y, z]` 数组。

## 事件

- `positionchange` — 中心点位置改变时触发。
