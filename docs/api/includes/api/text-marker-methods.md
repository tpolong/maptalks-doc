<details><summary>getContent()</summary>
<div>
<br/>

获取标签的文本内容

返回：

* `String`

</div>
</details>

<details><summary>setContent(content)</summary>
<div>
<br/>

给标签设置文本内容

参数：

* content `string`

返回：

* `Label` this

触发事件：

* `Label#contentchange`

</div>
</details>

<details><summary>onAdd()</summary>
<div>
<br/>

加入地图时刷新标签文本与盒子的显示

</div>
</details>

<details><summary>toJSON()</summary>
<div>
<br/>

导出 JSON 数据，结果中不含 symbol 字段

</div>
</details>

<details><summary>setSymbol(symbol)</summary>
<div>
<br/>

把 symbol 按 text 前缀拆成文本与盒子两部分分别设置

参数：

* symbol `any`

</div>
</details>

<details><summary>getTextStyle()</summary>
<div>
<br/>

获取标签的文本样式，由子类实现

返回：

* `any`

</div>
</details>

<details><summary>setTextStyle(tyle?)</summary>
<div>
<br/>

设置标签的文本样式，由子类实现

参数：

* tyle（可选） `any`

返回：

* `any`

</div>
</details>

<details><summary>setTextSymbol(style?)</summary>
<div>
<br/>

设置标签的文本 symbol，由子类实现

参数：

* style（可选） `any`

返回：

* `any`

</div>
</details>

<details><summary>setBoxStyle(style?)</summary>
<div>
<br/>

设置标签背景盒子的样式，由子类实现

参数：

* style（可选） `any`

返回：

* `any`

</div>
</details>

<details><summary>getBoxStyle()</summary>
<div>
<br/>

获取标签背景盒子的样式，由子类实现

返回：

* `any`

</div>
</details>

<details><summary>setBoxSymbol(style?)</summary>
<div>
<br/>

设置标签背景盒子的 symbol，由子类实现

参数：

* style（可选） `any`

返回：

* `any`

</div>
</details>
