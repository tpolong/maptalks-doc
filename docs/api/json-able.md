---
title: JSONAble
---

# JSONAble

`JSONAble` 是 maptalks 的 JSON 序列化混入（mixin）工厂，为宿主类提供类型识别与 JSON 序列化/反序列化能力。通过注册 JSON 类型与对应的类，`JSONAble` 可以在序列化时标记对象类型，并在反序列化时根据类型标记还原出正确的类实例。

```js
import { JSONAble } from "maptalks";

class Foo extends JSONAble(Class) { /* ... */ }
Foo.registerJSONType("Foo"); // register this class for JSON
```

## 构造函数

混入工厂，无独立构造。宿主类构造后自动获得 JSON 序列化能力。

## options 配置项

无独立配置项。

## 成员方法

- `getJSONType(): string` — 返回对象用于 JSON 序列化的类型字符串（注册的类型键）；未注册时抛错。

## 静态方法

- `registerJSONType(type)` — 将当前类注册为指定的 JSON 类型名 `type`（通过具体类调用，如 `Foo.registerJSONType("Foo")`）。
- `getJSONClass(type)` — 根据 JSON 类型名称 `type` 查找对应的类。

## 事件

无。
