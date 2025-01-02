<template>
  <div class="snow-container">
    <div 
      v-for="n in 100" 
      :key="n" 
      class="snow"
      :style="{
        left: `${Math.random() * 100}vw`,
        opacity: 0.2 + Math.random() * 0.3,
        animationDelay: `-${Math.random() * 5}s`,
        animationDuration: `${3 + Math.random() * 2}s`,
        width: `${2 + Math.random() * 3}px`,
        height: `${2 + Math.random() * 3}px`
      }"
    ></div>
  </div>
</template>

<style scoped>
.snow-container {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 20;
  overflow: hidden;
}

.snow {
  position: absolute;
  background: white;
  border-radius: 50%;
  filter: blur(1px);
  animation: snow linear infinite;
  top: -10px;
}

@keyframes snow {
  0% {
    transform: translateY(-10px) translateX(-20px) rotate(0deg);
    opacity: 0;
  }
  20% {
    opacity: 0.5;
  }
  100% {
    transform: translateY(100vh) translateX(20px) rotate(360deg);
    opacity: 0;
  }
}

/* Karanlık tema için kar tanelerinin rengini ayarla */
:root[class='dark'] .snow {
  background: theme('colors.zinc.100');
}

/* Kar tanelerinin rüzgar efekti */
.snow:nth-child(3n) {
  animation-name: snow-wind;
}

@keyframes snow-wind {
  0% {
    transform: translateY(-10px) translateX(-20px) rotate(0deg);
    opacity: 0;
  }
  20% {
    opacity: 0.5;
  }
  100% {
    transform: translateY(100vh) translateX(50px) rotate(360deg);
    opacity: 0;
  }
}
</style> 