<details><summary>proxyOptions()</summary>
<div>
<br/>

Wraps options with a Proxy so direct assignment also triggers a config update.

</div>
</details>

<details><summary>callInitHooks()</summary>
<div>
<br/>

Visit and call all the init hooks defined on Class and its parents.

</div>
</details>

<details><summary>setOptions(options)</summary>
<div>
<br/>

Deprecated private method that writes options directly and warns to use config instead.

Parameters:

* options `ClassOptions`

</div>
</details>

<details><summary>config(conf?, value?)</summary>
<div>
<br/>

1. Return object's options if no parameter is provided. <br/>
2. update an option and enable/disable the handler if a handler with the same name existed.

Parameters:

* conf (optional) `string | ClassOptions` config to update
* value (optional) `any`

Returns:

* `ClassOptions | this`

</div>
</details>

<details><summary>onConfig(conf)</summary>
<div>
<br/>

Default callback when config is called

Parameters:

* conf `ClassOptions` updated options

</div>
</details>
