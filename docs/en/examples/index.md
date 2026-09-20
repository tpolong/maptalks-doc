---
aside: false
layout: page
sidebar: false
---

<script setup>
import { defineAsyncComponent, onMounted, ref } from "vue";
import { onHashChange } from "./utils";
// Back-compat for deep links shared before the directory reorganisation
// (e.g. #3d/3dtiles/load -> #scene3d/tiles3d/load)
import { readExampleHash } from "../../examples/legacy-paths";
import ExampleList from "./ExampleList.vue";

// The REPL depends on @vue/repl + CodeMirror and is heavy,
// so it is loaded asynchronously only when a hash is present
const ExampleRepl = defineAsyncComponent(() => import("./ExampleRepl.vue"));

// The initial render (incl. SSR) is always the list; after mount,
// the hash decides whether to switch to the REPL view
const hash = ref("");

onMounted(() => {
  hash.value = readExampleHash();
});

onHashChange(() => {
  hash.value = readExampleHash();
});
</script>

<!-- Show the runnable REPL when a hash is present (e.g. #scene3d/tiles3d/load), otherwise the static list -->
<ExampleRepl v-if="hash.includes('/')" />
<ExampleList v-else />
