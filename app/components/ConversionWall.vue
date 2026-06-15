<template>
  <section id="diagnostico" class="relative py-24 md:py-32 bg-[#050D1A] overflow-hidden scroll-mt-24">
    
    <!-- Abstract animated background for the glassmorphism -->
    <div class="absolute inset-0 z-0 pointer-events-none opacity-40">
      <div class="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-primary/20 blur-[150px] rounded-full animate-pulse" style="animation-duration: 8s;"></div>
      <div class="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full animate-pulse" style="animation-duration: 10s; animation-delay: 2s;"></div>
    </div>

    <div class="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center relative z-10">
      
      <!-- Left: Dynamic CTA Banner -->
      <div ref="testimonyCol" class="lg:col-span-7 relative">
        <h2 class="testimony-text font-serif font-normal text-4xl md:text-5xl lg:text-[3.8rem] text-white mb-8 leading-[1.2] relative z-10 opacity-0 translate-y-8">
          El mejor momento fue cuando firmaste.<br>
          El segundo mejor momento es <span class="text-primary-light italic">hoy</span>.
        </h2>
        
        <p class="testimony-author text-neutral-400 text-lg md:text-xl font-light leading-relaxed mb-10 relative z-10 opacity-0 translate-y-8">
          Cada mes sin una estrategia es otro mes que el banco gana con tu dinero.<br class="hidden md:inline">
          Tu diagnóstico es gratuito. Tu decisión puede valer millones.
        </p>
      </div>

      <!-- Right: Glassmorphism Form Wall -->
      <div ref="formCol" class="lg:col-span-5 opacity-0 translate-y-12">
        <div class="p-8 md:p-10 rounded-[2rem] bg-neutral-900/50 backdrop-blur-2xl border border-neutral-800 shadow-[0_30px_60px_rgba(0,0,0,0.5)]">
          
          <div class="text-center mb-8">
            <h3 class="text-2xl font-bold text-white mb-2">📈 Reserva tu Diagnóstico</h3>
            <p class="text-neutral-400 text-sm font-light">Completa tus datos para iniciar el estudio sin costo.</p>
          </div>

          <form class="space-y-6" @submit.prevent="handleSubmit">
            
            <!-- Nombre Completo -->
            <div class="space-y-1 relative group">
              <input
                id="cw-name"
                v-model="formData.name"
                type="text"
                required
                autocomplete="name"
                placeholder=" "
                class="peer w-full bg-transparent border-0 border-b-2 border-neutral-700 px-0 py-3 text-white placeholder-transparent focus:ring-0 focus:border-primary-light transition-colors"
              />
              <label for="cw-name" class="absolute left-0 top-3 text-neutral-500 text-sm font-medium transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-primary-light peer-valid:-top-3.5 peer-valid:text-xs">
                Nombre Completo
              </label>
            </div>

            <!-- Cédula de Ciudadanía -->
            <div class="space-y-1 relative group">
              <input
                id="cw-identification"
                v-model="formData.identification"
                type="text"
                required
                inputmode="numeric"
                autocomplete="off"
                placeholder=" "
                class="peer w-full bg-transparent border-0 border-b-2 border-neutral-700 px-0 py-3 text-white placeholder-transparent focus:ring-0 focus:border-primary-light transition-colors"
              />
              <label for="cw-identification" class="absolute left-0 top-3 text-neutral-500 text-sm font-medium transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-primary-light peer-valid:-top-3.5 peer-valid:text-xs">
                Cédula de Ciudadanía
              </label>
            </div>

            <!-- Email -->
            <div class="space-y-1 relative group">
              <input
                id="cw-email"
                v-model="formData.email"
                type="email"
                required
                autocomplete="email"
                inputmode="email"
                placeholder=" "
                class="peer w-full bg-transparent border-0 border-b-2 border-neutral-700 px-0 py-3 text-white placeholder-transparent focus:ring-0 focus:border-primary-light transition-colors"
              />
              <label for="cw-email" class="absolute left-0 top-3 text-neutral-500 text-sm font-medium transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-primary-light peer-valid:-top-3.5 peer-valid:text-xs">
                Correo Electrónico
              </label>
            </div>

            <!-- WhatsApp -->
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
                  class="peer w-full bg-transparent border-0 border-b-2 border-neutral-700 px-0 py-3 text-white placeholder-transparent focus:ring-0 focus:border-primary-light transition-colors"
                />
                <label for="cw-phone" class="absolute left-8 top-3 text-neutral-500 text-sm font-medium transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-primary-light peer-valid:-top-3.5 peer-valid:text-xs">
                  WhatsApp
                </label>
              </div>
            </div>

            <!-- Servicio de Interés -->
            <div class="space-y-1 relative pt-4">
              <label for="cw-service" class="text-xs font-semibold text-neutral-500 uppercase tracking-wide">Servicio de interés</label>
              <select
                id="cw-service"
                v-model="formData.service"
                required
                class="w-full bg-transparent border-0 border-b-2 border-neutral-700 px-0 py-3 text-white focus:ring-0 focus:border-primary-light transition-colors appearance-none cursor-pointer"
              >
                <option value="" disabled class="bg-neutral-950">Selecciona un servicio...</option>
                <option value="Estrategia Hipotecaria" class="bg-neutral-950">Estrategia Hipotecaria</option>
                <option value="Compra de Cartera" class="bg-neutral-950">Compra de Cartera</option>
                <option value="Educación Financiera" class="bg-neutral-950">Educación Financiera</option>
                <option value="Ley de Insolvencia" class="bg-neutral-950">Ley de Insolvencia</option>
                <option value="Power BI / IA para Empresas" class="bg-neutral-950">Power BI / IA para Empresas</option>
                <option value="Posicionamiento de Marca Personal" class="bg-neutral-950">Posicionamiento de Marca Personal</option>
              </select>
            </div>

            <!-- Submit Button -->
            <button 
              type="submit"
              :disabled="loading"
              class="w-full mt-8 bg-primary hover:bg-primary-hover text-white font-bold tracking-wide py-4 px-6 rounded-xl transition-all duration-300 transform active:scale-95 flex justify-center items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_4px_20px_rgba(21,101,192,0.3)]"
            >
              <template v-if="loading">
                <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                PROCESANDO...
              </template>
              <template v-else>
                QUIERO MI DIAGNÓSTICO GRATUITO
              </template>
            </button>

            <!-- Habeas Data Trust Info -->
            <div class="text-center text-[10px] text-neutral-500 mt-4 flex items-center justify-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              Sin spam · Sin compromisos · Ley 1581 de Habeas Data
            </div>

            <!-- Status Messages -->
            <p v-if="status === 'success'" class="text-emerald-400 text-center text-sm font-medium animate-pulse mt-4">
              ✅ ¡Registro exitoso! Redireccionando a WhatsApp...
            </p>
            <p v-if="status === 'error'" class="text-red-400 text-center text-sm font-medium mt-4">
              ❌ Hubo un error al guardar los datos. Inténtalo de nuevo.
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
  service: ''
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
        phone: '+57' + formData.phone,
        identification: formData.identification,
        identification_type: 'CC',
        email: formData.email,
        observation: `Interesado en el servicio: ${formData.service}`
      })
    })

    const result = await response.json()
    
    if (result.success || response.ok) {
      status.value = 'success'

      // Pre-filled WhatsApp message
      const msg = encodeURIComponent(`Hola Rafael, soy ${formData.name}. Me interesa el servicio de: ${formData.service}. Acabo de registrar mis datos en la web.`);
      const whatsappLink = `https://wa.me/573115998747?text=${msg}`;
      
      // Open WhatsApp in a new tab
      window.open(whatsappLink, '_blank');

      // Reset form
      Object.assign(formData, {
        name: '',
        identification: '',
        email: '',
        phone: '',
        service: ''
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
