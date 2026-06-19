<template>
  <section
    id="problema"
    ref="sectionRef"
    class="relative w-full bg-[#050D1A] py-20 lg:py-28 px-6 lg:px-12 scroll-mt-28 border-t border-neutral-900"
  >
    <div class="max-w-6xl mx-auto w-full">
      <!-- Header -->
      <div class="mb-12">
        <span class="block text-xs font-semibold uppercase tracking-[0.28em] text-primary-light mb-4">
          El problema real
        </span>
        <h2 class="font-serif font-normal text-3xl md:text-5xl lg:text-[3.4rem] text-white leading-[1.1] tracking-tight max-w-4xl">
          ¿Le estás pagando al banco décadas que podrías estar viviendo?
        </h2>
      </div>

      <!-- Pain Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
        <div
          v-for="(pain, i) in pains"
          :key="i"
          class="relative overflow-hidden rounded-2xl bg-[#0A1628]/85 border border-[#1a2a3a] border-l-4 border-l-red-600 p-6 shadow-xl"
        >
          <h4 class="text-white font-semibold text-base mb-2">{{ pain.title }}</h4>
          <p class="text-neutral-400 text-sm font-light leading-relaxed">{{ pain.text }}</p>
        </div>
      </div>

      <!-- Chart module (fintech-style glass panel) -->
      <div class="relative w-full">
        <div class="rounded-[1.75rem] p-px bg-gradient-to-b from-white/15 to-transparent shadow-[0_24px_60px_-15px_rgba(0,0,0,0.6)]">
          <div class="relative rounded-[1.7rem] bg-[#0A1628]/60 backdrop-blur-2xl p-6 md:p-8 pb-14">
            <div class="pointer-events-none absolute inset-x-12 top-px h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

            <!-- Header + legend -->
            <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-7">
              <div>
                <p class="text-[11px] font-semibold uppercase tracking-[0.28em] text-neutral-500 mb-1.5">Proyección</p>
                <h4 class="text-white font-semibold text-base md:text-lg">Intereses pagados en el tiempo</h4>
              </div>
              <div class="flex items-center gap-5 text-xs">
                <span class="flex items-center gap-2 text-neutral-300"><span class="w-4 h-[3px] rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.7)]"></span>Sin estrategia</span>
                <span class="flex items-center gap-2 text-neutral-300"><span class="w-4 h-[3px] rounded-full bg-[#1565C0] shadow-[0_0_8px_rgba(21,101,192,0.8)]"></span>Con abono inteligente</span>
              </div>
            </div>

            <!-- Graph -->
            <div class="relative w-full h-[260px] md:h-[300px] border-b border-l border-white/10">
              <svg class="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 1000 500" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="uvrRedArea" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#ef4444" stop-opacity="0.22" />
                    <stop offset="100%" stop-color="#ef4444" stop-opacity="0" />
                  </linearGradient>
                  <linearGradient id="uvrBlueArea" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#1565C0" stop-opacity="0.34" />
                    <stop offset="100%" stop-color="#1565C0" stop-opacity="0" />
                  </linearGradient>
                </defs>

                <path class="area-red opacity-0" d="M 12,500 L 12,340 C 170,250 390,128 580,122 C 770,116 910,310 1000,498 L 1000,500 Z" fill="url(#uvrRedArea)" stroke="none" />
                <path class="area-blue opacity-0" d="M 12,500 L 12,340 C 120,300 270,245 360,245 C 470,245 580,400 644,498 L 644,500 Z" fill="url(#uvrBlueArea)" stroke="none" />

                <path ref="redPath" d="M 12,340 C 170,250 390,128 580,122 C 770,116 910,310 1000,498" fill="none" stroke="#ef4444" stroke-width="5" stroke-linecap="round" class="drop-shadow-[0_0_12px_rgba(239,68,68,0.5)]" stroke-dasharray="2000" stroke-dashoffset="2000" />
                <path ref="bluePath" d="M 12,340 C 120,300 270,245 360,245 C 470,245 580,400 644,498" fill="none" stroke="#1565C0" stroke-width="6" stroke-linecap="round" class="drop-shadow-[0_0_16px_rgba(21,101,192,0.85)]" stroke-dasharray="2000" stroke-dashoffset="2000" />
              </svg>

              <div class="absolute bottom-0 left-[36%] h-[51%] border-l border-dashed border-primary/40"></div>
              <div class="absolute bottom-0 left-[58%] h-[76%] border-l border-dashed border-red-500/60"></div>

              <span class="absolute -bottom-7 left-0 text-xs font-mono text-neutral-500">0</span>
              <span class="absolute -bottom-7 left-[36%] -translate-x-1/2 text-xs font-bold text-primary-light">P.E.</span>
              <span class="absolute -bottom-7 left-[58%] -translate-x-1/2 text-xs font-bold text-red-400">P.E.</span>
              <span class="absolute -bottom-7 right-0 text-xs font-bold text-red-400">30 años</span>
              <span class="absolute -bottom-[3.1rem] left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.35em] text-neutral-600">Años</span>

              <div ref="crossText" class="opacity-0">
                <div class="absolute top-[49%] left-[36%] -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-white rounded-full shadow-[0_0_18px_rgba(255,255,255,0.9)] ring-4 ring-primary/30"></div>
                <div class="absolute top-[49%] left-[36%] -translate-x-1/2 translate-y-4">
                  <span class="whitespace-nowrap px-3 py-1.5 rounded-full bg-neutral-900/90 border border-primary/40 backdrop-blur-md text-primary-light text-[11px] md:text-xs font-semibold shadow-[0_4px_16px_rgba(0,0,0,0.4)]">
                    Tu casa, libre años antes
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const sectionRef = ref(null)
const redPath = ref(null)
const bluePath = ref(null)
const crossText = ref(null)

const pains = [
  {
    title: 'Tu saldo UVR sube aunque pagues',
    text: 'Cada mes depositas tu cuota puntualmente — y tu saldo en pesos sigue creciendo. Estás financiando al banco, no a tu vivienda.',
  },
  {
    title: 'Los primeros 10 años pagas solo intereses',
    text: 'El 85% de tu cuota en los primeros años se va en intereses. El banco cobra primero. Siempre. Y tú no lo ves en el extracto.',
  },
  {
    title: '30 años es demasiado tiempo para vivir en deuda',
    text: 'Una hipoteca de 30 años no es una condena inevitable. Es una fórmula matemática que puede ser reescrita — si sabes cómo.',
  },
]

let ctx

onMounted(() => {
  if (!process.client) return
  gsap.registerPlugin(ScrollTrigger)

  ctx = gsap.context(() => {
    // Normalize each curve's dash array to its real length
    ;[redPath.value, bluePath.value].forEach((p) => {
      if (!p) return
      const len = p.getTotalLength()
      p.style.strokeDasharray = String(len)
      p.style.strokeDashoffset = String(len)
    })

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      gsap.set([redPath.value, bluePath.value], { strokeDashoffset: 0 })
      gsap.set(['.area-red', '.area-blue', crossText.value], { opacity: 1 })
      return
    }

    // Draw once when the chart scrolls into view
    const tl = gsap.timeline({
      scrollTrigger: { trigger: sectionRef.value, start: 'top 65%', once: true },
    })
    tl.to(redPath.value, { strokeDashoffset: 0, duration: 1.6, ease: 'power1.inOut' }, 0)
      .to('.area-red', { opacity: 1, duration: 1.2 }, 0.3)
      .to(bluePath.value, { strokeDashoffset: 0, duration: 1.6, ease: 'power3.inOut' }, 0.6)
      .to('.area-blue', { opacity: 1, duration: 1.2 }, 0.9)
      .to(crossText.value, { opacity: 1, duration: 0.5, ease: 'power2.out' }, 1.6)
  }, sectionRef.value)
})

onUnmounted(() => {
  if (ctx) ctx.revert()
})
</script>
