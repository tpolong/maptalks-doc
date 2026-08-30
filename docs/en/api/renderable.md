---
title: Renderable
---

# Renderable

`Renderable` is the renderer register/lookup mixin factory of maptalks. It gives a host class (such as Map, Layer, Geometry) the ability to register and retrieve renderer classes by name. Renderer classes are registered with `registerRenderer` under a name, and the host class later looks them up with `getRendererClass` to create the matching renderer at runtime.

```js
import { Class, Renderable } from "maptalks";

const MyRenderer = /* some renderer class */;
Renderable.registerRenderer("my-renderer", MyRenderer);

const RenderableClass = Class.extend({ /* ... */ }).include(Renderable);
const RendererClass = RenderableClass.getRendererClass("my-renderer");
```

## Constructor

Mixin factory — no independent constructor. The host class gains renderer register/lookup ability automatically after construction.

## options

No independent configuration options.

## Methods

No instance methods; the core capability is provided by the static methods.

## Static Methods

- `Renderable.registerRenderer(name, clazz)` — Register a renderer class `clazz` under the name `name`.
- `Renderable.getRendererClass(name)` — Return the renderer class registered under the name `name`.

## Events

None.
