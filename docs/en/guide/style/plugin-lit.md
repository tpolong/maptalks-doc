---
title: lit render plugin
---

# lit render plugin

A render plugin that renders 3D polygon data with PBR material.

## Configuration
```js
{
  renderPlugin: {
    // [必填] 固定为lit
    type: "lit",
    // [必填] 数据生成设置
    dataConfig: {
      // [必填]，数据类型
      // 数据类型，可以是
      // 3d-extrusion: 提升二维面为三维面
      // line-extrusion: 提升二维线为三维线
      type: "3d-extrusion",
      <!--@include: ./includes/extrusion-dataconfig.md-->
    },
    // [可选] 场景渲染设置
    sceneConfig: {
      <!--@include: ./includes/plugin-common-sceneConfig.md-->
      // [可选] 默认为<=
      // WebGL深度测试函数，可选的值有 always, never, <, <=, !=, >, >=
      depthFunc: '<=',
      // [可选] String类型，默认为null
      // 三维面的进场动画，animation制定了动画的easing
      // 具体支持的easing种类可以参考： https://github.com/fuzhenn/animation-easings
      animation: null,
      // [可选] 默认为 800，单位ms
      // 动画持续时间
      animationDuration: 800
    }
  },
  filter: true,
  symbol: {
    visible: true,
    bloom: false,
    ssr: false,
    polygonOpacity: 1,
    material: {
      baseColorFactor: [1, 1, 1, 1],
      roughnessFactor: 0.4,
      metallicFactor: 0
    }
  }
}
```

For more on the filter data filtering conditions, see [feature-filter](/en/guide/style/feature-filter).

## Supported data types

<!--@include: ./includes/line-supports.md-->

## Dynamic styles

Currently only visible, polygonFill and polygonOpacity support [function-type](/en/guide/style/function-type) expressions, allowing different style values to be set based on the zoom level or data property values.

For example, the following makes the polygon opacity increase with the map zoom level:

```json
{
 "polygonOpacity": {
    "stops": [[1, 0.1], [20, 1]]
  }
}
```

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
### ssr

Default: false

**Boolean** — whether to enable the SSR (screen-space reflections) post-processing effect.

-----------
### material

Default: null

**Object** — the PBR material settings. See the [material reference](/en/guide/style/material#pbr-material) for the specific properties.

> Note: newer versions also have tube/heatmap/billboard/terrain-flat-mask render plugins, which have no standalone documentation yet (2026 cross-check).

> This document has been cross-checked against the @maptalks/gl-layers 2026 source code (api-notes-vt-gl.md)
