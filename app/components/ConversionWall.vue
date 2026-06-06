<template>
  <section id="diagnostico" class="relative py-24 md:py-32 bg-neutral-950 overflow-hidden scroll-mt-24">
    
    <!-- Abstract animated background for the glassmorphism -->
    <div class="absolute inset-0 z-0 pointer-events-none opacity-40">
      <div class="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-primary/30 blur-[150px] rounded-full animate-pulse" style="animation-duration: 8s;"></div>
      <div class="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-emerald-500/20 blur-[150px] rounded-full animate-pulse" style="animation-duration: 10s; animation-delay: 2s;"></div>
    </div>

    <div class="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center relative z-10">
      
      <!-- Left: Giant Testimonial -->
      <div ref="testimonyCol" class="lg:col-span-7 relative">
        <div class="absolute -top-16 -left-8 text-[15rem] text-neutral-800/40 font-serif leading-none pointer-events-none select-none">"</div>
        
        <h2 class="testimony-text font-serif font-normal text-5xl md:text-6xl lg:text-[4.5rem] text-white mb-10 leading-[1.1] relative z-10 opacity-0 translate-y-8">
          De una condena de <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400 line-through decoration-red-500/50">20 años</span> a la libertad en <span class="text-emerald-400">12</span>.
        </h2>
        
        <div class="testimony-author flex items-center gap-5 relative z-10 opacity-0 translate-y-8">
          <div class="w-14 h-14 rounded-full bg-neutral-900 border border-neutral-700 overflow-hidden flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="text-neutral-500"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          </div>
          <div>
            <p class="text-white font-medium text-lg">Caso de Éxito Real</p>
            <p class="text-neutral-400">Cliente de Estrategia Hipotecaria</p>
          </div>
        </div>
      </div>

      <!-- Right: Glassmorphism Form Wall -->
      <div ref="formCol" class="lg:col-span-5 opacity-0 translate-y-12">
        <div class="p-8 md:p-10 rounded-[2rem] bg-white/5 backdrop-blur-2xl border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.4)]">
          
          <div class="text-center mb-8">
            <h3 class="text-2xl font-bold text-white mb-2">📈 ¿Listo para ver cuánto puedes ahorrar?</h3>
            <p class="text-neutral-300 text-sm font-light">Solicita tu diagnóstico financiero gratuito.</p>
          </div>

          <form class="space-y-6" @submit.prevent="handleSubmit">
            
            <div class="space-y-1 relative group">
              <input
                id="cw-name"
                v-model="formData.name"
                type="text"
                required
                autocomplete="name"
                placeholder=" "
                class="peer w-full bg-transparent border-0 border-b-2 border-neutral-600 px-0 py-3 text-white placeholder-transparent focus:ring-0 focus:border-primary transition-colors"
              />
              <label for="cw-name" class="absolute left-0 top-3 text-neutral-400 text-sm font-medium transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-primary-light peer-valid:-top-3.5 peer-valid:text-xs">
                Nombre Completo
              </label>
            </div>

            <div class="space-y-1 relative group">
              <input
                id="cw-identification"
                v-model="formData.identification"
                type="text"
                required
                inputmode="numeric"
                autocomplete="off"
                placeholder=" "
                class="peer w-full bg-transparent border-0 border-b-2 border-neutral-600 px-0 py-3 text-white placeholder-transparent focus:ring-0 focus:border-primary transition-colors"
              />
              <label for="cw-identification" class="absolute left-0 top-3 text-neutral-400 text-sm font-medium transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-primary-light peer-valid:-top-3.5 peer-valid:text-xs">
                Cédula de Ciudadanía
              </label>
            </div>

            <div class="space-y-1 relative group">
              <input
                id="cw-email"
                v-model="formData.email"
                type="email"
                required
                autocomplete="email"
                inputmode="email"
                placeholder=" "
                class="peer w-full bg-transparent border-0 border-b-2 border-neutral-600 px-0 py-3 text-white placeholder-transparent focus:ring-0 focus:border-primary transition-colors"
              />
              <label for="cw-email" class="absolute left-0 top-3 text-neutral-400 text-sm font-medium transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-primary-light peer-valid:-top-3.5 peer-valid:text-xs">
                Email Corporativo/Personal
              </label>
            </div>

            <div class="space-y-1 relative group">
              <div class="flex items-end">
                <span class="pb-3 text-neutral-500 mr-2 text-sm">+57</span>
                <input
                  id="cw-phone"
                  v-model="formData.phone"
                  type="tel"
                  required
                  autocomplete="tel-national"
                  inputmode="tel"
                  placeholder=" "
                  class="peer w-full bg-transparent border-0 border-b-2 border-neutral-600 px-0 py-3 text-white placeholder-transparent focus:ring-0 focus:border-primary transition-colors"
                />
                <label for="cw-phone" class="absolute left-8 top-3 text-neutral-400 text-sm font-medium transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-primary-light peer-valid:-top-3.5 peer-valid:text-xs">
                  WhatsApp
                </label>
              </div>
            </div>

            <div class="space-y-1 relative pt-4">
              <label for="cw-tipo" class="text-xs font-semibold text-neutral-400 uppercase tracking-wide">Tipo de Crédito</label>
              <select id="cw-tipo" v-model="formData.observation" class="w-full bg-transparent border-0 border-b-2 border-neutral-600 px-0 py-3 text-white focus:ring-0 focus:border-primary transition-colors appearance-none cursor-pointer">
                <option value="uvr" class="bg-neutral-900">Hipotecario UVR</option>
                <option value="pesos" class="bg-neutral-900">Hipotecario Pesos</option>
                <option value="leasing" class="bg-neutral-900">Leasing Habitacional</option>
              </select>
            </div>

            <button 
              type="submit"
              :disabled="loading"
              class="w-full mt-8 bg-primary hover:bg-primary-hover text-white font-bold tracking-wide py-4 px-6 rounded-xl transition-all duration-300 transform active:scale-95 flex justify-center items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              :class="{ 'animate-pulse-glow': !loading }"
            >
              <template v-if="loading">
                <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                PROCESANDO...
              </template>
              <template v-else>
                OBTENER MI DIAGNÓSTICO
              </template>
            </button>

            <!-- Status Messages -->
            <p v-if="status === 'success'" class="text-emerald-400 text-center text-sm font-medium animate-bounce mt-4">
              ✅ ¡Registro exitoso! Pronto te contactaremos.
            </p>
            <p v-if="status === 'error'" class="text-red-400 text-center text-sm font-medium mt-4">
              ❌ Hubo un error. Por favor intenta de nuevo.
            </p>
            
          </form>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref, reactive } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const testimonyCol = ref(null)
const formCol = ref(null)

const loading = ref(false)
const status = ref(null) // 'success' | 'error'

const formData = reactive({
  name: '',
  identification: '',
  email: '',
  phone: '',
  observation: 'uvr'
})

const config = useRuntimeConfig()

const handleSubmit = async () => {
  loading.value = true
  status.value = null

  try {
    const response = await fetch(config.public.crmApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': config.public.crmApiKey
      },


      body: JSON.stringify({
        name: formData.name,
        phone: formData.phone,
        identification: formData.identification,
        identification_type: 'CC',
        email: formData.email,
        observation: `Interesado en: Hipotecario ${formData.observation.toUpperCase()}`
      })
    })

    const result = await response.json()
    
    if (result.success || response.ok) {
      status.value = 'success'
      // Reset form
      Object.assign(formData, {
        name: '',
        identification: '',
        email: '',
        phone: '',
        observation: 'uvr'
      })
    } else {
      status.value = 'error'
    }
  } catch (error) {
    console.error('CRM Submission Error:', error)
    status.value = 'error'
  } finally {
    loading.value = false
  }
}

let ctx

onMounted(() => {

  if (!process.client) return
  gsap.registerPlugin(ScrollTrigger)

  ctx = gsap.context(() => {
    
    // Testimony Entrance
    gsap.to(['.testimony-text', '.testimony-author'], {
      scrollTrigger: {
        trigger: testimonyCol.value,
        start: 'top 80%',
      },
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out'
    })

    // Form Entrance
    gsap.to(formCol.value, {
      scrollTrigger: {
        trigger: formCol.value,
        start: 'top 85%',
      },
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: 'power3.out',
      delay: 0.3
    })

  })
})

onUnmounted(() => {
  if (ctx) ctx.revert()
})
</script>

<style scoped>
@keyframes pulse-glow {
  0% { box-shadow: 0 0 15px rgba(99, 91, 255, 0.4); }
  50% { box-shadow: 0 0 35px rgba(99, 91, 255, 0.9), inset 0 0 10px rgba(255,255,255,0.2); }
  100% { box-shadow: 0 0 15px rgba(99, 91, 255, 0.4); }
}

.animate-pulse-glow {
  animation: pulse-glow 2s infinite ease-in-out;
}
</style>
