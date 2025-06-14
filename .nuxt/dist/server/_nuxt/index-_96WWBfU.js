import { a as __nuxt_component_0 } from "../server.mjs";
import { defineComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { u as useSeo } from "./useSeo-CiDjh6Aj.js";
import "ofetch";
import "#internal/nuxt/paths";
import "/Users/ibidi/Desktop/website/node_modules/hookable/dist/index.mjs";
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
      title: "Projeler - İhsan Baki Doğan",
      description: "Geliştirdiğim açık kaynak ve kişisel projeler. Web uygulamaları, araçlar ve daha fazlası."
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-zinc-900 px-4 pt-32 md:pt-40 pb-12 md:pb-20" }, _attrs))}><div class="container mx-auto max-w-4xl"><div class="flex flex-col gap-20"><div class="space-y-6"><h1 class="text-3xl font-medium text-zinc-200">Projeler</h1><p class="text-base text-zinc-400"> Geliştirdiğim açık kaynak ve kişisel projeler. </p></div><div class="space-y-4"><div class="group"><a href="#" class="block p-4 bg-zinc-800/50 rounded-md border border-zinc-700/50 transition-all duration-200 hover:bg-zinc-800"><div class="flex items-center gap-4"><div class="w-10 h-10 rounded-md bg-emerald-500/10 flex items-center justify-center">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "carbon:code",
        class: "text-base text-emerald-500"
      }, null, _parent));
      _push(`</div><div><div class="flex items-center gap-2"><h3 class="text-base font-medium text-zinc-200">Proje Adı</h3><span class="px-2 py-0.5 text-xs bg-emerald-500/10 text-emerald-500 rounded">AÇIK KAYNAK</span></div><p class="text-sm text-zinc-400">Proje açıklaması</p></div></div></a></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-_96WWBfU.js.map
