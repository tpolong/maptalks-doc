<details><summary>animating</summary>
<div>
<br/>

fired when map is animating.  (panning, zooming, rotating)

Event properties:

| Property | Type | Value |
| --- | :-: | --- |
| type | `String` | animating |
| target | `Map` | the map fires the event |

</div>
</details>

<details><summary>animateinterrupted</summary>
<div>
<br/>

fired when map's animation is interrupted by mouse event or else.

Event properties:

| Property | Type | Value |
| --- | :-: | --- |
| type | `String` | animateinterrupted |
| target | `Map` | the map fires the event |

</div>
</details>

<details><summary>animateend</summary>
<div>
<br/>

fired when map's animation ended (panning, zooming, rotating).

Event properties:

| Property | Type | Value |
| --- | :-: | --- |
| type | `String` | animateend |
| target | `Map` | the map fires the event |

</div>
</details>

<details><summary>animatestart</summary>
<div>
<br/>

fired when map starts to animate (panning, zooming, rotating).

Event properties:

| Property | Type | Value |
| --- | :-: | --- |
| type | `String` | animatestart |
| target | `Map` | the map fires the event |

</div>
</details>

<details><summary>fovchange</summary>
<div>
<br/>

Fired after the fov of the map changed.

</div>
</details>

<details><summary>rotatestart</summary>
<div>
<br/>

Fired when the map starts to rotate.

</div>
</details>

<details><summary>rotate</summary>
<div>
<br/>

Deprecated alias of rotateend, fired when the map bearing changes.

</div>
</details>

<details><summary>rotateend</summary>
<div>
<br/>

Fired when the map finishes rotating.

</div>
</details>

<details><summary>pitchstart</summary>
<div>
<br/>

Fired when the map starts to change its pitch.

</div>
</details>

<details><summary>pitch</summary>
<div>
<br/>

pitch event, alias of pitchend, deprecated

Event properties:

| Property | Type | Value |
| --- | :-: | --- |
| type | `String` | pitch |
| target | `Map` | the map fires event |
| from | `Number` | pitch from |
| to | `Number` | pitch to |

</div>
</details>

<details><summary>pitchend</summary>
<div>
<br/>

pitchend event

Event properties:

| Property | Type | Value |
| --- | :-: | --- |
| type | `String` | pitchend |
| target | `Map` | the map fires event |
| from | `Number` | pitchend from |
| to | `Number` | pitchend to |

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
| target | `Map` | the map fires event |
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
| target | `Map` | the map fires event |
| coordinate | `Coordinate` | coordinate of the event |
| containerPoint | `Point` | container point of the event |
| viewPoint | `Point` | view point of the event |
| domEvent | `Event` | dom event |

</div>
</details>

<details><summary>mouseover</summary>
<div>
<br/>

mouseover event

Event properties:

| Property | Type | Value |
| --- | :-: | --- |
| type | `String` | mouseover |
| target | `Map` | the map fires event |
| coordinate | `Coordinate` | coordinate of the event |
| containerPoint | `Point` | container point of the event |
| viewPoint | `Point` | view point of the event |
| domEvent | `Event` | dom event |

</div>
</details>

<details><summary>mouseout</summary>
<div>
<br/>

mouseout event

Event properties:

| Property | Type | Value |
| --- | :-: | --- |
| type | `String` | mouseout |
| target | `Map` | the map fires event |
| coordinate | `Coordinate` | coordinate of the event |
| containerPoint | `Point` | container point of the event |
| viewPoint | `Point` | view point of the event |
| domEvent | `Event` | dom event |

</div>
</details>

<details><summary>mouseenter</summary>
<div>
<br/>

mouseenter event

Event properties:

| Property | Type | Value |
| --- | :-: | --- |
| type | `String` | mouseenter |
| target | `Map` | the map fires event |
| coordinate | `Coordinate` | coordinate of the event |
| containerPoint | `Point` | container point of the event |
| viewPoint | `Point` | view point of the event |
| domEvent | `Event` | dom event |

</div>
</details>

<details><summary>mouseleave</summary>
<div>
<br/>

mouseleave event

Event properties:

| Property | Type | Value |
| --- | :-: | --- |
| type | `String` | mouseleave |
| target | `Map` | the map fires event |
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
| target | `Map` | the map fires event |
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
| target | `Map` | the map fires event |
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
| target | `Map` | the map fires event |
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
| target | `Map` | the map fires event |
| coordinate | `Coordinate` | coordinate of the event |
| containerPoint | `Point` | container point of the event |
| viewPoint | `Point` | view point of the event |
| domEvent | `Event` | dom event |

</div>
</details>

<details><summary>keypress</summary>
<div>
<br/>

keypress event

Event properties:

| Property | Type | Value |
| --- | :-: | --- |
| type | `String` | keypress |
| target | `Map` | the map fires event |
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
| target | `Map` | the map fires event |
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
| target | `Map` | the map fires event |
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
| target | `Map` | the map fires event |
| coordinate | `Coordinate` | coordinate of the event |
| containerPoint | `Point` | container point of the event |
| viewPoint | `Point` | view point of the event |
| domEvent | `Event` | dom event |

</div>
</details>

<details><summary>drop</summary>
<div>
<br/>

drop event

Event properties:

| Property | Type | Value |
| --- | :-: | --- |
| type | `String` | drop |
| target | `Map` | the map fires event |
| coordinate | `Coordinate` | coordinate of the event |
| containerPoint | `Point` | container point of the event |
| viewPoint | `Point` | view point of the event |
| domEvent | `Event` | dom event |

</div>
</details>

<details><summary>fullscreenstart</summary>
<div>
<br/>

fullscreenstart event

Event properties:

| Property | Type | Value |
| --- | :-: | --- |
| type | `String` | fullscreenstart |
| target | `Map` | the map fires event |

</div>
</details>

<details><summary>fullscreenend</summary>
<div>
<br/>

fullscreenend event

Event properties:

| Property | Type | Value |
| --- | :-: | --- |
| type | `String` | fullscreenend |
| target | `Map` | the map fires event |

</div>
</details>

<details><summary>cancelfullscreen</summary>
<div>
<br/>

cancelfullscreen event

Event properties:

| Property | Type | Value |
| --- | :-: | --- |
| type | `String` | cancelfullscreen |
| target | `Map` | the map fires event |

</div>
</details>

<details><summary>viewchange</summary>
<div>
<br/>

viewchange event

Event properties:

| Property | Type | Value |
| --- | :-: | --- |
| type | `String` | viewchange |
| target | `Map` | map fires the event |
| old | `Object` | old view |
| new | `Point` | new view |

</div>
</details>

<details><summary>zoomstart</summary>
<div>
<br/>

zoomstart event

Event properties:

| Property | Type | Value |
| --- | :-: | --- |
| type | `String` | zoomstart |
| target | `Map` | the map fires event |
| from | `Number` | zoom level zooming from |
| to | `Number` | zoom level zooming to |

</div>
</details>

<details><summary>zooming</summary>
<div>
<br/>

zooming event

Event properties:

| Property | Type | Value |
| --- | :-: | --- |
| type | `String` | zooming |
| target | `Map` | the map fires event |
| from | `Number` | zoom level zooming from |
| to | `Number` | zoom level zooming to |

</div>
</details>

<details><summary>zoomend</summary>
<div>
<br/>

zoomend event

Event properties:

| Property | Type | Value |
| --- | :-: | --- |
| type | `String` | zoomend |
| target | `Map` | the map fires event |
| from | `Number` | zoom level zooming from |
| to | `Number` | zoom level zooming to |

</div>
</details>

<details><summary>spatialreferencechange</summary>
<div>
<br/>

spatialreferencechange event, fired when map's spatial reference is updated.

Event properties:

| Property | Type | Value |
| --- | :-: | --- |
| type | `String` | spatialreferencechange |
| target | `Map` | map |
| old | `Map` | the old spatial reference |
| new | `Map` | the new spatial reference changed to |

</div>
</details>

<details><summary>setbaselayer</summary>
<div>
<br/>

setbaselayer event, fired when base layer is set.

Event properties:

| Property | Type | Value |
| --- | :-: | --- |
| type | `String` | setbaselayer |
| target | `Map` | map |

</div>
</details>

<details><summary>baselayerchangestart</summary>
<div>
<br/>

baselayerchangestart event, fired when base layer is changed.

Event properties:

| Property | Type | Value |
| --- | :-: | --- |
| type | `String` | baselayerchangestart |
| target | `Map` | map |

</div>
</details>

<details><summary>baselayerchangeend</summary>
<div>
<br/>

baselayerchangeend event, fired when base layer is changed.

Event properties:

| Property | Type | Value |
| --- | :-: | --- |
| type | `String` | baselayerchangeend |
| target | `Map` | map |

</div>
</details>

<details><summary>baselayerload</summary>
<div>
<br/>

baselayerload event, fired when base layer is loaded.

Event properties:

| Property | Type | Value |
| --- | :-: | --- |
| type | `String` | baselayerload |
| target | `Map` | map |

</div>
</details>

<details><summary>baselayerremove</summary>
<div>
<br/>

baselayerremove event, fired when base layer is removed.

Event properties:

| Property | Type | Value |
| --- | :-: | --- |
| type | `String` | baselayerremove |
| target | `Map` | map |

</div>
</details>

<details><summary>addlayer</summary>
<div>
<br/>

addlayer event, fired when adding layers.

Event properties:

| Property | Type | Value |
| --- | :-: | --- |
| type | `String` | addlayer |
| target | `Map` | map |
| layers | `Layer[]` | layers to add |

</div>
</details>

<details><summary>removelayer</summary>
<div>
<br/>

removelayer event, fired when removing layers.

Event properties:

| Property | Type | Value |
| --- | :-: | --- |
| type | `String` | removelayer |
| target | `Map` | map |
| layers | `Layer[]` | layers to remove |

</div>
</details>

<details><summary>resize</summary>
<div>
<br/>

resize event when map container's size changes

Event properties:

| Property | Type | Value |
| --- | :-: | --- |
| type | `String` | resize |
| target | `Map` | map fires the event |

</div>
</details>

<details><summary>movestart</summary>
<div>
<br/>

movestart event

Event properties:

| Property | Type | Value |
| --- | :-: | --- |
| type | `String` | movestart |
| target | `Map` | map fires the event |
| coordinate | `Coordinate` | coordinate of the event |
| containerPoint | `Point` | container point of the event |
| viewPoint | `Point` | view point of the event |
| domEvent | `Event` | dom event |

</div>
</details>

<details><summary>moving</summary>
<div>
<br/>

moving event

Event properties:

| Property | Type | Value |
| --- | :-: | --- |
| type | `String` | moving |
| target | `Map` | map fires the event |
| coordinate | `Coordinate` | coordinate of the event |
| containerPoint | `Point` | container point of the event |
| viewPoint | `Point` | view point of the event |
| domEvent | `Event` | dom event |

</div>
</details>

<details><summary>moveend</summary>
<div>
<br/>

moveend event

Event properties:

| Property | Type | Value |
| --- | :-: | --- |
| type | `String` | moveend |
| target | `Map` | map fires the event |
| coordinate | `Coordinate` | coordinate of the event |
| containerPoint | `Point` | container point of the event |
| viewPoint | `Point` | view point of the event |
| domEvent | `Event` | dom event |

</div>
</details>

<details><summary>dragrotatestart</summary>
<div>
<br/>

dragrotatestart event

Event properties:

| Property | Type | Value |
| --- | :-: | --- |
| type | `String` | dragrotatestart |
| target | `Map` | map fires the event |
| coordinate | `Coordinate` | coordinate of the event |
| containerPoint | `Point` | container point of the event |
| viewPoint | `Point` | view point of the event |
| domEvent | `Event` | dom event |

</div>
</details>

<details><summary>dragrotating</summary>
<div>
<br/>

dragrotating event

Event properties:

| Property | Type | Value |
| --- | :-: | --- |
| type | `String` | dragrotating |
| target | `Map` | map fires the event |
| coordinate | `Coordinate` | coordinate of the event |
| containerPoint | `Point` | container point of the event |
| viewPoint | `Point` | view point of the event |
| domEvent | `Event` | dom event |

</div>
</details>

<details><summary>dragrotateend</summary>
<div>
<br/>

dragrotateend event

Event properties:

| Property | Type | Value |
| --- | :-: | --- |
| type | `String` | dragrotateend |
| target | `Map` | map fires the event |
| coordinate | `Coordinate` | coordinate of the event |
| containerPoint | `Point` | container point of the event |
| viewPoint | `Point` | view point of the event |
| domEvent | `Event` | dom event |

</div>
</details>

<details><summary>touchactstart</summary>
<div>
<br/>

touchactstart event

Event properties:

| Property | Type | Value |
| --- | :-: | --- |
| type | `String` | touchactstart |
| target | `Map` | the map fires event |

</div>
</details>

<details><summary>touchacting</summary>
<div>
<br/>

touchacting event

Event properties:

| Property | Type | Value |
| --- | :-: | --- |
| type | `String` | touchacting |
| target | `Map` | the map fires event |

</div>
</details>

<details><summary>touchactend</summary>
<div>
<br/>

touchactend event

Event properties:

| Property | Type | Value |
| --- | :-: | --- |
| type | `String` | touchactend |
| target | `Map` | the map fires event |

</div>
</details>

<details><summary>renderend</summary>
<div>
<br/>

renderend event, an event fired when map ends rendering.

Event properties:

| Property | Type | Value |
| --- | :-: | --- |
| type | `String` | renderend |
| target | `Map` | the map fires event |
| context | `CanvasRenderingContext2D` | canvas context |

</div>
</details>

<details><summary>renderstart</summary>
<div>
<br/>

renderstart event, an event fired when map starts to render.

Event properties:

| Property | Type | Value |
| --- | :-: | --- |
| type | `String` | renderstart |
| target | `Map` | the map fires event |
| context | `CanvasRenderingContext2D` | canvas context |

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
| target | `Map` | the Map fires the event |

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
| target | `Map` | the Map fires the event |

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
| target | `Map` | the Map fires the event |

</div>
</details>

<details><summary>syncworld</summary>
<div>
<br/>

Fired when the map center is out of the sphere and wrapped back into it.

</div>
</details>

<details><summary>remove</summary>
<div>
<br/>

Fired on each removed layer when the map removes its layers.

</div>
</details>

<details><summary>removestart</summary>
<div>
<br/>

Fired when the map starts to be removed.

</div>
</details>

<details><summary>removeend</summary>
<div>
<br/>

Fired after the map is completely removed.

</div>
</details>
