<template>
  <section
    id="hero"
    class="relative min-h-screen flex flex-col justify-between pt-24 pb-8 px-6 overflow-hidden"
  >
    <!-- Hero glow accent behind content -->
    <div class="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full opacity-[0.04] blur-3xl pointer-events-none"
      style="background: radial-gradient(circle, #38bdf8, transparent 70%)"
    />

    <div class="max-w-6xl mx-auto w-full flex-1 flex flex-col">

      <!-- TOP ROW: Identity + Terminal -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center flex-1">

        <!-- LEFT: Identity -->
        <div ref="leftCol" class="space-y-7">
          <!-- Status badge -->
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-strong text-xs font-medium text-emerald-400 border border-emerald-500/20 shadow-lg shadow-emerald-500/5">
            <span class="relative w-2 h-2">
              <span class="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75" />
              <span class="relative block w-2 h-2 rounded-full bg-emerald-400" />
            </span>
            Open to opportunities · Konya, TR
          </div>

          <!-- Name -->
          <div>
            <h1 class="font-display text-5xl lg:text-7xl font-bold tracking-tight leading-none mb-4">
              <span class="block text-white text-glow">Yunus Emre</span>
              <span class="block text-gradient">Coşkun</span>
            </h1>
            <p class="font-display text-lg lg:text-xl text-zinc-400 font-medium tracking-wide">
              Computer Engineer
              <span class="text-zinc-700 mx-2">|</span>
              <span class="text-sky-400">Web3</span> &amp; <span class="text-purple-400">AI</span> Builder
            </p>
          </div>

          <!-- Shimmer divider -->
          <div class="w-24 h-px shimmer-line rounded-full" />

          <!-- CTA buttons -->
          <div class="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              class="group relative px-7 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-sky-500 to-sky-400 text-black transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-sky-500/25 overflow-hidden"
            >
              <span class="relative z-10">View Projects</span>
              <div class="absolute inset-0 bg-gradient-to-r from-sky-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            <a
              href="mailto:email@adresin.com"
              class="px-7 py-3.5 rounded-xl font-semibold text-sm glass-strong hover:bg-white/10 border border-white/10 hover:border-white/25 transition-all duration-300 text-zinc-300 hover:text-white"
            >
              Get In Touch
            </a>
          </div>

          <!-- Contact bar -->
          <div class="flex flex-wrap items-center gap-2 pt-4 border-t border-white/5">
            <a
              v-for="contact in contacts"
              :key="contact.label"
              :href="contact.href"
              :title="contact.label"
              target="_blank"
              rel="noopener noreferrer"
              class="group flex items-center gap-2 px-3 py-2 rounded-lg text-zinc-500 hover:text-white hover:bg-white/5 transition-all duration-200 text-xs"
            >
              <span class="w-4 h-4 flex-shrink-0 group-hover:scale-110 transition-transform" v-html="contact.icon" />
              <span class="hidden sm:block">{{ contact.display }}</span>
            </a>
          </div>
        </div>

        <!-- RIGHT: Terminal -->
        <div ref="rightCol" class="flex justify-center lg:justify-end">
          <TerminalWindow />
        </div>
      </div>

      <!-- BOTTOM ROW: Education & Tech Stack -->
      <div ref="bottomRow" class="mt-8 lg:mt-6 space-y-5">
        <!-- Education cards -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div
            v-for="edu in education"
            :key="edu.school"
            class="border-gradient glass-strong rounded-xl px-5 py-4 border border-white/8 hover:border-white/15 transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-500/5 flex items-center gap-4"
          >
            <div
              class="rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden"
              :class="edu.logoSize || 'w-10 h-10'"
              :style="edu.logo ? '' : `background: ${edu.color}15; border: 1px solid ${edu.color}25`"
            >
              <img v-if="edu.logo" :src="edu.logo" :alt="edu.school" class="w-full h-full object-contain" />
              <span v-else class="text-base">{{ edu.icon }}</span>
            </div>
            <div class="min-w-0 flex-1">
              <div class="flex items-center justify-between gap-2">
                <h4 class="font-display font-semibold text-white text-sm truncate group-hover:text-glow transition-all">{{ edu.school }}</h4>
                <span class="text-[10px] font-mono px-2 py-0.5 rounded-md flex-shrink-0" :style="`color: ${edu.color}; background: ${edu.color}15; border: 1px solid ${edu.color}20`">
                  {{ edu.years }}
                </span>
              </div>
              <p class="text-zinc-500 text-xs mt-1">{{ edu.degree }}</p>
            </div>
          </div>
        </div>

        <!-- Tech stack marquee -->
        <InfiniteMarquee :items="techStack" />
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const leftCol = ref<HTMLElement | null>(null)
const rightCol = ref<HTMLElement | null>(null)
const bottomRow = ref<HTMLElement | null>(null)

const education = [
  {
    school: 'Konya Teknik Üniversitesi',
    degree: 'Bilgisayar Mühendisliği',
    years: '2021 – 2026',
    logo: '/ktun_logo.png',
    logoSize: 'w-18 h-18',
    icon: '',
    color: '#38bdf8',
  },
  {
    school: 'Tosya Fen Lisesi',
    degree: 'Fen Bilimleri',
    years: '2016 – 2020',
    logo: '/tosyafenlisesilogo.jpg',
    icon: '',
    color: '#a855f7',
  },
]

const techStack = [
  'Python', 'TypeScript', 'Vue.js', 'Nuxt 3', 'Flutter', 'Java',
  'Machine Learning', 'FreqAI', 'Tailwind CSS', 'GSAP',
  'Web3', 'Smart Contracts',
  'Algorithmic Trading', 'AI / NLP',
]

const contacts = [
  {
    label: 'Email',
    href: 'mailto:email@adresin.com',
    display: 'email@adresin.com',
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>`,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/yemrecc',
    display: 'yemrecc',
    icon: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/yemrecc',
    display: 'yemrecc',
    icon: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>`,
  },
  {
    label: 'Telegram',
    href: 'https://t.me/yemrec',
    display: '@yemrec',
    icon: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>`,
  },
]

onMounted(async () => {
  const { gsap } = await import('gsap')

  // More cinematic stagger animation
  gsap.set(leftCol.value, { y: 60, opacity: 0 })
  gsap.set(rightCol.value, { y: 50, opacity: 0, scale: 0.95 })
  gsap.set(bottomRow.value, { y: 40, opacity: 0 })

  gsap.to(leftCol.value, { opacity: 1, y: 0, duration: 1.2, ease: 'power4.out', delay: 0.1 })
  gsap.to(rightCol.value, { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: 'power4.out', delay: 0.4 })
  gsap.to(bottomRow.value, { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.7 })
})
</script>
