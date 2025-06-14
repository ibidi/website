import { e as useAsyncData, d as useRoute, _ as __nuxt_component_0, a as __nuxt_component_0$1 } from "../server.mjs";
import _sfc_main$1 from "./ContentRenderer-DIiy9PWV.js";
import { defineComponent, withAsyncContext, unref, mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrRenderList } from "vue/server-renderer";
import "/Users/ibidi/Desktop/website/node_modules/hookable/dist/index.mjs";
import { q as queryContent } from "./query-DvtGEpuP.js";
import { u as useSeo } from "./useSeo-CiDjh6Aj.js";
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
import "./ContentRendererMarkdown-BJu3ngqT.js";
import "/Users/ibidi/Desktop/website/node_modules/destr/dist/index.mjs";
import "scule";
import "property-information";
import "./node-hwMnPqaI.js";
import "./preview-DBfnW7Z0.js";
import "/Users/ibidi/Desktop/website/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs";
import "/Users/ibidi/Desktop/website/node_modules/nuxt/node_modules/ohash/dist/index.mjs";
import "/Users/ibidi/Desktop/website/node_modules/ohash/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[...slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a, _b, _c;
    let __temp, __restore;
    const { data } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "article",
      () => queryContent().where({ _path: useRoute().path }).findOne()
    )), __temp = await __temp, __restore(), __temp);
    useSeo({
      title: ((_a = data.value) == null ? void 0 : _a.title) ? `${data.value.title} - İhsan Baki Doğan` : "Blog - İhsan Baki Doğan",
      description: ((_b = data.value) == null ? void 0 : _b.description) || "Yazılım ve teknoloji üzerine detaylı bir blog yazısı.",
      image: (_c = data.value) == null ? void 0 : _c.image
    });
    const formatDate = (date) => {
      return new Date(date).toLocaleDateString("tr-TR", {
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = __nuxt_component_0$1;
      const _component_ContentRenderer = _sfc_main$1;
      if (unref(data)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-white dark:bg-zinc-900" }, _attrs))}><div class="w-full min-h-screen bg-white dark:bg-zinc-900"><div class="container mx-auto max-w-4xl px-4 py-32"><div class="flex items-center gap-2 mb-8">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/blog",
          class: "inline-flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-violet-500 dark:hover:text-violet-400"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: "carbon:arrow-left",
                class: "text-base"
              }, null, _parent2, _scopeId));
              _push2(` Blog&#39;a Dön `);
            } else {
              return [
                createVNode(_component_Icon, {
                  name: "carbon:arrow-left",
                  class: "text-base"
                }),
                createTextVNode(" Blog'a Dön ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><article class="prose dark:prose-invert max-w-none"><div class="space-y-4 not-prose"><h1 class="text-3xl font-medium text-zinc-900 dark:text-zinc-200">${ssrInterpolate(unref(data).title)}</h1>`);
        if (unref(data).image) {
          _push(`<img${ssrRenderAttr("src", unref(data).image)}${ssrRenderAttr("alt", unref(data).title)} class="${ssrRenderClass([{ "animate-pulse": unref(data).image.endsWith(".gif") }, "w-full h-64 object-cover rounded-lg"])}">`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="flex items-center gap-2"><span class="text-sm text-zinc-600 dark:text-zinc-400">${ssrInterpolate(formatDate(unref(data).date))}</span><span class="text-sm text-zinc-600 dark:text-zinc-400">•</span><span class="text-sm text-zinc-600 dark:text-zinc-400">${ssrInterpolate(unref(data).readingTime || 5)} dk okuma</span></div><div class="flex flex-wrap gap-2"><!--[-->`);
        ssrRenderList(unref(data).tags, (tag) => {
          _push(`<span class="px-3 py-1 bg-zinc-100 dark:bg-zinc-800/50 rounded-md text-sm text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700/50">${ssrInterpolate(tag)}</span>`);
        });
        _push(`<!--]--></div></div>`);
        if (unref(data)) {
          _push(ssrRenderComponent(_component_ContentRenderer, { value: unref(data) }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</article></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/[...slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_...slug_-6Vliy2Bh.js.map
