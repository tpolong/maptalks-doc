<details><summary>getContainerExtent(out?)</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

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

No prose description in source; parameters and return type come from the type signature.

Parameters:

* config (optional) `string | Record<string, any>`

</div>
</details>

<details><summary>getSymbol()</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

Returns:

* `any`

</div>
</details>

<details><summary>setSymbol(s?)</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

Parameters:

* s (optional) `any`

Returns:

* `this`

</div>
</details>

<details><summary>startEdit(opts?)</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

Parameters:

* opts (optional) `GeometryEditOptionsType`

Returns:

* `this`

</div>
</details>

<details><summary>endEdit()</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

Returns:

* `this`

</div>
</details>

<details><summary>isEditing()</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

Returns:

* `boolean`

</div>
</details>

<details><summary>undoEdit()</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

Returns:

* `this`

</div>
</details>

<details><summary>redoEdit()</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

Returns:

* `this`

</div>
</details>

<details><summary>undoEditcheck()</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

Returns:

* `boolean`

</div>
</details>

<details><summary>redoEditcheck()</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

Returns:

* `boolean`

</div>
</details>
