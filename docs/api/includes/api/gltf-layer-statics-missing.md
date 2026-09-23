<details><summary>initDefaultShader()</summary>
<div>
<br/>

注册 GLTFLayer 内置的 phong、pbr、depth、wireframe 等默认 shader

</div>
</details>

<details><summary>registerShader(name, type, config, uniforms)</summary>
<div>
<br/>

注册自定义 shader 到 gltf layer 的 shader 表

参数：

* name `Any`
* type `Any`
* config `Any`
* uniforms `Any`

</div>
</details>

<details><summary>removeShader(name)</summary>
<div>
<br/>

从 gltf layer 的 shader 表中移除指定名字的 shader

参数：

* name `Any`

</div>
</details>

<details><summary>getShaders()</summary>
<div>
<br/>

获取所有已注册 shader 的名字与 uniforms 列表

</div>
</details>

<details><summary>getShaderMap()</summary>
<div>
<br/>

获取 shader 名字到 shader 配置的映射表

</div>
</details>
