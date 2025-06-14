import { defineComponent, useSlots, h, watch, useSSRContext } from "vue";
import _sfc_main$1 from "./ContentRendererMarkdown-BJu3ngqT.js";
import "/Users/ibidi/Desktop/website/node_modules/destr/dist/index.mjs";
import "scule";
import "property-information";
import "./node-hwMnPqaI.js";
import "vue/server-renderer";
import "./preview-DBfnW7Z0.js";
import "/Users/ibidi/Desktop/website/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs";
import "/Users/ibidi/Desktop/website/node_modules/h3/dist/index.mjs";
import "/Users/ibidi/Desktop/website/node_modules/nuxt/node_modules/ohash/dist/index.mjs";
import "/Users/ibidi/Desktop/website/node_modules/klona/dist/index.mjs";
import "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "/Users/ibidi/Desktop/website/node_modules/hookable/dist/index.mjs";
import "/Users/ibidi/Desktop/website/node_modules/unctx/dist/index.mjs";
import "vue-router";
import "/Users/ibidi/Desktop/website/node_modules/radix3/dist/index.mjs";
import "/Users/ibidi/Desktop/website/node_modules/defu/dist/defu.mjs";
import "/Users/ibidi/Desktop/website/node_modules/ufo/dist/index.mjs";
import "/Users/ibidi/Desktop/website/node_modules/nuxt/node_modules/@unhead/vue/dist/index.mjs";
import "@iconify/vue";
import "@iconify/utils/lib/css/icon";
import "/Users/ibidi/Desktop/website/node_modules/perfect-debounce/dist/index.mjs";
const _sfc_main = defineComponent({
  name: "ContentRenderer",
  props: {
    /**
     * The document to render.
     */
    value: {
      type: Object,
      required: false,
      default: () => ({})
    },
    /**
     * Whether or not to render the excerpt.
     * @default false
     */
    excerpt: {
      type: Boolean,
      default: false
    },
    /**
     * The tag to use for the renderer element if it is used.
     * @default 'div'
     */
    tag: {
      type: String,
      default: "div"
    }
  },
  setup(props) {
    watch(
      () => props.excerpt,
      (newExcerpt) => {
        var _a, _b, _c;
        if (newExcerpt && !((_a = props.value) == null ? void 0 : _a.excerpt)) {
          console.warn(`No excerpt found for document content/${(_b = props == null ? void 0 : props.value) == null ? void 0 : _b._path}.${(_c = props == null ? void 0 : props.value) == null ? void 0 : _c._extension}!`);
          console.warn("Make sure to use <!--more--> in your content if you want to use excerpt feature.");
        }
      },
      {
        immediate: true
      }
    );
  },
  /**
   * Content empty fallback
   * @slot empty
   */
  render(ctx) {
    var _a, _b;
    const slots = useSlots();
    const { value, excerpt, tag } = ctx;
    const markdownAST = excerpt ? value == null ? void 0 : value.excerpt : value == null ? void 0 : value.body;
    if (!((_a = markdownAST == null ? void 0 : markdownAST.children) == null ? void 0 : _a.length) && (slots == null ? void 0 : slots.empty)) {
      return slots.empty({ value, excerpt, tag, ...this.$attrs });
    }
    if (slots == null ? void 0 : slots.default) {
      return slots.default({ value, excerpt, tag, ...this.$attrs });
    }
    if ((markdownAST == null ? void 0 : markdownAST.type) === "root" && ((_b = markdownAST == null ? void 0 : markdownAST.children) == null ? void 0 : _b.length)) {
      return h(
        _sfc_main$1,
        {
          value,
          excerpt,
          tag,
          ...this.$attrs
        }
      );
    }
    return h(
      "pre",
      null,
      JSON.stringify({ message: "You should use slots with <ContentRenderer>", value, excerpt, tag }, null, 2)
    );
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=ContentRenderer-DIiy9PWV.js.map
