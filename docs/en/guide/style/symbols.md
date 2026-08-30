---
title: Symbol styles
---

# Symbol styles

Vector Symbol styles are grouped into the following categories:

* [marker style properties](#marker-style-properties) — icon-related style properties
* [text style properties](#text-style-properties) — text-related style properties
* [line style properties](#line-style-properties) — line-related style properties
* [polygon style properties](#polygon-style-properties) — polygon-related style properties.

This document covers vector style properties. 3D styles are defined by rendering materials — see the [material reference](/en/guide/style/material).

## marker style properties

marker style properties fall into the following categories:

* Basic properties: the most commonly used icon style properties
* Vector icons: style properties adjustable for [vector icons](https://maptalks.org/examples/cn/style/vector-marker/#style_vector-marker)
* Alignment: how the icon aligns with its coordinate point
* Placement: whether and how icons are placed along a line
* Collision detection: related settings
* 3D perspective: related properties
* Text fit: style properties that auto-fit the icon width and height to its text

| Category | Properties |
| -------- | --------- |
| Basic properties   | markerFile, markerOpacity, markerWidth, markerHeight, markerDx, markerDy, markerRotation |
| Alignment       | markerVerticalAlignment, markerHorizontalAlignment, markerRotationAlignment, markerPitchAlignment |
| Placement       | markerPlacement*, markerSpacing, mergeOnProperty |
| Collision detection   | markerAllowOverlap, markerIgnorePlacement |
| 3D perspective   | markerPerspectiveRatio* |
| Text fit | markerTextFit, markerTextFitPadding |
| Vector icons   | markerType, markerFill, markerFillPatternFile, markerFillOpacity, markerLineColor, markerLineWidth, markerLineOpacity, markerLineDasharray, markerLinePatternFile  |

> [!NOTE]
> Properties whose names carry an asterisk (*) do not support [function-type](/en/guide/style/function-type).

---------
### markerFile

Default: null

**String** — the icon's URL, either a url or a base64 string.

---------
### markerOpacity

Default: 1

**Number** — icon opacity, range 0-1.

---------
### markerWidth

Default: 15

**Number** — icon width, range 0-254.

---------
### markerHeight

Default: 15

**Number** — icon height, range 0-254.

---------
### markerDx

Default: 0

**Number** — the icon offset along the screen x-axis, range 0-127.

---------
### markerDy

Default: 0

**Number** — the icon offset along the screen y-axis, range 0-127.

---------
### markerRotation

Default: 0

**Number** — the icon rotation angle in degrees, range 0-360.

---------
### markerHorizontalAlignment

Default: middle

**String** — horizontal alignment of the icon relative to its coordinate point. Options: left, middle, right.

---------
### markerVerticalAlignment

Default: middle

**String** — vertical alignment of the icon relative to its coordinate point. Options: top, middle, bottom.

---------
### markerRotationAlignment

Default: null

**String** — when set to map, the icon rotates automatically with the map rotation.

---------
### markerPitchAlignment

Default: null

**String** — when set to map, the icon tilts automatically with the map pitch.

---------
### markerPlacement

Default: point

Does not support function-type.

**String** — the placement of icons: along a line or at normal point positions. Options: point, line.

When the data is a line and markerPlacement is point, the coordinate of the first endpoint of the line is used.

When the data is a line and markerPlacement is line, a coordinate is picked along the line at intervals of markerSpacing.

When the data is a polygon and markerPlacement is point, the pole of inaccessibility of the polygon is used, which is guaranteed to be inside the polygon even if it is concave.

---------
### markerSpacing

Default: 250

**Number** — requires markerPlacement to be line. The interval between icons placed along a line, in pixels.

---------
### mergeOnProperty

Default: null

**String** — requires markerPlacement to be line. Whether to merge lines that share the same value of the given property, so that icons placed along the line are drawn more accurately, e.g.:

```json
{
  "mergeOnProperty": "road_name"
}
```

---------
### markerAllowOverlap

Default: false

**Boolean** — requires collision detection to be enabled. Whether this icon is still displayed when it collides with other icons.

---------
### markerIgnorePlacement

Default: false

**Boolean** — requires collision detection to be enabled. Whether other icons are still displayed when they collide with this icon.

---------
### markerPerspectiveRatio

Default: true

Does not support function-type.

**Boolean** — whether to enable 3D perspective, so that icons appear larger when closer and smaller when farther away.

---------
### markerTextFit

Default: none

**String** — requires textName to be set. Whether the icon automatically sizes its height and width to fit the text. Options: both (fit both width and height), width (fit width only), height (fit height only).

---------
### markerTextFitPadding

Default: [0, 0, 0, 0]

**Number[]** — requires text to be set and markerTextFit to be true. A four-element array, in pixels, defining the padding between the icon and the text on its top, right, bottom and left edges, in that order.

---------
### markerType

Default: null

**String** — the vector icon type. Options: ellipse, cross, x, diamond, bar, square, triangle, pin, pie, rectangle.

---------
### markerFill

Default: #00f

**String**|**Number[]** — requires a valid markerType. The fill color of the vector icon, either a [css color value](https://developer.mozilla.org/zh-CN/docs/Web/CSS/color_value) or a normalized four-element array.

---------
### markerFillPatternFile

Default: null

**String** — requires a valid markerType. The pattern image URL for filling the vector icon, either a url or a base64 string.

---------
### markerFillOpacity

Default: 1

**Number** — requires a valid markerType. The fill opacity of the vector icon, range 0-1.

---------
### markerLineColor

Default: #000

**String**|**Number[]** — requires a valid markerType. The border color of the vector icon, either a [css color value](https://developer.mozilla.org/zh-CN/docs/Web/CSS/color_value) or a normalized four-element array.

---------
### markerLineWidth

Default: 1

**Number** — requires a valid markerType. The border width of the vector icon.

---------
### markerLineOpacity

Default: 1

**Number** — requires a valid markerType. The border opacity of the vector icon, range 0-1.

---------
### markerLineDasharray

Default: []

> Note: per the 2026 source code, the default value is [] (an empty array, i.e. a solid line, matching the maptalks core default); the old documentation wrote 1, which was incorrect.

**Number[]** — requires a valid markerType. The dashed border style of the vector icon, same as the dash styles supported by the canvas.setLineDash method.

---------
### markerLinePatternFile

Default: null

**String** — requires a valid markerType. The pattern image URL for the vector icon border, either a url or a base64 string.

---------

## text style properties

text style properties fall into the following categories:

* Basic properties: the most commonly used text style properties
* Text halo: properties related to the text halo
* Alignment: how the text aligns with its coordinate point
* Collision detection: related settings
* 3D perspective: related properties

| Category | Properties |
| -------- | --------- |
| Basic properties   | textName, textSize, textFill, textOpacity, textFaceName, textWeight, textStyle, textRotation, textDx, textDy, textWrapWidth  |
| Text halo   | textHaloFill, textHaloRadius, textHaloOpacity, textHaloBlur  |
| Alignment       | textHorizontalAlignment, textVerticalAlignment, textRotationAlignment, textPitchAlignment |
| Placement       | textPlacement*, textSpacing, mergeOnProperty |
| Collision detection   | textAllowOverlap, textIgnorePlacement |
| 3D perspective   | textPerspectiveRatio* |

> [!NOTE]
> Properties whose names carry an asterisk (*) do not support [function-type](/en/guide/style/function-type).

---------
### textName

Default: null

**String** — the text content to display. To display the value of a property, wrap the property name in braces, e.g.:

```json
{
  // 用name属性的值作为文字内容
  "textName": "{name}"
}
```

---------
### textSize

Default: 14

**Number** — the font size.

---------
### textFill

Default: [0, 0, 0, 1]

> Note: per the 2026 source code, the default value is [0, 0, 0, 1] (opaque black, vt create_text_painter DEFAULT_UNIFORMS); the old documentation wrote [0, 0, 0, 0], which was incorrect.

**String** | **Number** — the text color, either a [css color value](https://developer.mozilla.org/zh-CN/docs/Web/CSS/color_value) or a normalized four-element array.

---------
### textOpacity

Default: 1

**Number** — text opacity, range 0-1.

---------
### textFaceName

Default: monospace

**String** — the font family, same as the CSS [font-family](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-family) definition.

---------
### textWeight

Default: normal

> Note: per the 2026 source code, the default value is 'normal' (numerically equivalent to 400, the maptalks core TextMarkerSymbolizer default); the old documentation wrote 400.

**String** — the font weight, same as the CSS [font-weight](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-weight) definition.

---------
### textStyle

Default: normal

**String** — the font style, e.g. italic, same as the CSS [font-style](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-style) definition.

---------
### textRotation

Default: 0

**Number** — the text rotation angle in degrees, 0-360.

---------
### textDx

Default: 0

**Number** — the text offset along the screen x-axis, in pixels.

---------
### textDy

Default: 0

**Number** — the text offset along the screen y-axis, in pixels.

---------
### textWrapWidth

Default: 240

**Number** — the wrap width of the text; the text wraps automatically once its length exceeds this value.

---------
### textHaloFill

Default: [1, 1, 1, 1]

**String** | **Number[]** — the text halo color, either a [css color value](https://developer.mozilla.org/zh-CN/docs/Web/CSS/color_value) or a normalized four-element array.

---------
### textHaloRadius

Default: 0

**Number** — the text halo radius.

---------
### textHaloOpacity

Default: 1

**Number** — the text halo opacity, range 0-1.

---------
### textHaloBlur

Default: 0

**Number** — the sharpness of the text halo.

---------
### textHorizontalAlignment

Default: middle

**String** — horizontal alignment of the text relative to its coordinate point. Options: left, middle, right.

---------
### textVerticalAlignment

Default: middle

**String** — vertical alignment of the text relative to its coordinate point. Options: top, middle, bottom.

---------
### textRotationAlignment

Default: null

**String** — when set to map, the text rotates automatically with the map rotation.

---------
### textPitchAlignment

Default: null

**String** — when set to map, the text tilts automatically with the map pitch.

---------
### textPlacement

Default: point

Does not support function-type.

**String** — the placement of text: along a line or at normal point positions. Options: point, line. With the icon render plugin, if markerPlacement is set, it overrides this value.

When the data is a line and textPlacement is point, the coordinate of the first endpoint of the line is used.

When the data is a line and textPlacement is line, a coordinate is picked along the line at intervals of textSpacing.

When the data is a polygon and textPlacement is point, the pole of inaccessibility of the polygon is used, which is guaranteed to be inside the polygon even if it is concave.

---------
### textSpacing

Default: 250

**Number** — requires textPlacement to be line. The interval between text placed along a line, in pixels. With the icon render plugin, if markerSpacing is set, it overrides this value.

---------
### mergeOnProperty

Default: null

**String** — requires textPlacement to be line. Whether to merge lines that share the same value of the given property, so that text placed along the line is drawn more accurately, e.g.:

```json
{
  "mergeOnProperty": "road_name"
}
```

---------
### textAllowOverlap

Default: false

**Boolean** — requires collision detection to be enabled. Whether this text is still displayed when it collides with other text.

---------
### textIgnorePlacement

Default: false

**Boolean** — requires collision detection to be enabled. Whether other text is still displayed when it collides with this text.

---------
### textPerspectiveRatio

Default: 0

Does not support function-type.

**Number** — the perspective ratio of the text, range 0-1. 0 disables 3D perspective (the default); the larger the value, the stronger the near-larger-far-smaller effect (the vt create_text_painter default uniform is 0, and it defaults to 1 when textPlacement is line).

> Note: the old documentation described textPerspectiveRatio as a Boolean with a default of true; in the 2026 source code it is a numeric ratio from 0-1 with a default of 0 (2026 cross-check).

---------

## line style properties

---------
### lineColor

Default: #fff

> Note: per the 2026 source code, the default value is white #fff (the vt LinePainter sets the default line color to white so it composites correctly with linePattern — see the source comments); the old documentation wrote #000.

**String** | **Number[]** — the line color, either a [css color value](https://developer.mozilla.org/zh-CN/docs/Web/CSS/color_value) or a normalized four-element array.

---------
### lineWidth

Default: 2

**Number** — line width, range 0-127.

---------
### lineOpacity

Default: 1

**Number** — line opacity, range 0-1.

---------
### lineJoin

Default: miter

**String** — the join style of the line. Options: miter, round, bevel.

---------
### lineCap

Default: butt

**String** — the cap style of the line. Options: butt, round, square.

---------
### lineDx

Default: 0

**Number** — the line offset along the screen x-axis, in pixels, range -128 - 127.

---------
### lineDy

Default: 0

**Number** — the line offset along the screen y-axis, in pixels, range -128 - 127.

---------
### lineStrokeWidth

Default: 0

**Number** — the stroke width of the line, range 0-127.

---------
### lineStrokeColor

Default: [0, 0, 0, 0]

> Note: per the 2026 source code, the default value is [0, 0, 0, 0] (transparent, i.e. no stroke is drawn by default); the old documentation wrote #000.

**String** | **Number[]** — the stroke color of the line, either a [css color value](https://developer.mozilla.org/zh-CN/docs/Web/CSS/color_value) or a normalized four-element array.

---------
### linePatternFile

Default: null

**String** — the pattern image of the line, either a url or a base64 string.

---------
### lineJoinPatternMode

Default: 0

**Number** — the pattern fill mode at lineJoin. When 0, the pattern texture is drawn continuously across the join; when 1, the color of the first pixel of the image is used.

> Note: lineJoinPatternMode no longer exists in the 2026 source code (grep of the whole vt package repository); it is a legacy property that no longer takes effect (2026 cross-check).

---------
### linePatternGap

Default: 0

**Number** — the gap between pattern images, as a multiple of the pattern image width. For example, a value of 1 means the gap between two adjacent images equals the image width.

---------
### linePatternAnimSpeed

Default: 0

**Number** — the animation speed, range -5 to 5. A negative value reverses the animation direction.

> Note: the "line animation" illustration (assets/line-animation.gif) from the original documentation is missing in the migration source and has not been included (2026 cross-check).

---------
### lineDasharray

Default: [0, 0, 0, 0]

**Number[]** — the dash style of the line, a four-element array in pixels. Similar to canvas setLineDash, but only four elements are supported.

---------
### lineDashColor

Default: [0, 0, 0, 0]

**String** | **Number[]** — the color of the line dashes, either a [css color value](https://developer.mozilla.org/zh-CN/docs/Web/CSS/color_value) or a normalized four-element array.

## polygon style properties

---------
### polygonFill

Default: #fff

**String** | **Number[]** — the fill color of the polygon, either a [css color value](https://developer.mozilla.org/zh-CN/docs/Web/CSS/color_value) or a normalized four-element array.

---------
### polygonOpacity

Default: 1

**Number** — the fill opacity of the polygon, range 0-1.

---------
### polygonPatternFile

Default: null

**String** — the pattern image of the polygon, either a url or a base64 string.

---------
### uvScale

Default: [1, 1]

**Number[]** — the texture scale, a two-element array.

---------
### uvOffset

Default: [0, 0]

> Note: the uvOffset default has been adjusted to [0, 0] per the 2026 source code (FillPainter DEFAULT_UNIFORMS / PolygonLayer default); the old documentation wrote [0, 1].

**Number[]** — a two-element array: the texture offset. 0 means no offset, 1 means an offset equal to the image size; e.g. 0.5 offsets the texture by half the image.

## New in 2026

The following symbol properties are newly added or supplemented in the 2026 source code (@maptalks/gl-layers vt package) and were not covered by the old documentation:

### WaterSymbol (water render plugin)

Used by the water render plugin (realistic water), added in the 2026 source code:

| Property | Type | Description |
| --- | --- | --- |
| ssr | Boolean | Screen-space reflections |
| texWaveNormal | String | Wave normal texture |
| texWavePerturbation | String | Wave perturbation texture |
| waterBaseColor | Number[] | Water base color |
| contrast | Number | Contrast |
| hsv | Number[] | HSV adjustment |
| uvScale | Number | UV scale |
| animation | Boolean | Wave animation |
| waterSpeed | Number | Water flow speed |
| waterDirection | Number | Water flow direction |

> Note: water symbol defaults (2026 source code WaterPainter): ssr defaults to false, texWaveNormal / texWavePerturbation default to null, waterBaseColor defaults to [0.1451, 0.2588, 0.4863, 1], contrast defaults to 1, hsv defaults to [0, 0, 0], uvScale defaults to 3, animation defaults to false, waterSpeed defaults to 1, waterDirection defaults to 0.

### LitSymbol (lit render plugin)

The symbol of the lit render plugin (PBR material 3D rendering), added in the 2026 source code:

| Property | Type | Description |
| --- | --- | --- |
| bloom | Boolean | Whether to enable bloom glow |
| ssr | Boolean | Screen-space reflections |
| polygonOpacity | Number | Polygon opacity |
| material | Object | PBR material (LitMaterial); see the [material reference](/en/guide/style/material) for its fields |

### PolygonLayer / ExtrudePolygonLayer additions

- `uvOffsetInMeter` (Boolean, default false): whether the uv offset is measured in meters.
- `polygonPatternFileWidth` / `polygonPatternFileHeight` / `polygonPatternFileOrigin`: the width, height and origin settings of the fill texture.
- `polygonPatternUV`: uv control of the fill texture.
- Top/bottom face colors of ExtrudePolygonLayer: `topPolygonFill` and `bottomPolygonFill` (default [1, 1, 1, 1]).

> This document has been cross-checked against the @maptalks/gl-layers 2026 source code (api-notes-vt-gl.md)
