---
title: MultiGLTFMarker
---

# MultiGLTFMarker

MultiGLTFMarker is a subclass of [GLTFMarker](./gltf-marker) used to draw a single GLTF model at multiple coordinates, with different translation/scale/rotation settings per instance, and supports interaction.

MultiGLTFMarker can use symbol to set the state of the model, such as scale, opacity, and rotation angle, and provides methods to update the model, update the model state, and start or pause animations.

MultiGLTFMarker uses WebGL instancing for rendering, improving WebGL rendering performance when drawing models in batch.

> Note: The 2026 source code confirms the inheritance as `class MultiGLTFMarker extends GLTFMarker` (verified against 2026 source code).

## Constructor

```js
import { MultiGLTFMarker } from '@maptalks/gl-layers';

const multiGLTFMarker = new MultiGLTFMarker([
  {
    coordinates: [0, 0],
    translation: [0, 0, 0],
    rotation: [0, 0, 0],
    scale: [1, 1, 1],
    color: [1, 0, 0, 1]
  },
  {
    coordinates: [0, 0],
    translation: [0, 2, 0],
    rotation: [0, 0, 0],
    scale: [1, 1, 1],
    color: [1, 1, 0, 1]
  },
], {
  symbol: {
    url: 'path/to/gltf1.gltf'
  }
});
```
<details><summary>Details</summary>
<div>
Parameters:

* data\* **Object[]** Marker data, where each data object contains the following properties:

<!--@include: ./includes/multi-gltf-marker-data.md-->

* options\* **Object** Configuration options, available options are as follows:

| Option               |   Type   |  Description             | Default |
|  ------             | :----:  | ----                      |   :-----------:  |
<!--@include: ./includes/gltf-marker-options.md-->
<!--@include: ./includes/geometry-options.md-->

</div>
</details>

> [!NOTE] Additional data fields (verified against 2026 source code)
> In the 2026 source code, each data item also supports: `visible` (visibility), `outline` (outline), `bloom` (bloom), `highlightColor` (highlight color), `modelHeight` (adaptive scaling by model height), `markerPixelHeight` (fixed pixel height)

## Symbol Description

Like GLTFMarker, the `options.symbol` of MultiGLTFMarker contains the following settings and properties.

<!--@include: ./includes/gltf-marker-symbols.md-->

> Note: The symbol fields are the same as [GLTFMarker](./gltf-marker); see that page for the field verification against the 2026 source code (verified against 2026 source code).

## Methods

<details><summary>addData(data)</summary>
<div>
<br/>

Adds a data item, with the following properties:

<!--@include: ./includes/multi-gltf-marker-data.md-->

Parameters:

* data **Object** The data item

Returns:

* this

</div>
</details>

<details><summary>removeData(idx)</summary>
<div>
<br/>

Removes a data item.

Parameters:

* idx **Number** The index of the data item

Returns:

* this

</div>
</details>

<details><summary>getData(idx)</summary>
<div>
<br/>

Gets a data item.

Parameters:

* idx **Number** The index of the data item

Returns:

* Object

</div>
</details>

<details><summary>updateData(idx, name, value)</summary>
<div>
<br/>

Updates a data item.

```js
const multiGLTFMarker = new MultiGLTFMarker([
  {
    coordinates: [0, 0],
    translation: [0, 0, 0],
    rotation: [0, 0, 0],
    scale: [1, 1, 1],
    color: [1, 0, 0, 1]
  },
  {
    coordinates: [0, 0],
    translation: [0, 2, 0],
    rotation: [0, 0, 0],
    scale: [1, 1, 1],
    color: [1, 1, 0, 1]
  },
], {
  symbol: {
    url: 'path/to/gltf1.gltf'
  }
});

multiGLTFMarker.updateData(0, 'color', [0, 1, 0, 1]);
```

Parameters:

* idx **Number** The index of the data item
* name **String** The property to update
* value **Object** The new value of the property

Returns:

* this

</div>
</details>

<details><summary>updateAllData(name, value)</summary>
<div>
<br/>

Updates the property value of all data items.

`value` is an array, and `value[i]` is the new value of the i-th data item (verified against 2026 source code: `updateAllData` internally reads `value[i]` by the data item index).

```js
const multiGLTFMarker = new MultiGLTFMarker([
  {
    coordinates: [0, 0],
    translation: [0, 0, 0],
    rotation: [0, 0, 0],
    scale: [1, 1, 1],
    color: [1, 0, 0, 1]
  },
  {
    coordinates: [0, 0],
    translation: [0, 2, 0],
    rotation: [0, 0, 0],
    scale: [1, 1, 1],
    color: [1, 1, 0, 1]
  },
], {
  symbol: {
    url: 'path/to/gltf1.gltf'
  }
});

multiGLTFMarker.updateAllData('color', [[0, 1, 0, 1], [0, 1, 0, 1]]);
```

Parameters:

* name **String** The property to update
* value **Array** An array of values corresponding to each data item; `value[i]` is the new value of the i-th data item

Returns:

* this

</div>
</details>

<details><summary>getCount()</summary>
<div>
<br/>

Gets the number of data items.

Returns:

* Number

</div>
</details>

<details><summary>getIndexByPickingId(pickingId)</summary>
<div>
<br/>

Gets the index of a data item by pickingId.

pickingId is an internal id that identifies a data item among the data picked by the identify or identifyAtPoint methods.

Returns:

* Number

</div>
</details>

> [!NOTE] Additional methods (verified against 2026 source code)
> - `getAllData()`: read all instance data
> - `removeAllData()`: clear all instance data
> - `openInfoWindow(index?)`: open the info window (centered by default; an instance index can be specified)
> - `outline(idx?)` / `cancelOutline(idx?)` / `isOutline()`: outline / cancel outline / query the outline state of a specified instance
> - `highlight(index, {color, opacity, bloom})` / `highlightNodes(index, [{nodeIndex, ...}])` / `cancelHighlight(index, nodes?)`: highlight a specified instance / highlight nodes of a specified instance / cancel highlight
> - `zoomAt(index, options={animation: true, zoomOffset: 0}, step?)`: zoom to the coordinates of a specified instance
> - `setCoordinates(coords)` / `getCoordinates()`: set/get coordinates (setCoordinates supports an overall translation or a coordinates array)
> - `getCenter()`: the average center of all instance coordinates
> - `toJSON()` / `static fromJSON(json)`: JSON serialization / deserialization

## Methods Inherited from GLTFMarker

<!--@include: ./includes/gltf-marker-methods.md-->

<!--@include: ./includes/geometry-methods.md-->

## Static Methods

<!--@include: ./includes/geometry-static-methods.md-->

## Events

<!--@include: ./includes/js-events-example.md-->

### Events Inherited from GLTFMarker

<!--@include: ./includes/gltf-marker-events.md-->

### Events Inherited from Geometry

<!--@include: ./includes/geometry-events.md-->

> This document has been verified against the 2026 source code of @maptalks/gl-layers (api-notes-others.md)
