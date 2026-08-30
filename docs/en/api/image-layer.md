---
title: ImageLayer
---

# ImageLayer

ImageLayer is a layer for displaying images with a geographic extent, extending [Layer](/en/api/layer). Each image can specify its geographic extent and opacity. The `gl` renderer requires the image to satisfy CORS and supports pitching, while the `canvas` renderer does not require CORS but cannot be pitched.

```js
import { Map, ImageLayer } from "maptalks";

const map = new Map("map", { center: [0, 0], zoom: 2 });

const layer = new ImageLayer("images", [
  {
    url: "http://example.com/foo.png",
    extent: [xmin, ymin, xmax, ymax],
    opacity: 1,
  },
]).addTo(map);
```

## Constructor

```js
new ImageLayer(id, images?, options?)
```

Parameters:

* **id** `String` layer id.
* **images** `ImageItem[]` (optional) array of image items, see below.
* **options** `Object` layer options (optional).

### images item

| Field | Type | Description | Default |
| --- | --- | --- | --- |
| `url` | String | image URL | — |
| `extent` | Extent\|`[xmin,ymin,xmax,ymax]` | geographic extent covered by the image | — |
| `opacity` | Number | image opacity | `1` |

## options

| Option | Type | Description | Default |
| --- | --- | --- | --- |
| `renderer` | String | renderer (`gl`/`canvas`) | `webgl?'gl':'canvas'` |
| `crossOrigin` | String | image crossOrigin attribute | `null` |
| `alphaTest` | Boolean | discard pixels with `alpha<=alphaTest` (gl renderer) | `false` |
| `depthMask` | Boolean | write into the depth buffer (gl renderer) | `true` |
| `depthFunc` | String | gl depth function (`never,<,=,<=,>,!=,>=,always`) | `'<='` |

## Member Methods

- `setImages(images: ImageItem[]): this` — set images and redraw
- `getImages(): ImageItem[]` — get the images

## Events

Common layer events (`show`/`hide`, `setopacity`, `add`/`remove`, `layerload`, etc.) — see [Layer](/en/api/layer).
