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
        { name: 'theme-color', content: '#0a0a0a' },
        {
          name: 'description',
          content:
            'No dejes que tu casa sea del banco por 30 años. Inteligencia financiera para la construcción de tu libertad.',
        },
        // ── Open Graph (WhatsApp, Facebook, LinkedIn) ──────────────────
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'es_CO' },
        { property: 'og:site_name', content: 'El Arquitecto Financiero' },
        { property: 'og:title', content: 'El Arquitecto Financiero — Construye tu libertad' },
        {
          property: 'og:description',
          content:
            'No dejes que tu casa sea del banco por 30 años. Inteligencia financiera para optimizar tu hipoteca.',
        },
        { property: 'og:image', content: '/hero-bg.png' },
        { property: 'og:image:alt', content: 'El Arquitecto Financiero' },
        // ── Twitter / X Card ───────────────────────────────────────────
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'El Arquitecto Financiero — Construye tu libertad' },
        {
          name: 'twitter:description',
          content:
            'No dejes que tu casa sea del banco por 30 años. Inteligencia financiera para optimizar tu hipoteca.',
        },
        { name: 'twitter:image', content: '/hero-bg.png' },
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
      crmApiKey: '', // NUXT_PUBLIC_CRM_API_KEY
      firebase: {
        apiKey: process.env.NUXT_PUBLIC_FIREBASE_API_KEY || 'AIzaSyCQdDUe1-TMsDQGa0EYtnf8RFP9d16DszU',
        authDomain: process.env.NUXT_PUBLIC_FIREBASE_AUTH_DOMAIN || 'hiporiver-prod.firebaseapp.com',
        projectId: process.env.NUXT_PUBLIC_FIREBASE_PROJECT_ID || 'hiporiver-prod',
        storageBucket: process.env.NUXT_PUBLIC_FIREBASE_STORAGE_BUCKET || 'hiporiver-prod.firebasestorage.app',
        messagingSenderId: process.env.NUXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || '657595389334',
        appId: process.env.NUXT_PUBLIC_FIREBASE_APP_ID || '1:657595389334:web:f63868ddd88e8d81d839b7',
        measurementId: process.env.NUXT_PUBLIC_FIREBASE_MEASUREMENT_ID || 'G-QRTJ2DKBL2'
      }
    }
  }
})

