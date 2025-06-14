import { a as __nuxt_component_0 } from './server.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'file:///Users/ibidi/Desktop/website/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'file:///Users/ibidi/Desktop/website/node_modules/vue/server-renderer/index.mjs';
import { u as useSeo } from './useSeo-CiDjh6Aj.mjs';
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useSeo({
      title: "Daily Songs - \u0130hsan Baki Do\u011Fan",
      description: "Her g\xFCn dinledi\u011Fim \u015Fark\u0131lar ve m\xFCzik listem."
    });
    const songs = [
      {
        id: 1,
        title: "Y\xFCzy\xFCzeyken Konu\u015Furuz",
        artist: "Sandal"
      },
      {
        id: 2,
        title: "Adamlar",
        artist: "Koca Ya\u015Fl\u0131 \u015Ei\u015Fko D\xFCnya"
      },
      {
        id: 3,
        title: "Test Song #3",
        artist: "Sandal"
      },
      {
        id: 4,
        title: "Test Song #4",
        artist: "Sandal"
      },
      {
        id: 5,
        title: "Test Song #5",
        artist: "Sandal"
      },
      {
        id: 6,
        title: "Test Song #6",
        artist: "Sandal"
      },
      {
        id: 7,
        title: "Test Song #7",
        artist: "Sandal"
      },
      {
        id: 8,
        title: "Test Song #8",
        artist: "Sandal"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pt-32 pb-16 bg-white dark:bg-zinc-900" }, _attrs))}><div class="container mx-auto max-w-4xl"><div class="space-y-8"><div class="space-y-4"><h1 class="text-3xl font-medium text-zinc-900 dark:text-zinc-200">Daily Songs</h1><p class="text-zinc-600 dark:text-zinc-400">Her g\xFCn dinledi\u011Fim \u015Fark\u0131lar.</p></div><div class="grid gap-4 md:grid-cols-2"><!--[-->`);
      ssrRenderList(songs, (song) => {
        _push(`<div class="group"><div class="block p-4 bg-zinc-100 dark:bg-zinc-800/50 rounded-md border border-zinc-200 dark:border-zinc-700/50 transition-all duration-200 hover:bg-zinc-200 dark:hover:bg-zinc-800"><div class="space-y-4"><div class="flex items-center gap-3"><div class="w-10 h-10 rounded-md bg-violet-500/10 flex items-center justify-center">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "carbon:music",
          class: "text-base text-violet-500"
        }, null, _parent));
        _push(`</div><div><h3 class="text-base font-medium text-zinc-900 dark:text-zinc-200">${ssrInterpolate(song.title)}</h3><p class="text-sm text-zinc-600 dark:text-zinc-400">${ssrInterpolate(song.artist)}</p></div></div></div></div></div>`);
      });
      _push(`<!--]--></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/daily-songs/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CyePriAA.mjs.map
