---
title: Handler
---

# Handler

`Handler` 是 maptalks 中所有交互处理器的抽象基类，用于实现地图与用户的交互逻辑，例如拖拽、缩放、旋转、双击、键盘操作等。子类通过实现 `addHooks`/`removeHooks` 来定义 on 与 off 时的行为，并可使用 `enable`/`disable` 控制处理器是否生效。

```js
import { Handler } from "maptalks";

class MyHandler extends Handler {
  addHooks() {
    this.target.on("click", this._onClick, this);
  }
  removeHooks() {
    this.target.off("click", this._onClick, this);
  }
}

const handler = new MyHandler(map);
handler.enable();
```

## 构造函数

```js
new Handler(target)
```

参数：

* `target` — `Object`。处理器所作用的目标对象，通常是 Map 或某个交互组件。

## options 配置项

`Handler` 本身不定义配置项。

## 成员方法

- `enable(): this` — 启用处理器，调用 `addHooks` 开始监听交互。
- `disable(): this` — 停用处理器，调用 `removeHooks` 解除监听。
- `enabled(): boolean` — 返回处理器当前是否处于启用状态。
- `remove()` — 移除并销毁处理器。

### 抽象方法（需子类实现）

- `addHooks()` — 启用时执行，注册所需的交互事件监听。
- `removeHooks()` — 停用时执行，移除已注册的交互事件监听。

## 静态方法

无。

## 事件

`Handler` 本身不触发事件，具体交互事件由宿主对象（如 Map）派发。
