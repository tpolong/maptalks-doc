---
title: Player
---

# Player

Player is the animation player that drives a single animation. It is created by [Animation.animate](./animation-animation.md) and can also be instantiated directly. It manages the whole process of an animation from start to finish, supporting play, pause, cancel, finish and reverse.

```js
import { Player } from "maptalks";

const player = new Player(animation, options, onFrame, target);
player.play();
```

## Constructor

```js
new Player(animation, options, onFrame, target?)
```

Parameters:

* `animation` — An animation frame ([Frame](./animation-frame.md)) or the animation definition.
* `options` — Animation options, such as `duration`, `easing`.
* `onFrame` — The per-frame callback.
* `target` — (Optional) The animation target object.

## Member Methods

- `play(): Player` — Starts or resumes playing the animation.
- `pause()` — Pauses the animation.
- `cancel()` — Cancels the animation.
- `finish()` — Immediately finishes the animation at its final state.
- `reverse()` — Plays the animation in reverse.
