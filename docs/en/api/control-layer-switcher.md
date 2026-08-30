---
title: LayerSwitcher
---

# LayerSwitcher

LayerSwitcher is the layer switcher control. It extends `Control`. It shows a set of checkboxes on the map to toggle the visibility of base layers and overlay layers. It is displayed by default at the top-right corner.

```js
import { LayerSwitcher } from "maptalks";

const layerSwitcher = new LayerSwitcher({
  baseTitle: "Base",
  overlayTitle: "Overlay"
}).addTo(map);
```

## Constructor

```js
new LayerSwitcher(options)
```

Parameters:

* `options` — LayerSwitcher control options.

## options

| Name | Type | Description | Default |
| --- | --- | --- | --- |
| `position` | `String` | The control position | `"top-right"` |
| `baseTitle` | `String` | The base layer group title | `'Base Layers'` |
| `overlayTitle` | `String` | The overlay layer group title | `'Layers'` |
| `excludeLayers` | `Array` | Layers to exclude | `[]` |
| `containerClass` | `String` | The CSS class of the container | `'maptalks-layer-switcher'` |

## Events

- `layerchange` — Fired when layer visibility changes.
