---
title: Control
---

# Control

Control is the abstract base class for map controls. It is the parent class of all panel-style controls (Attribution, Zoom, Scale, Overview, etc.). It manages the positioning and display of a DOM container on the map and provides common lifecycle capabilities (add, update, remove, show/hide). The static `positions` property lists all available position values.

```js
import { Control } from "maptalks";
// Control is an abstract base class, usually a subclass is used
const control = new Zoom().addTo(map);
```

## Constructor

```js
new Control(options)
```

Parameters:

* `options` — Control options.

## options

| Name | Type | Description | Default |
| --- | --- | --- | --- |
| `position` | `String` | The position of the control on the map. The base class has no default; each subclass provides one | `—` |
| `cssName` | `String` | The CSS class of the control | `null` |

## Member Methods

- `addTo(map): Control` — Adds the control to a map.
- `update()` — Updates the control.
- `getMap(): Map` — Gets the map the control is attached to.
- `getPosition(): Object` — Gets the control position, returning a position object (e.g. `{ top: 20, left: 20 }`).
- `setPosition(position): Control` — Sets the control position.
- `getContainerPoint(): Point` — Gets the pixel coordinate of the control in the map container.
- `getContainer(): HTMLElement` — Gets the parent container of the control.
- `getDOM(): HTMLElement` — Gets the DOM element of the control.
- `show(): Control` — Shows the control.
- `hide(): Control` — Hides the control.
- `isVisible(): boolean` — Whether the control is visible.
- `remove(): Control` — Removes the control from the map.

## Static Methods

- `positions: Object` — An object map of control position values, keyed by `top-left`/`top-right`/`bottom-left`/`bottom-right`, each mapping to a position object (e.g. `{ top: 20, left: 20 }`).

## Events

- `add` — Fired when the control is added to a map.
- `remove` — Fired when the control is removed.
- `positionchange` — Fired when the control position changes.
