<details><summary>getAltitude()</summary>
<div>
<br/>

获取图层高程，OverlayLayer 固定返回 0

</div>
</details>

<details><summary>getGeometryById(id)</summary>
<div>
<br/>

通过 id 获取 geometry

参数：

* id `string | number` id of the geometry

返回：

* `Geometry`

</div>
</details>

<details><summary>getGeometries(filter?)</summary>
<div>
<br/>

获取所有geometries，如果提供 filter() 方法,则根据方法返回

参数：

* filter（可选） `(geo: Geometry) => boolean, context?: any` =undefined   - a function to filter the geometries

返回：

* `Array<Geometry>`

</div>
</details>

<details><summary>getFirstGeometry()</summary>
<div>
<br/>

获取第一个geometry, geometry 位于底部

返回：

* `Any` first geometry

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

<details><summary>getCount()</summary>
<div>
<br/>

获取 geometries 个数

Get count of the geometries

返回：

* `Any` count

</div>
</details>

<details><summary>getExtent()</summary>
<div>
<br/>

获取 geometries 的 extent, 如果 layer 为空,返回 null

返回：

* `Extent` - extent of the layer

</div>
</details>

<details><summary>forEach(fn)</summary>
<div>
<br/>

按顺序为图层中的每个 geometry 执行一次提供的回调。

参数：

* fn `(geo: Geometry, index: number) => void, context?: any` a callback function

返回：

* `Any` this

</div>
</details>

<details><summary>filter(fn)</summary>
<div>
<br/>

创建一个包含所有通过由提供的函数实现的测试的 geometries 的 GeometryCollection。

参数：

* fn `(geo: Geometry) => boolean, context?: any` Function to test each geometry

返回：

* `Any` A GeometryCollection with all the geometries that pass the test

</div>
</details>

<details><summary>isEmpty()</summary>
<div>
<br/>

layer 是否为空

返回：

* `Boolean`

</div>
</details>

<details><summary>addGeometry(geometries, fitView?)</summary>
<div>
<br/>

为 layer 添加 geometries

参数：

* geometries `Geometry | Array<Geometry>` one or more geometries
* fitView（可选） `boolean | addGeometryFitViewOptions` =false                                         - automatically set the map to a fit center and zoom for the geometries

返回：

* `Any` this

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

<details><summary>removeGeometry(geometries)</summary>
<div>
<br/>

移除一个或多个geometries

参数：

* geometries `Geometry | Geometry[]` geometry ids or geometries to remove

返回：

* `Any` this

</div>
</details>

<details><summary>clear()</summary>
<div>
<br/>

清除 layer

返回：

* `Any` this

</div>
</details>

<details><summary>getStyle()</summary>
<div>
<br/>

获取 layer 的 style

返回：

* `Any` layer's style

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

<details><summary>removeStyle()</summary>
<div>
<br/>

移除 style

返回：

* `Any` this

触发事件：

* `OverlayLayer#removestyle`

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

<details><summary>hide()</summary>
<div>
<br/>

隐藏图层并通知图层内所有几何体隐藏

返回：

* `this`

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
