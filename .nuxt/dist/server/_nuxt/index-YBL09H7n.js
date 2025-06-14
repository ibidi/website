import { _ as __nuxt_component_0, b as useRuntimeConfig, a as __nuxt_component_0$1 } from "../server.mjs";
import { defineComponent, ref, watch, mergeProps, useSSRContext, withCtx, createVNode, toDisplayString, createTextVNode, computed, resolveDynamicComponent, TransitionGroup, createBlock, openBlock, Fragment, renderList } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderVNode, ssrRenderStyle, ssrRenderSlot, ssrRenderClass } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "/Users/ibidi/Desktop/website/node_modules/klona/dist/index.mjs";
import "/Users/ibidi/Desktop/website/node_modules/hookable/dist/index.mjs";
import { useIntersectionObserver } from "@vueuse/core";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { u as useSeo } from "./useSeo-CiDjh6Aj.js";
import "ofetch";
import "#internal/nuxt/paths";
import "/Users/ibidi/Desktop/website/node_modules/unctx/dist/index.mjs";
import "/Users/ibidi/Desktop/website/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/ibidi/Desktop/website/node_modules/radix3/dist/index.mjs";
import "/Users/ibidi/Desktop/website/node_modules/defu/dist/defu.mjs";
import "/Users/ibidi/Desktop/website/node_modules/ufo/dist/index.mjs";
import "/Users/ibidi/Desktop/website/node_modules/nuxt/node_modules/@unhead/vue/dist/index.mjs";
import "@iconify/vue";
import "@iconify/utils/lib/css/icon";
import "/Users/ibidi/Desktop/website/node_modules/perfect-debounce/dist/index.mjs";
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "AnimatedSquares",
  __ssrInlineRender: true,
  props: {
    direction: { default: "right" },
    speed: { default: 0.5 },
    borderColor: { default: "#3f3f46" },
    squareSize: { default: 40 },
    hoverFillColor: { default: "#27272a" }
  },
  setup(__props) {
    const props = __props;
    const canvasRef = ref(null);
    ref(null);
    const numSquaresX = ref(0);
    const numSquaresY = ref(0);
    const gridOffset = ref({ x: 0, y: 0 });
    const hoveredSquareRef = ref(null);
    const drawGrid = () => {
      const canvas = canvasRef.value;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      Math.floor(gridOffset.value.x / props.squareSize) * props.squareSize;
      Math.floor(gridOffset.value.y / props.squareSize) * props.squareSize;
      for (let i = 0; i < numSquaresX.value; i++) {
        for (let j = 0; j < numSquaresY.value; j++) {
          const squareX = i * props.squareSize - gridOffset.value.x % props.squareSize;
          const squareY = j * props.squareSize - gridOffset.value.y % props.squareSize;
          if (hoveredSquareRef.value && i === hoveredSquareRef.value.x && j === hoveredSquareRef.value.y) {
            ctx.fillStyle = props.hoverFillColor;
            ctx.fillRect(squareX, squareY, props.squareSize, props.squareSize);
          }
          ctx.strokeStyle = props.borderColor;
          ctx.strokeRect(squareX, squareY, props.squareSize, props.squareSize);
        }
      }
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.sqrt(canvas.width ** 2 + canvas.height ** 2) / 2
      );
      gradient.addColorStop(0, "rgba(10, 10, 10, 0)");
      gradient.addColorStop(1, "#09090b");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };
    const resizeCanvas = () => {
      const canvas = canvasRef.value;
      if (!canvas) return;
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      numSquaresX.value = Math.ceil(canvas.width / props.squareSize) + 1;
      numSquaresY.value = Math.ceil(canvas.height / props.squareSize) + 1;
      drawGrid();
    };
    watch(() => [props.direction, props.speed, props.borderColor, props.hoverFillColor, props.squareSize], () => {
      if (canvasRef.value) {
        resizeCanvas();
      }
    }, { deep: true });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<canvas${ssrRenderAttrs(mergeProps({
        ref_key: "canvasRef",
        ref: canvasRef,
        class: "w-full h-full border-none block fixed top-0 left-0 -z-10"
      }, _attrs))} data-v-b3178c86></canvas>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AnimatedSquares.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const AnimatedSquares = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-b3178c86"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "HomeBlogSection",
  __ssrInlineRender: true,
  setup(__props) {
    const posts = ref(null);
    const error = ref(null);
    function formatDate(dateString) {
      if (!dateString) return "Date not available";
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(dateString).toLocaleDateString("en-US", options);
    }
    function truncateDescription(text, maxLength = 120) {
      if (!text) return "No description available.";
      if (text.length <= maxLength) {
        return text;
      }
      return text.substring(0, maxLength) + "...";
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-12 bg-white dark:bg-zinc-900" }, _attrs))} data-v-eb8e7892><div class="container mx-auto max-w-4xl" data-v-eb8e7892><h2 class="text-3xl font-medium text-center text-zinc-900 dark:text-zinc-200 mb-12" data-v-eb8e7892> Latest Blog Posts </h2>`);
      if (posts.value && posts.value.length) {
        _push(`<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3" data-v-eb8e7892><!--[-->`);
        ssrRenderList(posts.value, (post) => {
          _push(`<div class="bg-zinc-50 dark:bg-zinc-800/50 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col overflow-hidden group" data-v-eb8e7892>`);
          if (post.coverImage) {
            _push(ssrRenderComponent(_component_NuxtLink, {
              to: post._path,
              class: "block h-48 w-full overflow-hidden"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<img${ssrRenderAttr("src", post.coverImage)}${ssrRenderAttr("alt", post.title || "Blog post cover image")} class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" data-v-eb8e7892${_scopeId}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: post.coverImage,
                      alt: post.title || "Blog post cover image",
                      class: "w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    }, null, 8, ["src", "alt"])
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else {
            _push(`<div class="h-48 w-full bg-zinc-200 dark:bg-zinc-700 flex items-center justify-center" data-v-eb8e7892><span class="text-zinc-500 dark:text-zinc-400 text-sm" data-v-eb8e7892>No Image Available</span></div>`);
          }
          _push(`<div class="p-6 flex flex-col flex-grow" data-v-eb8e7892>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: post._path,
            class: "block"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<h3 class="text-xl font-semibold text-zinc-800 dark:text-zinc-100 mb-2 group-hover:text-violet-500 dark:group-hover:text-violet-400 transition-colors" data-v-eb8e7892${_scopeId}>${ssrInterpolate(post.title || "Untitled Post")}</h3>`);
              } else {
                return [
                  createVNode("h3", { class: "text-xl font-semibold text-zinc-800 dark:text-zinc-100 mb-2 group-hover:text-violet-500 dark:group-hover:text-violet-400 transition-colors" }, toDisplayString(post.title || "Untitled Post"), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          if (post.description) {
            _push(`<p class="text-zinc-600 dark:text-zinc-400 text-sm mb-3 leading-relaxed flex-grow" data-v-eb8e7892>${ssrInterpolate(truncateDescription(post.description, 120))}</p>`);
          } else {
            _push(`<p class="text-zinc-600 dark:text-zinc-400 text-sm mb-3 leading-relaxed flex-grow" data-v-eb8e7892> No description available. </p>`);
          }
          _push(`<div class="mt-auto pt-4 border-t border-zinc-200 dark:border-zinc-700/50" data-v-eb8e7892><div class="text-xs text-zinc-500 dark:text-zinc-500 mb-2" data-v-eb8e7892><span data-v-eb8e7892>${ssrInterpolate(formatDate(post.date))}</span>`);
          if (post.tags && post.tags.length) {
            _push(`<span class="mx-1" data-v-eb8e7892>|</span>`);
          } else {
            _push(`<!---->`);
          }
          if (post.tags && post.tags.length) {
            _push(`<span class="italic" data-v-eb8e7892>${ssrInterpolate(post.tags.join(", "))}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: post._path,
            class: "inline-block text-sm text-violet-600 dark:text-violet-400 hover:underline font-medium"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Read more → `);
              } else {
                return [
                  createTextVNode(" Read more → ")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div></div></div>`);
        });
        _push(`<!--]--></div>`);
      } else if (error.value) {
        _push(`<div data-v-eb8e7892><p class="text-center text-red-500" data-v-eb8e7892>Could not load blog posts. Please try again later.</p></div>`);
      } else {
        _push(`<div data-v-eb8e7892><p class="text-center text-zinc-500 dark:text-zinc-400" data-v-eb8e7892>No blog posts found yet. Stay tuned!</p></div>`);
      }
      _push(`<div class="text-center mt-12" data-v-eb8e7892>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/blog",
        class: "px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-md font-medium transition-colors duration-200"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` View All Posts `);
          } else {
            return [
              createTextVNode(" View All Posts ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HomeBlogSection.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const HomeBlogSection = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-eb8e7892"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "BlurText",
  __ssrInlineRender: true,
  props: {
    text: {},
    tag: { default: "p" },
    delay: { default: 100 },
    duration: { default: 600 },
    className: { default: "" },
    animateBy: { default: "words" },
    direction: { default: "top" },
    onAnimationComplete: {}
  },
  setup(__props) {
    const props = __props;
    const targetRef = ref(null);
    const isInView = ref(false);
    const segments = computed(() => {
      if (props.animateBy === "letters") {
        return props.text.split("");
      }
      const words = props.text.split(" ");
      const result = [];
      words.forEach((word, index) => {
        result.push(word);
        if (index < words.length - 1) {
          result.push(" ");
        }
      });
      return result;
    });
    useIntersectionObserver(
      targetRef,
      ([{ isIntersecting }]) => {
        if (isIntersecting && !isInView.value) {
          isInView.value = true;
          if (targetRef.value) {
            targetRef.value.classList.add("in-view");
          }
        }
      },
      { threshold: 0.1 }
    );
    let animatedCount = 0;
    const checkIfLastAnimated = (el) => {
      var _a;
      animatedCount++;
      if (animatedCount === segments.value.length) {
        (_a = props.onAnimationComplete) == null ? void 0 : _a.call(props);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(_ctx.tag), mergeProps({
        ref_key: "targetRef",
        ref: targetRef,
        class: ["blur-text-wrapper", _ctx.className]
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${ssrRenderAttrs({
              name: "blur-segment",
              class: "inline-block"
            })} data-v-175f92f1>`);
            ssrRenderList(segments.value, (segment, index) => {
              _push2(`<span class="blur-text-segment inline-block" style="${ssrRenderStyle({
                "--segment-delay": `${index * _ctx.delay}ms`,
                "--segment-duration": `${_ctx.duration}ms`,
                "--initial-y": _ctx.direction === "top" ? "-20px" : "20px"
              })}"${ssrRenderAttr("data-index", index)} data-v-175f92f1${_scopeId}>${ssrInterpolate(segment === " " ? " " : segment)}</span>`);
            });
            _push2(`</span>`);
          } else {
            return [
              createVNode(TransitionGroup, {
                tag: "span",
                name: "blur-segment",
                class: "inline-block",
                onAfterEnter: checkIfLastAnimated
              }, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(segments.value, (segment, index) => {
                    return openBlock(), createBlock("span", {
                      key: index,
                      class: "blur-text-segment inline-block",
                      style: {
                        "--segment-delay": `${index * _ctx.delay}ms`,
                        "--segment-duration": `${_ctx.duration}ms`,
                        "--initial-y": _ctx.direction === "top" ? "-20px" : "20px"
                      },
                      "data-index": index
                    }, toDisplayString(segment === " " ? " " : segment), 13, ["data-index"]);
                  }), 128))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }), _parent);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BlurText.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const BlurText = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-175f92f1"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ShinyText",
  __ssrInlineRender: true,
  props: {
    text: {},
    tag: { default: "div" },
    disabled: { type: Boolean, default: false },
    speed: { default: 5 },
    className: { default: "" }
  },
  setup(__props) {
    const props = __props;
    const animationDuration = computed(() => `${props.speed}s`);
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(_ctx.tag), mergeProps({
        class: ["shiny-text-wrapper bg-clip-text inline-block", { "animate-shine": !_ctx.disabled }, _ctx.className],
        style: {
          color: "rgba(181, 181, 181, 0.64)",
          // Equivalent to text-[#b5b5b5a4]
          backgroundImage: "linear-gradient(120deg, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 60%)",
          backgroundSize: "200% 100%",
          WebkitBackgroundClip: "text",
          animationDuration: animationDuration.value
        }
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.text)}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.text), 1)
            ];
          }
        }),
        _: 1
      }), _parent);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ShinyText.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const ShinyText = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-3b280ad2"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AnimatedContent",
  __ssrInlineRender: true,
  props: {
    distance: { default: 100 },
    direction: { default: "vertical" },
    reverse: { type: Boolean, default: false },
    duration: { default: 0.8 },
    ease: { type: [String, Function], default: "power3.out" },
    initialOpacity: { default: 0 },
    animateOpacity: { type: Boolean, default: true },
    scale: { default: 1 },
    threshold: { default: 0.1 },
    delay: { default: 0 },
    onComplete: {}
  },
  setup(__props) {
    gsap.registerPlugin(ScrollTrigger);
    const props = __props;
    const animatedRef = ref(null);
    let scrollTriggerInstance = null;
    let tweenInstance = null;
    const animate = () => {
      const el = animatedRef.value;
      if (!el) return;
      if (scrollTriggerInstance) {
        scrollTriggerInstance.kill();
      }
      if (tweenInstance) {
        tweenInstance.kill();
      }
      const axis = props.direction === "horizontal" ? "x" : "y";
      const offset = props.reverse ? -props.distance : props.distance;
      const startPct = (1 - props.threshold) * 100;
      gsap.set(el, {
        [axis]: offset,
        scale: props.scale,
        opacity: props.animateOpacity ? props.initialOpacity : 1
      });
      tweenInstance = gsap.to(el, {
        [axis]: 0,
        scale: 1,
        opacity: 1,
        duration: props.duration,
        ease: props.ease,
        delay: props.delay,
        onComplete: props.onComplete,
        scrollTrigger: {
          trigger: el,
          start: `top ${startPct}%`,
          toggleActions: "play none none none",
          once: true,
          onEnter: () => {
          }
        }
      });
      scrollTriggerInstance = tweenInstance.scrollTrigger;
    };
    watch(
      () => [
        props.distance,
        props.direction,
        props.reverse,
        props.duration,
        props.ease,
        props.initialOpacity,
        props.animateOpacity,
        props.scale,
        props.threshold,
        props.delay
      ],
      () => {
        if (animatedRef.value) {
          animate();
        }
      },
      { deep: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "animatedRef",
        ref: animatedRef
      }, _attrs))} data-v-bed30a9d>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AnimatedContent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const AnimatedContent = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-bed30a9d"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const config = useRuntimeConfig();
    config.public.lastFmApiKey;
    config.public.lastFmUsername;
    const lastPlayedTrack = ref(null);
    const recentTracks = ref([]);
    const fetchError = ref(null);
    const isOnline = computed(() => {
      var _a;
      return !!((_a = lastPlayedTrack.value) == null ? void 0 : _a.nowPlaying);
    });
    function formatDate(dateString) {
      if (!dateString) return "";
      try {
        const date = new Date(dateString);
        const now = /* @__PURE__ */ new Date();
        const diffTime = Math.abs(now.getTime() - date.getTime());
        const diffDays = Math.ceil(diffTime / (1e3 * 60 * 60 * 24));
        if (diffDays === 1) {
          return "Dün";
        } else if (diffDays < 7) {
          return `${diffDays} gün önce`;
        } else {
          return date.toLocaleDateString("tr-TR", {
            day: "numeric",
            month: "short"
          });
        }
      } catch {
        return dateString;
      }
    }
    ref(null);
    useSeo({
      title: "İhsan Baki Doğan - Full Stack Developer",
      description: "Full Stack Developer with expertise in Vue.js, Node.js, and modern web technologies. Check out my portfolio and blog."
    });
    const jobs = [
      {
        id: 1,
        company: "Demirayak Yazılım",
        title: "Full Stack Developer / Co-Founder",
        date: "2019-Present",
        image: "/images/experience/demirayak.png",
        // Placeholder image path
        isPresent: true
      },
      {
        id: 2,
        company: "Hayati Kodla",
        title: "Full Stack Developer / Operation Manager",
        date: "2024-Present",
        image: "/images/experience/hayatikodla.png",
        // Placeholder image path
        isPresent: true
      },
      {
        id: 3,
        company: "Aksis Güzellik Salonları",
        title: "Full Stack Developer / Social Media Expert",
        date: "2023-Present",
        image: "/images/experience/aksis.jpeg",
        // Placeholder image path
        isPresent: true
      },
      {
        id: 4,
        company: "ASEDE",
        title: "Full Stack Developer",
        date: "2022-2025",
        image: "/images/experience/asede.PNG",
        // Placeholder image path
        isPresent: true
      },
      {
        id: 5,
        company: "Not Bilgi Teknolojileri",
        title: "Full Stack Developer / Social Media Expert",
        date: "2022-2024",
        image: "/images/experience/not-bilgi.png"
        // Placeholder image path
      },
      {
        id: 6,
        company: "Oguzkaan Koleji",
        title: "Information Technology Teacher / IT Specialist",
        date: "2022-2024",
        image: "/images/experience/oguzkaan.png"
        // Placeholder image path
      }
    ];
    const educations = [
      {
        id: 1,
        school: "Istanbul Gelisim University",
        field: "Computer Programming",
        date: "2019-2021",
        image: "/images/education/gelisim.png"
        // Placeholder image path
      },
      {
        id: 2,
        school: "Anadolu University",
        field: "Web Design and Development",
        date: "2023-2025",
        image: "/images/education/anadolu.png"
        // Placeholder image path
      },
      {
        id: 3,
        school: "Istanbul University",
        field: "Medical Documentation and Secretarial Services",
        date: "2022-2024",
        image: "/images/education/istanbul.png"
        // Placeholder image path
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative pt-32 pb-16 bg-white dark:bg-zinc-900 overflow-hidden z-0" }, _attrs))}>`);
      _push(ssrRenderComponent(AnimatedSquares, { class: "fixed top-0 left-0 w-full h-full z-[-1] pointer-events-none" }, null, _parent));
      _push(`<div class="container mx-auto max-w-4xl"><div class="flex flex-col gap-20"><div class="space-y-6">`);
      _push(ssrRenderComponent(BlurText, {
        text: "Hi, I am İhsan Baki Doğan",
        tag: "h1",
        "class-name": "text-3xl font-medium text-zinc-900 dark:text-zinc-200",
        delay: 100,
        "animate-by": "words",
        direction: "top"
      }, null, _parent));
      _push(`<div class="flex items-center gap-3"><span class="inline-flex items-center gap-2 px-2.5 py-1 bg-zinc-100 dark:bg-zinc-800/50 rounded-md text-sm text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700/50"><span class="${ssrRenderClass([isOnline.value ? "bg-emerald-500" : "bg-red-500", "w-2 h-2 rounded-full"])}"></span> ${ssrInterpolate(isOnline.value ? "Online" : "Offline")}</span>`);
      if (lastPlayedTrack.value) {
        _push(`<span class="inline-flex items-center px-2.5 py-1 bg-zinc-100 dark:bg-zinc-800/50 rounded-md text-sm text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700/50"><span class="inline-flex items-center">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "simple-icons:lastdotfm",
          class: "w-4 h-4 text-[#d51007] mr-0"
        }, null, _parent));
        _push(ssrRenderComponent(_component_Icon, {
          name: "ph:music-note-simple-fill",
          class: "w-4 h-4 text-zinc-700 dark:text-zinc-300 ml-0"
        }, null, _parent));
        _push(`</span>`);
        if (lastPlayedTrack.value.url) {
          _push(`<a${ssrRenderAttr("href", lastPlayedTrack.value.url)} target="_blank" class="hover:text-violet-400 transition-colors duration-200 ml-2">${ssrInterpolate(lastPlayedTrack.value.name)} - ${ssrInterpolate(lastPlayedTrack.value.artist)} `);
          if (lastPlayedTrack.value.nowPlaying) {
            _push(`<span class="text-xs text-emerald-500">(şimdi çalıyor)</span>`);
          } else {
            _push(`<span class="text-xs text-zinc-500">(son çalan)</span>`);
          }
          _push(`</a>`);
        } else {
          _push(`<span class="ml-2">${ssrInterpolate(lastPlayedTrack.value.name)} - ${ssrInterpolate(lastPlayedTrack.value.artist)} `);
          if (lastPlayedTrack.value.nowPlaying) {
            _push(`<span class="text-xs text-emerald-500">(şimdi çalıyor)</span>`);
          } else {
            _push(`<span class="text-xs text-zinc-500">(son çalan)</span>`);
          }
          _push(`</span>`);
        }
        _push(`</span>`);
      } else if (!fetchError.value && !lastPlayedTrack.value) {
        _push(`<span class="inline-flex items-center gap-2 px-2.5 py-1 bg-zinc-100 dark:bg-zinc-800/50 rounded-md text-sm text-zinc-500 border border-zinc-200 dark:border-zinc-700/50">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "simple-icons:lastdotfm",
          class: "w-4 h-4 text-[#d51007]"
        }, null, _parent));
        _push(`<span>Müzik aktivitesi yok</span></span>`);
      } else if (fetchError.value) {
        _push(`<span class="inline-flex items-center gap-2 px-2.5 py-1 bg-zinc-100 dark:bg-zinc-800/50 rounded-md text-sm text-red-500 dark:text-red-400 border border-zinc-200 dark:border-zinc-700/50">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "carbon:error",
          class: "w-4 h-4"
        }, null, _parent));
        _push(`<span>Veri alınamadı</span></span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(ShinyText, {
        text: "Full Stack Web Developer - in ❤️ with Node.js, TypeScript, React.js and Vue.js - 🇹🇷",
        tag: "p",
        "class-name": "text-base text-zinc-600 dark:text-zinc-400",
        speed: 8
      }, null, _parent));
      _push(ssrRenderComponent(AnimatedContent, {
        distance: 50,
        direction: "horizontal",
        duration: 0.8,
        delay: 0.2,
        ease: "power2.out"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center gap-3"${_scopeId}><a href="mailto:info@ibidi.tr" class="inline-flex items-center gap-2 px-4 py-2 bg-zinc-100 dark:bg-zinc-800/50 rounded-md text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700/50 transition-all duration-200 hover:bg-zinc-200 dark:hover:bg-zinc-800"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "carbon:email",
              class: "text-base"
            }, null, _parent2, _scopeId));
            _push2(` Contact </a><div class="flex items-center gap-2"${_scopeId}><a href="https://github.com/ibidi" target="_blank" class="inline-flex items-center justify-center w-10 h-10 bg-zinc-100 dark:bg-zinc-800/50 rounded-md text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700/50 transition-all duration-200 hover:bg-zinc-200 dark:hover:bg-zinc-800"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "carbon:logo-github",
              class: "text-xl"
            }, null, _parent2, _scopeId));
            _push2(`</a><a href="https://twitter.com/ibidicodes" target="_blank" class="inline-flex items-center justify-center w-10 h-10 bg-zinc-100 dark:bg-zinc-800/50 rounded-md text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700/50 transition-all duration-200 hover:bg-zinc-200 dark:hover:bg-zinc-800"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "carbon:logo-twitter",
              class: "text-xl"
            }, null, _parent2, _scopeId));
            _push2(`</a><a href="https://linkedin.com/in/ibidi" target="_blank" class="inline-flex items-center justify-center w-10 h-10 bg-zinc-100 dark:bg-zinc-800/50 rounded-md text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700/50 transition-all duration-200 hover:bg-zinc-200 dark:hover:bg-zinc-800"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "carbon:logo-linkedin",
              class: "text-xl"
            }, null, _parent2, _scopeId));
            _push2(`</a><a href="https://instagram.com/ihsanbakidogann" target="_blank" class="inline-flex items-center justify-center w-10 h-10 bg-zinc-100 dark:bg-zinc-800/50 rounded-md text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700/50 transition-all duration-200 hover:bg-zinc-200 dark:hover:bg-zinc-800"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "carbon:logo-instagram",
              class: "text-xl"
            }, null, _parent2, _scopeId));
            _push2(`</a></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center gap-3" }, [
                createVNode("a", {
                  href: "mailto:info@ibidi.tr",
                  class: "inline-flex items-center gap-2 px-4 py-2 bg-zinc-100 dark:bg-zinc-800/50 rounded-md text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700/50 transition-all duration-200 hover:bg-zinc-200 dark:hover:bg-zinc-800"
                }, [
                  createVNode(_component_Icon, {
                    name: "carbon:email",
                    class: "text-base"
                  }),
                  createTextVNode(" Contact ")
                ]),
                createVNode("div", { class: "flex items-center gap-2" }, [
                  createVNode("a", {
                    href: "https://github.com/ibidi",
                    target: "_blank",
                    class: "inline-flex items-center justify-center w-10 h-10 bg-zinc-100 dark:bg-zinc-800/50 rounded-md text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700/50 transition-all duration-200 hover:bg-zinc-200 dark:hover:bg-zinc-800"
                  }, [
                    createVNode(_component_Icon, {
                      name: "carbon:logo-github",
                      class: "text-xl"
                    })
                  ]),
                  createVNode("a", {
                    href: "https://twitter.com/ibidicodes",
                    target: "_blank",
                    class: "inline-flex items-center justify-center w-10 h-10 bg-zinc-100 dark:bg-zinc-800/50 rounded-md text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700/50 transition-all duration-200 hover:bg-zinc-200 dark:hover:bg-zinc-800"
                  }, [
                    createVNode(_component_Icon, {
                      name: "carbon:logo-twitter",
                      class: "text-xl"
                    })
                  ]),
                  createVNode("a", {
                    href: "https://linkedin.com/in/ibidi",
                    target: "_blank",
                    class: "inline-flex items-center justify-center w-10 h-10 bg-zinc-100 dark:bg-zinc-800/50 rounded-md text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700/50 transition-all duration-200 hover:bg-zinc-200 dark:hover:bg-zinc-800"
                  }, [
                    createVNode(_component_Icon, {
                      name: "carbon:logo-linkedin",
                      class: "text-xl"
                    })
                  ]),
                  createVNode("a", {
                    href: "https://instagram.com/ihsanbakidogann",
                    target: "_blank",
                    class: "inline-flex items-center justify-center w-10 h-10 bg-zinc-100 dark:bg-zinc-800/50 rounded-md text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700/50 transition-all duration-200 hover:bg-zinc-200 dark:hover:bg-zinc-800"
                  }, [
                    createVNode(_component_Icon, {
                      name: "carbon:logo-instagram",
                      class: "text-xl"
                    })
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="grid gap-8 md:grid-cols-2"><div class="space-y-4"><h2 class="text-2xl font-medium text-zinc-900 dark:text-zinc-200">Experience</h2><div class="space-y-4"><!--[-->`);
      ssrRenderList(jobs, (job) => {
        _push(`<div class="group"><div class="block p-4 bg-zinc-100 dark:bg-zinc-800/50 rounded-md border border-zinc-200 dark:border-zinc-700/50 transition-all duration-200 hover:bg-zinc-200 dark:hover:bg-zinc-800"><div class="space-y-4"><div class="flex items-center gap-3"><div class="w-10 h-10 rounded-md bg-violet-500/10 flex items-center justify-center"><img${ssrRenderAttr("src", job.image)}${ssrRenderAttr("alt", job.company)} class="w-full h-full object-contain"></div><div><div class="flex items-center gap-2"><h3 class="text-base font-medium text-zinc-900 dark:text-zinc-200">${ssrInterpolate(job.company)}</h3>`);
        if (job.isPresent) {
          _push(`<span class="px-2 py-0.5 text-xs bg-violet-500/10 text-violet-500 rounded">PRESENT</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><p class="text-sm text-zinc-600 dark:text-zinc-400">${ssrInterpolate(job.title)}</p><p class="text-sm text-zinc-500 dark:text-zinc-500">${ssrInterpolate(job.date)}</p></div></div></div></div></div>`);
      });
      _push(`<!--]--></div></div><div class="space-y-4"><h2 class="text-2xl font-medium text-zinc-900 dark:text-zinc-200">Education</h2><div class="space-y-4"><!--[-->`);
      ssrRenderList(educations, (education) => {
        _push(`<div class="group"><div class="block p-4 bg-zinc-100 dark:bg-zinc-800/50 rounded-md border border-zinc-200 dark:border-zinc-700/50 transition-all duration-200 hover:bg-zinc-200 dark:hover:bg-zinc-800"><div class="space-y-4"><div class="flex items-center gap-3"><div class="w-10 h-10 rounded-md bg-violet-500/10 flex items-center justify-center"><img${ssrRenderAttr("src", education.image)}${ssrRenderAttr("alt", education.school)} class="w-full h-full object-contain"></div><div><h3 class="text-base font-medium text-zinc-900 dark:text-zinc-200">${ssrInterpolate(education.school)}</h3><p class="text-sm text-zinc-600 dark:text-zinc-400">${ssrInterpolate(education.field)}</p><p class="text-sm text-zinc-500 dark:text-zinc-500">${ssrInterpolate(education.date)}</p></div></div></div></div></div>`);
      });
      _push(`<!--]--></div></div></div><div class="space-y-4"><h2 class="text-2xl font-medium text-zinc-900 dark:text-zinc-200">Technologies I Use</h2><div class="grid gap-4 md:grid-cols-2"><div class="group"><div class="block p-4 bg-zinc-100 dark:bg-zinc-800/50 rounded-md border border-zinc-200 dark:border-zinc-700/50 transition-all duration-200 hover:bg-zinc-200 dark:hover:bg-zinc-800"><div class="space-y-4"><div class="flex items-center gap-3"><div class="w-10 h-10 rounded-md bg-violet-500/10 flex items-center justify-center">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "carbon:application-web",
        class: "text-base text-violet-500"
      }, null, _parent));
      _push(`</div><div><h3 class="text-base font-medium text-zinc-900 dark:text-zinc-200">Frontend</h3><p class="text-sm text-zinc-600 dark:text-zinc-400">Vue.js, React.js, TypeScript, TailwindCSS</p></div></div></div></div></div><div class="group"><div class="block p-4 bg-zinc-100 dark:bg-zinc-800/50 rounded-md border border-zinc-200 dark:border-zinc-700/50 transition-all duration-200 hover:bg-zinc-200 dark:hover:bg-zinc-800"><div class="space-y-4"><div class="flex items-center gap-3"><div class="w-10 h-10 rounded-md bg-violet-500/10 flex items-center justify-center">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "carbon:data-base",
        class: "text-base text-violet-500"
      }, null, _parent));
      _push(`</div><div><h3 class="text-base font-medium text-zinc-900 dark:text-zinc-200">Backend</h3><p class="text-sm text-zinc-600 dark:text-zinc-400">Node.js, PHP, MySQL, MongoDB</p></div></div></div></div></div><div class="group"><div class="block p-4 bg-zinc-100 dark:bg-zinc-800/50 rounded-md border border-zinc-200 dark:border-zinc-700/50 transition-all duration-200 hover:bg-zinc-200 dark:hover:bg-zinc-800"><div class="space-y-4"><div class="flex items-center gap-3"><div class="w-10 h-10 rounded-md bg-violet-500/10 flex items-center justify-center">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "carbon:tools",
        class: "text-base text-violet-500"
      }, null, _parent));
      _push(`</div><div><h3 class="text-base font-medium text-zinc-900 dark:text-zinc-200">Tools</h3><p class="text-sm text-zinc-600 dark:text-zinc-400">VS Code, Git, Docker, Figma</p></div></div></div></div></div><div class="group"><div class="block p-4 bg-zinc-100 dark:bg-zinc-800/50 rounded-md border border-zinc-200 dark:border-zinc-700/50 transition-all duration-200 hover:bg-zinc-200 dark:hover:bg-zinc-800"><div class="space-y-4"><div class="flex items-center gap-3"><div class="w-10 h-10 rounded-md bg-violet-500/10 flex items-center justify-center">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "carbon:cloud",
        class: "text-base text-violet-500"
      }, null, _parent));
      _push(`</div><div><h3 class="text-base font-medium text-zinc-900 dark:text-zinc-200">Cloud</h3><p class="text-sm text-zinc-600 dark:text-zinc-400">AWS, Netlify, Vercel, DigitalOcean</p></div></div></div></div></div></div></div>`);
      _push(ssrRenderComponent(HomeBlogSection, null, null, _parent));
      _push(`<div class="space-y-6"><div class="flex items-center justify-between"><h2 class="text-2xl font-medium text-zinc-900 dark:text-zinc-200">Recently Listened Songs</h2><a href="https://www.last.fm/user/ibidi" target="_blank" class="inline-flex items-center gap-2 px-3 py-1.5 text-sm text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800/50 rounded-md border border-zinc-200 dark:border-zinc-700/50 transition-all duration-200 hover:bg-zinc-200 dark:hover:bg-zinc-800">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "simple-icons:lastdotfm",
        class: "w-4 h-4 text-[#d51007]"
      }, null, _parent));
      _push(` Last.fm Profile </a></div>`);
      if (recentTracks.value.length > 0) {
        _push(`<div class="grid gap-4 md:grid-cols-2"><!--[-->`);
        ssrRenderList(recentTracks.value, (track) => {
          _push(`<div class="group"><div class="flex items-center gap-4 p-4 bg-zinc-100 dark:bg-zinc-800/50 rounded-lg border border-zinc-200 dark:border-zinc-700/50 transition-all duration-200 hover:bg-zinc-200 dark:hover:bg-zinc-800"><div class="w-12 h-12 rounded-md bg-zinc-200 dark:bg-zinc-700 flex-shrink-0 overflow-hidden">`);
          if (track.albumArt) {
            _push(`<img${ssrRenderAttr("src", track.albumArt)}${ssrRenderAttr("alt", `${track.name} album art`)} class="w-full h-full object-cover" loading="lazy">`);
          } else {
            _push(`<div class="w-full h-full flex items-center justify-center">`);
            _push(ssrRenderComponent(_component_Icon, {
              name: "ph:music-note-simple-fill",
              class: "w-6 h-6 text-zinc-400"
            }, null, _parent));
            _push(`</div>`);
          }
          _push(`</div><div class="min-w-0 flex-1"><div class="flex items-start justify-between gap-2"><div class="min-w-0 flex-1"><h3 class="font-medium text-zinc-900 dark:text-zinc-100 truncate">`);
          if (track.url) {
            _push(`<a${ssrRenderAttr("href", track.url)} target="_blank" class="hover:text-violet-500 transition-colors">${ssrInterpolate(track.name)}</a>`);
          } else {
            _push(`<span>${ssrInterpolate(track.name)}</span>`);
          }
          _push(`</h3><p class="text-sm text-zinc-600 dark:text-zinc-400 truncate">${ssrInterpolate(track.artist)}</p>`);
          if (track.album) {
            _push(`<p class="text-xs text-zinc-500 dark:text-zinc-500 truncate">${ssrInterpolate(track.album)}</p>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><div class="flex-shrink-0">`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "simple-icons:lastdotfm",
            class: "w-4 h-4 text-[#d51007]"
          }, null, _parent));
          _push(`</div></div><p class="text-xs text-zinc-400 dark:text-zinc-500 mt-1">${ssrInterpolate(track.playedAt === "Şimdi çalıyor" ? track.playedAt : formatDate(track.playedAt))}</p></div></div></div>`);
        });
        _push(`<!--]--></div>`);
      } else if (!fetchError.value) {
        _push(`<div class="text-center py-8">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "simple-icons:lastdotfm",
          class: "w-12 h-12 text-[#d51007] mx-auto mb-3"
        }, null, _parent));
        _push(`<p class="text-zinc-600 dark:text-zinc-400">Henüz şarkı dinlememiş görünüyorsunuz</p></div>`);
      } else {
        _push(`<div class="text-center py-8">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "carbon:error",
          class: "w-12 h-12 text-red-500 mx-auto mb-3"
        }, null, _parent));
        _push(`<p class="text-red-600 dark:text-red-400">${ssrInterpolate(fetchError.value)}</p></div>`);
      }
      _push(`</div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-YBL09H7n.js.map
