---
title: native-line render plugin
---

# native-line render plugin

Draws line data using the native line drawing mechanism.

## Configuration
```js
{
  // [必填] 渲染插件对象
  renderPlugin: {
    // [必填] 插件类型，固定为line
    type: "native-line",
    // [必填] 数据配置
    dataConfig: {
      // [必填] 数据类型，固定为native-line
      type: "native-line",
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
      // [可选] 默认为<=
      // WebGL深度测试函数，可选的值有 always, never, <, <=, !=, >, >=
      depthFunc: '<=',
    }
  },
  // [可选] 默认为true
  // 数据过滤条件
  filter: true,
  // 样式属性
  symbol: {
    lineColor: '#000',
    lineOpacity: 1
  }
}
```

For more on the filter data filtering conditions, see [feature-filter](/en/guide/style/feature-filter).

## Supported data types

<!--@include: ./includes/line-supports.md-->

## Dynamic styles

Most style properties support [function-type](/en/guide/style/function-type) expressions, allowing different style values to be set based on the zoom level or data property values.

For example, the following makes the line opacity increase with the map zoom level:

```json
{
 "lineOpacity": {
    "stops": [[1, 0.1], [20, 1]]
  }
}
```

## Supported Symbol style properties

-----------
## lineColor

Default: #000

**String** | **Number[]** — the line color, either a [css color value](https://developer.mozilla.org/zh-CN/docs/Web/CSS/color_value) or a normalized four-element array.

-----------
## lineOpacity

Default: 1

**Number** — line opacity, range 0-1.

> This document has been cross-checked against the @maptalks/gl-layers 2026 source code (api-notes-vt-gl.md)
