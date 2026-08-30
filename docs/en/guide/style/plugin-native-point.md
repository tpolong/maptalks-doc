---
title: native-point render plugin
---

# native-point render plugin

Draws point data using the native point drawing mechanism.

## Configuration
```js
{
  // [必填] 渲染插件对象
  renderPlugin: {
    // [必填] 插件类型，固定为line
    type: "native-point",
    // [必填] 数据配置
    dataConfig: {
      // [必填] 数据类型，固定为native-point
      type: "native-point",
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
    }
  },
  // [可选] 默认为true
  // 数据过滤条件
  filter: true,
  // 样式属性
  symbol: {
    markerType: 'circle',
    markerFill: '#f00',
    markerSize: 2,
    markerOpacity: 1
  }
}
```

For more on the filter data filtering conditions, see [feature-filter](/en/guide/style/feature-filter).

## Supported data types

<!--@include: ./includes/point-supports.md-->

## Dynamic styles

Most style properties support [function-type](/en/guide/style/function-type) expressions, allowing different style values to be set based on the zoom level or data property values.

For example, the following makes the icon size increase with the map zoom level:

```json
{
 "markerSize": {
    "stops": [[1, 2], [20, 10]]
  }
}
```

## Supported Symbol style properties

-----------
### markerType

Default: square

**String** — the point type. Options: square, circle.

-----------
### markerSize

Default: 10

> Note: per the 2026 source code, the default value is 10 (NativePointPainter DEFAULT_UNIFORMS.markerSize); the old documentation wrote 1.

**Number** — the point size. The valid range is determined by the platform, and native point sizes may vary across platforms.

-----------
## markerFill

Default: #000

**String** | **Number[]** — the point color, either a [css color value](https://developer.mozilla.org/zh-CN/docs/Web/CSS/color_value) or a normalized four-element array.

-----------
## markerOpacity

Default: 1

**Number** — point opacity, range 0-1.

> This document has been cross-checked against the @maptalks/gl-layers 2026 source code (api-notes-vt-gl.md)
