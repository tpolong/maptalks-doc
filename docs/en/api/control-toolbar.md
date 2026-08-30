---
title: Toolbar
---

# Toolbar

Toolbar is the toolbar control. It extends `Control`. It shows a row of buttons or tool items on the map, commonly used as entry points for tools such as drawing and measurement. It supports both horizontal and vertical layouts, and is displayed by default at the top-right corner.

```js
import { Toolbar } from "maptalks";

const toolbar = new Toolbar({
  items: [
    { item: "Zoom", click: () => {} }
  ]
}).addTo(map);
```

## Constructor

```js
new Toolbar(options)
```

Parameters:

* `options` — Toolbar control options.

## options

| Name | Type | Description | Default |
| --- | --- | --- | --- |
| `items` | `Array` | The tool item list. Each element is `{ item, click, ... }` | `[]` |
| `height` | `Number` | The toolbar height (px) | `28` |
| `vertical` | `Boolean` | Whether the layout is vertical | `false` |
| `position` | `String` | The control position | `"top-right"` |
| `reverseMenu` | `Boolean` | Reversed menu layout | `false` |
