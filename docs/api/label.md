---
title: Label
---

# Label

Label 是用于绘制文本标注的点几何类，继承自 [TextMarker](/api/text-marker)。它在指定坐标上绘制文本，并可选绘制一个自适应文本尺寸的背景框，可分别设置文本符号与框样式（内边距、对齐、最小宽高）。

```js
import { Label } from "maptalks";

const label = new Label("label with a box", [0, 0], {
  draggable: true,
  boxStyle: {
    padding: [12, 8],
    verticalAlignment: "top",
    horizontalAlignment: "right",
    minWidth: 300,
    minHeight: 200,
    symbol: {
      markerType: "square",
      markerFill: "rgb(135,196,240)",
      markerFillOpacity: 0.9,
      markerLineColor: "#34495e",
      markerLineWidth: 1,
    },
  },
  textSymbol: {
    textFaceName: "monospace",
    textFill: "#34495e",
    textHaloFill: "#fff",
    textHaloRadius: 4,
    textSize: 18,
    textWeight: "bold",
    textVerticalAlignment: "top",
  },
});
```

## 构造函数

```js
new Label(content, coordinates, options?)
```

参数：

* `content` — 标注的文本内容。
* `coordinates` — 标注的地理坐标（`[x, y]` 或 `Coordinate`）。
* `options` — （可选）构造选项，见下表。

## options 配置项

| 配置名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| `boxStyle` | `object` | 背景框样式，含 `padding`（文本内边距，默认 `[12, 8]`）、`verticalAlignment`（垂直对齐，`top/middle/bottom`，默认 `middle`）、`horizontalAlignment`（水平对齐，`left/middle/right`，默认 `middle`）、`minWidth`（最小宽度，默认 `0`）、`minHeight`（最小高度，默认 `0`）及 `symbol`（框符号） | `null` |
| `textSymbol` | `object` | 文本符号，如 `textFaceName`、`textSize`、`textFill`、`textVerticalAlignment` 等 | `null` |

其余配置项继承自 [Marker](/api/marker)（如 `draggable`、`zIndex`、`properties` 等）。

## 成员方法

- `getBoxStyle(): object` / `setBoxStyle(style): this` — 获取/设置背景框样式。
- `getTextSymbol(): object` / `setTextSymbol(symbol): this` — 获取/设置文本符号。
- `_canEdit(): boolean` — 是否可编辑，Label 固定返回 `false`（不支持手柄缩放的文本标注）。

## 静态方法

- `fromJSON(json): Label` — 从 JSON 对象创建 Label 实例。

## 事件

- `contentchange` — 文本内容改变时触发（继承自 [TextMarker](/api/text-marker)）。
