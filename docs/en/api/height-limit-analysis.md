---
title: HeightLimitAnalysis
---

# HeightLimitAnalysis

A spatial analysis object for height-limit (excess-height detection) analysis, used to perform height-limit analysis on a 3D scene.

The parts exceeding `limitHeight` are highlighted with `limitColor`, reusing the water-surface rendering mechanism of FloodAnalysis (analysis type `analysisType = 2`).

## Constructor

```js
import { HeightLimitAnalysis } from '@maptalks/gl-layers';

const heightLimitAnalysis = new HeightLimitAnalysis({
  limitHeight: 25,
  limitColor: [1, 0.2, 0.2]
});

heightLimitAnalysis.addTo(groupGLLayer);
```

<details><summary>Details</summary>
<div>
Parameters:

* options\* **Object** configuration options, the available options are as follows:

| Option   |   Type    |   Description                     | Default |
|  ------ | :----:   | ----                      |   :-----------:  |
|limitHeight* | Number | The height limit in meters | null |
|limitColor | Number[] | A 3-component normalized array; the color of the parts exceeding the limit (the source's DEFAULT_LIMIT_COLOR) | [0.8, 0.1, 0.1] |
|boundary | Number[] | Boundary coordinate ring of the analyzed area (optional; when not set, the whole scene is analyzed; inherited from FloodAnalysis) | null |

</div>
</details>

## Methods Inherited from FloodAnalysis

HeightLimitAnalysis inherits from [FloodAnalysis](./flood-analysis) (including options such as `waterHeight`, `waterColor`, `waterOpacity`, and methods such as `update` and `renderAnalysis`, verified against the 2026 source).

## Methods Inherited from Analysis

<!--@include: ./includes/analysis-methods.md-->

> This document has been cross-checked against the @maptalks/gl-layers 2026 source (api-notes-others.md / api-notes-vt-gl.md)
