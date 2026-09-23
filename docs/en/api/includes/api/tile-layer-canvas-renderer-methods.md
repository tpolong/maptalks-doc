<details><summary>needToRedraw()</summary>
<div>
<br/>

Get whether the layer needs to redraw; true when rotating, zooming or forcing render

Returns:

* `boolean`

</div>
</details>

<details><summary>isDrawable()</summary>
<div>
<br/>

Whether the renderer can draw; clears the canvas and returns false when pitched

Returns:

* `boolean`

</div>
</details>

<details><summary>clipCanvas(context)</summary>
<div>
<br/>

Clip the canvas drawing area, currently calling the parent class implementation

Parameters:

* context `Any`

Returns:

* `boolean`

</div>
</details>

<details><summary>clear()</summary>
<div>
<br/>

Clear the layer canvas and its tile caches, then mark it to redraw

</div>
</details>

<details><summary>onRemove()</summary>
<div>
<br/>

Lifecycle callback on renderer removal; clears the canvas and the tile caches

</div>
</details>

<details><summary>drawTile(tileInfo, tileImage, parentContext?)</summary>
<div>
<br/>

Draw a tile image onto the canvas by tile position, scale and bearing

Parameters:

* tileInfo `Tile['info']`
* tileImage `Tile['image']`
* parentContext (optional) `RenderContext`

</div>
</details>
