---
title: Util
---

# Util

Util 是 maptalks 的通用工具函数集合（位于 `core/util/util.ts`），提供动画帧、图像加载、坐标遍历、数学插值、字符串/编码转换等一系列通用能力。它是静态函数集合，不会被实例化，通过 `import { Util } from "maptalks"` 使用。

```js
import { Util } from "maptalks";

const id = Util.UID();
console.log(Util.clamp(10, 0, 5)); // 5
```

## 主要函数

- `requestAnimFrame(callback): number` — 请求动画帧，Node 环境退化为 `setTimeout(cb, 16)`。
- `cancelAnimFrame(handle): void` — 取消动画帧。
- `loadImage(img, imgDesc): void` — 加载图片并回调图片描述信息。
- `UID(): number` — 生成唯一 id（`GUID` 为别名）。
- `parseJSON(str)` — 解析 JSON 字符串；非字符串或空值时原样返回，解析失败时抛异常。
- `removeFromArray(obj, array): void` — 从数组中移除指定元素。
- `forEachCoord(arr, fn, context?)` — 遍历多维坐标数组并对每个坐标执行回调。
- `interpolate(a, b, t): number` — 在 a、b 之间按比例 t 线性插值。
- `clamp(n, min, max): number` — 把 n 限制在 `[min, max]` 区间。
- `btoa(input): string` — base64 编码。
- `b64toBlob(b64Data, contentType): Blob` — 将 base64 字符串转为 Blob。
- `computeDegree(x0, y0, x1, y1): number` — 计算两点连线与 x 轴的夹角（弧度）。
- `flash(interval, count, cb, ctx): void` — 闪烁效果包装。
- `isURL(url): boolean` — 判断字符串是否为 URL。
- `extractCssUrl(str): string` — 从 CSS 的 `url(...)` 中提取地址。
