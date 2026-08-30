---
title: tube 渲染插件
---

# tube渲染插件

为线类型数据绘制三维管状几何体（管道）的渲染插件。

tube渲染插件将线数据拉伸为三维圆管（round-tube）或方管（square-tube），属于拉伸（extrusion）类数据配置，与 line-extrusion / 3d-extrusion 类似，可用于地下管线、隧道、电缆等场景。管线使用PBR材质渲染，支持金属度、粗糙度、自发光和表面纹理等属性。

## 配置说明
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

filter 数据过滤条件的具体说明请点击[这里](/guide/style/feature-filter)。

## 支持的数据类型

<!--@include: ./includes/line-supports.md-->

## 动态样式

大部分样式属性都支持 [function-type](/guide/style/function-type) 表达式，支持根据不同zoom级别或数据的属性值设置不同的样式属性。

例如以下示例，能让管道的宽度在不同地图级别上由小变大：

```json
{
 "lineWidth": {
    "stops": [[1, 2], [20, 10]]
  }
}
```

## 支持的Symbol样式属性

-----------
### lineColor

默认值：#fff

> 注：默认值为白色，源码中为了支持与linePattern纹理的合成而设置。

**String** | **Number[]**，管道的颜色，可以为[css颜色值](https://developer.mozilla.org/zh-CN/docs/Web/CSS/color_value)或者归一化四位数组。

-----------
### lineWidth

默认值：2

**Number**，管道的宽度（直径），单位由dataConfig的[metric](#配置说明)决定。

-----------
### lineOpacity

默认值：1

**Number** 管道的透明度，取值范围 0 - 1。

-----------
### metallicFactor

默认值：0

**Number**，PBR材质的金属度，取值范围 0 - 1，可以参考[材质说明文档](/guide/style/material#pbr材质)。

-----------
### roughnessFactor

默认值：0.4

**Number**，PBR材质的粗糙度，取值范围 0 - 1，可以参考[材质说明文档](/guide/style/material#pbr材质)。

-----------
### emissiveFactor

默认值：[0, 0, 0]

**Number[]**，PBR材质的自发光颜色，归一化三位数组。

-----------
### lineBloom

默认值：false

**Boolean**，是否支持bloom泛光后处理。

-----------
### linePatternFile

默认值：null

**String**，管道表面纹理图片的URL，设置后管道表面将显示该纹理。

-----------
### linePatternGapColor

默认值：[1, 1, 1, 1]

**Number[]**，管道纹理间隙的颜色，归一化四位数组。

-----------
### linePatternAnimSpeed

默认值：0

**Number**，管道纹理的动画速度，大于0时纹理沿管道方向流动。

-----------
### linePatternGap

默认值：0

**Number**，管道纹理的间隙大小。

-----------
### uvScale

默认值：[1, 1]

**Number[]**，管道纹理坐标的缩放比例。

> 本文档已与 @maptalks/gl-layers 2026 源码核对（api-notes-others.md）
