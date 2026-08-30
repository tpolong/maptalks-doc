<script setup lang="ts">
import { Repl, useStore } from "@vue/repl";
import CodeMirror from "@vue/repl/codemirror-editor";
import { watchEffect, toRef, ref } from "vue";
import { useData } from "vitepress";
import { onHashChange } from "./utils";
import { data as examples } from "./examples.data";

/**
 * 可运行示例组件（@vue/repl 集成）
 *
 * - 依据 location.hash（如 #3d/3dtiles/load）从数据加载器取出对应示例的完整文件集
 * - 通过 importMap 将示例中的 maptalks / gl-layers / draco / proj4 / mt.gui
 *   模块映射到 CDN 地址，在 iframe 预览中执行
 * - {res} 占位符替换为本站静态资源目录 /examples/resources
 * - hash 变化（如点击列表中的"▶ 运行"）时切换到对应示例
 *
 * 参考官方文档站 docs/src/examples/components/ExampleRepl.vue 的实现，
 * 仅保留核心 REPL，不包含官方站点的保存/分享等扩展功能。
 */

/** 站点级占位符的默认替换值（对应参考站填充的默认底图/版权） */
const DEFAULT_URL_TEMPLATE = "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png";
const DEFAULT_ATTRIBUTION =
  "&copy; <a href='http://osm.org'>OpenStreetMap</a> contributors, &copy; <a href='https://carto.com/'>CARTO</a>";

function replacePlaceholders(src: string): string {
  return src
    .replaceAll("{res}", "/examples/resources")
    .replaceAll("{urlTemplate}", DEFAULT_URL_TEMPLATE)
    .replaceAll("{attribution}", DEFAULT_ATTRIBUTION);
}

const importMap = {
  imports: {
    maptalks: "https://unpkg.com/maptalks/dist/maptalks.es.js",
    // @maptalks/transcoders.draco 只有 UMD 发布，作为 ESM 导入会失败；用本地 ESM
    // shim 包装（见 docs/public/lib/draco.mjs）按副作用注册解码器
    draco: "/lib/draco.mjs",
    proj4: "https://cdnjs.cloudflare.com/ajax/libs/proj4js/2.11.0/proj4.js",
    "gl-layers": "https://unpkg.com/@maptalks/gl-layers@0.34.1/index.js",
    // gl-layers 的 ESM 入口 re-export 子包，这里把子包与依赖全部映射到浏览器可用 ESM
    "@maptalks/gl": "https://unpkg.com/@maptalks/gl@0.97.4/dist/maptalksgl.es.js",
    "@maptalks/vt": "https://unpkg.com/@maptalks/vt@0.95.0/dist/maptalks.vt.es.js",
    "@maptalks/3dtiles":
      "https://unpkg.com/@maptalks/3dtiles@0.97.4/dist/maptalks.3dtiles.es.js",
    "@maptalks/gltf-layer":
      "https://unpkg.com/@maptalks/gltf-layer@0.97.4/dist/maptalks.gltf.es.js",
    "@maptalks/analysis":
      "https://unpkg.com/@maptalks/analysis@0.97.4/dist/maptalks.analysis.es.js",
    "@maptalks/video-layer":
      "https://unpkg.com/@maptalks/video-layer@0.97.4/dist/maptalks.video.es.js",
    "@maptalks/transform-control":
      "https://unpkg.com/@maptalks/transform-control@0.97.4/dist/transform-control.es.js",
    "@maptalks/msd-json-loader":
      "https://unpkg.com/@maptalks/msd-json-loader@0.1.0/dist/MSDJSONLoader.mjs",
    // regl 官方只有 CJS/UMD，用本地 wrapper 提供 default + createREGL 双导出
    "@maptalks/regl": "/lib/regl-esm.mjs",
    // @maptalks 子包在 npm 上有原生 ESM（module 字段），直接 unpkg 直连：
    // 单请求、无 esm.sh 重定向链，加载更快更稳；内部 import 的裸标识符由本
    // import map 解析。版本与 gl-layers 依赖树一致（esm.sh 版同源同版本）。
    "@maptalks/fusiongl":
      "https://unpkg.com/@maptalks/fusiongl@0.6.13/dist/fusiongl.es.js",
    "@maptalks/reshader.gl":
      "https://unpkg.com/@maptalks/reshader.gl@0.97.4/dist/reshadergl.es.js",
    "@maptalks/feature-filter":
      "https://unpkg.com/@maptalks/feature-filter@1.3.0/index.js",
    "@maptalks/function-type":
      "https://unpkg.com/@maptalks/function-type@1.4.1/index.js",
    "@maptalks/gltf-loader":
      "https://unpkg.com/@maptalks/gltf-loader@0.124.4/dist/gltf-loader.es.js",
    "@maptalks/tbn-packer":
      "https://unpkg.com/@maptalks/tbn-packer@1.4.5/index.js",
    "@maptalks/vector-packer":
      "https://unpkg.com/@maptalks/vector-packer@0.96.4/dist/vector-packer.es.js",
    "@maptalks/vt-plugin":
      "https://unpkg.com/@maptalks/vt-plugin@0.124.4/index.js",
    // vector-packer 的依赖（unpkg 直连后由裸标识符解析）：point-geometry 是 CJS
    //（需 esm.sh 转换），shelf-pack 有原生 index.mjs，quickselect/tinyqueue 走 esm.sh
    "@mapbox/point-geometry": "https://esm.sh/@mapbox/point-geometry@0.1.0",
    "@mapbox/shelf-pack": "https://unpkg.com/@mapbox/shelf-pack@3.2.0/index.mjs",
    quickselect: "https://esm.sh/quickselect@1.0.0",
    tinyqueue: "https://esm.sh/tinyqueue@2.0.3",
    // 其余小依赖走 esm.sh 转换（CJS 兼容转换，按 maptalks 依赖版本 pin）
    "gl-matrix": "https://esm.sh/gl-matrix@2.6.1",
    "animation-easings": "https://esm.sh/animation-easings",
    color: "https://esm.sh/color",
    colorin: "https://esm.sh/colorin@0.6.0",
    earcut: "https://esm.sh/earcut",
    "fast-deep-equal": "https://esm.sh/fast-deep-equal",
    "frustum-intersects": "https://esm.sh/frustum-intersects@0.2.0",
    lineclip: "https://esm.sh/lineclip@1.1.5",
    rbush: "https://esm.sh/rbush@2",
    "simplify-js": "https://esm.sh/simplify-js@1.2.1",
    "mt.gui": "/lib/mt.gui.js",
    // gl-layers 未导出 RoutePlayer（track 系列 6 例依赖），用本地最小 shim（见 route-player.mjs）
    "route-player": "/lib/route-player.mjs",
    // simulated-traffic 使用 TrafficScene；@maptalks/traffic 的 npm dist 未发布，用本地
    // esbuild 构建的 ESM（见 lib/maptalks.traffic.es.js）
    "@maptalks/traffic": "/lib/maptalks.traffic.es.js",
    // 两个 uicontrol 示例使用 Vue 全局挂载 in-DOM 模板，REPL 不跑 <script src> 经典脚本，
    // 这里把 vue 映射到含模板编译器的全量浏览器构建，并在 ensureImports 里 shim 成
    // window.Vue（Vue3 Options API，示例已由 Vue2 迁移到 createApp）
    vue: "https://unpkg.com/vue@3.5.42/dist/vue.esm-browser.js",
    // 第三方全局库（部分示例用 <script src> 全局，REPL 不走该机制，用 import map
    // + 内联时 shim 成 window 全局）
    d3: "https://esm.sh/d3@7.9.0",
    // d3-marker 用 d3 v3（geom.quadtree/svg/scale.identity），d3-proj 用 d3 v4（回调式
    // d3.json + geoOrthographic），两者与 import map 的默认 d3 v7 不兼容，单独映射；
    // d3v3 的 esm.sh 转换存在 document 作用域问题，改用本地 UMD 注入 shim
    d3v3: "/lib/d3v3.mjs",
    d3v4: "/lib/d3v4.mjs",
    echarts: "https://esm.sh/echarts@5.5.1",
    "@turf/turf": "https://esm.sh/@turf/turf@6.5.0",
    "topojson-client": "https://esm.sh/topojson-client@3.1.0",
    highcharts: "https://esm.sh/highcharts@11.4.8",
    jquery: "https://esm.sh/jquery@3.7.1",
    // sunshine 用 jQuery-UI 的 datepicker/slider；REPL 不跑 <script src>，用本地
    // jquery-ui shim（见 docs/public/lib/jquery-ui.mjs）扩展 $.fn
    "jquery-ui": "/lib/jquery-ui.mjs",
    "dat.gui": "https://esm.sh/dat.gui@0.7.9",
    // esm.sh 会把 esm.sh 子包内部对 `maptalks` 的重写为绝对 esm.sh URL，
    // 从而绕开上面的裸标识符映射、加载出第二个 maptalks 实例（重复导入报错）。
    // 这里把那些绝对 URL 统一重映射到同一个 unpkg 实例。
    "https://esm.sh/maptalks": "https://unpkg.com/maptalks/dist/maptalks.es.js",
    "https://esm.sh/maptalks@1.12.1": "https://unpkg.com/maptalks/dist/maptalks.es.js",
    "https://esm.sh/maptalks@1.12.1/es2022/maptalks.mjs":
      "https://unpkg.com/maptalks/dist/maptalks.es.js",
  },
};

const store = useStore({
  builtinImportMap: toRef(importMap),
});

/** 跟随站点明暗主题切换 REPL 配色 */
const { isDark } = useData();

/** 当前示例路径，如 "3d/3dtiles/load" */
const path = ref("");

/**
 * 已加载的示例路径。
 * setFiles 会写入 store 的响应式状态（mainFile 等），触发 watchEffect 再次执行；
 * 若重复 setFiles，预览 iframe 会在同一文档中二次执行脚本（如二次 new Map），
 * 因此用该守卫跳过重复加载。
 */
let loadedPath = "";

watchEffect(updateExample);

onHashChange(updateExample);

/** 根据 hash 找到示例，将其完整文件集加载到 REPL */
function updateExample() {
  const hash = location.hash.slice(1);
  if (hash === loadedPath) return;
  const example = examples.find((item) => item.path === hash);
  if (!example) return;
  loadedPath = hash;
  path.value = hash;
  // 替换站点级占位符：{res} 资源目录、{urlTemplate}/{attribution} 默认底图，
  // 同时作用于 html/css/js 等所有文件
  const files: Record<string, string> = {};
  for (const [filename, content] of Object.entries(example.files)) {
    files[filename] = replacePlaceholders(content);
  }
  // 若 index.html 没有内联 <script type="module">（例如 JS 拆到独立 index.js、
  // 或用 <script src> 引用），@vue/repl 无法识别源码，预览会空白。
  // 把 index.js 内联成一个 module script，让示例真正跑起来。
  inlineIndexJs(files);
  // @vue/repl 对独立的 index.css 是在示例脚本执行后才注入 <head>；而示例
  // 普遍用 html/body height:100% 撑满容器，脚本执行（new Map）时容器高度
  // 仍是 0，canvas 变成 0 高，编辑模式等绘制顶部元素时会报 drawImage 0 尺寸。
  // 把 css 内联成 <style> 随 index.html 一起先于脚本注入，样式提前生效。
  inlineCss(files);
  store.setFiles(files, "index.html");
}

/**
 * 若 index.html 缺少内联 module script，把 index.js 内联进去。
 * 处理两种形态：
 *  - index.html 用 module script 引用 index.js  -> 替换为内联
 *  - 只有 <div id="map"> 的 stub                  -> 追加内联 script
 * 已经内联 module 脚本（如 basic/map/load）则原样返回。
 */
/**
 * 有的示例把逻辑写成依赖全局标识符（例如直接 `new maptalks.Map(...)` 或
 * `new mt.GUI()`），但并没有 import。浏览器里这些裸标识符不会被 import map
 * 解析，会报 "maptalks is not defined"。这里按需补齐 import（已 import 则跳过）。
 */
function ensureImports(code: string): string {
  let out = code;
  const prepend = (stmt: string, test: RegExp, already: RegExp) => {
    if (test.test(out) && !already.test(out)) out = stmt + "\n" + out;
  };
  prepend('import * as maptalks from "maptalks";', /\bmaptalks\.[A-Za-z]/, /\bimport\b[^;]*\bmaptalks\b/);
  prepend('import * as gl from "gl-layers";', /\bgl\.[A-Za-z]/, /\bimport\b[^;]*\bgl-layers\b/);
  prepend('import * as mt from "mt.gui";', /\bmt\.[A-Za-z]/, /\bimport\b[^;]*\bmt\.gui\b/);
  prepend('import * as d3 from "d3";\nwindow.d3 = d3;', /\bd3\.[A-Za-z]/, /\bimport\b[^;]*\bd3/);
  prepend('import * as echarts from "echarts";\nwindow.echarts = echarts;', /\becharts\b/, /\bimport\b[^;]*\becharts\b/);
  prepend('import * as turf from "@turf/turf";\nwindow.turf = turf;', /\bturf\.[A-Za-z]/, /\bimport\b[^;]*\bturf\b/);
  prepend('import * as topojson from "topojson-client";\nwindow.topojson = topojson;', /\btopojson\b/, /\bimport\b[^;]*\btopojson\b/);
  prepend('import Highcharts from "highcharts";\nwindow.Highcharts = Highcharts;', /\bHighcharts\b/, /\bimport\b[^;]*\bhighcharts\b/);
  prepend('import $ from "jquery";\nwindow.$ = $;\nwindow.jQuery = $;', /\b\$\s*\(|\bjQuery\b/, /\bimport\b[^;]*\bjquery\b/);
  prepend('import * as dat from "dat.gui";\nwindow.dat = dat;', /\bdat\.[A-Za-z]/, /\bimport\b[^;]*\bdat\.gui\b/);
  prepend('import * as Vue from "vue";\nwindow.Vue = Vue;', /\bwindow\.Vue\b|\bnew\s+Vue\b|\bVue\.extend\b/, /\bimport\b[^;]*\bvue\b/);
  return out;
}

function inlineIndexJs(files: Record<string, string>) {
  const html = files["index.html"] ?? "";
  if (!html) return;
  const moduleBlocks = html.match(/<script[^>]*\btype=["']module["'][^>]*>([\s\S]*?)<\/script>/gi) ?? [];
  const hasInlineCode = moduleBlocks.some((m) =>
    m.replace(/<script[^>]*>|<\/script>/gi, "").trim().length > 0,
  );
  if (hasInlineCode) return;
  const raw = files["index.js"];
  if (!raw) return;
  const js = ensureImports(raw);
  const refPattern = /<script[^>]*\btype=["']module["'][^>]*\bsrc=["']\.?\/?index\.js["'][^>]*><\/script>/i;
  if (refPattern.test(html)) {
    files["index.html"] = html.replace(
      refPattern,
      `<script type="module">\n${js}\n<\/script>`,
    );
  } else {
    // 若 index.html 原本就有一个空的内联 module script（形如一个空的 module 脚本标签），
    // 直接把它删掉（它不执行任何逻辑），再在 body 结束标签前追加 index.js 内容。
    // 若保留空 module 块并再追加一个，@vue/repl 会给每个 module 块都包一层 __module__，
    // 导致 "Identifier '__module__' has already been declared"。改为"删除空块+追加"可保证
    // 只有一个 module 块，且脚本在 #map 容器之后执行（与纯 stub 示例一致）。
    const emptyModule = /<script[^>]*\btype=["']module["'][^>]*>\s*<\/script>/i;
    let cleaned = html.replace(emptyModule, "");
    const inlineTag = `\n<script type="module">\n${js}\n<\/script>\n`;
    files["index.html"] = cleaned.includes("</body>")
      ? cleaned.replace("</body>", inlineTag + "</body>")
      : cleaned + inlineTag;
  }
}

/**
 * 把示例的 index.css 内联成 <style> 放进 index.html：
 * @vue/repl 对独立 .css 文件是在示例脚本执行之后才注入 <head>，而示例普遍用
 * html/body height:100% 撑满容器，脚本执行（new Map）时容器高度仍是 0，
 * canvas 变成 0 高，编辑模式等绘制顶部元素时即报 drawImage 0 尺寸错误。
 * 内联后样式随 index.html 一起先于脚本注入，容器尺寸在 new Map 时已就绪。
 */
function inlineCss(files: Record<string, string>) {
  const html = files["index.html"] ?? "";
  const css = files["index.css"];
  if (!html || !css) return;
  const styleTag = `\n<style>\n${css}\n<\/style>`;
  if (html.includes("</head>")) {
    files["index.html"] = html.replace("</head>", styleTag + "</head>");
  } else if (html.includes("</html>")) {
    files["index.html"] = html.replace("</html>", styleTag + "</html>");
  } else {
    files["index.html"] = html + styleTag;
  }
}

/** 清空 hash，返回静态示例列表 */
function closeRepl() {
  location.hash = "";
}
</script>

<template>
  <div class="examples-repl-page">
    <div class="examples-repl-head">
      <span class="examples-repl-path">
        <span class="examples-repl-live" aria-hidden="true"></span>
        {{ path }}
      </span>
      <button type="button" class="examples-repl-close" @click="closeRepl">
        <svg
          class="examples-repl-close-icon"
          viewBox="0 0 16 16"
          width="15"
          height="15"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M3.2 3.2l9.6 9.6M12.8 3.2L3.2 12.8" />
        </svg>
        <span>关闭</span>
      </button>
    </div>
    <Repl
      :editor="CodeMirror"
      :store="store"
      :theme="isDark ? 'dark' : 'light'"
      :showCompileOutput="false"
      :showImportMap="false"
      :showTsConfig="false"
      :clearConsole="false"
    />
  </div>
</template>

<style>
.examples-repl-page {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.examples-repl-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.examples-repl-path {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
  font-family: var(--vp-font-family-mono);
  font-size: 12.5px;
  color: var(--vp-c-text-2);
  background-color: var(--vp-c-bg-soft-down, var(--vp-c-bg-soft));
  border: 1px solid var(--vp-c-divider);
  border-radius: 9999px;
  padding: 5px 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* 运行中指示点：品牌色圆点 + 柔和光晕，呼应示例中心蓝色分号 */
.examples-repl-live {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: var(--vp-c-brand-1);
  flex-shrink: 0;
  box-shadow: 0 0 0 3px var(--vp-c-brand-soft);
}

.examples-repl-close {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 9999px;
  padding: 5px 14px;
  background-color: var(--vp-c-bg);
  color: var(--vp-c-text-2);
  font-family: var(--vp-font-family-base);
  font-size: 13px;
  font-weight: 500;
  line-height: 1;
  cursor: pointer;
  white-space: nowrap;
  transition: border-color 0.18s ease, color 0.18s ease,
    background-color 0.18s ease, transform 0.12s ease;
}

.examples-repl-close-icon {
  flex-shrink: 0;
}

.examples-repl-close:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
  background-color: var(--vp-c-brand-soft);
}

.examples-repl-close:active {
  transform: translateY(1px);
}

.examples-repl-close:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 2px;
}

.vue-repl {
  height: calc(100vh - 210px);
  min-height: 480px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(20, 40, 60, 0.04);
}
</style>
