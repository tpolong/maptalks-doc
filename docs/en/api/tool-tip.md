---
title: ToolTip
---

# ToolTip

ToolTip is a hint bubble attached to a geometry object. It extends `UIComponent`. By default it shows a hint text after a delay when the mouse hovers over the geometry object, often used together with the geometry's `mouseover` event.

```js
import { ToolTip } from "maptalks";

const toolTip = new ToolTip("Hello", {
  animation: "fade",
  showTimeout: 400
});

toolTip.addTo(geometry);
```

## Constructor

```js
new ToolTip(content, options)
```

Parameters:

* `content` — The content string or DOM element of the hint.
* `options` — ToolTip options.

## options

| Name | Type | Description | Default |
| --- | --- | --- | --- |
| `width` | `Number` | The bubble width | `0` |
| `height` | `Number` | The bubble height | `0` |
| `animation` | `String` | The show animation | `"fade"` |
| `containerClass` | `String` | The CSS class of the container | `'maptalks-tooltip'` |
| `showTimeout` | `Number` | The delay (ms) before showing | `400` |

## Member Methods

- `addTo(owner): ToolTip` — Attaches the hint bubble to `owner`.
- `setStyle(style): ToolTip` — Sets the style of the hint bubble.
- `getStyle(): string` — Gets the style of the hint bubble.
- `getContent(): String` — Gets the hint content.

<!-- api-gen:start -->
### Other Public Methods of ToolTip

<!--@include: ./includes/api/tool-tip-missing.md-->

### Methods Inherited from UIComponent

The following methods are provided by the parent class [UIComponent](/en/api/ui-component) and are available on instances of this class.

<!--@include: ./includes/api/ui-component-methods.md-->

### Mixed-in Methods

This class gains the following method groups from mixins; see the linked pages for details: [Eventable](/en/api/eventable)（`on`、`addEventListener`、`once`、`off`、`removeEventListener`、`listens`、`getListeningEvents`、`copyEventListeners`…）.
<!-- api-gen:end -->

## Events

<!-- api-gen:start -->
### Events Inherited from UIComponent

<!--@include: ./includes/api/ui-component-events.md-->
<!-- api-gen:end -->
