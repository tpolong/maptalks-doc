---
title: CRS
---

# CRS

CRS is a coordinate reference system container, representing a Coordinate Reference System as defined by [GeoJSON](http://geojson.org/geojson-spec.html#coordinate-reference-system-objects). It inherits from no base class, consists of `type` and `properties`, and provides several predefined common coordinate system constants.

```js
import { CRS } from "maptalks";
// Usage example
const crs = new CRS("proj4", { proj: "+proj=longlat +datum=WGS84 +no_defs" });
console.log(crs.type); // proj4
```

## Constructor

```js
new CRS(type, properties)
```

Parameters:

* `type` — The CRS type string, e.g. `"proj4"`, `"epsg"`.
* `properties` — The CRS properties object, e.g. `{ proj: "..." }`.

## Static Methods

- `CRS.createProj4(proj): CRS` — Create a proj4-style CRS used by maptalks, e.g. `CRS.createProj4("+proj=longlat +datum=WGS84 +no_defs")`.
- `CRS.fromProjectionCode(code): CRS|null` — Return the built-in CRS for an EPSG code (e.g. `"EPSG:4326"`), or `null` if invalid.

## Predefined Constants

- `CRS.WGS84` — The predefined WGS84 coordinate system (aka EPSG:4326).
- `CRS.EPSG4326` — Alias for `CRS.WGS84`.
- `CRS.EPSG3857` — The projected coordinate system used by Google Maps (aliases `EPSG:3785`, `GOOGLE`, `EPSG:900913`).
- `CRS.IDENTITY` — A simple Cartesian coordinate system that maps x, y directly, useful for flat-surface maps (indoor maps, game maps).
- `CRS.CGCS2000` — The official coordinate system in China (aka EPSG:4490), in most cases considered the same as WGS84.
- `CRS.EPSG4490` — Alias for `CRS.CGCS2000`.
- `CRS.BD09LL` — The projected coordinate system used by Baidu Map.
- `CRS.GCJ02` — The encrypted coordinate system used by most online map services in China.

## Events

CRS has no events.
