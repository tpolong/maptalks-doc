---
title: ArcCurve
---

# ArcCurve

ArcCurve is an arc-curve geometry class that extends [Curve](/en/api/curve). It represents a curve generated as an arc or as a polyline approximation of an arc, commonly used for arc connections and flow visualizations.

```js
import { ArcCurve } from "maptalks";

const arc = new ArcCurve([[100, 0], [101, 1]]);
layer.addGeometry(arc);
```

## Constructor

```js
new ArcCurve(coordinates, options?)
```

Parameters:

* `coordinates` — The array of coordinates defining the two endpoints of the arc.
* `options` — (Optional) Geometry options, see the options of Curve / LineString.

## options

| Name | Type | Description | Default |
| --- | --- | --- | --- |
| `arcDegree` | `Number` | The opening angle of the arc. | `90` |

## Methods

No class-specific methods; it inherits the methods of Curve.

## Static Methods

- `ArcCurve.fromJSON(json): ArcCurve` — Creates an ArcCurve instance from a JSON object.

## Events

No class-specific events.
