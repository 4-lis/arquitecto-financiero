<template>
  <section ref="sectionRef" class="py-24 lg:py-32 px-6 lg:px-12 bg-[#050D1A] relative overflow-hidden">
    <!-- Grid Background Pattern -->
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

    <div class="max-w-4xl mx-auto w-full relative z-10">
      <!-- Header -->
      <div class="text-center mb-16">
        <span class="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary-light text-xs font-semibold tracking-widest uppercase mb-4 calc-anim opacity-0 translate-y-6">
          Herramienta gratuita
        </span>
        <h2 class="calc-anim font-serif font-normal text-4xl md:text-5xl text-white mb-6 opacity-0 translate-y-6">
          Descubre cuánto puedes ahorrar en 30 segundos
        </h2>
        <p class="calc-anim text-neutral-400 text-lg max-w-xl mx-auto font-light leading-relaxed opacity-0 translate-y-6">
          Simula de forma inmediata el impacto financiero de reducir los intereses abusivos de tu crédito de vivienda.
        </p>
      </div>

      <!-- Calculator Box -->
      <div class="calc-anim opacity-0 translate-y-10 bg-neutral-900/40 border border-neutral-800 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <!-- Saldo Input -->
          <div class="flex flex-col gap-2">
            <label for="saldo" class="text-neutral-300 text-sm font-medium">
              Saldo actual de tu hipoteca ($COP)
            </label>
            <div class="relative">
              <span class="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 font-semibold">$</span>
              <input
                id="saldo"
                v-model.number="saldo"
                type="number"
                placeholder="Ej: 180000000"
                class="w-full bg-neutral-950/60 border border-neutral-800 focus:border-primary-light focus:ring-1 focus:ring-primary-light rounded-xl py-3.5 pl-8 pr-4 text-white placeholder-neutral-600 outline-none transition-all"
              />
            </div>
            <span class="text-xs text-neutral-500">Mínimo sugerido: $10,000,000 COP</span>
          </div>

          <!-- Años Input -->
          <div class="flex flex-col gap-2">
            <label for="anos" class="text-neutral-300 text-sm font-medium">
              Años restantes de tu crédito
            </label>
            <input
              id="anos"
              v-model.number="anos"
              type="number"
              min="1"
              max="30"
              placeholder="Ej: 25"
              class="w-full bg-neutral-950/60 border border-neutral-800 focus:border-primary-light focus:ring-1 focus:ring-primary-light rounded-xl py-3.5 px-4 text-white placeholder-neutral-600 outline-none transition-all"
            />
            <span class="text-xs text-neutral-500">Rango: 2 a 30 años</span>
          </div>
        </div>

        <!-- Results Block -->
        <div class="border-t border-neutral-800/80 pt-10">
          <div v-if="isValid" class="grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">
            <div>
              <div class="text-5xl font-extrabold text-primary-light tracking-tight mb-2">
                {{ formatCurrency(ahorro) }}
              </div>
              <div class="text-neutral-400 text-sm">
                ahorro proyectado en intereses
              </div>
            </div>
            <div>
              <div class="text-5xl font-extrabold text-white tracking-tight mb-2">
                {{ anosR }} años
              </div>
              <div class="text-neutral-400 text-sm">
                que recuperas de tu vida
              </div>
            </div>
          </div>
          <div v-else class="text-center py-4">
            <p class="text-neutral-500 text-sm font-light">
              Ingresa tu saldo (mín. $10M) y los años restantes para ver tu potencial de ahorro
            </p>
          </div>
        </div>

        <!-- Disclaimer & CTA -->
        <div v-if="isValid" class="mt-10 flex flex-col items-center gap-6 border-t border-neutral-800/50 pt-8">
          <p class="text-xs text-neutral-500 text-center max-w-lg">
            *Estimación referencial. Esta proyección asume una tasa promedio y reducción óptima. Rafael validará tu caso exacto y amortización real en tu diagnóstico personalizado y sin costo.
          </p>
          <a
            :href="whatsappUrl"
            target="_blank"
            class="inline-flex items-center gap-3 px-8 py-4 bg-primary hover:bg-primary-hover text-white text-base font-semibold rounded-full shadow-[0_4px_20px_rgba(21,101,192,0.3)] transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Quiero que Rafael valide este número
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const sectionRef = ref(null)

const saldo = ref(null)
const anos = ref(null)

// Validations
const isValid = computed(() => {
  return saldo.value >= 10000000 && anos.value >= 2 && anos.value <= 30
})

// Calculations
const tm = 0.12 / 12
const ahorro = computed(() => {
  if (!isValid.value) return 0
  const s = saldo.value
  const a = anos.value
  const n = a * 12
  const cuota = s * (tm * Math.pow(1 + tm, n)) / (Math.pow(1 + tm, n) - 1)
  const intSin = cuota * n - s
  const nCon = Math.round(n * 0.42)
  const intCon = cuota * 1.18 * nCon - s
  return Math.max(0, intSin - intCon)
})

const anosR = computed(() => {
  if (!isValid.value) return 0
  const a = anos.value
  const n = a * 12
  const nCon = Math.round(n * 0.42)
  return Math.round((n - nCon) / 12)
})

// Formatting helper
const formatCurrency = (val) => {
  return '$' + Math.round(val / 1000000).toLocaleString('es-CO') + 'M'
}

// WhatsApp URL
const whatsappUrl = computed(() => {
  const baseText = `Quiero que Rafael valide mi cálculo de ahorro hipotecario con el Método ARES. Saldo: $${(saldo.value || 0).toLocaleString('es-CO')}, Años restantes: ${anos.value || 0}.`
  return `https://wa.me/573115998747?text=${encodeURIComponent(baseText)}`
})

// GSAP Animations
let ctx

onMounted(() => {
  if (!process.client) return
  gsap.registerPlugin(ScrollTrigger)

  ctx = gsap.context(() => {
    gsap.to('.calc-anim', {
      scrollTrigger: {
        trigger: sectionRef.value,
        start: 'top 80%',
      },
      y: 0,
      opacity: 1,
      duration: 0.9,
      stagger: 0.15,
      ease: 'power3.out'
    })
  })
})

onUnmounted(() => {
  if (ctx) ctx.revert()
})
</script>
