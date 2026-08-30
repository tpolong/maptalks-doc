---
title: Player
---

# Player

Player 是动画播放器，负责驱动一次动画的播放。它由 [Animation.animate](./animation-animation.md) 创建，也可直接实例化。它管理动画从开始到结束的过程，支持播放、暂停、取消、完成及反向播放。

```js
import { Player } from "maptalks";

const player = new Player(animation, options, onFrame, target);
player.play();
```

## 构造函数

```js
new Player(animation, options, onFrame, target?)
```

参数：

* `animation` — 动画帧（[Frame](./animation-frame.md)）或动画定义。
* `options` — 动画配置项，如 `duration`、`easing`。
* `onFrame` — 每帧回调函数。
* `target` — （可选）动画目标对象。

## 成员方法

- `play(): Player` — 开始或继续播放动画。
- `pause()` — 暂停动画播放。
- `cancel()` — 取消动画。
- `finish()` — 立即结束动画到最终状态。
- `reverse()` — 反向播放动画。
