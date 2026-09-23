---
title: ImageLayer
---

# ImageLayer

ImageLayer 是用于显示带地理范围图片的图层，继承自 [Layer](/api/layer)。每张图片可指定地理 extent（范围）与透明度。gl 渲染器要求图片满足 CORS 且可倾斜，canvas 渲染器不要求 CORS 但不能倾斜。

```js
import { Map, ImageLayer } from "maptalks";

const map = new Map("map", { center: [0, 0], zoom: 2 });

const layer = new ImageLayer("images", [
  {
    url: "http://example.com/foo.png",
    extent: [xmin, ymin, xmax, ymax],
    opacity: 1,
  },
]).addTo(map);
```

## 构造函数

```js
new ImageLayer(id, images?, options?)
```

参数：

* **id** `String` 图层 id。
* **images** `ImageItem[]`（可选）图片项数组，见下表。
* **options** `Object` 图层配置项（可选）。

### images 图片项

| 字段 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| `url` | String | 图片地址 | — |
| `extent` | Extent\|`[xmin,ymin,xmax,ymax]` | 图片覆盖的地理范围 | — |
| `opacity` | Number | 图片透明度 | `1` |

## options 配置项

| 配置名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| `renderer` | String | 渲染器（`gl`/`canvas`） | `webgl?'gl':'canvas'` |
| `crossOrigin` | String | 图片 crossOrigin 属性 | `null` |
| `alphaTest` | Boolean | gl 渲染时丢弃 `alpha<=alphaTest` 的像素 | `false` |
| `depthMask` | Boolean | gl 渲染时是否写入深度缓冲 | `true` |
| `depthFunc` | String | gl 渲染深度函数（`never,<,=,<=,>,!=,>=,always`） | `'<='` |

## 成员方法

- `setImages(images: ImageItem[]): this` — 设置图片并重绘
- `getImages(): ImageItem[]` — 获取图片项

<!-- api-gen:start -->
### ImageLayer 的其他公开方法

<!--@include: ./includes/api/image-layer-missing.md-->

### 继承自 Layer 的方法

下列方法由父类 [Layer](/api/layer) 提供，本类的实例同样可以调用。

<!--@include: ./includes/api/layer-methods.md-->

### 混入的方法

本类通过混入获得以下能力的方法，详见对应页面：[JSONAble](/api/json-able)（`getJSONType`…）；[Eventable](/api/eventable)（`on`、`addEventListener`、`once`、`off`、`removeEventListener`、`listens`、`getListeningEvents`、`copyEventListeners`…）；[Renderable](/api/renderable)。
<!-- api-gen:end -->

## 静态方法

<!-- api-gen:start -->
### ImageLayer 的其他静态方法

<!--@include: ./includes/api/image-layer-statics-missing.md-->

### 继承自 Layer 的静态方法

下列方法由父类 [Layer](/api/layer) 提供，本类的实例同样可以调用。

<!--@include: ./includes/api/layer-statics.md-->
<!-- api-gen:end -->

## 事件

图层通用事件（`show`/`hide`、`setopacity`、`add`/`remove`、`layerload` 等）见 [Layer](/api/layer)。

<!-- api-gen:start -->
### 继承自 Layer 的事件

<!--@include: ./includes/api/layer-events.md-->
<!-- api-gen:end -->
