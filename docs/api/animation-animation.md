---
title: Animation
---

# Animation

Animation 是动画引擎的工具对象（命名空间），集中了动画相关的速度常量与 `animate` 工厂函数。它不是可通过构造函数实例化的类，而是直接通过 `Animation.xxx` 使用。它用于创建并返回一个 [Player](./animation-player.md) 来驱动样式动画。

```js
import { Animation } from "maptalks";

const player = Animation.animate(
  { lineWidth: 5 },
  { duration: 1000, easing: "out" },
  (frame) => { /* ... */ },
  target
);

player.play();
```

## 属性

- `Animation.speed: Object` — 预设动画速度常量对象：`{ slow: 2000, normal: 1000, fast: 500 }`。

## 静态方法

- `animate(styles, options, step, target): Player` — 创建一个动画 Player。`styles` 为要插值的样式（关键帧），`options` 为动画配置项（如时长、缓动），`step` 为每帧回调，`target` 为目标对象。
