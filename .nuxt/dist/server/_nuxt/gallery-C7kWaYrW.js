import { defineComponent, ref, computed, mergeProps, useSSRContext, withCtx, createVNode, toDisplayString } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderSlot, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "/Users/ibidi/Desktop/website/node_modules/hookable/dist/index.mjs";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PixelTransition",
  __ssrInlineRender: true,
  props: {
    gridSize: { default: 7 },
    pixelColor: { default: "currentColor" },
    animationStepDuration: { default: 0.3 },
    className: { default: "" },
    style: { default: () => ({}) },
    aspectRatio: { default: "100%" }
  },
  setup(__props) {
    const props = __props;
    const containerRef = ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(false);
    ref(false);
    const styleObject = computed(() => props.style);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "containerRef",
        ref: containerRef,
        class: [
          "pixel-transition-card relative overflow-hidden w-[300px] max-w-full rounded-[15px] border-2 border-white bg-[#222] text-white",
          _ctx.className
        ],
        style: styleObject.value
      }, _attrs))} data-v-8f2f8338><div style="${ssrRenderStyle({ paddingTop: _ctx.aspectRatio })}" data-v-8f2f8338></div><div class="absolute inset-0 w-full h-full" data-v-8f2f8338>`);
      ssrRenderSlot(_ctx.$slots, "firstContent", {}, null, _push, _parent);
      _push(`</div><div class="absolute inset-0 w-full h-full z-[2]" style="${ssrRenderStyle({ "display": "none" })}" data-v-8f2f8338>`);
      ssrRenderSlot(_ctx.$slots, "secondContent", {}, null, _push, _parent);
      _push(`</div><div class="absolute inset-0 w-full h-full pointer-events-none z-[3]" data-v-8f2f8338></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PixelTransition.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const PixelTransition = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-8f2f8338"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "gallery",
  __ssrInlineRender: true,
  setup(__props) {
    const galleryItems = ref([
      {
        id: "1",
        firstImage: "https://source.unsplash.com/random/400x400?nature,water",
        title: "Doğa Harikası",
        description: "Suyun ve yeşilin muhteşem uyumu.",
        altText: "Doğa ve su manzarası",
        gridSize: 12,
        pixelColor: "#34d399",
        // Emerald
        duration: 0.3
      },
      {
        id: "2",
        firstImage: "https://source.unsplash.com/random/400x400?city,night",
        title: "Şehir Işıkları",
        description: "Geceleyin parlayan metropol.",
        altText: "Gece şehir manzarası",
        gridSize: 8,
        pixelColor: "#f59e0b",
        // Amber
        duration: 0.5
      },
      {
        id: "3",
        firstImage: "https://source.unsplash.com/random/400x400?technology,abstract",
        title: "Teknolojik Soyutlama",
        description: "Modern sanat ve teknoloji bir arada.",
        altText: "Teknolojik ve soyut görsel",
        gridSize: 15,
        pixelColor: "#60a5fa",
        // Blue
        duration: 0.25
      },
      {
        id: "4",
        firstImage: "https://source.unsplash.com/random/400x400?food,colorful",
        title: "Lezzet Şöleni",
        description: "Rengarenk ve iştah açıcı yiyecekler.",
        altText: "Renkli yiyecekler",
        gridSize: 10,
        pixelColor: "#f472b6",
        // Pink
        duration: 0.4
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative pt-32 pb-16 bg-white dark:bg-zinc-900 overflow-hidden" }, _attrs))} data-v-17f85663><div class="container mx-auto max-w-6xl px-4" data-v-17f85663><div class="text-center mb-12" data-v-17f85663><h1 class="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl" data-v-17f85663> Galeri </h1><p class="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400" data-v-17f85663> Piksel geçiş efektleriyle oluşturulmuş görseller. </p></div><div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center" data-v-17f85663><!--[-->`);
      ssrRenderList(galleryItems.value, (item) => {
        _push(ssrRenderComponent(PixelTransition, {
          key: item.id,
          "grid-size": item.gridSize || 10,
          "pixel-color": item.pixelColor || "#1f2937",
          "animation-step-duration": item.duration || 0.4,
          "class-name": "w-full h-auto shadow-lg",
          "aspect-ratio": "100%"
        }, {
          firstContent: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", item.firstImage)}${ssrRenderAttr("alt", item.altText || "Galeri öğesi")} class="w-full h-full object-cover" data-v-17f85663${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  src: item.firstImage,
                  alt: item.altText || "Galeri öğesi",
                  class: "w-full h-full object-cover"
                }, null, 8, ["src", "alt"])
              ];
            }
          }),
          secondContent: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="w-full h-full flex flex-col items-center justify-center p-4 bg-zinc-800 text-white" data-v-17f85663${_scopeId}><h3 class="text-xl font-semibold mb-2" data-v-17f85663${_scopeId}>${ssrInterpolate(item.title)}</h3><p class="text-sm text-center" data-v-17f85663${_scopeId}>${ssrInterpolate(item.description)}</p></div>`);
            } else {
              return [
                createVNode("div", { class: "w-full h-full flex flex-col items-center justify-center p-4 bg-zinc-800 text-white" }, [
                  createVNode("h3", { class: "text-xl font-semibold mb-2" }, toDisplayString(item.title), 1),
                  createVNode("p", { class: "text-sm text-center" }, toDisplayString(item.description), 1)
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/gallery.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const gallery = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-17f85663"]]);
export {
  gallery as default
};
//# sourceMappingURL=gallery-C7kWaYrW.js.map
