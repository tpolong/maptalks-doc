---
title: Frame
---

# Frame

Frame is the animation frame data, describing the state of a single animation frame. It holds the interpolated styles (`styles`), the play state (`playState`), the symbol (`symbol`) and the frame's own state (`state`). It is usually created by the animation engine during playback and passed to the per-frame callback.

```js
import { Frame } from "maptalks";

const frame = new Frame(state, styles);
console.log(frame.styles);
```

## Constructor

```js
new Frame(state, styles)
```

Parameters:

* `state` — The frame state.
* `styles` — The styles of this frame.

## Properties

- `state: Object` — The frame state.
- `styles: Object` — The style values of this frame.
- `playState: String` — The play state.
- `symbol: Object` — The symbol of the frame.
