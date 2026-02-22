<template>
  <header
    ref="navEl"
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
    :class="scrolled ? 'py-3 glass-strong border-b border-white/5 shadow-lg shadow-black/10' : 'py-6'"
  >
    <nav class="max-w-6xl mx-auto px-6 flex items-center justify-between">
      <!-- Logo -->
      <a href="#hero" class="font-display font-bold text-xl tracking-tight group">
        <span class="text-white group-hover:text-glow transition-all duration-300">YE</span>
        <span class="text-gradient">C</span>
        <span class="text-zinc-600 group-hover:text-zinc-400 transition-colors">.</span>
      </a>

      <!-- CTA -->
      <a
        href="https://linkedin.com/in/yemrecc"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border border-sky-500/30 text-sky-400 hover:bg-sky-500/10 hover:border-sky-400/60 hover:shadow-lg hover:shadow-sky-500/10 transition-all duration-300"
      >
        <span class="relative w-2 h-2">
          <span class="absolute inset-0 rounded-full bg-sky-400 animate-ping opacity-60" />
          <span class="relative block w-2 h-2 rounded-full bg-sky-400" />
        </span>
        Let's Talk
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
