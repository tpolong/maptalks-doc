---
title: Size
---

# Size

Size 是一个表示宽度和高度的值对象，用于描述地图、图层、标记等实体的尺寸。它没有继承任何基类，可通过两个数字、一个数组或一个 `{ width, height }` 对象来创建。

```js
import { Size } from "maptalks";
// 用法示例
const size = new Size(100, 50);
console.log(size.width, size.height); // 100 50
```

## 构造函数

```js
new Size(width, height)
new Size([w, h])
new Size({ width, height })
new Size(size)
```

参数：

* `width`、`height` — 两个数字，宽和高；或一个 `[w, h]` 数组；或一个 `{ width, height }` 对象；或另一个 `Size`。

## 成员方法

- `copy(): Size` — 返回当前大小的拷贝。
- `add(x, y?): Size` — 返回与另一个 `Size`（或宽高值）相加后的新大小。
- `multi(ratio): Size` — 返回当前大小乘以给定数字后的新大小。
- `equals(size): boolean` — 判断与另一个 `Size` 是否相等。
- `toPoint(): Point` — 将当前大小转换为 `Point` 对象。
- `toArray(): [width, height]` — 转换为数组。
- `toJSON(): { width, height }` — 转换为 JSON 对象。

## 静态方法

Size 没有静态方法。

## 事件

Size 没有事件。
