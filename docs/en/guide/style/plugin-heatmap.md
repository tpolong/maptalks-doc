---
title: heatmap render plugin
---

# heatmap render plugin

A render plugin that draws heatmaps for point data.

The heatmap render plugin renders point data into a heatmap on the GPU, using additive blending to accumulate density. The heatmap plugin supports only one symbol; when multiple styles are configured, only the first symbol's style is used.

## Configuration
```js
{
  // [必填] 渲染插件对象
  renderPlugin: {
    // [必填] 插件类型，固定为heatmap
    type: "heatmap",
    // [必填] 数据配置
    dataConfig: {
      // [必填] 数据类型，固定为circle
      type: "circle"
    },
    // [可选] 默认为null
    // 渲染场景配置
    sceneConfig: {
<!--@include: ./includes/plugin-common-sceneConfig.md-->
      // [可选] 默认为[0, 1]
      // WebGL深度值范围
      depthRange: [0, 1]
    }
  },
  // [可选] 默认为true
  // 数据过滤条件
  filter: true,
  // 样式属性
  symbol: {
    // [必填] 热力图颜色渐变
    heatmapColor: [
      [0, 'rgba(0,0,255,0)'],
      [0.4, 'blue'],
      [0.65, 'lime'],
      [1, 'red']
    ],
    heatmapRadius: 8,
    heatmapOpacity: 1,
    heatmapIntensity: 1
  }
}
```

For more on the filter data filtering conditions, see [feature-filter](/en/guide/style/feature-filter).

## Supported data types

<!--@include: ./includes/point-supports.md-->

## Dynamic styles

heatmapWeight supports [function-type](/en/guide/style/function-type) expressions, allowing per-point weights to be set from feature property values.

For example, the following sets each point's weight from the `weight` property:

```json
{
 "heatmapWeight": {
    "type": "identity",
    "property": "weight"
  }
}
```

## Supported Symbol style properties

-----------
### heatmapColor

Default: none (required)

**Array** — the heatmap color ramp (color stops) array, with elements of the form `[stop, color]`, where `stop` is a weight value in 0-1 and `color` is a [css color value](https://developer.mozilla.org/zh-CN/docs/Web/CSS/color_value). The heatmap samples this ramp with each point's weight to determine its color.

> Note: heatmapColor has no default in the source code (HeatmapPainter passes symbol.heatmapColor directly to HeatmapProcess to build the color ramp texture); the heatmap cannot be rendered without it.

-----------
### heatmapRadius

Default: 6

**Number** — the influence radius (in pixels) of each point in the heatmap. Larger values produce a blurrier, wider-spreading heatmap.

-----------
### heatmapOpacity

Default: 1

**Number** — the overall opacity of the heatmap, range 0-1.

-----------
### heatmapIntensity

Default: 1

**Number** — the intensity of the heatmap. Larger values make the heat brighter.

-----------
### heatmapWeight

Default: 1

**Number** — the weight of each point in the heatmap. Supports [function-type](/en/guide/style/function-type) expressions.

> This document has been cross-checked against the @maptalks/gl-layers 2026 source code (api-notes-others.md)
