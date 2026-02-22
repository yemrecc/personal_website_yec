<template>
  <section id="projects" class="py-32 px-6 relative">
    <!-- Section glow accent -->
    <div class="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full opacity-[0.03] blur-3xl pointer-events-none"
      style="background: radial-gradient(circle, #a855f7, transparent 70%)"
    />

    <div class="max-w-6xl mx-auto relative">

      <!-- Section label -->
      <div class="flex items-center gap-3 mb-4">
        <span class="w-10 h-px shimmer-line rounded-full" />
        <span class="text-purple-400 text-sm font-medium tracking-widest uppercase">Masterpiece</span>
      </div>
      <h2 class="font-display text-4xl lg:text-5xl font-bold text-white mb-16 leading-tight">
        Project <span class="text-gradient">Vitrine</span>
      </h2>

      <!-- Bento Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-auto">

        <!-- LARGE: Dreamscape (full width) -->
        <BentoCard
          class="md:col-span-2"
          title="Dreamscape"
          tag="Featured · AI Application"
          description="AI-powered dream journal application that analyzes patterns in your dreams to surface insights about your subconscious mind. Leverages NLP models for emotion detection and recurring theme extraction."
          icon='<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 3c-4.97 0-9 3.582-9 8 0 2.56 1.28 4.836 3.3 6.34L6 21l4.36-1.745A10.02 10.02 0 0012 19c4.97 0 9-3.582 9-8s-4.03-8-9-8z"/></svg>'
          size="large"
          accent-color="#a855f7"
          link="View Case Study"
        >
          <!-- Mini AI visualization -->
          <div class="mt-5 rounded-xl bg-black/40 border border-white/8 p-4 overflow-hidden">
            <div class="flex items-center justify-between mb-3">
              <span class="text-xs text-zinc-500 font-mono">dream_analysis.py</span>
              <div class="flex items-center gap-1.5">
                <div class="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse shadow-sm shadow-purple-400/50" />
                <span class="text-xs text-purple-400">Live</span>
              </div>
            </div>
            <!-- Animated bar chart -->
            <div class="flex items-end gap-1.5 h-16">
              <div
                v-for="(bar, i) in dreamBars"
                :key="i"
                class="flex-1 rounded-t transition-all duration-1000"
                :style="`height: ${bar}%; background: linear-gradient(to top, #a855f7, #38bdf8); opacity: 0.85; animation-delay: ${i * 100}ms`"
              />
            </div>
            <div class="flex justify-between mt-2">
              <span v-for="label in emotionLabels" :key="label" class="text-[10px] text-zinc-600">{{ label }}</span>
            </div>
          </div>
        </BentoCard>

        <!-- Algorithmic Trading -->
        <BentoCard
          title="Algo Trading"
          tag="Python · FreqAI"
          description="Automated trading systems using FreqAI's ML-powered strategies. Combines reinforcement learning with technical indicators for adaptive market behaviour."
          icon='<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"/></svg>'
          size="small"
          accent-color="#4ade80"
          link="Explore"
        >
          <!-- Mini sparkline -->
          <div class="mt-3 flex items-end gap-0.5 h-10 opacity-60">
            <div v-for="(h, i) in sparkline" :key="i"
              class="flex-1 rounded-full bg-gradient-to-t from-emerald-500 to-emerald-400"
              :style="`height: ${h}%`"
            />
          </div>
        </BentoCard>

        <!-- Sepya Network -->
        <BentoCard
          title="Sepya Network"
          tag="Community · Web3"
          description="Co-founded a decentralized community platform focused on Web3 education and ecosystem adoption in Turkey."
          icon='<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>'
          size="small"
          accent-color="#f472b6"
          link="Learn More"
        />

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const dreamBars = [65, 30, 45, 80, 55, 20, 70]
const emotionLabels = ['Joy', 'Fear', 'Anx', 'Calm', 'Excite', 'Surr', 'Lost']
const sparkline = [40, 55, 35, 70, 45, 80, 60, 75, 50, 90, 65, 85]
</script>
