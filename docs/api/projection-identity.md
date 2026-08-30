---
title: projection.IDENTITY
---

# projection.IDENTITY

projection.IDENTITY 是基于笛卡尔坐标系的投影对象，混入 `projection.Common` 与 `measurer.Identity`。它直接把 x、y 映射为平面坐标，不做任何投影变换，常用于室内地图、游戏地图等平面地图。它是一个对象 mixin，没有独立的构造函数。

```js
import { projection } from "maptalks";

const p = projection.IDENTITY.project([100, 200]);
console.log(p.x, p.y); // 100, 200
```

## 属性 / 静态方法

- `code: string` — 投影代码，`'IDENTITY'`。

## 方法

- `project(p, out?): Coordinate` — 恒等投影，复制 x/y/z。
- `unproject(p, out?): Coordinate` — 恒等反投影，复制 x/y/z。
- 继承自 `projection.Common` 的投影/批量/球面方法。
