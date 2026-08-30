---
title: GeometryCollection
---

# GeometryCollection

GeometryCollection is a geometry-collection class that extends Geometry. It provides the ability to manage multiple geometry objects as a whole, including batch add/remove, traversal, filtering, translation, visibility, and editing. A typical use is to combine several geometries into one collection, add it to a layer, and control them together.

```js
import { GeometryCollection } from "maptalks";

const collection = new GeometryCollection([
  new Marker([100, 0]),
  new LineString([[100, 0], [101, 1]]),
  new Polygon([[[100, 0], [101, 0], [101, 1], [100, 0]]])
]);

layer.addGeometry(collection);
```

## Constructor

```js
new GeometryCollection(geometries?, options?)
```

Parameters:

* `geometries` — (Optional) An array of geometry objects used as the initial child geometries.
* `options` — (Optional) Geometry options, see the options of Geometry.

## options

GeometryCollection has no class-specific options; it inherits the options of Geometry.

## Methods

- `setGeometries(geos): this` — Sets the array of geometry objects in the collection.
- `getGeometries(): Geometry[]` — Gets the array of geometry objects in the collection.
- `forEach(fn, ctx): this` — Iterates over each child geometry, calling `fn(geometry, index)`; `ctx` is the callback context.
- `filter(fn): Geometry[]` — Filters child geometries, returning the geometries that satisfy the predicate.
- `translate(offset): this` — Translates all child geometries by the given coordinate offset.
- `isEmpty(): boolean` — Returns whether the collection is empty.
- `remove(): this` — Removes the collection and its child geometries from the layer.
- `show(): this` — Shows the collection.
- `hide(): this` — Hides the collection.
- `getSymbol(): object` — Gets the symbol of the collection.
- `setSymbol(s): this` — Sets the symbol of the collection.
- `startEdit` / `endEdit` / `isEditing` — Starts editing / ends editing / returns whether editing is in progress.
- `undoEdit` / `redoEdit` — Undoes / redoes the last edit.

## Static Methods

- `GeometryCollection.fromJSON(json): GeometryCollection` — Creates a GeometryCollection instance from a JSON object.

## Events

- `shapechange` — Fired when the geometry shape changes.
- `removestart` / `remove` / `removeend` — Fired when a removal starts, progresses, and ends.
- `show` / `hide` — Fired when the collection is shown / hidden.
- `editstart` / `editend` — Fired when editing starts / ends.
