<details><summary>getMap()</summary>
<div>
<br/>

Get map

Returns:

* `Map` map

</div>
</details>

<details><summary>prepare()</summary>
<div>
<br/>

Prepare to edit

</div>
</details>

<details><summary>start()</summary>
<div>
<br/>

Start to edit

</div>
</details>

<details><summary>stop()</summary>
<div>
<br/>

Stop editing

</div>
</details>

<details><summary>isEditing()</summary>
<div>
<br/>

Whether the editor is editing

Returns:

* `Boolean`

</div>
</details>

<details><summary>createHandle(containerPoint, opts)</summary>
<div>
<br/>

Create an edit handle at the given container point and bind its drag events

Parameters:

* containerPoint `any`
* opts `any`

Returns:

* `EditHandle`

</div>
</details>

<details><summary>cancel()</summary>
<div>
<br/>

Cancel the current edit and roll back to the first record in the edit history

Returns:

* `GeometryEditor`

</div>
</details>

<details><summary>undo()</summary>
<div>
<br/>

Get previous map view in view history

Returns:

* `Object` map view

</div>
</details>

<details><summary>redo()</summary>
<div>
<br/>

Get next view in view history

Returns:

* `Object` map view

</div>
</details>
