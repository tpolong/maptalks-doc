<details><summary>updatesymbol</summary>
<div>
<br/>

更新Layer的style中序号为index的symbol的updatesymbol事件。

参数属性：

| 属性名           |  类型           |   值 |
|  ------         | :----:  | ----  |
|type     | String          |   "updatesymbol"  |
|target   | GLTFLayer       |   this            |
|index    | Number          |   样式序号        |
|symbol   | Object          |   symbol对象      |

</div>
</details>

<details><summary>setstyle</summary>
<div>
<br/>

设置Layer的style后触发的事件（2026 源码补充）。

参数属性：

| 属性名           |  类型           |   值 |
|  ------         | :----:  | ----  |
|type     | String          |   "setstyle"  |
|target   | GLTFLayer       |   this            |
|style    | Object          |   设置后的图层样式（filter-symbol 数组或对象）      |

</div>
</details>

<details><summary>workerready</summary>
<div>
<br/>

worker准备就绪事件。

参数属性：

| 属性名           |  类型           |   值 |
|  ------         | :----:  | ----  |
|type     | String          |   "workerready"  |
|target   | GLTFLayer |   this     |

</div>
</details>

<details><summary>modelerror</summary>
<div>
<br/>

模型加载错误事件。

参数属性：

| 属性名           |  类型           |   值 |
|  ------         | :----:  | ----  |
|type     | String     |   "modelerror"  |
|target   | GLTFLayer  |   this     |
|url      | String     |   加载出错的模型url   |
|info     | Object     |   错误信息   |

</div>
</details>

<details><summary>modelload</summary>
<div>
<br/>

模型加载成功事件。

参数属性：

| 属性名           |  类型           |   值 |
|  ------         | :----:  | ----  |
|type     | String          |   "modelload"  |
|target   | GLTFLayer   |   this     |
|models   | String[]    | 成功加载的模型url   |

</div>
</details>