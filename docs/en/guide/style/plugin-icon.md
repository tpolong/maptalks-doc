---
title: icon render plugin
---

# icon render plugin

A render plugin that draws icons and text for point data.

## Configuration
```js
{
  // [必填] 渲染插件对象
  renderPlugin: {
    // [必填] 插件类型，固定为icon
    type: "icon",
    // [必填] 数据配置
    dataConfig: {
      // [必填] 数据类型，固定为point
      type: "point",
      // [可选] 默认为false
      // 声明是否只包含2D数据。
      // 设为true时，VectorTileLayer会开启瓦片的模板测试(stencil test)，
      // 剪切掉超过瓦片范围的数据，消除绘制时瓦片重叠部分的绘制问题
      only2D: true
    },
    // [可选] 默认为null
    // 渲染场景配置
    sceneConfig: {
<!--@include: ./includes/plugin-common-sceneConfig.md-->
      // [可选] 默认为always，即永远显示
      // WebGL深度测试函数，可选的值有 always, never, <, <=, !=, >, >=
      depthFunc: 'always',
      // [可选] 默认为false
      // 是否开启图标全局定位，即同一数据在不同级别瓦片上，都会保持统一的绘制。
      // 例如如果开启了fading，同一数据出现在新的级别瓦片上，但不会有fading入场。
      uniquePlacement: false,

      // [可选] 默认为false
      // 是否开启碰撞检测（需要图层 options.collision 同时为 true 才生效）
      collision: false,
      // [可选] 默认为false
      // 是否开启碰撞检测的透明度过渡效果
      fading: false,
      // [可选] 默认为 16*14
      // 碰撞检测过渡效果的持续时间
      fadingDuration: 16 * 14,
      // [可选] 默认为600
      // 图标通过碰撞检测，从隐藏到显示的过渡效果的开始延迟
      fadeInDelay: 600,
      // [可选] 默认为100
      // 图标未通过碰撞检测，从显示到隐藏的过渡效果的开始延迟
      fadeOutDelay: 100
    }
  },
  // [可选] 默认为true
  // 数据过滤条件
  filter: true,
  // 样式属性
  symbol: {
    markerFile: "path/to/marker.png",
    markerWidth: 16,
    markerHeight: 16,
    markerOpacity: 1,
    textSize: 14,
    textFill: "rgba(0,0,0,1)",
    textName: "{name}",
  }
}
```

> Note: the icon/text scene config defaults have been cross-checked against the 2026 source code: when a VectorTileLayer style does not set sceneConfig, it is treated as `{}`, and collision / fading are both disabled by default (collision additionally requires the layer `options.collision: true` to take effect); vector layers (PointLayer) inject `ICON_PAINTER_SCENECONFIG` by default (collision: true, fading: false). The old documentation said fading defaults to true, which was incorrect and has been fixed (2026 cross-check).

For more on the filter data filtering conditions, see [feature-filter](/en/guide/style/feature-filter).

## Supported data types

<!--@include: ./includes/point-supports.md-->

## Dynamic styles

Most style properties support [function-type](/en/guide/style/function-type) expressions, allowing different style values to be set based on the zoom level or data property values.

For example, the following makes the icon size increase with the map zoom level:

```js
{
  markerWidth: {
    stops: [
      [1, 4],
      [20, 20]
    ]
  },

  markerHeight: {
    stops: [
      [1, 4],
      [20, 20]
    ]
  }
}
```

## Supported Symbol style properties

The icon render plugin supports the [marker style properties](/en/guide/style/symbols#marker-style-properties) and [text style properties](/en/guide/style/symbols#text-style-properties).

In addition, the following properties are also supported:

-----------
### markerBloom

Default: false

**Boolean** — whether to enable the bloom post-processing effect.

-----------
### textBloom

Default: false

**Boolean** — whether the text part supports the bloom post-processing effect (in the 2026 source code, IconPainter.getBloomSymbol supports both markerBloom and textBloom).

> This document has been cross-checked against the @maptalks/gl-layers 2026 source code (api-notes-vt-gl.md)
