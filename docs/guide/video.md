---
title: 视频图层
---

# 视频图层（VideoLayer）

VideoLayer 用于在三维场景中播放视频：视频画面作为纹理贴到一个或多个多边形面片上，随地图一起渲染。常用于视频监控画面叠加、AR 场景、广告屏等场景。

视频由 VideoSurface 承载——一个由坐标（通常是 4 个角点）围成的面片，指定视频地址后即可在三维空间中播放。VideoLayer 管理这些面片的渲染，并和 GLTFLayer、Geo3DTilesLayer 等三维图层一样，需要挂载到 GroupGLLayer 中使用。

## 加载视频

视频的加载与贴图区域由 VideoSurface 定义，VideoLayer 负责承载和渲染。

### VideoSurface：定义视频贴图区域

```js
const videoSurface = new VideoSurface(coordinates, options);
```

- `coordinates`：定义贴图区域的角点坐标数组（可带海拔高度）
- `options`：默认为 `{ opacity: 1.0, visible: true }`
  - `url`：视频地址
  - `elementId`：页面中已有 `<video>` 元素的 id（与 `url` 互斥）

视频地址有两种来源：传入 `url` 由 VideoSurface 内部创建 `<video>` 元素播放，或传入 `elementId` 复用页面中已有的视频元素。

### VideoLayer：承载视频面片

```js
const videoLayer = new VideoLayer("video", options);
videoSurface.addTo(videoLayer);
```

VideoLayer 的构造签名是 `new VideoLayer(id, videoSurfaces?, options?)`，省略 videoSurfaces 时第二参数为 options。面片可以在构造时传入，也可以在创建后添加：

```js
new VideoLayer("video", [videoSurface], options);
videoLayer.addSurfaces(videoSurface);
```

构造选项：

| 选项 | 默认值 | 说明 |
| --- | --- | --- |
| `renderer` | `'gl'` | 渲染器（gl / gpu） |
| `doubleBuffer` | `false` | 是否启用双缓冲 |
| `glOptions` | `null` | GL 上下文选项 |
| `markerEvents` | `true` | 是否触发 marker 事件 |
| `forceRenderOnZooming` | `true` | 缩放时强制重绘 |
| `forceRenderOnMoving` | `true` | 移动时强制重绘 |
| `forceRenderOnRotating` | `true` | 旋转时强制重绘 |
| `showTopAlways` | `true` | 是否总是显示在最上层 |
| `doubleSide` | `true` | 是否双面渲染（视频面片背面可见） |

## 视频播放控制

VideoSurface 提供视频播放与外观控制方法：

| 方法 | 说明 |
| --- | --- |
| `play()` | 播放视频 |
| `pause()` | 暂停视频 |
| `setAudio(audio)` | 设置是否静音（`video.muted`） |
| `setVideo(url)` | 更换视频 url 并重建 video 元素 |
| `setElementId(elementId)` | 复用页面中已有的 video 元素（与 url 互斥） |
| `getVideo()` | 获取当前 video 元素 |
| `setOpacity(opacity)` / `getOpacity()` | 设置 / 获取透明度（默认 1.0） |
| `show()` / `hide()` / `isVisible()` | 显示 / 隐藏 / 查询可见性 |
| `setCoordinates(coordinates)` / `getCoordinates()` | 设置 / 获取面片坐标 |
| `startEdit()` / `endEdit()` | 开始 / 结束面片拖拽编辑（编辑中监听 `shapechange` 同步坐标） |
| `addTo(layer)` | 添加到 VideoLayer（不能同时加入多个图层） |
| `remove()` / `getLayer()` | 移除面片 / 获取所属图层 |

VideoLayer 层面的管理方法：

| 方法 | 说明 |
| --- | --- |
| `addSurfaces(videoSurfaces)` | 添加一个或多个视频面片 |
| `removeVideoSurfaces(videoSurfaces)` | 删除视频面片 |
| `getVideoSurfaces()` | 获取所有视频面片 |
| `showTopAlways(always)` | 设置是否显示在最上层 |
| `setDoubleSide(doubleSide)` | 设置是否双面渲染 |
| `clear()` | 清空所有面片 |
| `remove()` | 清空面片后移除图层 |

### 事件

| 事件名 | 说明 |
| --- | --- |
| `playing` | 视频开始播放，参数 `{ state: 'playing', url }` |
| `pause` | 视频暂停，参数 `{ state: 'pause', url }` |
| `error` | 视频加载 / 播放出错，参数 `{ state: 'pause', url }` |

```js
videoSurface.on("playing", (e) => {
  console.log("开始播放", e.url);
});
```

## VideoSurface 简述

VideoSurface 是视频图层的基本单元：一组坐标（通常 4 个角点）围出贴图区域，绑定视频地址后即成为一张"视频面"。它可以像几何体一样被显示、隐藏、调整透明度，也支持 `startEdit()` 进入拖拽编辑模式调整区域。

## 完整示例

以下示例加载一个视频面片到三维场景中，并通过按钮控制播放与暂停（改编自官方示例，去掉了其中的 GLTF 模型与 GUI 面板，仅保留视频相关部分）：

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

运行后，视频会作为纹理显示在三维场景中：点击"播放"开始播放，点击"暂停"停止。

完整交互（含声音开关与 GLTF 模型场景）见示例：[视频图层示例](/examples/#3d/video/add)。

## 相关说明

- VideoLayer / VideoSurface 的 API 详情见 `@maptalks/gl-layers` 包（新站 API 文档整理中，暂未提供独立 API 页）。
- 视频图层与 GLTF 图层等三维图层一样，需要挂载到 GroupGLLayer 中才能渲染。
