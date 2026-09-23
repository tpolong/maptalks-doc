<details><summary>onAdd()</summary>
<div>
<br/>

UI 组件被添加时的回调钩子，由子类实现

</div>
</details>

<details><summary>onRemove()</summary>
<div>
<br/>

UI 组件被移除时的回调钩子，由子类实现

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

返回组件自身需监听的事件映射表，子类可重写

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

创建并返回 UI 的 DOM 节点，子类必须实现

返回：

* `HTMLElement`

</div>
</details>

<details><summary>addTo(owner)</summary>
<div>
<br/>

把 UI 组件添加到 geometry 或 map 上

参数：

* owner `Geometry | Map` geometry or map to addto.

返回：

* `ui.UIComponent` this

触发事件：

* `ui.UIComponent#add`

</div>
</details>

<details><summary>getMap()</summary>
<div>
<br/>

获取 UI 组件所添加到的 map

返回：

* `Map` map instance

</div>
</details>

<details><summary>show(coordinate?)</summary>
<div>
<br/>

显示 UI 组件，可指定 coordinate，缺省为 owner 中心点

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

隐藏 UI 组件，按配置决定是否播放动画

返回：

* `ui.UIComponent` this

触发事件：

* `ui.UIComponent#hide`

</div>
</details>

<details><summary>isVisible()</summary>
<div>
<br/>

判断 UI 组件当前是否可见

返回：

* `Boolean` true|false

</div>
</details>

<details><summary>remove()</summary>
<div>
<br/>

从 owner 上移除 UI 组件并解绑事件监听

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

获取 UI 组件的像素尺寸，无则为 null

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

获取 UI 组件的 DOM 节点

返回：

* `HTMLDivElement` dom|null

</div>
</details>

<details><summary>setZIndex(zIndex)</summary>
<div>
<br/>

设置 UI 的 DOM 节点 zIndex 并同步到 options

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

owner geometry 位置变化时的回调，按新中心点刷新 UI

参数：

* param `Any`

</div>
</details>

<details><summary>onMoving()</summary>
<div>
<br/>

地图 moving 与 moveend 时的回调，更新 UI 位置

</div>
</details>

<details><summary>onEvent()</summary>
<div>
<br/>

地图缩放旋转倾斜过程中的回调，更新 UI 位置

</div>
</details>

<details><summary>onZoomEnd()</summary>
<div>
<br/>

地图 zoom 结束时的回调，立即重设 UI 的 DOM 位置

</div>
</details>

<details><summary>onResize()</summary>
<div>
<br/>

地图容器尺寸变化时的回调，重设 UI 的 DOM 位置

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
