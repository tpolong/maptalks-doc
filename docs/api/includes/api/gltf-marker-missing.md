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

<details><summary>getPointZ()</summary>
<div>
<br/>

把坐标 z 高度换算成 GL 世界的 point 高度

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

<details><summary>outlineNodes(nodes)</summary>
<div>
<br/>

给指定 node 索引的节点加描边

参数：

* nodes `Any`

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

<details><summary>cancelMarkerPixelHeight()</summary>
<div>
<br/>

取消 markerPixelHeight 指定的模型像素高度

</div>
</details>

<details><summary>hasFunctionDefinition()</summary>
<div>
<br/>

判断 symbol 与 uniforms 中是否含 function-type 定义

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
