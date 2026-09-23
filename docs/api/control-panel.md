---
title: Panel
---

# Panel

Panel 是可拖动面板控件，继承自 `Control`。它在地图上显示一个可拖动、可关闭的面板，用于承载自定义内容（如说明、图例、操作区）。默认显示在右上角。

```js
import { Panel } from "maptalks";

const panel = new Panel({
  draggable: true,
  content: "<div>Hello World</div>",
  closeButton: true
}).addTo(map);
```

## 构造函数

```js
new Panel(options)
```

参数：

* `options` — 面板控件配置项。

## options 配置项

| 配置名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| `position` | `String` | 控件位置 | `"top-right"` |
| `draggable` | `Boolean` | 是否可拖动 | `true` |
| `custom` | `Boolean` | 是否使用自定义内容 | `false` |
| `content` | `String` / `HTMLElement` | 面板内容 | `""` |
| `closeButton` | `Boolean` | 是否显示关闭按钮 | `true` |

## 成员方法

- `setContent(content): Panel` — 设置面板内容。
- `getContent(): String` — 获取面板内容。
- `update()` — 更新面板。

<!-- api-gen:start -->
### Panel 的其他公开方法

<!--@include: ./includes/api/control-panel-missing.md-->

### 继承自 Control 的方法

下列方法由父类 [Control](/api/control) 提供，本类的实例同样可以调用。

<!--@include: ./includes/api/control-methods.md-->

### 混入的方法

本类通过混入获得以下能力的方法，详见对应页面：[Eventable](/api/eventable)（`on`、`addEventListener`、`once`、`off`、`removeEventListener`、`listens`、`getListeningEvents`、`copyEventListeners`…）。
<!-- api-gen:end -->

## 事件

- `contentchange` — 面板内容改变时触发。
- `dragstart` — 开始拖动时触发。
- `dragging` — 拖动过程中触发。
- `dragend` — 拖动结束时触发。
- `close` — 面板被关闭时触发。

<!-- api-gen:start -->
### 继承自 Control 的事件

<!--@include: ./includes/api/control-events.md-->
<!-- api-gen:end -->
