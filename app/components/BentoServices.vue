<template>
  <section id="servicios" ref="bentoSection" class="py-32 px-6 lg:px-12 bg-neutral-50 transition-colors duration-1000 ease-in-out scroll-mt-20">
    <div class="max-w-7xl mx-auto w-full">
      
      <div class="text-center mb-16">
        <h2 class="bento-title font-serif font-normal text-4xl md:text-5xl lg:text-6xl text-neutral-900 mb-6 opacity-0 translate-y-6">Servicios Integrales</h2>
        <p class="bento-title text-neutral-600 max-w-2xl mx-auto text-xl opacity-0 translate-y-6">Soluciones de alto nivel estructuradas con rigor matemático.</p>
      </div>

      <!-- Bento Grid Container -->
      <div class="bento-grid grid grid-cols-1 md:grid-cols-3 gap-6 group">
        
        <!-- Main Highlight Card -->
        <div class="bento-card md:col-span-2 md:row-span-2 relative rounded-3xl bg-neutral-900 border border-neutral-800 p-8 md:p-12 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-primary hover:shadow-[0_0_40px_rgba(99,91,255,0.35)] cursor-pointer opacity-0 translate-y-12 group-hover:opacity-50 hover:!opacity-100">
          <div class="relative z-10 flex flex-col h-full justify-between">
            <div class="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 border border-primary/20">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="text-primary-light"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
            </div>
            <div>
              <h3 class="text-3xl md:text-4xl font-bold text-white mb-4">Estrategia Hipotecaria</h3>
              <p class="text-neutral-400 text-lg font-light leading-relaxed max-w-lg">
                Nuestro producto estrella. Rediseñamos la estructura de tu deuda con el banco aplicando abonos inteligentes para liquidar tu crédito en una fracción del tiempo estipulado.
              </p>
            </div>
          </div>
          <div class="absolute -bottom-20 -right-20 w-80 h-80 bg-primary/20 blur-[100px] rounded-full pointer-events-none"></div>
        </div>

        <!-- Secondary Card 1 -->
        <div class="bento-card relative rounded-3xl bg-neutral-900 border border-neutral-800 p-8 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-cyan-500 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] cursor-pointer opacity-0 translate-y-12 group-hover:opacity-50 hover:!opacity-100">
          <div class="relative z-10">
            <div class="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6 border border-cyan-500/20">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="text-cyan-400"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">Optimización de Liquidez</h3>
            <p class="text-neutral-400 font-light text-sm leading-relaxed">
              Gestión matemática de flujo de caja para liberar capital mensual atrapado en gastos invisibles.
            </p>
          </div>
        </div>

        <!-- Secondary Card 2 -->
        <div class="bento-card relative rounded-3xl bg-neutral-900 border border-neutral-800 p-8 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-violet-500 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] cursor-pointer opacity-0 translate-y-12 group-hover:opacity-50 hover:!opacity-100">
          <div class="relative z-10">
            <div class="w-12 h-12 bg-violet-500/10 rounded-xl flex items-center justify-center mb-6 border border-violet-500/20">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="text-violet-400"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">Inteligencia de Negocios</h3>
            <p class="text-neutral-400 font-light text-sm leading-relaxed">
              Modelos predictivos y análisis de datos aplicados a las finanzas de tu emprendimiento.
            </p>
          </div>
        </div>

        <!-- Secondary Card 3 -->
        <div class="bento-card md:col-span-3 relative rounded-3xl bg-neutral-900 border border-neutral-800 p-8 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-emerald-500 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] cursor-pointer opacity-0 translate-y-12 group-hover:opacity-50 hover:!opacity-100 flex flex-col md:flex-row items-start md:items-center gap-6">
          <div class="w-14 h-14 shrink-0 bg-emerald-500/10 rounded-xl flex items-center justify-center border border-emerald-500/20">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="text-emerald-400"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
          </div>
          <div class="flex-1">
            <h3 class="text-2xl font-bold text-white mb-2">Mentoría para Profesionales (+40)</h3>
            <p class="text-neutral-400 font-light text-base leading-relaxed max-w-3xl">
              Solidifica tu patrimonio mitigando riesgos de mercado y estructurando un retiro anticipado sólido.
            </p>
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

const bentoSection = ref(null)
let ctx

onMounted(() => {
  if (!process.client) return
  gsap.registerPlugin(ScrollTrigger)

  ctx = gsap.context(() => {
    
    // Transition from Light back to Dark
    gsap.to(bentoSection.value, {
      scrollTrigger: {
        trigger: bentoSection.value,
        start: 'top 40%',
        end: 'top top',
        scrub: true,
      },
      backgroundColor: '#0a0a0a',
      color: '#ffffff',
      ease: 'none'
    })

    // Fade up Titles
    gsap.to('.bento-title', {
      scrollTrigger: {
        trigger: bentoSection.value,
        start: 'top 70%',
      },
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out'
    })

    // Bento Cards Entrance
    gsap.to('.bento-card', {
      scrollTrigger: {
        trigger: '.bento-grid',
        start: 'top 80%',
      },
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.15,
      ease: 'power3.out'
    })

  })
})

onUnmounted(() => {
  if (ctx) ctx.revert()
})
</script>
