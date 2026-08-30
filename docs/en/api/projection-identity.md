---
title: projection.IDENTITY
---

# projection.IDENTITY

projection.IDENTITY is a projection based on a Cartesian coordinate system, mixing in `projection.Common` and `measurer.Identity`. It maps x, y directly to planar coordinates without any projection transformation, useful for flat-surface maps such as indoor maps and game maps. It is an object mixin with no standalone constructor.

```js
import { projection } from "maptalks";

const p = projection.IDENTITY.project([100, 200]);
console.log(p.x, p.y); // 100, 200
```

## Properties / Static Methods

- `code: string` — The projection code, `'IDENTITY'`.

## Methods

- `project(p, out?): Coordinate` — Identity projection, copying x/y/z.
- `unproject(p, out?): Coordinate` — Identity unprojection, copying x/y/z.
- Additionally inherits projection / batch / sphere methods from `projection.Common`.
