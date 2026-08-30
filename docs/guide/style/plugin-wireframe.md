---
title: wireframe 渲染插件
---

# wireframe渲染插件

用边框渲染三维面数据的渲染插件。

## 配置说明
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

filter 数据过滤条件的具体说明请点击[这里](/guide/style/feature-filter)。

## 支持的数据类型

<!--@include: ./includes/fill-supports.md-->

## 动态样式

目前只有lineColor、lineOpacity支持[function-type](/guide/style/function-type) 表达式，支持根据不同zoom级别或数据的属性值设置不同的样式属性。

## 支持的Symbol样式属性

-----------
### visible

默认值：true

**Boolean**，是否显示。

-----------
### lineColor

默认值：[1, 1, 1, 1]

**String** | **Number[]**，边框颜色，可以为[css颜色值](https://developer.mozilla.org/zh-CN/docs/Web/CSS/color_value)或者归一化四位数组。

-----------
### lineOpacity

默认值：1

**Number** 边框透明度，取值范围 0 - 1。

-----------
### bloom

默认值：false

**Boolean**，是否支持bloom泛光后处理。

> 本文档已与 @maptalks/gl-layers 2026 源码核对（api-notes-vt-gl.md）
