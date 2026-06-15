<template>
  <section ref="sectionRef" class="py-24 lg:py-32 px-6 lg:px-12 bg-[#050D1A]">
    <div class="max-w-7xl mx-auto w-full">

      <!-- Header -->
      <div class="text-center mb-16">
        <span class="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary-light text-xs font-semibold tracking-widest uppercase mb-4 story-title opacity-0 translate-y-6">
          Resultados reales
        </span>
        <h2 class="story-title font-serif font-normal text-4xl md:text-5xl text-white opacity-0 translate-y-6">
          Familias y empresas que ya reescribieron su historia
        </h2>
      </div>

      <!-- Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="(story, index) in stories"
          :key="index"
          class="story-card relative rounded-2xl bg-neutral-900/60 border border-neutral-800 p-7 flex flex-col gap-4 opacity-0 translate-y-10 hover:border-primary/40 hover:shadow-[0_10px_30px_rgba(21,101,192,0.15)] transition-all duration-300"
        >
          <!-- Metric -->
          <div>
            <div class="text-4xl font-bold text-primary-light">{{ story.metric }}</div>
            <div class="text-neutral-500 text-sm mt-0.5">{{ story.metricLabel }}</div>
          </div>

          <!-- Tag -->
          <div class="inline-flex items-center gap-1.5 text-xs text-neutral-400">
            <component :is="story.icon" :size="13" class="text-primary-light" />
            {{ story.tag }}
          </div>

          <!-- Stars -->
          <div class="text-yellow-400 text-sm tracking-widest">★★★★★</div>

          <!-- Quote -->
          <p class="text-neutral-300 text-sm leading-relaxed font-light border-t border-neutral-800 pt-4">
            "{{ story.quote }}"
          </p>

          <!-- Attribution -->
          <p class="text-neutral-500 text-xs">— {{ story.author }}</p>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Home, Star, BarChart2 } from 'lucide-vue-next'

const sectionRef = ref(null)

const stories = [
  {
    metric: '$52M',
    metricLabel: 'ahorrado en intereses',
    icon: Home,
    tag: 'Hipotecaria UVR · Bogotá',
    quote: 'Rafael nos mostró algo que el banco nunca nos explicó. Llevamos 8 meses aplicando la estrategia y ya recuperamos 4 años de deuda.',
    author: 'Carlos G., Ingeniero · Bogotá',
  },
  {
    metric: '12 clientes',
    metricLabel: 'en 90 días desde redes',
    icon: Star,
    tag: 'Marca Personal · Medellín',
    quote: 'Pasé de regalar contenido a convertirlo en clientes reales. El programa cambió mi forma de verme como profesional.',
    author: 'Viviana O., Consultora · Medellín',
  },
  {
    metric: '−80%',
    metricLabel: 'tiempo en análisis financiero',
    icon: BarChart2,
    tag: 'Power BI + IA · Cali',
    quote: 'Ahora tomamos decisiones con datos de hoy, no de la semana pasada. El dashboard cambió nuestra operación.',
    author: 'Gerente Financiero · Constructora, Cali',
  },
]

let ctx

onMounted(() => {
  if (!process.client) return
  gsap.registerPlugin(ScrollTrigger)

  ctx = gsap.context(() => {
    gsap.to('.story-title', {
      scrollTrigger: { trigger: sectionRef.value, start: 'top 80%' },
      y: 0, opacity: 1, duration: 0.9, stagger: 0.2, ease: 'power3.out'
    })
    gsap.to('.story-card', {
      scrollTrigger: { trigger: sectionRef.value, start: 'top 70%' },
      y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out'
    })
  })
})

onUnmounted(() => {
  if (ctx) ctx.revert()
})
</script>
