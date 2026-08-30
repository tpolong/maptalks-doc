---
title: Util
---

# Util

Util is maptalks' collection of general utility functions (located in `core/util/util.ts`), providing animation frames, image loading, coordinate iteration, math interpolation, and string/encoding conversions. It is a static function collection that is never instantiated; import it with `import { Util } from "maptalks"`.

```js
import { Util } from "maptalks";

const id = Util.UID();
console.log(Util.clamp(10, 0, 5)); // 5
```

## Main Functions

- `requestAnimFrame(callback): number` — Request an animation frame (falls back to `setTimeout(cb, 16)` in Node).
- `cancelAnimFrame(handle): void` — Cancel an animation frame.
- `loadImage(img, imgDesc): void` — Load an image and callback with its description.
- `UID(): number` — Generate a unique id (`GUID` is an alias).
- `parseJSON(str)` — Parse a JSON string. Non-string or empty values are returned as-is; a parse failure throws an exception.
- `removeFromArray(obj, array): void` — Remove an element from an array.
- `forEachCoord(arr, fn, context?)` — Iterate over a multi-dimensional coordinate array and invoke the callback for each coordinate.
- `interpolate(a, b, t): number` — Linearly interpolate between a and b by the ratio t.
- `clamp(n, min, max): number` — Clamp n into the `[min, max]` range.
- `btoa(input): string` — base64 encoding.
- `b64toBlob(b64Data, contentType): Blob` — Convert a base64 string into a Blob.
- `computeDegree(x0, y0, x1, y1): number` — Compute the angle (radians) between the line connecting two points and the x-axis.
- `flash(interval, count, cb, ctx): void` — Flash-effect wrapper.
- `isURL(url): boolean` — Whether the string is a URL.
- `extractCssUrl(str): string` — Extract the address from a CSS `url(...)`.
