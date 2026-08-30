---
title: UIComponent
---

# UIComponent

UIComponent is the abstract base class for DOM-based UI components. It extends `Class` and `Eventable`. UIMarker, InfoWindow, Menu, ToolTip and so on all extend it. It attaches a set of DOM elements to a map or a geometry object and provides common capabilities such as show/hide, positioning and collision. The static `isSupport` method tells whether an object supports hosting a UI component.

```js
import { UIComponent } from "maptalks";
// UIComponent is an abstract base class, usually a subclass is used
const marker = new UIMarker(coordinate, { content: "<div>Hello</div>" }).addTo(map);
```

## Constructor

```js
new UIComponent(options)
```

Parameters:

* `options` — UI component options.

## options

| Name | Type | Description | Default |
| --- | --- | --- | --- |
| `animation` | `String` | The animation effect on show/hide, one of `fade`, `scale` or `fade,scale` | `'scale'` |
| `animationDuration` | `Number` | Duration of the animation, in milliseconds | `500` |
| `single` | `Boolean` | Whether a single instance per object is kept | `true` |
| `eventsPropagation` | `Boolean` | Whether UI events are propagated | `false` |
| `eventsToStop` | `Array` | Events whose bubbling is blocked (effective when `eventsPropagation` is true) | `null` |
| `autoPan` | `Boolean` | Whether to auto-pan the map to fit the component when shown | `false` |
| `dx` | `Number` | Horizontal offset | `0` |
| `dy` | `Number` | Vertical offset | `0` |
| `collision` | `Boolean` | Whether the component participates in collision detection | `false` |
| `zIndex` | `Number` | The z-index of the component | `0` |
| `visible` | `Boolean` | Whether the component is visible | `true` |

## Member Methods

- `addTo(owner): UIComponent` — Attaches the component to `owner` (a map or a geometry object).
- `getMap(): Map` — Gets the map the component is attached to.
- `show(coordinate): UIComponent` — Shows the component at the given coordinate.
- `hide(): UIComponent` — Hides the component.
- `isVisible(): boolean` — Whether the component is visible.
- `remove(): UIComponent` — Removes the component from its host.
- `getSize(): Size` — Gets the component's size.
- `getDOM(): HTMLElement` — Gets the component's DOM element.
- `setZIndex(z): UIComponent` — Sets the component's z-index.
- `getPosition(): Point` — Gets the component's current position.
- `getOwner(): Object` — Gets the component's host object.

## Static Methods

- `isSupport(owner): boolean` — Whether `owner` supports hosting a UI component.

## Events

- `add` — Fired when the component is attached.
- `showstart` — Fired when the component starts to show.
- `showend` — Fired when the component finishes showing.
- `hide` — Fired when the component is hidden.
- `remove` — Fired when the component is removed.
- `mouseover` — Fired when the mouse enters the component.
- `mouseout` — Fired when the mouse leaves the component.
