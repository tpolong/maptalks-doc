---
aside: false
layout: page
sidebar: false
---

<script setup>
import { defineAsyncComponent, onMounted, ref } from "vue";
import { onHashChange } from "./utils";
import ExampleList from "./ExampleList.vue";

// The REPL depends on @vue/repl + CodeMirror and is heavy,
// so it is loaded asynchronously only when a hash is present
const ExampleRepl = defineAsyncComponent(() => import("./ExampleRepl.vue"));

// The initial render (incl. SSR) is always the list; after mount,
// the hash decides whether to switch to the REPL view
const hash = ref("");

onMounted(() => {
  hash.value = location.hash.slice(1);
});

onHashChange(() => {
  hash.value = location.hash.slice(1);
});
</script>

<!-- Show the runnable REPL when a hash is present (e.g. #3d/3dtiles/load), otherwise the static list -->
<ExampleRepl v-if="hash.includes('/')" />
<ExampleList v-else />
