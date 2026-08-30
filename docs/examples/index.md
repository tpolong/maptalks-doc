---
aside: false
layout: page
sidebar: false
---

<script setup>
import { defineAsyncComponent, onMounted, ref } from "vue";
import { onHashChange } from "./utils";
import ExampleList from "./ExampleList.vue";

// REPL 依赖 @vue/repl + CodeMirror，体积较大，仅在存在 hash 时异步加载
const ExampleRepl = defineAsyncComponent(() => import("./ExampleRepl.vue"));

// 页面初始渲染（含 SSR）始终为列表；挂载后依据 hash 决定是否切换到 REPL 视图
const hash = ref("");

onMounted(() => {
  hash.value = location.hash.slice(1);
});

onHashChange(() => {
  hash.value = location.hash.slice(1);
});
</script>

<!-- 有 hash（如 #3d/3dtiles/load）显示可运行 REPL，否则显示静态列表 -->
<ExampleRepl v-if="hash.includes('/')" />
<ExampleList v-else />
