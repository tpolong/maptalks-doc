---
title: control.Compass
---

# control.Compass

control.Compass is a map compass control, extending [control.Control](/en/api/control). It shows a clickable compass that rotates with the map bearing; clicking it resets the bearing.

```js
import { control } from "maptalks";

const compass = new control.Compass({
  position: "top-left",
}).addTo(map);
```

## Constructor

```js
new control.Compass(options?)
```

Parameters:

* `options` — `Object`, optional. See options below.

## Options

| Option | Type | Description | Default |
| --- | --- | --- | --- |
| `position` | `String \| Object` | control position | `{ top: 120, left: 20 }` |

Common options inherited from [control.Control](/en/api/control) (e.g. `cssName`) also apply.

## Methods

- `buildOn(map): HTMLElement` — Build the control DOM (compass element) and listen to map rotate/zoom events to update the compass rotation.
- `onAdd()` — Called when the control is added to the map; refreshes the compass direction immediately.
- `onRemove()` — Called when the control is removed; unbinds the map events.

> The compass element is `<div class="maptalks-compass">`; clicking triggers `_resetView` (resets bearing to 0).

## Events

No specific events (inherits `add`/`remove`/`positionchange` from [control.Control](/en/api/control)).

## Usage

```js
const map = new Map("map", { ... });
map.addControl(new control.Compass({ position: "top-left" }));
```
