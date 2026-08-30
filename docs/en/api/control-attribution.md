---
title: Attribution
---

# Attribution

Attribution is the copyright attribution control. It extends `Control`. It displays data source or copyright information on the map, usually by default at the bottom-left corner. Use `setContent` to dynamically update the attribution content.

```js
import { Attribution } from "maptalks";

const attribution = new Attribution({
  content: "© OpenStreetMap contributors"
}).addTo(map);
```

## Constructor

```js
new Attribution(options)
```

Parameters:

* `options` — Attribution control options.

## options

| Name | Type | Description | Default |
| --- | --- | --- | --- |
| `position` | `Object` | The control position | `{ bottom: 0, left: 0 }` |
| `content` | `String` / `HTMLElement` | The attribution content | `'<a href="http://maptalks.org" target="_blank">maptalks</a>'` |
| `custom` | `Boolean` | Whether custom content is used | `false` |

## Member Methods

- `getContent(): String` — Gets the attribution content.
- `setContent(content): Attribution` — Sets the attribution content.
