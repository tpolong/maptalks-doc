---
title: Zoom
---

# Zoom

Zoom is the zoom control. It extends `Control`. It provides zoom-in/zoom-out buttons on the map, and can also achieve continuous zooming via the scroll wheel (`seamless`). It is displayed by default at the top-left corner.

```js
import { Zoom } from "maptalks";

const zoom = new Zoom({
  position: "top-left",
  zoomLevel: true,
  seamless: true
}).addTo(map);
```

## Constructor

```js
new Zoom(options)
```

Parameters:

* `options` — Zoom control options.

## options

| Name | Type | Description | Default |
| --- | --- | --- | --- |
| `position` | `String` | The control position | `"top-left"` |
| `zoomLevel` | `Boolean` | Whether the current zoom level is shown | `true` |
| `seamless` | `Boolean` | Whether seamless continuous zooming is supported | `false` |

## Methods

<!-- api-gen:start -->
### Other Public Methods of Zoom

<!--@include: ./includes/api/control-zoom-missing.md-->

### Methods Inherited from Control

The following methods are provided by the parent class [Control](/en/api/control) and are available on instances of this class.

<!--@include: ./includes/api/control-methods.md-->

### Mixed-in Methods

This class gains the following method groups from mixins; see the linked pages for details: [Eventable](/en/api/eventable)（`on`、`addEventListener`、`once`、`off`、`removeEventListener`、`listens`、`getListeningEvents`、`copyEventListeners`…）.
<!-- api-gen:end -->

## Events

<!-- api-gen:start -->
### Events Inherited from Control

<!--@include: ./includes/api/control-events.md-->
<!-- api-gen:end -->
