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

<!-- api-gen:start -->
### TextMarker 的其他公开方法

<!--@include: ./includes/api/text-marker-missing.md-->

### 继承自 Marker 的方法

下列方法由父类 [Marker](/api/marker) 提供，本类的实例同样可以调用。

<!--@include: ./includes/api/marker-methods.md-->

### 继承自 Geometry 的方法

下列方法由父类 [Geometry](/api/geometry) 提供，本类的实例同样可以调用。

<!--@include: ./includes/api/geometry-methods.md-->

### 混入的方法

本类通过混入获得以下能力的方法，详见对应页面：[CenterMixin](/api/center-mixin)（`getCoordinates`、`setCoordinates`、`getMap`、`onPositionChanged`…）；[JSONAble](/api/json-able)（`getJSONType`…）；[Eventable](/api/eventable)（`on`、`addEventListener`、`once`、`off`、`removeEventListener`、`listens`、`getListeningEvents`、`copyEventListeners`…）；[Handlerable](/api/handlerable)；[Menuable](/api/menuable)。
<!-- api-gen:end -->

## 静态方法

TextMarker 无特有静态方法。

## 事件

- `contentchange` — 当文本内容改变时触发，事件对象含 `old`、`new` 字段。

<!-- api-gen:start -->
### 继承自 Geometry 的事件

<!--@include: ./includes/api/geometry-events.md-->
<!-- api-gen:end -->
