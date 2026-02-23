<template>
  <header
    ref="navEl"
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
    :class="scrolled ? 'py-3 glass-strong border-b border-white/5 shadow-lg shadow-black/20' : 'py-4 lg:py-6'"
  >
    <nav class="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
      <!-- Logo -->
      <a href="/" class="font-display font-bold text-lg sm:text-xl tracking-tight group">
        <span class="text-white group-hover:text-glow transition-all duration-300">YE</span>
        <span class="text-gradient">C</span>
        <span class="text-zinc-600 group-hover:text-zinc-400 transition-colors">.</span>
      </a>

      <!-- CTA -->
      <a
        href="https://linkedin.com/in/yemrecc"
        target="_blank"
        rel="noopener noreferrer"
        class="group relative flex items-center gap-2.5 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold border border-sky-500/20 bg-sky-500/5 text-sky-400 hover:bg-sky-500/10 hover:border-sky-400/50 hover:shadow-[0_0_20px_rgba(56,189,248,0.15)] transition-all duration-300 overflow-hidden"
      >
        <!-- Custom breathing dot instead of generic ping -->
        <span class="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2 items-center justify-center">
          <span class="animate-glow-pulse absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-1 sm:h-1.5 w-1 sm:w-1.5 bg-sky-400"></span>
        </span>
        <span class="relative z-10 group-hover:text-glow transition-all text-shadow-sm">Let's Talk</span>
        
        <!-- Subtle inner highlight -->
        <div class="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </a>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const navEl = ref<HTMLElement | null>(null)

function onScroll() {
  scrolled.value = window.scrollY > 40
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>
