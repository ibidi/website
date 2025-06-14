import { e as useAsyncData, d as useRoute, _ as __nuxt_component_0, a as __nuxt_component_0$1 } from "../server.mjs";
import _sfc_main$1 from "./ContentDoc-Ub2Vmos4.js";
import { defineComponent, withAsyncContext, ref, mergeProps, withCtx, createVNode, unref, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import "/Users/ibidi/Desktop/website/node_modules/hookable/dist/index.mjs";
import { q as queryContent } from "./query-DvtGEpuP.js";
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
import "./ContentRenderer-DIiy9PWV.js";
import "./ContentRendererMarkdown-BJu3ngqT.js";
import "/Users/ibidi/Desktop/website/node_modules/destr/dist/index.mjs";
import "scule";
import "property-information";
import "./node-hwMnPqaI.js";
import "./preview-DBfnW7Z0.js";
import "/Users/ibidi/Desktop/website/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs";
import "/Users/ibidi/Desktop/website/node_modules/nuxt/node_modules/ohash/dist/index.mjs";
import "./ContentQuery-WEMf9ase.js";
import "/Users/ibidi/Desktop/website/node_modules/ohash/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "post",
      () => queryContent(useRoute().path).findOne()
    )), __temp = await __temp, __restore(), __temp);
    const scrollProgress = ref(0);
    const formatDate = (date) => {
      return new Date(date).toLocaleDateString("tr-TR", {
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = __nuxt_component_0$1;
      const _component_ContentDoc = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-zinc-900" }, _attrs))}><div class="fixed left-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-6">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "https://twitter.com/share",
        target: "_blank",
        class: "text-zinc-400 hover:text-zinc-200 transition-colors duration-200"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ri:twitter-x-fill",
              class: "text-2xl"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, {
                name: "ri:twitter-x-fill",
                class: "text-2xl"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "https://t.me/share/url",
        target: "_blank",
        class: "text-zinc-400 hover:text-zinc-200 transition-colors duration-200"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "mdi:telegram",
              class: "text-2xl"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, {
                name: "mdi:telegram",
                class: "text-2xl"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "https://api.whatsapp.com/send",
        target: "_blank",
        class: "text-zinc-400 hover:text-zinc-200 transition-colors duration-200"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "mdi:whatsapp",
              class: "text-2xl"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, {
                name: "mdi:whatsapp",
                class: "text-2xl"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button class="text-zinc-400 hover:text-zinc-200 transition-colors duration-200">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "mdi:link-variant",
        class: "text-2xl"
      }, null, _parent));
      _push(`</button></div><div class="fixed right-12 top-1/2 -translate-y-1/2 hidden lg:block w-[2px] h-48 bg-zinc-800 rounded-full"><div class="w-full bg-violet-400 rounded-full transition-all duration-100" style="${ssrRenderStyle({ height: `${unref(scrollProgress)}%` })}"></div></div><div class="container mx-auto max-w-3xl px-4 pt-20"><div class="flex justify-center items-center gap-4 text-sm text-zinc-400 mb-8"><time class="flex items-center gap-1.5">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "carbon:calendar",
        class: "text-violet-400"
      }, null, _parent));
      _push(` ${ssrInterpolate(formatDate((_a = unref(data)) == null ? void 0 : _a.date))}</time><span class="w-1 h-1 rounded-full bg-zinc-700"></span><div class="flex items-center gap-1.5">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "carbon:time",
        class: "text-violet-400"
      }, null, _parent));
      _push(` ${ssrInterpolate((_b = unref(data)) == null ? void 0 : _b.readTime)} dakika okuma </div></div><div class="text-center space-y-4 mb-12"><h1 class="text-4xl md:text-5xl font-medium text-zinc-100">${ssrInterpolate((_c = unref(data)) == null ? void 0 : _c.title)}</h1><p class="text-lg md:text-xl text-zinc-400">${ssrInterpolate((_d = unref(data)) == null ? void 0 : _d.excerpt)}</p></div><div class="flex justify-center flex-wrap gap-2 mb-12"><!--[-->`);
      ssrRenderList((_e = unref(data)) == null ? void 0 : _e.tags, (tag) => {
        _push(`<span class="px-3 py-1 text-sm bg-zinc-800/50 text-zinc-400 rounded-full border border-zinc-800">${ssrInterpolate(tag)}</span>`);
      });
      _push(`<!--]--></div><div class="flex justify-center mb-12">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/blog",
        class: "inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-200 transition-colors duration-200"
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
      _push(`</div>`);
      if ((_f = unref(data)) == null ? void 0 : _f.image) {
        _push(`<div class="relative aspect-[16/9] w-full rounded-xl overflow-hidden mb-12 group cursor-pointer"><img${ssrRenderAttr("src", unref(data).image)} class="absolute inset-0 w-full h-full object-cover transform transition-all duration-700 ease-in-out group-hover:scale-125" alt=""></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<article class="prose prose-invert prose-zinc max-w-none pb-20"><div class="prose-headings:text-zinc-200 prose-p:text-zinc-400 prose-a:text-violet-400 prose-strong:text-zinc-200 prose-ul:text-zinc-400 prose-li:text-zinc-400">`);
      _push(ssrRenderComponent(_component_ContentDoc, null, {
        "not-found": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p${_scopeId}>İçerik bulunamadı.</p>`);
          } else {
            return [
              createVNode("p", null, "İçerik bulunamadı.")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></article><div class="flex justify-center gap-4 py-8 lg:hidden">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "https://twitter.com/share",
        target: "_blank",
        class: "text-zinc-400 hover:text-zinc-200"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ri:twitter-x-fill",
              class: "text-2xl"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, {
                name: "ri:twitter-x-fill",
                class: "text-2xl"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "https://t.me/share/url",
        target: "_blank",
        class: "text-zinc-400 hover:text-zinc-200"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "mdi:telegram",
              class: "text-2xl"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, {
                name: "mdi:telegram",
                class: "text-2xl"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "https://api.whatsapp.com/send",
        target: "_blank",
        class: "text-zinc-400 hover:text-zinc-200"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "mdi:whatsapp",
              class: "text-2xl"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, {
                name: "mdi:whatsapp",
                class: "text-2xl"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button class="text-zinc-400 hover:text-zinc-200">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "mdi:link-variant",
        class: "text-2xl"
      }, null, _parent));
      _push(`</button></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_slug_-DSXsRHk_.js.map
