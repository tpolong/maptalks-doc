---
title: GLTFLayer
---

# GLTFLayer

GLTFLayer是基于WebGL图形技术的[GLTF三维模型](../guide/gltf)绘制图层。

GLTFLayer仅支持添加[GLTFMarker](./gltf-marker)和[MultiGLTFMarker](./multi-gltf-marker)，添加其他数据时会报错。

它是[maptalks.OverlayLayer](https://maptalks.org/maptalks.js/api/0.x/OverlayLayer.html)的子类，继承了 OverlayLayer 上所有的方法。

> 注：2026 源码中 GLTFLayer 的实际继承链为 `GLTFLayer → MaskLayerMixin(AbstractGLTFLayer) → maptalks.OverlayLayer`，构造函数签名支持 `new GLTFLayer(id, geometries?, options?)`，省略 geometries 时 options 可作为第二参数传入（2026 核对）

## 构造函数

```js
import { GLTFLayer } from '@maptalks/gl-layers';

const layer = new GLTFLayer('gltf0');
```
<details><summary>详细信息</summary>
<div>
参数：

* id\* **String** 图层id
* options\* **Object** 配置参数，可选的配置项如下：

| 配置名               |  类型   |  描述                     | 默认值 |
|  ------             | :----:  | ----                      |   :-----------:  |
<!--@include: ./includes/layer-options.md-->

GLTFLayer 特有的配置项（2026 源码补充）：

| 配置名               |  类型   |  描述                     | 默认值 |
|  ------             | :----:  | ----                      |   :-----------:  |
| markerTypes           | String[] | 图层可接受的几何体类型      | ['gltfmarker', 'multigltfmarker'] |
| pointSize             | Number   | 点大小（像素）              | 1 |
| renderer              | String   | 渲染器类型                  | 'gl' |
| doubleBuffer          | Boolean  | 是否双缓冲渲染              | false |
| glOptions             | Object   | GL上下文选项               | null |
| markerEvents          | Boolean  | 是否响应marker的鼠标事件    | true |
| forceRenderOnZooming  | Boolean  | 缩放时是否强制重绘          | true |
| forceRenderOnMoving   | Boolean  | 移动时是否强制重绘          | true |
| forceRenderOnRotating | Boolean  | 旋转时是否强制重绘          | true |
| style                 | Object   | 图层样式，结构为 `[{filter, symbol}, ...]` 数组，或 `{ $root, style: [{filter, symbol}, ...] }`（`$root` 用于替换 symbol.url 中的 `{$root}`） | — |

</div>
</details>

<!--@include: ./includes/overlay-layer-methods.md-->

<!--@include: ./includes/layer-methods.md-->

## 静态方法

<details><summary>fromJSON(json)</summary>
<div>
<br/>

从图层的json对象创建一个GLTFLayer对象。

```js
const json = layer.toJSON();

const layerCopied = maptalks.Layer.fromJSON(json);
```

返回：

* GLTFLayer

</div>
</details>

## 方法（2026 源码补充）

> [!NOTE]
> 以下 GLTFLayer 专属方法在 @maptalks/gl-layers 2026 源码中提供，旧版文档未收录：

| 方法 | 简化签名 | 说明 |
| --- | --- | --- |
| `setURLModifier` / `getURLModifier` | `(fn) / ()` | 设置/获取模型 url 改写函数 |
| `identify` | `(coordinate, options?): Object[]` | 按坐标识别模型（内部转成容器点后走拾取） |
| `identifyAtPoint` | `(point, options={}): Object[]` | 按容器点拾取模型；`options.filter` 过滤结果，`includeInternals` 返回内部数据 |
| `addGeometry` | `(geometries, fitView?)` | 添加几何体（支持 GeoJSON），逐个登记 pickingId |
| `addMarker` | `(markers)` | 添加 marker 到内部 markerMap |
| `setStyle` / `getStyle` | `(layerStyle) / ()` | 设置/获取图层 style（filter-symbol），setStyle 会触发 `setstyle` 事件 |
| `updateSymbol` | `(idx, symbolProperties)` | 更新 style 中第 idx 条 symbol，触发 `updatesymbol` 事件 |
| `getGLTFUrls` | `(): string[]` | 获取已加载的模型 url 列表 |
| `outlineBatch` / `outlineAll` / `cancelOutline` | `(filterIndex?) / () / ()` | 按 filter 索引批量描边 / 全部描边 / 取消描边 |
| `clear` | `()` | 清空所有几何体 |
| `toJSON` | `(options?)` | 导出图层 JSON |
| `static registerShader` / `removeShader` / `getShaders` | — | 注册/移除/获取 shader（内置 phong、pbr、pbr-lite、depth、pointline、wireframe） |

## 事件

<!--@include: ./includes/js-events-example.md-->

### 图层事件

<!--@include: ./includes/gltf-layer-events.md-->

### 继承自OverlayLayer的事件

<!--@include: ./includes/overlay-layer-events.md-->

### 继承自Layer的事件

<!--@include: ./includes/layer-events.md-->

> [!NOTE] 事件核对（2026 源码）
> - `modelload`：所有模型加载完成，参数为 `{ models: url 列表 }`
> - `modelerror`：模型加载出错，参数为 `{ url, info }`
> - `setstyle`：设置 style 后触发，参数 `{ style }`
> - `updatesymbol`：更新 symbol 后触发，参数 `{ index, symbol }`
> - `load` / `add`：marker 模型加载完成 / 添加时在 marker 上触发（含 layer 引用）

> 本文档已与 @maptalks/gl-layers 2026 源码核对（api-notes-others.md）
