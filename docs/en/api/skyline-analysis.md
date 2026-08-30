---
title: SkylineAnalysis
---

# SkylineAnalysis

A spatial analysis object for skyline analysis, used to perform skyline analysis on a 3D scene.

## Constructor

```js
import { SkylineAnalysis } from '@maptalks/gl-layers';

const skylineAnalysis = new SkylineAnalysis({
  lineColor: [1, 0, 0],
  lineWidth: 1
});

skylineAnalysis.addTo(groupGLLayer);
```

<details><summary>Details</summary>
<div>
Parameters:

* options\* **Object** configuration options, the available options are as follows:

| Option               |   Type    |   Description                     | Default |
|  ------              | :----:   | ----                      |   :-----------:  |
|lineColor             | Number[] | A 3-component normalized array; the skyline outline color   | [1, 0, 0] |
|lineWidth             | Number   | Outline line width       | 1 |
</div>
</details>

## Methods

<details><summary>exportSkylineMap(options)</summary>
<div>
<br/>

Exports the skyline image (with a transparent background) and returns a dataURL (added after cross-checking the 2026 source code).

Parameters:

* options **Object** export options, possible properties:
| Property         |   Type           |   Description                 | Default |
|  ------         | :----:  | ----  |   :-----------:  |
| save            | Boolean | Whether to pop up the download dialog | false |
| filename        | String  | Download file name | 'export' |

Returns:

* String dataURL (returns null when the analysis is not enabled)

</div>
</details>

## Methods Inherited from Analysis

<!--@include: ./includes/analysis-methods.md-->

> This document has been cross-checked against the @maptalks/gl-layers 2026 source (api-notes-others.md / api-notes-vt-gl.md)
