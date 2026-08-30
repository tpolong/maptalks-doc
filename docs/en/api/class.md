---
title: Class
---

# Class

`Class` is the root base class of the maptalks library. Every object (Map, Layer, geometries, etc.) inherits from it, directly or indirectly. It provides a unified options-merging and configuration mechanism: subclasses accept a configuration object through their constructor, merge it with the class defaults, and run initialization hooks registered via `addInitHook`.

Subclasses are defined with ES class syntax (`extends Class`), not an `extend` method. Provide default options with the static `mergeOptions`.

```js
import { Class } from "maptalks";

class Foo extends Class {
  // custom logic
}
Foo.mergeOptions({ color: "red" }); // set defaults for Foo

const foo = new Foo({ color: "blue" });
foo.config("color", "green"); // update config, returns foo
```

## Constructor

```js
new Class(options?)
```

Parameters:

* `options` — `Object`, optional. A configuration object merged into the instance's `options`.

## options

`Class` itself defines no configuration options. Subclasses declare defaults via the static `mergeOptions`, which are read/updated through `config()`.

## Methods

- `config(conf?, value?)` — With no args, returns the whole `options` object; with a string + value or an object, updates the config and returns `this` (fires the `onConfig` callback).
- `proxyOptions()` — Wraps `options` in a Proxy so key writes route through `config`.
- `onConfig(conf)` — Callback hook invoked when config changes; subclasses may override it.

## Static Methods

- `Class.addInitHook(fn, ...args)` — Register an initialization hook (`fn`) invoked with `args` during construction.
- `Class.include(...sources)` — Mix methods from source objects into the class prototype.
- `Class.mergeOptions(options)` — Merge the given options as class defaults and return the class itself (`this`).

## Events

`Class` fires no events itself. Mix in `Eventable` for event capability.
