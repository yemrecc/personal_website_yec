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
    
    <!-- Center Pink (Removed because it caused purple hue in the middle) -->

    <!-- 3. Floating Particles (Ambient Stars) -->
    <div class="absolute inset-0 overflow-hidden">
      <div v-for="i in 80" :key="`star-${i}`" class="star" :style="getStarStyle(i)" />
    </div>

    <!-- 4. Shooting Stars -->
    <div class="absolute inset-0 overflow-hidden">
      <div v-for="i in 12" :key="`shooting-${i}`" class="shooting-star" :style="getShootingStarStyle(i)" />
    </div>

  </div>
</template>

<script setup lang="ts">
// Generate random styles for ambient particles
const getStarStyle = (i: number) => {
  const size = Math.random() * 2 + 1; // 1px to 3px
  const top = Math.random() * 100;
  const left = Math.random() * 100;
  const duration = Math.random() * 15 + 15; // 15s to 30s
  const delay = Math.random() * -30; // randomize start time

  return {
    width: `${size}px`,
    height: `${size}px`,
    top: `${top}%`,
    left: `${left}%`,
    animationDuration: `${duration}s`,
    animationDelay: `${delay}s`,
  };
}

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

/* Floating Stars */
.star {
  position: absolute;
  background-color: white;
  border-radius: 50%;
  box-shadow: 0 0 10px 2px rgba(255,255,255,0.3);
  opacity: 0;
  animation: float-star linear infinite;
}

@keyframes float-star {
  0% { transform: translateY(0) scale(0); opacity: 0; }
  10% { transform: translateY(-5vh) scale(1); opacity: 0.8; }
  90% { transform: translateY(-35vh) scale(1); opacity: 0.8; }
  100% { transform: translateY(-40vh) scale(0); opacity: 0; }
}

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
