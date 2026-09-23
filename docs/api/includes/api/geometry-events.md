<details><summary>positionchange</summary>
<div>
<br/>

positionchange event.

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | positionchange |
| target | `Geometry` | the geometry fires the event |

</div>
</details>

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

changed geometry shape event, fired when drag end to change geometry shape.

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

changed geometry shape event, fired when edit control vertex  remove

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

fired when geometry's animation ended.

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

fired when geometry is animating.

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

fired when geometry's animation start.

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

start edit event

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

end edit event

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

redo edit event

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

undo edit event

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

cancel edit event

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

<details><summary>idchange</summary>
<div>
<br/>

idchange event.

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | idchange |
| target | `Geometry` | the geometry fires the event |
| old | `String|Number` | value of the old id |
| new | `String|Number` | value of the new id |

</div>
</details>

<details><summary>propertieschange</summary>
<div>
<br/>

propertieschange event, thrown when geometry's properties is changed.

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | propertieschange |
| target | `Geometry` | the geometry fires the event |
| old | `String|Number` | value of the old properties |
| new | `String|Number` | value of the new properties |

</div>
</details>

<details><summary>symbolchange</summary>
<div>
<br/>

symbolchange event.

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | symbolchange |
| target | `Geometry` | the geometry fires the event |
| properties | `Object` | symbol properties to update if has |

</div>
</details>

<details><summary>show</summary>
<div>
<br/>

show event

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | show |
| target | `Geometry` | the geometry fires the event |

</div>
</details>

<details><summary>hide</summary>
<div>
<br/>

hide event

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | hide |
| target | `Geometry` | the geometry fires the event |

</div>
</details>

<details><summary>zindexchange</summary>
<div>
<br/>

层级改变事件，当几何图形层级发生改变将会触发

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | zindexchange |
| target | `Geometry` | the geometry fires the event |
| old | `Number` | old zIndex |
| new | `Number` | new zIndex |

</div>
</details>

<details><summary>shapechange</summary>
<div>
<br/>

shapechange event.

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | shapechange |
| target | `Geometry` | the geometry fires the event |

</div>
</details>

<details><summary>removestart</summary>
<div>
<br/>

removestart event.

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | removestart |
| target | `Geometry` | the geometry fires the event |

</div>
</details>

<details><summary>remove</summary>
<div>
<br/>

remove event.

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | remove |
| target | `Geometry` | the geometry fires the event |

</div>
</details>

<details><summary>removeend</summary>
<div>
<br/>

removeend event.

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | removeend |
| target | `Geometry` | the geometry fires the event |

</div>
</details>

<details><summary>shapechange</summary>
<div>
<br/>

shapechange 事件。

</div>
</details>

<details><summary>mousedown</summary>
<div>
<br/>

mousedown event

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

mouseup event

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

mousemove event

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

click event

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

dblclick event

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

contextmenu event

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

touchstart event

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

touchmove event

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

touchend event

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

mouseenter event for geometry

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

mouseover event for geometry

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

mouseout event for geometry

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

openmenu event

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

closemenu event

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

removemenu event

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | removemenu |
| target | `Geometry` | the geometry fires the event |

</div>
</details>
