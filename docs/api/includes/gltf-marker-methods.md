<details><summary>setUrl(url)</summary>
<div>
<br/>

更新模型的url。

返回：

* this

</div>
</details>

<details><summary>getUrl()</summary>
<div>
<br/>

获取模型的url。

返回：

* String

</div>
</details>

<details><summary>setBloom(isBloom)</summary>
<div>
<br/>

设置模型是否开启泛光。

参数：

* isBloom **Boolean** 是否泛光

返回：

* this

</div>
</details>

<details><summary>isBloom()</summary>
<div>
<br/>

返回模型是否开启泛光。

返回：

* Boolean

</div>
</details>

<details><summary>setCastShadow(isCastShadow)</summary>
<div>
<br/>

设置模型是否开启阴影。

参数：

* isCastShadow **Boolean** 是否开启阴影

返回：

* this

</div>
</details>

<details><summary>isCastShadow()</summary>
<div>
<br/>

返回模型是否开启阴影。

返回：

* Boolean

</div>
</details>

<details><summary>outline()</summary>
<div>
<br/>

高亮模型。

因为高亮是采用后处理实现的，图层需要加入GroupGLLayer，且outline后处理是开启的。

```js
gltfMarker.outline();
```

返回：

* this

</div>
</details>

<details><summary>cancelOutline()</summary>
<div>
<br/>

取消高亮。

返回：

* this

</div>
</details>

<details><summary>isOutline()</summary>
<div>
<br/>

模型是否高亮。

返回：

* Boolean

</div>
</details>

<details><summary>setShader(shader)</summary>
<div>
<br/>

设置模型绘制的shader。

参数：

* shader **String** 可选的shader: pbr, phong, wireframe, 默认是pbr

返回：

* this

</div>
</details>

<details><summary>getShader()</summary>
<div>
<br/>

返回模型的绘制shader。

返回：

* String

</div>
</details>

<details><summary>setUniforms(uniforms)</summary>
<div>
<br/>

设置模型的 symbol.uniforms

参数：

* uniforms **Object** 设置symbol.uniforms值

返回：

* this

</div>
</details>

<details><summary>getUniform(key)</summary>
<div>
<br/>

返回模型symbol.uniforms中的属性值。

参数：

* key **String** uniform属性名

返回：

* any

</div>
</details>

<details><summary>setUniform(key, value, nodeIndex)</summary>
<div>
<br/>

设置模型的symbol.uniforms中的单个属性值，可指定nodeIndex将uniform只应用到指定节点（2026 源码补充）。

参数：

* key **String** uniform属性名
* value **any** 属性值
* nodeIndex **Number** 可选的节点序号

返回：

* this

</div>
</details>

<details><summary>getUniforms()</summary>
<div>
<br/>

返回模型的symbol.uniforms对象（2026 源码补充）。

返回：

* Object

</div>
</details>

<details><summary>setAnimation(isAnimated)</summary>
<div>
<br/>

设置模型是否开启动画，默认开启。

参数：

* isAnimated **Boolean** 是否开启动画。

返回：

* this

</div>
</details>

<details><summary>isAnimated()</summary>
<div>
<br/>

返回模型是否开启了动画。

返回：

* Boolean

</div>
</details>

<details><summary>isDashAnimated()</summary>
<div>
<br/>

返回模型在wireframe shader绘制时，是否开启了dash动画。

返回：

* Boolean

</div>
</details>

<details><summary>setAnimationLoop(looped)</summary>
<div>
<br/>

设置模型是否开启循环动画，默认开启。

参数：

* looped **Boolean** 是否开启循环动画。

返回：

* this

</div>
</details>

<details><summary>isAnimationLooped()</summary>
<div>
<br/>

返回图形是否开启了动画循环。

返回：

* Boolean

</div>
</details>

<details><summary>setAnimationSpeed(speed)</summary>
<div>
<br/>

设置模型的动画速度。

参数：

* speed **Number** 模型速度，为原始速度的倍数，默认为1。

返回：

* this

</div>
</details>

<details><summary>getAnimationSpeed()</summary>
<div>
<br/>

返回模型的动画速度。

返回：

* Number

</div>
</details>

<details><summary>getAnimations()</summary>
<div>
<br/>

获取模型中所以后的动画序列名称。

返回：

* String|Number[]

</div>
</details>

<details><summary>getCurrentAnimation()</summary>
<div>
<br/>

获取模型当前的动画序列名称。

返回：

* String|Number

</div>
</details>

<details><summary>setCurrentAnimation(animationName)</summary>
<div>
<br/>

设置模型当前的动画序列名称。

参数：

* animationName **String|Number** 动画序列名称

返回：

* this

</div>
</details>

<details><summary>setAnimationTimeframe(timestamp)</summary>
<div>
<br/>

设置当前动画的时间片。

参数：

* timestamp **Number** 动画时间片，单位ms

返回：

* this

</div>
</details>

<details><summary>setTranslation(translationX, translationY, translationZ)</summary>
<div>
<br/>

设置模型在模型本地坐标系中的偏移量。

参数：

* translationX **Number** 本地坐标系x轴偏移量
* translationY **Number** 本地坐标系y轴偏移量
* translationZ **Number** 本地坐标系z轴偏移量

返回：

* this

</div>
</details>

<details><summary>getTranslation()</summary>
<div>
<br/>

获取模型的偏移量

返回：

* Number[] 三位数组

</div>
</details>

<details><summary>setRotation(rotationX, rotationY, rotationZ)</summary>
<div>
<br/>

rotationX，rotationY，rotationZ分别是模型在本地坐标系x,y,z轴上的旋转角度值。

参数：

* rotationX **Number** 模型在本地坐标系x轴上的旋转角度值
* rotationY **Number** 模型在本地坐标系y轴上的旋转角度值
* rotationZ **Number** 模型在本地坐标系z轴上的旋转角度值

返回：

* this

</div>
</details>

<details><summary>getRotation()</summary>
<div>
<br/>

获取模型的旋转值。

返回：

* Number[] 三位数组

</div>
</details>

<details><summary>setScale(scaleX, scaleY, scaleZ)</summary>
<div>
<br/>

scaleX，scaleY，scaleZ分别是模型在本地坐标系x,y,z轴上的缩放倍数。

参数：

* scaleX **Number** 模型在本地坐标系x轴上的缩放倍数
* scaleY **Number** 模型在本地坐标系y轴上的缩放倍数
* scaleZ **Number** 模型在本地坐标系z轴上的缩放倍数

返回：

* this

</div>
</details>

<details><summary>getScale()</summary>
<div>
<br/>

获取模型的缩放倍数。

返回：

* Number[] 三位数组

</div>
</details>

<details><summary>setTRS(translation, rotation, scale)</summary>
<div>
<br/>

设置模型的translation，rotation和scale。

translation是模型本地坐标中的三位数组偏移量。
rotation是三位数组，模型在本地坐标系x,y,z轴上的旋转角度值。
scale是三位数组，模型在本地坐标系x,y,z轴上的缩放倍数。

参数：

* translation **Number[]** 三位数组，本地坐标系中的偏移量。
* rotation **Number[]** 三位数组，模型在本地坐标系x,y,z轴上的旋转角度值。
* scale **Number[]** 三位数组，模型在本地坐标系x,y,z轴上的缩放倍数。

返回：

* this

</div>
</details>

<details><summary>setModelMatrix(modelMatrix)</summary>
<div>
<br/>

设置模型的本地变换矩阵，矩阵会被拆分为translation, rotation, scale。

参数：

* modelMatrix **Number[]** 16位数组变换矩阵

返回：

* this

</div>
</details>

<details><summary>getModelMatrix()</summary>
<div>
<br/>

获取模型在本地坐标上的16位数组，变换矩阵。

返回：

* Number[]

</div>
</details>

<details><summary>setAnchorZ(anchorZ)</summary>
<div>
<br/>

设置模型在z轴上的锚点或者对齐点，对齐顶部还是对齐底部。

参数：

* anchorZ **String** z轴锚点，可选的值为 center 或者 top 或者 bottom（2026 源码核对，未设置时模型中心与坐标对齐）

返回：

* this

</div>
</details>

<details><summary>getAnchorZ()</summary>
<div>
<br/>

获取模型在z轴上的锚点。

返回：

* String

</div>
</details>