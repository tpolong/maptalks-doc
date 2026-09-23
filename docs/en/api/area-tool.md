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

<!-- api-gen:start -->
### Methods Inherited from DistanceTool

The following methods are provided by the parent class [DistanceTool](/en/api/distance-tool) and are available on instances of this class.

<!--@include: ./includes/api/distance-tool-methods.md-->

### Methods Inherited from DrawTool

The following methods are provided by the parent class [DrawTool](/en/api/draw-tool) and are available on instances of this class.

<!--@include: ./includes/api/draw-tool-methods.md-->

### Methods Inherited from MapTool

The following methods are provided by the parent class [MapTool](/en/api/map-tool) and are available on instances of this class.

<!--@include: ./includes/api/map-tool-methods.md-->

### Mixed-in Methods

This class gains the following method groups from mixins; see the linked pages for details: [Eventable](/en/api/eventable)（`on`、`addEventListener`、`once`、`off`、`removeEventListener`、`listens`、`getListeningEvents`、`copyEventListeners`…）.
<!-- api-gen:end -->

## Events

<!-- api-gen:start -->
### Events Inherited from DrawTool

<!--@include: ./includes/api/draw-tool-events.md-->

### Events Inherited from MapTool

<!--@include: ./includes/api/map-tool-events.md-->
<!-- api-gen:end -->
