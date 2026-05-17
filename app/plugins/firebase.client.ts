import { initializeApp, getApps } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { defineNuxtPlugin, useRuntimeConfig } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  const firebaseConfig = config.public.firebase

  // Asegurar que Firebase no se inicialice múltiples veces en navegación SPA
  const apps = getApps()
  const app = apps.length === 0 ? initializeApp(firebaseConfig) : apps[0]

  let analytics = null
  if (firebaseConfig.measurementId) {
    analytics = getAnalytics(app)
  }

  return {
    provide: {
      firebaseApp: app,
      analytics
    }
  }
})
