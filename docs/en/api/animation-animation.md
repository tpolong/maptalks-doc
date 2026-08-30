---
title: Animation
---

# Animation

Animation is the tool object (namespace) of the animation engine. It holds animation speed constants and the `animate` factory function. It is not a class you instantiate with a constructor; instead you use it directly via `Animation.xxx`. It creates and returns a [Player](./animation-player.md) that drives style animations.

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

## Properties

- `Animation.speed: Object` — The preset animation speed constants: `{ slow: 2000, normal: 1000, fast: 500 }`.

## Static Methods

- `animate(styles, options, step, target): Player` — Creates an animation Player. `styles` are the styles to interpolate (keyframes), `options` are animation options (duration, easing, etc.), `step` is the per-frame callback, and `target` is the target object.
