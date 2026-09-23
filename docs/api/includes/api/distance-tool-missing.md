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

工具加入 map 时的回调，检查并准备绘制模式

</div>
</details>

<details><summary>onEnable()</summary>
<div>
<br/>

工具启用时的回调，创建绘制图层并保存 map 原配置

</div>
</details>

<details><summary>onDisable()</summary>
<div>
<br/>

工具禁用时的回调，还原 map 配置并移除临时绘制图层

</div>
</details>

<details><summary>getEvents()</summary>
<div>
<br/>

获取当前绘制模式下需注册到 map 的事件映射表

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

从 map 上移除工具，先禁用再注销 map 上的引用

</div>
</details>

<details><summary>onEnable()</summary>
<div>
<br/>

工具启用时的回调，创建绘制图层并保存 map 原配置

</div>
</details>

<details><summary>getEvents()</summary>
<div>
<br/>

获取当前绘制模式下需注册到 map 的事件映射表

</div>
</details>

<details><summary>onDisable()</summary>
<div>
<br/>

工具禁用时的回调，还原 map 配置并移除临时绘制图层

</div>
</details>

<details><summary>onAdd()</summary>
<div>
<br/>

工具加入 map 时的回调，检查并准备绘制模式

</div>
</details>
