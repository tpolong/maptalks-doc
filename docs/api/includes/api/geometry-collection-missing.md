<details><summary>startEdit(opts?)</summary>
<div>
<br/>

开始编辑集合内全部 geometry，可用 symbol 指定编辑时的样式

参数：

* opts（可选） `GeometryEditOptionsType`

返回：

* `this`

</div>
</details>

<details><summary>endEdit()</summary>
<div>
<br/>

结束编辑，恢复编辑前的 symbol 与可见性并触发 editend

返回：

* `this`

</div>
</details>

<details><summary>isEditing()</summary>
<div>
<br/>

集合是否处于编辑状态

返回：

* `boolean`

</div>
</details>

<details><summary>undoEdit()</summary>
<div>
<br/>

从上次位置起撤销一个子 geometry 的编辑并触发 undoedit

返回：

* `this`

</div>
</details>

<details><summary>redoEdit()</summary>
<div>
<br/>

从上次位置起重做一个子 geometry 的编辑并触发 redoedit

返回：

* `this`

</div>
</details>

<details><summary>undoEditcheck()</summary>
<div>
<br/>

是否所有子 geometry 的编辑都已全部撤回

返回：

* `boolean`

</div>
</details>

<details><summary>redoEditcheck()</summary>
<div>
<br/>

是否所有子 geometry 的编辑都已全部重做

返回：

* `boolean`

</div>
</details>
