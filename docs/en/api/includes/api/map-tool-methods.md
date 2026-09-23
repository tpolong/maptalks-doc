<details><summary>addTo(map)</summary>
<div>
<br/>

Adds the map tool to a map.

Parameters:

* map `Map`

Returns:

* `MapTool` this

Fires:

* `MapTool#add`

</div>
</details>

<details><summary>getMap()</summary>
<div>
<br/>

Gets the map it added to.

Returns:

* `Map` map

</div>
</details>

<details><summary>enable()</summary>
<div>
<br/>

Enable the map tool.

Returns:

* `MapTool` this

Fires:

* `MapTool#enable`

</div>
</details>

<details><summary>disable()</summary>
<div>
<br/>

Disable the map tool

Returns:

* `MapTool` this

Fires:

* `MapTool#disable`

</div>
</details>

<details><summary>isEnabled()</summary>
<div>
<br/>

Returns whether the tool is enabled

Returns:

* `Boolean` true | false

</div>
</details>

<details><summary>remove()</summary>
<div>
<br/>

Disables the tool, detaches it from its map and fires the remove event.

</div>
</details>

<details><summary>onEnable()</summary>
<div>
<br/>

Optional callback called when the map tool is enabled, used to set up its context.

</div>
</details>

<details><summary>getEvents()</summary>
<div>
<br/>

Required method returning the event map to register on the map.

</div>
</details>

<details><summary>onDisable()</summary>
<div>
<br/>

Optional callback called when the map tool is disabled, used to clean up resources.

</div>
</details>

<details><summary>onAdd()</summary>
<div>
<br/>

Optional callback called after the map tool is added to a map and before it is enabled.

</div>
</details>
