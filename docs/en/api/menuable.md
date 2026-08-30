---
title: Menuable
---

# Menuable

Menuable is a mixin that injects right-click menu capability. It is not an instantiable class by itself. It is mixed into classes such as `Map` and `Geometry`, giving them menu operations like `setMenu` and `openMenu`. Through it, a map or a geometry can easily pop up a [Menu](./menu.md).

```js
import { Map, Menuable } from "maptalks";
// Menuable is mixed into Map/Geometry
map.setMenu({ items: [{ item: "Item", click: () => {} }] });
map.openMenu(coordinate);
```

## Constructor

**Mixin** — it is not instantiated via a constructor. The mixin is merged into classes such as `Map` and `Geometry`.

## Member Methods

- `setMenu(options): Object` — Sets a menu for the host object. `options` are the [Menu](./menu.md) options.
- `getMenu(): Menu` — Gets the menu of the host object.
- `openMenu(coordinate?): Object` — Opens the menu at the given coordinate.
- `setMenuItems(items): Object` — Sets the menu item list.
- `getMenuItems(): Object[]` — Gets the menu item list.
- `closeMenu(): Object` — Closes the menu.
- `removeMenu(): Object` — Removes the menu.
