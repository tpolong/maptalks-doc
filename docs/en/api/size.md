---
title: Size
---

# Size

Size is a value object representing a width and a height, used to describe the size of entities such as maps, layers, and markers. It inherits from no base class, and can be created from two numbers, an array, or a `{ width, height }` object.

```js
import { Size } from "maptalks";
// Usage example
const size = new Size(100, 50);
console.log(size.width, size.height); // 100 50
```

## Constructor

```js
new Size(width, height)
new Size([w, h])
new Size({ width, height })
new Size(size)
```

Parameters:

* `width`, `height` — Two numbers (width and height), or an `[w, h]` array, or a `{ width, height }` object, or another `Size`.

## Methods

- `copy(): Size` — Return a copy of this size.
- `add(x, y?): Size` — Return a new size after adding another `Size` (or width/height values).
- `multi(ratio): Size` — Return a new size after multiplying the current size by the given number.
- `equals(size): boolean` — Whether it equals another `Size`.
- `toPoint(): Point` — Convert the size to a `Point` object.
- `toArray(): [width, height]` — Convert to an array.
- `toJSON(): { width, height }` — Convert to a JSON object.

## Static Methods

Size has no static methods.

## Events

Size has no events.
