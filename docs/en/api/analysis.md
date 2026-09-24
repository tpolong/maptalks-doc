---
title: Analysis
---

# Analysis

Analysis is the base class of 3D spatial analysis, defining methods common to all kinds of 3D spatial analysis.

Analysis can only be added to a GroupGLLayer; it cannot be added to other WebGL layers.

> Note: In the source, the subclasses of Analysis include CutAnalysis (section cut), ViewshedAnalysis (viewshed), SkylineAnalysis (skyline), FloodAnalysis (flood), InSightAnalysis (intervisibility), CrossCutAnalysis (cross-section) and HeightLimitAnalysis (height limit, inheriting from FloodAnalysis). ExcavateAnalysis (excavation) does not inherit from Analysis; it inherits ExtrudePolygonLayer from `@maptalks/vt`, so it is out of scope for this page.

## Methods

> This document has been cross-checked against the maptalks-gl 0.124.4 source

<!-- api-gen:start -->
### Other Public Methods of Analysis

<!--@include: ./includes/api/analysis-missing.md-->

### Mixed-in Methods

This class gains the following method groups from mixins; see the linked pages for details: [Eventable](/en/api/eventable)（`on`、`addEventListener`、`once`、`off`、`removeEventListener`、`listens`、`getListeningEvents`、`copyEventListeners`…）；[Handlerable](/en/api/handlerable).
<!-- api-gen:end -->
