---
title: ArcConnectorLine
---

# ArcConnectorLine

ArcConnectorLine is an arc-connector-line geometry class that extends Connectable([ArcCurve](/en/api/arc-curve)). It connects two objects with an arc-shaped curve. The source and target can be geometry objects, controls, or UI components, and it is commonly used for curved leader lines and flow relationships.

```js
import { ArcConnectorLine } from "maptalks";

const source = map.addMarker([100, 0]);
const target = map.addMarker([101, 1]);
const connector = new ArcConnectorLine(source, target);
layer.addGeometry(connector);
```

## Constructor

```js
new ArcConnectorLine(src, target, options?)
```

Parameters:

* `src` — The connection source; can be a geometry object, control, or UI component.
* `target` — The connection target; can be a geometry object, control, or UI component.
* `options` — (Optional) Geometry options, see the options of ArcCurve / Curve.

## options

| Name | Type | Description | Default |
| --- | --- | --- | --- |
| `showOn` | `String` | The show condition; one of `'always'`, `'moving'`, `'click'`, `'mouseover'`. | `'always'` |
| `arcDegree` | `Number` | The opening angle of the arc. | `90` |

## Methods

- `getConnectSource()` — Gets the connection source.
- `setConnectSource(src): this` — Sets the connection source.
- `getConnectTarget()` — Gets the connection target.
- `setConnectTarget(target): this` — Sets the connection target.

## Static Methods

No class-specific static methods.

## Events

No class-specific events.
