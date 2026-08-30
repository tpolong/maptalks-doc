---
title: gltf-lit render plugin
---

# gltf-lit render plugin

A render plugin that renders point data with GLTF models using PBR material.

## Configuration
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

For more on the filter data filtering conditions, see [feature-filter](/en/guide/style/feature-filter).

## Supported data types

<!--@include: ./includes/point-supports.md-->

<!--@include: ./includes/plugin-gltf-content.md-->

> This document has been cross-checked against the @maptalks/gl-layers 2026 source code (api-notes-vt-gl.md)
