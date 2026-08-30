---
title: projection.BAIDU
---

# projection.BAIDU

projection.BAIDU 是[百度地图](http://map.baidu.com)所使用的投影对象，混入 `projection.Common`、`measurer.BaiduSphere` 及内部的墨卡托/坐标转换方法。它负责在百度墨卡托平面坐标（MC）与经纬度（LL）之间转换。它是一个对象 mixin，没有独立的构造函数。

```js
import { projection } from "maptalks";

const p = projection.BAIDU.project([116.404, 39.915]); // 百度墨卡托坐标
```

## 属性 / 静态方法

- `code: string` — 投影代码，`'BAIDU'`。
- `EARTHRADIUS` — 地球半径，`6370996.81`。
- `MCBAND` / `LLBAND` / `MC2LL` / `LL2MC` — 百度坐标转换的系数表。

## 方法

- `project(p, out?): Coordinate` — 经纬度转百度墨卡托坐标（内部调用 `convertLL2MC`）。
- `unproject(p, out?): Coordinate` — 百度墨卡托坐标转经纬度（内部调用 `convertMC2LL`）。
- `convertLL2MC` / `convertMC2LL` / `convertor` — 底层坐标转换方法。
- 继承自 `projection.Common` 的投影/批量/球面方法。
