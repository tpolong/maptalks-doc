---
title: API Reference
---

# API Reference

This reference is compiled from the latest maptalks source, covering the core library `maptalks` and the WebGL packages `maptalks-gl` and `@maptalks/analysis`. It contains 117 classes and reference entries, with one-to-one Chinese and English pages, grouped on the left by the nature of each class rather than by how often it is used.

## Import Conventions

```js
// Core library: map, layer base classes, geometries, controls, utils
import { Map, TileLayer, VectorLayer, Marker, Polygon } from "maptalks";

// WebGL extension: vector tiles, WebGL vector layers, 3D scenes, spatial analysis
import { VectorTileLayer, PointLayer, GroupGLLayer } from "maptalks-gl";
import { ViewshedAnalysis } from "@maptalks/analysis";
```

> The REPL in the [example center](/en/examples/) uses the same import conventions, so code from these pages can be copied and run directly.

## Group Index

| Group | Covers | Main classes |
| --- | --- | --- |
| Map | Map instance and view operations | [Map](/en/api/map) |
| Geometry | Geometry base class and concrete geometries | [Geometry](/en/api/geometry), [Marker](/en/api/marker), [Point](/en/api/point), [LineString](/en/api/line-string), [Polygon](/en/api/polygon) |
| Layers | Layer inheritance tree (raster tiles and 2D vector drawing) | [Layer](/en/api/layer), [TileLayer](/en/api/tile-layer), [OverlayLayer](/en/api/overlay-layer), [VectorLayer](/en/api/vector-layer) |
| Base Classes | Class system, events and JSON infrastructure | [Class](/en/api/class), [Eventable](/en/api/eventable), [Handler](/en/api/handler) |
| Geo Types | Coordinates, extents and projection transforms | [Position](/en/api/position), [Coordinate](/en/api/coordinate), [Extent](/en/api/extent), [CRS](/en/api/crs) |
| Map Tools | Drawing and measuring tools | [DrawTool](/en/api/draw-tool), [AreaTool](/en/api/area-tool), [DistanceTool](/en/api/distance-tool) |
| UI Components | Info windows, menus and tooltips | [UIMarker](/en/api/ui-marker), [InfoWindow](/en/api/info-window), [ToolTip](/en/api/tool-tip) |
| Animation | Frame animation and playback control | [Animation](/en/api/animation-animation), [Player](/en/api/animation-player), [Easing](/en/api/animation-easing) |
| Controls | Map controls | [Control](/en/api/control), [Zoom](/en/api/control-zoom), [LayerSwitcher](/en/api/control-layer-switcher) |
| Projection | Built-in projection definitions | [projection.EPSG3857](/en/api/projection-epsg3857), [projection.EPSG4326](/en/api/projection-epsg4326), [projection.BAIDU](/en/api/projection-baidu) |
| Measurer | Distance and area measuring implementations | [measurer.Measurer](/en/api/measurer-measurer), [measurer.WGS84Sphere](/en/api/measurer-wgs84sphere) |
| Renderer | 2D Canvas renderer | [CanvasRenderer](/en/api/canvas-renderer) |
| Utils | General utility objects | [Util](/en/api/util), [DomUtil](/en/api/dom-util), [GeoJSON](/en/api/geojson), [TileSystem](/en/api/tile-system) |
| Vector Tile Layers | MVT / GeoJSON vector tiles | [VectorTileLayer](/en/api/vector-tile-layer), [GeoJSONVectorTileLayer](/en/api/geojson-vector-tile-layer) |
| WebGL Vector Layers | Point, line and polygon data layers on WebGL | [PointLayer](/en/api/point-layer), [LineStringLayer](/en/api/line-string-layer), [PolygonLayer](/en/api/polygon-layer), [ExtrudePolygonLayer](/en/api/extrude-polygon-layer) |
| 3D Layers & Models | GL scene composition, 3DTiles and GLTF | [GroupGLLayer](/en/api/group-gl-layer), [Geo3DTilesLayer](/en/api/geo-3dtiles-layer), [GLTFLayer](/en/api/gltf-layer), [GLTFMarker](/en/api/gltf-marker) |
| Spatial Analysis | Cutting, flooding, height limit, viewshed and more | [CutAnalysis](/en/api/cut-analysis), [ExcavateAnalysis](/en/api/excavate-analysis), [ViewshedAnalysis](/en/api/viewshed-analysis), [SkylineAnalysis](/en/api/skyline-analysis) |
| References | Vector tile concepts, comparison and performance | [Vector Tile Intro](/en/api/vt-intro), [Layer Comparison](/en/api/vt-compare), [Performance](/en/api/vt-performance) |

## Related Guides

- [3D Scene](/en/guide/3d-scene) — how 3D layers and global effects are organised
- [Vector Tiles](/en/guide/vector-tile) — data and styles for vector tiles
- [Style Guide](/en/guide/style/intro) — symbols, materials and rendering plugins
- [Spatial Analysis](/en/guide/analysis) — using the analysis classes
- [WebGPU Rendering](/en/guide/webgpu) — enabled with `renderer: 'gpu'`
- [Example Center](/en/examples/) — examples you can run online
