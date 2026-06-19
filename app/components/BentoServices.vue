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

      <!-- Services Grid — homogeneous cards -->
      <div class="bento-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 group">
        <div
          v-for="(service, i) in services"
          :key="i"
          class="bento-card relative rounded-3xl bg-mercury-panel border border-mercury-border p-8 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(21,101,192,0.25)] cursor-pointer opacity-0 translate-y-12 group-hover:opacity-50 hover:!opacity-100 flex flex-col h-full"
        >
          <div class="relative z-10 flex flex-col h-full">
            <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 border border-primary/20 text-primary-light" v-html="service.icon"></div>
            <h3 class="text-xl font-bold text-white mb-3">{{ service.title }}</h3>
            <p class="text-neutral-400 font-light text-sm leading-relaxed mb-6">{{ service.description }}</p>
            <a
              class="mt-auto text-primary-light text-sm font-semibold hover:underline inline-flex items-center gap-1.5"
              :href="service.href"
              target="_blank"
            >
              {{ service.cta }} →
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

const services = [
  {
    title: 'Estrategia Hipotecaria',
    description: 'Rediseñamos la estructura de tu crédito con abonos inteligentes a capital. De 30 años a 12 — sin cambiar de banco.',
    cta: 'Quiero ahorrar en mi hipoteca',
    href: 'https://wa.me/573115998747?text=Quiero+información+sobre+Estrategia+Hipotecaria',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>',
  },
  {
    title: 'Compra de Cartera',
    description: 'Consolidamos tus deudas y diseñamos la reestructuración óptima para reducir tu cuota mensual inmediatamente.',
    cta: 'Analizar mis créditos',
    href: 'https://wa.me/573115998747?text=Quiero+información+sobre+Compra+de+Cartera',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>',
  },
  {
    title: 'Educación Financiera',
    description: 'Diagnóstico completo de tus finanzas personales. Plan de ahorro y estrategia para salir de deudas definitivamente.',
    cta: 'Quiero mi diagnóstico',
    href: 'https://wa.me/573115998747?text=Quiero+mi+diagnóstico+financiero+gratuito',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>',
  },
  {
    title: 'Ley de Insolvencia',
    description: 'Si el sistema financiero te aplastó, hay una salida legal. Diseñamos tu ruta de recuperación crediticia bajo la Ley 1380.',
    cta: 'Hablar con Rafael',
    href: 'https://wa.me/573115998747?text=Quiero+información+sobre+Ley+de+Insolvencia',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 3v18M5 7h14M7 7l-3 7h6l-3-7zm10 0l-3 7h6l-3-7z"></path></svg>',
  },
  {
    title: 'Power BI & IA para Empresas',
    description: 'Consultoría financiera con Power BI, dashboards de gestión e implementación de IA para toma de decisiones.',
    cta: 'Optimizar mi empresa',
    href: 'https://wa.me/573115998747?text=Quiero+información+sobre+Power+BI+y+IA+para+Empresas',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>',
  },
  {
    title: 'Posicionamiento de Marca Personal',
    description: 'Acompañamiento estratégico para profesionales que buscan empaquetar su conocimiento, potenciar su alcance y captar clientes orgánicamente.',
    cta: 'Desarrollar mi marca',
    href: 'https://wa.me/573115998747?text=Quiero+información+sobre+Marca+Personal',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>',
  },
]

onMounted(() => {
  if (!process.client) return

  const { gsap } = useGsap()

  ctx = gsap.context(() => {
    
    const mm = gsap.matchMedia()

    // Desktop
    mm.add("(min-width: 1024px)", () => {
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

    // Mobile
    mm.add("(max-width: 1023px)", () => {
      gsap.set(bentoSection.value, { backgroundColor: '#0A1628' })
      gsap.set('.bento-title', { y: 0, opacity: 1 })
      gsap.set('.bento-card', { y: 0, opacity: 1 })
    })

  })
})

onUnmounted(() => {
  if (ctx) ctx.revert()
})
</script>
