---
title: UIMarker
---

# UIMarker

UIMarker 是基于 HTMLElement 的可拖拽标记，继承自 `UIComponent`。它用于将任意 HTML 内容绑定到地图上的坐标，并支持拖拽、海拔设置、按缩放级别显隐等功能。是地图上最常用的 HTML 标注组件。

```js
import { UIMarker } from "maptalks";

const marker = new UIMarker([100, 30], {
  draggable: true,
  content: "<div class='my-marker'>Marker</div>"
}).addTo(map);
```

## 构造函数

```js
new UIMarker(coordinate, options)
```

参数：

* `coordinate` — 标记所在的坐标（`Coordinate` 或 `[x, y]`）。
* `options` — 标记配置项，其部分属性同 `UIMarker.options` 配置项。

## options 配置项

| 配置名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| `content` | `HTMLElement` / `String` | 标记的内容 | `null` |
| `draggable` | `Boolean` | 是否可拖拽 | `false` |
| `single` | `Boolean` | 是否保持唯一 | `false` |
| `altitude` | `Number` | 标记的海拔高度 | `0` |
| `minZoom` | `Number` | 最小显示缩放级别 | `0` |
| `maxZoom` | `Number` | 最大显示缩放级别 | `null` |
| `horizontalAlignment` | `String` | 水平对齐方式 | `"middle"` |
| `verticalAlignment` | `String` | 垂直对齐方式 | `"middle"` |
| `containerClass` | `String` | 容器的 CSS 类名 | `null` |

## 成员方法

- `setCoordinates(coordinate): UIMarker` — 设置标记坐标。
- `getCoordinates(): Coordinate` — 获取标记坐标。
- `getCenter(): Coordinate` — 获取标记中心坐标。
- `getAltitude(): Number` — 获取标记海拔。
- `setAltitude(altitude): UIMarker` — 设置标记海拔。
- `setContent(content): UIMarker` — 设置标记内容。
- `getContent(): HTMLElement` — 获取标记内容。
- `flash(interval, count, cb, ctx): UIMarker` — 让标记闪烁指定次数，`interval` 为闪烁间隔、`count` 为次数、`cb` 为每帧回调、`ctx` 为回调上下文。
- `isDragging(): boolean` — 判断标记是否正在被拖拽。

## 事件

- `positionchange` — 标记位置改变时触发。
- `contentchange` — 标记内容改变时触发。
- `dragstart` — 开始拖拽时触发。
- `dragging` — 拖拽过程中触发。
- `dragend` — 拖拽结束时触发。
