<details><summary>createElOn(tagName, style, container)</summary>
<div>
<br/>

Create a html element on the specified container

Parameters:

* tagName `string`
* style `string` css styles
* container `HTMLElement`

</div>
</details>

<details><summary>doRemove(type, callback?)</summary>
<div>
<br/>

Remove the listener callback of one event type from the dom element

Parameters:

* type `Any`
* callback (optional) `Any`

</div>
</details>

<details><summary>listensDomEvent(obj, type, handler)</summary>
<div>
<br/>

Check if event type of the dom is listened by the handler

Parameters:

* obj `HTMLElement | Document` dom element to check
* type `string` event
* handler `Function` the listening function

Returns:

* `Number` - the handler's index in the listener chain, returns -1 if not.

</div>
</details>

<details><summary>preventSelection(dom)</summary>
<div>
<br/>

Prevent text selection and drag selection on the dom element

Parameters:

* dom `Any`

</div>
</details>

<details><summary>getEventContainerPoint(ev, dom)</summary>
<div>
<br/>

Get event's position from the top-left corner of the dom container

Parameters:

* ev `MouseEvent | TouchEvent` event
* dom `HTMLElement`

</div>
</details>

<details><summary>getClass(el)</summary>
<div>
<br/>

Get dom's css class

Parameters:

* el `HTMLElement` css class

Returns:

* `string`

</div>
</details>

<details><summary>setTransformMatrix(el, m)</summary>
<div>
<br/>

Write the matrix text to the dom css transform, skipping when it is identical

Parameters:

* el `Any`
* m `Any`

</div>
</details>

<details><summary>removeTransform(el)</summary>
<div>
<br/>

Remove the css transform previously set on the dom element

Parameters:

* el `Any`

</div>
</details>

<details><summary>isHTML(str)</summary>
<div>
<br/>

Whether the string is HTML text containing tags

Parameters:

* str `string`

</div>
</details>

<details><summary>getDomRuler(tag)</summary>
<div>
<br/>

Create a hidden element positioned off screen to use as a measuring ruler

Parameters:

* tag `any`

</div>
</details>

<details><summary>isMoveEvent(type?)</summary>
<div>
<br/>

Whether the event type is a move event, that is mousemove or touchmove

Parameters:

* type (optional) `string`

</div>
</details>

<details><summary>isMousemoveEventBlocked(target, mousemoveThrottleTime)</summary>
<div>
<br/>

Whether the mousemove should be ignored by throttle time, and record its time

Parameters:

* target `HTMLElement | any`
* mousemoveThrottleTime `number`

</div>
</details>
