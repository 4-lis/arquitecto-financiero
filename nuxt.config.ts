export default defineNuxtConfig({
  srcDir: 'app',

  compatibilityDate: '2026-05-10',

  devtools: { enabled: false },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
  ],

  tailwindcss: {
    configPath: '~/../../tailwind.config.js',
  },

  googleFonts: {
    families: {
      'DM Serif Display': [400],
      'Inter': [400, 500, 600, 700],
    },
    display: 'swap',
    preload: true,
  },

  // main.css lives in app/assets/css/ — ~ resolves relative to srcDir
  css: ['~/assets/css/main.css'],

  app: {
    head: {
      htmlAttrs: { lang: 'es' },
      title: 'El Arquitecto Financiero — Construye tu libertad',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#0f172a' },
        {
          name: 'description',
          content:
            'No dejes que tu casa sea del banco por 30 años. Inteligencia financiera para la construcción de tu libertad.',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  nitro: {
    preset: 'static',
  },

  // Let Vite pre-bundle GSAP & Lenis for faster dev server
  vite: {
    optimizeDeps: {
      include: ['gsap', 'gsap/ScrollTrigger', 'lenis'],
    },
  },

  runtimeConfig: {
    public: {
      crmApiUrl: '', // NUXT_PUBLIC_CRM_API_URL
      crmApiKey: ''  // NUXT_PUBLIC_CRM_API_KEY
    }
  }
})

