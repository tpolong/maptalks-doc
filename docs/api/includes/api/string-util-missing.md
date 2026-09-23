<details><summary>escapeSpecialChars(str)</summary>
<div>
<br/>

Escape special characters from string.
Including: \b \t \r \v \f

参数：

* str `string` string to escape

</div>
</details>

<details><summary>stringLength(text, font, size?)</summary>
<div>
<br/>

Gets size in pixel of the text with a certain font.

参数：

* text `string` text to measure
* font `string` font of the text, same as the CSS font.
* size（可选） `number`

返回：

* `Size`

</div>
</details>

<details><summary>describeText(textContent, symbol)</summary>
<div>
<br/>

Generate text descriptors according to symbols

参数：

* textContent `any`
* symbol `any`

返回：

* `Object` text descriptor

</div>
</details>

<details><summary>getAlignPoint(size, horizontalAlignment, verticalAlignment)</summary>
<div>
<br/>

Gets text's align point according to the horizontalAlignment and verticalAlignment

参数：

* size `Size` text size
* horizontalAlignment `string` horizontalAlignment: left/middle/right
* verticalAlignment `string` verticalAlignment: top/middle/bottom

返回：

* `Point`

</div>
</details>

<details><summary>splitTextToRow(text, style)</summary>
<div>
<br/>

Split a text to multiple rows according to the style.

参数：

* text `string` text to split
* style `Object` text style

返回：

* `Object[]` the object's structure: &#123; rowNum: rowNum, textSize: textSize, rows: textRows, rawSize : rawSize &#125;

</div>
</details>
