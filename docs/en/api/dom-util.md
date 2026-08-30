---
title: DomUtil
---

# DomUtil

DomUtil is maptalks' collection of DOM utility functions (located in `core/util/dom.ts`), providing element creation/removal, class-name operations, style setting, event binding, and position/size measurement. It is a static function collection that is never instantiated; import it with `import { DomUtil } from "maptalks"`.

```js
import { DomUtil } from "maptalks";

const el = DomUtil.createEl("div", "marker");
DomUtil.addClass(el, "active");
```

## Main Functions

- `createEl(tagName, className?): HTMLElement` — Create an element, optionally with a class name.
- `removeDomNode(node?): void` — Remove a DOM node.
- `hasClass(el, name): boolean` — Whether the element has the given class name.
- `addClass(el, name): void` — Add a class name to the element.
- `setClass(el, name): void` — Set the element's class name.
- `setStyle(dom, strCss): void` — Apply styles to an element in batch.
- `setOpacity(el, value): void` — Set the element's opacity.
- `setTransform(el, offset): void` — Set the element's transform (translation).
- `offsetDom(dom, offset?): Point` — Get or set the element's offset.
- `computeDomPosition(dom): number[]` — Compute the element's page position `[x, y]`.
- `addDomEvent(obj, typeArr, handler, context?): void` — Bind events to an element/document.
- `removeDomEvent(obj, typeArr, handler): void` — Remove events (`off` is an alias).
- `preventDefault(event): void` — Prevent the default behavior.
- `stopPropagation(e): void` — Stop event propagation.
- `measureDom(parentTag, dom): Size` — Measure the dom's size under the given parent tag.
