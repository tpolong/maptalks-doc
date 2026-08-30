---
title: control.Nav
---

# control.Nav

control.Nav is a map navigation control base class, extending [control.Control](/en/api/control). It holds navigation UI, avoiding duplication. In the current source `buildOn` returns `null` and renders no content; specific nav buttons are provided by subclasses/extensions.

```js
import { control } from "maptalks";

const nav = new control.Nav({
  position: "top-left",
}).addTo(map);
```

## Constructor

```js
new control.Nav(options?)
```

Parameters:

* `options` — `Object`, optional. See options below.

## Options

| Option | Type | Description | Default |
| --- | --- | --- | --- |
| `position` | `String \| Object` | control position | `'top-left'` |

Common options inherited from [control.Control](/en/api/control) also apply.

## Methods

- `buildOn(): null` — Build the control DOM; currently returns `null` (renders nothing).

## Events

No specific events (inherits from [control.Control](/en/api/control)).
