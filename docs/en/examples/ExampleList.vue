<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from "vue";
import { useData } from "vitepress";
import { data as examples, type ExampleItem } from "./examples.data";
// Shared taxonomy lives with the Chinese component so both locales stay in sync.
import { CATEGORIES, SUBCATEGORIES } from "../../examples/taxonomy";

/**
 * Example center (modeled after examples.maptalks.com)
 *
 * Layout:
 *  - Left column: search box + "Download all" link + collapsible category tree
 *  - Right column: grouped thumbnail card grid; clicking a card opens the REPL
 *
 * Data is inlined at build time by the .data loader, so it renders during SSR
 * without <ClientOnly>. Thumbnails live in public/thumbnails/{physical cat}_{physical sub}_{name}.webp.
 *
 * Grouping comes from ../../examples/taxonomy (physical path -> display category), so the tree
 * is decoupled from the physical folders while thumbnail names and `#physical/path` deep links
 * keep using them.
 */

/**
 * Display language: category / subcategory names come from the shared taxonomy,
 * which carries both zh and en labels. English site -> "en".
 */
const lang = computed<"zh" | "en">(() =>
  (useData().lang.value || "").toLowerCase().startsWith("en") ? "en" : "zh",
);

/** Humanize a directory name into a card title: custom-monomer -> Custom monomer */
function humanizeName(name: string): string {
  return name.replace(/[-_]+/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

interface ViewExample extends ExampleItem {
  title: string;
}

interface SubcategoryGroup {
  key: string; // display anchor, e.g. "vt/pick"
  name: string; // display subcategory key
  label: string; // section title, in the site's language
  examples: ViewExample[];
}

interface CategoryGroup {
  category: string;
  label: string;
  subcategories: SubcategoryGroup[];
}

/** Sort by path so the card order inside a section stays stable */
function sortByPath(list: ViewExample[]): ViewExample[] {
  return [...list].sort((a, b) => a.path.localeCompare(b.path));
}

const allGroups = computed<CategoryGroup[]>(() => {
  // Physical folders are the display categories: bucket by category / subcategory
  const buckets = new Map<string, Map<string, ViewExample[]>>();
  for (const ex of examples) {
    const cat = ex.category;
    const sub = ex.subcategory;
    if (!buckets.has(cat)) buckets.set(cat, new Map());
    const subs = buckets.get(cat)!;
    if (!subs.has(sub)) subs.set(sub, []);
    subs.get(sub)!.push({ ...ex, title: humanizeName(ex.name) });
  }

  const groups: CategoryGroup[] = [];
  for (const cat of CATEGORIES) {
    const subs = buckets.get(cat.key);
    if (!subs) continue;
    const subcategories: SubcategoryGroup[] = [];
    // Registered subcategories, in the order declared by the taxonomy
    for (const def of SUBCATEGORIES) {
      if (def.cat !== cat.key) continue;
      const list = subs.get(def.sub);
      if (!list) continue;
      subcategories.push({
        key: `${def.cat}/${def.sub}`,
        name: def.sub,
        label: lang.value === "en" ? def.en : def.zh,
        examples: sortByPath(list),
      });
      subs.delete(def.sub);
    }
    // Anything not registered in the taxonomy still shows up instead of vanishing
    for (const [sub, list] of subs) {
      subcategories.push({
        key: `${cat.key}/${sub}`,
        name: sub,
        label: humanizeName(sub),
        examples: sortByPath(list),
      });
    }
    groups.push({
      category: cat.key,
      label: lang.value === "en" ? cat.en : cat.zh,
      subcategories,
    });
  }
  // Fallback for a completely unknown top-level category
  for (const [cat, subs] of buckets) {
    if (CATEGORIES.some((c) => c.key === cat)) continue;
    groups.push({
      category: cat,
      label: humanizeName(cat),
      subcategories: [...subs].map(([sub, list]) => ({
        key: `${cat}/${sub}`,
        name: sub,
        label: humanizeName(sub),
        examples: sortByPath(list),
      })),
    });
  }
  return groups;
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

/**
 * Selected state for the tree, matching the site sidebar: highlight the section
 * currently scrolled into view. We pick the last section whose top has crossed a
 * line just below the nav bar.
 */
const activeSub = ref("");
let subTops: { key: string; top: number }[] = [];
let rafId = 0;

function measureSubTops() {
  subTops = [];
  for (const group of filteredGroups.value) {
    for (const sub of group.subcategories) {
      const el = document.getElementById(`sub-${sub.key.replace(/\//g, "-")}`);
      if (!el) continue;
      // getBoundingClientRect + scrollY = absolute document offset, offsetParent-proof
      subTops.push({ key: sub.key, top: el.getBoundingClientRect().top + window.scrollY });
    }
  }
}

function updateActiveSub() {
  if (!subTops.length) measureSubTops();
  const line = window.scrollY + 140;
  let current = subTops[0]?.key ?? "";
  for (const item of subTops) {
    if (item.top <= line) current = item.key;
    else break;
  }
  activeSub.value = current;
}

function scheduleActiveSub() {
  if (rafId) return;
  rafId = requestAnimationFrame(() => {
    rafId = 0;
    updateActiveSub();
  });
}

onMounted(() => {
  measureSubTops();
  updateActiveSub();
  window.addEventListener("scroll", scheduleActiveSub, { passive: true });
  window.addEventListener("resize", scheduleActiveSub, { passive: true });
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", scheduleActiveSub);
  window.removeEventListener("resize", scheduleActiveSub);
  if (rafId) cancelAnimationFrame(rafId);
});

// Search filtering changes the section list and their offsets; re-measure after the DOM updates
watch(
  filteredGroups,
  () => {
    measureSubTops();
    updateActiveSub();
  },
  { flush: "post" },
);
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
          <li
            v-for="group in filteredGroups"
            :key="group.category"
            class="example-tree-category"
            :class="{ 'is-collapsed': isCollapsed(group.category) }"
          >
            <button
              type="button"
              class="example-tree-cat-head"
              :aria-expanded="!isCollapsed(group.category)"
              @click="toggleTree(group.category)"
            >
              <span class="example-tree-cat-name">{{ group.label }}</span>
              <span class="example-caret" :class="{ collapsed: isCollapsed(group.category) }">
                <svg
                  class="example-caret-icon"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    d="M9 5l7 7-7 7"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </button>

            <ul v-if="!isCollapsed(group.category)" class="example-tree-subcats">
              <li
                v-for="sub in group.subcategories"
                :key="sub.key"
                class="example-tree-subcat"
                :class="{ 'is-active': activeSub === sub.key }"
              >
                <span class="example-indicator" aria-hidden="true"></span>
                <button
                  type="button"
                  class="example-tree-subcat-link"
                  @click="scrollToSub(sub.key)"
                >
                  <span class="example-tree-subcat-text">{{ sub.label }}</span>
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

/* ---------------- Left column: same width / position / scrolling as the site sidebar ---------------- */
.example-sidebar {
  flex: 0 0 var(--vp-sidebar-width, 272px);
  position: sticky;
  top: 80px;
  max-height: calc(100vh - 100px);
  overflow-y: auto;
  padding-right: 8px;
  padding-bottom: 16px;
}

/*
 * On wide screens the column becomes fixed to the left of the viewport, matching the
 * native .VPSidebar used by the API / guide pages: same top, width, padding and
 * independent scrolling; the right column gets an equal left padding.
 */
@media (min-width: 960px) {
  .example-center {
    padding: 0;
  }
  .example-layout {
    display: block;
    gap: 0;
    max-width: none;
  }
  .example-sidebar {
    position: fixed;
    top: var(--vp-nav-height, 64px);
    bottom: 0;
    left: 0;
    z-index: var(--vp-z-index-sidebar, 60);
    width: var(--vp-sidebar-width, 272px);
    max-height: none;
    padding: 32px 32px 96px;
    overflow-x: hidden;
    overflow-y: auto;
    overscroll-behavior: contain;
  }
  .example-main {
    padding: 0 24px;
  }
}

/* Ultra-wide: reuse the exact centring formulas of .VPSidebar / .VPContent.has-sidebar */
@media (min-width: 1440px) {
  .example-sidebar {
    padding-left: max(
      32px,
      calc((100vw - (var(--vp-layout-max-width, 1440px) - 64px)) / 2)
    );
    width: calc(
      (100vw - (var(--vp-layout-max-width, 1440px) - 64px)) / 2 +
        var(--vp-sidebar-width, 272px) - 32px
    );
  }
  .example-main {
    padding-left: calc(
      (100vw - var(--vp-layout-max-width, 1440px)) / 2 +
        var(--vp-sidebar-width, 272px)
    );
    padding-right: calc((100vw - var(--vp-layout-max-width, 1440px)) / 2);
  }
}

/* The column is ~208px wide (native 32px padding), so stack the tools instead of squeezing them */
.example-sidebar-tools {
  display: flex;
  flex-direction: column;
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
  justify-content: center;
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

/*
 * The tree's appearance (group title / item / caret / active indicator / count) lives in
 * .vitepress/theme/custom.css, aligned rule-by-rule with VitePress's native VPSidebarItem.
 * Both ExampleList.vue files share that single copy, so it is not repeated here.
 */

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
