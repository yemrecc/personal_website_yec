<template>
  <div class="fixed inset-0 z-0 overflow-hidden bg-[#030303] pointer-events-none">
    
    <!-- 1. Animated Perspective Grid -->
    <div class="absolute inset-x-0 bottom-0 h-[80vh] grid-perspective opacity-[0.15]">
      <div class="grid-plane animate-grid-flow" />
    </div>
    
    <!-- Radial mask to fade out grid at edges and top -->
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#030303_100%)]" />
    <div class="absolute inset-0 bg-gradient-to-b from-[#030303] via-transparent to-[#030303]" />

    <!-- 2. Animated Aurora/Glow Layers -->
    <!-- Top Left Blue -->
    <div class="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-sky-500/10 blur-[120px] mix-blend-screen animate-aurora-1" />
    
    <!-- Bottom Right Deep Blue (was Purple) -->
    <div class="absolute -bottom-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-indigo-500/5 blur-[150px] mix-blend-screen animate-aurora-2" />
    
    <!-- 3. Interactive Floating Particles (Ambient Stars via Canvas) -->
    <!-- We remove pointer-events-none locally here OR handle window mouse events -->
    <!-- The parent div has pointer-events-none, so we must track window.onmousemove instead of canvas events -->
    <canvas ref="starsCanvas" class="absolute inset-0 w-full h-full opacity-80" />

    <!-- 4. Shooting Stars -->
    <div class="absolute inset-0 overflow-hidden">
      <div v-for="i in 12" :key="`shooting-${i}`" class="shooting-star" :style="getShootingStarStyle(i)" />
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// --- Canvas Interactive Stars Setup ---
const starsCanvas = ref<HTMLCanvasElement | null>(null)
let ctx: CanvasRenderingContext2D | null = null
let animationFrameId: number

// Particle Config
const NUM_STARS = 200
const REPULSE_RADIUS = 120 // How close mouse needs to be to scatter
const REPULSE_FORCE = 3   // How fast they scatter

interface Star {
  x: number
  y: number
  size: number
  speedY: number
  baseSpeedY: number
  vx: number
  vy: number
  opacity: number
}

const stars: Star[] = []
let mouse = { x: -1000, y: -1000 }

// Window resize handler
const resizeCanvas = () => {
  if (!starsCanvas.value) return
  starsCanvas.value.width = window.innerWidth
  starsCanvas.value.height = window.innerHeight
}

// Mouse movement tracker (since container is pointer-events-none, we listen on window)
const handleMouseMove = (e: MouseEvent) => {
  mouse.x = e.clientX
  mouse.y = e.clientY
}

const handleMouseLeave = () => {
  mouse.x = -1000
  mouse.y = -1000
}

const initStars = () => {
  stars.length = 0
  if (!starsCanvas.value) return
  const w = starsCanvas.value.width
  const h = starsCanvas.value.height

  for (let i = 0; i < NUM_STARS; i++) {
    const size = Math.random() * 1.5 + 0.5 // 0.5px to 2px
    const baseSpeedY = Math.random() * 0.3 + 0.1 // Drift upward
    
    stars.push({
      x: Math.random() * w,
      y: Math.random() * h,
      size,
      baseSpeedY,
      speedY: baseSpeedY,
      vx: 0,
      vy: 0,
      opacity: Math.random() * 0.5 + 0.2
    })
  }
}

const updateAndDrawStars = () => {
  if (!starsCanvas.value || !ctx) return
  const w = starsCanvas.value.width
  const h = starsCanvas.value.height

  ctx.clearRect(0, 0, w, h)

  for (let i = 0; i < stars.length; i++) {
    const star = stars[i]
    if (!star) continue

    // Calculate distance to mouse
    const dx = mouse.x - star.x
    const dy = mouse.y - star.y
    const distance = Math.sqrt(dx * dx + dy * dy)

    // Repulsion logic
    if (distance < REPULSE_RADIUS) {
      // Force inversely proportional to distance
      const forceLocation = (REPULSE_RADIUS - distance) / REPULSE_RADIUS
      const angle = Math.atan2(dy, dx)
      
      // Push away from mouse (-cos/sin)
      star.vx -= Math.cos(angle) * forceLocation * REPULSE_FORCE
      star.vy -= Math.sin(angle) * forceLocation * REPULSE_FORCE
    }

    // Apply friction to scattering
    star.vx *= 0.92
    star.vy *= 0.92

    // Move star
    star.x += star.vx
    star.y += star.vy - star.baseSpeedY // base vertical upward drift

    // Wrap around screen edges
    if (star.y < -10) {
      star.y = h + 10
      star.x = Math.random() * w
      star.vx = 0
      star.vy = 0
    }
    if (star.x < -10) star.x = w + 10
    if (star.x > w + 10) star.x = -10
    if (star.y > h + 10) star.y = -10

    // Draw
    ctx.beginPath()
    ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`
    ctx.shadowBlur = star.size * 2
    ctx.shadowColor = 'rgba(255, 255, 255, 0.4)'
    ctx.fill()
  }

  animationFrameId = requestAnimationFrame(updateAndDrawStars)
}
// --- End Canvas Interactive Stars ---

// Generate random styles for shooting stars
const getShootingStarStyle = (i: number) => {
  const top = Math.random() * 50; // spawn in top half
  const left = Math.random() * 100;
  const duration = Math.random() * 5 + 5; // 5s to 10s repeat loop
  const delay = Math.random() * 15; // Random start offsets

  return {
    top: `${top}%`,
    left: `${left}%`,
    animationDuration: `${duration}s`,
    animationDelay: `${delay}s`,
  };
}

onMounted(() => {
  // Setup interactive stars
  if (starsCanvas.value) {
    ctx = starsCanvas.value.getContext('2d')
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)
    
    initStars()
    updateAndDrawStars()
  }
})

onUnmounted(() => {
  // Cleanup
  window.removeEventListener('resize', resizeCanvas)
  window.removeEventListener('mousemove', handleMouseMove)
  window.removeEventListener('mouseleave', handleMouseLeave)
  cancelAnimationFrame(animationFrameId)
})
</script>

<style scoped>
/* Grid Perspective */
.grid-perspective {
  perspective: 1000px;
  transform-style: preserve-3d;
}

.grid-plane {
  position: absolute;
  inset: -100% -100% 0 -100%;
  background-image: 
    linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px);
  background-size: 60px 60px;
  transform: rotateX(75deg) translateZ(-200px);
  transform-origin: top center;
}

/* Animate the grid moving towards the viewer */
@keyframes grid-flow {
  0% { transform: rotateX(75deg) translateZ(-200px) translateY(0); }
  100% { transform: rotateX(75deg) translateZ(-200px) translateY(60px); }
}

.animate-grid-flow {
  animation: grid-flow 3s linear infinite;
}

/* Aurora Animations */
@keyframes aurora-1 {
  0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
  33% { transform: translate(15%, 10%) scale(1.1) rotate(10deg); }
  66% { transform: translate(-5%, 20%) scale(0.9) rotate(-5deg); }
}

@keyframes aurora-2 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(-10%, -15%) scale(1.05); }
  66% { transform: translate(10%, 5%) scale(1.15); }
}

@keyframes aurora-3 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(20%, -10%) scale(1.1); }
  66% { transform: translate(-15%, 15%) scale(0.95); }
}

.animate-aurora-1 { animation: aurora-1 25s ease-in-out infinite alternate; }
.animate-aurora-2 { animation: aurora-2 30s ease-in-out infinite alternate-reverse; }
.animate-aurora-3 { animation: aurora-3 35s ease-in-out infinite alternate; }

/* Shooting Stars */
.shooting-star {
  position: absolute;
  width: 120px;
  height: 2px;
  background: linear-gradient(90deg, rgba(255,255,255,0.8), transparent border-box);
  border-radius: 50%;
  opacity: 0;
  transform: rotate(-135deg); /* Moves top-right to bottom-left */
  animation: shooting-star linear infinite;
  box-shadow: 0 0 15px rgba(255,255,255,0.5);
}

@keyframes shooting-star {
  0% { transform: translate(0, 0) rotate(-45deg); opacity: 0; }
  2% { opacity: 1; height: 3px; }
  10% { transform: translate(-40vw, 40vh) rotate(-45deg); opacity: 0; height: 1px; width: 0px; }
  100% { transform: translate(-40vw, 40vh) rotate(-45deg); opacity: 0; }
}
</style>
