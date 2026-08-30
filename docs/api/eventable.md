---
title: Eventable
---

# Eventable

`Eventable` 是 maptalks 的事件系统混入（mixin）工厂，为宿主类提供完整的 on/off/once/fire 事件能力。它不单独实例化，而是通过 `Class.include(Eventable)` 或类似的混入机制合并到其他类（例如 Map、GroupLayer 等）中，使这些类可以监听、派发和管理事件。

```js
import { Eventable } from "maptalks";

class MyThing extends Eventable(Class) { /* ... */ }

const thing = new MyThing();
thing.on("click", () => console.log("clicked"));
thing.fire("click");
thing.off("click", () => console.log("clicked"));
```

## 构造函数

混入工厂，无独立构造。宿主类构造后自动获得事件能力。

## options 配置项

无独立配置项。事件相关行为由宿主类自身的 `options` 决定。

## 成员方法

- `on(events, handler, context?)` — 为指定事件注册监听器。`events` 可为单个事件名或以空格分隔的多个事件名；`handler` 为回调；`context` 可选，指定回调的 `this` 上下文。
- `addEventListener(events, handler, context?)` — `on` 的别名。
- `off(events, handler, context?)` — 移除事件监听器，需精确匹配事件名与 `handler`；未传 `handler` 时不移除任何监听。
- `removeEventListener(events, handler, context?)` — `off` 的别名。
- `once(events, handler, context?)` — 注册只触发一次的监听器，触发后自动移除。
- `listens(eventType, handler?, context?)` — 判断是否存在指定事件的监听器；传入 `handler` 时精确判断该回调是否被监听。
- `getListeningEvents()` — 返回当前实例已注册的所有事件及其监听器列表。
- `copyEventListeners(target)` — 将当前实例的事件监听器复制到目标对象 `target` 上。
- `fire(eventType, param?)` — 派发（触发）指定类型的事件，`param` 作为事件数据传给监听器。

## 静态方法

无。

## 事件

由宿主类决定是否触发具体事件。`fire()` 触发的事件类型即为监听器接收的类型。
