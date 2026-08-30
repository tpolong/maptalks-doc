---
title: terrain-flat-mask render plugin
---

# terrain-flat-mask render plugin

A terrain mask render plugin that flattens the terrain inside a given area into a plane on layers with terrain.

The terrain-flat-mask render plugin generates a terrain mask from polygon data: it draws a plane over the masked area. Combined with the fill render plugin (draw the fill first, then the mask), it can achieve terrain excavation and flattening effects. The mask plane is drawn at the feature's own altitude by default, and its height can be adjusted with the dataConfig `altitudeOffset`.

> Note: this plugin only acts as a terrain mask when the layer has the `awareOfTerrain` option enabled (TerrainFlatMaskPainter.isTerrainMask returns layer.options.awareOfTerrain in the source code).

## Configuration
```js
{
  // [必填] 渲染插件对象
  renderPlugin: {
    // [必填] 插件类型，固定为terrain-flat-mask
    type: "terrain-flat-mask",
    // [必填] 数据配置
    dataConfig: {
      // [必填] 数据类型，固定为fill
      type: "fill",
      // [可选] 默认为0，单位米
      // 遮罩平面的垂直偏移高度
      altitudeOffset: 3500
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
  symbol: {}
}
```

For more on the filter data filtering conditions, see [feature-filter](/en/guide/style/feature-filter).

## Supported data types

<!--@include: ./includes/fill-supports.md-->

## Supported Symbol style properties

The terrain-flat-mask render plugin has no symbol style properties; `symbol` can be set to an empty object `{}`.

> This document has been cross-checked against the @maptalks/gl-layers 2026 source code (api-notes-others.md)
