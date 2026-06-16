<template>
  <section id="rafael" ref="profileSection" class="relative py-32 px-6 lg:px-12 bg-[#0A1628] scroll-mt-20">
    <div class="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

      <!-- Left: Photo + Credentials -->
      <div class="lg:col-span-4 flex flex-col items-center lg:items-start gap-6">
        <div class="relative w-full max-w-sm rounded-[2rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
          <img
            ref="parallaxImage"
            src="/rafael_rivera_profile.jpg"
            alt="Rafael Mauricio Rivera Álvarez"
            loading="lazy"
            decoding="async"
            class="w-full h-auto object-cover object-top"
          />
          <div class="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-[2rem]"></div>
        </div>

        <!-- Name & Role -->
        <div class="text-center lg:text-left">
          <div class="text-neutral-900 font-semibold text-xl profile-text opacity-0">Rafael Mauricio Rivera Álvarez</div>
          <div class="text-primary text-sm mt-1 profile-text opacity-0">El Arquitecto Financiero</div>
        </div>

        <!-- Credentials -->
        <div class="w-full bg-white border border-neutral-200 shadow-sm rounded-2xl p-5 grid grid-cols-2 gap-2 profile-text opacity-0">
          <div v-for="cred in credentials" :key="cred" class="flex items-center gap-2 text-xs text-neutral-600 font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 text-primary shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            {{ cred }}
          </div>
        </div>
      </div>

      <!-- Right: Biography -->
      <div ref="bioContainer" class="lg:col-span-8 flex flex-col items-start">
        <div class="bio-element inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-widest uppercase mb-5 opacity-0 translate-y-6">
          El arquitecto
        </div>

        <h2 class="bio-element font-serif font-normal text-3xl md:text-4xl lg:text-[2.6rem] leading-[1.2] tracking-tight mb-8 text-neutral-900 opacity-0 translate-y-6">
          El contador que conoce el camino porque también lo recorrió.
        </h2>

        <div class="space-y-5 text-base md:text-lg text-neutral-600 font-light leading-relaxed">
          <p class="bio-element opacity-0 translate-y-6">
            Rafael Rivera conoce este camino porque también lo recorrió. Vivió de primera mano los desafíos que enfrentan miles de familias cuando adquieren una deuda de largo plazo, toman decisiones financieras sin la información adecuada o sienten que, a pesar de sus esfuerzos, avanzan muy poco hacia sus objetivos.
          </p>
          <p class="bio-element opacity-0 translate-y-6">
            Invirtió años de aprendizaje, análisis y recursos propios para comprender cómo funcionan realmente los créditos, los intereses y las estrategias que permiten reducir el costo financiero de una vivienda. Ese conocimiento le costó tiempo, dinero y experiencia — pero le permitió descubrir caminos que la mayoría de las personas desconoce.
          </p>
          <p class="bio-element opacity-0 translate-y-6">
            Por eso nació El Arquitecto Financiero. No como una empresa de asesoría tradicional, sino como una misión personal para ayudar a otros a evitar errores costosos y tomar decisiones con claridad, estrategia y confianza.
          </p>
        </div>

        <!-- Blockquote -->
        <div class="bio-element mt-10 border-l-2 border-primary pl-6 opacity-0 translate-y-6">
          <p class="text-neutral-900 font-serif text-xl md:text-2xl italic leading-snug">
            "La diferencia entre una hipoteca de 30 años y una de 12 no es cuánto ganas. Es cómo aplicas cada peso que ya tienes."
          </p>
          <p class="mt-3 text-primary text-sm font-semibold">— Rafael Rivera · El Arquitecto Financiero</p>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const profileSection = ref(null)
const parallaxImage = ref(null)
const bioContainer = ref(null)

const credentials = [
  'Contador Público',
  'Esp. Gerencia Financiera',
  'Consultor Power BI',
  'IA aplicada a negocios',
  'Ley de Insolvencia',
  '+1.000 clientes',
]

let ctx

onMounted(() => {
  if (!process.client) return
  gsap.registerPlugin(ScrollTrigger)

  ctx = gsap.context(() => {

    // Background color transition
    gsap.to(profileSection.value, {
      scrollTrigger: {
        trigger: profileSection.value,
        start: 'top 70%',
        end: 'top 30%',
        scrub: true,
      },
      backgroundColor: '#ffffff',
      ease: 'none'
    })

    // Profile text fade in
    gsap.to('.profile-text', {
      scrollTrigger: {
        trigger: profileSection.value,
        start: 'top 50%',
      },
      opacity: 1,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power3.out'
    })

    // Staggered Bio Fade-up
    gsap.to('.bio-element', {
      scrollTrigger: {
        trigger: bioContainer.value,
        start: 'top 60%',
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
