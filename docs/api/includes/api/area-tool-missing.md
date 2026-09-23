<details><summary>clear()</summary>
<div>
<br/>

清空测量

返回：

* `DistanceTool` this

</div>
</details>

<details><summary>getMeasureLayers()</summary>
<div>
<br/>

获取在绘制图形期间的DrawToolLayers

返回：

* `Array<Layer>`

</div>
</details>

<details><summary>getLastMeasure()</summary>
<div>
<br/>

获取最后测量结果

返回：

* `Number`

</div>
</details>

<details><summary>undo()</summary>
<div>
<br/>

撤消绘图，仅适用于点击/删除模式

返回：

* `DistanceTool` this

</div>
</details>

<details><summary>redo()</summary>
<div>
<br/>

重做绘图，只适用于click/dblclick模式

返回：

* `DistanceTool` this

</div>
</details>

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

工具加入 map 时的回调，校验当前绘制模式是否合法

</div>
</details>

<details><summary>onEnable()</summary>
<div>
<br/>

工具启用时的回调，保存 map 配置、创建绘制图层并加载资源

</div>
</details>

<details><summary>onDisable()</summary>
<div>
<br/>

工具禁用时的回调，恢复 map 配置、结束绘制并移除绘制图层

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

返回当前绘制模式对应的 map 事件映射，模式无事件时返回 null

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

将该工具从 map 上移除，先禁用并解绑事件

</div>
</details>

<details><summary>onEnable()</summary>
<div>
<br/>

工具启用时的回调，保存 map 配置、创建绘制图层并加载资源

</div>
</details>

<details><summary>getEvents()</summary>
<div>
<br/>

返回当前绘制模式对应的 map 事件映射，模式无事件时返回 null

</div>
</details>

<details><summary>onDisable()</summary>
<div>
<br/>

工具禁用时的回调，恢复 map 配置、结束绘制并移除绘制图层

</div>
</details>

<details><summary>onAdd()</summary>
<div>
<br/>

工具加入 map 时的回调，校验当前绘制模式是否合法

</div>
</details>
