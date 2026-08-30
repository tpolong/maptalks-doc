---
title: measurer.Common
---

# measurer.Common

measurer.Common 是测量器（Measurer）的 mixin 基类，为长度/面积测量提供统一入口。它是一个对象 mixin，不适合直接使用，被混入 `Identity`、`WGS84Sphere`、`BaiduSphere` 等测量器中，没有独立的构造函数。

```js
import { measurer } from "maptalks";

const m = measurer.Measurer.getInstance();
// Common 被混入所有测量器
console.log(m.measureLength([[0, 0], [1, 1]]));
```

## 属性 / 静态方法

（mixin 基类，无独立的属性与静态方法。）

## 方法

- `measureLength(c1, c2): number` — 测量两点（或坐标数组构成的折线）之间的距离。若 `c1` 为坐标数组，则累加各相邻点间的 `measureLenBetween`；否则返回两坐标间的测量距离。
