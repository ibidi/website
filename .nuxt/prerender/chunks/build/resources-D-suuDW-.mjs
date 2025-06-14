import { a as __nuxt_component_0 } from './server.mjs';
import { defineComponent, ref, computed, mergeProps, useSSRContext } from 'file:///Users/ibidi/Desktop/website/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'file:///Users/ibidi/Desktop/website/node_modules/vue/server-renderer/index.mjs';
import 'file:///Users/ibidi/Desktop/website/node_modules/ofetch/dist/node.mjs';
import '../nitro/nitro.mjs';
import 'file:///Users/ibidi/Desktop/website/node_modules/h3/dist/index.mjs';
import 'file:///Users/ibidi/Desktop/website/node_modules/ufo/dist/index.mjs';
import 'file:///Users/ibidi/Desktop/website/node_modules/unist-util-visit/index.js';
import 'file:///Users/ibidi/Desktop/website/node_modules/hast-util-to-string/index.js';
import 'file:///Users/ibidi/Desktop/website/node_modules/destr/dist/index.mjs';
import 'file:///Users/ibidi/Desktop/website/node_modules/hookable/dist/index.mjs';
import 'file:///Users/ibidi/Desktop/website/node_modules/node-mock-http/dist/index.mjs';
import 'file:///Users/ibidi/Desktop/website/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/ibidi/Desktop/website/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/ibidi/Desktop/website/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/ibidi/Desktop/website/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/ibidi/Desktop/website/node_modules/nitropack/node_modules/ohash/dist/index.mjs';
import 'file:///Users/ibidi/Desktop/website/node_modules/klona/dist/index.mjs';
import 'file:///Users/ibidi/Desktop/website/node_modules/defu/dist/defu.mjs';
import 'file:///Users/ibidi/Desktop/website/node_modules/scule/dist/index.mjs';
import 'file:///Users/ibidi/Desktop/website/node_modules/unctx/dist/index.mjs';
import 'file:///Users/ibidi/Desktop/website/node_modules/radix3/dist/index.mjs';
import 'file:///Users/ibidi/Desktop/website/node_modules/consola/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/ibidi/Desktop/website/node_modules/pathe/dist/index.mjs';
import 'file:///Users/ibidi/Desktop/website/node_modules/@iconify/utils/lib/index.mjs';
import 'file:///Users/ibidi/Desktop/website/node_modules/ohash/dist/index.mjs';
import 'node:module';
import 'file:///Users/ibidi/Desktop/website/node_modules/unified/index.js';
import 'file:///Users/ibidi/Desktop/website/node_modules/mdast-util-to-string/index.js';
import 'file:///Users/ibidi/Desktop/website/node_modules/micromark/index.js';
import 'file:///Users/ibidi/Desktop/website/node_modules/unist-util-stringify-position/index.js';
import 'file:///Users/ibidi/Desktop/website/node_modules/micromark-util-character/index.js';
import 'file:///Users/ibidi/Desktop/website/node_modules/micromark-util-chunked/index.js';
import 'file:///Users/ibidi/Desktop/website/node_modules/micromark-util-resolve-all/index.js';
import 'file:///Users/ibidi/Desktop/website/node_modules/micromark-util-sanitize-uri/index.js';
import 'file:///Users/ibidi/Desktop/website/node_modules/slugify/slugify.js';
import 'file:///Users/ibidi/Desktop/website/node_modules/remark-parse/index.js';
import 'file:///Users/ibidi/Desktop/website/node_modules/remark-rehype/index.js';
import 'file:///Users/ibidi/Desktop/website/node_modules/remark-mdc/dist/index.mjs';
import 'file:///Users/ibidi/Desktop/website/node_modules/remark-gfm/index.js';
import 'file:///Users/ibidi/Desktop/website/node_modules/rehype-external-links/index.js';
import 'file:///Users/ibidi/Desktop/website/node_modules/rehype-sort-attribute-values/index.js';
import 'file:///Users/ibidi/Desktop/website/node_modules/rehype-sort-attributes/index.js';
import 'file:///Users/ibidi/Desktop/website/node_modules/rehype-raw/index.js';
import 'file:///Users/ibidi/Desktop/website/node_modules/detab/index.js';
import 'file:///Users/ibidi/Desktop/website/node_modules/github-slugger/index.js';
import 'file:///Users/ibidi/Desktop/website/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/ibidi/Desktop/website/node_modules/@iconify/vue/dist/iconify.mjs';
import 'file:///Users/ibidi/Desktop/website/node_modules/@iconify/utils/lib/css/icon.mjs';
import 'file:///Users/ibidi/Desktop/website/node_modules/perfect-debounce/dist/index.mjs';
import '../_/renderer.mjs';
import 'file:///Users/ibidi/Desktop/website/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/ibidi/Desktop/website/node_modules/nuxt/node_modules/unhead/dist/server.mjs';
import 'file:///Users/ibidi/Desktop/website/node_modules/devalue/index.js';
import 'file:///Users/ibidi/Desktop/website/node_modules/nuxt/node_modules/unhead/dist/plugins.mjs';
import 'file:///Users/ibidi/Desktop/website/node_modules/nuxt/node_modules/unhead/dist/utils.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "resources",
  __ssrInlineRender: true,
  setup(__props) {
    const searchQuery = ref("");
    const selectedDifficulties = ref([]);
    const resources = [
      {
        category: "Frontend Geli\u015Ftirme",
        items: [
          {
            title: "The Odin Project",
            description: "\xDCcretsiz, kapsaml\u0131 ve proje odakl\u0131 web geli\u015Ftirme e\u011Fitimi.",
            icon: "simple-icons:theodinproject",
            iconColor: "violet",
            url: "https://theodinproject.com",
            tags: ["HTML", "CSS", "JavaScript"],
            difficulty: "Ba\u015Flang\u0131\xE7 Seviyesi"
          },
          {
            title: "Frontend Masters",
            description: "Uzman e\u011Fitmenlerden ileri d\xFCzey frontend dersleri.",
            icon: "simple-icons:frontendmasters",
            iconColor: "emerald",
            url: "https://frontendmasters.com",
            tags: ["React", "Vue", "TypeScript"],
            difficulty: "\u0130leri Seviye"
          }
        ]
      },
      {
        category: "UI/UX Tasar\u0131m",
        items: [
          {
            title: "Refactoring UI",
            description: "Geli\u015Ftiriciler i\xE7in pratik UI tasar\u0131m rehberi.",
            icon: "simple-icons:refactoring-ui",
            iconColor: "sky",
            url: "https://refactoringui.com",
            tags: ["UI", "Design", "CSS"],
            difficulty: "Orta Seviye"
          },
          {
            title: "Figma Community",
            description: "\xDCcretsiz UI kitleri ve tasar\u0131m \u015Fablonlar\u0131.",
            icon: "simple-icons:figma",
            iconColor: "orange",
            url: "https://www.figma.com/community",
            tags: ["UI", "Design", "Figma"],
            difficulty: "Ba\u015Flang\u0131\xE7 Seviyesi"
          }
        ]
      },
      {
        category: "Yaz\u0131l\u0131m Ara\xE7lar\u0131",
        items: [
          {
            title: "VS Code",
            description: "\xD6nerdi\u011Fim VS Code eklentileri ve ayarlar\u0131.",
            icon: "simple-icons:visualstudiocode",
            iconColor: "blue",
            url: "https://code.visualstudio.com",
            tags: ["Editor", "IDE", "Tools"],
            difficulty: "Ba\u015Flang\u0131\xE7 Seviyesi"
          },
          {
            title: "GitHub Features",
            description: "GitHub'\u0131n g\xFC\xE7l\xFC \xF6zelliklerini ke\u015Ffedin.",
            icon: "simple-icons:github",
            iconColor: "emerald",
            url: "https://github.com/features",
            tags: ["Git", "GitHub", "Version Control"],
            difficulty: "Orta Seviye"
          }
        ]
      }
    ];
    computed(() => {
      return resources.map((category) => {
        const filteredItems = category.items.filter((item) => {
          const matchesSearch = searchQuery.value === "" || item.title.toLowerCase().includes(searchQuery.value.toLowerCase()) || item.description.toLowerCase().includes(searchQuery.value.toLowerCase()) || item.tags.some((tag) => tag.toLowerCase().includes(searchQuery.value.toLowerCase()));
          const matchesDifficulty = selectedDifficulties.value.length === 0 || selectedDifficulties.value.includes(item.difficulty);
          return matchesSearch && matchesDifficulty;
        });
        return {
          ...category,
          items: filteredItems
        };
      }).filter((category) => category.items.length > 0);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" }, _attrs))}><div class="flex flex-col items-start justify-center py-20"><h1 class="text-4xl font-bold text-zinc-200">Kaynaklar</h1><p class="mt-4 text-zinc-400">Geli\u015Ftirici yolculu\u011Funuzda faydal\u0131 olabilecek kaynaklar ve ara\xE7lar.</p><div class="relative w-full mt-8"><input${ssrRenderAttr("value", searchQuery.value)} type="text" placeholder="Kaynaklarda ara..." class="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700/50 rounded-xl text-zinc-200 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "heroicons:magnifying-glass-20-solid",
        class: "absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500"
      }, null, _parent));
      _push(`</div><div class="w-full mt-12 space-y-12"><div class="space-y-6"><h2 class="text-2xl font-semibold text-zinc-200 flex items-center gap-2">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "heroicons:code-bracket-20-solid",
        class: "text-violet-400"
      }, null, _parent));
      _push(` Frontend Geli\u015Ftirme </h2><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><a href="https://theodinproject.com" target="_blank" rel="noopener noreferrer" class="group p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-zinc-700 transition-all duration-300"><div class="flex items-start gap-3"><div class="w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center shrink-0">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "simple-icons:theodinproject",
        class: "text-xl text-violet-400"
      }, null, _parent));
      _push(`</div><div><h3 class="font-medium text-zinc-200 group-hover:text-violet-400 transition-colors duration-300">The Odin Project</h3><p class="mt-1 text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300"> \xDCcretsiz, kapsaml\u0131 ve proje odakl\u0131 web geli\u015Ftirme e\u011Fitimi. </p></div></div></a><a href="https://frontendmasters.com" target="_blank" rel="noopener noreferrer" class="group p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-zinc-700 transition-all duration-300"><div class="flex items-start gap-3"><div class="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "simple-icons:frontendmasters",
        class: "text-xl text-emerald-400"
      }, null, _parent));
      _push(`</div><div><h3 class="font-medium text-zinc-200 group-hover:text-emerald-400 transition-colors duration-300">Frontend Masters</h3><p class="mt-1 text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300"> Uzman e\u011Fitmenlerden ileri d\xFCzey frontend dersleri. </p></div></div></a></div></div><div class="space-y-6"><h2 class="text-2xl font-semibold text-zinc-200 flex items-center gap-2">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "heroicons:square-3-stack-3d-20-solid",
        class: "text-pink-400"
      }, null, _parent));
      _push(` UI/UX Tasar\u0131m </h2><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><a href="https://refactoringui.com" target="_blank" rel="noopener noreferrer" class="group p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-zinc-700 transition-all duration-300"><div class="flex items-start gap-3"><div class="w-10 h-10 rounded-lg bg-sky-500/10 flex items-center justify-center shrink-0">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "simple-icons:refactoring-ui",
        class: "text-xl text-sky-400"
      }, null, _parent));
      _push(`</div><div><h3 class="font-medium text-zinc-200 group-hover:text-sky-400 transition-colors duration-300">Refactoring UI</h3><p class="mt-1 text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300"> Geli\u015Ftiriciler i\xE7in pratik UI tasar\u0131m rehberi. </p></div></div></a><a href="https://www.figma.com/community" target="_blank" rel="noopener noreferrer" class="group p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-zinc-700 transition-all duration-300"><div class="flex items-start gap-3"><div class="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center shrink-0">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "simple-icons:figma",
        class: "text-xl text-orange-400"
      }, null, _parent));
      _push(`</div><div><h3 class="font-medium text-zinc-200 group-hover:text-orange-400 transition-colors duration-300">Figma Community</h3><p class="mt-1 text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300"> \xDCcretsiz UI kitleri ve tasar\u0131m \u015Fablonlar\u0131. </p></div></div></a></div></div><div class="space-y-6"><h2 class="text-2xl font-semibold text-zinc-200 flex items-center gap-2">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "heroicons:wrench-screwdriver-20-solid",
        class: "text-blue-400"
      }, null, _parent));
      _push(` Yaz\u0131l\u0131m Ara\xE7lar\u0131 </h2><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><a href="https://code.visualstudio.com" target="_blank" rel="noopener noreferrer" class="group p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-zinc-700 transition-all duration-300"><div class="flex items-start gap-3"><div class="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "simple-icons:visualstudiocode",
        class: "text-xl text-blue-400"
      }, null, _parent));
      _push(`</div><div><h3 class="font-medium text-zinc-200 group-hover:text-blue-400 transition-colors duration-300">VS Code</h3><p class="mt-1 text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300"> \xD6nerdi\u011Fim VS Code eklentileri ve ayarlar\u0131. </p></div></div></a><a href="https://github.com/features" target="_blank" rel="noopener noreferrer" class="group p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-zinc-700 transition-all duration-300"><div class="flex items-start gap-3"><div class="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "simple-icons:github",
        class: "text-xl text-emerald-400"
      }, null, _parent));
      _push(`</div><div><h3 class="font-medium text-zinc-200 group-hover:text-emerald-400 transition-colors duration-300">GitHub Features</h3><p class="mt-1 text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300"> GitHub&#39;\u0131n g\xFC\xE7l\xFC \xF6zelliklerini ke\u015Ffedin. </p></div></div></a></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/resources.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=resources-D-suuDW-.mjs.map
