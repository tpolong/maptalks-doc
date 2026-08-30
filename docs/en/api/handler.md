---
title: Handler
---

# Handler

`Handler` is the abstract base class for all interaction handlers in maptalks. It implements the interaction logic between a map and the user, such as dragging, zooming, rotating, double-clicking, and keyboard operations. Subclasses implement `addHooks`/`removeHooks` to define behavior on enable/disable, and use `enable`/`disable` to control whether the handler is active.

```js
import { Handler } from "maptalks";

class MyHandler extends Handler {
  addHooks() {
    this.target.on("click", this._onClick, this);
  }
  removeHooks() {
    this.target.off("click", this._onClick, this);
  }
}

const handler = new MyHandler(map);
handler.enable();
```

## Constructor

```js
new Handler(target)
```

Parameters:

* `target` — `Object`. The object the handler acts on, usually a Map or an interactive component.

## options

`Handler` itself defines no configuration options.

## Methods

- `enable(): this` — Enable the handler, calling `addHooks` to begin listening for interactions.
- `disable(): this` — Disable the handler, calling `removeHooks` to unlisten.
- `enabled(): boolean` — Whether the handler is currently enabled.
- `remove()` — Remove and dispose of the handler.

### Abstract methods (to be implemented by subclasses)

- `addHooks()` — Executed on enable; register the required interaction event listeners.
- `removeHooks()` — Executed on disable; remove the registered interaction event listeners.

## Static Methods

None.

## Events

`Handler` fires no events itself; interaction events are dispatched by the host object (e.g. Map).
