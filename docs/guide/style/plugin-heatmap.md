---
title: heatmap 渲染插件
---

# heatmap渲染插件

为点类型数据绘制热力图的渲染插件。

heatmap渲染插件将点数据在GPU上渲染为热力图，通过加色混合（additive blending）叠加生成密度图。热力图插件只支持一个symbol，当配置了多组样式时，只使用第一个symbol的样式。

## 配置说明
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

filter 数据过滤条件的具体说明请点击[这里](/guide/style/feature-filter)。

## 支持的数据类型

<!--@include: ./includes/point-supports.md-->

## 动态样式

heatmapWeight支持 [function-type](/guide/style/function-type) 表达式，可以根据要素的属性值设置每个点的权重。

例如以下示例，能让每个点根据属性weight的值设置权重：

```json
{
 "heatmapWeight": {
    "type": "identity",
    "property": "weight"
  }
}
```

## 支持的Symbol样式属性

-----------
### heatmapColor

默认值：无（必填）

**Array**，热力图颜色渐变（color stops）数组，元素为 `[stop, color]` 形式，其中 `stop` 为 0-1 的权重值，`color` 为[css颜色值](https://developer.mozilla.org/zh-CN/docs/Web/CSS/color_value)。热力图会根据点的权重值在该渐变上取色。

> 注：源码中 heatmapColor 没有默认值（HeatmapPainter 将 symbol.heatmapColor 直接传给 HeatmapProcess 生成颜色渐变纹理），若不设置将无法渲染。

-----------
### heatmapRadius

默认值：6

**Number**，热力图中每个点的影响半径（像素），值越大热力图越模糊、扩散范围越大。

-----------
### heatmapOpacity

默认值：1

**Number** 热力图整体的透明度，取值范围 0 - 1。

-----------
### heatmapIntensity

默认值：1

**Number**，热力图的强度，值越大热力越高亮。

-----------
### heatmapWeight

默认值：1

**Number**，热力图中每个点的权重，支持[function-type](/guide/style/function-type)表达式。

> 本文档已与 @maptalks/gl-layers 2026 源码核对（api-notes-others.md）
