import { u as useHead, b as useRuntimeConfig, a as __nuxt_component_0$1 } from './server.mjs';
import { defineComponent, mergeProps, ref, useSSRContext } from 'file:///Users/ibidi/Desktop/website/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from 'file:///Users/ibidi/Desktop/website/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "LastFmStats",
  __ssrInlineRender: true,
  setup(__props) {
    const config = useRuntimeConfig();
    config.public.lastFmApiKey;
    config.public.lastFmUsername;
    const userInfo = ref(null);
    const loading = ref(true);
    const recentTracks = ref([]);
    const topTracks = ref([]);
    const topArtists = ref([]);
    const error = ref(null);
    function calculateAccountAge(unixTimestamp) {
      if (!unixTimestamp) return "Bilinmiyor";
      const registeredDate = new Date(parseInt(unixTimestamp, 10) * 1e3);
      const now = /* @__PURE__ */ new Date();
      let years = now.getFullYear() - registeredDate.getFullYear();
      let months = now.getMonth() - registeredDate.getMonth();
      let days = now.getDate() - registeredDate.getDate();
      if (days < 0) {
        months--;
        days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
      }
      if (months < 0) {
        years--;
        months += 12;
      }
      return years > 0 ? years : 0;
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_Icon = __nuxt_component_0$1;
      if (!userInfo.value && !error.value && loading.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-center py-10" }, _attrs))} data-v-6ffdaec4><p class="text-lg text-zinc-500 dark:text-zinc-400" data-v-6ffdaec4>Loading Last.fm stats...</p></div>`);
      } else if (error.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-center py-10" }, _attrs))} data-v-6ffdaec4><p class="text-lg text-red-500 dark:text-red-400" data-v-6ffdaec4>Error loading Last.fm stats: ${ssrInterpolate(error.value)}</p></div>`);
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-16 text-zinc-900 dark:text-zinc-200" }, _attrs))} data-v-6ffdaec4>`);
        if (userInfo.value) {
          _push(`<section data-v-6ffdaec4><h2 class="text-sm font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-6" data-v-6ffdaec4>Details</h2><div class="grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-4 text-lg" data-v-6ffdaec4><div data-v-6ffdaec4><p class="text-zinc-700 dark:text-zinc-300" data-v-6ffdaec4>Profile</p>`);
          if (userInfo.value.url) {
            _push(`<a${ssrRenderAttr("href", userInfo.value.url)} target="_blank" class="flex items-center gap-2 text-violet-500 dark:text-violet-400 hover:underline" data-v-6ffdaec4> @${ssrInterpolate(userInfo.value.name)} `);
            if (userInfo.value.image && ((_a = userInfo.value.image.find((img) => img.size === "medium")) == null ? void 0 : _a["#text"])) {
              _push(`<img${ssrRenderAttr("src", userInfo.value.image.find((img) => img.size === "medium")["#text"])} alt="Avatar" class="w-6 h-6 rounded-full ml-1" data-v-6ffdaec4>`);
            } else {
              _push(ssrRenderComponent(_component_Icon, {
                name: "carbon:user-avatar-filled",
                class: "w-5 h-5 opacity-75 ml-1"
              }, null, _parent));
            }
            _push(`</a>`);
          } else {
            _push(`<span class="flex items-center gap-2" data-v-6ffdaec4> @${ssrInterpolate(userInfo.value.name)} `);
            if (userInfo.value.image && ((_b = userInfo.value.image.find((img) => img.size === "medium")) == null ? void 0 : _b["#text"])) {
              _push(`<img${ssrRenderAttr("src", userInfo.value.image.find((img) => img.size === "medium")["#text"])} alt="Avatar" class="w-6 h-6 rounded-full ml-1" data-v-6ffdaec4>`);
            } else {
              _push(ssrRenderComponent(_component_Icon, {
                name: "carbon:user-avatar-filled",
                class: "w-5 h-5 opacity-75 ml-1"
              }, null, _parent));
            }
            _push(`</span>`);
          }
          _push(`</div><div data-v-6ffdaec4><p class="text-zinc-700 dark:text-zinc-300" data-v-6ffdaec4>Account Age</p><p class="flex items-center gap-2" data-v-6ffdaec4>${ssrInterpolate(calculateAccountAge(userInfo.value.registered.unixtime))} year(s) `);
          _push(ssrRenderComponent(_component_Icon, {
            name: "carbon:calendar",
            class: "w-5 h-5 opacity-75"
          }, null, _parent));
          _push(`</p></div><div data-v-6ffdaec4><p class="text-zinc-700 dark:text-zinc-300" data-v-6ffdaec4>Total Plays</p><p class="flex items-center" data-v-6ffdaec4>${ssrInterpolate(Number(userInfo.value.playcount).toLocaleString())} `);
          _push(ssrRenderComponent(_component_Icon, {
            name: "carbon:play-filled",
            class: "w-5 h-5 opacity-75 ml-1"
          }, null, _parent));
          _push(`</p></div></div></section>`);
        } else {
          _push(`<!---->`);
        }
        if (topTracks.value && topTracks.value.length > 0) {
          _push(`<section data-v-6ffdaec4><h2 class="text-sm font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-6" data-v-6ffdaec4>Top Songs (Last 7 Days)</h2><div class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6" data-v-6ffdaec4><!--[-->`);
          ssrRenderList(topTracks.value, (track) => {
            _push(`<div class="bg-zinc-50 dark:bg-zinc-800/30 p-4 rounded-lg flex justify-between items-center hover:bg-zinc-100 dark:hover:bg-zinc-700/50 transition-colors duration-150" data-v-6ffdaec4><div data-v-6ffdaec4><h3 class="text-lg font-medium text-zinc-900 dark:text-zinc-100" data-v-6ffdaec4><a${ssrRenderAttr("href", track.url)} target="_blank" class="hover:text-violet-500 dark:hover:text-violet-400 transition-colors duration-200" data-v-6ffdaec4>${ssrInterpolate(track.name)}</a></h3><p class="text-sm text-zinc-600 dark:text-zinc-400" data-v-6ffdaec4>by ${ssrInterpolate(track.artist.name)}</p></div><span class="text-sm bg-violet-100 dark:bg-violet-500/20 text-violet-700 dark:text-violet-300 px-2.5 py-1 rounded-full font-medium" data-v-6ffdaec4>${ssrInterpolate(track.playcount)} plays</span></div>`);
          });
          _push(`<!--]--></div></section>`);
        } else {
          _push(`<!---->`);
        }
        if (topArtists.value && topArtists.value.length > 0) {
          _push(`<section data-v-6ffdaec4><h2 class="text-sm font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-6" data-v-6ffdaec4>Top Artists (Last 7 Days)</h2><div class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6" data-v-6ffdaec4><!--[-->`);
          ssrRenderList(topArtists.value, (artist) => {
            _push(`<div class="bg-zinc-50 dark:bg-zinc-800/30 p-4 rounded-lg flex justify-between items-center hover:bg-zinc-100 dark:hover:bg-zinc-700/50 transition-colors duration-150" data-v-6ffdaec4><div data-v-6ffdaec4><h3 class="text-lg font-medium text-zinc-900 dark:text-zinc-100" data-v-6ffdaec4><a${ssrRenderAttr("href", artist.url)} target="_blank" class="hover:text-violet-500 dark:hover:text-violet-400 transition-colors duration-200" data-v-6ffdaec4>${ssrInterpolate(artist.name)}</a></h3></div><span class="text-sm bg-violet-100 dark:bg-violet-500/20 text-violet-700 dark:text-violet-300 px-2.5 py-1 rounded-full font-medium" data-v-6ffdaec4>${ssrInterpolate(artist.playcount)} plays</span></div>`);
          });
          _push(`<!--]--></div></section>`);
        } else {
          _push(`<!---->`);
        }
        if (recentTracks.value && recentTracks.value.length > 0) {
          _push(`<section data-v-6ffdaec4><h2 class="text-sm font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-6" data-v-6ffdaec4>Recent Songs</h2><div class="space-y-4" data-v-6ffdaec4><!--[-->`);
          ssrRenderList(recentTracks.value, (track) => {
            var _a2, _b2, _c, _d;
            _push(`<div class="bg-zinc-50 dark:bg-zinc-800/30 p-4 rounded-lg flex items-center space-x-4 hover:bg-zinc-100 dark:hover:bg-zinc-700/50 transition-colors duration-150" data-v-6ffdaec4>`);
            if (track.image && ((_a2 = track.image.find((img) => img.size === "medium")) == null ? void 0 : _a2["#text"])) {
              _push(`<img${ssrRenderAttr("src", track.image.find((img) => img.size === "medium")["#text"])} alt="Album Art" class="w-16 h-16 rounded-md object-cover" data-v-6ffdaec4>`);
            } else {
              _push(`<div class="w-16 h-16 bg-zinc-200 dark:bg-zinc-700 rounded-md flex items-center justify-center" data-v-6ffdaec4>`);
              _push(ssrRenderComponent(_component_Icon, {
                name: "ph:music-notes-simple-fill",
                class: "w-8 h-8 text-zinc-400 dark:text-zinc-500"
              }, null, _parent));
              _push(`</div>`);
            }
            _push(`<div class="flex-grow" data-v-6ffdaec4><h3 class="text-lg font-medium text-zinc-900 dark:text-zinc-100" data-v-6ffdaec4><a${ssrRenderAttr("href", track.url)} target="_blank" class="hover:text-violet-500 dark:hover:text-violet-400 transition-colors duration-200" data-v-6ffdaec4>${ssrInterpolate(track.name)}</a></h3><p class="text-sm text-zinc-600 dark:text-zinc-400" data-v-6ffdaec4>by ${ssrInterpolate(track.artist["#text"] || track.artist.name)}</p>`);
            if (((_b2 = track.date) == null ? void 0 : _b2.uts) || ((_c = track["@attr"]) == null ? void 0 : _c.nowplaying)) {
              _push(`<p class="text-xs text-zinc-500 dark:text-zinc-400 mt-1" data-v-6ffdaec4>${ssrInterpolate(((_d = track["@attr"]) == null ? void 0 : _d.nowplaying) === "true" ? "Now Playing" : new Date(parseInt(track.date.uts) * 1e3).toLocaleString())}</p>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div></div>`);
          });
          _push(`<!--]--></div></section>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      }
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LastFmStats.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-6ffdaec4"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "muzik",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Songs | \u0130hsan Baki Do\u011Fan",
      meta: [
        { name: "description", content: "My latest listening activity on Last.fm, including top tracks and artists." }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LastFmStats = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pt-16 pb-16 bg-white dark:bg-zinc-900 min-h-screen" }, _attrs))} data-v-13d463cc><div class="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8" data-v-13d463cc><div class="space-y-12" data-v-13d463cc><div data-v-13d463cc><h1 class="text-5xl font-bold text-zinc-900 dark:text-zinc-100" data-v-13d463cc>Songs</h1><p class="mt-3 text-xl text-zinc-600 dark:text-zinc-400" data-v-13d463cc>My latest listening activity on Last.fm.</p></div>`);
      _push(ssrRenderComponent(_component_LastFmStats, null, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/muzik.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const muzik = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-13d463cc"]]);

export { muzik as default };
//# sourceMappingURL=muzik-Dsh1axkx.mjs.map
