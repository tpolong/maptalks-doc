---
title: gltf-lit 渲染插件
---

# gltf-lit渲染插件

用pbr材质的GLTF模型渲染点类型数据的渲染插件。

## 配置说明
```js
{
  renderPlugin: {
    // [必填] 固定为gltf-lit
    type: 'gltf-lit',
    // [必填] 数据设置
    dataConfig: {
      // [必填] 固定为 native-point
      type: 'native-point'
    }
  },
  filter: true,
  symbol: {
    visible: true,
    bloom: false,
    ssr: false,
    polygonFill: [1, 1, 1, 1],
    polygonOpacity: 1,
    // 模型在本地坐标系各轴上的偏移（米）、缩放与旋转
    translationX: 0,
    translationY: 0,
    translationZ: 0,
    scaleX: 1,
    scaleY: 1,
    scaleZ: 1,
    rotationX: 0,
    rotationY: 0,
    rotationZ: 0,
    fixSizeOnZoom: 10
  }
}
```

filter 数据过滤条件的具体说明请点击[这里](/guide/style/feature-filter)。

## 支持的数据类型

<!--@include: ./includes/point-supports.md-->

<!--@include: ./includes/plugin-gltf-content.md-->

> 本文档已与 @maptalks/gl-layers 2026 源码核对（api-notes-vt-gl.md）
