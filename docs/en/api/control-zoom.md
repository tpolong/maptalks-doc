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
