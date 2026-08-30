---
title: Curve
---

# Curve

Curve is an abstract base class for curve geometries that extends LineString. It is the abstract parent of ArcCurve, CubicBezierCurve, and QuadBezierCurve, and provides the internal drawing methods used by curve subclasses. It is usually not instantiated directly; use its subclasses instead.

```js
import { Curve } from "maptalks";

// Curve is an abstract base class, usually not instantiated directly.
// Use its subclasses ArcCurve / CubicBezierCurve / QuadBezierCurve instead.
const arc = new ArcCurve([[100, 0], [101, 1]]);
```

## Constructor

Curve is an abstract base class; its constructor is called by its subclasses.

## options

| Name | Type | Description | Default |
| --- | --- | --- | --- |
| `enableSimplify` | `Boolean` | Whether to enable simplification. | `false` |
| `enableClip` | `Boolean` | Whether to enable clipping. | `false` |

## Methods

Curve has no public class-specific methods; its subclasses implement curve drawing through the internal methods `_arc`, `_quadraticCurve`, and `_bezierCurve`.

## Static Methods

No class-specific static methods.

## Events

No class-specific events.
