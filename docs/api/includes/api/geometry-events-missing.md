<details><summary>handledragstart</summary>
<div>
<br/>

更改几何图形启动事件，在拖动以更改几何图形时激发

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | handledragstart |
| target | `Geometry` | the geometry fires the event |

</div>
</details>

<details><summary>handledragging</summary>
<div>
<br/>

更改几何图形事件，在拖动以更改几何图形时激发

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | handledragging |
| target | `Geometry` | the geometry fires the event |

</div>
</details>

<details><summary>handledragend</summary>
<div>
<br/>

拖动编辑控制点改变 geometry 形状结束时触发

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | handledragend |
| target | `Geometry` | the geometry fires the event |

</div>
</details>

<details><summary>handleremove</summary>
<div>
<br/>

编辑中删除控制顶点后触发

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | handleremove |
| target | `Geometry` | the geometry fires the event |

</div>
</details>

<details><summary>editrecord</summary>
<div>
<br/>

编辑记录事件，在发生编辑并正在记录时激发

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | editrecord |
| target | `Geometry` | the geometry fires the event |

</div>
</details>

<details><summary>animateend</summary>
<div>
<br/>

geometry 动画结束时触发

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | animateend |
| target | `Geometry` | the geometry fires the event |

</div>
</details>

<details><summary>animating</summary>
<div>
<br/>

geometry 动画逐帧播放时触发

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | animating |
| target | `Geometry` | the geometry fires the event |

</div>
</details>

<details><summary>animatestart</summary>
<div>
<br/>

geometry 动画开始时触发

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | animatestart |
| target | `Geometry` | the geometry fires the event |

</div>
</details>

<details><summary>dragstart</summary>
<div>
<br/>

拖拽开始事件

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | dragstart |
| target | `Geometry` | the geometry fires event |
| coordinate | `Coordinate` | coordinate of the event |
| containerPoint | `Point` | container point of the event |
| viewPoint | `Point` | view point of the event |
| domEvent | `Event` | dom event |

</div>
</details>

<details><summary>dragging</summary>
<div>
<br/>

正在拖拽事件

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | dragging |
| target | `Geometry` | the geometry fires event |
| coordinate | `Coordinate` | coordinate of the event |
| containerPoint | `Point` | container point of the event |
| viewPoint | `Point` | view point of the event |
| domEvent | `Event` | dom event |

</div>
</details>

<details><summary>dragend</summary>
<div>
<br/>

拖拽结束事件

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | dragend |
| target | `Geometry` | the geometry fires event |
| coordinate | `Coordinate` | coordinate of the event |
| containerPoint | `Point` | container point of the event |
| viewPoint | `Point` | view point of the event |
| domEvent | `Event` | dom event |

</div>
</details>

<details><summary>editstart</summary>
<div>
<br/>

geometry 开始编辑时触发

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | editstart |
| target | `Geometry` | the geometry fires the event |

</div>
</details>

<details><summary>editend</summary>
<div>
<br/>

geometry 结束编辑时触发

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | editend |
| target | `Geometry` | the geometry fires the event |

</div>
</details>

<details><summary>redoedit</summary>
<div>
<br/>

geometry 编辑重做后触发

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | redoedit |
| target | `Geometry` | the geometry fires the event |

</div>
</details>

<details><summary>undoedit</summary>
<div>
<br/>

geometry 编辑撤销后触发

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | undoedit |
| target | `Geometry` | the geometry fires the event |

</div>
</details>

<details><summary>canceledit</summary>
<div>
<br/>

geometry 编辑取消后触发

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | canceledit |
| target | `Geometry` | the geometry fires the event |

</div>
</details>

<details><summary>add</summary>
<div>
<br/>

add 事件

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | add |
| target | `Geometry` | geometry |
| layer | `Layer` | the layer added to. |

</div>
</details>

<details><summary>mousedown</summary>
<div>
<br/>

鼠标在图形上按下时触发

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | mousedown |
| target | `Geometry` | the Geometry fires event |
| coordinate | `Coordinate` | coordinate of the event |
| containerPoint | `Point` | container point of the event |
| viewPoint | `Point` | view point of the event |
| domEvent | `Event` | dom event |

</div>
</details>

<details><summary>mouseup</summary>
<div>
<br/>

鼠标在图形上松开时触发

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | mouseup |
| target | `Geometry` | the Geometry fires event |
| coordinate | `Coordinate` | coordinate of the event |
| containerPoint | `Point` | container point of the event |
| viewPoint | `Point` | view point of the event |
| domEvent | `Event` | dom event |

</div>
</details>

<details><summary>mousemove</summary>
<div>
<br/>

鼠标在图形上移动时触发

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | mousemove |
| target | `Geometry` | the Geometry fires event |
| coordinate | `Coordinate` | coordinate of the event |
| containerPoint | `Point` | container point of the event |
| viewPoint | `Point` | view point of the event |
| domEvent | `Event` | dom event |

</div>
</details>

<details><summary>click</summary>
<div>
<br/>

鼠标单击图形时触发

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | click |
| target | `Geometry` | the Geometry fires event |
| coordinate | `Coordinate` | coordinate of the event |
| containerPoint | `Point` | container point of the event |
| viewPoint | `Point` | view point of the event |
| domEvent | `Event` | dom event |

</div>
</details>

<details><summary>dblclick</summary>
<div>
<br/>

鼠标双击图形时触发

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | dblclick |
| target | `Geometry` | the Geometry fires event |
| coordinate | `Coordinate` | coordinate of the event |
| containerPoint | `Point` | container point of the event |
| viewPoint | `Point` | view point of the event |
| domEvent | `Event` | dom event |

</div>
</details>

<details><summary>contextmenu</summary>
<div>
<br/>

鼠标右键点击图形时触发

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | contextmenu |
| target | `Geometry` | the Geometry fires event |
| coordinate | `Coordinate` | coordinate of the event |
| containerPoint | `Point` | container point of the event |
| viewPoint | `Point` | view point of the event |
| domEvent | `Event` | dom event |

</div>
</details>

<details><summary>touchstart</summary>
<div>
<br/>

手指触摸图形时触发

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | touchstart |
| target | `Geometry` | the Geometry fires event |
| coordinate | `Coordinate` | coordinate of the event |
| containerPoint | `Point` | container point of the event |
| viewPoint | `Point` | view point of the event |
| domEvent | `Event` | dom event |

</div>
</details>

<details><summary>touchmove</summary>
<div>
<br/>

手指在图形上滑动时触发

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | touchmove |
| target | `Geometry` | the Geometry fires event |
| coordinate | `Coordinate` | coordinate of the event |
| containerPoint | `Point` | container point of the event |
| viewPoint | `Point` | view point of the event |
| domEvent | `Event` | dom event |

</div>
</details>

<details><summary>touchend</summary>
<div>
<br/>

手指在图形上抬起时触发

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | touchend |
| target | `Geometry` | the Geometry fires event |
| coordinate | `Coordinate` | coordinate of the event |
| containerPoint | `Point` | container point of the event |
| viewPoint | `Point` | view point of the event |
| domEvent | `Event` | dom event |

</div>
</details>

<details><summary>mouseenter</summary>
<div>
<br/>

鼠标进入图形时触发

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | mouseenter |
| target | `Geometry` | the geometry fires mouseenter |
| coordinate | `Coordinate` | coordinate of the event |
| containerPoint | `Point` | container point of the event |
| viewPoint | `Point` | view point of the event |
| domEvent | `Event` | dom event |

</div>
</details>

<details><summary>mouseover</summary>
<div>
<br/>

鼠标移到图形上方时触发

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | mouseover |
| target | `Geometry` | the geometry fires mouseover |
| coordinate | `Coordinate` | coordinate of the event |
| containerPoint | `Point` | container point of the event |
| viewPoint | `Point` | view point of the event |
| domEvent | `Event` | dom event |

</div>
</details>

<details><summary>mouseout</summary>
<div>
<br/>

鼠标移出图形时触发

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | mouseout |
| target | `Geometry` | the geometry fires mouseout |
| coordinate | `Coordinate` | coordinate of the event |
| containerPoint | `Point` | container point of the event |
| viewPoint | `Point` | view point of the event |
| domEvent | `Event` | dom event |

</div>
</details>

<details><summary>openmenu</summary>
<div>
<br/>

在 geometry 上右键唤出菜单时触发

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | openmenu |
| target | `Geometry` | the geometry fires the event |

</div>
</details>

<details><summary>closemenu</summary>
<div>
<br/>

geometry 的右键菜单关闭时触发

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | closemenu |
| target | `Geometry` | the geometry fires the event |

</div>
</details>

<details><summary>removemenu</summary>
<div>
<br/>

geometry 的右键菜单被移除后触发

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | removemenu |
| target | `Geometry` | the geometry fires the event |

</div>
</details>
