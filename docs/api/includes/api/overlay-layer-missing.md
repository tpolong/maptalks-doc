<details><summary>getAltitude()</summary>
<div>
<br/>

获取图层高程，OverlayLayer 固定返回 0

</div>
</details>

<details><summary>getLastGeometry()</summary>
<div>
<br/>

获取最后一个geometry, geometry 位于上部

返回：

* `Any` last geometry

</div>
</details>

<details><summary>getGeoMinZIndex()</summary>
<div>
<br/>

所有 geometries 最小的 zIndex

</div>
</details>

<details><summary>getGeoMaxZIndex()</summary>
<div>
<br/>

所有 geometries 最大的 zIndex

</div>
</details>

<details><summary>setStyle(style)</summary>
<div>
<br/>

layer 设置 style, 用样式符号对满足条件的 geometries进行样式修改
基于[mapbox-gl-js's style specification]， &#123;https://www.mapbox.com/mapbox-gl-js/style-spec/#types-filter&#125;.

参数：

* style `any | any[]` layer's style

返回：

* `Any` this

触发事件：

* `OverlayLayer#setstyle`

</div>
</details>

<details><summary>onAddGeometry(geo)</summary>
<div>
<br/>

几何体加入图层时按图层 style 设置其 symbol

参数：

* geo `Geometry`

</div>
</details>

<details><summary>onGeometryEvent(param?)</summary>
<div>
<br/>

响应几何体变化事件，同步图层缓存与 renderer

参数：

* param（可选） `HandlerFnResultType`

</div>
</details>
