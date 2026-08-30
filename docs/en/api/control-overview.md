---
title: Overview
---

# Overview

Overview is the overview (minimap) control. It extends `Control`. It shows a small thumbnail on the map to give an overview of a large map area and indicates the current viewport position, with support for maximize/minimize toggling.

```js
import { Overview } from "maptalks";

const overview = new Overview({
  size: [300, 200],
  maximize: false
}).addTo(map);
```

## Constructor

```js
new Overview(options)
```

Parameters:

* `options` — Overview control options.

## options

| Name | Type | Description | Default |
| --- | --- | --- | --- |
| `level` | `Number` | The zoom level of the overview map | `4` |
| `size` | `Number[]` | The size of the overview control `[width, height]` | `[300, 200]` |
| `maximize` | `Boolean` | Whether to be maximized by default | `true` |
| `symbol` | `Object` | The symbol of the overview view frame | `null` |
| `containerClass` | `String` | The CSS class of the container | `'maptalks-overview'` |

## Member Methods

- `maxmize(): Overview` — Maximizes the overview control.
- `minimize(): Overview` — Minimizes the overview control.
- `getOverviewMap(): Map` — Gets the overview map object.

## Events

- `load` — Fired when the overview map finishes loading.
