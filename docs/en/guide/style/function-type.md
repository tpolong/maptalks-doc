---
title: Function type
---

# function-type

[function-type](https://github.com/maptalks/function-type) is an expression used to define a function type. The function takes a Feature's properties and the map's zoom level as parameters and returns a value of any type.

function-type is used to define dynamic style properties on a symbol, i.e. different styles can be set based on different Features and zoom levels.

It is implemented based on mapbox's original function-type (BSD-3-Clause license).

## Example

The following function-type definition makes the icon's width and height change linearly with the zoom level.

At zoom 1 it is 4 pixels, at zoom 20 it is 20 pixels, and intermediate zoom levels interpolate linearly.

```js
{
  markerWidth: {
    stops: [
      [1, 4],
      [20, 20]
    ]
  },

  markerHeight: {
    stops: [
      [1, 4],
      [20, 20]
    ]
  }
}
```

## Feature properties

function-type computes using the properties of a GeoJSON Feature, the properties of a vector tile Feature, or the value returned by the getProperties method of a [Geometry](https://maptalks.org/maptalks.js/api/0.x/Geometry.html).

## Properties

### stops

**Array** — required (except for the identity function). A set of input values used to produce an output value (of type number, array, boolean or string).

### property

**String** — optional. The property name. When `property` is set, the Feature's property value is used as the input; otherwise, the map's zoom is used as the input.

### base

**Number** — optional, defaults to 1. The base value of the interpolation, controlling the rate of interpolation growth. When base is not 1, the interpolation is non-linear and grows faster with a higher base. When base is 1, the interpolation is linear.

### type

**String** — optional, defaults to "exponential". The function type. Possible values: "identity", "exponential", "interval", or "categorical"

* identity: uses the input property value directly as the output; `property` must be defined.
* exponential: interpolates a result from stops and base; the input value must be numeric.
* interval: divides the input value into several intervals defined by stops, each with its own output value; all input values falling into the same interval output the same value.
* categorical: when the input value equals one of the stops, the corresponding output value is used.

### default

**any** — optional. The default value. It is output when no valid output value can be computed from the input, mainly in the following cases:

* type is categorical and the input value does not equal any of the stops.
* `property` is defined but the Feature does not have it.
* type is identity and the Feature's property value is invalid (e.g. the output must be a valid color value but the actual value is not a valid color).
* type is interval or exponential and the input value is not a valid number.

## Function nesting

function-type supports nesting, i.e. defining a new function-type inside stops, which enables more complex computations.

For example, in the following example, when a Feature's class property is highway, roads are drawn green when the road level (level property) is 1 and yellow when it is 2. When class is motorway, roads are drawn white, and when class is countyway, they are drawn light white.

```js
{
  lineColor: {
    type: 'categorical',
    property: 'class',
    stops: [
      ['highway', { type: 'categorical', property: 'level', stops: [[1, 'Green'], [2, 'Yellow']] }],
      ['motorway', '#fff'],
      ['countyway', '#eee']
    ],
    default: '#000'
  }
}
```

## Examples

* Use the Feature's color property directly as lineColor
```js
{
  lineColor: {
    type: 'identity',
    property: 'color',
    default: '#000'
  }
}
```

* Draw different floors with different colors.
```js
{
  polygonFill: {
    property: 'levels',
    type: 'interval',
    stops: [
      [3, '#0f0'],
      [10, '#ff0'],
      [20, '#f00']
    ]
  }
}
```

> This document has been cross-checked against the @maptalks/gl-layers 2026 source code (api-notes-vt-gl.md)
