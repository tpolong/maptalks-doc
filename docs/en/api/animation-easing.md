---
title: Easing
---

# Easing

Easing is the tool object (namespace) of easing functions. It provides a set of common easing functions used to control the interpolation rhythm of an animation over time. It is not a class you instantiate with a constructor; you use it directly via `Easing.xxx`. It can be passed as `options.easing` to animation options.

```js
import { Easing } from "maptalks";

const player = Animation.animate(
  styles,
  { duration: 1000, easing: Easing.outExpo(0.5) },
  onFrame,
  target
);
```

## Properties

- `Easing.outExpo: Function` — Exponential deceleration easing.
- `Easing.outQuint: Function` — Quintic deceleration easing.
- `Easing.in: Function` — Accelerating easing.
- `Easing.out: Function` — Decelerating easing.
- `Easing.inAndOut: Function` — Accelerating then decelerating easing.
- `Easing.linear: Function` — Linear easing.
- `Easing.upAndDown: Function` — Bouncing up-and-down easing.
