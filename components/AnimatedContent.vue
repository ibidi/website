<template>
  <div ref="animatedRef">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Props {
  distance?: number;
  direction?: 'vertical' | 'horizontal';
  reverse?: boolean;
  duration?: number;
  ease?: string | ((progress: number) => number);
  initialOpacity?: number;
  animateOpacity?: boolean;
  scale?: number;
  threshold?: number;
  delay?: number;
  onComplete?: () => void;
}

const props = withDefaults(defineProps<Props>(), {
  distance: 100,
  direction: 'vertical',
  reverse: false,
  duration: 0.8,
  ease: 'power3.out',
  initialOpacity: 0,
  animateOpacity: true,
  scale: 1,
  threshold: 0.1, // Percentage of element in view to trigger
  delay: 0,
});

const animatedRef = ref<HTMLDivElement | null>(null);
let scrollTriggerInstance: ScrollTrigger | null = null;
let tweenInstance: gsap.core.Tween | null = null;

const animate = () => {
  const el = animatedRef.value;
  if (!el) return;

  // Kill previous instances if re-animating (e.g., due to prop changes)
  if (scrollTriggerInstance) {
    scrollTriggerInstance.kill();
  }
  if (tweenInstance) {
    tweenInstance.kill();
  }

  const axis = props.direction === 'horizontal' ? 'x' : 'y';
  const offset = props.reverse ? -props.distance : props.distance;
  const startPct = (1 - props.threshold) * 100;

  gsap.set(el, {
    [axis]: offset,
    scale: props.scale,
    opacity: props.animateOpacity ? props.initialOpacity : 1,
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
      toggleActions: 'play none none none',
      once: true,
      onEnter: () => {
        // console.log('ScrollTrigger entered for:', el);
      },
    },
  });
  scrollTriggerInstance = tweenInstance.scrollTrigger;
};

onMounted(() => {
  // Ensure DOM is ready
  if (animatedRef.value) {
    animate();
  }
});

// Watch for prop changes that might require re-initializing the animation
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
    props.delay,
  ],
  () => {
    if (animatedRef.value) {
      animate(); // Re-run animation setup if props change
    }
  },
  { deep: true }
);

onUnmounted(() => {
  if (scrollTriggerInstance) {
    scrollTriggerInstance.kill();
  }
  if (tweenInstance) {
    tweenInstance.kill();
  }
  // Clean up all ScrollTriggers associated with the element, just in case
  if (animatedRef.value) {
    ScrollTrigger.getAll().forEach(trigger => {
      if (trigger.trigger === animatedRef.value) {
        trigger.kill();
      }
    });
    gsap.killTweensOf(animatedRef.value);
  }
});

</script>

<style scoped>
/* Add any specific styles for the wrapper if needed */
div {
  /* Default to visible to prevent issues if JS fails, GSAP will handle initial state */
  visibility: visible; 
}
</style>
