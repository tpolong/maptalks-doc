<details><summary>clear</summary>
<div>
<br/>

tile layer 被清空时触发

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | clear |
| target | `TileLayer` | tile layer |

</div>
</details>

<details><summary>tileload</summary>
<div>
<br/>

图层瓦片加载完成时触发

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | tileload |
| target | `TileLayer` | tile layer |
| tileInfo | `Object` | tile info |
| tileImage | `Image` | tile image |

</div>
</details>

<details><summary>tileerror</summary>
<div>
<br/>

tile 加载出错时触发

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | tileerror |
| target | `TileLayer` | tile layer |
| tileInfo | `Object` | tile info |

</div>
</details>

<details><summary>tiledelete</summary>
<div>
<br/>

图层瓦片从缓存中删除时触发

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | tiledelete |
| target | `TileLayer` | tile layer |
| tileInfo | `Object` | tile info |
| tileImage | `Image` | tile image |

</div>
</details>
