---
title: tube render plugin
---

# tube render plugin

A render plugin that draws three-dimensional tubular (pipe) geometry for line data.

The tube render plugin extrudes line data into 3D round tubes (`round-tube`) or square tubes (`square-tube`). It belongs to the extrusion family of data configurations, similar to `line-extrusion` / `3d-extrusion`, and is commonly used for underground pipelines, tunnels, and cables. Tubes are rendered with PBR materials and support metallic, roughness, emissive, and surface texture properties.

## Configuration
```js
{
  // [必填] 渲染插件对象
  renderPlugin: {
    // [必填] 插件类型，固定为tube
    type: "tube",
    // [必填] 数据配置
    dataConfig: {
      // [必填] 数据类型，可选的值有：
      // round-tube: 圆形管道
      // square-tube: 方形管道
      type: "round-tube",
      // [可选] 默认为8，只对round-tube有效
      // 圆管横截面的分段数，值越大管道越圆。
      // 注意：奇数会被自动减1变为偶数
      radialSegments: 16,
      // [可选] 默认为"meter"（米）
      // lineWidth的度量单位，可选的值有：
      // "cm"或"centimeter": lineWidth的单位为厘米
      // "mm"或"millimeter": lineWidth的单位为毫米
      // 其他值（如"meter"）: lineWidth的单位为米
      metric: "cm",
      // [可选] 默认为null
      // 管道高度的属性值，如果没有设置，则用默认高度
      altitudeProperty: "height",
      // [可选] 默认为0，单位米
      // 默认的高度
      defaultAltitude: 0,
      // [可选] 默认为1
      // 高度缩放比例，例如altitudeProperty中如果存储的是楼层数，可以把altitudeScale设为层高
      altitudeScale: 1
    },
    // [可选] 默认为null
    // 渲染场景配置
    sceneConfig: {
<!--@include: ./includes/plugin-common-sceneConfig.md-->
      // [可选] 默认为<=
      // WebGL深度测试函数，可选的值有 always, never, <, <=, !=, >, >=
      depthFunc: '<=',
      // [可选] 默认为null
      // WebGL面剔除的面，可选的值有 front, back。
      // 默认不开启面剔除；设置后开启面剔除并剔除指定面
      cullFace: 'back',
      // [可选] 默认为true
      // 是否写入深度缓冲
      depthMask: true
    }
  },
  // [可选] 默认为true
  // 数据过滤条件
  filter: true,
  // 样式属性
  symbol: {
    lineColor: '#fff',
    lineWidth: 2,
    lineOpacity: 1,
    metallicFactor: 0,
    roughnessFactor: 0.4
  }
}
```

For more on the filter data filtering conditions, see [feature-filter](/en/guide/style/feature-filter).

## Supported data types

<!--@include: ./includes/line-supports.md-->

## Dynamic styles

Most style properties support [function-type](/en/guide/style/function-type) expressions, allowing different style values to be set based on the zoom level or data property values.

For example, the following makes the tube width increase with the map zoom level:

```json
{
 "lineWidth": {
    "stops": [[1, 2], [20, 10]]
  }
}
```

## Supported Symbol style properties

-----------
### lineColor

Default: #fff

> Note: the default is white, set in the source code to support composition with the linePattern texture.

**String** | **Number[]** — the tube color, either a [css color value](https://developer.mozilla.org/zh-CN/docs/Web/CSS/color_value) or a normalized four-element array.

-----------
### lineWidth

Default: 2

**Number** — the tube width (diameter). The unit is determined by the dataConfig [metric](#configuration).

-----------
### lineOpacity

Default: 1

**Number** — the tube opacity, range 0-1.

-----------
### metallicFactor

Default: 0

**Number** — the PBR material metallic factor, range 0-1. See the [material documentation](/en/guide/style/material#pbr-material).

-----------
### roughnessFactor

Default: 0.4

**Number** — the PBR material roughness factor, range 0-1. See the [material documentation](/en/guide/style/material#pbr-material).

-----------
### emissiveFactor

Default: [0, 0, 0]

**Number[]** — the PBR material emissive color, a normalized three-element array.

-----------
### lineBloom

Default: false

**Boolean** — whether to enable the bloom post-processing effect.

-----------
### linePatternFile

Default: null

**String** — the URL of the tube surface texture image. When set, the texture is displayed on the tube surface.

-----------
### linePatternGapColor

Default: [1, 1, 1, 1]

**Number[]** — the color of the gaps between tube texture patterns, a normalized four-element array.

-----------
### linePatternAnimSpeed

Default: 0

**Number** — the animation speed of the tube texture. When greater than 0, the texture flows along the tube direction.

-----------
### linePatternGap

Default: 0

**Number** — the gap size of the tube texture pattern.

-----------
### uvScale

Default: [1, 1]

**Number[]** — the scale of the tube texture coordinates.

> This document has been cross-checked against the @maptalks/gl-layers 2026 source code (api-notes-others.md)
