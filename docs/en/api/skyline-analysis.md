---
title: SkylineAnalysis
---

# SkylineAnalysis

A spatial analysis object for skyline analysis, used to perform skyline analysis on a 3D scene.

## Constructor

```js
import { SkylineAnalysis } from '@maptalks/analysis';

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

Exports the skyline image (with a transparent background) and returns a dataURL (added after cross-checking the source code).

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

<!-- api-gen:start -->
### Other Public Methods of SkylineAnalysis

<!--@include: ./includes/api/skyline-analysis-missing.md-->

### Methods Inherited from Analysis

The following methods are provided by the parent class [Analysis](/en/api/analysis) and are available on instances of this class.

<!--@include: ./includes/api/analysis-methods.md-->

### Mixed-in Methods

This class gains the following method groups from mixins; see the linked pages for details: [Eventable](/en/api/eventable)（`on`、`addEventListener`、`once`、`off`、`removeEventListener`、`listens`、`getListeningEvents`、`copyEventListeners`…）；[Handlerable](/en/api/handlerable).
<!-- api-gen:end -->

## Methods Inherited from Analysis

> This document has been cross-checked against the maptalks-gl 0.124.4 source
