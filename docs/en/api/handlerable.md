---
title: Handlerable
---

# Handlerable

`Handlerable` is the interaction-handler management mixin factory of maptalks. It lets a host class (such as Map) register, remove, and reuse multiple `Handler` subclasses. The host class binds a handler to a name via `addHandler` and unbinds it via `removeHandler`, enabling pluggable interaction management.

```js
import { Class, Handler, Handlerable } from "maptalks";

const MapWithHandlers = Class.extend({ /* ... */ }).include(Handlerable).include({
  onAdd() {
    this.addHandler("drag", DragHandler);
  }
});
```

## Constructor

Mixin factory — no independent constructor. The host class gains handler-management ability automatically after construction.

## options

No independent configuration options.

## Methods

- `addHandler(name, handlerClass): this` — Register and instantiate the `handlerClass` handler under the name `name`, returning `this` for chaining.
- `removeHandler(name): this` — Remove the handler registered as `name` and release resources, returning `this`.

## Static Methods

None.

## Events

None.
