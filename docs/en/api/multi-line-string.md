---
title: MultiLineString
---

# MultiLineString

MultiLineString is a multi-line-string geometry class that extends MultiPath. It represents a collection of polylines, commonly used for roads, rivers, or trajectory data. It can be constructed from an array of coordinates or an array of LineStrings.

```js
import { MultiLineString } from "maptalks";

const lines = new MultiLineString([
  [[100, 0], [101, 1], [102, 2]],
  [[103, 3], [104, 4]]
]);
// Or pass LineString[]:
const lineGeoms = [new LineString([[100, 0], [101, 1]])];
const lines2 = new MultiLineString(lineGeoms);

layer.addGeometry(lines);
```

## Constructor

```js
new MultiLineString(data, options?)
```

Parameters:

* `data` — An array of coordinates (an array of line-coordinate arrays) or `LineString[]`.
* `options` — (Optional) Geometry options, see the options of Path / Geometry.

## options

MultiLineString has no class-specific options; it inherits the options of Path.

## Methods

No class-specific methods; it inherits the methods of MultiPath.

## Static Methods

- `MultiLineString.fromJSON(json): MultiLineString` — Creates a MultiLineString instance from a JSON object.

## Events

No class-specific events.
