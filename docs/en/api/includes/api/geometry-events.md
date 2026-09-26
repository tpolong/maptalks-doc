<details><summary>positionchange</summary>
<div>
<br/>

positionchange event.

Event properties:

| Property | Type | Value |
| --- | :-: | --- |
| type | `String` | positionchange |
| target | `Geometry` | the geometry fires the event |

</div>
</details>

<details><summary>add</summary>
<div>
<br/>

add event.

Event properties:

| Property | Type | Value |
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

Event properties:

| Property | Type | Value |
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

Event properties:

| Property | Type | Value |
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

Event properties:

| Property | Type | Value |
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

Event properties:

| Property | Type | Value |
| --- | :-: | --- |
| type | `String` | show |
| target | `Geometry` | the geometry fires the event |

</div>
</details>

<details><summary>hide</summary>
<div>
<br/>

hide event

Event properties:

| Property | Type | Value |
| --- | :-: | --- |
| type | `String` | hide |
| target | `Geometry` | the geometry fires the event |

</div>
</details>

<details><summary>zindexchange</summary>
<div>
<br/>

zindexchange event, fired when geometry's zIndex is changed.

Event properties:

| Property | Type | Value |
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

Fired when the shape of a geometry changes.

Event properties:

| Property | Type | Value |
| --- | :-: | --- |
| type | `String` | shapechange |
| target | `Geometry` | the geometry fires the event |

</div>
</details>

<details><summary>removestart</summary>
<div>
<br/>

removestart event.

Event properties:

| Property | Type | Value |
| --- | :-: | --- |
| type | `String` | removestart |
| target | `Geometry` | the geometry fires the event |

</div>
</details>

<details><summary>remove</summary>
<div>
<br/>

remove event.

Event properties:

| Property | Type | Value |
| --- | :-: | --- |
| type | `String` | remove |
| target | `Geometry` | the geometry fires the event |

</div>
</details>

<details><summary>removeend</summary>
<div>
<br/>

removeend event.

Event properties:

| Property | Type | Value |
| --- | :-: | --- |
| type | `String` | removeend |
| target | `Geometry` | the geometry fires the event |

</div>
</details>

<details><summary>shapechange</summary>
<div>
<br/>

Fired when the shape of a geometry changes.

</div>
</details>

<details><summary>handledragstart</summary>
<div>
<br/>

change geometry shape start event, fired when drag to change geometry shape.

Event properties:

| Property | Type | Value |
| --- | :-: | --- |
| type | `String` | handledragstart |
| target | `Geometry` | the geometry fires the event |

</div>
</details>

<details><summary>handledragging</summary>
<div>
<br/>

changing geometry shape event, fired when dragging to change geometry shape.

Event properties:

| Property | Type | Value |
| --- | :-: | --- |
| type | `String` | handledragging |
| target | `Geometry` | the geometry fires the event |

</div>
</details>

<details><summary>handledragend</summary>
<div>
<br/>

changed geometry shape event, fired when drag end to change geometry shape.

Event properties:

| Property | Type | Value |
| --- | :-: | --- |
| type | `String` | handledragend |
| target | `Geometry` | the geometry fires the event |

</div>
</details>

<details><summary>handleremove</summary>
<div>
<br/>

changed geometry shape event, fired when edit control vertex  remove

Event properties:

| Property | Type | Value |
| --- | :-: | --- |
| type | `String` | handleremove |
| target | `Geometry` | the geometry fires the event |

</div>
</details>

<details><summary>editrecord</summary>
<div>
<br/>

edit record event, fired when an edit happend and being recorded

Event properties:

| Property | Type | Value |
| --- | :-: | --- |
| type | `String` | editrecord |
| target | `Geometry` | the geometry fires the event |

</div>
</details>

<details><summary>animateend</summary>
<div>
<br/>

fired when geometry's animation ended.

Event properties:

| Property | Type | Value |
| --- | :-: | --- |
| type | `String` | animateend |
| target | `Geometry` | the geometry fires the event |

</div>
</details>

<details><summary>animating</summary>
<div>
<br/>

fired when geometry is animating.

Event properties:

| Property | Type | Value |
| --- | :-: | --- |
| type | `String` | animating |
| target | `Geometry` | the geometry fires the event |

</div>
</details>

<details><summary>animatestart</summary>
<div>
<br/>

fired when geometry's animation start.

Event properties:

| Property | Type | Value |
| --- | :-: | --- |
| type | `String` | animatestart |
| target | `Geometry` | the geometry fires the event |

</div>
</details>

<details><summary>dragstart</summary>
<div>
<br/>

drag start event

Event properties:

| Property | Type | Value |
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

dragging event

Event properties:

| Property | Type | Value |
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

dragend event

Event properties:

| Property | Type | Value |
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

Event properties:

| Property | Type | Value |
| --- | :-: | --- |
| type | `String` | editstart |
| target | `Geometry` | the geometry fires the event |

</div>
</details>

<details><summary>editend</summary>
<div>
<br/>

end edit event

Event properties:

| Property | Type | Value |
| --- | :-: | --- |
| type | `String` | editend |
| target | `Geometry` | the geometry fires the event |

</div>
</details>

<details><summary>redoedit</summary>
<div>
<br/>

redo edit event

Event properties:

| Property | Type | Value |
| --- | :-: | --- |
| type | `String` | redoedit |
| target | `Geometry` | the geometry fires the event |

</div>
</details>

<details><summary>undoedit</summary>
<div>
<br/>

undo edit event

Event properties:

| Property | Type | Value |
| --- | :-: | --- |
| type | `String` | undoedit |
| target | `Geometry` | the geometry fires the event |

</div>
</details>

<details><summary>canceledit</summary>
<div>
<br/>

cancel edit event

Event properties:

| Property | Type | Value |
| --- | :-: | --- |
| type | `String` | canceledit |
| target | `Geometry` | the geometry fires the event |

</div>
</details>

<details><summary>mousedown</summary>
<div>
<br/>

mousedown event

Event properties:

| Property | Type | Value |
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

Event properties:

| Property | Type | Value |
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

Event properties:

| Property | Type | Value |
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

Event properties:

| Property | Type | Value |
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

Event properties:

| Property | Type | Value |
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

Event properties:

| Property | Type | Value |
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

Event properties:

| Property | Type | Value |
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

Event properties:

| Property | Type | Value |
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

Event properties:

| Property | Type | Value |
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

Event properties:

| Property | Type | Value |
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

Event properties:

| Property | Type | Value |
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

Event properties:

| Property | Type | Value |
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

Event properties:

| Property | Type | Value |
| --- | :-: | --- |
| type | `String` | openmenu |
| target | `Geometry` | the geometry fires the event |

</div>
</details>

<details><summary>closemenu</summary>
<div>
<br/>

closemenu event

Event properties:

| Property | Type | Value |
| --- | :-: | --- |
| type | `String` | closemenu |
| target | `Geometry` | the geometry fires the event |

</div>
</details>

<details><summary>removemenu</summary>
<div>
<br/>

removemenu event

Event properties:

| Property | Type | Value |
| --- | :-: | --- |
| type | `String` | removemenu |
| target | `Geometry` | the geometry fires the event |

</div>
</details>
