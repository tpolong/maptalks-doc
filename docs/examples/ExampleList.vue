<script setup lang="ts">
import { computed, ref } from "vue";
import { data as examples, type ExampleItem } from "./examples.data";

/**
 * 示例中心（模仿 examples.maptalks.com）
 *
 * 布局：
 *  - 左栏：搜索框 + "全部下载" 链接 + 可折叠分类树
 *  - 右栏：按子分类分组的缩略图卡片网格，点击卡片进入 REPL 运行
 *
 * 数据由 .data 加载器在构建时内联，SSR 可直接渲染，无需 <ClientOnly>。
 * 缩略图存放于 public/thumbnails/{cat}_{sub}_{name}.webp。
 */

/** 四大分类的展示名（参考站顶级分类） */
const CATEGORY_LABELS: Record<string, string> = {
  "3d": "三维功能",
  basic: "基础功能",
  gltf: "GLTF模型",
  vector: "矢量瓦片及点线面图层",
};
const CATEGORY_ORDER = ["basic", "vector", "gltf", "3d"];

/** 子分类目录名 -> 参考站节标题中文名 */
const SUBCATEGORY_LABELS: Record<string, Record<string, string>> = {
  basic: {
    map: "地图",
    "tilelayer-projection": "瓦片图层与地理投影",
    geometry: "图形",
    "3d": "三维",
    style: "图形样式",
    layer: "图层",
    utils: "工具/全局功能",
    interaction: "交互",
    animation: "动画",
    "ui-control": "空间与UI组件",
    json: "JSON序列化",
    "plugin-develop": "插件开发示例",
    hellolayer: "图层开发示例",
  },
  vector: {
    vtlayer: "矢量瓦片图层",
    "vt-visual": "矢量瓦片图层可视化",
    geo: "GeoJSONVectorTileLayer",
    operation: "样式操作",
    interactive: "图层交互",
    pointstyle: "点类型数据样式",
    linestyle: "线类型数据样式",
    polygonstyle: "面类型数据样式",
    pointlayer: "点图层",
    linelayer: "线图层",
    polygonlayer: "面图层",
    style: "样式操作",
  },
  gltf: {
    "gltf-marker": "GLTFMarker",
    "gltf-layer": "GLTFLayer",
    "multi-gltf-marker": "MultiGLTFMarker",
    "gltf-linestring": "GLTFLineString",
    "transform-control": "TransformControl",
  },
  "3d": {
    "line-3d-style": "线数据三维样式",
    "polygon-3d-style": "三维白模样式",
    waterstyle: "水体渲染",
    terrain: "地形",
    traffic: "交通",
    "post-process": "后处理特效",
    "3dtiles": "3dtiles功能示例",
    pipeline: "管线",
    "spatial-analysis": "空间分析",
    track: "轨迹路线",
    video: "视频图层",
    weather: "天气系统",
  },
};

/** 把目录名人性化为卡片标题：custom-monomer -> Custom monomer */
function humanizeName(name: string): string {
  return name.replace(/[-_]+/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

interface ViewExample extends ExampleItem {
  title: string;
}

interface SubcategoryGroup {
  key: string; // "3d/3dtiles"
  name: string; // 目录名
  label: string; // 中文节标题
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
        label:
          SUBCATEGORY_LABELS[category]?.[name] ??
          humanizeName(name),
        examples: subs.get(name) ?? [],
      }));
      return { category, label: CATEGORY_LABELS[category] ?? category, subcategories };
    });
});

/** 搜索过滤：按卡片标题/目录名匹配 */
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

/** 左侧树折叠状态：key = category 或 category/subcategory */
// 默认折叠所有顶级分类（与参考站一致，左栏紧凑）。
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

/** 当前匹配（过滤后）的示例总数，用于搜索反馈 */
const filteredCount = computed(() =>
  filteredGroups.value.reduce(
    (n, g) => n + g.subcategories.reduce((m, s) => m + s.examples.length, 0),
    0,
  ),
);

/** 通过 hash 切换到 REPL 视图运行示例（如 #3d/3dtiles/load） */
function runExample(path: string) {
  location.hash = path;
}

/** 滚动到某个子分类区块 */
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
      <!-- 左栏：搜索 + 全部下载 + 分类树 -->
      <aside class="example-sidebar">
        <div class="example-sidebar-tools">
          <input
            v-model="query"
            class="example-search"
            type="text"
            placeholder="搜索示例…"
            aria-label="搜索示例"
          />
          <a
            class="example-download"
            href="https://github.com/maptalks/examples/archive/gh-pages.zip"
            target="_blank"
            rel="noopener noreferrer"
          >
            全部下载
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

      <!-- 右栏：搜索反馈 + 缩略图卡片网格 -->
      <main class="example-main">
        <div
          v-if="query.trim()"
          class="example-search-status"
          :class="{ empty: filteredCount === 0 }"
        >
          <template v-if="filteredCount > 0">
            找到 <strong>{{ filteredCount }}</strong> 个与「{{ query.trim() }}」匹配的示例
          </template>
          <template v-else>
            没有与「{{ query.trim() }}」匹配的示例
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
          {{ query.trim() ? "未找到匹配的示例" : "暂无示例" }}
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

/* ---------------- 左栏（与全站 sidebar 同宽，靠近内容列左缘） ---------------- */
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
  padding: 6px 0 6px 10px;
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

/* ---------------- 右栏 ---------------- */
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
