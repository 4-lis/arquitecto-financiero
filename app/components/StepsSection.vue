<template>
  <section id="metodo-ares" ref="sectionRef" class="bg-[#050D1A] py-24 lg:py-32 border-t border-neutral-800">
    <div class="max-w-7xl mx-auto px-6 lg:px-12 w-full">
      <!-- Header -->
      <div ref="headerRef" class="text-center mb-16 opacity-0 translate-y-8">
        <span class="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-widest uppercase mb-4">
          El Método ARES™
        </span>
        <h2 class="font-serif text-4xl sm:text-5xl text-neutral-900">
          Cuatro pasos hacia tu libertad financiera
        </h2>
      </div>

      <!-- Steps Grid -->
      <div ref="cardsRef" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="(step, index) in steps"
          :key="index"
          class="step-card bg-white border border-neutral-200 shadow-sm rounded-2xl p-8 text-center group hover:border-primary/40 hover:shadow-[0_10px_30px_rgba(21,101,192,0.15)] transition-all duration-300 opacity-0 translate-y-12"
        >
          <div class="font-serif text-5xl md:text-6xl font-bold text-primary line-height-1 mb-4 select-none group-hover:scale-110 transition-transform duration-300">
            {{ step.letter }}
          </div>
          <h3 class="font-sans font-semibold text-lg text-neutral-900 mb-3">
            {{ step.title }}
          </h3>
          <p class="text-neutral-600 text-sm leading-relaxed font-light">
            {{ step.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const sectionRef = ref(null)
const headerRef = ref(null)
const cardsRef = ref(null)

const steps = [
  {
    letter: 'A',
    title: 'Analizar',
    description: 'Estudiamos tu extracto actual y el plan de amortización real para encontrar las fugas de dinero.',
  },
  {
    letter: 'R',
    title: 'Reestructurar',
    description: 'Diseñamos una propuesta a la medida, proyectando el ahorro exacto en años e intereses.',
  },
  {
    letter: 'E',
    title: 'Ejecutar',
    description: 'Radicamos y gestionamos la solicitud formal ante tu entidad bancaria, asegurando la aprobación.',
  },
  {
    letter: 'S',
    title: 'Sostener',
    description: 'Te acompañamos durante la vida del crédito para asegurar que cada abono posterior siga la estrategia.',
  },
]

onMounted(() => {
  if (!process.client) return

  const { gsap } = useGsap()

  const mm = gsap.matchMedia()

  // Desktop Scroll-driven transitions
  mm.add("(min-width: 1024px)", () => {
    // Background transition
    gsap.fromTo(sectionRef.value,
      { backgroundColor: '#050D1A' },
      {
        scrollTrigger: {
          trigger: sectionRef.value,
          start: 'top 80%',
          end: 'top 40%',
          scrub: true,
        },
        backgroundColor: '#ffffff',
        ease: 'none'
      }
    )

    // Animate Header
    gsap.to(headerRef.value, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.value,
        start: 'top 60%',
        once: true
      }
    })

    // Animate Step Cards
    const cards = cardsRef.value?.children
    if (cards) {
      gsap.to(cards, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardsRef.value,
          start: 'top 60%',
          once: true
        }
      })
    }
  })

  // Mobile layout
  mm.add("(max-width: 1023px)", () => {
    gsap.set(sectionRef.value, { backgroundColor: '#ffffff' })
    gsap.set(headerRef.value, { opacity: 1, y: 0 })
    const cards = cardsRef.value?.children
    if (cards) {
      gsap.set(cards, { opacity: 1, y: 0 })
    }
  })
})
</script>
