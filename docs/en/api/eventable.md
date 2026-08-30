---
title: Eventable
---

# Eventable

`Eventable` is the event-system mixin factory of maptalks. It gives a host class full on/off/once/fire event capabilities. It is not instantiated on its own; instead it is merged into other classes (such as Map, GroupLayer) via `Class.include(Eventable)` or a similar mechanism, so those classes can listen for, dispatch, and manage events.

```js
import { Eventable } from "maptalks";

class MyThing extends Eventable(Class) { /* ... */ }

const thing = new MyThing();
thing.on("click", () => console.log("clicked"));
thing.fire("click");
thing.off("click", () => console.log("clicked"));
```

## Constructor

Mixin factory — no independent constructor. The host class gains event capability automatically after construction.

## options

No independent configuration options. Event behavior is governed by the host class's own `options`.

## Methods

- `on(events, handler, context?)` — Register a listener for the given event(s). `events` may be a single event name or space-separated names; `handler` is the callback; `context` optionally sets the `this` for the callback.
- `addEventListener(events, handler, context?)` — Alias of `on`.
- `off(events, handler, context?)` — Remove an event listener, matched by event name and `handler`; if `handler` is omitted, no listeners are removed.
- `removeEventListener(events, handler, context?)` — Alias of `off`.
- `once(events, handler, context?)` — Register a listener that fires only once, then removes itself.
- `listens(eventType, handler?, context?)` — Whether a listener exists for the given event; with `handler`, checks whether that exact callback is listened to.
- `getListeningEvents()` — Return all registered events and their listeners of the instance.
- `copyEventListeners(target)` — Copy this instance's listeners onto the `target` object.
- `fire(eventType, param?)` — Dispatch (fire) an event of the given type, passing `param` as the event data to listeners.

## Static Methods

None.

## Events

Concrete events are fired by the host class. The event types raised by `fire()` are what listeners receive.
