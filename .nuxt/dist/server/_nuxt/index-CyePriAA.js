import { a as __nuxt_component_0 } from "../server.mjs";
import { defineComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { u as useSeo } from "./useSeo-CiDjh6Aj.js";
import "/Users/ibidi/Desktop/website/node_modules/hookable/dist/index.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "/Users/ibidi/Desktop/website/node_modules/unctx/dist/index.mjs";
import "/Users/ibidi/Desktop/website/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/ibidi/Desktop/website/node_modules/radix3/dist/index.mjs";
import "/Users/ibidi/Desktop/website/node_modules/defu/dist/defu.mjs";
import "/Users/ibidi/Desktop/website/node_modules/ufo/dist/index.mjs";
import "/Users/ibidi/Desktop/website/node_modules/klona/dist/index.mjs";
import "/Users/ibidi/Desktop/website/node_modules/nuxt/node_modules/@unhead/vue/dist/index.mjs";
import "@iconify/vue";
import "@iconify/utils/lib/css/icon";
import "/Users/ibidi/Desktop/website/node_modules/perfect-debounce/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useSeo({
      title: "Daily Songs - İhsan Baki Doğan",
      description: "Her gün dinlediğim şarkılar ve müzik listem."
    });
    const songs = [
      {
        id: 1,
        title: "Yüzyüzeyken Konuşuruz",
        artist: "Sandal"
      },
      {
        id: 2,
        title: "Adamlar",
        artist: "Koca Yaşlı Şişko Dünya"
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pt-32 pb-16 bg-white dark:bg-zinc-900" }, _attrs))}><div class="container mx-auto max-w-4xl"><div class="space-y-8"><div class="space-y-4"><h1 class="text-3xl font-medium text-zinc-900 dark:text-zinc-200">Daily Songs</h1><p class="text-zinc-600 dark:text-zinc-400">Her gün dinlediğim şarkılar.</p></div><div class="grid gap-4 md:grid-cols-2"><!--[-->`);
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
export {
  _sfc_main as default
};
//# sourceMappingURL=index-CyePriAA.js.map
