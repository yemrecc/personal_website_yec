<template>
  <section id="projects" class="py-32 px-6 relative">
    <!-- Sophisticated section glow -->
    <div class="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full opacity-[0.03] blur-[120px] pointer-events-none"
      style="background: radial-gradient(circle, #38bdf8, transparent 70%)"
    />

    <div class="max-w-6xl mx-auto relative z-10">

      <!-- Section label -->
      <div class="flex items-center gap-3 mb-4">
        <span class="w-12 h-px shimmer-line rounded-full" />
        <span class="text-purple-400 text-xs font-mono font-bold tracking-[0.2em] uppercase">Seçili İşler</span>
      </div>
      <h2 class="font-display text-4xl lg:text-5xl font-bold text-white mb-16 leading-tight drop-shadow-xl">
        Proje <span class="text-gradient drop-shadow-[0_0_12px_rgba(168,85,247,0.3)]">Vitrinim</span>
      </h2>

      <!-- Bento Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5 auto-rows-auto">

        <!-- LARGE: Dreamscape (full width) -->
        <BentoCard
          class="md:col-span-2"
          title="Dreamscape"
          tag="Öne Çıkan · AI Uygulaması"
          description="Uykudan uyandığınız an rüyalarınızın gizemini aydınlatan ve bilinçaltınızın haritasını çıkaran vizyoner bir mobil günlüktür. Uygulama, sadece rüyalarınızı kaydetmekle kalmaz; onları derinlemesine analiz ederek anlamlandırır ve yapay zeka ile sanat eserlerine dönüştürür. Dijital mistisizm temasıyla tasarlanan bu güvenli platform, rüyalarınızı birer kişisel içgörü yolculuğuna dönüştürerek her sabah kendinizi yeniden keşfetmenizi sağlar."
          icon='<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 3c-4.97 0-9 3.582-9 8 0 2.56 1.28 4.836 3.3 6.34L6 21l4.36-1.745A10.02 10.02 0 0012 19c4.97 0 9-3.582 9-8s-4.03-8-9-8z"/></svg>'
          size="large"
          accent-color="#a855f7"
          link="Yakında"
        >
          <!-- Premium, sharp architectural chart mockup -->
          <div class="mt-6 flex-1 rounded-xl bg-zinc-950/80 border border-white/10 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] overflow-hidden relative group/chart flex flex-col">
            <!-- Header -->
            <div class="flex items-center justify-between px-5 py-3 border-b border-white/5 bg-white/[0.02]">
              <div class="flex items-center gap-3">
                <span class="text-[10px] text-zinc-400 font-mono tracking-wider uppercase border border-white/10 px-2 py-0.5 rounded">Analiz Motoru</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="h-1.5 w-1.5 rounded-full bg-purple-500 shadow-[0_0_8px_#a855f7]" />
                <span class="text-[10px] font-mono text-purple-400">İşleniyor v2.4</span>
              </div>
            </div>
            
            <!-- Chart Body -->
            <div class="flex-1 p-5 relative overflow-hidden flex flex-col justify-end">
              <!-- Pixel-perfect grid -->
              <div class="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
              
              <div class="relative z-10 flex items-end justify-between gap-1 h-32">
                <div v-for="(val, idx) in dreamBars" :key="idx" class="flex-1 flex flex-col justify-end group/bar relative h-full">
                  <!-- Tooltip (mock) -->
                  <div class="absolute -top-6 left-1/2 -translate-x-1/2 text-[9px] font-mono text-white opacity-0 group-hover/bar:opacity-100 transition-opacity bg-zinc-800 px-1.5 py-0.5 rounded shadow-lg pointer-events-none z-20 whitespace-nowrap">
                     Vol: {{ val }}
                  </div>
                  <!-- The Bar -->
                  <div 
                    class="w-full rounded-t-sm border-t border-purple-400/50 relative overflow-hidden transition-all duration-300 group-hover/bar:bg-purple-500"
                    :style="{ height: `${val}%`, background: `linear-gradient(to bottom, #a855f7${Math.floor(val*2.5).toString(16).padStart(2,'0') + '000000'}, transparent)` }"
                  >
                     <div class="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent mix-blend-overlay" />
                  </div>
                  <!-- Label -->
                  <span class="text-[9px] text-zinc-500 font-mono mt-2 text-center group-hover/bar:text-purple-300 transition-colors">{{ emotionLabels[idx] }}</span>
                </div>
              </div>
            </div>
          </div>
        </BentoCard>

        <!-- Algorithmic Trading -->
        <BentoCard
          title="Algo Trading"
          tag="Python · FreqAI"
          description="FreqAI'nin Makine Öğrenimi destekli stratejilerini kullanan otomatik alım satım sistemleri. Adaptif pazar davranışları için pekiştirmeli öğrenmeyi (RL) teknik indikatörlerle birleştirir."
          icon='<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"/></svg>'
          size="medium"
          accent-color="#4ade80"
          link="Keşfet"
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

        <!-- Sepya Network -->
        <BentoCard
          title="Sepya Network"
          tag="Topluluk · Web3"
          description="Türkiye'deki geliştirici ekosisteminde Web3 eğitimini ve ekosistem adaptasyonunu merkeze alan, merkeziyetsiz bir topluluk platformu kurucu ortaklığı."
          icon='<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>'
          size="medium"
          accent-color="#f472b6"
          link="Daha Fazla Bilgi"
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
const dreamBars = [50, 65, 30, 85, 45, 20, 75, 55]
const emotionLabels = ['Joy', 'Trst', 'Fear', 'Surp', 'Sadd', 'Disg', 'Angr', 'Antc']
</script>
