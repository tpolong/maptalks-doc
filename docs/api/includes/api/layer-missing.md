<details><summary>onLoadEnd()</summary>
<div>
<br/>

layer 加载完成后的钩子，由子类重写，默认空实现

</div>
</details>

<details><summary>onConfig(conf)</summary>
<div>
<br/>

options 变更后的回调，触发重绘与 attribution 更新

参数：

* conf `{ [key: string]: any }`

</div>
</details>

<details><summary>onAdd()</summary>
<div>
<br/>

layer 绑定到 map 后的回调，子类可重写

</div>
</details>

<details><summary>onRendererCreate()</summary>
<div>
<br/>

renderer 创建完成后的回调，子类可重写

</div>
</details>

<details><summary>onCanvasCreate()</summary>
<div>
<br/>

canvas 创建完成后的回调，子类可重写

</div>
</details>

<details><summary>onRemove()</summary>
<div>
<br/>

layer 从 map 移除时的回调，子类可重写

</div>
</details>

<details><summary>getRendererOption()</summary>
<div>
<br/>

按 map 的 renderer 类型返回 layer 使用的 renderer 名

</div>
</details>

<details><summary>getLayers()</summary>
<div>
<br/>

获取子 layer 列表，仅分组类型 layer 实现

返回：

* `Layer[]`

</div>
</details>
