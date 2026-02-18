<template>
  <component 
    :is="tag"
    :class="['shiny-text-wrapper bg-clip-text inline-block', { 'animate-shine': !disabled }, className]"
    :style="shinyStyle"
  >
    {{ text }}
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  text: string;
  tag?: string;
  disabled?: boolean;
  speed?: number; // Animation duration in seconds
  className?: string;
}

const props = withDefaults(defineProps<Props>(), {
  tag: 'div', // Default tag
  disabled: false,
  speed: 5,
  className: '',
});

const animationDuration = computed(() => `${props.speed}s`);

// Check if dark mode
const isDark = computed(() => {
  if (typeof window === 'undefined') return true;
  return document.documentElement.classList.contains('dark');
});

const shinyStyle = computed(() => ({
  color: isDark.value ? 'rgba(181, 181, 181, 0.64)' : 'rgba(24, 24, 27, 0.95)', // zinc-900 for light mode
  backgroundImage: isDark.value 
    ? 'linear-gradient(120deg, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 60%)'
    : 'linear-gradient(120deg, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0) 60%)',
  backgroundSize: '200% 100%',
  WebkitBackgroundClip: 'text',
  animationDuration: animationDuration.value,
}));

</script>

<style scoped>
/* Tailwind's JIT mode should pick up 'animate-shine' if defined in tailwind.config.js */
/* No additional scoped styles needed if Tailwind animation is set up correctly. */
.shiny-text-wrapper {
  /* Ensure text color is applied if not using bg-clip-text for some reason or as fallback */
  /* color: transparent; */ /* This might be needed if text color isn't properly handled by bg-clip */
}
</style>
