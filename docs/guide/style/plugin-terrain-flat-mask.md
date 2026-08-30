---
title: terrain-flat-mask 渲染插件
---

# terrain-flat-mask渲染插件

在带有地形的图层上，将指定区域内的地形拉平为平面效果的地形遮罩渲染插件。

terrain-flat-mask渲染插件用面数据生成地形遮罩：在遮罩范围内绘制一个平面，配合fill渲染插件（先画fill，再画遮罩）可实现地形开挖、削平等效果。遮罩平面默认绘制在要素自身高度上，可通过dataConfig的altitudeOffset调整高度。

> 注：该插件需要图层开启 `awareOfTerrain` 选项（感知地形）时才作为地形遮罩生效（源码 TerrainFlatMaskPainter.isTerrainMask 返回 layer.options.awareOfTerrain）。

## 配置说明
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

filter 数据过滤条件的具体说明请点击[这里](/guide/style/feature-filter)。

## 支持的数据类型

<!--@include: ./includes/fill-supports.md-->

## 支持的Symbol样式属性

terrain-flat-mask渲染插件没有symbol样式属性，symbol可以设为空对象 `{}`。

> 本文档已与 @maptalks/gl-layers 2026 源码核对（api-notes-others.md）
