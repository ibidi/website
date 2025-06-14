import { defineComponent, ref, computed, mergeProps, useSSRContext } from 'file:///Users/ibidi/Desktop/website/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'file:///Users/ibidi/Desktop/website/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "bookmarks",
  __ssrInlineRender: true,
  setup(__props) {
    const bookmarks2 = ref([
      {
        id: "1",
        title: "Tailwind CSS Resmi Sitesi",
        description: "H\u0131zla modern web siteleri olu\u015Fturmak i\xE7in kullan\u0131\u015Fl\u0131 bir CSS framework\xFC.",
        url: "https://tailwindcss.com",
        dateAdded: "2024-01-10T00:00:00.000Z",
        tags: ["css", "frontend", "framework"]
      },
      {
        id: "2",
        title: "Vue 3 Dok\xFCmantasyonu",
        description: "Progresif JavaScript framework\xFC Vue.js i\xE7in resmi dok\xFCmantasyon.",
        url: "https://vuejs.org",
        dateAdded: "2024-02-15T00:00:00.000Z",
        tags: ["javascript", "frontend", "vue"]
      },
      {
        id: "3",
        title: "Nuxt 3 Dok\xFCmantasyonu",
        description: "Vue.js ile sezgisel ve g\xFC\xE7l\xFC web uygulamalar\u0131 olu\u015Fturmak i\xE7in kullan\u0131lan framework.",
        url: "https://nuxt.com",
        dateAdded: "2024-03-20T00:00:00.000Z",
        tags: ["vue", "nuxt", "ssr", "framework"]
      },
      {
        id: "4",
        title: "MDN Web Docs",
        description: "Web teknolojileri ve API'leri hakk\u0131nda geli\u015Ftiriciler i\xE7in kapsaml\u0131 kaynak.",
        url: "https://developer.mozilla.org/",
        dateAdded: "2023-12-01T00:00:00.000Z",
        tags: ["web standards", "html", "css", "javascript"]
      }
    ]);
    const formatGroupDate = (dateString) => {
      const date = /* @__PURE__ */ new Date(dateString + "T00:00:00");
      const options = { year: "numeric", month: "long", day: "numeric" };
      return date.toLocaleDateString("en-US", options);
    };
    const formatCardDate = (dateString) => {
      const date = new Date(dateString);
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    };
    const groupedBookmarks = computed(() => {
      const groups = /* @__PURE__ */ new Map();
      const sortedBookmarks = [...bookmarks2.value].sort((a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime());
      for (const bookmark of sortedBookmarks) {
        const dateKey = bookmark.dateAdded.split("T")[0];
        if (!groups.has(dateKey)) {
          groups.set(dateKey, []);
        }
        groups.get(dateKey).push(bookmark);
      }
      return groups;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative pt-32 pb-16 bg-white dark:bg-zinc-900 overflow-hidden" }, _attrs))} data-v-1b547f2c><div class="container mx-auto max-w-4xl" data-v-1b547f2c><div class="space-y-12" data-v-1b547f2c>`);
      if (groupedBookmarks.value.size > 0) {
        _push(`<div class="space-y-12" data-v-1b547f2c><!--[-->`);
        ssrRenderList(groupedBookmarks.value, ([dateGroup, items]) => {
          _push(`<div class="space-y-6" data-v-1b547f2c><h2 class="text-xl font-medium text-zinc-400 dark:text-zinc-500" data-v-1b547f2c>${ssrInterpolate(formatGroupDate(dateGroup))}</h2><div class="space-y-4" data-v-1b547f2c><!--[-->`);
          ssrRenderList(items, (bookmark) => {
            _push(`<a${ssrRenderAttr("href", bookmark.url)} target="_blank" rel="noopener noreferrer" class="block p-4 rounded-lg bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700/50 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors duration-200" data-v-1b547f2c><div class="flex justify-between items-start" data-v-1b547f2c><div class="flex-grow pr-4" data-v-1b547f2c><h3 class="text-md font-semibold text-zinc-900 dark:text-zinc-100" data-v-1b547f2c>${ssrInterpolate(bookmark.title)}</h3><p class="mt-1 text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2" data-v-1b547f2c>${ssrInterpolate(bookmark.description)}</p></div><p class="text-xs text-zinc-500 dark:text-zinc-400 whitespace-nowrap pt-1" data-v-1b547f2c>${ssrInterpolate(formatCardDate(bookmark.dateAdded))}</p></div></a>`);
          });
          _push(`<!--]--></div></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="text-center py-12" data-v-1b547f2c><p class="text-lg text-zinc-500 dark:text-zinc-400" data-v-1b547f2c>Hen\xFCz hi\xE7 yer imi eklenmemi\u015F.</p></div>`);
      }
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/bookmarks.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const bookmarks = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1b547f2c"]]);

export { bookmarks as default };
//# sourceMappingURL=bookmarks-DdT80J7e.mjs.map
