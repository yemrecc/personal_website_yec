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
      ],
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
