---
title: InSightAnalysis
---

# InSightAnalysis

A spatial analysis object for insight (line-of-sight) analysis, used to perform insight analysis on a 3D scene.

It draws a line between the viewpoint (`from`) and the target point (`to`) and checks whether the line is blocked by the model: the visible segment is colored with `visibleColor`, the invisible segment with `invisibleColor`, and the objects intersected by the insight lines can be returned (based on RayCaster ray casting, added after cross-checking the 2026 source code).

## Constructor

```js
import { InSightAnalysis } from '@maptalks/gl-layers';

const insightAnalysis = new InSightAnalysis({
  lines: [
    {
      from: [center.x + 0.003, center.y + 0.002, 50],
      to: [center.x - 0.001, center.y - 0.0005, 100]
    }
  ],
  visibleColor: [0, 1, 0, 1],
  invisibleColor: [1, 0, 0, 1]
});

insightAnalysis.addTo(groupGLLayer);
```

<details><summary>Details</summary>
<div>
Parameters:

* options\* **Object** configuration options, the available options are as follows:

| Option   |   Type    |   Description                     | Default |
|  ------ | :----:   | ----                      |   :-----------:  |
|lines    | Object[] | The array of insight lines, each item is `{ from, to }` (coordinate arrays or Coordinate, added after cross-checking the 2026 source code) | [] |
|visibleColor | Number[] | A 4-component normalized array; the color of the visible segment (green) | [0, 1, 0, 1] |
|invisibleColor | Number[] | A 4-component normalized array; the color of the invisible segment (red) | [1, 0, 0, 1] |
|excludeLayers | String[] | The list of layer ids to ignore (not involved in occlusion detection) | null |

</div>
</details>

## Member Methods

<details><summary>addLine(inSightLine)</summary>
<div>
<br/>

Adds an insight line.

Parameters:

* inSightLine **Object** the insight line, with the structure `{ from, to }`

Returns:

* void

</div>
</details>

<details><summary>removeLine(inSightLine)</summary>
<div>
<br/>

Removes an insight line.

Parameters:

* inSightLine **Object** the insight line to remove

Returns:

* void

</div>
</details>

<details><summary>getLines()</summary>
<div>
<br/>

Gets all insight lines.

Returns:

* Object[]

</div>
</details>

<details><summary>setLines(lines)</summary>
<div>
<br/>

Sets the array of insight lines.

Parameters:

* lines **Object[]** the array of insight lines, each item is `{ from, to }`

Returns:

* void

</div>
</details>

<details><summary>clearLines()</summary>
<div>
<br/>

Clears all insight lines.

Returns:

* void

</div>
</details>

<details><summary>getIntersetction()</summary>
<div>
<br/>

Gets all objects intersected by the insight lines, with the structure `[{ inSightLine, intersects: [{ data: maptalks object (such as a gltfmarker or polygon), coordinates: [{ coordinate, indices }] }] }]`.

> Note: the method name follows the spelling `getIntersetction` in the source code (verified against the 2026 source).

Returns:

* Object[]

</div>
</details>

## Methods Inherited from Analysis

<!--@include: ./includes/analysis-methods.md-->

> This document has been cross-checked against the @maptalks/gl-layers 2026 source (api-notes-others.md / api-notes-vt-gl.md)
