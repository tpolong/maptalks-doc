<script setup lang="ts">
import { computed, ref } from "vue";
import { data as examples, type ExampleItem } from "./examples.data";

/**
 * Example center (modeled after examples.maptalks.com)
 *
 * Layout:
 *  - Left column: search box + "Download all" link + collapsible category tree
 *  - Right column: grouped thumbnail card grid; clicking a card opens the REPL
 *
 * Data is inlined at build time by the .data loader, so it renders during SSR
 * without <ClientOnly>. Thumbnails live in public/thumbnails/{cat}_{sub}_{name}.webp.
 */

/** Top-level category display labels (reference site's top-level categories) */
const CATEGORY_LABELS: Record<string, string> = {
  "3d": "3D Features",
  basic: "Basics",
  gltf: "GLTF Models",
  vector: "Vector Tiles & Layers",
};
const CATEGORY_ORDER = ["basic", "vector", "gltf", "3d"];

/** Subcategory dir name -> reference section title (EN) */
const SUBCATEGORY_LABELS: Record<string, Record<string, string>> = {
  basic: {
    map: "Map",
    "tilelayer-projection": "Tile Layers & Projection",
    geometry: "Geometry",
    "3d": "3D",
    style: "Symbols & Styles",
    layer: "Layers",
    utils: "Utilities / Global",
    interaction: "Interaction",
    animation: "Animation",
    "ui-control": "Spatial & UI Components",
    json: "JSON Serialization",
    "plugin-develop": "Plugin Development",
    hellolayer: "Layer Development",
  },
  vector: {
    vtlayer: "Vector Tile Layer",
    "vt-visual": "Vector Tile Visual",
    geo: "GeoJSONVectorTileLayer",
    operation: "Styling Operations",
    interactive: "Layer Interaction",
    pointstyle: "Point Data Styles",
    linestyle: "Line Data Styles",
    polygonstyle: "Polygon Data Styles",
    pointlayer: "Point Layers",
    linelayer: "Line Layers",
    polygonlayer: "Polygon Layers",
    style: "Styling Operations",
  },
  gltf: {
    "gltf-marker": "GLTFMarker",
    "gltf-layer": "GLTFLayer",
    "multi-gltf-marker": "MultiGLTFMarker",
    "gltf-linestring": "GLTFLineString",
    "transform-control": "TransformControl",
  },
  "3d": {
    "line-3d-style": "3D Line Styles",
    "polygon-3d-style": "3D White-model Styles",
    waterstyle: "Water Rendering",
    terrain: "Terrain",
    traffic: "Traffic",
    "post-process": "Post-processing Effects",
    "3dtiles": "3D Tiles Examples",
    pipeline: "Pipelines",
    "spatial-analysis": "Spatial Analysis",
    track: "Track & Route",
    video: "Video Layers",
    weather: "Weather System",
  },
};

/** Humanize a directory name into a card title: custom-monomer -> Custom monomer */
function humanizeName(name: string): string {
  return name.replace(/[-_]+/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

interface ViewExample extends ExampleItem {
  title: string;
}

interface SubcategoryGroup {
  key: string; // "3d/3dtiles"
  name: string; // dir name
  label: string; // section title
  examples: ViewExample[];
}

interface CategoryGroup {
  category: string;
  label: string;
  subcategories: SubcategoryGroup[];
}

const allGroups = computed<CategoryGroup[]>(() => {
  const categoryOrder = [...CATEGORY_ORDER];
  const subByCategory = new Map<string, Map<string, ViewExample[]>>();
  for (const ex of examples) {
    if (!subByCategory.has(ex.category)) subByCategory.set(ex.category, new Map());
    const subs = subByCategory.get(ex.category)!;
    if (!subs.has(ex.subcategory)) subs.set(ex.subcategory, []);
    subs.get(ex.subcategory)!.push({ ...ex, title: humanizeName(ex.name) });
  }
  return categoryOrder
    .filter((cat) => subByCategory.has(cat))
    .map((category) => {
      const subs = subByCategory.get(category)!;
      const subcategories: SubcategoryGroup[] = [...subs.keys()].map((name) => ({
        key: `${category}/${name}`,
        name,
        label: SUBCATEGORY_LABELS[category]?.[name] ?? humanizeName(name),
        examples: subs.get(name) ?? [],
      }));
      return { category, label: CATEGORY_LABELS[category] ?? category, subcategories };
    });
});

/** Search filter: by card title / dir name / path */
const query = ref("");
const filteredGroups = computed<CategoryGroup[]>(() => {
  const q = query.value.trim().toLowerCase();
  if (!q) return allGroups.value;
  return allGroups.value
    .map((group) => ({
      ...group,
      subcategories: group.subcategories
        .map((sub) => ({
          ...sub,
          examples: sub.examples.filter(
            (ex) =>
              ex.name.toLowerCase().includes(q) ||
              ex.title.toLowerCase().includes(q) ||
              ex.path.toLowerCase().includes(q),
          ),
        }))
        .filter((sub) => sub.examples.length > 0),
    }))
    .filter((group) => group.subcategories.length > 0);
});

/** Left tree collapse state: key = category or "category/sub". */
// Default to all top-level categories collapsed (compact left column like the
// reference).
const collapsedTree = ref<Set<string>>(
  new Set(allGroups.value.map((g) => g.category)),
);
function toggleTree(key: string) {
  const next = new Set(collapsedTree.value);
  if (next.has(key)) next.delete(key);
  else next.add(key);
  collapsedTree.value = next;
}
function isCollapsed(key: string) {
  return collapsedTree.value.has(key);
}

/** Total number of examples matching the current (filtered) query, for search feedback */
const filteredCount = computed(() =>
  filteredGroups.value.reduce(
    (n, g) => n + g.subcategories.reduce((m, s) => m + s.examples.length, 0),
    0,
  ),
);

/** Switch to the REPL view via the hash (e.g. #3d/3dtiles/load) */
function runExample(path: string) {
  location.hash = path;
}

/** Scroll to a subcategory section */
function scrollToSub(key: string) {
  document.getElementById(`sub-${key.replace(/\//g, "-")}`)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}
</script>

<template>
  <div class="example-center">
    <div class="example-layout">
      <!-- Left: search + download all + category tree -->
      <aside class="example-sidebar">
        <div class="example-sidebar-tools">
          <input
            v-model="query"
            class="example-search"
            type="text"
            placeholder="Search examples…"
            aria-label="Search examples"
          />
          <a
            class="example-download"
            href="https://github.com/maptalks/examples/archive/gh-pages.zip"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download all
          </a>
        </div>

        <ul class="example-tree">
          <li v-for="group in filteredGroups" :key="group.category" class="example-tree-category">
            <button
              type="button"
              class="example-tree-cat-head"
              :aria-expanded="!isCollapsed(group.category)"
              @click="toggleTree(group.category)"
            >
              <span class="example-chevron" :class="{ open: !isCollapsed(group.category) }">▸</span>
              <span class="example-tree-cat-name">{{ group.label }}</span>
            </button>

            <ul v-if="!isCollapsed(group.category)" class="example-tree-subcats">
              <li v-for="sub in group.subcategories" :key="sub.key" class="example-tree-subcat">
                <button
                  type="button"
                  class="example-tree-subcat-link"
                  @click="scrollToSub(sub.key)"
                >
                  {{ sub.label }}
                  <span class="example-tree-count">{{ sub.examples.length }}</span>
                </button>
              </li>
            </ul>
          </li>
        </ul>
      </aside>

      <!-- Right: search feedback + thumbnail card grid -->
      <main class="example-main">
        <div
          v-if="query.trim()"
          class="example-search-status"
          :class="{ empty: filteredCount === 0 }"
        >
          <template v-if="filteredCount > 0">
            Found <strong>{{ filteredCount }}</strong> results matching "{{ query.trim() }}"
          </template>
          <template v-else>
            No results matching "{{ query.trim() }}"
          </template>
        </div>

        <template v-if="filteredGroups.length">
        <section
          v-for="group in filteredGroups"
          :key="group.category"
          class="example-category"
        >
          <template v-for="sub in group.subcategories" :key="sub.key">
            <h2 :id="`sub-${sub.key.replace(/\//g, '-')}`" class="example-section-title">
              {{ sub.label }}
            </h2>
            <div class="example-card-grid">
              <button
                v-for="ex in sub.examples"
                :key="ex.path"
                type="button"
                class="example-card"
                :title="ex.path"
                @click="runExample(ex.path)"
              >
                <span class="example-card-thumb">
                  <img
                    :src="`/thumbnails/${ex.category}_${ex.subcategory}_${ex.name}.webp`"
                    :alt="ex.title"
                    loading="lazy"
                    decoding="async"
                  />
                </span>
                <span class="example-card-title">
                  <span class="example-card-dot">•</span> {{ ex.title }}
                </span>
              </button>
            </div>
          </template>
        </section>
        </template>
        <p v-else class="example-empty">
          {{ query.trim() ? "No matching examples" : "No examples yet" }}
        </p>
      </main>
    </div>
  </div>
</template>

<style scoped>
.example-center {
  margin: 0 0 32px;
  padding: 0 24px;
}

.example-layout {
  display: flex;
  gap: 24px;
  align-items: flex-start;
  max-width: 1120px;
  margin: 0 auto;
}

/* ---------------- Left column (same width as site sidebar) ---------------- */
.example-sidebar {
  flex: 0 0 var(--vp-sidebar-width, 272px);
  position: sticky;
  top: 80px;
  max-height: calc(100vh - 100px);
  overflow-y: auto;
  padding-right: 8px;
  padding-bottom: 16px;
}

.example-sidebar-tools {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
}

.example-search {
  flex: 1;
  min-width: 0;
  box-sizing: border-box;
  border: 1px solid var(--vp-c-divider);
  border-radius: 9999px;
  padding: 8px 13px;
  font-size: 13px;
  color: var(--vp-c-text-1);
  background-color: var(--vp-c-bg);
  outline: none;
  transition: border-color 0.18s ease, box-shadow 0.18s ease;
}
.example-search::placeholder {
  color: var(--vp-c-text-3);
}
.example-search:focus {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 0 0 3px var(--vp-c-brand-soft);
}

.example-download {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border: 1px solid var(--maptalks-border-strong, var(--vp-c-divider));
  color: var(--vp-c-text-1);
  background-color: var(--vp-c-bg);
  border-radius: 9999px;
  padding: 5px 11px;
  font-size: 12px;
  font-weight: 500;
  text-decoration: none;
  white-space: nowrap;
  transition: border-color 0.18s ease, color 0.18s ease;
}
.example-download:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.example-tree {
  list-style: none;
  margin: 0;
  padding: 0;
}

.example-tree-category {
  margin-bottom: 2px;
}

.example-tree-cat-head {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 10px 6px;
  background: transparent;
  border: none;
  cursor: pointer;
  font: inherit;
  color: var(--vp-c-text-1);
  text-align: left;
  border-bottom: 1px solid var(--vp-c-divider);
}
.example-tree-cat-head:hover {
  color: var(--vp-c-brand-1);
}

.example-tree-cat-name {
  font-size: 14px;
  font-weight: 650;
  letter-spacing: -0.01em;
}

.example-chevron {
  display: inline-block;
  font-size: 11px;
  color: var(--vp-c-text-3);
  transition: transform 0.2s;
}
.example-chevron.open {
  transform: rotate(90deg);
}

.example-tree-subcats {
  list-style: none;
  margin: 0;
  padding: 4px 0 4px 10px;
}

.example-tree-subcat {
  margin: 0;
}

.example-tree-subcat-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  width: 100%;
  padding: 5px 6px;
  background: transparent;
  border: none;
  cursor: pointer;
  font: inherit;
  font-size: 13px;
  color: var(--vp-c-text-2);
  text-align: left;
  border-radius: 5px;
}
.example-tree-subcat-link:hover {
  background-color: var(--vp-c-bg-soft-down);
  color: var(--vp-c-text-1);
}

.example-tree-count {
  font-size: 11px;
  color: var(--vp-c-text-3);
  background-color: var(--vp-c-bg-soft-down);
  border-radius: 999px;
  padding: 0 7px;
}

/* ---------------- Right column ---------------- */
.example-main {
  flex: 1;
  min-width: 0;
}

.example-search-status {
  margin-bottom: 8px;
  font-size: 14px;
  color: var(--vp-c-text-2);
  line-height: 1.8;
}
.example-search-status strong {
  color: var(--vp-c-brand-1);
  font-weight: 650;
}
.example-search-status.empty {
  color: var(--vp-c-text-3);
}

.example-empty {
  margin: 24px 0;
  color: var(--vp-c-text-3);
  font-size: 14px;
}

.example-category {
  margin-bottom: 8px;
}

.example-section-title {
  font-size: 17px;
  font-weight: 650;
  letter-spacing: -0.01em;
  padding-bottom: 8px;
  margin: 26px 0 16px;
  border-bottom: 1px solid var(--vp-c-divider);
  scroll-margin-top: 90px;
}

.example-card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
  gap: 16px;
}

.example-card {
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  border: 1px solid var(--maptalks-border, var(--vp-c-divider));
  border-radius: 12px;
  overflow: hidden;
  background: var(--vp-c-bg);
  cursor: pointer;
  text-align: left;
  transition: border-color 0.18s ease, box-shadow 0.18s ease,
    transform 0.18s ease;
}
.example-card:hover {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 6px 20px rgba(20, 40, 60, 0.08);
  transform: translateY(-3px);
}

.example-card-thumb {
  display: block;
  width: 100%;
  aspect-ratio: 4 / 3;
  background-color: var(--vp-c-bg-soft);
}
.example-card-thumb img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.example-card-title {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 10px 12px;
  font-size: 13px;
  font-weight: 500;
  color: var(--vp-c-text-1);
  border-top: 1px solid var(--vp-c-divider);
}

.example-card-dot {
  color: var(--vp-c-brand-1);
  font-size: 10px;
}

@media (max-width: 960px) {
  .example-layout {
    flex-direction: column;
  }
  .example-sidebar {
    position: static;
    max-height: none;
    width: 100%;
  }
  .example-card-grid {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  }
}
</style>
