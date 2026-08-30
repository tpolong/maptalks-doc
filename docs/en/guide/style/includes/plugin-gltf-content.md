## Dynamic styles

The gltf render plugin supports [function-type](/en/guide/style/function-type) on the following properties: `visible`, `modelHeight`, `translationX` / `translationY` / `translationZ`, `rotationX` / `rotationY` / `rotationZ`, `scaleX` / `scaleY` / `scaleZ` (2026 source code GLTFMixin).

For example, the following makes the model height increase with the map zoom level:

```json
{
 "modelHeight": {
    "stops": [[1, 10], [20, 100]]
  }
}
```

> Note: the GLTF plugin does not support function-type for colors such as polygonFill / polygonOpacity (the old documentation was incorrect; GLTFMixin.getFnTypeConfig in the 2026 source code returns empty).

## Supported Symbol style properties

-----------
### visible

Default: true

**Boolean** — whether it is visible.

-----------
### polygonFill

Default: [1, 1, 1, 1]

**String** | **Number[]** — the base color, either a [css color value](https://developer.mozilla.org/zh-CN/docs/Web/CSS/color_value) or a normalized four-element array.

-----------
### polygonOpacity

Default: 1

**Number** — opacity, range 0-1.

-----------
### bloom

Default: false

**Boolean** — whether to enable the bloom post-processing effect.

-----------
### url

Default: 'pyramid'

**String** — the URL of the GLTF model, either a url or a base64 string. When omitted, the built-in pyramid model is used.

-----------
### modelHeight

Default: null

**Number** — the height of the model in the scene (in meters). Once set, the model is scaled automatically to that height.

-----------
### anchorZ

Default: 'center'

**String** — the vertical anchor of the model. Options: 'center', 'bottom', 'top'.

-----------
### animation

Default: false

**Boolean** — whether to play the model's built-in skeletal animations, used together with `loop`, `speed` and `animationName`.

-----------
### translationX / translationY / translationZ

Default: 0

**Number** — the offset of the model along the x (/y/z) axis of its local coordinate system, in meters.

-----------
### scaleX / scaleY / scaleZ

Default: 1

**Number** — the scale of the model along the x (/y/z) axis of its local coordinate system.

-----------
### rotationX / rotationY / rotationZ

Default: 0

**Number** — the rotation angle of the model around the x (/y/z) axis of its local coordinate system, in degrees.

> Note: in the 2026 source code (GLTFMixin), the model's translation/rotation/scale use the component form translationX/Y/Z, rotationX/Y/Z, scaleX/Y/Z (all supporting function-type); the array form translation / scale / rotation from the old documentation no longer applies (2026 cross-check).

-----------
### fixSizeOnZoom

Default: null

**Number** — whether to fix the model size at all zoom levels so the model no longer scales with the map. The value is the zoom level, i.e. the model is fixed to its size at that level.
