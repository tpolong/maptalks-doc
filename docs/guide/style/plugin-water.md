---
title: water 渲染插件
---

# water渲染插件

用真实水体效果渲染面数据的渲染插件。

## 配置说明
```js
{
  renderPlugin: {
    // [必填] 固定为water
    type: 'water',
    // [必填] 数据生成设置
    dataConfig: {
      // [必填]，数据类型，固定为fill
      type: "fill"
    }
  },
  filter: true,
  symbol: {
    // [可选] 默认为false
    // 是否开启ssr后处理
    ssr: false,
    // [必填] 默认为null
    // 水波法线纹理。
    texWaveNormal: 'path/to/texWaveNormal.png',
    // [必填] 默认为null
    // 水波扰动纹理。
    texWavePerturbation: 'path/to/texWavePerturbation.png',
    // [可选] 默认为0
    // 水体流向方向，取值范围，0-360，单位度
    waterDirection: 0,
    // [可选] 默认为 [0.1451, 0.2588, 0.4863, 1]
    // 水体基础色，归一化的4位数组
    waterBaseColor: [0.1451, 0.2588, 0.4863, 1],
    // [可选] 默认为false
    // 是否开启动画
    animation: true
  }
}
```

filter 数据过滤条件的具体说明请点击[这里](/guide/style/feature-filter)。

## 支持的数据类型

<!--@include: ./includes/fill-supports.md-->

## 动态样式

water渲染插件中的symbol属性不支持动态样式

## 支持的Symbol样式属性

-----------
### ssr

默认值：false

**Boolean**，是否支持ssr屏幕空间反射后处理。

-----------
### texWaveNormal

默认值：null

**String**，水波法线纹理，IDE中使用的水波法线纹理如下：

![水波法线纹理](./assets/default-tex-wave-normal.png)

-----------
### texWavePerturbation

默认值：null

**String**，水波扰动纹理，IDE中使用的水波扰动纹理如下：

![水波扰动纹理](./assets/default-tex-wave-perturbation.png)

-----------
### waterDirection

默认值：0

**Number** 水体流向方向，取值范围，0-360，单位度

-----------
### waterBaseColor

默认值：[0.1451, 0.2588, 0.4863, 1]

**Number[]** 水体颜色，四位归一化数组。

-----------
### animation

默认值：false

**Boolean** 是否开启水体的动画（2026 源码 WaterPainter 中 symbol.animation 缺省时不启用动画，旧文档写作 true）。

-----------
### contrast

默认值：1

**Number** 水面颜色的对比度。

-----------
### hsv

默认值：[0, 0, 0]

**Number[]** 水面的 HSV 颜色调整，三位分别是 hue、saturation、value。

-----------
### uvScale

默认值：3

**Number** 波浪法线贴图的 UV 缩放（repeat 次数）。

-----------
### waterSpeed

默认值：1

**Number** 水流速度，配合 animation 使用，值越大流动越快。

> 本文档已与 @maptalks/gl-layers 2026 源码核对（api-notes-vt-gl.md）
