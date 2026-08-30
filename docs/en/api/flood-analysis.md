---
title: FloodAnalysis
---

# FloodAnalysis

A spatial analysis object for flood analysis, used to perform flood analysis on a 3D scene.

## Constructor

```js
import { FloodAnalysis } from '@maptalks/gl-layers';

const floodAnalysis = new FloodAnalysis({
  waterHeight: 100,
  waterColor: [0.1451, 0.2588, 0.4863]
});

floodAnalysis.addTo(groupGLLayer);
```

<details><summary>Details</summary>
<div>
Parameters:

* options\* **Object** configuration options, the available options are as follows:

| Option               |   Type    |   Description                     | Default |
|  ------             | :----:   | ----                      |   :-----------:  |
|boundary             | Number[] | Boundary coordinate ring of the flooded area (optional; when not set, the whole scene is analyzed, added after cross-checking the 2026 source code) | null |
|waterHeight          | Number   | Water surface height                   | 0 |
|waterColor           | Number[] | A 3-component normalized array; the water surface color    | [0.1451, 0.2588, 0.4863] |
|waterOpacity         | Number   | Water surface opacity (added after cross-checking the 2026 source code; the default value in the source's renderAnalysis) | 0.6 |

</div>
</details>

## Methods Inherited from Analysis

<!--@include: ./includes/analysis-methods.md-->

> This document has been cross-checked against the @maptalks/gl-layers 2026 source (api-notes-others.md / api-notes-vt-gl.md)
