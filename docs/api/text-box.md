---
title: TextBox
---

# TextBox

TextBox 是用于绘制带文本内容矩形的点几何类，继承自 [TextMarker](/api/text-marker)。它在指定坐标上绘制一个文本框，可设置宽高、文本样式（自动换行、内边距、对齐方式）与背景框符号，并支持在编辑器中直接调整尺寸。

```js
import { TextBox } from "maptalks";

const textbox = new TextBox("This is a textbox", [0, 0], 200, 90, {
  draggable: true,
  textStyle: {
    wrap: true,
    padding: [12, 8],
    verticalAlignment: "top",
    horizontalAlignment: "right",
    symbol: {
      textFaceName: "monospace",
      textFill: "#34495e",
      textHaloFill: "#fff",
      textHaloRadius: 4,
      textSize: 18,
      textWeight: "bold",
    },
  },
  boxSymbol: {
    markerType: "square",
    markerFill: "rgb(135,196,240)",
    markerFillOpacity: 0.9,
    markerLineColor: "#34495e",
    markerLineWidth: 1,
  },
});
```

## 构造函数

```js
new TextBox(content, coordinates, width, height, options?)
```

参数：

* `content` — 文本框的文本内容。
* `coordinates` — 文本框的地理坐标（`[x, y]` 或 `Coordinate`）。
* `width` — 宽度（像素），默认 `100`。
* `height` — 高度（像素），默认 `40`。
* `options` — （可选）构造选项，见下表。

## options 配置项

| 配置名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| `textStyle` | `object` | 文本样式，含 `wrap`（是否自动换行，默认 `true`）、`padding`（文本内边距，默认 `[12, 8]`）、`verticalAlignment`（垂直对齐，`top/middle/bottom`，默认 `middle`）、`horizontalAlignment`（水平对齐，`left/middle/right`，默认 `middle`）及 `symbol`（文本符号） | `null` |
| `boxSymbol` | `object` | 背景框的矢量标记符号，如 `markerType`、`markerFill`、`markerLineColor` 等 | `null` |

其余配置项继承自 [Marker](/api/marker)（如 `draggable`、`zIndex`、`properties` 等）。

## 成员方法

- `getWidth(): number` / `setWidth(width): this` — 获取/设置文本框宽度（像素）。
- `getHeight(): number` / `setHeight(height): this` — 获取/设置文本框高度（像素）。
- `getBoxSymbol(): object` / `setBoxSymbol(symbol): this` — 获取/设置背景框符号。
- `getTextStyle(): object` / `setTextStyle(style): this` — 获取/设置文本样式。
- `startEdit(opts): this` — 开始编辑，宽高为函数类型时先解析为固定像素。
- `endEdit(): this` — 结束编辑，恢复函数类型的宽高定义。

<!-- api-gen:start -->
### TextBox 的其他公开方法

<!--@include: ./includes/api/text-box-missing.md-->

### 继承自 TextMarker 的方法

下列方法由父类 [TextMarker](/api/text-marker) 提供，本类的实例同样可以调用。

<!--@include: ./includes/api/text-marker-methods.md-->

### 继承自 Marker 的方法

下列方法由父类 [Marker](/api/marker) 提供，本类的实例同样可以调用。

<!--@include: ./includes/api/marker-methods.md-->

### 继承自 Geometry 的方法

下列方法由父类 [Geometry](/api/geometry) 提供，本类的实例同样可以调用。

<!--@include: ./includes/api/geometry-methods.md-->

### 混入的方法

本类通过混入获得以下能力的方法，详见对应页面：[CenterMixin](/api/center-mixin)（`getCoordinates`、`setCoordinates`、`getMap`、`onPositionChanged`…）；[JSONAble](/api/json-able)（`getJSONType`…）；[Eventable](/api/eventable)（`on`、`addEventListener`、`once`、`off`、`removeEventListener`、`listens`、`getListeningEvents`、`copyEventListeners`…）；[Handlerable](/api/handlerable)；[Menuable](/api/menuable)。
<!-- api-gen:end -->

## 静态方法

- `fromJSON(json): TextBox` — 从 JSON 对象创建 TextBox 实例。

## 事件

- `contentchange` — 文本内容改变时触发（继承自 [TextMarker](/api/text-marker)）。

<!-- api-gen:start -->
### 继承自 TextMarker 的事件

<!--@include: ./includes/api/text-marker-events.md-->

### 继承自 Geometry 的事件

<!--@include: ./includes/api/geometry-events.md-->
<!-- api-gen:end -->
