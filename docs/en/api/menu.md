---
title: Menu
---

# Menu

Menu is the right-click context menu. It extends `UIComponent`. It pops up a menu containing several menu items on the map, usually used with the right-click event of a map or a geometry. It supports custom menu items, a maximum height and show/hide animations.

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

## Constructor

```js
new Menu(options)
```

Parameters:

* `options` — Menu options. Some properties match the `Menu.options` table below.

## options

| Name | Type | Description | Default |
| --- | --- | --- | --- |
| `items` | `Array` | The menu item list. Each element is `{ item, click, children, ... }` | `[]` |
| `width` | `Number` | The menu width | `160` |
| `maxHeight` | `Number` | The maximum height of the menu | `0` |
| `custom` | `Boolean` | Whether custom content is used | `false` |
| `animation` | `String` | The show animation type | `null` |
| `animationDelay` | `Number` | The animation delay | `10` |
| `animationOnHide` | `Boolean` | Whether to animate on hide | `false` |
| `autoPan` | `Boolean` | Whether to auto-pan the map when shown | `false` |

## Member Methods

- `setItems(items): Menu` — Sets the menu item list.
- `getItems(): Object[]` — Gets the menu item list.
- `addTo(owner): Menu` — Attaches the menu to `owner`.
- `getOffset(): Point` — Gets the menu offset.
- `getTransformOrigin(): String` — Gets the transform origin of the menu.
