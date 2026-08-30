---
title: ConnectorLine
---

# ConnectorLine

ConnectorLine is a connector-line geometry class that extends Connectable(LineString). It draws a connecting line between two objects. The source and target can be geometry objects, controls, or UI components, and it is commonly used for leader lines and relationship connectors.

```js
import { ConnectorLine } from "maptalks";

const source = map.addMarker([100, 0]);
const target = map.addMarker([101, 1]);
const connector = new ConnectorLine(source, target);
layer.addGeometry(connector);
```

## Constructor

```js
new ConnectorLine(src, target, options?)
```

Parameters:

* `src` — The connection source; can be a geometry object, control, or UI component.
* `target` — The connection target; can be a geometry object, control, or UI component.
* `options` — (Optional) Geometry options, see the options of LineString.

## options

| Name | Type | Description | Default |
| --- | --- | --- | --- |
| `showOn` | `String` | The show condition; one of `'always'`, `'moving'`, `'click'`, `'mouseover'`. | `'always'` |

## Methods

- `getConnectSource()` — Gets the connection source.
- `setConnectSource(src): this` — Sets the connection source.
- `getConnectTarget()` — Gets the connection target.
- `setConnectTarget(target): this` — Sets the connection target.

## Static Methods

- `ConnectorLine._hasConnectors(geometry): boolean` — Returns whether `geometry` is associated with connectors.
- `ConnectorLine._getConnectors(geometry): ConnectorLine[]` — Gets all connectors associated with `geometry`.

## Events

No class-specific events.
