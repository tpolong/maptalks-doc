---
title: Attribution
---

# Attribution

Attribution 是版权署名控件，继承自 `Control`。它在地图上显示数据来源或版权信息，通常默认显示在左下角。通过 `setContent` 可动态更新署名内容。

```js
import { Attribution } from "maptalks";

const attribution = new Attribution({
  content: "© OpenStreetMap contributors"
}).addTo(map);
```

## 构造函数

```js
new Attribution(options)
```

参数：

* `options` — 署名控件配置项。

## options 配置项

| 配置名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| `position` | `Object` | 控件位置 | `{ bottom: 0, left: 0 }` |
| `content` | `String` / `HTMLElement` | 署名内容 | `'<a href="http://maptalks.org" target="_blank">maptalks</a>'` |
| `custom` | `Boolean` | 是否使用自定义内容 | `false` |

## 成员方法

- `getContent(): String` — 获取署名内容。
- `setContent(content): Attribution` — 设置署名内容。
