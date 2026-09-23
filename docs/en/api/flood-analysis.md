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

> This document has been cross-checked against the @maptalks/gl-layers 2026 source (api-notes-others.md / api-notes-vt-gl.md)

## Methods

<!-- api-gen:start -->
### Other Public Methods of FloodAnalysis

<!--@include: ./includes/api/flood-analysis-missing.md-->

### Methods Inherited from Analysis

The following methods are provided by the parent class [Analysis](/en/api/analysis) and are available on instances of this class.

<!--@include: ./includes/api/analysis-methods.md-->

### Mixed-in Methods

This class gains the following method groups from mixins; see the linked pages for details: [Eventable](/en/api/eventable)（`on`、`addEventListener`、`once`、`off`、`removeEventListener`、`listens`、`getListeningEvents`、`copyEventListeners`…）；[Handlerable](/en/api/handlerable).
<!-- api-gen:end -->
