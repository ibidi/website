import { hash } from "/Users/ibidi/Desktop/website/node_modules/ohash/dist/index.mjs";
import { defineComponent, useSlots, h, toRefs, computed, watch, useSSRContext } from "vue";
import { b as useRuntimeConfig, e as useAsyncData } from "../server.mjs";
import { q as queryContent } from "./query-DvtGEpuP.js";
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
import "vue/server-renderer";
import "@iconify/utils/lib/css/icon";
import "/Users/ibidi/Desktop/website/node_modules/perfect-debounce/dist/index.mjs";
import "./preview-DBfnW7Z0.js";
import "/Users/ibidi/Desktop/website/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs";
import "/Users/ibidi/Desktop/website/node_modules/destr/dist/index.mjs";
import "/Users/ibidi/Desktop/website/node_modules/nuxt/node_modules/ohash/dist/index.mjs";
const ContentQuery = defineComponent({
  name: "ContentQuery",
  props: {
    /**
     * The path of the content to load from content source.
     */
    path: {
      type: String,
      required: false,
      default: void 0
    },
    /**
     * Select a subset of fields
     */
    only: {
      type: Array,
      required: false,
      default: void 0
    },
    /**
     * Remove a subset of fields
     */
    without: {
      type: Array,
      required: false,
      default: void 0
    },
    /**
     * Filter results
     */
    where: {
      type: Object,
      required: false,
      default: void 0
    },
    /**
     * Sort results
     */
    sort: {
      type: Object,
      required: false,
      default: void 0
    },
    /**
     * Limit number of results
     */
    limit: {
      type: Number,
      required: false,
      default: void 0
    },
    /**
     * Skip number of results
     */
    skip: {
      type: Number,
      required: false,
      default: void 0
    },
    /**
     * Filter contents based on locale
     */
    locale: {
      type: String,
      required: false,
      default: void 0
    },
    /**
     * A type of query to be made.
     */
    find: {
      type: String,
      required: false,
      default: void 0
    }
  },
  async setup(props) {
    const {
      path,
      only,
      without,
      where,
      sort,
      limit,
      skip,
      locale,
      find
    } = toRefs(props);
    const isPartial = computed(() => {
      var _a;
      return (_a = path.value) == null ? void 0 : _a.includes("/_");
    });
    const legacy = !useRuntimeConfig().public.content.experimental.advanceQuery;
    watch(() => props, () => refresh(), { deep: true });
    const resolveResult = (result) => {
      if (legacy) {
        if (result == null ? void 0 : result.surround) {
          return result.surround;
        }
        return (result == null ? void 0 : result._id) || Array.isArray(result) ? result : result == null ? void 0 : result.result;
      }
      return result.result;
    };
    const { data, refresh } = await useAsyncData(
      `content-query-${hash(props)}`,
      () => {
        let queryBuilder;
        if (path.value) {
          queryBuilder = queryContent(path.value);
        } else {
          queryBuilder = queryContent();
        }
        if (only.value) {
          queryBuilder = queryBuilder.only(only.value);
        }
        if (without.value) {
          queryBuilder = queryBuilder.without(without.value);
        }
        if (where.value) {
          queryBuilder = queryBuilder.where(where.value);
        }
        if (sort.value) {
          queryBuilder = queryBuilder.sort(sort.value);
        }
        if (limit.value) {
          queryBuilder = queryBuilder.limit(limit.value);
        }
        if (skip.value) {
          queryBuilder = queryBuilder.skip(skip.value);
        }
        if (locale.value) {
          queryBuilder = queryBuilder.where({ _locale: locale.value });
        }
        if (find.value === "one") {
          return queryBuilder.findOne().then(resolveResult);
        }
        if (find.value === "surround") {
          if (!path.value) {
            console.warn("[Content] Surround queries requires `path` prop to be set.");
            console.warn("[Content] Query without `path` will return regular `find()` results.");
            return queryBuilder.find().then(resolveResult);
          }
          if (legacy) {
            return queryBuilder.findSurround(path.value);
          } else {
            return queryBuilder.withSurround(path.value).findOne().then(resolveResult);
          }
        }
        return queryBuilder.find().then(resolveResult);
      }
    );
    return {
      isPartial,
      data,
      refresh
    };
  },
  /**
   * Content not found fallback
   * @slot not-found
   */
  render(ctx) {
    var _a;
    const slots = useSlots();
    const {
      // Setup
      data,
      refresh,
      isPartial,
      // Props
      path,
      only,
      without,
      where,
      sort,
      limit,
      skip,
      locale,
      find
    } = ctx;
    const props = {
      path,
      only,
      without,
      where,
      sort,
      limit,
      skip,
      locale,
      find
    };
    if (props.find === "one") {
      if (!data && (slots == null ? void 0 : slots["not-found"])) {
        return slots["not-found"]({ props, ...this.$attrs });
      }
      if ((slots == null ? void 0 : slots.empty) && (data == null ? void 0 : data._type) === "markdown" && !((_a = data == null ? void 0 : data.body) == null ? void 0 : _a.children.length)) {
        return slots.empty({ props, ...this.$attrs });
      }
    } else if (!data || !data.length) {
      if (slots == null ? void 0 : slots["not-found"]) {
        return slots["not-found"]({ props, ...this.$attrs });
      }
    }
    if (slots == null ? void 0 : slots.default) {
      return slots.default({ data, refresh, isPartial, props, ...this.$attrs });
    }
    const emptyNode = (slot, data2) => h("pre", null, JSON.stringify({ message: "You should use slots with <ContentQuery>!", slot, data: data2 }, null, 2));
    return emptyNode("default", { data, props, isPartial });
  }
});
const _sfc_main = ContentQuery;
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=ContentQuery-WEMf9ase.js.map
