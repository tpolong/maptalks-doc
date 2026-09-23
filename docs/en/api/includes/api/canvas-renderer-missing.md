<details><summary>loadTile(args)</summary>
<div>
<br/>

Create the tile canvas and call layer.drawTile to paint it, then run onTileLoad or onTileError.

Parameters:

* args `any[]`

</div>
</details>

<details><summary>isDrawable()</summary>
<div>
<br/>

Whether the renderer can draw; false and a warning when the map is pitched, as canvas cannot render pitch.

Returns:

* `boolean`

</div>
</details>

<details><summary>clipCanvas(context)</summary>
<div>
<br/>

Clip the canvas by the layer mask when maskClip is on, returning whether clipping occurred.

Parameters:

* context `Any`

Returns:

* `boolean`

</div>
</details>

<details><summary>onRemove()</summary>
<div>
<br/>

Callback on renderer removal; it clears the canvas and releases the tile caches.

</div>
</details>

<details><summary>drawTile(tileInfo, tileImage, parentContext?)</summary>
<div>
<br/>

Draw a tile image onto the canvas context with its position, opacity and map rotation.

Parameters:

* tileInfo `Tile['info']`
* tileImage `Tile['image']`
* parentContext (optional) `RenderContext`

</div>
</details>
