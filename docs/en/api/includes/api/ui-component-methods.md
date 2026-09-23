<details><summary>onAdd()</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

</div>
</details>

<details><summary>onRemove()</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

</div>
</details>

<details><summary>onDomRemove()</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

</div>
</details>

<details><summary>getEvents()</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

</div>
</details>

<details><summary>getOwnerEvents()</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

</div>
</details>

<details><summary>buildOn()</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

Returns:

* `HTMLElement`

</div>
</details>

<details><summary>addTo(owner)</summary>
<div>
<br/>

Adds the UI Component to a geometry or a map

Parameters:

* owner `Geometry | Map` geometry or map to addto.

Returns:

* `ui.UIComponent` this

Fires:

* `ui.UIComponent#add`

</div>
</details>

<details><summary>getMap()</summary>
<div>
<br/>

Get the map it added to

Returns:

* `Map` map instance

</div>
</details>

<details><summary>show(coordinate?)</summary>
<div>
<br/>

Show the UI Component, if it is a global single one, it will close previous one.

Parameters:

* coordinate (optional) `Coordinate` =null] - coordinate to show, default is owner's center

Returns:

* `ui.UIComponent` this

Fires:

* `ui.UIComponent#showstart`
* `ui.UIComponent#showend`

</div>
</details>

<details><summary>hide()</summary>
<div>
<br/>

Hide the UI Component.

Returns:

* `ui.UIComponent` this

Fires:

* `ui.UIComponent#hide`

</div>
</details>

<details><summary>isVisible()</summary>
<div>
<br/>

Decide whether the ui component is open

Returns:

* `Boolean` true|false

</div>
</details>

<details><summary>remove()</summary>
<div>
<br/>

Remove the UI Component

Returns:

* `ui.UIComponent` this

Fires:

* `ui.UIComponent#hide`
* `ui.UIComponent#remove`

</div>
</details>

<details><summary>getSize()</summary>
<div>
<br/>

Get pixel size of the UI Component.

Returns:

* `Size` size

</div>
</details>

<details><summary>getOwner()</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

</div>
</details>

<details><summary>getDOM()</summary>
<div>
<br/>

get Dom Node

Returns:

* `HTMLDivElement` dom|null

</div>
</details>

<details><summary>setZIndex(zIndex)</summary>
<div>
<br/>

set Dom Node zIndex

Parameters:

* zIndex `number`

</div>
</details>

<details><summary>getPosition()</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

</div>
</details>

<details><summary>onGeometryPositionChange(param)</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

Parameters:

* param `Any`

</div>
</details>

<details><summary>onMoving()</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

</div>
</details>

<details><summary>onEvent()</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

</div>
</details>

<details><summary>onZoomEnd()</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

</div>
</details>

<details><summary>onResize()</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

</div>
</details>

<details><summary>onDomSizeChange()</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

</div>
</details>

<details><summary>isSupportZoomFilter()</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

</div>
</details>

<details><summary>onConfig(config)</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

Parameters:

* config `Record<string, any>`

</div>
</details>
