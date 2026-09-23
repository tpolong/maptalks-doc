<details><summary>getOutline()</summary>
<div>
<br/>

获取依据 geometry extent 生成的外框 polygon

返回：

* `null | Polygon`

</div>
</details>

<details><summary>getCenterInExtent(extent)</summary>
<div>
<br/>

获取具有给定范围的线串的交点的中心

参数：

* extent `Extent`

返回：

* `Coordinate` center, null if line doesn't intersect with extent

</div>
</details>

<details><summary>hasHoles()</summary>
<div>
<br/>

判断 polygon 是否带有洞

返回：

* `Boolean`

</div>
</details>

<details><summary>hasHoles()</summary>
<div>
<br/>

判断 polygon 是否带有洞

返回：

* `boolean`

</div>
</details>

<details><summary>getFirstCoordinate()</summary>
<div>
<br/>

获取几何图形第一个坐标点

返回：

* `Coordinate` First Coordinate

</div>
</details>

<details><summary>getLastCoordinate()</summary>
<div>
<br/>

获取几何图形最后一个坐标点

返回：

* `Coordinate` Last Coordinate

</div>
</details>

<details><summary>addTo(layer, fitview?)</summary>
<div>
<br/>

将几何图形添加到指定图层上

参数：

* layer `OverlayLayer` layer add to
* fitview（可选） `boolean | addGeometryFitViewOptions` =false] - automatically set the map to a fit center and zoom for the geometry

返回：

* `Geometry` this

触发事件：

* `Geometry#add`

</div>
</details>

<details><summary>getLayer()</summary>
<div>
<br/>

获取几何图形所在的图层

返回：

* `Layer` - layer added to

</div>
</details>

<details><summary>getId()</summary>
<div>
<br/>

获取几何图形的id

返回：

* `String|Number` geometry的id

</div>
</details>

<details><summary>setId(id)</summary>
<div>
<br/>

给几何图形设置id

参数：

* id `string` new id

返回：

* `Geometry` this

触发事件：

* `Geometry#idchange`

</div>
</details>

<details><summary>getProperties()</summary>
<div>
<br/>

获取几何图形的属性

返回：

* `Object` properties

</div>
</details>

<details><summary>setProperties(properties)</summary>
<div>
<br/>

给几何图形设置新的属性

参数：

* properties `{ [key: string]: any }` new properties

返回：

* `Geometry` this

触发事件：

* `Geometry#propertieschange`

</div>
</details>

<details><summary>getType()</summary>
<div>
<br/>

获取几何图形的类型,例如“点”,"线"

返回：

* `String` type of the geometry

</div>
</details>

<details><summary>getSymbol()</summary>
<div>
<br/>

获取几何图形的样式

返回：

* `Object` geometry's symbol

</div>
</details>

<details><summary>setSymbol(symbol)</summary>
<div>
<br/>

给几何图形设置样式

参数：

* symbol `any` new symbol

返回：

* `Geometry` this

触发事件：

* `Geometry#symbolchange`

</div>
</details>

<details><summary>getSymbolHash()</summary>
<div>
<br/>

获取样式的哈希值

返回：

* `String`

</div>
</details>

<details><summary>updateSymbol(props)</summary>
<div>
<br/>

更新几何图形当前的样式

参数：

* props `any` symbol properties to update

返回：

* `Geometry` this

触发事件：

* `Geometry#symbolchange`

</div>
</details>

<details><summary>getTextContent()</summary>
<div>
<br/>

如果几何图形有文本内容，就获取它

返回：

* `String`

</div>
</details>

<details><summary>getTextDesc()</summary>
<div>
<br/>

获取由 symbol 计算出的文本排版描述，用于文本测量与绘制

返回：

* `any`

</div>
</details>

<details><summary>getCenter()</summary>
<div>
<br/>

获取几何图形中心点

返回：

* `Coordinate`

</div>
</details>

<details><summary>getExtent()</summary>
<div>
<br/>

获取几何图形的包围盒范围

返回：

* `Extent` geometry's extent

</div>
</details>

<details><summary>getContainerExtent(out?)</summary>
<div>
<br/>

获取几何图形的屏幕像素范围

参数：

* out（可选） `PointExtent`

返回：

* `PointExtent`

</div>
</details>

<details><summary>get2DExtent()</summary>
<div>
<br/>

获取 geometry 在当前地图 GL 分辨率下的二维 extent，无地图时为 null

返回：

* `PointExtent`

</div>
</details>

<details><summary>getSize()</summary>
<div>
<br/>

获取几何体的像素大小，不同缩放级别的像素大小可能会有所不同。

返回：

* `Size`

</div>
</details>

<details><summary>containsPoint(containerPoint, t?)</summary>
<div>
<br/>

几何体是否包含输入容器点

参数：

* containerPoint `Point` input container point or coordinate
* t（可选） `number` =undefined] - tolerance in pixel

返回：

* `Boolean`

</div>
</details>

<details><summary>show()</summary>
<div>
<br/>

显示几何图形

返回：

* `Geometry` this

触发事件：

* `Geometry#show`

</div>
</details>

<details><summary>hide()</summary>
<div>
<br/>

隐藏几何图形

返回：

* `Geometry` this

触发事件：

* `Geometry#hide`

</div>
</details>

<details><summary>isVisible()</summary>
<div>
<br/>

几何图形是否可见

返回：

* `Boolean`

</div>
</details>

<details><summary>symbolIsVisible()</summary>
<div>
<br/>

symbol是否可见

返回：

* `Boolean`

</div>
</details>

<details><summary>getZIndex()</summary>
<div>
<br/>

获取几何图形所在层级，默认是0

返回：

* `Number` zIndex

</div>
</details>

<details><summary>setZIndex(zIndex)</summary>
<div>
<br/>

给几何图形设置新的层级并触发zindexchange事件（将导致层对几何体进行排序并进行渲染）

参数：

* zIndex `number` new zIndex

返回：

* `Geometry` this

触发事件：

* `Geometry#zindexchange`

</div>
</details>

<details><summary>setZIndexSilently(zIndex)</summary>
<div>
<br/>

仅将新的zIndex设置为Geometry，而不触发zindexchange事件
当需要更新许多几何图形的zIndex时，可以用来提高性能
当更新了N个几何体时，可以将setZIndexSilently与（N-1）个几何体一起使用，并将setZIendex与要排序和渲染的层的最后一个几何体一同使用。

参数：

* zIndex `number` new zIndex

返回：

* `Geometry` this

</div>
</details>

<details><summary>bringToFront()</summary>
<div>
<br/>

将几何图形至于顶层

返回：

* `Geometry` this

触发事件：

* `Geometry#zindexchange`

</div>
</details>

<details><summary>bringToBack()</summary>
<div>
<br/>

将几何图形置于底层

返回：

* `Geometry` this

触发事件：

* `Geometry#zindexchange`

</div>
</details>

<details><summary>translate(x, y?, z?)</summary>
<div>
<br/>

Translate or move the geometry by the given offset.

参数：

* x `number | Coordinate` x offset
* y（可选） `number` y offset
* z（可选） `number` z offset

返回：

* `Geometry` this

触发事件：

* `Geometry#positionchange`
* `Geometry#shapechange`

</div>
</details>

<details><summary>flash(interval?, count?, cb?)</summary>
<div>
<br/>

闪烁几何图形，按一定的内部显示和隐藏计数次数。

参数：

* interval（可选） `number` =100]     - interval of flash, in millisecond (ms)
* count（可选） `number` =4]          - flash times
* cb（可选） `() => void, context: any` =null]        - callback function when flash ended

返回：

* `Geometry` this

</div>
</details>

<details><summary>copy()</summary>
<div>
<br/>

返回不包含事件侦听器的几何体的副本。

返回：

* `Geometry` copy

</div>
</details>

<details><summary>remove()</summary>
<div>
<br/>

将其自身从图层中移除（如果有的话）。

返回：

* `Geometry` this

触发事件：

* `Geometry#removestart`
* `Geometry#remove`

</div>
</details>

<details><summary>toGeoJSONGeometry()</summary>
<div>
<br/>

将几何对象导出成geojson对象

返回：

* `Object` GeoJSON Geometry

</div>
</details>

<details><summary>toGeoJSON(opts?)</summary>
<div>
<br/>

导出geojson对象中的一个feature

参数：

* opts（可选） `{ [key: string]: any }` =null]              - export options

返回：

* `Object` GeoJSON Feature

</div>
</details>

<details><summary>toJSON(options?)</summary>
<div>
<br/>

从几何体中导出一个配置文件json。
除了导出特性对象，概要文件json还包含符号、构造选项和信息窗口信息。
配置文件json可以存储在其他地方，稍后用于重现几何图形
由于函数的序列化问题，概要文件json中不包括事件侦听器和上下文菜单

参数：

* options（可选） `{ [key: string]: any }` =null]          - export options

返回：

* `Object` profile json object

</div>
</details>

<details><summary>getLength()</summary>
<div>
<br/>

获取几何图形的地理长度

返回：

* `Number` geographic length, unit is meter

</div>
</details>

<details><summary>getArea()</summary>
<div>
<br/>

获取几何图形的面积

返回：

* `Number` geographic area, unit is sq.meter

</div>
</details>

<details><summary>rotate(angle, pivot?)</summary>
<div>
<br/>

按给定角度围绕轴心点旋转几何体

参数：

* angle `number` angle to rotate in degree
* pivot（可选） `Coordinate` =null]  - optional, will be the geometry's center by default

返回：

* `Geometry` this

</div>
</details>

<details><summary>isRotated()</summary>
<div>
<br/>

判断 geometry 是否已设置旋转角度与旋转中心

返回：

* `boolean`

</div>
</details>

<details><summary>onHide()</summary>
<div>
<br/>

生命周期回调，geometry 被隐藏时关闭菜单与信息窗口

</div>
</details>

<details><summary>onShapeChanged()</summary>
<div>
<br/>

生命周期回调，形状变化后清缓存、重绘并派发 shapechange

</div>
</details>

<details><summary>onSymbolChanged()</summary>
<div>
<br/>

生命周期回调，symbol 变化后刷新绘制并派发 symbolchange

</div>
</details>

<details><summary>onConfig(conf)</summary>
<div>
<br/>

生命周期回调，配置变更后重新应用 properties 并按需重绘

参数：

* conf `any`

</div>
</details>

<details><summary>getAltitude()</summary>
<div>
<br/>

获取 geometry 的高度，取自 altitude 属性或坐标 z，未设置时为 0

返回：

* `number | number[] | number[][]`

</div>
</details>

<details><summary>hasAltitude()</summary>
<div>
<br/>

判断 geometry 是否设置了高度

返回：

* `boolean`

</div>
</details>

<details><summary>setAltitude(alt)</summary>
<div>
<br/>

设置 geometry 的高度，同步写入 properties 与坐标 z

参数：

* alt `number`

返回：

* `this`

</div>
</details>

<details><summary>getMinAltitude()</summary>
<div>
<br/>

获取 geometry 坐标中的最小高度值

返回：

* `number`

</div>
</details>

<details><summary>getMaxAltitude()</summary>
<div>
<br/>

获取 geometry 坐标中的最大高度值

返回：

* `number`

</div>
</details>

<details><summary>getGeometries()</summary>
<div>
<br/>

获取几何集合中包含的 geometry 数组

返回：

* `Geometry[]`

</div>
</details>

<details><summary>onRemove()</summary>
<div>
<br/>

生命周期回调，geometry 从 layer 移除时执行

</div>
</details>

<details><summary>getRotateOffsetAngle()</summary>
<div>
<br/>

获取 geometry 旋转时为对齐外壳而补偿的偏移角度

返回：

* `number`

</div>
</details>

<details><summary>onAdd()</summary>
<div>
<br/>

生命周期回调，geometry 添加到 layer 后执行

</div>
</details>
