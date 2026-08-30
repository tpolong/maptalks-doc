---
title: billboard 渲染插件
---

# billboard渲染插件

用始终面向相机的广告牌（billboard）方式渲染点类型数据的渲染插件。

billboard渲染插件用图片或动态生成的canvas纹理绘制始终面向相机的广告牌，常用于3D场景中的标注、路牌、动态信息牌等。广告牌的宽高、旋转和位移都支持[function-type](/guide/style/function-type)表达式。billboard插件只支持一个symbol，当配置了多组样式时，只使用第一个symbol的样式。

## 配置说明
```js
{
  // [必填] 渲染插件对象
  renderPlugin: {
    // [必填] 插件类型，固定为billboard
    type: "billboard",
    // [必填] 数据配置
    dataConfig: {
      // [必填] 数据类型，固定为native-point
      type: "native-point"
    },
    // [可选] 默认为null
    // 渲染场景配置
    sceneConfig: {
<!--@include: ./includes/plugin-common-sceneConfig.md-->
      // [可选] 默认为<=
      // WebGL深度测试函数，可选的值有 always, never, <, <=, !=, >, >=
      depthFunc: '<=',
      // [可选] 默认为1024
      // 当source为函数时，多个广告牌纹理打包成的图集(atlas)的最大边长（像素）
      textureLimit: 1024
    }
  },
  // [可选] 默认为true
  // 数据过滤条件
  filter: true,
  // 样式属性
  symbol: {
    // [必填] 广告牌的纹理来源
    source: (context, properties) => {
      return {
        redraw: true,
        data: canvas
      };
    },
    width: 12,
    height: 6,
    rotationZ: 60
  }
}
```

filter 数据过滤条件的具体说明请点击[这里](/guide/style/feature-filter)。

## 支持的数据类型

<!--@include: ./includes/point-supports.md-->

## 动态样式

width、height、rotationX、rotationY、rotationZ、translationX、translationY、translationZ 支持 [function-type](/guide/style/function-type) 表达式，支持根据不同zoom级别或数据的属性值设置不同的样式属性。

例如以下示例，能让广告牌的宽度根据属性width的值设置：

```json
{
 "width": {
    "type": "identity",
    "property": "width"
  }
}
```

## 支持的Symbol样式属性

-----------
### source

默认值：null（必填）

**String** | **Function**，广告牌的纹理来源。
- **String**: 图片的URL，图片加载完成后显示。
- **Function**: `(context, properties) => { redraw, data }`，动态生成纹理。其中 `context` 是每个广告牌独立的上下文对象，可用于缓存canvas等中间结果；`properties` 是要素的属性对象。返回 `{ redraw: false }` 表示纹理无需更新；返回 `{ redraw: true, data: canvas }` 表示用返回的canvas（或Image）更新纹理。

-----------
### width

默认值：0，单位米

**Number**，广告牌的宽度，支持[function-type](/guide/style/function-type)表达式。

-----------
### height

默认值：0，单位米

**Number**，广告牌的高度，支持[function-type](/guide/style/function-type)表达式。

-----------
### rotationX

默认值：0，单位度

**Number**，广告牌绕X轴的旋转角度，支持[function-type](/guide/style/function-type)表达式。

-----------
### rotationY

默认值：0，单位度

**Number**，广告牌绕Y轴的旋转角度，支持[function-type](/guide/style/function-type)表达式。

-----------
### rotationZ

默认值：0，单位度

**Number**，广告牌绕Z轴的旋转角度，支持[function-type](/guide/style/function-type)表达式。

-----------
### translationX

默认值：0，单位米

**Number**，广告牌沿X轴的位移，支持[function-type](/guide/style/function-type)表达式。

-----------
### translationY

默认值：0，单位米

**Number**，广告牌沿Y轴的位移，支持[function-type](/guide/style/function-type)表达式。

-----------
### translationZ

默认值：0，单位米

**Number**，广告牌沿Z轴的位移，支持[function-type](/guide/style/function-type)表达式。

> 本文档已与 @maptalks/gl-layers 2026 源码核对（api-notes-others.md）
