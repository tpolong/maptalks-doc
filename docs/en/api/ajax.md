---
title: Ajax
---

# Ajax

`Ajax` is the static HTTP-request utility class of maptalks. It wraps common network requests such as `get`/`post`/`getJSON`/`getArrayBuffer`/`getImage`/`jsonp`. It is never instantiated — every method is called on the class itself — and is used to load tiles, GeoJSON data, images, and other remote resources.

```js
import { Ajax } from "maptalks";

Ajax.getJSON("https://example.com/data.json", (json) => {
  console.log(json);
});

Ajax.get("https://example.com/data.txt", { mimeType: "text/plain" }, (text) => {
  console.log(text);
});
```

## Constructor

None. `Ajax` is a purely static utility class and cannot be instantiated.

## options

No independent configuration options. Each method accepts request options (such as `mimeType`, `timeout`, `headers`) via its `options` argument.

## Methods

- `Ajax.get(url, options?, cb?)` — Issue a GET request; `options` is optional request config and `cb` an optional callback receiving the response.
- `Ajax.post(url, options?, cb?)` — Issue a POST request; `options` may contain the data to submit, `cb` an optional callback.
- `Ajax.getJSON(url, options?, cb?)` — Issue a GET request and parse the JSON result; `cb` receives the parsed data.
- `Ajax.getArrayBuffer(url, options?, cb?)` — Issue a GET request and get the response as an ArrayBuffer, for binary data.
- `Ajax.getImage(img, url, options?)` — Load the image at `url` into the given `img` (an `HTMLImageElement`); the image's `onload`/`onerror` fire on success or failure.
- `Ajax.jsonp(url, callback)` — Issue a JSONP request with `callback` as the global callback, for cross-origin data retrieval.

## Static Methods

`Ajax` methods are themselves static (see the Methods above).

## Events

None.
