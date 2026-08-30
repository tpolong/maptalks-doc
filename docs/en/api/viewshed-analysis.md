---
title: ViewshedAnalysis
---

# ViewshedAnalysis

A spatial analysis object for viewshed analysis, used to perform viewshed analysis on a 3D scene.

## Constructor

```js
import { ViewshedAnalysis } from '@maptalks/gl-layers';

const viewshedAnalysis = new ViewshedAnalysis({
  eyePos: [121, 39, 100],
  lookPoint: [121, 39, 0],
  verticalAngle: 90,
  horizontalAngle: 90,
  visibleColor: [0.0, 1.0, 0.0, 1.0],
  invisibleColor: [1.0, 0.0, 0.0, 1.0]
});

viewshedAnalysis.addTo(groupGLLayer);
```

<details><summary>Details</summary>
<div>
Parameters:

* options\* **Object** configuration options, the available options are as follows:

| Option               |   Type    |   Description                     | Default |
|  ------              | :----:   | ----                      |   :-----------:  |
|eyePos*               | Number[] | Observer position, [x, y, h]; x and y are longitude and latitude, h is altitude  | null |
|lookPoint*            | Number[] | Look-at target position, [x, y, h]; x and y are longitude and latitude, h is altitude  | null |
|verticalAngle         | Number  | Vertical angle of view, in degrees          | 90 |
|horizontalAngle       | Number  | Horizontal angle of view, in degrees          | 90 |
|visibleColor          | Number[] | A 4-component normalized array; the color of the visible area   | [0, 1, 0, 0.3] |
|invisibleColor        | Number[] | A 4-component normalized array; the color of the invisible area | [1, 0, 0, 0.3] |

> Note: The default opacity of visibleColor / invisibleColor has been adjusted to 0.3 in the new version (default values [0.0, 1.0, 0.0, 0.3] / [1.0, 0.0, 0.0, 0.3] in the 2026 source's renderAnalysis, verified 2026).

</div>
</details>

## Methods

<details><summary>getVertexCoordinates()</summary>
<div>
<br/>

Gets the coordinates of the 4 vertices of the viewshed pyramid (added after cross-checking the 2026 source code).

Returns:

* Array

</div>
</details>

## Methods Inherited from Analysis

<!--@include: ./includes/analysis-methods.md-->

> This document has been cross-checked against the @maptalks/gl-layers 2026 source (api-notes-others.md / api-notes-vt-gl.md)
