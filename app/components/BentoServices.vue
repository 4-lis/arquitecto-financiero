<template>
  <section id="servicios" ref="bentoSection" class="py-32 px-6 lg:px-12 bg-[#0A1628] transition-colors duration-1000 ease-in-out scroll-mt-20">
    <div class="max-w-7xl mx-auto w-full">
      
      <div class="text-center mb-16">
        <span class="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary-light text-xs font-semibold tracking-widest uppercase mb-4 bento-title opacity-0 translate-y-6">
          Soluciones integrales
        </span>
        <h2 class="bento-title font-serif font-normal text-4xl md:text-5xl lg:text-6xl text-white mb-6 opacity-0 translate-y-6">
          Para cada etapa de tu libertad financiera
        </h2>
      </div>

      <!-- Bento Grid Container -->
      <div class="bento-grid grid grid-cols-1 md:grid-cols-3 gap-6 group">
        
        <!-- Service 1: Estrategia Hipotecaria (Highlight - span-2) -->
        <div class="bento-card md:col-span-2 md:row-span-2 relative rounded-3xl bg-mercury-panel border border-mercury-border p-8 md:p-12 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-primary hover:shadow-[0_0_40px_rgba(21,101,192,0.35)] cursor-pointer opacity-0 translate-y-12 group-hover:opacity-50 hover:!opacity-100 flex flex-col justify-between">
          <div class="relative z-10 flex flex-col h-full justify-between">
            <div class="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 border border-primary/20">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="text-primary-light"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
            </div>
            <div>
              <h3 class="text-3xl md:text-4xl font-bold text-white mb-4">Estrategia Hipotecaria</h3>
              <p class="text-neutral-400 text-base md:text-lg font-light leading-relaxed max-w-lg mb-6">
                Rediseñamos la estructura de tu crédito con abonos inteligentes a capital. De 30 años a 12 — sin cambiar de banco.
              </p>
              <a class="text-primary-light font-semibold hover:underline inline-flex items-center gap-1.5" href="https://wa.me/573115998747?text=Quiero+información+sobre+Estrategia+Hipotecaria" target="_blank">
                Quiero ahorrar en mi hipoteca →
              </a>
            </div>
          </div>
          <div class="absolute -bottom-20 -right-20 w-80 h-80 bg-primary/20 blur-[100px] rounded-full pointer-events-none"></div>
        </div>

        <!-- Service 2: Compra de Cartera -->
        <div class="bento-card relative rounded-3xl bg-mercury-panel border border-mercury-border p-8 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(21,101,192,0.25)] cursor-pointer opacity-0 translate-y-12 group-hover:opacity-50 hover:!opacity-100 flex flex-col justify-between">
          <div class="relative z-10">
            <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 border border-primary/20">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="text-primary-light"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">Compra de Cartera</h3>
            <p class="text-neutral-400 font-light text-sm leading-relaxed mb-6">
              Consolidamos tus deudas y diseñamos la reestructuración óptima para reducir tu cuota mensual inmediatamente.
            </p>
            <a class="text-primary-light text-sm font-semibold hover:underline inline-flex items-center gap-1.5" href="https://wa.me/573115998747?text=Quiero+información+sobre+Compra+de+Cartera" target="_blank">
              Analizar mis créditos →
            </a>
          </div>
        </div>

        <!-- Service 3: Educación Financiera -->
        <div class="bento-card relative rounded-3xl bg-mercury-panel border border-mercury-border p-8 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(21,101,192,0.25)] cursor-pointer opacity-0 translate-y-12 group-hover:opacity-50 hover:!opacity-100 flex flex-col justify-between">
          <div class="relative z-10">
            <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 border border-primary/20">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="text-primary-light"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">Educación Financiera</h3>
            <p class="text-neutral-400 font-light text-sm leading-relaxed mb-6">
              Diagnóstico completo de tus finanzas personales. Plan de ahorro y estrategia para salir de deudas definitivamente.
            </p>
            <a class="text-primary-light text-sm font-semibold hover:underline inline-flex items-center gap-1.5" href="https://wa.me/573115998747?text=Quiero+mi+diagnóstico+financiero+gratuito" target="_blank">
              Quiero mi diagnóstico →
            </a>
          </div>
        </div>

        <!-- Service 4: Ley de Insolvencia (Highlight - span-2) -->
        <div class="bento-card md:col-span-2 relative rounded-3xl bg-mercury-panel border border-mercury-border p-8 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-primary hover:shadow-[0_0_30px_rgba(21,101,192,0.25)] cursor-pointer opacity-0 translate-y-12 group-hover:opacity-50 hover:!opacity-100 flex flex-col md:flex-row items-start md:items-center gap-6">
          <div class="w-14 h-14 shrink-0 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="text-primary-light"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
          </div>
          <div class="flex-1">
            <h3 class="text-2xl font-bold text-white mb-2">Ley de Insolvencia</h3>
            <p class="text-neutral-400 font-light text-sm md:text-base leading-relaxed mb-4">
              Si el sistema financiero te aplastó, hay una salida legal. Diseñamos tu ruta de recuperación crediticia bajo la Ley 1380.
            </p>
            <a class="text-primary-light font-semibold hover:underline inline-flex items-center gap-1.5" href="https://wa.me/573115998747?text=Quiero+información+sobre+Ley+de+Insolvencia" target="_blank">
              Hablar con Rafael →
            </a>
          </div>
        </div>

        <!-- Service 5: Power BI & IA para Empresas -->
        <div class="bento-card relative rounded-3xl bg-mercury-panel border border-mercury-border p-8 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(21,101,192,0.25)] cursor-pointer opacity-0 translate-y-12 group-hover:opacity-50 hover:!opacity-100 flex flex-col justify-between">
          <div class="relative z-10">
            <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 border border-primary/20">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="text-primary-light"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">Power BI & IA para Empresas</h3>
            <p class="text-neutral-400 font-light text-sm leading-relaxed mb-6">
              Consultoría financiera con Power BI, dashboards de gestión e implementación de IA para toma de decisiones.
            </p>
            <a class="text-primary-light text-sm font-semibold hover:underline inline-flex items-center gap-1.5" href="https://wa.me/573115998747?text=Quiero+información+sobre+Power+BI+y+IA+para+Empresas" target="_blank">
              Optimizar mi empresa →
            </a>
          </div>
        </div>

        <!-- Service 6: Posicionamiento de Marca Personal (span-3) -->
        <div class="bento-card md:col-span-3 relative rounded-3xl bg-mercury-panel border border-mercury-border p-8 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-primary hover:shadow-[0_0_30px_rgba(21,101,192,0.25)] cursor-pointer opacity-0 translate-y-12 group-hover:opacity-50 hover:!opacity-100 flex flex-col md:flex-row items-start md:items-center gap-6">
          <div class="w-14 h-14 shrink-0 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="text-primary-light"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
          </div>
          <div class="flex-1">
            <h3 class="text-2xl font-bold text-white mb-2">Posicionamiento de Marca Personal</h3>
            <p class="text-neutral-400 font-light text-sm md:text-base leading-relaxed mb-4">
              Acompañamiento estratégico para profesionales que buscan empaquetar su conocimiento, potenciar su alcance y captar clientes orgánicamente.
            </p>
            <a class="text-primary-light font-semibold hover:underline inline-flex items-center gap-1.5" href="https://wa.me/573115998747?text=Quiero+información+sobre+Marca+Personal" target="_blank">
              Desarrollar mi marca →
            </a>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const bentoSection = ref(null)
let ctx

onMounted(() => {
  if (!process.client) return

  const { gsap } = useGsap()

  ctx = gsap.context(() => {
    
    // Transition background color to match design
    gsap.fromTo(bentoSection.value, 
      { backgroundColor: '#ffffff' },
      {
        scrollTrigger: {
          trigger: bentoSection.value,
          start: 'top 80%',
          end: 'top 40%',
          scrub: true,
        },
        backgroundColor: '#0A1628',
        ease: 'none'
      }
    )

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
      stagger: 0.12,
      ease: 'power3.out'
    })

  })
})

onUnmounted(() => {
  if (ctx) ctx.revert()
})
</script>
