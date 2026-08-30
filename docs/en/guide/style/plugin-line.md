---
title: line render plugin
---

# line render plugin

A render plugin that draws lines for line data.

## Configuration
```js
{
  // [必填] 渲染插件对象
  renderPlugin: {
    // [必填] 插件类型，固定为line
    type: "line",
    // [必填] 数据配置
    dataConfig: {
      // [必填] 数据类型，固定为line
      type: "line",
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
      // [可选] 默认为null
      // 线的轨迹动画功能
      trailAnimation: {
        // [可选] 默认为false
        // 是否开启动画
        enable: false,
        // [可选] 默认为1
        // 动画速度，如果为负值，动画方向则会反向
        speed: 1,
        // [可选] 默认为500
        // 轨迹长度，单位ms，即轨迹经过多长时间透明度变为0
        trailLength: 500,
        // [可选] 默认为1000
        // 轨迹循环时间，单位ms
        trailCircle: 1000
      }
    }
  },
  // [可选] 默认为true
  // 数据过滤条件
  filter: true,
  // 样式属性
  symbol: {
    lineColor: '#f00',
    lineWidth: 2,
    lineOpacity: 1
  }
}
```

For more on the filter data filtering conditions, see [feature-filter](/en/guide/style/feature-filter).

## Supported data types

<!--@include: ./includes/line-supports.md-->

## Dynamic styles

Most style properties support [function-type](/en/guide/style/function-type) expressions, allowing different style values to be set based on the zoom level or data property values.

For example, the following makes the line width increase with the map zoom level:

```json
{
 "lineWidth": {
    "stops": [[1, 2], [20, 10]]
  }
}
```

## Supported Symbol style properties

The line render plugin supports the [line style properties](/en/guide/style/symbols#line-style-properties).

In addition to the above, the following properties are also supported:

-----------
### lineBloom

Default: false

**Boolean** — whether to enable the bloom post-processing effect.

> This document has been cross-checked against the @maptalks/gl-layers 2026 source code (api-notes-vt-gl.md)
