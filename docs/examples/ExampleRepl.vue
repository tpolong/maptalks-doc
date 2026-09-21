<script setup lang="ts">
import { Repl, useStore } from "@vue/repl";
import CodeMirror from "@vue/repl/codemirror-editor";
import { watchEffect, toRef, ref, watch, nextTick } from "vue";
import { useData } from "vitepress";
import { onHashChange } from "./utils";
import { data as examples, type ExampleItem } from "./examples.data";

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
// 注意：使用不带 {s} 子域的 basemaps.cartocdn.com。
// 实测 a.basemaps.cartocdn.com 存在 DNS 污染（解析到 2001::737e:64a0 假地址），
// 国内网络下请求失败；无子域域名可直接命中正常瓦片，避免依赖子域轮询重试。
// 瓦片服务本身无需 apiKey，b/c/d 子域与无子域返回的瓦片字节完全相同。
const DEFAULT_URL_TEMPLATE = "https://basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png";
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
    // REPL 里 "gl-layers" 统一指向本地汇总入口：合并 maptalks-gl（核心 + gl 扩展）
    // 与 @maptalks/analysis（空间分析类）。0.124.4 起分析类不再包含在 gl 包里。
    "gl-layers": "/lib/gl-layers.mjs",
    "maptalks-gl": "https://unpkg.com/maptalks-gl@0.124.4/index.js",
    // maptalks-gl 的 ESM 入口 re-export maptalks 核心与全部子包；版本对齐官方 CDN
    // 打包版（maptalks-gl 0.124.4 + maptalks 1.12.1）。
    // 原先用的 @maptalks/gl-layers@0.34.1 停更于 2024-03，其子包依赖停留在 0.97.4，
    // 与官网（0.124.4）行为不一致（例：3D 测量工具 Tool.addTo 报错、拾取出 NaN 坐标）。
    "@maptalks/gl": "https://unpkg.com/@maptalks/gl@0.124.4/dist/maptalksgl.es.js",
    "@maptalks/vt": "https://unpkg.com/@maptalks/vt@0.124.4/dist/maptalks.vt.es.js",
    "@maptalks/3dtiles":
      "https://unpkg.com/@maptalks/3dtiles@0.124.4/dist/maptalks.3dtiles.es.js",
    "@maptalks/gltf-layer":
      "https://unpkg.com/@maptalks/gltf-layer@0.124.4/dist/maptalks.gltf.es.js",
    "@maptalks/analysis":
      "https://unpkg.com/@maptalks/analysis@0.124.4/dist/maptalks.analysis.es.js",
    "@maptalks/video-layer":
      "https://unpkg.com/@maptalks/video-layer@0.124.4/dist/maptalks.video.es.js",
    "@maptalks/transform-control":
      "https://unpkg.com/@maptalks/transform-control@0.124.4/dist/transform-control.es.js",
    "@maptalks/msd-json-loader":
      "https://unpkg.com/@maptalks/msd-json-loader@0.1.0/dist/MSDJSONLoader.mjs",
    // regl 官方只有 CJS/UMD，用本地 wrapper 提供 default + createREGL 双导出
    "@maptalks/regl": "/lib/regl-esm.mjs",
    // @maptalks 子包在 npm 上有原生 ESM（module 字段），直接 unpkg 直连：
    // 单请求、无 esm.sh 重定向链，加载更快更稳；内部 import 的裸标识符由本
    // import map 解析。版本按 0.124.4 依赖树（gl@0.124.4 的 dependencies）对齐。
    "@maptalks/fusiongl":
      "https://unpkg.com/@maptalks/fusiongl@0.124.4/dist/fusiongl.es.js",
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
    "@maptalks/martini": "https://esm.sh/@maptalks/martini@0.4.0",
    "@maptalks/geojson-vt": "https://esm.sh/@maptalks/geojson-vt@3.5.0",
    "@maptalks/geojson-bbox": "https://esm.sh/@maptalks/geojson-bbox@1.0.4",
    // vector-packer / vt 的依赖（unpkg 直连后由裸标识符解析）：point-geometry 是 CJS
    //（需 esm.sh 转换），shelf-pack 有原生 index.mjs
    "@mapbox/point-geometry": "https://esm.sh/@mapbox/point-geometry@0.1.0",
    "@mapbox/shelf-pack": "https://unpkg.com/@mapbox/shelf-pack@3.2.0/index.mjs",
    "@mapbox/vector-tile": "https://esm.sh/@mapbox/vector-tile@1.3.1",
    quickselect: "https://esm.sh/quickselect@1.0.0",
    tinyqueue: "https://esm.sh/tinyqueue@2.0.3",
    // 其余小依赖走 esm.sh 转换（CJS 兼容转换，按 0.124.4 依赖版本 pin）
    "gl-matrix": "https://esm.sh/gl-matrix@3.4.0",
    "animation-easings": "https://esm.sh/animation-easings",
    color: "https://esm.sh/color@3.0.0",
    colorin: "https://esm.sh/colorin@0.6.0",
    earcut: "https://esm.sh/earcut@3.0.1",
    "fast-deep-equal": "https://esm.sh/fast-deep-equal@2.0.1",
    "frustum-intersects": "https://esm.sh/frustum-intersects@0.2.4",
    lineclip: "https://esm.sh/lineclip@1.1.5",
    rbush: "https://esm.sh/rbush@3.0.1",
    "simplify-js": "https://esm.sh/simplify-js@1.2.1",
    pbf: "https://esm.sh/pbf@3.2.1",
    "vt-pbf": "https://esm.sh/vt-pbf@3.1.0",
    "robust-predicates": "https://esm.sh/robust-predicates@2.0.4",
    "point-in-polygon": "https://esm.sh/point-in-polygon@1.1.0",
    "parse-dds": "https://esm.sh/parse-dds@1.2.1",
    pako: "https://esm.sh/pako@2.0.4",
    wgsl_reflect: "https://esm.sh/wgsl_reflect@1.0.16",
    "@turf/along": "https://esm.sh/@turf/along@6.5.0",
    "@turf/buffer": "https://esm.sh/@turf/buffer@6.5.0",
    "@turf/helpers": "https://esm.sh/@turf/helpers@6.5.0",
    "@turf/distance": "https://esm.sh/@turf/distance@6.5.0",
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
    // d3-marker 用 d3 v3（geom.quadtree/svg/scale.identity），与 import map 的默认
    // d3 v7 不兼容，单独映射；d3v3 的 esm.sh 转换存在 document 作用域问题，改用
    // 本地 UMD 注入 shim
    d3v3: "/lib/d3v3.mjs",
    echarts: "https://esm.sh/echarts@5.5.1",
    "@turf/turf": "https://esm.sh/@turf/turf@6.5.0",
    "topojson-client": "https://esm.sh/topojson-client@3.1.0",
    highcharts: "https://esm.sh/highcharts@11.4.8",
    jquery: "https://esm.sh/jquery@3.7.1",
    // sunshine 用 jQuery-UI 的 datepicker/slider；REPL 不跑 <script src>，用本地
    // jquery-ui shim（见 docs/public/lib/jquery-ui.mjs）扩展 $.fn
    "jquery-ui": "/lib/jquery-ui.mjs",
    "dat.gui": "https://esm.sh/dat.gui@0.7.9",
    "suncalc": "https://esm.sh/suncalc@1.9.0",
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
 * 预览优先：默认隐藏代码编辑器，让示例占满可用宽度。
 * 预览区宽度直接决定 3D 示例的相机视野（例：压平、测量等交互类示例），
 * 窄预览区下画出的区域与官网示例站（预览占满）不一致。
 */
const previewOnly = ref(true);

/**
 * 已加载的示例路径。
 * setFiles 会写入 store 的响应式状态（mainFile 等），触发 watchEffect 再次执行；
 * 若重复 setFiles，预览 iframe 会在同一文档中二次执行脚本（如二次 new Map），
 * 因此用该守卫跳过重复加载。
 */
let loadedPath = "";

/**
 * 以下状态必须在 watchEffect 之前声明：
 * watchEffect 会在 setup 阶段**同步**执行 updateExample，而它一上来就读这些变量；
 * 若声明在后，会触发暂时性死区（ReferenceError: Cannot access … before initialization），
 * 表现为示例加载整条链路中断、代码面板空白。
 */
/** 示例源码缓存：同一示例再次进入不必重复抓取 */
const fileCache = new Map<string, Record<string, string>>();
/** 加载令牌：切换过快时只接受最后一次请求的结果，避免旧响应覆盖新示例 */
let loadToken = 0;
const loading = ref(false);
const loadError = ref("");

watchEffect(updateExample);

onHashChange(updateExample);

/**
 * 从「预览」切回「源码」时，必须让 CodeMirror 重新测量一次。
 *
 * 编辑器是在左侧窗格 display:none 的状态下挂载的（预览优先布局），CodeMirror 5
 * 会把视口高度量成 0，于是**首个文件（index.html）一行都不渲染**——表现为
 * 「点了查看源码，html 标签里是空白」；切到其它文件标签会触发重绘，所以只有
 * 初始那个文件看着是空的。CM5 的标准解法是 refresh() 重新测量。
 */
watch(previewOnly, (only) => {
  if (only) return;
  nextTick(() => {
    requestAnimationFrame(() => {
      const el = document.querySelector(".examples-repl-page .CodeMirror") as
        | (HTMLElement & { CodeMirror?: { refresh(): void } })
        | null;
      el?.CodeMirror?.refresh();
    });
  });
});

/**
 * 按需抓取示例目录下的文件。
 * 构建期 data 里只保留文件名，源码通过 /examples/<path>/<file> 直接取，
 * 这样首屏 chunk 不必再内联 391 个示例的全部源码。
 */
async function fetchExampleFiles(example: ExampleItem): Promise<Record<string, string>> {
  const cached = fileCache.get(example.path);
  if (cached) return { ...cached };
  const base = `/examples/${example.path}/`;
  const entries = await Promise.all(
    example.files.map(async (filename) => {
      const response = await fetch(base + filename);
      if (!response.ok) {
        throw new Error(`${base}${filename} → ${response.status} ${response.statusText}`);
      }
      return [filename, await response.text()] as const;
    }),
  );
  const files = Object.fromEntries(entries);
  fileCache.set(example.path, files);
  return { ...files };
}

/** 根据 hash 找到示例，抓取文件集并加载到 REPL */
async function updateExample() {
  const hash = location.hash.slice(1);
  if (hash === loadedPath) return;
  const example = examples.find((item) => item.path === hash);
  if (!example) return;
  const token = ++loadToken;
  path.value = hash;
  // 先占位：store.setFiles 会写入 store 的响应式状态并触发 watchEffect 重入，
  // 必须在调用前就标记为已加载，否则会二次 setFiles、预览里二次执行脚本
  //（表现为 "Container is already loaded with another map instance"）。
  loadedPath = hash;
  loading.value = true;
  loadError.value = "";
  try {
    const raw = await fetchExampleFiles(example);
    if (token !== loadToken) return; // 已被更晚的选择取代
    // 替换站点级占位符：{res} 资源目录、{urlTemplate}/{attribution} 默认底图，
    // 同时作用于 html/css/js 等所有文件
    const files: Record<string, string> = {};
    for (const [filename, content] of Object.entries(raw)) {
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
  } catch (err) {
    if (token !== loadToken) return;
    loadedPath = ""; // 失败时释放占位，允许重试
    loadError.value = `示例文件加载失败：${example.path}（${
      err instanceof Error ? err.message : String(err)
    }）`;
  } finally {
    if (token === loadToken) loading.value = false;
  }
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
  <div class="examples-repl-page" :class="{ 'is-preview-only': previewOnly }">
    <div class="examples-repl-head">
      <span class="examples-repl-path">
        <span
          class="examples-repl-live"
          :class="{ 'is-loading': loading }"
          aria-hidden="true"
        ></span>
        {{ path }}
        <span v-if="loading" class="examples-repl-loading">加载中…</span>
      </span>
      <div class="examples-repl-actions">
        <button
          type="button"
          class="examples-repl-toggle"
          @click="previewOnly = !previewOnly"
        >
          {{ previewOnly ? "查看源码" : "返回预览" }}
        </button>
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
    </div>
    <p v-if="loadError" class="examples-repl-error">{{ loadError }}</p>
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

.examples-repl-actions {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}

.examples-repl-toggle {
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

.examples-repl-toggle:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
  background-color: var(--vp-c-brand-soft);
}

.examples-repl-toggle:active {
  transform: translateY(1px);
}

.examples-repl-toggle:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 2px;
}

/**
 * 预览优先：默认隐藏左侧代码编辑器与分隔条，让示例占满可用宽度。
 * 预览区宽度直接决定 3D 示例的相机视野——窄预览下绘制/测量的结果会与
 * 官网示例站（预览占满）不一致；需要看代码时点「查看源码」切回。
 */
.examples-repl-page.is-preview-only .split-pane > .left {
  display: none !important;
}

.examples-repl-page.is-preview-only .split-pane > .right {
  flex: 1 1 100% !important;
  width: 100% !important;
  /*
   * ≤720px 时 @vue/repl 把两个窗格绝对定位重叠，并把 .right（预览）压到
   * z-index:-1 + pointer-events:none，默认露出的是 .left（编辑器）。
   * 我们已把编辑器 display:none，必须同时把预览提回可见且可交互，
   * 否则预览会被画到容器背景之后——手机上表现为整块空白。
   */
  z-index: 1 !important;
  pointer-events: all !important;
}

/* 预览优先时不需要 @vue/repl 自带的移动端窗格切换按钮（与「查看源码」重复） */
.examples-repl-page.is-preview-only .split-pane .toggler {
  display: none !important;
}

/*
 * 手机：用 svh（小视口高度）避开移动端地址栏导致 100vh 偏高的问题，
 * 并放宽最小高度，避免小屏横屏时预览区被撑出屏幕。
 */
@media (max-width: 720px) {
  .vue-repl {
    height: calc(100vh - 180px);
    height: calc(100svh - 180px);
    min-height: 360px;
  }
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

/* 抓取示例源码期间让指示点呼吸，避免看起来像卡住 */
.examples-repl-live.is-loading {
  animation: examples-repl-pulse 1s ease-in-out infinite;
}
@keyframes examples-repl-pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.25;
  }
}

.examples-repl-loading {
  flex-shrink: 0;
  font-size: 11px;
  color: var(--vp-c-text-3);
}

.examples-repl-error {
  margin: 0;
  padding: 10px 14px;
  border: 1px solid var(--vp-c-danger-1);
  border-radius: 8px;
  background-color: var(--vp-c-danger-soft);
  color: var(--vp-c-danger-1);
  font-size: 13px;
  line-height: 1.6;
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
