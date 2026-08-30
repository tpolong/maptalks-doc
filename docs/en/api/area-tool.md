---
title: AreaTool
---

# AreaTool

AreaTool is the area measurement tool. It extends `DistanceTool`. After the user draws a polygon on the map, the tool automatically calculates and displays the polygon's area. It reuses the measurement layers and labeling of DistanceTool, so it is used in much the same way as distance measurement.

```js
import { AreaTool } from "maptalks";

const areaTool = new AreaTool({
  metric: true,
  imperial: false
}).addTo(map);
```

## Constructor

```js
new AreaTool(options)
```

Parameters:

* `options` — AreaTool options, same as the `DistanceTool` options table.

## options

AreaTool has no dedicated options; its options are inherited from DistanceTool (see [DistanceTool](./distance-tool.md#options)).

## Member Methods

AreaTool has no dedicated methods; its member methods are all inherited from DistanceTool (see [DistanceTool](./distance-tool.md#member-methods)).
