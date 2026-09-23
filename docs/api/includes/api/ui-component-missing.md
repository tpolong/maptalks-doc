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
