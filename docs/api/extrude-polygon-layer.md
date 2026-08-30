---
title: ExtrudePolygonLayer
---

# ExtrudePolygonLayer

ExtrudePolygonLayer 是[PolygonLayer](./polygon-layer)的 WebGL 三维拉伸图层，它会把 Polygon / MultiPolygon 数据按高度属性拉伸为三维体（建筑等），顶面和侧面分别使用独立的材质渲染。

它是[Vector3DLayer](./line-string-layer)的子类，继承了 Vector3DLayer 上所有的方法，并额外支持顶面/侧面独立材质与拉伸数据配置。

## 构造函数

```js
import { ExtrudePolygonLayer } from '@maptalks/gl-layers';

const layer = new ExtrudePolygonLayer('extrude');
```

## 构造 options

ExtrudePolygonLayer 在 Vector3DLayer 的选项基础上追加以下配置：

| 配置名 | 类型 | 描述 | 默认值 |
| :------ | :------ | :------ | :------ |
| `dataConfig` | Object | 拉伸数据配置（LitDataConfig），见下方默认值 | 见下方 |
| `material` | Object | 顶面 PBR 材质（LitMaterial），不设置时使用默认材质渲染 | 无 |
| `sideMaterial` | Object | 侧面材质，缺省时使用 `material` | 无 |
| `cullFace` | Boolean | 是否启用面剔除 | `false` |
| `castShadow` | Boolean | 是否投射阴影 | `true` |
| `depthMask` | Boolean | 深度写入开关 | 无 |

**默认 dataConfig**：

```js
{
  altitudeProperty: 'height',       // 要素属性 height 作为拉伸高度
  minHeightProperty: 'min_height',  // 要素属性 min_height 作为最小高度
  defaultAltitude: 20,              // 无 height 属性时的默认拉伸高度（米）
  perPositionHeight: false
}
```

即：要素的 `height` 属性决定拉伸高度，`min_height` 决定底部高度，未设置时默认拉伸 20 米。

## 成员方法

<details><summary>updateMaterial(material)</summary>
<div>

更新顶面材质。

参数：

* material **Object** 顶面 PBR 材质（LitMaterial），传 `null` 清除

返回：

* **ExtrudePolygonLayer** this

</div>
</details>

<details><summary>updateSideMaterial(material)</summary>
<div>

更新侧面材质，传 `null` 时回退使用顶面材质。

返回：

* **ExtrudePolygonLayer** this

</div>
</details>

<details><summary>updateDataConfig(dataConfig)</summary>
<div>

更新拉伸数据配置（如 `altitudeProperty`、`defaultAltitude` 等）。

返回：

* **ExtrudePolygonLayer** this

</div>
</details>

## Symbol 样式

ExtrudePolygonLayer 支持的 symbol 属性：

| 属性 | 说明 | 默认值 |
| :------ | :------ | :------ |
| `polygonFill` | 填充色 | `[1, 1, 1, 1]` |
| `polygonOpacity` | 填充透明度 | `1` |
| `topPolygonFill` | 顶面颜色 | `[1, 1, 1, 1]` |
| `bottomPolygonFill` | 底面颜色 | `[1, 1, 1, 1]` |

对 Circle、Ellipse、Sector、Rectangle 等特殊几何，图层会自动计算最小外接矩形（OMBB）并转换为多边形后拉伸。

> 本文档已与 @maptalks/gl-layers 2026 源码核对（api-notes-vt-gl.md）
