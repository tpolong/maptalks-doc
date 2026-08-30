---
title: Toolbar
---

# Toolbar

Toolbar 是工具条控件，继承自 `Control`。它在地图上显示一排按钮或工具项，常用于放置绘图、测量等工具入口。支持水平/垂直两种布局，默认显示在右上角。

```js
import { Toolbar } from "maptalks";

const toolbar = new Toolbar({
  items: [
    { item: "Zoom", click: () => {} }
  ]
}).addTo(map);
```

## 构造函数

```js
new Toolbar(options)
```

参数：

* `options` — 工具条控件配置项。

## options 配置项

| 配置名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| `items` | `Array` | 工具项列表，每个元素为 `{ item, click, ... }` | `[]` |
| `height` | `Number` | 工具条高度（像素） | `28` |
| `vertical` | `Boolean` | 是否为垂直布局 | `false` |
| `position` | `String` | 控件位置 | `"top-right"` |
| `reverseMenu` | `Boolean` | 反向菜单布局 | `false` |
