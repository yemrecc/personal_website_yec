// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },

  // Nuxt 4: source files live in app/ by default
  future: { compatibilityVersion: 4 },

  modules: ['@vueuse/motion/nuxt'],

  vite: {
    plugins: [tailwindcss() as any],
  },

  app: {
    head: {
      title: 'Yunus Emre Coşkun — Computer Engineer | Web3 & AI Builder',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Personal portfolio of Yunus Emre Coşkun — Computer Engineer specializing in Web3, AI, and algorithmic trading systems.',
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Yunus Emre Coşkun — Computer Engineer | Web3 & AI Builder' },
        {
          property: 'og:description',
          content: 'Personal portfolio of Yunus Emre Coşkun — Computer Engineer specializing in Web3, AI, and algorithmic trading systems.',
        },
        { property: 'og:image', content: '/og-image.png' },
        { property: 'og:locale', content: 'en_US' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@yemrecc' },
        { name: 'twitter:title', content: 'Yunus Emre Coşkun — Web3 & AI Builder' },
        {
          name: 'twitter:description',
          content: 'Computer Engineer specializing in Web3, AI, and algorithmic trading systems.',
        },
        { name: 'twitter:image', content: '/og-image.png' },
        { name: 'theme-color', content: '#030303' },
      ],
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap',
        },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      ],
    },
  },

  css: ['~/assets/css/main.css'],
})
