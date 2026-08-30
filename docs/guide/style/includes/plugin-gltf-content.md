## 动态样式

gltf 渲染插件支持 [function-type](/guide/style/function-type) 的属性有：`visible`、`modelHeight`、`translationX` / `translationY` / `translationZ`、`rotationX` / `rotationY` / `rotationZ`、`scaleX` / `scaleY` / `scaleZ`（2026 源码 GLTFMixin）。

例如以下示例，能让模型的高度在不同地图级别上由小变大：

```json
{
 "modelHeight": {
    "stops": [[1, 10], [20, 100]]
  }
}
```

> 注：GLTF 插件不支持 polygonFill / polygonOpacity 等颜色的 function-type（旧文档所述有误，2026 源码 GLTFMixin.getFnTypeConfig 返回空）。

## 支持的Symbol样式属性

-----------
### visible

默认值：true

**Boolean**，是否显示。

-----------
### polygonFill

默认值：[1, 1, 1, 1]

**String** | **Number[]**，基础颜色，可以为[css颜色值](https://developer.mozilla.org/zh-CN/docs/Web/CSS/color_value)或者归一化四位数组。

-----------
### polygonOpacity

默认值：1

**Number** 透明度，取值范围 0 - 1。

-----------
### bloom

默认值：false

**Boolean**，是否支持bloom泛光后处理。

-----------
### url

默认值：'pyramid'

**String**，GLTF 模型的地址，支持url或者base64字符串，缺省时使用内置的 pyramid 模型。

-----------
### modelHeight

默认值：null

**Number**，模型在场景中的高度（单位米），设置后模型会按该高度自动缩放。

-----------
### anchorZ

默认值：'center'

**String**，模型的垂直锚点，可选的值：'center'、'bottom'、'top'。

-----------
### animation

默认值：false

**Boolean**，是否播放模型自带的骨骼动画，配合 `loop`、`speed`、`animationName` 使用。

-----------
### translationX / translationY / translationZ

默认值：0

**Number**，模型在本地坐标系 x（/y/z）轴上的偏移量，单位米。

-----------
### scaleX / scaleY / scaleZ

默认值：1

**Number**，模型在本地坐标系 x（/y/z）轴上的缩放比例。

-----------
### rotationX / rotationY / rotationZ

默认值：0

**Number**，模型在本地坐标系 x（/y/z）轴上的旋转角度，单位为度。

> 注：2026 源码（GLTFMixin）中模型的位移/旋转/缩放使用 translationX/Y/Z、rotationX/Y/Z、scaleX/Y/Z 分量形式（且均支持 function-type），旧文档的 translation / scale / rotation 数组写法已不适用（2026 核对）。

-----------
### fixSizeOnZoom

默认值：null

**Number**，是否在所有级别固定模型大小，模型不再随地图缩放而缩放，fixSizeOnZoom的值为级别，即把模型固定为哪个级别上的模型大小。