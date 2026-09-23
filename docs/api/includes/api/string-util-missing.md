<details><summary>escapeSpecialChars(str)</summary>
<div>
<br/>

去掉字符串中的退格制表回车等特殊控制字符

参数：

* str `string` string to escape

</div>
</details>

<details><summary>stringLength(text, font, size?)</summary>
<div>
<br/>

测量文本宽度并返回 Size，高度取传入字号或默认字号

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

按 symbol 拆出文本行描述，并用 textMaxHeight 限制高度

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

按水平与垂直对齐方式算出文本的对齐锚点 Point

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

按 textWrapWidth 与换行字符把文本拆成多行并返回行与整体尺寸

参数：

* text `string` text to split
* style `Object` text style

返回：

* `Object[]` the object's structure: &#123; rowNum: rowNum, textSize: textSize, rows: textRows, rawSize : rawSize &#125;

</div>
</details>
