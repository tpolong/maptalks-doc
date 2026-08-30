---
title: CrossCutAnalysis
---

# CrossCutAnalysis

A spatial analysis object for crosscut (profile) analysis, used to perform crosscut analysis on a 3D scene.

It cuts through the model along a `cutLine` and displays the cross-section face, and can sample points at equal intervals along the cut line to query the altitude of each point (`getAltitudes`).

## Constructor

```js
import { CrossCutAnalysis } from '@maptalks/gl-layers';

const crosscutAnalysis = new CrossCutAnalysis({
  cutLine: [
    [108.95943151743995, 34.220773839751956],
    [108.95942615302192, 34.21846280188899]
  ],
  cutLineColor: [0.0, 1.0, 0.0, 1.0]
});

crosscutAnalysis.addTo(groupGLLayer);
```

<details><summary>Details</summary>
<div>
Parameters:

* options\* **Object** configuration options, the available options are as follows:

| Option   |   Type    |   Description                     | Default |
|  ------ | :----:   | ----                      |   :-----------:  |
|cutLine* | Array\<Array\> | The coordinate array of the cut line, forming a polyline | null |
|cutLineColor | Number[] | The fill color of the cross-section face (the source's DEFAULT_WATER_COLOR, verified against the 2026 source) | [0.8451, 0.2588, 0.4863] |
|textureUrl| String   | The url of the cross-section texture (mentioned in the README) | null |

</div>
</details>

## Member Methods

<details><summary>getAltitudes(count)</summary>
<div>
<br/>

Samples `count` points at equal intervals along the cut line and returns the coordinate and the distance along the line of each sampled point, which can be used to draw a profile line or measure the elevation of the cross-section (added after cross-checking the 2026 source code).

Parameters:

* count **Number** the number of sample points

Returns:

* Object[] each element is `{ coordinate: Coordinate(x, y, z), distance }`, where `coordinate.z` is the altitude of the sampled point

</div>
</details>

## Methods Inherited from Analysis

<!--@include: ./includes/analysis-methods.md-->

> This document has been cross-checked against the @maptalks/gl-layers 2026 source (api-notes-others.md / api-notes-vt-gl.md)
