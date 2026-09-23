<details><summary>addInitHook(fn, args)</summary>
<div>
<br/>

Add an init hook, which will be called when the object is initiated. <br/>
It is useful in plugin developing to do things when creating objects without changing class's constructor.

Parameters:

* fn `Function | string`
* args `Any`

</div>
</details>

<details><summary>include(sources)</summary>
<div>
<br/>

Mixin the specified objects into the class as prototype properties or methods.

Parameters:

* sources `any[]`

</div>
</details>

<details><summary>mergeOptions(options)</summary>
<div>
<br/>

Mixin options with the class's default options.

Parameters:

* options `ClassOptions`

</div>
</details>
