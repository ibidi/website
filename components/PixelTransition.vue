<template>
  <div
    ref="containerRef"
    :class="[
      'pixel-transition-card relative overflow-hidden w-[300px] max-w-full rounded-[15px] border-2 border-white bg-[#222] text-white',
      className
    ]"
    :style="styleObject"
    @mouseenter="!isTouchDevice ? handleMouseEnter() : undefined"
    @mouseleave="!isTouchDevice ? handleMouseLeave() : undefined"
    @click="isTouchDevice ? handleClick() : undefined"
  >
    <div :style="{ paddingTop: aspectRatio }" />

    <div class="absolute inset-0 w-full h-full">
      <slot name="firstContent"></slot>
    </div>

    <div
      ref="activeRef"
      class="absolute inset-0 w-full h-full z-[2]"
      style="display: none;"
    >
      <slot name="secondContent"></slot>
    </div>

    <div
      ref="pixelGridRef"
      class="absolute inset-0 w-full h-full pointer-events-none z-[3]"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed, CSSProperties } from 'vue';
import { gsap } from 'gsap';

interface Props {
  gridSize?: number;
  pixelColor?: string;
  animationStepDuration?: number;
  className?: string;
  style?: CSSProperties;
  aspectRatio?: string;
}

const props = withDefaults(defineProps<Props>(), {
  gridSize: 7,
  pixelColor: 'currentColor',
  animationStepDuration: 0.3,
  className: '',
  style: () => ({}),
  aspectRatio: '100%',
});

const containerRef = ref<HTMLDivElement | null>(null);
const pixelGridRef = ref<HTMLDivElement | null>(null);
const activeRef = ref<HTMLDivElement | null>(null);
const delayedCallRef = ref<gsap.core.Tween | null>(null);

const isActive = ref<boolean>(false);
const isTouchDevice = ref<boolean>(false);

const styleObject = computed(() => props.style);

const createPixelGrid = () => {
  const pixelGridEl = pixelGridRef.value;
  if (!pixelGridEl) return;

  pixelGridEl.innerHTML = ''; // Clear previous pixels

  for (let row = 0; row < props.gridSize; row++) {
    for (let col = 0; col < props.gridSize; col++) {
      const pixel = document.createElement('div');
      pixel.classList.add('pixel-transition-card__pixel', 'absolute', 'hidden');
      pixel.style.backgroundColor = props.pixelColor;

      const size = 100 / props.gridSize;
      pixel.style.width = `${size}%`;
      pixel.style.height = `${size}%`;
      pixel.style.left = `${col * size}%`;
      pixel.style.top = `${row * size}%`;

      pixelGridEl.appendChild(pixel);
    }
  }
};

onMounted(() => {
  isTouchDevice.value =
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    window.matchMedia('(pointer: coarse)').matches;
  
  createPixelGrid();
});

// Recreate grid if gridSize or pixelColor changes
// watch([() => props.gridSize, () => props.pixelColor], createPixelGrid);
// For simplicity, assuming these don't change after mount for now.

const animatePixels = (activate: boolean): void => {
  isActive.value = activate;

  const pixelGridEl = pixelGridRef.value;
  const activeEl = activeRef.value;
  if (!pixelGridEl || !activeEl) return;

  const pixels = pixelGridEl.querySelectorAll<HTMLDivElement>(
    '.pixel-transition-card__pixel'
  );
  if (!pixels.length) return;

  gsap.killTweensOf(pixels);
  if (delayedCallRef.value) {
    delayedCallRef.value.kill();
  }

  gsap.set(pixels, { display: 'none' });

  const totalPixels = pixels.length;
  const staggerDuration = props.animationStepDuration / totalPixels;

  gsap.to(pixels, {
    display: 'block',
    duration: 0,
    stagger: {
      each: staggerDuration,
      from: 'random',
    },
  });

  delayedCallRef.value = gsap.delayedCall(props.animationStepDuration, () => {
    if (activeEl) { // Ensure activeEl is still there
        activeEl.style.display = activate ? 'block' : 'none';
        activeEl.style.pointerEvents = activate ? 'none' : '';
    }
  });

  gsap.to(pixels, {
    display: 'none',
    duration: 0,
    delay: props.animationStepDuration,
    stagger: {
      each: staggerDuration,
      from: 'random',
    },
  });
};

const handleMouseEnter = (): void => {
  if (!isActive.value) animatePixels(true);
};
const handleMouseLeave = (): void => {
  if (isActive.value) animatePixels(false);
};
const handleClick = (): void => {
  animatePixels(!isActive.value);
};

onUnmounted(() => {
  if (delayedCallRef.value) {
    delayedCallRef.value.kill();
  }
  // Kill any ongoing GSAP animations related to pixels if component is destroyed
  const pixelGridEl = pixelGridRef.value;
  if (pixelGridEl) {
    const pixels = pixelGridEl.querySelectorAll<HTMLDivElement>('.pixel-transition-card__pixel');
    if (pixels.length) {
        gsap.killTweensOf(pixels);
    }
  }
});

</script>

<style scoped>
/* Scoped styles for the pixel itself if needed, though most is inline */
.pixel-transition-card__pixel {
  /* Base styles are set via JS */
}
</style>
