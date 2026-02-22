<template>
  <div class="relative min-h-screen bg-[#030303]">
    <!-- Dynamic animated background -->
    <DynamicBackground />

    <!-- Navigation -->
    <AppNav />

    <!-- Page content -->
    <main class="relative z-10">
      <slot />
    </main>
  </div>
</template>

<style scoped>
@keyframes drift-slow {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(30px, -20px) scale(1.05); }
}
@keyframes drift-slow-reverse {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(-25px, 15px) scale(1.03); }
}
.animate-drift-slow {
  animation: drift-slow 20s ease-in-out infinite;
}
.animate-drift-slow-reverse {
  animation: drift-slow-reverse 25s ease-in-out infinite;
}
</style>
