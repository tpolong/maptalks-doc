<details><summary>getContent()</summary>
<div>
<br/>

Get text content of the label

Returns:

* `String`

</div>
</details>

<details><summary>setContent(content)</summary>
<div>
<br/>

Set a new text content to the label

Parameters:

* content `string`

Returns:

* `Label` this

Fires:

* `Label#contentchange`

</div>
</details>

<details><summary>onAdd()</summary>
<div>
<br/>

Refresh the label text and box display when added to the map

</div>
</details>

<details><summary>toJSON()</summary>
<div>
<br/>

Export the textmarker JSON data, dropping the symbol field.

</div>
</details>

<details><summary>setSymbol(symbol)</summary>
<div>
<br/>

Split the symbol into text and box parts by text prefix and apply each part

Parameters:

* symbol `any`

</div>
</details>

<details><summary>getTextStyle()</summary>
<div>
<br/>

Get the text style of the label, implemented by subclasses

Returns:

* `any`

</div>
</details>

<details><summary>setTextStyle(tyle?)</summary>
<div>
<br/>

Set the text style of the label, implemented by subclasses

Parameters:

* tyle (optional) `any`

Returns:

* `any`

</div>
</details>

<details><summary>setTextSymbol(style?)</summary>
<div>
<br/>

Set the text symbol of the label, implemented by subclasses

Parameters:

* style (optional) `any`

Returns:

* `any`

</div>
</details>

<details><summary>setBoxStyle(style?)</summary>
<div>
<br/>

Set the background box style of the label, implemented by subclasses

Parameters:

* style (optional) `any`

Returns:

* `any`

</div>
</details>

<details><summary>getBoxStyle()</summary>
<div>
<br/>

Get the label background box style, implemented by subclasses

Returns:

* `any`

</div>
</details>

<details><summary>setBoxSymbol(style?)</summary>
<div>
<br/>

Set the background box symbol of the label, implemented by subclasses

Parameters:

* style (optional) `any`

Returns:

* `any`

</div>
</details>
