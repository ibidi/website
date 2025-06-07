<template>
  <div class="animated-code-background">
    <span
      v-for="particle in particles"
      :key="particle.id"
      class="code-particle"
      :style="particle.style"
      aria-hidden="true"
    >
      {{ particle.text }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

interface Particle {
  id: number;
  text: string;
  style: Record<string, string>;
}

const particles = ref<Particle[]>([]);
const codeSnippets = [
  '</>', '{}', '=>', '//', '/* */', '()', '[]', '&&', '||',
  '!=', '===', '<div>', '<span>', 'class', 'func', 'const', 'let',
  'import', 'export', 'async', 'await', 'px', 'rem', 'em', 'flex',
  'grid', 'useState', 'useEffect', '() =>', '=> {}', '#include',
  'System.out', 'public static void', 'SELECT *', 'FROM users',
  '*.py', '!.js', '<h1>', '<p>', '<a>', 'git commit',
  'npm install', 'yarn add', 'err :=', 'if err != nil',
  'try {', '} catch', 'Exception', '=> R', '<T>', 'fn()'
];
const numParticles = 50; // Number of particles

const generateParticleStyle = () => {
  const duration = Math.random() * 20 + 15; // 15-35 seconds for a slow, long animation
  const delay = Math.random() * duration;      // Staggered start times up to one full cycle
  const initialX = Math.random() * 100;
  // Start below the viewport and move up
  const initialY = 100 + Math.random() * 30;
  const fontSize = Math.random() * 8 + 10; // 10px to 18px, keeping them small
  // Particle opacity will be further dimmed by the layer's overall opacity
  const particleOpacity = (Math.random() * 0.5 + 0.5).toFixed(2); // 0.5 to 1.0

  return {
    position: 'absolute',
    left: `${initialX}vw`,
    top: `${initialY}vh`,
    fontSize: `${fontSize}px`,
    '--initial-particle-opacity': particleOpacity,
    '--initial-rotate': `${Math.random() * 50 - 25}deg`, // -25 to +25 deg rotation
    '--drift-x-factor': `${(Math.random() - 0.5) * 0.1}`,
    '--rotation-change': `${Math.random() * 20 - 10}deg`, // -10 to +10 deg change during anim
    animation: `float ${duration}s linear ${delay}s infinite`,
  };
};

onMounted(() => {
  if (typeof window !== 'undefined') { // Ensure this runs only on client-side
    for (let i = 0; i < numParticles; i++) {
      particles.value.push({
        id: i,
        text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
        style: generateParticleStyle(),
      });
    }
  }
});

</script>

<style scoped>
.animated-code-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -10; /* Ensure it's well behind other content, even modals if they are z-index: -1 */
  overflow: hidden;
  pointer-events: none; /* Allow clicks to pass through */
  opacity: 0.3; /* Layer opacity: 30% opaque / 70% transparent */
  /* Subtle text color, particles inherit this */
  @apply text-zinc-400 dark:text-zinc-600;
}

.code-particle {
  font-family: 'Fira Code', 'Source Code Pro', 'Menlo', 'Consolas', monospace;
  user-select: none;
  color: currentColor;
  will-change: transform, opacity; /* Hint for browser optimization */
}

@keyframes float {
  0% {
    /* Start at its initial 'top' (below screen) and initial rotation */
    transform: translateY(0) rotate(var(--initial-rotate, 0deg));
    opacity: 0; /* Start faded out */
  }
  15% {
    /* Fade in */
    opacity: var(--initial-particle-opacity);
  }
  85% {
    /* Stay visible */
    opacity: var(--initial-particle-opacity);
  }
  100% {
    /* Move up by 130vh from its starting Y, plus some horizontal drift based on duration */
    /* The drift-x-factor is small, e.g., 0.05. Multiplied by 130 gives ~6.5vw drift */
    transform: translateY(-130vh) translateX(calc(var(--drift-x-factor) * 130vw)) rotate(calc(var(--initial-rotate, 0deg) + var(--rotation-change, 0deg)));
    opacity: 0; /* Fade out */
  }
}
</style>
