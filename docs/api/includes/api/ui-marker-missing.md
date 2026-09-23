<details><summary>onAdd()</summary>
<div>
<br/>

UIMarker 加入地图时调用，owner 不是地图会报错

</div>
</details>

<details><summary>show()</summary>
<div>
<br/>

显示 UIMarker，用其坐标调用父类的 show

返回：

* `UIMarker` this

触发事件：

* `UIMarker#showstart`
* `UIMarker#showend`

</div>
</details>

<details><summary>onDomRemove()</summary>
<div>
<br/>

DOM 被移除时解绑 marker 上注册的 DOM 事件

</div>
</details>

<details><summary>onZoomFilter()</summary>
<div>
<br/>

缩放时按是否可见切换 marker 的 DOM 显示与隐藏

</div>
</details>

<details><summary>isVisible()</summary>
<div>
<br/>

判断 marker 是否可见，取决于 visible 选项与 zoom 范围

</div>
</details>

<details><summary>isSupportZoomFilter()</summary>
<div>
<br/>

是否支持按 zoom 动态过滤 marker 的显示

</div>
</details>

<details><summary>onAdd()</summary>
<div>
<br/>

UIMarker 加入地图时调用，owner 不是地图会报错

</div>
</details>

<details><summary>onRemove()</summary>
<div>
<br/>

UI 组件从 owner 移除时的回调，供子类做清理

</div>
</details>

<details><summary>onDomRemove()</summary>
<div>
<br/>

DOM 被移除时解绑 marker 上注册的 DOM 事件

</div>
</details>

<details><summary>getEvents()</summary>
<div>
<br/>

返回组件自身需监听的事件映射表，基类返回空对象

</div>
</details>

<details><summary>getOwnerEvents()</summary>
<div>
<br/>

返回需绑定到 owner 上的事件映射表，基类返回空对象

</div>
</details>

<details><summary>buildOn()</summary>
<div>
<br/>

按 content 构建 marker 的 DOM，函数内容动态渲染，并绑定 DOM 事件

返回：

* `HTMLElement`

</div>
</details>

<details><summary>addTo(owner)</summary>
<div>
<br/>

Adds the UI Component to a geometry or a map

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

Get the map it added to

返回：

* `Map` map instance

</div>
</details>

<details><summary>show(coordinate?)</summary>
<div>
<br/>

显示 UIMarker，用其坐标调用父类的 show

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

判断 marker 是否可见，取决于 visible 选项与 zoom 范围

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

获取 marker 挂载的 owner，即所属的 map

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

获取 marker 相对地图容器的像素位置，含 getOffset 偏移

</div>
</details>

<details><summary>onGeometryPositionChange(param)</summary>
<div>
<br/>

owner geometry 位置变化时的回调，可见时按新中心重设位置

参数：

* param `Any`

</div>
</details>

<details><summary>onMoving()</summary>
<div>
<br/>

地图 moving 或 moveend 时的回调，可见时更新 UI 位置

</div>
</details>

<details><summary>onEvent()</summary>
<div>
<br/>

地图 zooming rotate pitch 时的回调，可见时更新 UI 位置

</div>
</details>

<details><summary>onZoomEnd()</summary>
<div>
<br/>

地图 zoomend 时的回调，可见时在当前帧重设位置

</div>
</details>

<details><summary>onResize()</summary>
<div>
<br/>

地图 resize 时的回调，可见时重设 UI 位置

</div>
</details>

<details><summary>onDomSizeChange()</summary>
<div>
<br/>

DOM 尺寸变化时的回调，可见时更新位置并重做碰撞检测

</div>
</details>

<details><summary>isSupportZoomFilter()</summary>
<div>
<br/>

是否支持按 zoom 动态过滤 marker 的显示

</div>
</details>

<details><summary>onConfig(config)</summary>
<div>
<br/>

配置变更后的回调，更新位置并在碰撞选项变化时重做碰撞检测

参数：

* config `Record<string, any>`

</div>
</details>
