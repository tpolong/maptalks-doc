<details><summary>tileload</summary>
<div>
<br/>

3dtiles 瓦片加载完成时触发

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | tileload |
| target | `Geo3DTilesLayer` | tile layer |
| node | `Object` | 3d tile node |

</div>
</details>

<details><summary>tileerror</summary>
<div>
<br/>

3dtiles 图层 tile 加载出错时触发

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | tileerror |
| target | `Geo3DTilesLayer` | tile layer |
| node | `Object` | 3d tile node |
| error | `Error` | error message |

</div>
</details>

<details><summary>rootready</summary>
<div>
<br/>

各 service 的根瓦片创建完成后触发

</div>
</details>

<details><summary>loadtileset</summary>
<div>
<br/>

tileset 加载并解析成瓦片树后触发

</div>
</details>

<details><summary>drawtiles</summary>
<div>
<br/>

每帧绘制完瓦片时触发

</div>
</details>

<details><summary>canvasisdirty</summary>
<div>
<br/>

本帧绘制出 3dtiles 瓦片时触发

</div>
</details>

<details><summary>contextcreate</summary>
<div>
<br/>

图层 webgl 渲染上下文创建完成时触发

</div>
</details>

<details><summary>workerready</summary>
<div>
<br/>

图层 worker 连接就绪时触发

</div>
</details>
