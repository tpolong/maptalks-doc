---
title: Feature filter
---

# feature-filter

[feature-filter](https://github.com/maptalks/feature-filter) is the data filtering expression used by the [maptalks core library](https://maptalks.org). It is developed based on mapbox's [feature-filter](https://github.com/mapbox/feature-filter) (MIT License).

For example, it is used by the `filter` property of render plugins in [VectorTileLayer](/en/api/vector-tile-layer) to filter which data is rendered by a plugin.

## Example

```js
// 所有 layer 属性是desert，type是Polygon的数据
[
  "all",
  [
    "==",
    "$layer",
    "desert"
  ],
  [
    "==",
    "$type",
    "Polygon"
  ]
];
```

## Feature format

The Feature format evaluated by feature-filter is as follows:
```json
{
  // type可选的值： 1, 2, 3, 4, 5, 6，对应了"Point", "LineString","Polygon","MultiPoint", "MultiLineString","MultiPolygon"
  "type": 1,
  "id": 0,
  "layer": "layer0",
  "properties": {
    "key": "value"
  }
}
```

## Supported expression syntax

### Existence expressions

* feature[key] exists
```js
["has", key]
```

* feature[key] does not exist
```js
["!has", key]
```

### Comparison expressions

* Equals: feature[key] = value
```js
["==", key, value]
```

* Not equals: feature[key] != value
```js
["!=", key, value]
```

* Greater than: feature[key] > value
```js
[">", key, value]
```

* Greater than or equal: feature[key] >= value
```js
[">=", key, value]
```

* Less than: feature[key] < value
```js
["<", key, value]
```

* Less than or equal: feature[key] <= value
```js
["<=", key, value]
```

### Set membership expressions

* In the set: feature[key] in {v0, ..., vn}
```js
["in", key, v0, ..., vn]
```

* Not in the set: feature[key] !in {v0, ...., vn}
```js
["!in", key, v0, ..., vn]
```

### Logical expressions

Logical expressions combine multiple expressions into composite expressions. In the definitions below, f0, ..., fn are themselves expressions.

* AND: f0 ∧ ... ∧ fn
```js
["all", f0, ..., fn]
```

* OR: f0 ∨ ... ∨ fn
```js
["any", f0, ..., fn]
```

* none: ¬f0 ∧ ... ∧ ¬fn
```js
["none", f0, ..., fn]
```

## key

key must be a string feature property name, or one of the following special property names:

* "$type": the type of the feature, usable with filters such as "==", "!=", "in", "!in". Possible values are "Point", "MultiPoint", "LineString", "MultiLineString", "Polygon" and "MultiPolygon".
* "$id": the id of the feature, usable with filters such as "==", "!=", "in", "!in".
* "$layer": the layer the feature belongs to, usable with filters such as "==", "!=", "in", "!in".

## value

A value must be a string, a number or a boolean.

## Strong typing

Comparison and set membership filters use strong typing, i.e. the values must be of the same type. For example, 0 < "1", 2 == "2" and "true" in [true, false] are all false.

## Examples

* Data whose type is LineString

```js
["==", "$type", "LineString"]
```

* Data whose class is one of "street_major", "street_minor", "street_limited"

```js
["in", "class", "street_major", "street_minor", "street_limited"]
```

* Data that meets all three conditions: 1. class must be street_limited, 2. admin_level is greater than or equal to 3, 3. type is not Polygon
```js
[
    "all",
    ["==", "class", "street_limited"],
    [">=", "admin_level", 3],
    ["!in", "$type", "Polygon"]
]
```

> This document has been cross-checked against the @maptalks/gl-layers 2026 source code (api-notes-vt-gl.md)
