<template>
  <canvas ref="canvasRef" class="w-full h-full border-none block fixed top-0 left-0 -z-10"></canvas>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue';

type CanvasStrokeStyle = string | CanvasGradient | CanvasPattern;

interface GridOffset {
  x: number;
  y: number;
}

interface SquaresProps {
  direction?: "diagonal" | "up" | "right" | "down" | "left";
  speed?: number;
  borderColor?: CanvasStrokeStyle;
  squareSize?: number;
  hoverFillColor?: CanvasStrokeStyle;
}

const props = withDefaults(defineProps<SquaresProps>(), {
  direction: "right",
  speed: 0.5, // Default hızı 0.5 olarak değiştirdim, orijinal React kodunda 1 idi.
  borderColor: "#3f3f46", // Daha koyu bir tema için border rengini zinc-700'e yakın ayarladım.
  squareSize: 40,
  hoverFillColor: "#27272a", // Hover rengini zinc-800'e yakın ayarladım.
});

const canvasRef = ref<HTMLCanvasElement | null>(null);
const requestRef = ref<number | null>(null);
const numSquaresX = ref<number>(0);
const numSquaresY = ref<number>(0);
const gridOffset = ref<GridOffset>({ x: 0, y: 0 });
const hoveredSquareRef = ref<GridOffset | null>(null);

const drawGrid = () => {
  const canvas = canvasRef.value;
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const startX = Math.floor(gridOffset.value.x / props.squareSize) * props.squareSize;
  const startY = Math.floor(gridOffset.value.y / props.squareSize) * props.squareSize;

  for (let i = 0; i < numSquaresX.value; i++) {
    for (let j = 0; j < numSquaresY.value; j++) {
      const squareX = i * props.squareSize - (gridOffset.value.x % props.squareSize);
      const squareY = j * props.squareSize - (gridOffset.value.y % props.squareSize);

      if (
        hoveredSquareRef.value &&
        i === hoveredSquareRef.value.x &&
        j === hoveredSquareRef.value.y
      ) {
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
  // Arka plan gradient'ını sitenin genel temasına uygun hale getirdim (çok koyu gri -> siyah)
  gradient.addColorStop(0, "rgba(10, 10, 10, 0)"); // Daha yumuşak bir geçiş için alpha değeri
  gradient.addColorStop(1, "#09090b"); // Tailwind zinc-950

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
};

const updateAnimation = () => {
  const effectiveSpeed = Math.max(props.speed, 0.1);
  switch (props.direction) {
    case "right":
      gridOffset.value.x = (gridOffset.value.x - effectiveSpeed + props.squareSize * numSquaresX.value) % (props.squareSize * numSquaresX.value); 
      break;
    case "left":
      gridOffset.value.x = (gridOffset.value.x + effectiveSpeed) % (props.squareSize * numSquaresX.value);
      break;
    case "up":
      gridOffset.value.y = (gridOffset.value.y + effectiveSpeed) % (props.squareSize * numSquaresY.value);
      break;
    case "down":
      gridOffset.value.y = (gridOffset.value.y - effectiveSpeed + props.squareSize * numSquaresY.value) % (props.squareSize * numSquaresY.value);
      break;
    case "diagonal":
      gridOffset.value.x = (gridOffset.value.x - effectiveSpeed + props.squareSize * numSquaresX.value) % (props.squareSize * numSquaresX.value);
      gridOffset.value.y = (gridOffset.value.y - effectiveSpeed + props.squareSize * numSquaresY.value) % (props.squareSize * numSquaresY.value);
      break;
    default:
      break;
  }

  drawGrid();
  requestRef.value = requestAnimationFrame(updateAnimation);
};

const handleMouseMove = (event: MouseEvent) => {
  const canvas = canvasRef.value;
  if (!canvas) return;
  const rect = canvas.getBoundingClientRect();
  const mouseX = event.clientX - rect.left;
  const mouseY = event.clientY - rect.top;

  const hoveredSquareX = Math.floor((mouseX + (gridOffset.value.x % props.squareSize)) / props.squareSize);
  const hoveredSquareY = Math.floor((mouseY + (gridOffset.value.y % props.squareSize)) / props.squareSize);

  if (
    hoveredSquareX >= 0 && hoveredSquareX < numSquaresX.value &&
    hoveredSquareY >= 0 && hoveredSquareY < numSquaresY.value
  ) {
    if(
      !hoveredSquareRef.value ||
      hoveredSquareRef.value.x !== hoveredSquareX ||
      hoveredSquareRef.value.y !== hoveredSquareY
    ) {
      hoveredSquareRef.value = { x: hoveredSquareX, y: hoveredSquareY };
    }
  } else {
    hoveredSquareRef.value = null;
  }
};

const handleMouseLeave = () => {
  hoveredSquareRef.value = null;
};

const resizeCanvas = () => {
  const canvas = canvasRef.value;
  if (!canvas) return;
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
  numSquaresX.value = Math.ceil(canvas.width / props.squareSize) + 1;
  numSquaresY.value = Math.ceil(canvas.height / props.squareSize) + 1;
  drawGrid(); // Yeniden boyutlandırmadan sonra hemen çiz
};

onMounted(() => {
  const canvas = canvasRef.value;
  if (!canvas) return;

  resizeCanvas(); // İlk boyutlandırma
  window.addEventListener("resize", resizeCanvas);
  
  canvas.addEventListener("mousemove", handleMouseMove);
  canvas.addEventListener("mouseleave", handleMouseLeave);
  requestRef.value = requestAnimationFrame(updateAnimation);
});

onUnmounted(() => {
  window.removeEventListener("resize", resizeCanvas);
  if (requestRef.value) {
    cancelAnimationFrame(requestRef.value);
  }
  const canvas = canvasRef.value;
  if (canvas) {
    canvas.removeEventListener("mousemove", handleMouseMove);
    canvas.removeEventListener("mouseleave", handleMouseLeave);
  }
});

// Props değiştiğinde animasyonu ve çizimi yeniden başlatmak için watch kullanılabilir (isteğe bağlı)
watch(() => [props.direction, props.speed, props.borderColor, props.hoverFillColor, props.squareSize], () => {
  // Animasyonu durdur ve yeniden başlat veya sadece çizimi güncelle
  // Bu örnekte, basitlik adına sadece yeniden çizim yapılıyor, ancak daha karmaşık senaryolarda animasyonun sıfırlanması gerekebilir.
  if (canvasRef.value) {
     // Ayarlar değiştiğinde gridOffset'i sıfırlamak isteyebilirsiniz.
    // gridOffset.value = { x: 0, y: 0 };
    resizeCanvas(); // Boyutları ve kare sayılarını güncelleyip yeniden çizer
  }
}, { deep: true });

</script>

<style scoped>
/* Canvas'ın tüm ekranı kaplaması ve diğer içeriklerin üzerinde olmaması için */
canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw; /* Viewport width */
  height: 100vh; /* Viewport height */
  z-index: -1; /* Diğer içeriklerin arkasında kalması için */
  display: block; /* Ekstra boşlukları engellemek için */
}
</style>
