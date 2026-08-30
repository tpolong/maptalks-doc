---
title: Vector Tiles vs. 3DTiles
---

# Vector Tiles vs. 3DTiles

![City white model](./assets/buildings.jpg)

In the industry, 3D buildings converted from 2D vector data like those in the image above are commonly called white-model buildings.

Both vector tile layers and 3DTiles can render white-model buildings for large city scenes. Their main comparison:

| Feature | Vector Tiles | 3DTiles |
| :-----------  | --------- | --------- |
| Data storage | Database or files | Static model files |
| Real-time data updates | ✔ | ❌ |
| Real-time style updates | ✔ | ❌ |
| Batch model rendering (I3DM) | ✔ | ✔ |
| Point cloud data | ❌ | ✔ |
| Oblique photography | ❌ | ✔ |
| 3D generation strategy | Real-time generation on the frontend | Software conversion |
| Performance | High | Poor |
| Open-source ecosystem support | Rich | Limited |

Therefore, for rendering 3D white-model buildings, we believe vector tiles are the better technical solution.

However, for point cloud and oblique photography data, 3DTiles remains the best technical solution and cannot be replaced by vector tiles.

> This document has been cross-checked against the @maptalks/gl-layers 2026 source code (api-notes-vt-gl.md)
