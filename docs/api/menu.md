---
title: Menu
---

# Menu

Menu 是右键上下文菜单，继承自 `UIComponent`。它在地图上弹出包含若干菜单项的菜单，通常配合地图或几何对象的右键事件使用。它支持自定义菜单项列表、最大高度和显示/隐藏动画。

```js
import { Menu } from "maptalks";

const menu = new Menu({
  items: [
    { item: "Item 1", click: () => {} },
    { item: "Item 2", click: () => {} }
  ]
});

menu.addTo(map).show(coordinate);
```

## 构造函数

```js
new Menu(options)
```

参数：

* `options` — 菜单配置项，其部分属性同 `Menu.options` 配置项。

## options 配置项

| 配置名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| `items` | `Array` | 菜单项列表，每个元素为 `{ item, click, children, ... }` | `[]` |
| `width` | `Number` | 菜单宽度 | `160` |
| `maxHeight` | `Number` | 菜单最大高度 | `0` |
| `custom` | `Boolean` | 是否使用自定义内容 | `false` |
| `animation` | `String` | 显示动画类型 | `null` |
| `animationDelay` | `Number` | 动画延迟 | `10` |
| `animationOnHide` | `Boolean` | 隐藏时是否使用动画 | `false` |
| `autoPan` | `Boolean` | 显示时是否自动平移地图 | `false` |

## 成员方法

- `setItems(items): Menu` — 设置菜单项列表。
- `getItems(): Object[]` — 获取菜单项列表。
- `addTo(owner): Menu` — 将菜单挂载到 `owner` 上。
- `getOffset(): Point` — 获取菜单偏移。
- `getTransformOrigin(): String` — 获取菜单的变换原点。
