<details><summary>getLayer()</summary>
<div>
<br/>

获取标记所属的 layer

</div>
</details>

<details><summary>translation()</summary>
<div>
<br/>

获取模型默认平移量，symbol 未设置时为 0, 0, 0

</div>
</details>

<details><summary>rotation()</summary>
<div>
<br/>

获取模型默认旋转量，symbol 未设置时为 0 0 0

</div>
</details>

<details><summary>scale()</summary>
<div>
<br/>

获取模型默认缩放量，symbol 未设置时为 1 1 1

</div>
</details>

<details><summary>setTransformOrigin(coordinate)</summary>
<div>
<br/>

设置模型变换的原点 coordinate

参数：

* coordinate `Any`

</div>
</details>

<details><summary>getTransformOrigin()</summary>
<div>
<br/>

获取模型变换原点，未设置时取标记中心

</div>
</details>

<details><summary>getMeshes(gltfManager, regl, timestamp)</summary>
<div>
<br/>

获取本帧要渲染的 mesh，按视锥剔除并更新矩阵与 uniform

参数：

* gltfManager `Any`
* regl `Any`
* timestamp `Any`

</div>
</details>

<details><summary>getGLTFJSON()</summary>
<div>
<br/>

获取已加载 glTF 模型的 json 数据

</div>
</details>

<details><summary>getAllMeshes()</summary>
<div>
<br/>

获取 marker 创建的全部 mesh，不做视锥剔除

</div>
</details>

<details><summary>setUrl(url)</summary>
<div>
<br/>

设置模型资源 url，触发 symbol 更新

参数：

* url `Any`

</div>
</details>

<details><summary>setSymbol(symbol)</summary>
<div>
<br/>

设置 marker 的 symbol，url 或 shader 变化时重建 mesh

参数：

* symbol `Any`

</div>
</details>

<details><summary>getPointZ()</summary>
<div>
<br/>

把坐标 z 高度换算成 GL 世界的 point 高度

</div>
</details>

<details><summary>getUrl()</summary>
<div>
<br/>

获取模型资源 url，未设置时默认返回 pyramid

</div>
</details>

<details><summary>addTo(layer)</summary>
<div>
<br/>

把 marker 添加到指定 layer，已在图层上会抛错

参数：

* layer `Any`

</div>
</details>

<details><summary>getBoundingBoxCenter()</summary>
<div>
<br/>

获取模型 boundingBox 中心的 coordinate，未加载时返回 null

</div>
</details>

<details><summary>getBoundingBoxWidth(axis)</summary>
<div>
<br/>

按 axis 取模型 boundingBox 宽度并乘缩放，y 与 z 会互换

参数：

* axis `Any`

</div>
</details>

<details><summary>getAxisXWidth()</summary>
<div>
<br/>

获取模型 boundingBox 沿 X 轴方向的宽度

</div>
</details>

<details><summary>getAxisYWidth()</summary>
<div>
<br/>

获取模型 boundingBox 沿 Y 轴方向的宽度，内部取 Z 轴值

</div>
</details>

<details><summary>getAxisZWidth()</summary>
<div>
<br/>

获取模型 boundingBox 沿 Z 轴方向的宽度，内部取 Y 轴值

</div>
</details>

<details><summary>getCurrentPixelHeight()</summary>
<div>
<br/>

获取模型当前在屏幕上占的像素高度

</div>
</details>

<details><summary>getFitTranslate(out)</summary>
<div>
<br/>

获取将模型包围盒中心移到原点的平移量

参数：

* out `Any`

</div>
</details>

<details><summary>showBoundingBox(options)</summary>
<div>
<br/>

显示模型包围盒，可指定线颜色与线透明度

参数：

* options `Any`

</div>
</details>

<details><summary>hideBoundingBox()</summary>
<div>
<br/>

隐藏模型的调试包围盒

</div>
</details>

<details><summary>getBoundingBox()</summary>
<div>
<br/>

获取合并所有 mesh 后的模型包围盒，未创建 mesh 时返回 null

</div>
</details>

<details><summary>onAdd()</summary>
<div>
<br/>

记录 marker 加入图层时的 zoom，用于自适应大小

</div>
</details>

<details><summary>onRemove()</summary>
<div>
<br/>

移除时清理包围盒与 zoom 等自适应辅助字段

</div>
</details>

<details><summary>remove()</summary>
<div>
<br/>

释放 GLTF 资源并销毁 mesh 与纹理，再移除 marker

</div>
</details>

<details><summary>show()</summary>
<div>
<br/>

将 symbol 的 visible 设为 true 以显示 marker

</div>
</details>

<details><summary>hide()</summary>
<div>
<br/>

将 symbol 的 visible 设为 false 以隐藏 marker

</div>
</details>

<details><summary>setBloom(bloom)</summary>
<div>
<br/>

设置 marker 是否启用泛光 bloom 效果

参数：

* bloom `Any`

</div>
</details>

<details><summary>isBloom()</summary>
<div>
<br/>

是否为 marker 启用了泛光 bloom 效果

</div>
</details>

<details><summary>setCastShadow(shadow)</summary>
<div>
<br/>

设置 marker 是否投射阴影

参数：

* shadow `Any`

</div>
</details>

<details><summary>isCastShadow()</summary>
<div>
<br/>

是否投射阴影，未显式设置时默认开启

</div>
</details>

<details><summary>outlineNodes(nodes)</summary>
<div>
<br/>

给指定 node 索引的节点加描边

参数：

* nodes `Any`

</div>
</details>

<details><summary>isVisible()</summary>
<div>
<br/>

marker 是否可见，未设置时默认可见

</div>
</details>

<details><summary>copy()</summary>
<div>
<br/>

按当前 marker 的 JSON 复制出一个新的 marker 实例

</div>
</details>

<details><summary>setShader(shader)</summary>
<div>
<br/>

设置 marker 使用的 shader 名称，默认 pbr

参数：

* shader `Any`

</div>
</details>

<details><summary>getShader()</summary>
<div>
<br/>

获取 marker 当前 shader 名称，未设置返回 pbr

</div>
</details>

<details><summary>setUniforms(uniforms)</summary>
<div>
<br/>

整体设置 shader 的 uniform 键值对

参数：

* uniforms `Any`

</div>
</details>

<details><summary>getUniforms()</summary>
<div>
<br/>

获取 marker 当前的 uniform 键值对

</div>
</details>

<details><summary>setUniform(key, value, nodeIndex)</summary>
<div>
<br/>

设置单个 uniform 值，nodeIndex 指定作用节点

参数：

* key `Any`
* value `Any`
* nodeIndex `Any`

</div>
</details>

<details><summary>getUniform(key)</summary>
<div>
<br/>

获取指定 key 的 uniform 值

参数：

* key `Any`

</div>
</details>

<details><summary>isAnimated()</summary>
<div>
<br/>

是否播放动画，需模型含 animations 且 symbol 开启

</div>
</details>

<details><summary>isDashAnimated()</summary>
<div>
<br/>

是否为虚线动画，需 dashEnabled 与 dashAnimate 同时开启

</div>
</details>

<details><summary>setAnimation(isAnimation)</summary>
<div>
<br/>

设置是否播放模型自带的动画

参数：

* isAnimation `Any`

</div>
</details>

<details><summary>setAnimationLoop(looped)</summary>
<div>
<br/>

设置动画是否循环播放并重置起始时间

参数：

* looped `Any`

</div>
</details>

<details><summary>isAnimationLooped()</summary>
<div>
<br/>

是否为循环播放动画

</div>
</details>

<details><summary>getAnimationSpeed()</summary>
<div>
<br/>

获取动画播放速度，未设置时为 1

</div>
</details>

<details><summary>setAnimationSpeed(speed)</summary>
<div>
<br/>

设置动画播放速度倍数

参数：

* speed `Any`

</div>
</details>

<details><summary>setTRS(translation, rotation, scale)</summary>
<div>
<br/>

按数组一次设置平移、旋转与缩放

参数：

* translation `Any`
* rotation `Any`
* scale `Any`

</div>
</details>

<details><summary>updateSymbol(symbol)</summary>
<div>
<br/>

更新 marker 的 symbol，并处理 bloom 与特效属性

参数：

* symbol `Any`

</div>
</details>

<details><summary>setTranslation(translationX, translationY, translationZ)</summary>
<div>
<br/>

按指定轴设置 marker 的平移量

参数：

* translationX `Any`
* translationY `Any`
* translationZ `Any`

</div>
</details>

<details><summary>setRotation(rotationX, rotationY, rotationZ)</summary>
<div>
<br/>

按指定轴设置 marker 的旋转角度

参数：

* rotationX `Any`
* rotationY `Any`
* rotationZ `Any`

</div>
</details>

<details><summary>rotateAround(coordinate, degree)</summary>
<div>
<br/>

让 marker 绕指定 coordinate 旋转并同步朝向

参数：

* coordinate `Any`
* degree `Any`

</div>
</details>

<details><summary>setScale(scaleX, scaleY, scaleZ)</summary>
<div>
<br/>

按指定轴设置模型缩放比例

参数：

* scaleX `Any`
* scaleY `Any`
* scaleZ `Any`

</div>
</details>

<details><summary>getTranslation()</summary>
<div>
<br/>

获取 marker 当前的平移量三维向量

</div>
</details>

<details><summary>getRotation()</summary>
<div>
<br/>

获取 marker 三个轴向的旋转角度，未设置为 0

</div>
</details>

<details><summary>getScale()</summary>
<div>
<br/>

获取模型三个轴向的缩放比例，未设置为 1

</div>
</details>

<details><summary>cancelMarkerPixelHeight()</summary>
<div>
<br/>

取消 markerPixelHeight 指定的模型像素高度

</div>
</details>

<details><summary>setAnchorZ(anchorZ)</summary>
<div>
<br/>

设置模型 Z 轴锚点，可取 bottom top center

参数：

* anchorZ `Any`

</div>
</details>

<details><summary>getAnchorZ()</summary>
<div>
<br/>

获取模型 Z 轴锚点，未设置时返回 bottom

</div>
</details>

<details><summary>hasFunctionDefinition()</summary>
<div>
<br/>

判断 symbol 与 uniforms 中是否含 function-type 定义

</div>
</details>

<details><summary>setModelMatrix(matrix)</summary>
<div>
<br/>

设置模型矩阵，并从中分解出 trs 应用

参数：

* matrix `Any`

</div>
</details>

<details><summary>getModelMatrix()</summary>
<div>
<br/>

获取 marker 当前的模型变换矩阵

</div>
</details>

<details><summary>isDirty()</summary>
<div>
<br/>

是否为待更新状态，mesh 更新后复位

</div>
</details>

<details><summary>setZoomOnAdded(zoom)</summary>
<div>
<br/>

设置 marker 加入地图时记录的 zoom 值

参数：

* zoom `Any`

</div>
</details>

<details><summary>getZoomOnAdded()</summary>
<div>
<br/>

获取 marker 加入地图时记录的 zoom 值

</div>
</details>

<details><summary>isLoaded()</summary>
<div>
<br/>

是否已完成 GLTF 模型加载并创建 mesh

</div>
</details>

<details><summary>getGLTFMarkerType()</summary>
<div>
<br/>

获取 marker 类型标识，本类返回 multigltfmarker

</div>
</details>

<details><summary>getContainerExtent()</summary>
<div>
<br/>

获取模型在容器坐标系下的 extent

</div>
</details>

<details><summary>getGLTFAsset()</summary>
<div>
<br/>

获取 GLTF 数据的 asset 元信息，如版本与生成器

</div>
</details>

<details><summary>getAnimations()</summary>
<div>
<br/>

获取模型全部动画名列表，无动画时返回 null

</div>
</details>

<details><summary>getCurrentAnimation()</summary>
<div>
<br/>

获取当前设置的 animationName，未设置返回 undefined

</div>
</details>

<details><summary>setCurrentAnimation(animationName)</summary>
<div>
<br/>

设置当前播放的动画名，可传名称数组

参数：

* animationName `Any`

</div>
</details>

<details><summary>setModelHeight(modelHeight)</summary>
<div>
<br/>

设置模型高度，按该高度自动缩放模型

参数：

* modelHeight `Any`

</div>
</details>

<details><summary>getModelHeight()</summary>
<div>
<br/>

获取当前设置的模型高度

</div>
</details>

<details><summary>getGLTFBBox()</summary>
<div>
<br/>

获取 GLTF 模型自身的原始包围盒

</div>
</details>

<details><summary>zoomTo(options = { animation: true }, step)</summary>
<div>
<br/>

set transltion, rotation and scale for specific node

参数：

* options = { animation: true } `Any`
* step `Any`

返回：

* `Any` this

</div>
</details>

<details><summary>setAnimationTimeframe(timestamp)</summary>
<div>
<br/>

按给定时间戳更新模型动画进度

参数：

* timestamp `Any`

</div>
</details>

<details><summary>setNodeTRS(nodeIndex, trs = {}?)</summary>
<div>
<br/>

set transltion, rotation and scale for specific node

参数：

* nodeIndex `Number` specific node index for gltf
* trs = {}（可选） `Object` = &#123;&#125;]  - includes transltion, rotation, scale

返回：

* `Any` this

</div>
</details>

<details><summary>getOutline()</summary>
<div>
<br/>

获取标记的方框轮廓 marker，尺寸取自 containerExtent

返回：

* `Marker`

</div>
</details>

<details><summary>setSymbol(symbol)</summary>
<div>
<br/>

设置 marker 的 symbol，url 或 shader 变化时重建 mesh

参数：

* symbol `AnyMarkerSymbol | Array<AnyMarkerSymbol>`

返回：

* `this`

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

把 marker 添加到指定 layer，已在图层上会抛错

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

获取标记所属的 layer

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

设置 marker 的 symbol，url 或 shader 变化时重建 mesh

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

更新 marker 的 symbol，并处理 bloom 与特效属性

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

获取文本描述，由文本内容与 sizeSymbol 计算并缓存

返回：

* `any`

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

获取模型在容器坐标系下的 extent

参数：

* out（可选） `PointExtent`

返回：

* `PointExtent`

</div>
</details>

<details><summary>get2DExtent()</summary>
<div>
<br/>

获取当前 zoom 下几何体的 2D 像素 extent，无 map 时返回 null

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

将 symbol 的 visible 设为 true 以显示 marker

返回：

* `Geometry` this

触发事件：

* `Geometry#show`

</div>
</details>

<details><summary>hide()</summary>
<div>
<br/>

将 symbol 的 visible 设为 false 以隐藏 marker

返回：

* `Geometry` this

触发事件：

* `Geometry#hide`

</div>
</details>

<details><summary>isVisible()</summary>
<div>
<br/>

marker 是否可见，未设置时默认可见

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

按当前 marker 的 JSON 复制出一个新的 marker 实例

返回：

* `Geometry` copy

</div>
</details>

<details><summary>remove()</summary>
<div>
<br/>

释放 GLTF 资源并销毁 mesh 与纹理，再移除 marker

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

<details><summary>getAltitude()</summary>
<div>
<br/>

获取几何体的 altitude 值，取自 properties 或 coordinate 的 z 值，都没有时返回 0

返回：

* `number | number[] | number[][]`

</div>
</details>

<details><summary>hasAltitude()</summary>
<div>
<br/>

判断几何体是否设置了非零的 altitude

返回：

* `boolean`

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

获取几何体集合内的子几何体数组，仅几何体集合类实现

返回：

* `Geometry[]`

</div>
</details>

<details><summary>onRemove()</summary>
<div>
<br/>

移除时清理包围盒与 zoom 等自适应辅助字段

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

记录 marker 加入图层时的 zoom，用于自适应大小

</div>
</details>
