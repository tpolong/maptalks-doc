---
title: Performance Optimization for Vector Data Layers
---

# Performance Optimization for Vector Data Layers

The vector data layers covered here include the vector tile layer [VectorTileLayer](/en/api/vector-tile-layer) and the vector layers ([PointLayer](/en/api/point-layer), [LineStringLayer](/en/api/line-string-layer) and [PolygonLayer](/en/api/polygon-layer)).

## Performance of Style Updates

Vector layers built on Web 3D technology construct the graphic data into a 3D data structure commonly called a Mesh, which is then submitted to the Web 3D API for rendering.

The impact of style updates on performance mainly depends on whether the Mesh update is partial or full.

* A partial update only updates the changed data within the Mesh and does not require rebuilding it.
* A full update requires the Mesh to be rebuilt entirely.

Therefore, to optimize performance, full Mesh updates should be avoided as much as possible. The following lists the symbol properties that cause a full Mesh update; in performance-sensitive scenarios, avoid updating them frequently. Symbol properties not listed do not cause full Mesh updates.

> ❗ means a full Mesh update is caused, 🆗 means it is not

| Property | Vector Tile Layers | Vector Layers |
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

> Note: The `textStyle` and `textWeight` properties in the old documentation have been removed in the new version of @maptalks/gl-layers (commented out in the 2026 source code) and no longer trigger Mesh rebuilds; `topPolygonFill` and `bottomPolygonFill` are properties newly added for the 3D extrusion layer (ExtrudePolygonLayer) (verified in 2026).

> This document has been cross-checked against the @maptalks/gl-layers 2026 source code (api-notes-vt-gl.md)
