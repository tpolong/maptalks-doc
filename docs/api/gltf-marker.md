---
title: GLTFMarker
---

# GLTFMarker

GLTFMarker是[Marker](https://maptalks.org/maptalks.js/api/0.x/Marker.html)的子类，用于在指定地理坐标上添加GLTF模型和进行交互。

GLTFMarker能够用symbol设置模型的状态，例如缩放比例，透明度，旋转角度等，同时提供了方法用于更新模型，更新模型状态，开启暂停动画等。

> 注：2026 源码确认继承关系为 `class GLTFMarker extends Marker`（maptalks.Marker，自带事件、infoWindow 等能力）（2026 核对）

## 构造函数

```js
import { GLTFMarker } from '@maptalks/gl-layers';

const gltfMarker = new GLTFMarker([0, 0], {
  symbol: {
    url: 'path/to/gltf.gltf'
  }
});
```
<details><summary>详细信息</summary>
<div>
参数：

* coordinates\* **Number[]** 坐标
* options\* **Object** 配置参数，可选的配置项如下：

| 配置名               |  类型   |  描述                     | 默认值 |
|  ------             | :----:  | ----                      |   :-----------:  |
<!--@include: ./includes/gltf-marker-options.md-->
<!--@include: ./includes/geometry-options.md-->

</div>
</details>

## 样式说明

GLTFMarker的options.symbol中包含以下的设置和属性。

<!--@include: ./includes/gltf-marker-symbols.md-->

> [!NOTE] symbol 字段核对（2026 源码）
> - 上表字段均有效；`url` 默认值为 `'pyramid'`（内置模型）
> - 2026 源码还支持：`modelHeight`（按模型高度自适应缩放，单位米）、`markerPixelHeight`（固定像素高度）、`translationX/Y/Z`、`rotationX/Y/Z`、`scaleX/Y/Z`（单轴设置）、`anchorZ` 的可取值扩展为 `'center' | 'bottom' | 'top'`、`doubleSided`（双面渲染）、`animationNodes`（限定动画节点）
> - 模型透明度通过 `uniforms.polygonOpacity`（pbr/phong）或 `uniforms.lineOpacity`（wireframe）控制，`symbol.opacity` 不存在于 2026 源码（2026 核对）

## 成员函数

<!--@include: ./includes/gltf-marker-methods.md-->

<!--@include: ./includes/geometry-methods.md-->

> [!NOTE] 方法核对（2026 源码）
> 旧版文档未收录、但 2026 源码中提供的方法：
> - `setUniform(key, value, nodeIndex?)` / `getUniforms()`：按 key 设置 / 批量读取材质 uniform
> - `setModelHeight(h)` / `getModelHeight()`：按模型高度（米）自适应缩放
> - `cancelMarkerPixelHeight()`：取消固定像素高度，恢复按需缩放
> - `getCurrentPixelHeight()`：模型当前像素高度
> - `rotateAround(coordinate, degree)`：绕给定坐标旋转
> - `highlight({color, opacity, bloom})` / `highlightNodes([{nodeIndex, ...}])` / `cancelHighlight(nodes?)`：高亮整个模型 / 高亮指定节点 / 取消高亮
> - `outlineNodes(nodes)` / `cancelOutline(nodes?)`：指定节点描边 / 取消描边
> - `getBoundingBox()` / `getBoundingBoxCenter()` / `getBoundingBoxWidth(axis)`：模型包围盒相关（注意 YZ 轴翻转换算）
> - `getGLTFJSON()` / `getGLTFBBox()` / `getAllMeshes()`：获取 gltf 原始 JSON / 模型包围盒 / 所有 mesh
> - `showBoundingBox(options?)` / `hideBoundingBox()`：显示 / 隐藏模型包围盒辅助线
> - `setNodeTRS(nodeIndex, trs={translation, rotation, scale})`：设置 gltf 指定节点的平移/旋转/缩放
> - `zoomTo(options={animation: true}, step?)`：缩放到模型包围盒（`zoomAt(index, ...)` 为 MultiGLTFMarker 方法，见 [MultiGLTFMarker](./multi-gltf-marker)）
> - `getCenter()`：模型几何中心坐标（含平移偏移）
> - `isLoaded()`：模型是否加载完成
> - `copy()` / `remove()`：深拷贝 / 移除并释放模型资源（mesh、纹理、jointTexture）

## 静态方法

<!--@include: ./includes/geometry-static-methods.md-->

> [!NOTE] 静态方法补充（2026 源码）
> - `static getGLTFAnchorsAlongLineString(coordinates, bboxWidth, map, options)`：沿线生成批量模型锚点（options: gapLength / count / rotateAlongLine / snapToEndVertexes / scaleEndModel）
> - `static combineGLTFBoundingBox(markers): {min, max}`：合并多个 marker 的包围盒

## 事件

<!--@include: ./includes/js-events-example.md-->

### 图形事件

<!--@include: ./includes/gltf-marker-events.md-->

### 继承自Geometry的事件

<!--@include: ./includes/geometry-events.md-->

> [!NOTE] 事件补充（2026 源码核对）
> - `meshcreate`：网格创建完成（在 marker 上触发，图层通过 geometry 事件同步接收）
> - `modelerror`：模型加载出错
> - `positionchange`：坐标变化

> 本文档已与 @maptalks/gl-layers 2026 源码核对（api-notes-others.md）
