<details><summary>clear()</summary>
<div>
<br/>

Clears this layer and its inner marker, line and polygon child layers.

</div>
</details>

<details><summary>bringToFront()</summary>
<div>
<br/>

Brings the polygon, line and marker child layers to the front in that order.

</div>
</details>

<details><summary>addGeometry(geometries)</summary>
<div>
<br/>

Adds geometries and dispatches them to the marker, line or polygon sub-layer.

Parameters:

* geometries `Geometry | Array<Geometry>`

</div>
</details>

<details><summary>getGeometryById(id)</summary>
<div>
<br/>

Returns the geometry of the given id from the marker, line or polygon child layer, null if not found.

Parameters:

* id `string | number`

Returns:

* `Geometry`

</div>
</details>

<details><summary>removeGeometry(geometries)</summary>
<div>
<br/>

Removes the given geometries from the layer list and from their matching child layer.

Parameters:

* geometries `Geometry | Geometry[]`

</div>
</details>

<details><summary>onRemove()</summary>
<div>
<br/>

Clear geometries and destroy the three sub layers and their bindings on remove

</div>
</details>

<details><summary>onAdd()</summary>
<div>
<br/>

Add polygon, line and marker sub layers in order and bind removegeo on add

</div>
</details>

<details><summary>getRenderer()</summary>
<div>
<br/>

Get the renderer of the marker sub layer

</div>
</details>
