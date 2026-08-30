---
title: InfoWindow
---

# InfoWindow

InfoWindow 是地图气泡窗口，继承自 `UIComponent`。它在地图上以浮层气泡的形式展示内容，常用于点击要素后显示详情，包含标题与内容区，并可组合自定义 HTML。

```js
import { InfoWindow } from "maptalks";

const infoWindow = new InfoWindow({
  title: "Hello",
  content: "<div>World</div>"
});

infoWindow.addTo(map).show(coordinate);
```

## 构造函数

```js
new InfoWindow(options)
```

参数：

* `options` — 气泡窗口配置项，其部分属性同 `InfoWindow.options` 配置项。

## options 配置项

| 配置名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| `title` | `String` / `HTMLElement` | 气泡标题 | `null` |
| `content` | `String` / `HTMLElement` | 气泡内容 | `null` |
| `width` | `String` | 气泡宽度 | `'auto'` |
| `minHeight` | `Number` | 气泡最小高度 | `120` |
| `autoPan` | `Boolean` | 显示时是否自动平移地图 | `true` |
| `autoCloseOn` | `String` | 触发自动关闭的事件 | `null` |
| `autoOpenOn` | `String` | 触发自动打开的事件 | `'click'` |
| `custom` | `Boolean` | 是否使用自定义内容 | `false` |
| `enableTemplate` | `Boolean` | 是否使用默认模板 | `false` |

## 成员方法

- `setTitle(title): InfoWindow` — 设置气泡标题。
- `getTitle(): String` — 获取气泡标题。
- `setContent(content): InfoWindow` — 设置气泡内容。
- `getContent(): String` — 获取气泡内容。
- `addTo(owner): InfoWindow` — 将气泡挂载到 `owner` 上。
- `show(coordinate): InfoWindow` — 在指定坐标处显示气泡。
- `getOffset(): Point` — 获取气泡偏移。
- `getTransformOrigin(): String` — 获取气泡的变换原点。

## 事件

- `contentchange` — 气泡内容改变时触发。
