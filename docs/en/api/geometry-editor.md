---
title: GeometryEditor
---

# GeometryEditor

GeometryEditor is the geometry editor used internally by maptalks, inheriting from `Eventable(Class)`. It manages handles during geometry editing: it creates different edit handles based on the geometry type, maintains an edit history (undo/redo), uses a shadow geometry to hold intermediate state for better performance, and toggles geometry events when editing starts or stops.

```js
import { GeometryEditor } from "maptalks";

const editor = new GeometryEditor(polygon);
editor.start();          // Start editing
editor.undo();           // Undo the last edit
editor.stop();           // Stop editing
```

## Constructor

```js
new GeometryEditor(geometry, options?)
```

Parameters:

* `geometry` — The [Geometry](/en/api/geometry) to edit.
* `options` — (Optional) Edit options, see the table below.

## options

| Config | Type | Description | Default |
| --- | --- | --- | --- |
| `fixAspectRatio` | `boolean` | Whether to lock the aspect ratio when resizing | `false` |
| `symbol` | `object` | The symbol used by the geometry while editing | `null` |
| `removeVertexOn` | `string` | The event that triggers vertex removal, e.g. `contextmenu` | `'contextmenu'` |
| `centerHandleSymbol` | `object` | The symbol of the center handle | ellipse, opacity `1` |
| `vertexHandleSymbol` | `object` | The symbol of the vertex handles | square, opacity `1` |
| `newVertexHandleSymbol` | `object` | The symbol of the new-vertex handles | square, opacity `0.4` |
| `collision` | `boolean` | Whether handles participate in collision detection | `false` |
| `vertexZIndex` | `number` | The z-index of the vertex handles | `0` |

## Methods

- `prepare(): void` — Prepares editing, registering a `drawtopstart` refresh hook on the map and reserving the original symbol.
- `start(): void` — Starts editing, creating the shadow geometry, outline and geometry-type-specific handles.
- `stop(): void` — Stops editing, removing temporary layers and firing the `remove` event.
- `isEditing(): boolean` — Returns whether the editor is currently editing.
- `createHandle(containerPoint, opts): EditHandle` — Creates an edit handle and binds drag events.
- `createMarkerEditor(): void` — Creates resize handles for Marker/TextBox.
- `createCircleEditor(): void` — Creates resize handles for Circle.
- `createEllipseOrRectEditor(): void` — Creates resize handles for Ellipse/Rectangle.
- `createPolygonEditor(): void` — Creates vertex edit handles for Polygon/LineString.
- `cancel(): GeometryEditor` — Cancels all edits and restores the start of the history.
- `undo(): any` — Undoes the last edit.
- `redo(): any` — Redoes the next edit.

## Events

- `remove` — (fired by the editor) when `stop()` is called.

The following events are fired on the edited [Geometry](/en/api/geometry) during editing:

- `handledragstart` / `handledragging` / `handledragend` — Handle drag start / drag / end while changing the geometry shape.
- `handleremove` — When an edit control vertex is removed.
- `editrecord` — When an edit happens and is being recorded.
- `resizing` — When a resize handle is being dragged.
