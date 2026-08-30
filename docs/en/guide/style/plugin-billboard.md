---
title: billboard render plugin
---

# billboard render plugin

A render plugin that draws point data as camera-facing billboards.

The billboard render plugin draws camera-facing billboards using images or dynamically generated canvas textures, commonly used for labels, road signs, and dynamic information boards in 3D scenes. The billboard's width, height, rotation, and translation all support [function-type](/en/guide/style/function-type) expressions. The billboard plugin supports only one symbol; when multiple styles are configured, only the first symbol's style is used.

## Configuration
```js
{
  // [必填] 渲染插件对象
  renderPlugin: {
    // [必填] 插件类型，固定为billboard
    type: "billboard",
    // [必填] 数据配置
    dataConfig: {
      // [必填] 数据类型，固定为native-point
      type: "native-point"
    },
    // [可选] 默认为null
    // 渲染场景配置
    sceneConfig: {
<!--@include: ./includes/plugin-common-sceneConfig.md-->
      // [可选] 默认为<=
      // WebGL深度测试函数，可选的值有 always, never, <, <=, !=, >, >=
      depthFunc: '<=',
      // [可选] 默认为1024
      // 当source为函数时，多个广告牌纹理打包成的图集(atlas)的最大边长（像素）
      textureLimit: 1024
    }
  },
  // [可选] 默认为true
  // 数据过滤条件
  filter: true,
  // 样式属性
  symbol: {
    // [必填] 广告牌的纹理来源
    source: (context, properties) => {
      return {
        redraw: true,
        data: canvas
      };
    },
    width: 12,
    height: 6,
    rotationZ: 60
  }
}
```

For more on the filter data filtering conditions, see [feature-filter](/en/guide/style/feature-filter).

## Supported data types

<!--@include: ./includes/point-supports.md-->

## Dynamic styles

width, height, rotationX, rotationY, rotationZ, translationX, translationY, and translationZ support [function-type](/en/guide/style/function-type) expressions, allowing different style values to be set based on the zoom level or data property values.

For example, the following sets the billboard width from the `width` property:

```json
{
 "width": {
    "type": "identity",
    "property": "width"
  }
}
```

## Supported Symbol style properties

-----------
### source

Default: null (required)

**String** | **Function** — the texture source of the billboard.
- **String**: the URL of an image, displayed once the image is loaded.
- **Function**: `(context, properties) => { redraw, data }` — dynamically generates the texture. `context` is a context object independent to each billboard, which can be used to cache intermediate results such as a canvas; `properties` is the feature's property object. Return `{ redraw: false }` to keep the current texture; return `{ redraw: true, data: canvas }` to update the texture with the returned canvas (or Image).

-----------
### width

Default: 0, in meters

**Number** — the width of the billboard. Supports [function-type](/en/guide/style/function-type) expressions.

-----------
### height

Default: 0, in meters

**Number** — the height of the billboard. Supports [function-type](/en/guide/style/function-type) expressions.

-----------
### rotationX

Default: 0, in degrees

**Number** — the rotation angle of the billboard around the X axis. Supports [function-type](/en/guide/style/function-type) expressions.

-----------
### rotationY

Default: 0, in degrees

**Number** — the rotation angle of the billboard around the Y axis. Supports [function-type](/en/guide/style/function-type) expressions.

-----------
### rotationZ

Default: 0, in degrees

**Number** — the rotation angle of the billboard around the Z axis. Supports [function-type](/en/guide/style/function-type) expressions.

-----------
### translationX

Default: 0, in meters

**Number** — the translation of the billboard along the X axis. Supports [function-type](/en/guide/style/function-type) expressions.

-----------
### translationY

Default: 0, in meters

**Number** — the translation of the billboard along the Y axis. Supports [function-type](/en/guide/style/function-type) expressions.

-----------
### translationZ

Default: 0, in meters

**Number** — the translation of the billboard along the Z axis. Supports [function-type](/en/guide/style/function-type) expressions.

> This document has been cross-checked against the @maptalks/gl-layers 2026 source code (api-notes-others.md)
