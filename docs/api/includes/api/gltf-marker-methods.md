<details><summary>translation()</summary>
<div>
<br/>

获取模型默认平移量，symbol 未设置时为 0, 0, 0

</div>
</details>

<details><summary>rotation()</summary>
<div>
<br/>

获取模型默认旋转量，symbol 未设置时为 0, 0, 0

</div>
</details>

<details><summary>scale()</summary>
<div>
<br/>

获取模型默认缩放量，symbol 未设置时为 1, 1, 1

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

<details><summary>getCenter()</summary>
<div>
<br/>

获取模型中心的地理 coordinate，含平移量与高度换算

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

获取合并所有 mesh 后的模型包围盒，未创建时返回空

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

<details><summary>outline()</summary>
<div>
<br/>

给模型全部 mesh 加描边

</div>
</details>

<details><summary>cancelOutline(nodes)</summary>
<div>
<br/>

取消描边，传入 nodes 时只取消这些节点

参数：

* nodes `Any`

</div>
</details>

<details><summary>isOutline()</summary>
<div>
<br/>

是否处于描边状态

</div>
</details>

<details><summary>isVisible()</summary>
<div>
<br/>

marker 是否可见，未设置时默认可见

</div>
</details>

<details><summary>setCoordinates(coordinates)</summary>
<div>
<br/>

设置 marker 坐标，支持数组与 Coordinate 形式

参数：

* coordinates `Any`

</div>
</details>

<details><summary>copy()</summary>
<div>
<br/>

复制出一个相同的 GLTFMarker，沿用已记录的 zoom

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

<details><summary>toJSON()</summary>
<div>
<br/>

将 marker 序列化为 JSON，含坐标与 symbol

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

获取 marker 类型标识，如 gltfmarker

</div>
</details>

<details><summary>getCount()</summary>
<div>
<br/>

获取要素数量，GLTFMarker 固定返回 1

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

<details><summary>openInfoWindow(coordinate)</summary>
<div>
<br/>

打开 infoWindow，模型未加载时等 load 后打开

参数：

* coordinate `Any`

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

缩放地图视图使模型完整可见，默认带动画

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

<details><summary>highlightNodes(highlights)</summary>
<div>
<br/>

按 nodeIndex 高亮模型的部分 node

参数：

* highlights `Any`

</div>
</details>

<details><summary>highlight(highlight)</summary>
<div>
<br/>

高亮整个模型，可设颜色、不透明度与 bloom

参数：

* highlight `Any`

</div>
</details>

<details><summary>cancelHighlight(nodes)</summary>
<div>
<br/>

取消高亮并还原原色，可只传部分 node

参数：

* nodes `Any`

</div>
</details>

<details><summary>setNodeTRS(nodeIndex, trs = {}?)</summary>
<div>
<br/>

设置指定 node 的 trs 变换

参数：

* nodeIndex `Number` specific node index for gltf
* trs = {}（可选） `Object` = &#123;&#125;]  - includes transltion, rotation, scale

返回：

* `Any` this

</div>
</details>
