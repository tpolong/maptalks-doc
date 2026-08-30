<details><summary>updateSymbol(idx, symbol)</summary>
<div>
<br/>

Updates the symbol of the style with index idx.

```js
layer.updateSymbol(0, symbol);
```

Parameters:

* idx **Number** the index of the style
* symbol **Object** the symbol properties to update

Returns:

* this

</div>
</details>

<details><summary>outlineAll()</summary>
<div>
<br/>

Highlights all data on the layer.

Because highlighting is implemented with post-processing, the layer must be added to a GroupGLLayer with the outline post-processing enabled.

```js
layer.addTo(groupGLLayer);
layer.outlineAll();
```

Returns:

* this

</div>
</details>


<details><summary>outline(geoIds)</summary>
<div>
<br/>

Highlights all geometries whose ids are in geoIds.

```js
layer.addTo(groupGLLayer);
layer.outline([0, 1, 2]);
```

Parameters:

* geoIds **Number[] | String[]** an array of geometry ids

Returns:

* this

</div>
</details>


<details><summary>cancelOutline()</summary>
<div>
<br/>

Cancels the highlight.

Returns:

* this

</div>
</details>

<details><summary>toJSON()</summary>
<div>
<br/>

Gets the JSON serialization object of the layer.

This object can be deserialized into a layer object with the Layer.fromJSON method.

```js
const json = layer.toJSON();
const copiedLayer = maptalks.Layer.fromJSON(json);
```


Returns:

* Object

</div>
</details>
