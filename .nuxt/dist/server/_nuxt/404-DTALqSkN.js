import { _ as __nuxt_component_0, a as __nuxt_component_0$1 } from "../server.mjs";
import { mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
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
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  const _component_Icon = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-white dark:bg-zinc-900 px-4 py-12 md:py-20" }, _attrs))}><div class="container mx-auto max-w-4xl"><div class="space-y-8"><div class="flex items-center gap-2">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "inline-flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-violet-500 dark:hover:text-violet-400 transition-colors duration-200"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Icon, {
          name: "carbon:arrow-left",
          class: "text-base"
        }, null, _parent2, _scopeId));
        _push2(` Ana Sayfaya Dön `);
      } else {
        return [
          createVNode(_component_Icon, {
            name: "carbon:arrow-left",
            class: "text-base"
          }),
          createTextVNode(" Ana Sayfaya Dön ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><h1 class="text-3xl font-medium text-zinc-900 dark:text-zinc-200">Sayfa Bulunamadı</h1><p class="text-zinc-600 dark:text-zinc-400">Aradığınız sayfa bulunamadı.</p></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/404.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _404 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  _404 as default
};
//# sourceMappingURL=404-DTALqSkN.js.map
