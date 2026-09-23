<details><summary>getContainerExtent(out?)</summary>
<div>
<br/>

Returns the union of the container extents of all geometries in the collection.

Parameters:

* out (optional) `PointExtent`

Returns:

* `PointExtent`

</div>
</details>

<details><summary>setGeometries(_geometries)</summary>
<div>
<br/>

Set new geometries to the geometry collection

Parameters:

* _geometries `Geometry[]`

Returns:

* `GeometryCollection` this

Fires:

* `GeometryCollection#shapechange`

</div>
</details>

<details><summary>getGeometries()</summary>
<div>
<br/>

Get geometries of the geometry collection

Returns:

* `Geometry[]` geometries

</div>
</details>

<details><summary>forEach(fn)</summary>
<div>
<br/>

Executes the provided callback once for each geometry present in the collection in order.

Parameters:

* fn `(geo: Geometry, index: number) => void, context?: any` a callback function

Returns:

* `GeometryCollection` this

</div>
</details>

<details><summary>filter(fn?)</summary>
<div>
<br/>

Creates a GeometryCollection with all elements that pass the test implemented by the provided function.

Parameters:

* fn (optional) `(geo: Geometry) => boolean, context?: any` Function to test each geometry

Returns:

* `GeometryCollection` A GeometryCollection with all elements that pass the test

</div>
</details>

<details><summary>translate(offset)</summary>
<div>
<br/>

Translate or move the geometry collection by the given offset.

Parameters:

* offset `Coordinate` translate offset

Returns:

* `GeometryCollection` this

</div>
</details>

<details><summary>isEmpty()</summary>
<div>
<br/>

Whether the geometry collection is empty

Returns:

* `Boolean`

</div>
</details>

<details><summary>remove()</summary>
<div>
<br/>

remove itself from the layer if any.

Returns:

* `Geometry` this

Fires:

* `GeometryCollection#removestart`
* `GeometryCollection#remove`
* `GeometryCollection#removeend`

</div>
</details>

<details><summary>show()</summary>
<div>
<br/>

Show the geometry collection.

Returns:

* `GeometryCollection` this

Fires:

* `GeometryCollection#show`

</div>
</details>

<details><summary>hide()</summary>
<div>
<br/>

Hide the geometry collection.

Returns:

* `GeometryCollection` this

Fires:

* `GeometryCollection#hide`

</div>
</details>

<details><summary>onConfig(config?)</summary>
<div>
<br/>

Applies the config change to every geometry in the collection.

Parameters:

* config (optional) `string | Record<string, any>`

</div>
</details>

<details><summary>getSymbol()</summary>
<div>
<br/>

Returns the symbol, or a children array of child geometry symbols when none is set.

Returns:

* `any`

</div>
</details>

<details><summary>setSymbol(s?)</summary>
<div>
<br/>

Set symbol, a children object is assigned to each child in order, else to all

Parameters:

* s (optional) `any`

Returns:

* `this`

</div>
</details>

<details><summary>startEdit(opts?)</summary>
<div>
<br/>

Start editing all geometries in the collection, symbol sets the editing style

Parameters:

* opts (optional) `GeometryEditOptionsType`

Returns:

* `this`

</div>
</details>

<details><summary>endEdit()</summary>
<div>
<br/>

Ends editing, restoring the symbol and visibility and firing editend.

Returns:

* `this`

</div>
</details>

<details><summary>isEditing()</summary>
<div>
<br/>

Whether the collection is in editing state

Returns:

* `boolean`

</div>
</details>

<details><summary>undoEdit()</summary>
<div>
<br/>

Undo one child geometry edit from the last position and fire undoedit

Returns:

* `this`

</div>
</details>

<details><summary>redoEdit()</summary>
<div>
<br/>

Redo one child geometry edit from the last position and fire redoedit

Returns:

* `this`

</div>
</details>

<details><summary>undoEditcheck()</summary>
<div>
<br/>

Whether the edits of all child geometries have been fully undone.

Returns:

* `boolean`

</div>
</details>

<details><summary>redoEditcheck()</summary>
<div>
<br/>

Whether the edits of all child geometries have been fully redone.

Returns:

* `boolean`

</div>
</details>
