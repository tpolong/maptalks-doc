---
title: Geometry
---

# Geometry

Geometry is the abstract base class of all geometry (Point, LineString, Polygon, MultiPoint, MultiLineString, MultiPolygon, Marker, Circle, Ellipse, Rectangle, Sector, GeometryCollection, etc.). It is not instantiated directly (`@abstract`) and defines the capabilities shared by all geometry: coordinates, extent, symbols, properties, layer/map, z-order, interaction, serialization, and events.

The inheritance chain is `Geometry → JSONAble(Eventable(Handlerable(Class)))`, with `Geometry.InfoWindow`, `Geometry.Edit`, and `ui.Menuable` mixed in, so instances also have info-window, editing, and menu capabilities.

```js
import { VectorLayer, Marker } from "maptalks";

const layer = new VectorLayer("vector");
const marker = new Marker([0, 0], { symbol: { markerType: "pin" } });
marker.addTo(layer);
```

## Constructor

```js
new Geometry(options)
```

Parameters:

* **options** `Object` geometry options. `symbol`, `properties`, and `id` are extracted and handled separately; geometry-specific params (like coordinates) are passed by each subclass constructor (e.g. `new Point(coordinates, options)`).

## Options

| Option | Type | Description | Default |
| --- | --- | --- | --- |
| `id` | String\|Number | geometry id | `null` |
| `visible` | Boolean | whether the geometry is visible | `true` |
| `interactive` | Boolean | whether the geometry is interactive | `true` |
| `editable` | Boolean | whether the geometry is editable | `true` |
| `cursor` | String | hover cursor style | `null` |
| `measure` | String | measure code | `'EPSG:4326'` |
| `draggable` | Boolean | whether the geometry is draggable | `false` |
| `dragShadow` | Boolean | drag a shadow first | `true` |
| `dragOnAxis` | String | restrict drag axis (x/y) | `null` |
| `zIndex` | Number | initial z-order | `undefined` |
| `antiMeridian` | Boolean | handle anti-meridian | `false` |
| `symbol` | Object | geometry symbol | — |
| `properties` | Object | geometry properties | — |

## Member Methods

### Add & remove

- `addTo(layer, fitView?): this` — add the geometry to a layer
- `getLayer(): OverlayLayer` — get the parent layer
- `getMap(): Map | null` — get the map
- `remove(): this` — remove from the layer

### id & properties

- `getId(): string` / `setId(id): this` — get/set id
- `getProperties(): Object` / `setProperties(properties): this` — get/set properties

### Coordinates & extent

- `getFirstCoordinate(): Coordinate` / `getLastCoordinate(): Coordinate` — first/last coordinate
- `getCoordinates()` — get the geometry coordinates (implemented by subclasses)
- `setCoordinates(coordinate): this` — set the geometry coordinates (implemented by subclasses)
- `getCenter(): Coordinate` — get the geographic center
- `getExtent(): Extent` — get the geographic extent
- `getContainerExtent(): PointExtent` — get the container pixel extent
- `get2DExtent(): PointExtent` — get the 2D pixel extent
- `getSize(): Size` — get the pixel size
- `containsPoint(containerPoint, t?): boolean` — whether it contains a container point

### Symbols

- `getSymbol(): any` / `setSymbol(symbol): this` — get/set the symbol
- `updateSymbol(props): this` — partially update the symbol
- `getSymbolHash(): string` — get the symbol hash
- `symbolIsVisible(): boolean` — whether the symbol is visible

### Visibility & z-order

- `show(): this` / `hide(): this` — show/hide
- `isVisible(): boolean` — whether visible
- `getZIndex(): number` / `setZIndex(zIndex): this` — get/set z-order
- `bringToFront(): this` / `bringToBack(): this` — bring to front/back

### Transform & interaction

- `translate(x, y?, z?): this` — translate the geometry
- `rotate(angle, pivot?): this` — rotate the geometry
- `flash(interval?, count?, cb?, context?): this` — flash the geometry

### Measurement & altitude

- `getLength(): number` — get the geographic length (m)
- `getArea(): number` — get the geographic area (sq m)
- `getAltitude()` / `setAltitude(alt): this` — get/set altitude
- `hasAltitude(): boolean` — whether altitude is set

### Serialization & copy

- `copy(): Geometry` — return a copy
- `toGeoJSON(opts?): Object` — export a GeoJSON Feature
- `toJSON(options?): Object` — export a profile json

## Static Methods

- `Geometry.fromJSON(json): Geometry | Geometry[]` — restore geometry from JSON

## Events

| Event | Fired when |
| --- | --- |
| `idchange` | id set |
| `propertieschange` | properties set |
| `symbolchange` | symbol set/updated |
| `zindexchange` | z-order set |
| `positionchange` | position changes |
| `shapechange` | shape changes |
| `show` / `hide` | shown/hidden |
| `removestart` / `removeend` / `remove` | removal process |

```js
marker.on("positionchange", () => {
  console.log("marker moved to", marker.getCoordinates());
});
```
