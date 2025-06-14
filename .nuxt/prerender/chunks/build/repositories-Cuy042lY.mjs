import { a as __nuxt_component_0 } from './server.mjs';
import { defineComponent, ref, mergeProps, unref, useSSRContext } from 'file:///Users/ibidi/Desktop/website/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'file:///Users/ibidi/Desktop/website/node_modules/vue/server-renderer/index.mjs';
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
  __name: "repositories",
  __ssrInlineRender: true,
  setup(__props) {
    useSeo({
      title: "GitHub Repositories - \u0130hsan Baki Do\u011Fan",
      description: "GitHub \xFCzerindeki a\xE7\u0131k kaynak projelerim ve katk\u0131da bulundu\u011Fum repositoryler."
    });
    const repositories = ref([]);
    const loading = ref(true);
    const error = ref(null);
    const getRepoIcon = (repo) => {
      var _a;
      if ((_a = repo.topics) == null ? void 0 : _a.includes("api")) return "logos:api";
      if (repo.name.toLowerCase().includes("discord")) return "logos:discord-icon";
      if (repo.name.toLowerCase().includes("web")) return "logos:nuxt-icon";
      return "carbon:code";
    };
    const getLanguageIcon = (language) => {
      const icons = {
        TypeScript: "logos:typescript-icon",
        JavaScript: "logos:javascript",
        Vue: "logos:vue",
        Python: "logos:python",
        HTML: "logos:html-5",
        CSS: "logos:css-3",
        PHP: "logos:php",
        Java: "logos:java",
        Ruby: "logos:ruby",
        Go: "logos:go",
        Rust: "logos:rust",
        Swift: "logos:swift",
        Kotlin: "logos:kotlin",
        "C#": "logos:c-sharp"
      };
      return icons[language || ""] || "carbon:code";
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pt-32 pb-16 bg-white dark:bg-zinc-900" }, _attrs))}><div class="container mx-auto max-w-4xl"><div class="space-y-8"><div class="flex items-center justify-between"><h1 class="text-3xl font-medium text-zinc-900 dark:text-zinc-200"> Repositories </h1><div class="flex items-center gap-3"><a href="https://github.com/ibidi" target="_blank" class="inline-flex items-center gap-2 px-2.5 py-1 bg-zinc-100 dark:bg-zinc-800/50 rounded-md text-sm text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700/50">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "carbon:logo-github",
        class: "text-base"
      }, null, _parent));
      _push(` ibidi </a><span class="inline-flex items-center gap-2 px-2.5 py-1 bg-zinc-100 dark:bg-zinc-800/50 rounded-md text-sm text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700/50">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "carbon:repository",
        class: "text-base"
      }, null, _parent));
      _push(` ${ssrInterpolate(unref(repositories).length)} repositories </span></div></div>`);
      if (unref(loading)) {
        _push(`<div class="flex items-center justify-center py-20"><div class="animate-spin rounded-full h-8 w-8 border-2 border-violet-500 border-t-transparent"></div></div>`);
      } else if (unref(error)) {
        _push(`<div class="flex flex-col items-center justify-center gap-4 py-20">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "carbon:warning",
          class: "text-4xl text-red-500"
        }, null, _parent));
        _push(`<p class="text-zinc-600 dark:text-zinc-400">${ssrInterpolate(unref(error))}</p></div>`);
      } else {
        _push(`<div class="grid gap-4 md:grid-cols-2"><!--[-->`);
        ssrRenderList(unref(repositories), (repo) => {
          var _a;
          _push(`<a${ssrRenderAttr("href", repo.html_url)} target="_blank" class="block p-4 bg-zinc-100 dark:bg-zinc-800/50 rounded-md border border-zinc-200 dark:border-zinc-700/50 transition-all duration-200 hover:bg-zinc-200 dark:hover:bg-zinc-800"><div class="space-y-3"><div class="flex items-center justify-between"><div class="flex items-center gap-2"><span class="text-zinc-500 dark:text-zinc-400">${ssrInterpolate(repo.owner.login)}/</span><span class="font-medium text-zinc-900 dark:text-zinc-200">${ssrInterpolate(repo.name)}</span></div>`);
          if (repo.stargazers_count > 0) {
            _push(ssrRenderComponent(_component_Icon, {
              name: "carbon:star-filled",
              class: "text-amber-400"
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</div><p class="text-sm text-zinc-600 dark:text-zinc-400">`);
          _push(ssrRenderComponent(_component_Icon, {
            name: getRepoIcon(repo),
            class: "inline-block w-4 h-4 mr-1"
          }, null, _parent));
          _push(` ${ssrInterpolate(repo.description || "No description provided.")}</p><div class="flex flex-col gap-1"><div class="flex items-center justify-between text-sm"><span class="text-zinc-500 dark:text-zinc-400">Stars:</span><span class="text-zinc-900 dark:text-zinc-200">${ssrInterpolate(repo.stargazers_count)}</span></div><div class="flex items-center justify-between text-sm"><span class="text-zinc-500 dark:text-zinc-400">Language:</span>`);
          if (repo.language) {
            _push(ssrRenderComponent(_component_Icon, {
              name: getLanguageIcon(repo.language),
              class: "w-4 h-4"
            }, null, _parent));
          } else {
            _push(`<span class="text-zinc-900 dark:text-zinc-200">-</span>`);
          }
          _push(`</div><div class="flex items-center justify-between text-sm"><span class="text-zinc-500 dark:text-zinc-400">License:</span><span class="text-zinc-900 dark:text-zinc-200">${ssrInterpolate(((_a = repo.license) == null ? void 0 : _a.spdx_id) || "No license")}</span></div></div></div></a>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/repositories.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=repositories-Cuy042lY.mjs.map
