<details><summary>addInitHook(fn, args)</summary>
<div>
<br/>

添加一个初始化钩子（init hook）方法，实例化时会被调用。
该方法一般用于插件开发，利用初始化钩子，子类无需重载父类的构造函数（constructor），就可以在实例化时执行一些必要的逻辑

参数：

* fn `Function | string`
* args `Any`

</div>
</details>

<details><summary>include(sources)</summary>
<div>
<br/>

将一个或多个，sources中定义的方法或属性，mixin到该类的prototype中

参数：

* sources `any[]`

</div>
</details>

<details><summary>mergeOptions(options)</summary>
<div>
<br/>

用参数中的options定义扩展默认的options

参数：

* options `ClassOptions`

</div>
</details>
