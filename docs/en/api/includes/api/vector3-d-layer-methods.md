<details><summary>setURLModifier(modifier)</summary>
<div>
<br/>

Set the modifier function rewriting resource loading urls and return the layer

Parameters:

* modifier `Function`

</div>
</details>

<details><summary>getURLModifier()</summary>
<div>
<br/>

Get the modifier function that rewrites resource loading urls

</div>
</details>

<details><summary>getEvents()</summary>
<div>
<br/>

Get the event map the layer listens to, including spatial reference change

</div>
</details>

<details><summary>onConfig(conf)</summary>
<div>
<br/>

Callback on options update, syncs the bloom switches to the renderer

Parameters:

* conf `unknown`

</div>
</details>

<details><summary>updateSymbol(idx, symbol)</summary>
<div>
<br/>

Merge symbol properties into the style at index idx and refresh the layer style

Parameters:

* idx `number`
* symbol `Record<string, any>`

</div>
</details>

<details><summary>getPolygonOffsetCount()</summary>
<div>
<br/>

Get the polygonOffset count the layer needs, 0 for empty or altitude layers

</div>
</details>

<details><summary>getPolygonOffset()</summary>
<div>
<br/>

Get the layer polygonOffset used for global management by GroupGLLayer

</div>
</details>

<details><summary>setPolygonOffset(offset, total)</summary>
<div>
<br/>

Set the layer polygonOffset and the global total for GroupGLLayer management

Parameters:

* offset `number`
* total `number`

</div>
</details>

<details><summary>getTotalPolygonOffset()</summary>
<div>
<br/>

Get the total polygonOffset assigned by the GroupGLLayer

</div>
</details>

<details><summary>identify(coordinate, options?, options.tolerance?, options.count?)</summary>
<div>
<br/>

Identify the geometries on the given coordinate

Parameters:

* coordinate `maptalks.Coordinate` coordinate to identify
* options (optional) `Object` =null]  - options
* options.tolerance (optional) `Object` =0] - identify tolerance in pixel
* options.count (optional) `Object` =null]  - result count

Returns:

* `Geometry[]` geometries identified

</div>
</details>

<details><summary>identifyAtPoint(point, options?, options.tolerance?, options.count?)</summary>
<div>
<br/>

Identify the geometries on the given container point

Parameters:

* point `Any` point to identify
* options (optional) `Any` =null]  - options
* options.tolerance (optional) `Any` =0] - identify tolerance in pixel
* options.count (optional) `Any` =null]  - result count

Returns:

* `Any` geometries identified

</div>
</details>

<details><summary>getComputedStyle()</summary>
<div>
<br/>

Get the layer computed style and return it in the style field

</div>
</details>

<details><summary>outlineAll()</summary>
<div>
<br/>

Add outline highlight to all geometries in the layer

</div>
</details>

<details><summary>outline(geoIds)</summary>
<div>
<br/>

Add outline highlight to the geometries with the given id array

Parameters:

* geoIds `string[]`

</div>
</details>

<details><summary>cancelOutline()</summary>
<div>
<br/>

Cancel the outline highlight of the geometries in the layer

</div>
</details>

<details><summary>toJSON()</summary>
<div>
<br/>

Export the Layer's JSON. <br/>

Returns:

* `Object` layer's JSON

</div>
</details>

<details><summary>getTileSize()</summary>
<div>
<br/>

Return the default tile size of 1x1 used internally by painters

</div>
</details>
