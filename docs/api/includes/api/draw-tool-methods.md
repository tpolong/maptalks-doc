<details><summary>getMode()</summary>
<div>
<br/>

获取当前mode

返回：

* `Any` mode

</div>
</details>

<details><summary>setMode(mode)</summary>
<div>
<br/>

设置mode

参数：

* mode `string` mode of the draw tool

返回：

* `DrawTool` this

</div>
</details>

<details><summary>getSymbol()</summary>
<div>
<br/>

获取DrawTool的symbol属性

返回：

* `Any` symbol

</div>
</details>

<details><summary>setSymbol(symbol)</summary>
<div>
<br/>

设置DrawTool的symbol属性

参数：

* symbol `any` symbol set

返回：

* `DrawTool` this

</div>
</details>

<details><summary>getCurrentGeometry()</summary>
<div>
<br/>

获取当前绘制图形

返回：

* `Any` geometry currently drawing

</div>
</details>

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

<details><summary>undo()</summary>
<div>
<br/>

撤消绘图，仅适用于点击/删除模式

返回：

* `Any` this

</div>
</details>

<details><summary>redo()</summary>
<div>
<br/>

重做绘图，只适用于click/dblclick模式

返回：

* `Any` this

</div>
</details>

<details><summary>getEvents()</summary>
<div>
<br/>

获取当前绘制模式下要绑定的事件处理函数

</div>
</details>

<details><summary>endDraw(param?)</summary>
<div>
<br/>

结束当前绘制

参数：

* param（可选） `any` =null] params of drawend event

返回：

* `Any` this

</div>
</details>

<details><summary>setLayerZIndex(zIndex)</summary>
<div>
<br/>

设置Layer的zIndex

参数：

* zIndex `number` draw layer zIndex

返回：

* `Any` this

</div>
</details>

<details><summary>addCoordinate(coordinate)</summary>
<div>
<br/>

添加一个自定义的坐标点

参数：

* coordinate `Coordinate` coordinate

返回：

* `Any` this

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
