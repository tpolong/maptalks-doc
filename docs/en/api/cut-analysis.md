---
title: CutAnalysis
---

# CutAnalysis

A spatial analysis object for cut analysis, used to perform cut analysis on a 3D scene.

It defines a cut plane (a cuboid region) with `position`, `rotation` and `scale`, and hides the parts outside the cut region so the inside of the model can be inspected. It is usually combined with TransformControl for interactive adjustment of the cut plane (verified against the 2026 source).

## Constructor

```js
import { CutAnalysis } from '@maptalks/gl-layers';

const cutAnalysis = new CutAnalysis({
  position: [center.x, center.y, 10],
  rotation: [45, 0, 0],
  scale: [8, 8, 8]
});

cutAnalysis.addTo(groupGLLayer);
```

<details><summary>Details</summary>
<div>
Parameters:

* options\* **Object** configuration options, the available options are as follows:

| Option   |   Type    |   Description                     | Default |
|  ------ | :----:   | ----                      |   :-----------:  |
|position*| Number[] | Position of the cut region, [x, y, h]; x and y are longitude/latitude and h is the altitude | null |
|rotation | Number[] | Euler angles of the cut region | [0, 0, 0] |
|scale    | Number[] | Scale of the cut region | [1, 1, 1] |

</div>
</details>

## Member Methods

<details><summary>reset()</summary>
<div>
<br/>

Resets the cut plane to its initial position, rotation and scale (added after cross-checking the 2026 source code).

Returns:

* void

</div>
</details>

## Methods Inherited from Analysis

<!--@include: ./includes/analysis-methods.md-->

> This document has been cross-checked against the @maptalks/gl-layers 2026 source (api-notes-others.md / api-notes-vt-gl.md)
