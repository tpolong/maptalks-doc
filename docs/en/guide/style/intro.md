---
title: Style Guide
---

# Style Overview

maptalks 3D rendering layers provide a rich styling system for customizing the appearance of 2D or 3D data, including:

* The Symbol style system, which defines how point, line and polygon data is drawn on the map — see the [Symbol styles reference](/en/guide/style/symbols).
* The 3D rendering material system, which defines the material style properties of different 3D rendering algorithms — see the [material reference](/en/guide/style/material).

All 3D layers render 3D scenes based on these two styling systems.

## Vector render plugin system

Vector render plugins are the rendering programs inside vector tile layers (`VectorTileLayer`) and vector layers (`PointLayer`, `LineStringLayer`, `PolygonLayer`).

The plugin-based design reduces coupling between rendering programs and ensures extensibility and maintainability.

The current version includes the following render plugins:

| Plugin name | Description | Docs |
| :--------- | :---------------------------------------  | ---- |
| icon       | Draws icons and text for point, line or polygon data | [Docs](/en/guide/style/plugin-icon) |
| text       | Draws text for point, line or polygon data          | [Docs](/en/guide/style/plugin-text) |
| line       | Draws lines or borders for line or polygon data      | [Docs](/en/guide/style/plugin-line) |
| line-gradient | Draws gradient lines for line data                | [Docs](/en/guide/style/plugin-line-gradient) |
| fill       | Draws area fills for polygon data                   | [Docs](/en/guide/style/plugin-fill) |
| native-line| Draws lines or borders for line or polygon data using native drawing techniques   | [Docs](/en/guide/style/plugin-native-line) |
| native-point| Draws points for point, line or polygon data using native drawing techniques    | [Docs](/en/guide/style/plugin-native-point) |
| lit        | Renders 3D polygon data with PBR material             | [Docs](/en/guide/style/plugin-lit)   |
| phong      | Renders 3D polygon data with Phong material           | [Docs](/en/guide/style/plugin-phong) |
| wireframe  | Renders 3D polygon data with a wireframe material     | [Docs](/en/guide/style/plugin-wireframe) |
| gltf-lit   | Renders point data with GLTF models using PBR material    | [Docs](/en/guide/style/plugin-gltf-lit)   |
| gltf-phong | Renders point data with GLTF models using Phong material  | [Docs](/en/guide/style/plugin-gltf-phong) |
| water      | Renders polygon data with a realistic water material       | [Docs](/en/guide/style/plugin-water) |

## 3D Tiles layer styles

The styles of 3D Tiles layers are implemented with PBR and Phong materials. You can specify which material is used to render the 3D Tiles models by defining the `shader` in the `service` of a `Geo3DTilesLayer`.

You can also specify the material rendering parameters by customizing the `material` property on the `service`.

For the specific properties of the `material` property, see the [material reference](/en/guide/style/material).

## Visualization styles

To be implemented

> This document has been cross-checked against the @maptalks/gl-layers 2026 source code (api-notes-vt-gl.md)
