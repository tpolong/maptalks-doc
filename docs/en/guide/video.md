---
title: Video Layer
---

# Video layer (VideoLayer)

VideoLayer plays videos in a 3D scene: the video frame is applied as a texture onto one or more polygon patches and rendered along with the map. It is commonly used for video surveillance overlays, AR scenes and advertising screens.

The video is carried by a VideoSurface — a patch enclosed by coordinates (usually 4 corner points). Once a video URL is specified, it plays in 3D space. VideoLayer manages the rendering of these patches and, like GLTFLayer and Geo3DTilesLayer, must be mounted to a GroupGLLayer to be used.

## Loading a video

The video loading and the texture area are defined by VideoSurface; VideoLayer is responsible for carrying and rendering them.

### VideoSurface: defining the video texture area

```js
const videoSurface = new VideoSurface(coordinates, options);
```

- `coordinates`: the array of corner point coordinates defining the texture area (with optional altitude)
- `options`: default `{ opacity: 1.0, visible: true }`
  - `url`: the video URL
  - `elementId`: the id of an existing `<video>` element on the page (mutually exclusive with `url`)

The video URL has two sources: pass `url` and VideoSurface creates and plays a `<video>` element internally, or pass `elementId` to reuse an existing video element on the page.

### VideoLayer: carrying video patches

```js
const videoLayer = new VideoLayer("video", options);
videoSurface.addTo(videoLayer);
```

VideoLayer's constructor signature is `new VideoLayer(id, videoSurfaces?, options?)`; when `videoSurfaces` is omitted, the second argument is options. Patches can be passed at construction time or added afterwards:

```js
new VideoLayer("video", [videoSurface], options);
videoLayer.addSurfaces(videoSurface);
```

Constructor options:

| Option | Default | Description |
| --- | --- | --- |
| `renderer` | `'gl'` | renderer (gl / gpu) |
| `doubleBuffer` | `false` | whether to enable double buffering |
| `glOptions` | `null` | GL context options |
| `markerEvents` | `true` | whether to trigger marker events |
| `forceRenderOnZooming` | `true` | force redraw when zooming |
| `forceRenderOnMoving` | `true` | force redraw when moving |
| `forceRenderOnRotating` | `true` | force redraw when rotating |
| `showTopAlways` | `true` | whether to always show on top |
| `doubleSide` | `true` | whether to render double-sided (video patch visible from behind) |

## Video playback control

VideoSurface provides video playback and appearance control methods:

| Method | Description |
| --- | --- |
| `play()` | play the video |
| `pause()` | pause the video |
| `setAudio(audio)` | set whether to mute (`video.muted`) |
| `setVideo(url)` | change the video url and rebuild the video element |
| `setElementId(elementId)` | reuse an existing video element on the page (mutually exclusive with url) |
| `getVideo()` | get the current video element |
| `setOpacity(opacity)` / `getOpacity()` | set / get opacity (default 1.0) |
| `show()` / `hide()` / `isVisible()` | show / hide / query visibility |
| `setCoordinates(coordinates)` / `getCoordinates()` | set / get patch coordinates |
| `startEdit()` / `endEdit()` | start / end patch drag editing (listen to `shapechange` during editing to sync coordinates) |
| `addTo(layer)` | add to a VideoLayer (cannot be added to multiple layers at the same time) |
| `remove()` / `getLayer()` | remove the patch / get the owning layer |

Management methods at the VideoLayer level:

| Method | Description |
| --- | --- |
| `addSurfaces(videoSurfaces)` | add one or more video patches |
| `removeVideoSurfaces(videoSurfaces)` | remove video patches |
| `getVideoSurfaces()` | get all video patches |
| `showTopAlways(always)` | set whether to show on top |
| `setDoubleSide(doubleSide)` | set whether to render double-sided |
| `clear()` | clear all patches |
| `remove()` | remove the layer after clearing patches |

### Events

| Event | Description |
| --- | --- |
| `playing` | the video starts playing, params `{ state: 'playing', url }` |
| `pause` | the video is paused, params `{ state: 'pause', url }` |
| `error` | video load / playback error, params `{ state: 'pause', url }` |

```js
videoSurface.on("playing", (e) => {
  console.log("开始播放", e.url);
});
```

## VideoSurface overview

VideoSurface is the basic unit of a video layer: a set of coordinates (usually 4 corner points) encloses the texture area, and binding a video URL turns it into a "video surface". It can be shown, hidden and its opacity adjusted like a geometry, and it also supports `startEdit()` to enter drag editing mode to adjust the area.

## Complete example

The following example loads a video patch into a 3D scene and controls play/pause with buttons (adapted from the official example, with the GLTF model and GUI panel removed, keeping only the video-related parts):

```html
<script type="module">
  import { Map } from "maptalks";
  import { GroupGLLayer, VideoLayer, VideoSurface } from "@maptalks/gl-layers";

  const map = new Map("map", {
    center: [-74.01026733935669, 40.710726717547544],
    zoom: 17.66,
    bearing: 89.4,
    pitch: 80,
    lights: {
      directional: { direction: [0.4, 0, -1], color: [1, 1, 1] },
      ambient: {
        resource: {
          url: {
            front: "{res}/hdr/923/front.jpg",
            back: "{res}/hdr/923/back.jpg",
            left: "{res}/hdr/923/left.jpg",
            right: "{res}/hdr/923/right.jpg",
            top: "{res}/hdr/923/top.jpg",
            bottom: "{res}/hdr/923/bottom.jpg",
          },
        },
        exposure: 1.372,
        hsv: [0, 0, 0],
        orientation: 0,
      },
    },
  });

  // 视频面片：4 个角点（带海拔）围出贴图区域
  const videoSurface = new VideoSurface(
    [
      [-74.01162476336549, 40.712214182492374, 85],
      [-74.01162476336549, 40.712214182492374, 36],
      [-74.0116320237475, 40.7111789805343, 36],
      [-74.0116320237475, 40.7111789905343, 85],
    ],
    {
      url: "{res}/videos/test1.mp4",
      opacity: 1,
    }
  );

  const videoLayer = new VideoLayer("video", {
    doubleSide: false,
  });
  videoSurface.addTo(videoLayer);

  const groupLayer = new GroupGLLayer("gl", [videoLayer], {
    sceneConfig: {
      environment: {
        enable: true,
        mode: 1,
        level: 0,
        brightness: 0,
      },
      shadow: {
        type: "esm",
        enable: true,
        quality: "high",
        opacity: 0.5,
        color: [0, 0, 0],
        blurOffset: 1,
      },
      ground: {
        enable: true,
        renderPlugin: { type: "fill" },
        symbol: {
          polygonFill: [
            0.5215686274509804, 0.5450980392156862, 0.5725490196078431, 1,
          ],
          polygonOpacity: 1,
        },
      },
    },
  }).addTo(map);

  document.getElementById("btn-play").addEventListener("click", () => {
    videoSurface.play();
  });
  document.getElementById("btn-pause").addEventListener("click", () => {
    videoSurface.pause();
  });
</script>

<div id="map" class="container"></div>
<button id="btn-play">播放</button>
<button id="btn-pause">暂停</button>

<style>
  @import "https://maptalks.com/api/maptalks.css";

  html,
  body {
    margin: 0;
    height: 100%;
    width: 100%;
  }

  .container {
    width: 100%;
    height: 100%;
  }
</style>
```

After running, the video is displayed as a texture in the 3D scene: click "播放" (Play) to start playback, and "暂停" (Pause) to stop it.

The full interaction (including the sound toggle and the GLTF model scene) can be found in the example: [Video layer example](/en/examples/#3d/video/add).

## Notes

- API details of VideoLayer / VideoSurface are in the `@maptalks/gl-layers` package (the new site's API docs are still being organized; standalone API pages are not yet provided).
- Like GLTF layers and other 3D layers, a video layer must be mounted to a GroupGLLayer to be rendered.
