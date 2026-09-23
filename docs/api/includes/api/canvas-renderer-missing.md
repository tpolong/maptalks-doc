<details><summary>loadTile(args)</summary>
<div>
<br/>

创建瓦片 canvas 并调用 layer.drawTile 绘制

参数：

* args `any[]`

</div>
</details>

<details><summary>isDrawable()</summary>
<div>
<br/>

判断渲染器能否绘制，map 有 pitch 时返回 false 并告警清空 canvas

返回：

* `boolean`

</div>
</details>

<details><summary>clipCanvas(context)</summary>
<div>
<br/>

按 layer 的 mask 与 maskClip 裁剪 canvas，返回是否执行了裁剪

参数：

* context `Any`

返回：

* `boolean`

</div>
</details>

<details><summary>onRemove()</summary>
<div>
<br/>

渲染器移除时的回调，先清空 canvas 再释放瓦片缓存

</div>
</details>

<details><summary>drawTile(tileInfo, tileImage, parentContext?)</summary>
<div>
<br/>

将瓦片图像按位置、透明度与地图旋转绘制到当前 canvas 上下文

参数：

* tileInfo `Tile['info']`
* tileImage `Tile['image']`
* parentContext（可选） `RenderContext`

</div>
</details>
