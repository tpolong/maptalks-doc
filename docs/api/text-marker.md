---
title: TextMarker
---

# TextMarker

TextMarker 是带文本的点标记抽象基类，继承自 [Marker](/api/marker)。它描述一个同时包含文本内容与背景框的标记，[TextBox](/api/text-box) 与 [Label](/api/label) 都继承自它。它是抽象类，不直接实例化，但可通过 `setContent`/`getContent` 统一管理文本，并将其拆分为文本符号与背景框符号两部分。

```js
import { TextBox } from "maptalks";
// 抽象基类，通常使用其子类 TextBox / Label
const textbox = new TextBox("This is a textbox", [0, 0], 200, 90);
```

## 构造函数

```js
new TextMarker(coordinates, options)
```

参数：

* `coordinates` — 标记的地理坐标（`[x, y]` 或 `Coordinate`）。
* `options` — 构造选项，继承自 [Marker](/api/marker)。
* 注意：TextMarker 为抽象类，构造函数仅供子类调用。

## options 配置项

TextMarker 无特有 options，配置项继承自 [Marker](/api/marker)（如 `symbol`、`draggable`、`zIndex`、`properties` 等）。

## 成员方法

- `getContent(): string` — 获取标签的文本内容。
- `setContent(content): this` — 设置新的文本内容，并触发 `contentchange` 事件。
- `toJSON()` — 序列化为 JSON 对象，会移除基类默认的 `symbol` 字段。
- `setSymbol(symbol): this` — 设置符号，自动将 `text*` 开头的属性归入文本符号、其余归入背景框符号。

## 静态方法

TextMarker 无特有静态方法。

## 事件

- `contentchange` — 当文本内容改变时触发，事件对象含 `old`、`new` 字段。
