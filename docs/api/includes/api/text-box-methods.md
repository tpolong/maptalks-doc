<details><summary>getWidth()</summary>
<div>
<br/>

获取文本框得宽度

返回：

* `Number`

</div>
</details>

<details><summary>setWidth(width)</summary>
<div>
<br/>

设置文本框得宽度

参数：

* width `number` &#123;TextBox&#125; this

</div>
</details>

<details><summary>getHeight()</summary>
<div>
<br/>

获取文本框高度

返回：

* `Number`

</div>
</details>

<details><summary>setHeight(height)</summary>
<div>
<br/>

设置文本框高度

参数：

* height `number` &#123;TextBox&#125; this

</div>
</details>

<details><summary>getBoxSymbol()</summary>
<div>
<br/>

获取文本框边框样式

返回：

* `Object` boxsymbol

</div>
</details>

<details><summary>setBoxSymbol(symbol)</summary>
<div>
<br/>

设置文本框边框样式

参数：

* symbol `VectorMarkerSymbol` &#123;TextBox&#125; this

</div>
</details>

<details><summary>getTextStyle()</summary>
<div>
<br/>

获取文本框文本样式

返回：

* `Object`

</div>
</details>

<details><summary>setTextStyle(style)</summary>
<div>
<br/>

设置文本框文本样式

参数：

* style `TextStyle` &#123;TextBox&#125; this

</div>
</details>

<details><summary>startEdit(opts)</summary>
<div>
<br/>

开始编辑，先把 function-type 宽高固定为 marker 尺寸

参数：

* opts `GeometryEditOptionsType`

返回：

* `this`

</div>
</details>

<details><summary>endEdit()</summary>
<div>
<br/>

结束编辑，按编辑后的尺寸缩放并还原 function-type 宽高

返回：

* `this`

</div>
</details>
