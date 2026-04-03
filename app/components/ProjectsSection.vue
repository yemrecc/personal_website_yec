<template>
  <section id="projects" aria-label="Projects" class="py-24 lg:py-32 px-4 sm:px-6 relative">
    <!-- Sophisticated section glow -->
    <div class="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full opacity-[0.03] blur-[120px] pointer-events-none"
      style="background: radial-gradient(circle, #38bdf8, transparent 70%)"
    />

    <div class="max-w-6xl mx-auto relative z-10">

      <!-- Section label -->
      <div class="flex items-center gap-3 mb-4">
        <span class="w-12 h-px shimmer-line rounded-full" />
        <span class="text-purple-400 text-[10px] sm:text-xs font-mono font-bold tracking-[0.2em] uppercase">Masterpiece</span>
      </div>
      <h2 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-10 lg:mb-16 leading-tight drop-shadow-xl">
        Project <span class="text-gradient drop-shadow-[0_0_12px_rgba(168,85,247,0.3)]">Vitrine</span>
      </h2>

      <!-- Bento Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 auto-rows-auto">

        <!-- LARGE: Dreamscape (full width) -->
        <BentoCard
          class="md:col-span-2"
          title="Dreamscape"
          tag="Featured · AI Application"
          description="A visionary mobile journal that maps your subconscious and illuminates the mysteries of your dreams the moment you wake up. This application doesn't just record your dreams; it deeply analyzes them to extract meaning and transforms them into artworks using artificial intelligence. Designed with a digital mysticism theme, this secure platform turns your dreams into a personal journey of insight, allowing you to rediscover yourself every morning."
          icon='<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 3c-4.97 0-9 3.582-9 8 0 2.56 1.28 4.836 3.3 6.34L6 21l4.36-1.745A10.02 10.02 0 0012 19c4.97 0 9-3.582 9-8s-4.03-8-9-8z"/></svg>'
          size="large"
          accent-color="#a855f7"
          link="Coming Soon"
        >
          <!-- Dream Analysis Dashboard -->
          <div class="mt-3 flex-1 rounded-xl bg-zinc-950/80 border border-white/10 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] overflow-hidden relative flex flex-col">
            <!-- Tab Header -->
            <div class="flex items-center justify-between px-5 py-3 border-b border-white/5 bg-white/[0.02]">
              <div class="flex items-center gap-4">
                <span class="text-[10px] sm:text-xs text-purple-400 font-medium border-b-2 border-purple-500 pb-1 cursor-default">Patterns</span>
                <span class="text-[10px] sm:text-xs text-zinc-600 font-medium pb-1 cursor-default">Trends</span>
                <span class="text-[10px] sm:text-xs text-zinc-600 font-medium pb-1 cursor-default">Insights</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="h-1.5 w-1.5 rounded-full bg-purple-500 shadow-[0_0_8px_#a855f7]" />
                <span class="text-[10px] font-mono text-purple-400">Dream Detective</span>
              </div>
            </div>

            <!-- Content -->
            <div class="flex-1 p-4 sm:p-5 flex flex-col sm:flex-row gap-4 sm:gap-6 overflow-hidden">

              <!-- Recurring Themes -->
              <div class="flex-1 flex flex-col gap-2.5">
                <div class="flex items-center gap-2 mb-0.5">
                  <span class="text-[10px] text-zinc-400 font-mono tracking-wider uppercase">Recurring Themes</span>
                </div>
                <div v-for="(theme, i) in dreamThemes" :key="i" class="flex items-start gap-3 p-3 rounded-lg bg-white/[0.03] border border-white/5 hover:border-white/10 transition-colors">
                  <div class="w-7 h-7 rounded-md bg-amber-500/15 flex items-center justify-center shrink-0 mt-0.5">
                    <svg class="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"/><path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767A2 2 0 0011 16h2l3 3v-3h1a2 2 0 002-2V9a2 2 0 00-2-2h-2z"/></svg>
                  </div>
                  <div class="min-w-0">
                    <span class="text-[11px] text-white/90 font-medium leading-tight block">{{ theme.title }}</span>
                    <p class="text-[9px] text-zinc-500 mt-0.5 leading-relaxed line-clamp-2">{{ theme.desc }}</p>
                  </div>
                </div>
              </div>

              <!-- Symbol Distribution -->
              <div class="w-full sm:w-56 flex flex-col gap-2.5 sm:border-l sm:border-white/5 sm:pl-6">
                <div class="flex items-center gap-2 mb-0.5">
                  <span class="text-[10px] text-zinc-400 font-mono tracking-wider uppercase">Symbol Distribution</span>
                </div>
                <div v-for="(sym, i) in symbolDist" :key="i" class="space-y-1">
                  <div class="flex justify-between">
                    <span class="text-[10px] text-white/80">{{ sym.label }}</span>
                    <span class="text-[10px] text-zinc-400 font-mono">{{ sym.pct }}%</span>
                  </div>
                  <div class="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div class="h-full rounded-full transition-all duration-700" :class="sym.color" :style="{ width: sym.pct + '%' }" />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </BentoCard>

        <!-- Algorithmic Trading -->
        <BentoCard
          title="Algo Trading"
          tag="Python · FreqAI"
          description="Automated trading systems driven by Machine Learning strategies using FreqAI. Combines reinforcement learning (RL) with technical indicators for adaptive market behavior."
          icon='<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"/></svg>'
          size="medium"
          accent-color="#4ade80"
          link="Explore"
          href="https://github.com/yemrecc"
        >
          <!-- Crisp Order Book / Terminal -->
          <div class="mt-6 flex-1 rounded-xl bg-[#09090b] border border-white/10 p-1 flex flex-col font-mono text-[10px] shadow-inner relative overflow-hidden group/term">
            <div class="px-3 py-2 border-b border-white/5 flex justify-between text-zinc-500 bg-white/[0.02]">
              <span>TIME</span><span>PRICE</span><span>ACT</span>
            </div>
            <div class="px-3 py-2 space-y-1.5 text-zinc-400 uppercase tracking-widest relative z-10 flex-1 flex flex-col justify-end">
               <div class="flex justify-between hover:bg-white/5 px-1 -mx-1 rounded transition-colors cursor-default">
                 <span class="text-zinc-600">14:22:01</span><span>3241.50</span><span class="text-emerald-400">BUY</span>
               </div>
               <div class="flex justify-between hover:bg-white/5 px-1 -mx-1 rounded transition-colors cursor-default">
                 <span class="text-zinc-600">14:45:12</span><span>3248.10</span><span class="text-zinc-500">HLD</span>
               </div>
               <div class="flex justify-between hover:bg-white/5 pl-2 border-l-2 border-emerald-500 bg-emerald-500/10 px-1 -mx-1 rounded transition-colors cursor-default drop-shadow-[0_0_5px_rgba(16,185,129,0.2)]">
                 <span class="text-zinc-400 font-bold">15:01:44</span><span class="text-white font-bold">3260.00</span><span class="text-emerald-400 font-bold animate-pulse">BUY</span>
               </div>
            </div>
            <!-- Subdued terminal scanline -->
            <div class="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.25)_50%)] bg-[size:100%_4px] pointer-events-none opacity-20" />
          </div>
        </BentoCard>

        <!-- Monad AI Explorer -->
        <BentoCard
          title="Monad AI Explorer"
          tag="Web3 · AI · Beta"
          description="An AI-powered block explorer for the Monad blockchain. Query on-chain data in natural language, visualize parallel execution lanes in real-time, and track live TPS, gas prices, and network metrics — built for both humans and AI agents."
          icon='<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/></svg>'
          size="medium"
          accent-color="#836EF9"
          link="Visit"
          href="https://www.monadaiexplorer.com/"
        >
          <!-- Live Network Metrics -->
          <div class="mt-3 flex-1 rounded-xl bg-[#09090b] border border-white/10 p-1 flex flex-col font-mono text-[10px] shadow-inner relative overflow-hidden group/exp">
            <div class="px-3 py-2 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
              <span class="text-zinc-500 tracking-wider">LIVE NETWORK</span>
              <div class="flex items-center gap-1.5">
                <div class="h-1.5 w-1.5 rounded-full bg-[#836EF9] shadow-[0_0_6px_#836EF9] animate-pulse" />
                <span class="text-[#836EF9]">Monad</span>
              </div>
            </div>
            <div class="px-3 py-2.5 space-y-2 relative z-10 flex-1 flex flex-col justify-end">
              <div class="grid grid-cols-2 gap-2">
                <div class="bg-white/[0.03] rounded-md px-2.5 py-1.5 border border-white/5">
                  <span class="text-zinc-600 text-[8px] block">TPS</span>
                  <span class="text-white font-bold text-sm">2,847</span>
                </div>
                <div class="bg-white/[0.03] rounded-md px-2.5 py-1.5 border border-white/5">
                  <span class="text-zinc-600 text-[8px] block">GAS</span>
                  <span class="text-white font-bold text-sm">102 <span class="text-zinc-500 text-[8px] font-normal">gwei</span></span>
                </div>
              </div>
              <div class="flex items-center gap-2 px-1 py-1 text-[9px]">
                <span class="text-zinc-600">Block</span>
                <span class="text-white">#4,218,093</span>
                <span class="text-zinc-700 mx-1">|</span>
                <span class="text-zinc-600">MON</span>
                <span class="text-[#836EF9] font-bold">$1.24</span>
              </div>
              <!-- Parallel lanes hint -->
              <div class="flex gap-0.5 mt-1">
                <div class="h-1 flex-1 rounded-full bg-[#836EF9]/40" />
                <div class="h-1 flex-[0.7] rounded-full bg-emerald-500/40" />
                <div class="h-1 flex-[0.85] rounded-full bg-sky-500/40" />
                <div class="h-1 flex-[0.5] rounded-full bg-amber-500/40" />
              </div>
              <span class="text-[8px] text-zinc-600 tracking-wider">PARALLEL EXECUTION LANES</span>
            </div>
          </div>
        </BentoCard>

        <!-- Sepya Network -->
        <BentoCard
          title="Sepya Network"
          tag="Community · Web3"
          description="Founder of a decentralized community platform focused on Web3 education and ecosystem adoption within the Turkish developer ecosystem."
          icon='<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>'
          size="medium"
          accent-color="#f472b6"
          link="Learn More"
          href="https://github.com/yemrecc"
        >
          <!-- Sharp Isometric / Geometric Node Representation -->
          <div class="mt-6 flex-1 rounded-xl bg-zinc-950/50 border border-white/5 relative overflow-hidden group/net flex items-center justify-center p-4">
             <svg viewBox="0 0 100 100" class="w-full h-full max-h-32 opacity-80 group-hover/net:opacity-100 transition-opacity duration-500 overflow-visible">
                <!-- Precise geometric lines -->
                <path d="M50 20 L80 35 L80 65 L50 80 L20 65 L20 35 Z" fill="none" stroke="#3f3f46" stroke-width="0.5" class="group-hover/net:stroke-pink-500/30 transition-colors duration-700" />
                <path d="M50 20 L50 50 L80 65" fill="none" stroke="#27272a" stroke-width="0.5" class="group-hover/net:stroke-pink-500/30 transition-colors duration-700" />
                <path d="M20 65 L50 50" fill="none" stroke="#27272a" stroke-width="0.5" class="group-hover/net:stroke-pink-500/30 transition-colors duration-700" />
                
                <!-- Orbiting/Connecting paths (crisp dots) -->
                <circle cx="50" cy="50" r="15" fill="none" stroke="#52525b" stroke-dasharray="2 4" stroke-width="1" class="group-hover/net:stroke-pink-400 group-hover/net:animate-[spin_10s_linear_infinite]" />
                
                <!-- Nodes -->
                <circle cx="50" cy="20" r="3" fill="#18181b" stroke="#f472b6" stroke-width="1.5" class="drop-shadow-[0_0_2px_#f472b6]" />
                <circle cx="80" cy="35" r="2" fill="#18181b" stroke="#a855f7" stroke-width="1.5" />
                <circle cx="80" cy="65" r="2.5" fill="#18181b" stroke="#38bdf8" stroke-width="1.5" />
                <circle cx="50" cy="80" r="4" fill="#18181b" stroke="#f472b6" stroke-width="1.5" class="drop-shadow-[0_0_4px_#f472b6]" />
                <circle cx="20" cy="65" r="2" fill="#18181b" stroke="#a855f7" stroke-width="1.5" />
                <circle cx="20" cy="35" r="2.5" fill="#18181b" stroke="#38bdf8" stroke-width="1.5" />
                <circle cx="50" cy="50" r="5" fill="#f472b6" stroke="#fff" stroke-width="1" class="drop-shadow-[0_0_6px_rgba(244,114,182,0.8)]" />
             </svg>
          </div>
        </BentoCard>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const dreamThemes = [
  { title: 'Identity & Individuation', desc: 'Redefining identity, shattering the old self and progressing toward an authentic being, inner growth and quest for wholeness...' },
  { title: 'Inner Discovery & Transformation', desc: 'Diving into the depths of the subconscious, navigating inner labyrinths and seeking nurturing sources of wisdom...' },
  { title: 'Overcoming Barriers & Liberation', desc: 'Breaking free from psychological stagnation, recurring patterns and fears, desire for spiritual purification and inner peace...' },
]

const symbolDist = [
  { label: 'Identity Journey', pct: 38, color: 'bg-amber-500' },
  { label: 'Inner Discovery', pct: 33, color: 'bg-purple-500' },
  { label: 'Liberation', pct: 29, color: 'bg-sky-500' },
]
</script>
