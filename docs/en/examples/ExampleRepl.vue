<script setup lang="ts">
import { Repl, useStore } from "@vue/repl";
import CodeMirror from "@vue/repl/codemirror-editor";
import { watchEffect, toRef, ref, watch, nextTick } from "vue";
import { useData } from "vitepress";
import { onHashChange } from "./utils";
import { data as examples, type ExampleItem } from "./examples.data";

/**
 * Runnable example component (@vue/repl integration)
 *
 * - Reads location.hash (e.g. #3d/3dtiles/load) and loads the full file set
 *   of the matching example from the data loader
 * - Maps maptalks / gl-layers / draco / proj4 / mt.gui module specifiers to
 *   CDN URLs via importMap so the example runs inside the iframe preview
 * - Replaces the {res} placeholder with the site's static resource dir
 *   /examples/resources
 * - Switches examples when the hash changes (e.g. clicking "▶ Run")
 *
 * Based on the official docs site docs/src/examples/components/ExampleRepl.vue,
 * keeping only the core REPL (no save/share extensions).
 */

/** Default values for site-level placeholders (the reference site's default basemap/attribution) */
// Use basemaps.cartocdn.com WITHOUT the {s} subdomain: a.basemaps.cartocdn.com is
// DNS-poisoned on some networks (resolving to a bogus 2001::737e:64a0 address)
// and fails to connect, while the bare domain serves normal tiles directly and
// avoids subdomain-round-robin retries. No apiKey is needed either way: the b/c/d
// subdomains and the bare domain return byte-identical tiles.
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
    // @maptalks/transcoders.draco is only published as UMD, which fails as an ESM
    // import; use the local ESM shim (see docs/public/lib/draco.mjs) to register it
    draco: "/lib/draco.mjs",
    proj4: "https://cdnjs.cloudflare.com/ajax/libs/proj4js/2.11.0/proj4.js",
    // "gl-layers" points at a local barrel entry that merges maptalks-gl (core + gl
    // extensions) with @maptalks/analysis (spatial analysis classes, no longer part
    // of the gl package since 0.124.4).
    "gl-layers": "/lib/gl-layers.mjs",
    "maptalks-gl": "https://unpkg.com/maptalks-gl@0.124.4/index.js",
    // maptalks-gl's ESM entry re-exports the maptalks core plus every sub package;
    // versions track the official CDN bundle (maptalks-gl 0.124.4 + maptalks 1.12.1).
    // The previous @maptalks/gl-layers@0.34.1 was frozen in 2024-03 with sub packages
    // stuck on 0.97.4, which behaved differently from the official site (e.g. 3D measure
    // threw on Tool.addTo, identify produced NaN coordinates).
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
    // regl ships CJS/UMD only; local wrapper exposes default + named createREGL
    "@maptalks/regl": "/lib/regl-esm.mjs",
    // @maptalks sub packages ship native ESM (module field), so point them straight at
    // unpkg: single request, no esm.sh redirect chain - faster and more reliable.
    // Their bare imports are resolved through this import map; versions aligned with the
    // 0.124.4 dependency tree (see @maptalks/gl@0.124.4 dependencies).
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
    // vector-packer / vt deps (resolved as bare specifiers after switching to unpkg):
    // point-geometry is CJS (needs esm.sh conversion), shelf-pack ships native index.mjs,
    // quickselect/tinyqueue go through esm.sh
    "@mapbox/point-geometry": "https://esm.sh/@mapbox/point-geometry@0.1.0",
    "@mapbox/shelf-pack": "https://unpkg.com/@mapbox/shelf-pack@3.2.0/index.mjs",
    "@mapbox/vector-tile": "https://esm.sh/@mapbox/vector-tile@1.3.1",
    quickselect: "https://esm.sh/quickselect@1.0.0",
    tinyqueue: "https://esm.sh/tinyqueue@2.0.3",
    // remaining small deps go through esm.sh conversion (CJS compat, pinned to the 0.124.4 tree)
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
    // gl-layers does not export RoutePlayer (6 track examples depend on it); use a local
    // minimal shim (see route-player.mjs)
    "route-player": "/lib/route-player.mjs",
    // simulated-traffic uses TrafficScene; @maptalks/traffic's npm dist is unpublished, so use
    // the locally esbuild-built ESM (see lib/maptalks.traffic.es.js)
    "@maptalks/traffic": "/lib/maptalks.traffic.es.js",
    // Two ui-control examples mount an in-DOM template with a Vue global; the REPL does
    // not run classic <script src> scripts, so map vue to the full browser build that
    // ships the template compiler, and shim it to window.Vue in ensureImports
    // (Vue3 Options API; the examples were migrated from Vue2's new Vue/el API).
    vue: "https://unpkg.com/vue@3.5.42/dist/vue.esm-browser.js",
    // third-party global libs (some examples rely on a <script src> global that the
    // REPL does not run, so expose them via the import map + a window shim)
    d3: "https://esm.sh/d3@7.9.0",
    // d3-marker uses d3 v3 (geom.quadtree/svg/scale.identity), incompatible with the
    // default d3 v7 mapping. esm.sh's d3 v3 conversion has a document-scope issue,
    // so use a local UMD-inject shim instead.
    d3v3: "/lib/d3v3.mjs",
    echarts: "https://esm.sh/echarts@5.5.1",
    "@turf/turf": "https://esm.sh/@turf/turf@6.5.0",
    "topojson-client": "https://esm.sh/topojson-client@3.1.0",
    highcharts: "https://esm.sh/highcharts@11.4.8",
    jquery: "https://esm.sh/jquery@3.7.1",
    // sunshine uses jQuery-UI's datepicker/slider; the REPL does not run <script src>,
    // so a local jquery-ui shim (see docs/public/lib/jquery-ui.mjs) extends $.fn
    "jquery-ui": "/lib/jquery-ui.mjs",
    "dat.gui": "https://esm.sh/dat.gui@0.7.9",
    "suncalc": "https://esm.sh/suncalc@1.9.0",
    // esm.sh rewrites the `maptalks` import inside its served sub packages to
    // an absolute esm.sh URL, bypassing the bare-specifier map above and loading
    // a second maptalks instance (duplicate-import error). Remap those absolute
    // URLs to the single unpkg instance here.
    "https://esm.sh/maptalks": "https://unpkg.com/maptalks/dist/maptalks.es.js",
    "https://esm.sh/maptalks@1.12.1": "https://unpkg.com/maptalks/dist/maptalks.es.js",
    "https://esm.sh/maptalks@1.12.1/es2022/maptalks.mjs":
      "https://unpkg.com/maptalks/dist/maptalks.es.js",
  },
};

const store = useStore({
  builtinImportMap: toRef(importMap),
});

/** Follow the site's light/dark theme for the REPL */
const { isDark } = useData();

/** Current example path, e.g. "3d/3dtiles/load" */
const path = ref("");

/**
 * Preview-first: hide the code editor by default so the example fills the
 * available width. Preview width drives the 3D camera view, so a narrow preview
 * makes draw/measure results differ from the official example site.
 */
const previewOnly = ref(true);

/**
 * Path of the example already loaded.
 * setFiles writes to the store's reactive state (mainFile etc.), which would
 * re-trigger the watchEffect; a second setFiles would re-run the preview
 * scripts in the same document (e.g. a second new Map), so skip duplicates.
 */
let loadedPath = "";

/*
 * The state below MUST be declared before watchEffect:
 * watchEffect runs updateExample **synchronously** during setup and it reads these
 * variables immediately; declaring them later hits the temporal dead zone
 * (ReferenceError: Cannot access … before initialization) and breaks example loading
 * entirely, leaving the code panel empty.
 */
/** Runtime cache of example sources: re-entering the same example does not refetch */
const fileCache = new Map<string, Record<string, string>>();
/** Load token: when switching quickly, only the latest request may win */
let loadToken = 0;
const loading = ref(false);
const loadError = ref("");

watchEffect(updateExample);

onHashChange(updateExample);

/**
 * Switching from the preview back to the source view must re-measure CodeMirror.
 *
 * The editor mounts while the left pane is display:none (preview-first layout), so
 * CodeMirror 5 measures a zero-height viewport and renders **no lines for the first
 * file (index.html)** — the user sees "clicked view source, the html tab is blank".
 * Clicking another file tab forces a redraw, which is why only the initial file looks
 * empty. refresh() is the standard CodeMirror 5 remedy.
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
 * Fetch the example's files on demand.
 * The build-time data keeps file names only; sources are read from
 * /examples/<path>/<file>, so the first-screen chunk no longer inlines all 391 examples.
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

/** Find the example from the hash, fetch its files and load them into the REPL */
async function updateExample() {
  const hash = location.hash.slice(1);
  if (hash === loadedPath) return;
  const example = examples.find((item) => item.path === hash);
  if (!example) return;
  const token = ++loadToken;
  path.value = hash;
  // Claim the path up front: store.setFiles writes reactive store state and re-triggers
  // the watchEffect, so it must already look loaded, otherwise a second setFiles re-runs
  // the example scripts in the preview ("Container is already loaded with another map instance").
  loadedPath = hash;
  loading.value = true;
  loadError.value = "";
  try {
    const raw = await fetchExampleFiles(example);
    if (token !== loadToken) return; // superseded by a later selection
    // Replace site-level placeholders: {res} resource dir, {urlTemplate}/{attribution}
    // default basemap, applied to all files (html/css/js etc.)
    const files: Record<string, string> = {};
    for (const [filename, content] of Object.entries(raw)) {
      files[filename] = replacePlaceholders(content);
    }
    // If index.html has no inline <script type="module"> (e.g. the JS lives in a
    // separate index.js or is referenced via <script src>), @vue/repl can't pick
    // it up and the preview stays blank. Inline index.js as a module script so the
    // example actually runs.
    inlineIndexJs(files);
    // @vue/repl injects standalone .css files only after the example scripts have
    // run. Examples typically rely on html/body height:100% to size the map
    // container, so at `new Map` time the container height is still 0 -> the canvas
    // becomes 0-height and edit-mode top-element drawing throws drawImage 0-size
    // errors. Inlining the css as a <style> tag makes it take effect before the
    // scripts run, together with index.html.
    inlineCss(files);
    store.setFiles(files, "index.html");
  } catch (err) {
    if (token !== loadToken) return;
    loadedPath = ""; // release the claim on failure so it can be retried
    loadError.value = `Failed to load example files: ${example.path} (${
      err instanceof Error ? err.message : String(err)
    })`;
  } finally {
    if (token === loadToken) loading.value = false;
  }
}

/**
 * If index.html lacks an inline module script, inline index.js into it.
 * Handles two shapes:
 *  - index.html references index.js via a module script -> replaced inline
 *  - a stub that only has <div id="map">                  -> inline script appended
 * Files that already have inline module code (e.g. basic/map/load) are returned as-is.
 */
/**
 * Some examples refer to global identifiers directly (e.g. `new maptalks.Map(...)`
 * or `new mt.GUI()`) without importing them. In the browser those bare identifiers
 * are not resolved by the import map, causing "maptalks is not defined". Add the
 * missing imports here (skips code that already imports them).
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
    // If index.html already has an empty inline module script (a module script tag with no content),
    // remove it (it executes nothing), then append the index.js content before the body close tag.
    // Keeping the empty module block and also appending another would make @vue/repl wrap every
    // module block in its own __module__, causing "Identifier '__module__' has already been declared".
    // Removing the empty block + appending yields a single module block that runs after the #map
    // container exists (identical to plain stub examples).
    const emptyModule = /<script[^>]*\btype=["']module["'][^>]*>\s*<\/script>/i;
    const cleaned = html.replace(emptyModule, "");
    const inlineTag = `\n<script type="module">\n${js}\n<\/script>\n`;
    files["index.html"] = cleaned.includes("</body>")
      ? cleaned.replace("</body>", inlineTag + "</body>")
      : cleaned + inlineTag;
  }
}

/**
 * Inline the example's index.css into index.html as a <style> tag:
 * @vue/repl injects standalone .css files into <head> only after the example
 * scripts have executed. Examples usually rely on html/body height:100% to size
 * the map container, so at `new Map` time the container height is still 0, the
 * canvas becomes 0-height, and edit-mode top-element drawing throws drawImage
 * 0-size errors. Inlining makes the styles take effect before the scripts run.
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

/** Clear the hash and return to the static example list */
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
        <span v-if="loading" class="examples-repl-loading">Loading…</span>
      </span>
      <div class="examples-repl-actions">
        <button
          type="button"
          class="examples-repl-toggle"
          @click="previewOnly = !previewOnly"
        >
          {{ previewOnly ? "View source" : "Back to preview" }}
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
          <span>Close</span>
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
 * Preview-first: hide the left code editor and splitter so the example fills
 * the available width. Preview width drives the 3D camera view — a narrow
 * preview makes draw/measure results differ from the official example site.
 */
.examples-repl-page.is-preview-only .split-pane > .left {
  display: none !important;
}

.examples-repl-page.is-preview-only .split-pane > .right {
  flex: 1 1 100% !important;
  width: 100% !important;
  /*
   * Below 720px @vue/repl stacks the two panes with absolute positioning and pushes
   * .right (the preview) to z-index:-1 + pointer-events:none, showing .left (the editor)
   * by default. We already hide the editor, so the preview must be restored to the
   * visible, interactive layer — otherwise it is painted behind the container background
   * and mobile users see a blank area.
   */
  z-index: 1 !important;
  pointer-events: all !important;
}

/* In preview-only mode @vue/repl's own mobile pane toggler duplicates our "view source" button */
.examples-repl-page.is-preview-only .split-pane .toggler {
  display: none !important;
}

/*
 * Phones: use svh (small viewport height) so the mobile URL bar does not inflate 100vh,
 * and relax the minimum height so the preview is not pushed off-screen on short viewports.
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

/* "Live" indicator dot: brand-color circle with a soft halo, echoing the card accent */
.examples-repl-live {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: var(--vp-c-brand-1);
  flex-shrink: 0;
  box-shadow: 0 0 0 3px var(--vp-c-brand-soft);
}

/* Let the dot pulse while the example sources are being fetched */
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
