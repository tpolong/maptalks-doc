---
title: MapTool
---

# MapTool

MapTool is the abstract base class for map tools. It extends `Class` and `Eventable`. It is the parent class of all interactive map tools (such as DrawTool, DistanceTool, etc.), providing the common capability to enable/disable a tool and attach it to a map. Typical usage is to create a concrete tool subclass and attach it to the map with `addTo(map)`.

```js
import { MapTool } from "maptalks";
// MapTool is an abstract base class, usually a subclass is used
const tool = new DrawTool();
tool.addTo(map);
```

## Constructor

```js
new MapTool(options)
```

Parameters:

* `options` — Tool options.

## Member Methods

- `addTo(map): MapTool` — Adds the tool to a map and returns itself for chaining.
- `getMap(): Map` — Gets the map the tool is attached to.
- `enable()` — Enables the tool.
- `disable()` — Disables the tool.
- `isEnabled(): boolean` — Whether the tool is currently enabled.
- `remove()` — Removes the tool from the map.

## Events

- `add` — Fired when the tool is added to a map.
- `enable` — Fired when the tool is enabled.
- `disable` — Fired when the tool is disabled.
- `remove` — Fired when the tool is removed.
