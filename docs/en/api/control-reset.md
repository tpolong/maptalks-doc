---
title: control.Reset
---

# control.Reset

control.Reset is a map view reset control, extending [control.Control](/en/api/control). It shows a clickable reset button that restores the map to its initial view (or a specified view).

```js
import { control } from "maptalks";

const reset = new control.Reset({
  position: { top: 156, left: 20 },
}).addTo(map);
```

## Constructor

```js
new control.Reset(options?)
```

Parameters:

* `options` — `Object`, optional. See options below.

## Options

| Option | Type | Description | Default |
| --- | --- | --- | --- |
| `position` | `String \| Object` | control position | `{ top: 156, left: 20 }` |
| `view` | `Object` | view to restore (`{center, zoom, pitch, bearing}`); if unset, uses the view at add time | `null` |

Common options inherited from [control.Control](/en/api/control) also apply.

## Methods

- `buildOn(): HTMLElement` — Build the control DOM (reset button) and bind the click event.
- `onAdd()` — Called when the control is added; records the view to restore.
- `setView(view)` — Set the view to restore on reset.
- `onRemove()` — Called when the control is removed; unbinds the event.

> The reset button is `<div class="maptalks-reset">`; clicking calls `map.setView(this._view)`.

## Events

No specific events (inherits `add`/`remove`/`positionchange` from [control.Control](/en/api/control)).

## Usage

```js
const map = new Map("map", { center: [0, 0], zoom: 2 });
map.addControl(new control.Reset());
// After the user pans/zooms, clicking Reset restores this initial view.
```
