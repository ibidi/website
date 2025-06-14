import { e as useAsyncData, _ as __nuxt_component_0, a as __nuxt_component_0$1 } from "../server.mjs";
import { defineComponent, withAsyncContext, mergeProps, withCtx, createTextVNode, toDisplayString, unref, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { q as queryContent } from "./query-DvtGEpuP.js";
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
import "/Users/ibidi/Desktop/website/node_modules/ohash/dist/index.mjs";
import "./preview-DBfnW7Z0.js";
import "/Users/ibidi/Desktop/website/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs";
import "/Users/ibidi/Desktop/website/node_modules/destr/dist/index.mjs";
import "/Users/ibidi/Desktop/website/node_modules/nuxt/node_modules/ohash/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: articles } = ([__temp, __restore] = withAsyncContext(() => useAsyncData("articles", () => queryContent("blog").find())), __temp = await __temp, __restore(), __temp);
    const tags = ["Discord", "Güvenlik", "Token"];
    useSeo({
      title: "Blog - İhsan Baki Doğan",
      description: "Yazılım, teknoloji ve kişisel deneyimlerim hakkında yazılar. Discord, güvenlik, web geliştirme ve daha fazlası."
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pt-32 pb-16 bg-white dark:bg-zinc-900" }, _attrs))}><div class="container mx-auto max-w-4xl px-4"><div class="space-y-6"><h1 class="text-3xl font-medium text-zinc-900 dark:text-zinc-200">Blog</h1><p class="text-base text-zinc-600 dark:text-zinc-400">Yazılım, teknoloji ve kişisel deneyimlerim hakkında yazılar.</p><div class="flex flex-wrap gap-2"><!--[-->`);
      ssrRenderList(tags, (tag) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: tag,
          to: `/blog/tag/${tag.toLowerCase()}`,
          class: "px-3 py-1 bg-zinc-100 dark:bg-zinc-800/50 rounded-md text-sm text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700/50 transition-all duration-200 hover:bg-zinc-200 dark:hover:bg-zinc-800"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(tag)}`);
            } else {
              return [
                createTextVNode(toDisplayString(tag), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div><div class="space-y-4"><!--[-->`);
      ssrRenderList(unref(articles), (article) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: article._path,
          to: article._path,
          class: "block p-4 bg-zinc-100 dark:bg-zinc-800/50 rounded-md border border-zinc-200 dark:border-zinc-700/50 transition-all duration-200 hover:bg-zinc-200 dark:hover:bg-zinc-800"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-center gap-3"${_scopeId}><div class="w-10 h-10 rounded-md bg-violet-500/10 flex items-center justify-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "carbon:document",
                class: "text-base text-violet-500"
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="flex-1"${_scopeId}><h2 class="text-base font-medium text-zinc-900 dark:text-zinc-200"${_scopeId}>${ssrInterpolate(article.title)}</h2><div class="flex items-center gap-2 mt-1"${_scopeId}><span class="text-sm text-zinc-600 dark:text-zinc-400"${_scopeId}>${ssrInterpolate(formatDate(article.date))}</span><span class="text-sm text-zinc-600 dark:text-zinc-400"${_scopeId}>•</span><span class="text-sm text-zinc-600 dark:text-zinc-400"${_scopeId}>${ssrInterpolate(article.readingTime || 5)} dk okuma</span></div></div></div>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center gap-3" }, [
                  createVNode("div", { class: "w-10 h-10 rounded-md bg-violet-500/10 flex items-center justify-center" }, [
                    createVNode(_component_Icon, {
                      name: "carbon:document",
                      class: "text-base text-violet-500"
                    })
                  ]),
                  createVNode("div", { class: "flex-1" }, [
                    createVNode("h2", { class: "text-base font-medium text-zinc-900 dark:text-zinc-200" }, toDisplayString(article.title), 1),
                    createVNode("div", { class: "flex items-center gap-2 mt-1" }, [
                      createVNode("span", { class: "text-sm text-zinc-600 dark:text-zinc-400" }, toDisplayString(formatDate(article.date)), 1),
                      createVNode("span", { class: "text-sm text-zinc-600 dark:text-zinc-400" }, "•"),
                      createVNode("span", { class: "text-sm text-zinc-600 dark:text-zinc-400" }, toDisplayString(article.readingTime || 5) + " dk okuma", 1)
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-BpJbvlfl.js.map
