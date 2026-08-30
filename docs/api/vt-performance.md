---
title: 矢量数据图层的性能优化
---

# 矢量数据图层的性能优化

这里的矢量数据图层包括矢量瓦片图层[VectorTileLayer](/api/vector-tile-layer)和矢量图层（[PointLayer](/api/point-layer)，[LineStringLayer](/api/line-string-layer)和[PolygonLayer](/api/polygon-layer)）。

## 样式更新的性能

基于Web 3D技术实现的矢量图层是将图形数据构造为一个通常称为Mesh的三维数据结构，然后交给Web 3D接口绘制的。

样式更新对性能的影响主要在于Mesh的更新是局部更新还是整体更新。

* 局部更新指只更新Mesh中的更新了的数据，不需要重新构造
* 整体更新指Mesh需要整体的重新构造

因此如果应用场景需要优化性能，需要尽量避免Mesh的整体更新，以下列出会造成Mesh整体更新的symbol属性，性能敏感的场景下，请避免频繁更新它们，其他没有列出的Symbol属性均不会造成Mesh整体更新。

> ❗ 表示会造成Mesh整体更新，🆗则表示不会

| 属性名       | 矢量瓦片图层   |  矢量图层  |
| -----       | ----------    | ------   |
|markerFile               | ❗            |   ❗    |
|markerPlacement          | ❗            |   ❗    |
|markerSpacing            | ❗            |   ❗    |
|markerHorizontalAlignment| ❗            |   🆗   |
|markerVerticalAlignment  | ❗            |   🆗   |
|textName                 | ❗            |   ❗    |
|textFaceName             | ❗            |   ❗    |
|textPlacement            | ❗            |   ❗    |
|textSpacing              | ❗            |   ❗    |
|textHorizontalAlignment  | ❗            |   🆗   |
|textVerticalAlignment    | ❗            |   🆗   |
|textWrapWidth            | ❗            |   🆗   |
|lineJoin                 | ❗            |   ❗    |
|lineCap                  | ❗            |   ❗    |
|linePatternFile          | ❗            |   ❗    |
|lineDasharray            | 🆗           |   ❗    |
|polygonPatternFile       | ❗            |   ❗    |
|topPolygonFill           | 🆗           |   ❗    |
|bottomPolygonFill        | 🆗           |   ❗    |

> 注：旧文档中的 `textStyle`、`textWeight` 两个属性已在 @maptalks/gl-layers 新版本中移除（2026 源码中已注释），不再触发Mesh重建；`topPolygonFill`、`bottomPolygonFill` 为 3D 拉伸面图层（ExtrudePolygonLayer）新增的属性（2026 核对）。

> 本文档已与 @maptalks/gl-layers 2026 源码核对（api-notes-vt-gl.md）
