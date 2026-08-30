---
title: JSONAble
---

# JSONAble

`JSONAble` is the JSON-serialization mixin factory of maptalks. It gives a host class type identification and JSON serialize/deserialize abilities. By registering JSON types and their classes, `JSONAble` can tag the object type during serialization and restore the correct class instance from that tag during deserialization.

```js
import { JSONAble } from "maptalks";

class Foo extends JSONAble(Class) { /* ... */ }
Foo.registerJSONType("Foo"); // register this class for JSON
```

## Constructor

Mixin factory — no independent constructor. The host class gains JSON-serialization ability automatically after construction.

## options

No independent configuration options.

## Methods

- `getJSONType(): string` — Return the type string used for JSON serialization (the registered type key); throws if unregistered.

## Static Methods

- `registerJSONType(type)` — Register the current class as the JSON type name `type` (called on the concrete class, e.g. `Foo.registerJSONType("Foo")`).
- `getJSONClass(type)` — Look up the class registered for a JSON type name `type`.

## Events

None.
