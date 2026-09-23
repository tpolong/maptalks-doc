<details><summary>buildOn()</summary>
<div>
<br/>

创建 tooltip 的 DOM 容器，content 为函数时调用它生成内容

</div>
</details>

<details><summary>onMouseOut()</summary>
<div>
<br/>

鼠标移出时清除显示延时并移除 tooltip 的 DOM，解绑地图事件

</div>
</details>

<details><summary>onMouseMove(e)</summary>
<div>
<br/>

鼠标在图形上移动时按 showTimeout 延时显示提示框

参数：

* e `Any`

</div>
</details>

<details><summary>onRemove()</summary>
<div>
<br/>

移除提示框时清理定时器并解绑宿主图形上的鼠标事件

</div>
</details>

<details><summary>hideDom()</summary>
<div>
<br/>

隐藏提示框的 DOM 元素

</div>
</details>

<details><summary>onEvent()</summary>
<div>
<br/>

地图缩放旋转倾斜时更新位置并隐藏提示框

</div>
</details>

<details><summary>onAdd()</summary>
<div>
<br/>

UI 组件被添加时的回调钩子，由子类实现

</div>
</details>

<details><summary>onRemove()</summary>
<div>
<br/>

移除提示框时清理定时器并解绑宿主图形上的鼠标事件

</div>
</details>

<details><summary>onDomRemove()</summary>
<div>
<br/>

UI 的 DOM 节点被移除时的回调钩子，由子类实现

</div>
</details>

<details><summary>getEvents()</summary>
<div>
<br/>

返回组件需在地图上监听的事件映射表，子类可重写

</div>
</details>

<details><summary>getOwnerEvents()</summary>
<div>
<br/>

返回需绑定到 owner 上的事件映射表，子类可重写

</div>
</details>

<details><summary>buildOn()</summary>
<div>
<br/>

创建 tooltip 的 DOM 容器，content 为函数时调用它生成内容

返回：

* `HTMLElement`

</div>
</details>

<details><summary>getMap()</summary>
<div>
<br/>

Get the map it added to

返回：

* `Map` map instance

</div>
</details>

<details><summary>show(coordinate?)</summary>
<div>
<br/>

Show the UI Component, if it is a global single one, it will close previous one.

参数：

* coordinate（可选） `Coordinate` =null] - coordinate to show, default is owner's center

返回：

* `ui.UIComponent` this

触发事件：

* `ui.UIComponent#showstart`
* `ui.UIComponent#showend`

</div>
</details>

<details><summary>hide()</summary>
<div>
<br/>

Hide the UI Component.

返回：

* `ui.UIComponent` this

触发事件：

* `ui.UIComponent#hide`

</div>
</details>

<details><summary>isVisible()</summary>
<div>
<br/>

Decide whether the ui component is open

返回：

* `Boolean` true|false

</div>
</details>

<details><summary>remove()</summary>
<div>
<br/>

Remove the UI Component

返回：

* `ui.UIComponent` this

触发事件：

* `ui.UIComponent#hide`
* `ui.UIComponent#remove`

</div>
</details>

<details><summary>getSize()</summary>
<div>
<br/>

Get pixel size of the UI Component.

返回：

* `Size` size

</div>
</details>

<details><summary>getOwner()</summary>
<div>
<br/>

获取 UI 组件挂载的 owner，即 map 或 geometry

</div>
</details>

<details><summary>getDOM()</summary>
<div>
<br/>

get Dom Node

返回：

* `HTMLDivElement` dom|null

</div>
</details>

<details><summary>setZIndex(zIndex)</summary>
<div>
<br/>

set Dom Node zIndex

参数：

* zIndex `number`

</div>
</details>

<details><summary>getPosition()</summary>
<div>
<br/>

获取 UI 相对地图容器的像素位置，含 getOffset 偏移

</div>
</details>

<details><summary>onGeometryPositionChange(param)</summary>
<div>
<br/>

owner geometry 位置变化时按新中心点刷新提示框位置

参数：

* param `Any`

</div>
</details>

<details><summary>onMoving()</summary>
<div>
<br/>

地图 moving 与 moveend 时更新提示框位置

</div>
</details>

<details><summary>onEvent()</summary>
<div>
<br/>

地图缩放旋转倾斜时更新位置并隐藏提示框

</div>
</details>

<details><summary>onZoomEnd()</summary>
<div>
<br/>

地图 zoom 结束时立即重设提示框的 DOM 位置

</div>
</details>

<details><summary>onResize()</summary>
<div>
<br/>

地图容器尺寸变化时重设提示框的 DOM 位置

</div>
</details>

<details><summary>onDomSizeChange()</summary>
<div>
<br/>

DOM 尺寸变化时的回调，重设位置并重算碰撞

</div>
</details>

<details><summary>isSupportZoomFilter()</summary>
<div>
<br/>

是否支持按 zoom 过滤 DOM 显示，基类返回 false

</div>
</details>

<details><summary>onConfig(config)</summary>
<div>
<br/>

options 变更后的回调，刷新位置并在碰撞状态变化时重排

参数：

* config `Record<string, any>`

</div>
</details>
