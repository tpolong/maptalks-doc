---
title: Frame
---

# Frame

Frame 是动画帧数据，描述一帧动画的状态。它包含插值后的样式（`styles`）、播放状态（`playState`）、符号（`symbol`）以及帧自身状态（`state`）。通常由动画引擎在播放过程中生成并传递给每帧回调。

```js
import { Frame } from "maptalks";

const frame = new Frame(state, styles);
console.log(frame.styles);
```

## 构造函数

```js
new Frame(state, styles)
```

参数：

* `state` — 帧状态。
* `styles` — 该帧的样式。

## 属性

- `state: Object` — 帧状态。
- `styles: Object` — 该帧的样式值。
- `playState: String` — 播放状态。
- `symbol: Object` — 帧对应的符号。
