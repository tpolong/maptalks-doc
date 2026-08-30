---
title: wireframe render plugin
---

# wireframe render plugin

A render plugin that renders 3D polygon data as wireframes.

## Configuration
```js
{
  renderPlugin: {
    // [必填] 固定为wireframe
    type: 'wireframe',
    // [必填] 数据生成设置
    dataConfig: {
      // [必填]，数据类型，固定为3d-wireframe
      type: "3d-wireframe",
      // [可选] 默认为null
      // 顶部高度的属性值，如果没有设置，则用默认高度
      altitudeProperty: "height",
      // [可选] 默认为null
      // 底部高度的属性值，如果底部高度不为0，则三维体会悬空。如果没有设置，则底部高度默认为0。
      minHeightProperty: "min_height",
      // [可选] 默认为1，单位米
      // 高度缩放比例，例如altitudeProperty中如果存储的是楼层数，可以把altitudeScale设为层高，例如4米
      altitudeScale: 1,
      // [可选] 默认为0，单位米
      // 默认的高度
      defaultAltitude: 0,
      // [可选] 默认为null
      // 顶面高度属性的属性名（未设置时高度取 altitude 或 minHeightProperty 计算值）
      heightProperty: null,
      // [可选] 默认为null
      // 顶面默认高度
      defaultHeight: null,
      // [可选] 默认为false
      // 是否同时绘制底面边框
      bottom: false
    },
    // [可选] 场景渲染设置
    sceneConfig: {
      <!--@include: ./includes/plugin-common-sceneConfig.md-->
      // [可选] 默认为0.3
      // 边框整体的透明度
      opacity: 0.3,
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
    lineColor: '#f00',
    lineOpacity: 1
  }
}
```

For more on the filter data filtering conditions, see [feature-filter](/en/guide/style/feature-filter).

## Supported data types

<!--@include: ./includes/fill-supports.md-->

## Dynamic styles

Currently only lineColor and lineOpacity support [function-type](/en/guide/style/function-type) expressions, allowing different style values to be set based on the zoom level or data property values.

## Supported Symbol style properties

-----------
### visible

Default: true

**Boolean** — whether it is visible.

-----------
### lineColor

Default: [1, 1, 1, 1]

**String** | **Number[]** — the wireframe color, either a [css color value](https://developer.mozilla.org/zh-CN/docs/Web/CSS/color_value) or a normalized four-element array.

-----------
### lineOpacity

Default: 1

**Number** — the wireframe opacity, range 0-1.

-----------
### bloom

Default: false

**Boolean** — whether to enable the bloom post-processing effect.

> This document has been cross-checked against the @maptalks/gl-layers 2026 source code (api-notes-vt-gl.md)
