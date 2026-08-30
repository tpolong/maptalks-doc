import { onBeforeUnmount } from "vue"

/**
 * Listen to location.hash changes, auto-removing the listener on unmount.
 * Same as the official docs site docs/src/examples/components/utils.ts.
 */
export function onHashChange(cb: () => void) {
  // No window during SSR; skip registration (onMounted reads the hash once on mount)
  if (typeof window === "undefined") return;
  window.addEventListener("hashchange", cb);
  onBeforeUnmount(() => {
    window.removeEventListener("hashchange", cb);
  });
}
