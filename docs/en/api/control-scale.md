---
title: Scale
---

# Scale

Scale is the scale control. It extends `Control`. It shows a map scale bar on the map according to the current zoom level, with both metric and imperial units supported. It is displayed by default at the bottom-left corner.

```js
import { Scale } from "maptalks";

const scale = new Scale({
  metric: true,
  imperial: false
}).addTo(map);
```

## Constructor

```js
new Scale(options)
```

Parameters:

* `options` — Scale control options.

## options

| Name | Type | Description | Default |
| --- | --- | --- | --- |
| `position` | `String` | The control position | `"bottom-left"` |
| `maxWidth` | `Number` | The maximum width of the scale bar (px) | `100` |
| `metric` | `Boolean` | Whether metric units are shown | `true` |
| `imperial` | `Boolean` | Whether imperial units are shown | `false` |
| `containerClass` | `String` | The CSS class of the container | `null` |

## Methods

<!-- api-gen:start -->
### Other Public Methods of Scale

<!--@include: ./includes/api/control-scale-missing.md-->

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
