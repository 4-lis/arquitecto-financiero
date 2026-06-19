<template>
  <section ref="sectionRef" class="py-24 lg:py-32 px-6 lg:px-12 bg-[#050D1A] scroll-mt-20">
    <div class="max-w-4xl mx-auto w-full">
      <!-- Header -->
      <div class="text-center mb-16">
        <span class="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary-light text-xs font-semibold tracking-widest uppercase mb-4 faq-anim opacity-0 translate-y-6">
          Preguntas frecuentes
        </span>
        <h2 class="faq-anim font-serif font-normal text-4xl md:text-5xl text-white opacity-0 translate-y-6">
          Todo lo que necesitas saber antes de decidir
        </h2>
      </div>

      <!-- FAQ Accordion -->
      <div class="space-y-4">
        <div
          v-for="(item, index) in faqs"
          :key="index"
          class="faq-anim opacity-0 translate-y-8 border-b border-neutral-800/80 pb-4"
        >
          <button
            class="w-full flex justify-between items-center text-left py-4 text-white hover:text-primary-light transition-colors duration-200"
            @click="toggleFaq(index)"
          >
            <span class="text-lg md:text-xl font-medium tracking-tight pr-4">
              {{ item.question }}
            </span>
            <span class="shrink-0 text-neutral-500 hover:text-primary-light transition-transform duration-300 transform" :class="{ 'rotate-180 text-primary-light': activeIndex === index }">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </span>
          </button>

          <!-- Answer transition -->
          <div
            ref="answers"
            class="overflow-hidden transition-all duration-300 ease-in-out"
            :style="{ maxHeight: activeIndex === index ? getAnswerHeight(index) : '0px' }"
          >
            <p class="text-neutral-400 text-base md:text-lg font-light leading-relaxed pt-2 pb-4">
              {{ item.answer }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const sectionRef = ref(null)
const answers = ref([])
const activeIndex = ref(null)

const faqs = [
  {
    question: '¿Tengo que cambiar de banco para optimizar mi hipoteca?',
    answer: 'No. La estrategia aplica dentro de tu banco actual, sin necesidad de refinanciar ni trasladar el crédito.',
  },
  {
    question: '¿Cuánto puedo ahorrar realmente?',
    answer: 'En promedio, nuestros clientes recuperan entre 8 y 15 años de deuda y ahorran más de $150MM en intereses, dependiendo del saldo y plazo restante.',
  },
  {
    question: '¿Necesito tener mucho dinero para empezar?',
    answer: 'No. La estrategia puede comenzar con montos pequeños aplicados de forma inteligente. El diagnóstico inicial es completamente gratuito.',
  },
  {
    question: '¿Qué pasa si mi crédito es en UVR?',
    answer: 'Las hipotecas en UVR son precisamente las que más se benefician. El Método ARES™ está diseñado para compensar el aumento del saldo con abonos estratégicos a capital.',
  },
  {
    question: '¿Cómo es la primera sesión?',
    answer: 'Es un diagnóstico financiero gratuito de 30-45 minutos donde analizamos tu situación, identificamos oportunidades y te presentamos las opciones disponibles. Sin compromisos.',
  },
  {
    question: '¿Trabajan también con empresas?',
    answer: 'Sí. Para empresas ofrecemos consultoría financiera con Power BI, dashboards de gestión e implementación de IA para toma de decisiones en tiempo real.',
  },
]

const toggleFaq = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index
}

const getAnswerHeight = (index) => {
  const el = answers.value[index]
  return el ? `${el.scrollHeight}px` : '500px'
}

let ctx

onMounted(() => {
  if (!process.client) return
  gsap.registerPlugin(ScrollTrigger)

  ctx = gsap.context(() => {
    const mm = gsap.matchMedia()

    // Desktop
    mm.add("(min-width: 1024px)", () => {
      gsap.set(sectionRef.value, { backgroundColor: '#050D1A' })

      gsap.to('.faq-anim', {
        scrollTrigger: {
          trigger: sectionRef.value,
          start: 'top 60%',
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out'
      })
    })

    // Mobile
    mm.add("(max-width: 1023px)", () => {
      gsap.set(sectionRef.value, { backgroundColor: '#050D1A' })
      gsap.set('.faq-anim', { y: 0, opacity: 1 })
    })
  })
})

onUnmounted(() => {
  if (ctx) ctx.revert()
})
</script>
