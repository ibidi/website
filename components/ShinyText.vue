<template>
  <component 
    :is="tag"
    :class="['shiny-text-wrapper bg-clip-text inline-block', { 'animate-shine': !disabled }, className]"
    :style="{
      color: 'rgba(181, 181, 181, 0.64)', // Equivalent to text-[#b5b5b5a4]
      backgroundImage: 'linear-gradient(120deg, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 60%)',
      backgroundSize: '200% 100%',
      WebkitBackgroundClip: 'text',
      animationDuration: animationDuration,
    }"
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

</script>

<style scoped>
/* Tailwind's JIT mode should pick up 'animate-shine' if defined in tailwind.config.js */
/* No additional scoped styles needed if Tailwind animation is set up correctly. */
.shiny-text-wrapper {
  /* Ensure text color is applied if not using bg-clip-text for some reason or as fallback */
  /* color: transparent; */ /* This might be needed if text color isn't properly handled by bg-clip */
}
</style>
