<details><summary>getLastCoordinate()</summary>
<div>
<br/>

获取几何图形最后一个坐标点

返回：

* `Coordinate` Last Coordinate

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

<details><summary>setProperties(properties)</summary>
<div>
<br/>

给几何图形设置新的属性
Set a new properties to geometry.

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

获取文本描述，由文本内容与 sizeSymbol 计算并缓存

返回：

* `any`

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

<details><summary>toGeoJSONGeometry()</summary>
<div>
<br/>

将几何对象导出成geojson对象

返回：

* `Object` GeoJSON Geometry

</div>
</details>

<details><summary>isRotated()</summary>
<div>
<br/>

判断几何体是否设置了旋转角与旋转中心

返回：

* `boolean`

</div>
</details>

<details><summary>onHide()</summary>
<div>
<br/>

几何体隐藏时关闭已打开的菜单与 infoWindow

</div>
</details>

<details><summary>onShapeChanged()</summary>
<div>
<br/>

形状变化时清缓存、重绘并触发 shapechange 事件

</div>
</details>

<details><summary>onPositionChanged()</summary>
<div>
<br/>

位置变化时清缓存、重绘并触发 positionchange 事件

</div>
</details>

<details><summary>onSymbolChanged()</summary>
<div>
<br/>

symbol 变化时刷新 symbol、重建 sizeSymbol 并触发事件

</div>
</details>

<details><summary>onConfig(conf)</summary>
<div>
<br/>

config 更新 options 后的回调，同步 properties 并按需重绘

参数：

* conf `any`

</div>
</details>

<details><summary>setAltitude(alt)</summary>
<div>
<br/>

设置几何体的 altitude，并同步改写 coordinate 的 z 值

参数：

* alt `number`

返回：

* `this`

</div>
</details>

<details><summary>getMinAltitude()</summary>
<div>
<br/>

获取几何体所有 coordinate 中最小的 altitude

返回：

* `number`

</div>
</details>

<details><summary>getMaxAltitude()</summary>
<div>
<br/>

获取几何体所有 coordinate 中最大的 altitude

返回：

* `number`

</div>
</details>

<details><summary>getHoles()</summary>
<div>
<br/>

获取面状几何体的孔洞坐标数组，仅部分子类实现

返回：

* `Array<Array<Coordinate>>`

</div>
</details>

<details><summary>getShell()</summary>
<div>
<br/>

获取几何体外环的 coordinate 数组，仅部分子类实现

返回：

* `Array<Coordinate>`

</div>
</details>

<details><summary>getGeometries()</summary>
<div>
<br/>

获取几何体集合内的子几何体数组，仅集合类子类实现

返回：

* `Geometry[]`

</div>
</details>

<details><summary>onRemove()</summary>
<div>
<br/>

几何体从 layer 移除时的回调，由框架内部调用

</div>
</details>

<details><summary>getRotateOffsetAngle()</summary>
<div>
<br/>

获取几何体按中心旋转时的角度偏移，目前仅 Sector 实现

返回：

* `number`

</div>
</details>

<details><summary>onAdd()</summary>
<div>
<br/>

几何体加入 layer 后的回调，由框架内部调用

</div>
</details>
