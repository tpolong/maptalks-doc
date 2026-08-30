---
title: ToolTip
---

# ToolTip

ToolTip 是附着在几何对象上的提示气泡，继承自 `UIComponent`。它默认在鼠标悬停到几何对象上时，延迟一定时间后显示一段提示文本，常与几何对象的 `mouseover` 事件搭配使用。

```js
import { ToolTip } from "maptalks";

const toolTip = new ToolTip("Hello", {
  animation: "fade",
  showTimeout: 400
});

toolTip.addTo(geometry);
```

## 构造函数

```js
new ToolTip(content, options)
```

参数：

* `content` — 提示内容的字符串或 DOM 元素。
* `options` — 提示气泡配置项。

## options 配置项

| 配置名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| `width` | `Number` | 气泡宽度 | `0` |
| `height` | `Number` | 气泡高度 | `0` |
| `animation` | `String` | 显示动画 | `"fade"` |
| `containerClass` | `String` | 容器 CSS 类名 | `'maptalks-tooltip'` |
| `showTimeout` | `Number` | 显示前的延迟时长（毫秒） | `400` |

## 成员方法

- `addTo(owner): ToolTip` — 将提示气泡挂载到 `owner` 上。
- `setStyle(style): ToolTip` — 设置提示气泡的样式。
- `getStyle(): string` — 获取提示气泡的样式。
- `getContent(): String` — 获取提示内容。
