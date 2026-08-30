---
title: Menuable
---

# Menuable

Menuable 是一个用于注入右键菜单能力的混入（mixin），它本身不是可实例化的类。它被混入到 `Map` 和 `Geometry` 等类中，使其拥有 `setMenu`、`openMenu` 等菜单操作能力。通过它，地图或几何对象可以方便地弹出一个 [Menu](./menu.md)。

```js
import { Map, Menuable } from "maptalks";
// Menuable 作为混入已被 Map/Geometry 使用
map.setMenu({ items: [{ item: "Item", click: () => {} }] });
map.openMenu(coordinate);
```

## 构造函数

**混入（mixin）**，不通过构造函数实例化。该混入被合入 `Map` 与 `Geometry` 等类中。

## 成员方法

- `setMenu(options): Object` — 为宿主对象设置菜单，`options` 为 [Menu](./menu.md) 的配置项。
- `getMenu(): Menu` — 获取宿主对象的菜单。
- `openMenu(coordinate?): Object` — 在指定坐标处打开菜单。
- `setMenuItems(items): Object` — 设置菜单项列表。
- `getMenuItems(): Object[]` — 获取菜单项列表。
- `closeMenu(): Object` — 关闭菜单。
- `removeMenu(): Object` — 移除菜单。
