<details><summary>setCoordinates(coordinates)</summary>
<div>
<br/>

设置 UIMarker 的坐标并刷新位置、触发 positionchange 事件

参数：

* coordinates `Coordinate` UIMarker's coordinate

返回：

* `UIMarker` this

触发事件：

* `UIMarker#positionchange`

</div>
</details>

<details><summary>getCoordinates()</summary>
<div>
<br/>

获取 UIMarker 当前的坐标

返回：

* `Coordinate` coordinates

</div>
</details>

<details><summary>getCenter()</summary>
<div>
<br/>

获取 UIMarker 的中心坐标，与 getCoordinates 一致

</div>
</details>

<details><summary>getAltitude()</summary>
<div>
<br/>

获取 UIMarker 的海拔，优先取坐标的 z，否则取 options.altitude

返回：

* `number`

</div>
</details>

<details><summary>setAltitude(alt)</summary>
<div>
<br/>

设置 UIMarker 的海拔高度并更新位置

参数：

* alt `number`

</div>
</details>

<details><summary>setContent(content)</summary>
<div>
<br/>

设置 UIMarker 的内容并触发 contentchange 事件

参数：

* content `string | HTMLElement` UIMarker's content

返回：

* `UIMarker` this

触发事件：

* `UIMarker#contentchange`

</div>
</details>

<details><summary>getContent()</summary>
<div>
<br/>

获取 UIMarker 当前的内容

返回：

* `String|HTMLElement` content

</div>
</details>

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

<details><summary>flash(interval?, count?, cb?)</summary>
<div>
<br/>

让 UIMarker 按指定间隔反复显示隐藏，闪烁结束后触发回调

参数：

* interval（可选） `number` =100]     - interval of flash, in millisecond (ms)
* count（可选） `number` =4]          - flash times
* cb（可选） `(arg: any) => void, context?: any` =null]        - callback function when flash ended

返回：

* `UIMarker` this

</div>
</details>

<details><summary>onDomRemove()</summary>
<div>
<br/>

DOM 被移除时解绑 marker 上注册的 DOM 事件

</div>
</details>

<details><summary>isDragging()</summary>
<div>
<br/>

判断 marker 当前是否正在被拖拽

返回：

* `Boolean`

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
