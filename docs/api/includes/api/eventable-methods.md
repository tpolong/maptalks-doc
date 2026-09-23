<details><summary>on(eventsOn, handler, context?)</summary>
<div>
<br/>

注册事件的监听

参数：

* eventsOn `string | EventRecords` event types to register, seperated by space if more than one.
* handler `HandlerFn` handler function to be called
* context（可选） `any` the context of the handler

</div>
</details>

<details><summary>addEventListener(args)</summary>
<div>
<br/>

on方法的alias

参数：

* args `Any`

</div>
</details>

<details><summary>once(eventTypes, handler, context?)</summary>
<div>
<br/>

与on方法作用类似，但监听方法只会执行一次

参数：

* eventTypes `string | EventRecords` event types to register, seperated by space if more than one.
* handler `HandlerFn` listener handler
* context（可选） `any` the context of the handler

</div>
</details>

<details><summary>off(eventsOff, handler, context?)</summary>
<div>
<br/>

取消对事件的监听

参数：

* eventsOff `string | EventRecords` event types to unregister, seperated by space if more than one.
* handler `HandlerFn` listener handler
* context（可选） `any` the context of the handler

</div>
</details>

<details><summary>removeEventListener(args)</summary>
<div>
<br/>

off方法的别名 alias

参数：

* args `Any`

</div>
</details>

<details><summary>listens(eventType, handler?, context?)</summary>
<div>
<br/>

是否监听了指定的事件

参数：

* eventType `string` an event type
* handler（可选） `HandlerFn` listener function
* context（可选） `any` the context of the handler

返回：

* `number`

</div>
</details>

<details><summary>getListeningEvents()</summary>
<div>
<br/>

返回所有监听的事件

</div>
</details>

<details><summary>copyEventListeners(target)</summary>
<div>
<br/>

把事件监听拷贝给给定的目标对象

参数：

* target `EventableMixin` target object to copy to.

</div>
</details>

<details><summary>fire(eventType, param?)</summary>
<div>
<br/>

触发一个事件，并执行所有监听该事件的handler方法

参数：

* eventType `string` an event type to fire
* param（可选） `BaseEventParamsType` parameters for the listener function.

</div>
</details>
