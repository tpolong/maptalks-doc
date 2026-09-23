---
title: InfoWindow
---

# InfoWindow

InfoWindow is the map bubble window. It extends `UIComponent`. It shows content in a floating bubble on the map, commonly used to show details after clicking a feature. It has a title and a content area, and can be combined with custom HTML.

```js
import { InfoWindow } from "maptalks";

const infoWindow = new InfoWindow({
  title: "Hello",
  content: "<div>World</div>"
});

infoWindow.addTo(map).show(coordinate);
```

## Constructor

```js
new InfoWindow(options)
```

Parameters:

* `options` — InfoWindow options. Some properties match the `InfoWindow.options` table below.

## options

| Name | Type | Description | Default |
| --- | --- | --- | --- |
| `title` | `String` / `HTMLElement` | The bubble title | `null` |
| `content` | `String` / `HTMLElement` | The bubble content | `null` |
| `width` | `String` | The bubble width | `'auto'` |
| `minHeight` | `Number` | The minimum height of the bubble | `120` |
| `autoPan` | `Boolean` | Whether to auto-pan the map when shown | `true` |
| `autoCloseOn` | `String` | The event that triggers auto-close | `null` |
| `autoOpenOn` | `String` | The event that triggers auto-open | `'click'` |
| `custom` | `Boolean` | Whether custom content is used | `false` |
| `enableTemplate` | `Boolean` | Whether the default template is used | `false` |

## Member Methods

- `setTitle(title): InfoWindow` — Sets the bubble title.
- `getTitle(): String` — Gets the bubble title.
- `setContent(content): InfoWindow` — Sets the bubble content.
- `getContent(): String` — Gets the bubble content.
- `addTo(owner): InfoWindow` — Attaches the bubble to `owner`.
- `show(coordinate): InfoWindow` — Shows the bubble at the given coordinate.
- `getOffset(): Point` — Gets the bubble offset.
- `getTransformOrigin(): String` — Gets the transform origin of the bubble.

<!-- api-gen:start -->
### Other Public Methods of InfoWindow

<!--@include: ./includes/api/info-window-missing.md-->

### Methods Inherited from UIComponent

The following methods are provided by the parent class [UIComponent](/en/api/ui-component) and are available on instances of this class.

<!--@include: ./includes/api/ui-component-methods.md-->

### Mixed-in Methods

This class gains the following method groups from mixins; see the linked pages for details: [Eventable](/en/api/eventable)（`on`、`addEventListener`、`once`、`off`、`removeEventListener`、`listens`、`getListeningEvents`、`copyEventListeners`…）.
<!-- api-gen:end -->

## Events

- `contentchange` — Fired when the bubble content changes.

<!-- api-gen:start -->
### Other Events of InfoWindow

The following events are defined in the source and are fired by this class (or its ancestors):

<!--@include: ./includes/api/info-window-events-missing.md-->

### Events Inherited from UIComponent

<!--@include: ./includes/api/ui-component-events.md-->
<!-- api-gen:end -->
