---
title: ParticleLayer
---

# ParticleLayer

ParticleLayer is a particle-animation layer extending [CanvasLayer](/en/api/canvas-layer), used to draw particles that move over time. It provides interface methods to render particles. You can use it directly, but it cannot be serialized/deserialized with JSON; it is more recommended to extend it with a subclass and override `getParticles()`.

```js
import { Map, ParticleLayer } from "maptalks";

const map = new Map("map", { center: [0, 0], zoom: 2 });

const layer = new ParticleLayer("particle");

layer.getParticles = function (t) {
  return particles[t];
};

layer.addTo(map);
```

## Constructor

```js
new ParticleLayer(id, options?)
```

Parameters:

* **id** `String` layer id.
* **options** `Object` layer options (optional).

## options

| Option | Type | Description | Default |
| --- | --- | --- | --- |
| `animation` | Boolean | whether the layer is an animated layer | `true` |
| `trail` | Number | trail length (smaller means a longer trail) | `30` |
| `lineColor` | String | default particle color, `#fff` when unset | `null` |

## Member Methods

- `getParticles(t?): {point, color?, r?}[]` — interface to get particle positions at time `t` (override)
- `draw(context, view): void` — draw particles on the current view

## Events

Common layer events (`show`/`hide`, `setopacity`, `add`/`remove`, etc.) — see [CanvasLayer](/en/api/canvas-layer) / [Layer](/en/api/layer).
