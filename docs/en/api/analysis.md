---
title: Analysis
---

# Analysis

Analysis is the base class of 3D spatial analysis, defining methods common to all kinds of 3D spatial analysis.

Analysis can only be added to a GroupGLLayer; it cannot be added to other WebGL layers.

> Note: In the 2026 source, the subclasses of Analysis include CutAnalysis (section cut), ViewshedAnalysis (viewshed), SkylineAnalysis (skyline), FloodAnalysis (flood), InSightAnalysis (intervisibility), CrossCutAnalysis (cross-section) and HeightLimitAnalysis (height limit, inheriting from FloodAnalysis). ExcavateAnalysis (excavation) does not inherit from Analysis; it inherits ExtrudePolygonLayer from `@maptalks/vt`, so it is out of scope for this page (verified 2026).

## Methods

<!--@include: ./includes/analysis-methods.md-->

> This document has been cross-checked against the @maptalks/gl-layers 2026 source (api-notes-others.md / api-notes-vt-gl.md)
