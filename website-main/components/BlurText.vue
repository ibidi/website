<template>
  <component :is="tag" ref="targetRef" :class="['blur-text-wrapper', className]">
    <TransitionGroup 
      tag="span" 
      name="blur-segment"
      class="inline-block"
      @after-enter="checkIfLastAnimated"
    >
      <span
        v-for="(segment, index) in segments"
        :key="index"
        class="blur-text-segment inline-block"
        :style="{
          '--segment-delay': `${index * delay}ms`,
          '--segment-duration': `${duration}ms`,
          '--initial-y': direction === 'top' ? '-20px' : '20px'
        }"
        :data-index="index"
      >
        {{ segment === ' ' ? '\u00A0' : segment }}
      </span>
    </TransitionGroup>
  </component>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useIntersectionObserver } from '@vueuse/core';

interface Props {
  text: string;
  tag?: string;
  delay?: number; // Stagger delay for each segment in ms
  duration?: number; // Animation duration for one segment in ms
  className?: string;
  animateBy?: 'words' | 'letters';
  direction?: 'top' | 'bottom';
  onAnimationComplete?: () => void;
}

const props = withDefaults(defineProps<Props>(), {
  tag: 'p',
  delay: 100,
  duration: 600,
  animateBy: 'words',
  direction: 'top',
  className: '',
});

const targetRef = ref<HTMLElement | null>(null);
const isInView = ref(false);

const segments = computed(() => {
  if (props.animateBy === 'letters') {
    return props.text.split('');
  }
  // For words, split by space and add spaces back for rendering
  const words = props.text.split(' ');
  const result: string[] = [];
  words.forEach((word, index) => {
    result.push(word);
    if (index < words.length - 1) {
      result.push(' '); // Add space as a separate segment
    }
  });
  return result;
});

useIntersectionObserver(
  targetRef,
  ([{ isIntersecting }]) => {
    if (isIntersecting && !isInView.value) {
      isInView.value = true;
      // Apply class to wrapper to trigger animation for children
      if (targetRef.value) {
        targetRef.value.classList.add('in-view');
      }
    }
  },
  { threshold: 0.1 }
);

let animatedCount = 0;
const checkIfLastAnimated = (el: Element) => {
  // This event fires for each segment after it enters.
  // We need to count them to know when all have finished.
  animatedCount++;
  if (animatedCount === segments.value.length) {
    props.onAnimationComplete?.();
  }
};

onMounted(() => {
  // Reset for potential re-trigger if component is kept alive and re-observed
  animatedCount = 0;
});

</script>

<style scoped>
.blur-text-wrapper {
  display: flex; /* Changed to flex to handle word spacing better */
  flex-wrap: wrap; /* Allow segments to wrap */
}

.blur-text-segment {
  opacity: 0;
  filter: blur(8px);
  transform: translateY(var(--initial-y));
  transition-property: opacity, filter, transform;
  transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
  /* Default state, animation is triggered by parent .in-view class */
}

.blur-text-wrapper.in-view .blur-text-segment {
  opacity: 1;
  filter: blur(0px);
  transform: translateY(0);
  transition-duration: var(--segment-duration);
  transition-delay: var(--segment-delay);
}

/* Ensure non-breaking spaces are rendered correctly if they are segments */
.blur-text-segment:empty::before {
  content: "\00a0";
}
</style>
