<details><summary>needToRedraw()</summary>
<div>
<br/>

判断图层是否需要重绘，地图旋转缩放或需强制渲染时返回 true

返回：

* `boolean`

</div>
</details>

<details><summary>isDrawable()</summary>
<div>
<br/>

是否为可绘制状态，有 pitch 时清空 canvas 并返回 false

返回：

* `boolean`

</div>
</details>

<details><summary>clipCanvas(context)</summary>
<div>
<br/>

裁剪 canvas 绘制区域，当前直接调用父类实现

参数：

* context `Any`

返回：

* `boolean`

</div>
</details>

<details><summary>clear()</summary>
<div>
<br/>

清空图层 canvas，并清除瓦片缓存

</div>
</details>

<details><summary>onRemove()</summary>
<div>
<br/>

图层移除时的生命周期回调，清空 canvas 与瓦片缓存

</div>
</details>

<details><summary>drawTile(tileInfo, tileImage, parentContext?)</summary>
<div>
<br/>

按瓦片位置、缩放与 bearing 把瓦片图像绘制到 canvas 上

参数：

* tileInfo `Tile['info']`
* tileImage `Tile['image']`
* parentContext（可选） `RenderContext`

</div>
</details>
