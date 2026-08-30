---
title: Easing
---

# Easing

Easing 是缓动函数的工具对象（命名空间），提供了一系列常见的缓动函数，用于控制动画随时间的插值节奏。它不是通过构造函数实例化的类，而是直接通过 `Easing.xxx` 使用。可将其作为 `options.easing` 传入动画配置。

```js
import { Easing } from "maptalks";

const player = Animation.animate(
  styles,
  { duration: 1000, easing: Easing.outExpo(0.5) },
  onFrame,
  target
);
```

## 属性

- `Easing.outExpo: Function` — 指数减速缓动。
- `Easing.outQuint: Function` — 五次方减速缓动。
- `Easing.in: Function` — 加速缓动。
- `Easing.out: Function` — 减速缓动。
- `Easing.inAndOut: Function` — 先加速后减速缓动。
- `Easing.linear: Function` — 线性缓动。
- `Easing.upAndDown: Function` — 上下往返缓动。
