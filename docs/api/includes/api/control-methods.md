<details><summary>onAdd()</summary>
<div>
<br/>

控件添加到 map 后的可选回调，由子类实现

</div>
</details>

<details><summary>onRemove()</summary>
<div>
<br/>

控件从 map 移除后的可选回调，由子类实现

</div>
</details>

<details><summary>addTo(map)</summary>
<div>
<br/>

将控件添加到指定 map，并触发 add 事件

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

重建控件容器里的 DOM 并刷新其位置

返回：

* `control.Control` this

</div>
</details>

<details><summary>getMap()</summary>
<div>
<br/>

获取控件所在的 map

返回：

* `Map`

</div>
</details>

<details><summary>getPosition()</summary>
<div>
<br/>

获取控件当前的定位位置对象

返回：

* `Object`

</div>
</details>

<details><summary>setPosition(position)</summary>
<div>
<br/>

设置控件位置，可传预设位置名或 top left 坐标对象

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

获取控件在 map 容器坐标系中的点位

返回：

* `Point`

</div>
</details>

<details><summary>getContainer()</summary>
<div>
<br/>

获取包裹控件 DOM 的容器 div 元素

返回：

* `HTMLElement`

</div>
</details>

<details><summary>getDOM()</summary>
<div>
<br/>

获取控件的 HTML DOM 元素

返回：

* `HTMLElement`

</div>
</details>

<details><summary>show()</summary>
<div>
<br/>

显示控件

返回：

* `control.Control` this

</div>
</details>

<details><summary>hide()</summary>
<div>
<br/>

隐藏控件

返回：

* `control.Control` this

</div>
</details>

<details><summary>isVisible()</summary>
<div>
<br/>

判断控件是否处于显示状态

返回：

* `Boolean`

</div>
</details>

<details><summary>remove()</summary>
<div>
<br/>

将控件自身从 map 上移除

返回：

* `control.Control` this

触发事件：

* `control.Control#remove`

</div>
</details>

<details><summary>onConfig(conf)</summary>
<div>
<br/>

配置中含 position 时重新计算并更新控件位置

参数：

* conf `ClassOptions`

</div>
</details>
