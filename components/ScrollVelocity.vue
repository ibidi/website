<template>
  <section class="relative overflow-hidden">
    <div 
      v-for="(text, index) in texts" 
      :key="index"
      class="relative overflow-hidden py-2"
      :class="parallaxClassName"
      :style="parallaxStyle"
    >
      <div 
        class="flex whitespace-nowrap text-center font-sans text-2xl md:text-4xl font-bold tracking-[-0.02em] drop-shadow animate-scroll"
        :class="[
          scrollerClassName,
          index % 2 !== 0 ? 'animate-scroll-reverse' : 'animate-scroll'
        ]"
        :style="{ 
          animationDuration: `${60 / Math.abs(velocity)}s`,
          ...scrollerStyle 
        }"
      >
        <span 
          v-for="i in numCopies" 
          :key="i"
          class="flex-shrink-0 mr-8"
          :class="className"
        >
          {{ text }}&nbsp;
        </span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  texts: string[]
  velocity?: number
  className?: string
  numCopies?: number
  parallaxClassName?: string
  scrollerClassName?: string
  parallaxStyle?: Record<string, any>
  scrollerStyle?: Record<string, any>
}

withDefaults(defineProps<Props>(), {
  velocity: 100,
  className: '',
  numCopies: 6,
  parallaxClassName: '',
  scrollerClassName: '',
  parallaxStyle: () => ({}),
  scrollerStyle: () => ({})
})
</script>

<style scoped>
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

@keyframes scroll-reverse {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
}

.animate-scroll {
  animation: scroll linear infinite;
}

.animate-scroll-reverse {
  animation: scroll-reverse linear infinite;
}
</style> 