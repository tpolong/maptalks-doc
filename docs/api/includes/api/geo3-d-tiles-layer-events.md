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
