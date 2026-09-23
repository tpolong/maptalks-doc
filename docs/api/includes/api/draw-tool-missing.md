<details><summary>onAdd()</summary>
<div>
<br/>

加入地图时校验绘制 mode 是否合法

</div>
</details>

<details><summary>onEnable()</summary>
<div>
<br/>

启用绘制工具，创建绘制图层并备份地图配置

</div>
</details>

<details><summary>onDisable()</summary>
<div>
<br/>

停用绘制工具，结束绘制并移除绘制图层

</div>
</details>

<details><summary>getEvents()</summary>
<div>
<br/>

获取当前绘制模式下要绑定的事件处理函数

</div>
</details>

<details><summary>getTempGeometry()</summary>
<div>
<br/>

获取临时的Geometry

返回：

* `Any` Geometry

</div>
</details>

<details><summary>addTo(map)</summary>
<div>
<br/>

Adds the map tool to a map.

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

Gets the map it added to.

返回：

* `Map` map

</div>
</details>

<details><summary>enable()</summary>
<div>
<br/>

Enable the map tool.

返回：

* `MapTool` this

触发事件：

* `MapTool#enable`

</div>
</details>

<details><summary>disable()</summary>
<div>
<br/>

Disable the map tool

返回：

* `MapTool` this

触发事件：

* `MapTool#disable`

</div>
</details>

<details><summary>isEnabled()</summary>
<div>
<br/>

Returns whether the tool is enabled

返回：

* `Boolean` true | false

</div>
</details>

<details><summary>remove()</summary>
<div>
<br/>

停用该 tool，从地图注销并触发 remove 事件

</div>
</details>

<details><summary>onEnable()</summary>
<div>
<br/>

启用绘制工具，创建绘制图层并备份地图配置

</div>
</details>

<details><summary>getEvents()</summary>
<div>
<br/>

获取当前绘制模式下要绑定的事件处理函数

</div>
</details>

<details><summary>onDisable()</summary>
<div>
<br/>

停用绘制工具，结束绘制并移除绘制图层

</div>
</details>

<details><summary>onAdd()</summary>
<div>
<br/>

加入地图时校验绘制 mode 是否合法

</div>
</details>
