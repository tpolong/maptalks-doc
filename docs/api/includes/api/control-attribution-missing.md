<details><summary>buildOn()</summary>
<div>
<br/>

创建 attribution 控件的 DOM 容器并填充内容

</div>
</details>

<details><summary>onAdd()</summary>
<div>
<br/>

控件加入地图时监听 layer 增删以刷新 attribution

</div>
</details>

<details><summary>onRemove()</summary>
<div>
<br/>

控件移除时解绑地图的图层增删事件监听

</div>
</details>

<details><summary>onAdd()</summary>
<div>
<br/>

控件加入地图时监听 layer 增删以刷新 attribution

</div>
</details>

<details><summary>onRemove()</summary>
<div>
<br/>

控件移除时解绑地图的图层增删事件监听

</div>
</details>

<details><summary>addTo(map)</summary>
<div>
<br/>

Adds the control to a map.

参数：

* map `Map`

返回：

* `control.Control` this

触发事件：

* `control.Control#add`

</div>
</details>

<details><summary>update()</summary>
<div>
<br/>

update control container

返回：

* `control.Control` this

</div>
</details>

<details><summary>getMap()</summary>
<div>
<br/>

Get the map that the control is added to.

返回：

* `Map`

</div>
</details>

<details><summary>getPosition()</summary>
<div>
<br/>

Get the position of the control

返回：

* `Object`

</div>
</details>

<details><summary>setPosition(position)</summary>
<div>
<br/>

update the control's position

参数：

* position `ControlPositionType` can be one of 'top-left', 'top-right', 'bottom-left', 'bottom-right' or a position object like &#123;'top': 40,'left': 60&#125;

返回：

* `control.Control` this

触发事件：

* `control.Control#positionchange`

</div>
</details>

<details><summary>getContainerPoint()</summary>
<div>
<br/>

Get the container point of the control.

返回：

* `Point`

</div>
</details>

<details><summary>getContainer()</summary>
<div>
<br/>

Get the control's container.
Container is a div element wrapping the control's dom and decides the control's position and display.

返回：

* `HTMLElement`

</div>
</details>

<details><summary>getDOM()</summary>
<div>
<br/>

Get html dom element of the control

返回：

* `HTMLElement`

</div>
</details>

<details><summary>show()</summary>
<div>
<br/>

Show

返回：

* `control.Control` this

</div>
</details>

<details><summary>hide()</summary>
<div>
<br/>

Hide

返回：

* `control.Control` this

</div>
</details>

<details><summary>isVisible()</summary>
<div>
<br/>

Whether the control is visible

返回：

* `Boolean`

</div>
</details>

<details><summary>remove()</summary>
<div>
<br/>

Remove itself from the map

返回：

* `control.Control` this

触发事件：

* `control.Control#remove`

</div>
</details>

<details><summary>onConfig(conf)</summary>
<div>
<br/>

配置项变更时回调，position 变化时更新控件位置

参数：

* conf `ClassOptions`

</div>
</details>
