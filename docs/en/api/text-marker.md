---
title: TextMarker
---

# TextMarker

TextMarker is the abstract base class for point markers with text, inheriting from [Marker](/en/api/marker). It describes a marker that contains both a text content and a background box; [TextBox](/en/api/text-box) and [Label](/en/api/label) both inherit from it. It is an abstract class that is not meant to be instantiated directly, but it manages text via `getContent`/`setContent` and splits it into a text symbol and a box symbol.

```js
import { TextBox } from "maptalks";
// Abstract base class, normally use its subclasses TextBox / Label
const textbox = new TextBox("This is a textbox", [0, 0], 200, 90);
```

## Constructor

```js
new TextMarker(coordinates, options)
```

Parameters:

* `coordinates` — The geographic coordinates of the marker (`[x, y]` or a `Coordinate`).
* `options` — Construct options, inherited from [Marker](/en/api/marker).
* Note: TextMarker is an abstract class; its constructor is intended for subclasses only.

## options

TextMarker has no options of its own; configuration is inherited from [Marker](/en/api/marker) (e.g. `symbol`, `draggable`, `zIndex`, `properties`).

## Methods

- `getContent(): string` — Gets the text content of the label.
- `setContent(content): this` — Sets a new text content and fires the `contentchange` event.
- `toJSON()` — Serializes to a JSON object, removing the default `symbol` field from the base class.
- `setSymbol(symbol): this` — Sets the symbol, splitting properties beginning with `text*` into the text symbol and the rest into the box symbol.

## Static Methods

TextMarker has no static methods of its own.

## Events

- `contentchange` — Fired when the text content changes; the event object carries `old` and `new` fields.
