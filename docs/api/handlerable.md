---
title: Handlerable
---

# Handlerable

`Handlerable` 是 maptalks 的交互处理器管理混入（mixin）工厂，让宿主类（如 Map）能够注册、移除和复用多个 `Handler` 子类。宿主类通过 `addHandler` 把某个处理器与名称绑定，通过 `removeHandler` 解绑，从而实现交互能力的可插拔管理。

```js
import { Class, Handler, Handlerable } from "maptalks";

const MapWithHandlers = Class.extend({ /* ... */ }).include(Handlerable).include({
  onAdd() {
    this.addHandler("drag", DragHandler);
  }
});
```

## 构造函数

混入工厂，无独立构造。宿主类构造后自动获得处理器管理能力。

## options 配置项

无独立配置项。

## 成员方法

- `addHandler(name, handlerClass): this` — 以名称 `name` 注册并实例化 `handlerClass` 处理器，返回 `this` 以支持链式调用。
- `removeHandler(name): this` — 移除名称为 `name` 的处理器并释放资源，返回 `this`。

## 静态方法

无。

## 事件

无。
