import { onBeforeUnmount } from "vue"

/**
 * 监听 location.hash 变化，组件卸载时自动移除监听。
 * 与官方文档站 docs/src/examples/components/utils.ts 一致。
 */
export function onHashChange(cb: () => void) {
  // SSR 阶段无 window，直接跳过监听注册（页面挂载后由 onMounted 读取一次 hash）
  if (typeof window === "undefined") return;
  window.addEventListener("hashchange", cb);
  onBeforeUnmount(() => {
    window.removeEventListener("hashchange", cb);
  });
}
