---
title: Panel
---

# Panel

Panel is the draggable panel control. It extends `Control`. It shows a draggable, closable panel on the map for hosting custom content (such as descriptions, legends, or operation areas). It is displayed by default at the top-right corner.

```js
import { Panel } from "maptalks";

const panel = new Panel({
  draggable: true,
  content: "<div>Hello World</div>",
  closeButton: true
}).addTo(map);
```

## Constructor

```js
new Panel(options)
```

Parameters:

* `options` — Panel control options.

## options

| Name | Type | Description | Default |
| --- | --- | --- | --- |
| `position` | `String` | The control position | `"top-right"` |
| `draggable` | `Boolean` | Whether the panel is draggable | `true` |
| `custom` | `Boolean` | Whether custom content is used | `false` |
| `content` | `String` / `HTMLElement` | The panel content | `""` |
| `closeButton` | `Boolean` | Whether the close button is shown | `true` |

## Member Methods

- `setContent(content): Panel` — Sets the panel content.
- `getContent(): String` — Gets the panel content.
- `update()` — Updates the panel.

## Events

- `contentchange` — Fired when the panel content changes.
- `dragstart` — Fired when dragging starts.
- `dragging` — Fired while dragging.
- `dragend` — Fired when dragging ends.
- `close` — Fired when the panel is closed.
