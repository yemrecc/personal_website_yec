<template>
  <footer role="contentinfo" class="py-12 lg:py-16 px-4 sm:px-6 border-t border-white/5 relative">
    <!-- Subtle glow -->
    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[200px] rounded-full opacity-[0.03] blur-3xl pointer-events-none"
      style="background: radial-gradient(circle, #38bdf8, transparent 70%)"
    />

    <div class="max-w-6xl mx-auto relative">
      <div class="flex flex-col md:flex-row items-center justify-between gap-6 lg:gap-8">

        <!-- Left: Name + tagline -->
        <div class="text-center md:text-left flex flex-col items-center md:items-start">
          <p class="font-display text-base sm:text-lg font-bold text-white mb-1">
            Yunus Emre <span class="text-gradient">Coşkun</span>
          </p>
          <p class="text-zinc-600 text-[10px] sm:text-xs lg:text-sm">Computer Engineer · Web3 & AI Builder</p>
        </div>

        <!-- Center: Status -->
        <div class="flex items-center gap-2 text-[10px] sm:text-xs text-zinc-500">
          <span class="relative w-1.5 h-1.5 sm:w-2 sm:h-2">
            <span class="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-60" />
            <span class="relative block w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-500" />
          </span>
          Available for collaboration · {{ currentYear }}
        </div>

        <!-- Right: Social links -->
        <div class="flex items-center justify-center gap-4 sm:gap-5">
          <a
            v-for="link in socials"
            :key="link.label"
            :href="link.href"
            :title="link.label"
            target="_blank"
            rel="noopener noreferrer"
            class="text-zinc-600 hover:text-zinc-200 hover:scale-110 transition-all duration-200"
          >
            <span class="w-4 h-4 sm:w-5 sm:h-5 block" v-html="link.icon" aria-hidden="true" />
          </a>
        </div>

      </div>

      <!-- Bottom line -->
      <div class="mt-10 pt-6 border-t border-white/5 text-center">
        <p class="text-zinc-700 text-xs">
          Designed & built with intention
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/yemrecc',
    icon: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>`,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/yemrecc',
    icon: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
  },
  {
    label: 'Telegram',
    href: 'https://t.me/yemrec',
    icon: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>`,
  },
]
</script>
