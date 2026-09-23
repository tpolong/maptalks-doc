<details><summary>buildOn()</summary>
<div>
<br/>

创建信息窗口 DOM，含标题、关闭按钮与内容容器

返回：

* `HTMLElement`

</div>
</details>

<details><summary>getEvents()</summary>
<div>
<br/>

返回 autoCloseOn 对应的 map 事件映射，用于自动关闭

</div>
</details>

<details><summary>getOwnerEvents()</summary>
<div>
<br/>

返回 autoOpenOn 对应的 owner 事件映射，用于自动打开

</div>
</details>

<details><summary>onRemove()</summary>
<div>
<br/>

信息窗口移除时处理鼠标移出并解绑 DOM 事件

</div>
</details>

<details><summary>onDomRemove()</summary>
<div>
<br/>

解绑关闭按钮上的 click 与 touchend 事件监听

</div>
</details>

<details><summary>onAdd()</summary>
<div>
<br/>

信息窗口被添加到 owner 时的回调钩子，基类为空实现

</div>
</details>

<details><summary>onRemove()</summary>
<div>
<br/>

信息窗口移除时处理鼠标移出并解绑 DOM 事件

</div>
</details>

<details><summary>onDomRemove()</summary>
<div>
<br/>

解绑关闭按钮上的 click 与 touchend 事件监听

</div>
</details>

<details><summary>getEvents()</summary>
<div>
<br/>

返回 autoCloseOn 对应的 map 事件映射，用于自动关闭

</div>
</details>

<details><summary>getOwnerEvents()</summary>
<div>
<br/>

返回 autoOpenOn 对应的 owner 事件映射，用于自动打开

</div>
</details>

<details><summary>buildOn()</summary>
<div>
<br/>

创建信息窗口 DOM，含标题、关闭按钮与内容容器

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

获取信息窗口挂载的 owner，即 map 或 geometry

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

获取信息窗口相对地图容器的像素位置，含偏移，无 map 时为 null

</div>
</details>

<details><summary>onGeometryPositionChange(param)</summary>
<div>
<br/>

owner geometry 位置变化时的回调，按新中心点刷新窗口

参数：

* param `Any`

</div>
</details>

<details><summary>onMoving()</summary>
<div>
<br/>

地图 moving 与 moveend 时的回调，更新信息窗口位置

</div>
</details>

<details><summary>onEvent()</summary>
<div>
<br/>

地图缩放旋转倾斜过程中的回调，更新信息窗口位置

</div>
</details>

<details><summary>onZoomEnd()</summary>
<div>
<br/>

地图 zoom 结束时的回调，立即重设信息窗口的 DOM 位置

</div>
</details>

<details><summary>onResize()</summary>
<div>
<br/>

地图容器尺寸变化时的回调，重设信息窗口的 DOM 位置

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

是否支持按 zoom 过滤 DOM 显示，信息窗口返回 false

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
