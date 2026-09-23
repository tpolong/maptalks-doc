<details><summary>on(eventsOn, handler, context?)</summary>
<div>
<br/>

Register a handler function to be called whenever this event is fired.

Parameters:

* eventsOn `string | EventRecords` event types to register, seperated by space if more than one.
* handler `HandlerFn` handler function to be called
* context (optional) `any` the context of the handler

</div>
</details>

<details><summary>addEventListener(args)</summary>
<div>
<br/>

Alias for on

Parameters:

* args `Any`

</div>
</details>

<details><summary>once(eventTypes, handler, context?)</summary>
<div>
<br/>

Same as on, except the listener will only get fired once and then removed.

Parameters:

* eventTypes `string | EventRecords` event types to register, seperated by space if more than one.
* handler `HandlerFn` listener handler
* context (optional) `any` the context of the handler

</div>
</details>

<details><summary>off(eventsOff, handler, context?)</summary>
<div>
<br/>

Unregister the event handler for the specified event types.

Parameters:

* eventsOff `string | EventRecords` event types to unregister, seperated by space if more than one.
* handler `HandlerFn` listener handler
* context (optional) `any` the context of the handler

</div>
</details>

<details><summary>removeEventListener(args)</summary>
<div>
<br/>

Alias for off

Parameters:

* args `Any`

</div>
</details>

<details><summary>listens(eventType, handler?, context?)</summary>
<div>
<br/>

Returns listener's count registered for the event type.

Parameters:

* eventType `string` an event type
* handler (optional) `HandlerFn` listener function
* context (optional) `any` the context of the handler

Returns:

* `number`

</div>
</details>

<details><summary>getListeningEvents()</summary>
<div>
<br/>

Get all the listening event types

</div>
</details>

<details><summary>copyEventListeners(target)</summary>
<div>
<br/>

Copy all the event listener to the target object

Parameters:

* target `EventableMixin` target object to copy to.

</div>
</details>

<details><summary>fire(eventType, param?)</summary>
<div>
<br/>

Fire an event, causing all handlers for that event name to run.

Parameters:

* eventType `string` an event type to fire
* param (optional) `BaseEventParamsType` parameters for the listener function.

</div>
</details>
