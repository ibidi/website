import { e as useAsyncData, _ as __nuxt_component_0$2, a as __nuxt_component_0 } from './server.mjs';
import { defineComponent, withAsyncContext, mergeProps, withCtx, createTextVNode, toDisplayString, unref, createVNode, useSSRContext } from 'file:///Users/ibidi/Desktop/website/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'file:///Users/ibidi/Desktop/website/node_modules/vue/server-renderer/index.mjs';
import { q as queryContent } from './query-DvtGEpuP.mjs';
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
import './preview-DBfnW7Z0.mjs';
import 'file:///Users/ibidi/Desktop/website/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs';
import 'file:///Users/ibidi/Desktop/website/node_modules/nuxt/node_modules/ohash/dist/index.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: articles } = ([__temp, __restore] = withAsyncContext(() => useAsyncData("articles", () => queryContent("blog").find())), __temp = await __temp, __restore(), __temp);
    const tags = ["Discord", "G\xFCvenlik", "Token"];
    useSeo({
      title: "Blog - \u0130hsan Baki Do\u011Fan",
      description: "Yaz\u0131l\u0131m, teknoloji ve ki\u015Fisel deneyimlerim hakk\u0131nda yaz\u0131lar. Discord, g\xFCvenlik, web geli\u015Ftirme ve daha fazlas\u0131."
    });
    const formatDate = (date) => {
      return new Date(date).toLocaleDateString("tr-TR", {
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_Icon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pt-32 pb-16 bg-white dark:bg-zinc-900" }, _attrs))}><div class="container mx-auto max-w-4xl px-4"><div class="space-y-6"><h1 class="text-3xl font-medium text-zinc-900 dark:text-zinc-200">Blog</h1><p class="text-base text-zinc-600 dark:text-zinc-400">Yaz\u0131l\u0131m, teknoloji ve ki\u015Fisel deneyimlerim hakk\u0131nda yaz\u0131lar.</p><div class="flex flex-wrap gap-2"><!--[-->`);
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
              _push2(`</div><div class="flex-1"${_scopeId}><h2 class="text-base font-medium text-zinc-900 dark:text-zinc-200"${_scopeId}>${ssrInterpolate(article.title)}</h2><div class="flex items-center gap-2 mt-1"${_scopeId}><span class="text-sm text-zinc-600 dark:text-zinc-400"${_scopeId}>${ssrInterpolate(formatDate(article.date))}</span><span class="text-sm text-zinc-600 dark:text-zinc-400"${_scopeId}>\u2022</span><span class="text-sm text-zinc-600 dark:text-zinc-400"${_scopeId}>${ssrInterpolate(article.readingTime || 5)} dk okuma</span></div></div></div>`);
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
                      createVNode("span", { class: "text-sm text-zinc-600 dark:text-zinc-400" }, "\u2022"),
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

export { _sfc_main as default };
//# sourceMappingURL=index-BpJbvlfl.mjs.map
