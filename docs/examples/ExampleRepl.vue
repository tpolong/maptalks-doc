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
    draco: "https://maptalks.com/api/transcoders.draco.js",
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
    // 其余依赖走 esm.sh 转换（单个小依赖转换稳定，按 maptalks 依赖版本 pin）
    "@maptalks/fusiongl": "https://esm.sh/@maptalks/fusiongl@0.6.13",
    "@maptalks/reshader.gl": "https://esm.sh/@maptalks/reshader.gl@0.97.4",
    "@maptalks/feature-filter": "https://esm.sh/@maptalks/feature-filter@1.3.0",
    "@maptalks/function-type": "https://esm.sh/@maptalks/function-type@1.4.1",
    "@maptalks/gltf-loader": "https://esm.sh/@maptalks/gltf-loader@0.124.4",
    "@maptalks/tbn-packer": "https://esm.sh/@maptalks/tbn-packer@1.4.5",
    "@maptalks/vector-packer": "https://esm.sh/@maptalks/vector-packer@0.96.4",
    "@maptalks/vt-plugin": "https://esm.sh/@maptalks/vt-plugin@0.124.4",
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
    // 第三方全局库（部分示例用 <script src> 全局，REPL 不走该机制，用 import map
    // + 内联时 shim 成 window 全局）
    d3: "https://esm.sh/d3@7.9.0",
    echarts: "https://esm.sh/echarts@5.5.1",
    "@turf/turf": "https://esm.sh/@turf/turf@6.5.0",
    "topojson-client": "https://esm.sh/topojson-client@3.1.0",
    highcharts: "https://esm.sh/highcharts@11.4.8",
    jquery: "https://esm.sh/jquery@3.7.1",
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
  prepend('import * as d3 from "d3";\nwindow.d3 = d3;', /\bd3\.[A-Za-z]/, /\bimport\b[^;]*\bd3\b/);
  prepend('import * as echarts from "echarts";\nwindow.echarts = echarts;', /\becharts\b/, /\bimport\b[^;]*\becharts\b/);
  prepend('import * as turf from "@turf/turf";\nwindow.turf = turf;', /\bturf\.[A-Za-z]/, /\bimport\b[^;]*\bturf\b/);
  prepend('import * as topojson from "topojson-client";\nwindow.topojson = topojson;', /\btopojson\b/, /\bimport\b[^;]*\btopojson\b/);
  prepend('import * as Highcharts from "highcharts";\nwindow.Highcharts = Highcharts;', /\bHighcharts\b/, /\bimport\b[^;]*\bhighcharts\b/);
  prepend('import $ from "jquery";\nwindow.$ = $;\nwindow.jQuery = $;', /\b\$\s*\(|\bjQuery\b/, /\bimport\b[^;]*\bjquery\b/);
  prepend('import * as dat from "dat.gui";\nwindow.dat = dat;', /\bdat\.[A-Za-z]/, /\bimport\b[^;]*\bdat\.gui\b/);
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
    const inlineTag = `\n<script type="module">\n${js}\n<\/script>\n`;
    files["index.html"] = html.includes("</body>")
      ? html.replace("</body>", inlineTag + "</body>")
      : html + inlineTag;
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
