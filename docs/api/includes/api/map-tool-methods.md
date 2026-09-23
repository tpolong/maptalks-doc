<details><summary>addTo(map)</summary>
<div>
<br/>

将 map tool 添加到地图并启用，同地图上已有 tool 会被禁用

参数：

* map `Map`

返回：

* `MapTool` this

触发事件：

* `MapTool#add`

</div>
</details>

<details><summary>getMap()</summary>
<div>
<br/>

获取该 map tool 所添加到的地图

返回：

* `Map` map

</div>
</details>

<details><summary>enable()</summary>
<div>
<br/>

启用 map tool，注册地图事件并触发 enable 事件

返回：

* `MapTool` this

触发事件：

* `MapTool#enable`

</div>
</details>

<details><summary>disable()</summary>
<div>
<br/>

禁用 map tool，注销地图事件并触发 disable 事件

返回：

* `MapTool` this

触发事件：

* `MapTool#disable`

</div>
</details>

<details><summary>isEnabled()</summary>
<div>
<br/>

返回 map tool 当前是否已启用

返回：

* `Boolean` true | false

</div>
</details>

<details><summary>remove()</summary>
<div>
<br/>

从地图上移除该 map tool 并触发 remove 事件

</div>
</details>

<details><summary>onEnable()</summary>
<div>
<br/>

可选回调，map tool 启用时调用，用于准备上下文

</div>
</details>

<details><summary>getEvents()</summary>
<div>
<br/>

必须实现，返回注册到地图上的事件监听映射

</div>
</details>

<details><summary>onDisable()</summary>
<div>
<br/>

可选回调，map tool 禁用时调用，用于清理资源

</div>
</details>

<details><summary>onAdd()</summary>
<div>
<br/>

可选回调，map tool 添加到地图、启用前调用

</div>
</details>
