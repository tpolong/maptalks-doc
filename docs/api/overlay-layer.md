---
title: OverlayLayer
---

# OverlayLayer

OverlayLayer是所有可添加/移除几何（geometry）的图层的基类，继承自 [Layer](/api/layer)。它本身是抽象类（`@abstract`），不直接实例化，提供了几何的增删、样式、识别等核心能力。`VectorLayer` 是其子类。

```js
import { VectorLayer } from "maptalks";

const layer = new VectorLayer("vector");
```

## 构造函数

```js
new OverlayLayer(id, geometries?, options?)
```

参数：

* **id** `String` 图层id（必填）。
* **geometries** `Geometry[] | Object` 待添加的几何数组，或配置对象。
* **options** `Object` 构造选项。

## options 配置项

| 配置名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| `drawImmediate` | Boolean | 是否立即绘制（而非按RAF帧绘制） | `false` |
| `geometryEvents` | Boolean | 是否触发几何事件 | `true` |
| `geometryEventTolerance` | Number | 几何事件判定容差（px） | `1` |
| `style` | any | 图层样式 | — |

## 成员方法

### 几何管理

- `addGeometry(geometries, fitView?): this` — 添加一个或多个几何
- `removeGeometry(geometries): this` — 移除一个或多个几何
- `getGeometryById(id): Geometry` — 按id获取几何
- `getGeometries(filter?): Geometry[]` — 获取全部或过滤后的几何
- `getFirstGeometry(): Geometry` / `getLastGeometry(): Geometry` — 底部/顶部几何
- `getCount(): number` — 几何数量
- `getExtent(): Extent` — 所有几何合并范围
- `forEach(fn, context?): this` — 遍历几何
- `filter(fn, context?): Geometry[]` — 过滤几何
- `isEmpty(): boolean` — 是否为空
- `clear(): this` — 清空几何

### 样式

- `getStyle(): any` / `setStyle(style): this` — 获取/设置图层样式
- `removeStyle(): this` — 移除图层样式

继承自 [Layer](/api/layer) 的通用方法同样适用。

## 静态方法

- `OverlayLayer.fromJSON(json)` — 从JSON还原图层

## 事件

| 事件 | 触发时机 |
| --- | --- |
| `addgeo` | 添加几何后 |
| `clear` | 清空图层后 |
| `setstyle` | 设置样式后 |
| `removestyle` | 移除样式后 |

图层通用事件见 [Layer](/api/layer)。
