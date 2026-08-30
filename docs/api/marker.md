---
title: Marker
---

# Marker

Marker是最常用的点标记几何，用于在指定地理坐标上绘制一个标记图标（矢量、图片或SVG路径标记）。它继承自 [Geometry](/api/geometry)，`getCoordinates()`/`setCoordinates()` 由 `CenterMixin` 提供。

```js
import { VectorLayer, Marker } from "maptalks";

const layer = new VectorLayer("vector");
const marker = new Marker([100, 0], {
  symbol: {
    markerType: "path",
    markerPath: "M 0 0 L 10 10 L 0 10 Z",
    markerFill: "#DE3333",
  },
}).addTo(layer);
```

## 构造函数

```js
new Marker(coordinates, options?)
```

参数：

* **coordinates** `Coordinate | Number[]` 标记的地理坐标（`[x,y]` 或 `Coordinate`，可含z）。
* **options** `Object` 构造选项。

## options 配置项

### Marker 自身

| 配置名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| `symbol` | Object | 标记样式 | path类型内置样式 |
| `hitTestForEvent` | Boolean | 是否对事件做命中测试 | `false` |
| `collision` | Boolean | 是否参与碰撞检测 | `true` |

继承自 [Geometry](/api/geometry) 的 `id`、`visible`、`interactive`、`draggable`、`zIndex`、`properties` 等同样适用。

### symbol 中的 Marker 样式

**通用标记属性**（MarkerCommonSymbol）：

| 配置名 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| `markerType` | String | `'path'` | 矢量标记类型（ellipse/cross/x/diamond/bar/square/rectangle/triangle/pin/pie/path） |
| `markerFile` | String | — | 图片标记URL（优先级最高） |
| `markerWidth` / `markerHeight` | Number | `24 × 34` | 标记像素宽/高 |
| `markerDx` / `markerDy` | Number | `0` | 标记相对锚点的像素偏移 |
| `markerHorizontalAlignment` | String | 依类型 | 水平对齐 |
| `markerVerticalAlignment` | String | 依类型 | 垂直对齐 |
| `markerPlacement` | String | `'point'` | 放置方式 |
| `markerRotation` | Number | `0` | 旋转角度（度） |
| `markerOpacity` | Number | `1` | 不透明度 |

**矢量标记特有**：`markerFill`、`markerFillOpacity`、`markerFillPatternFile`、`markerLineColor`、`markerLineWidth`、`markerLineOpacity`、`markerLineDasharray`。

**图片标记特有**：`markerFile`。

**路径标记特有**（Marker 默认）：`markerPath`、`markerPathWidth`、`markerPathHeight`、`markerFill`、`markerLineColor` 等。

**文本标记**（Marker 也支持）：`textName`、`textFaceName`、`textSize`、`textFill`、`textOpacity`、`textHaloFill`、`textHaloRadius`、`textWrapWidth`、`textLineSpacing`、`textDx`、`textDy` 等。

## 成员方法

- `getCoordinates(): Coordinate` / `setCoordinates(coordinates): this` — 获取/设置标记坐标（来自 CenterMixin）
- `getOutline(): Marker` — 返回以当前标记包围盒为方框的轮廓标记

其余方法（`getCenter`、`getExtent`、`getSymbol`/`setSymbol`、`getProperties`/`setProperties`、`getId`/`setId`、`show`/`hide`、`translate`、`addTo`/`remove`、`toGeoJSON`/`toJSON` 等）继承自 [Geometry](/api/geometry)。

## 静态方法

- `Marker.mergeOptions(options): this` — 合并默认配置
- `Marker.fromJSON(json)` — 从JSON还原几何（沿用 Geometry.fromJSON）

## 事件

Marker 的事件均继承自 [Geometry](/api/geometry)：`positionchange`、`symbolchange`、`idchange`、`propertieschange`、`zindexchange`、`show`/`hide`、`removestart`/`removeend`/`remove` 等。

```js
marker.on("positionchange", () => {
  console.log("marker at", marker.getCoordinates());
});
```
