<template>
  <section id="metodo" ref="scannerContainer" class="relative w-full bg-[#050D1A]" style="height: 400vh;">
    <div class="sticky top-0 w-full h-screen overflow-hidden flex flex-col items-center justify-center">

      <!-- 1. The Bank Statement & Scanner Phase -->
      <div 
        ref="statementPhase"
        class="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div class="relative w-[90%] max-w-2xl bg-[#0A1628] border border-[#1a2a3a] rounded-2xl p-8 md:p-12 shadow-2xl overflow-hidden">
          
          <!-- Mock Statement Data (Faded/Generic) -->
          <div class="space-y-4 opacity-30 blur-[2px]">
            <div class="h-4 bg-neutral-700 rounded w-1/3 mb-8"></div>
            <div class="flex justify-between border-b border-neutral-800 pb-2">
              <span class="bg-neutral-700 h-3 w-1/4 rounded"></span>
              <span class="bg-neutral-700 h-3 w-1/4 rounded"></span>
            </div>
            <div class="flex justify-between border-b border-neutral-800 pb-2">
              <span class="bg-neutral-700 h-3 w-1/3 rounded"></span>
              <span class="bg-neutral-700 h-3 w-1/5 rounded"></span>
            </div>
            <div class="flex justify-between border-b border-neutral-800 pb-2">
              <span class="bg-neutral-700 h-3 w-1/2 rounded"></span>
              <span class="bg-neutral-700 h-3 w-1/4 rounded"></span>
            </div>
            <div class="flex justify-between border-b border-neutral-800 pb-2">
              <span class="bg-neutral-700 h-3 w-1/4 rounded"></span>
              <span class="bg-neutral-700 h-3 w-1/3 rounded"></span>
            </div>
          </div>

          <!-- Hidden Text that gets revealed by the scanner -->
          <div class="absolute inset-0 flex flex-col items-center justify-center px-8 text-center mix-blend-color-dodge">
            <div ref="revealTextWrapper" class="relative" style="clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);">
              <h2 class="font-serif font-normal text-3xl md:text-4xl text-white mb-4 drop-shadow-md">¿Tu deuda en UVR sube aunque pagues puntualmente?</h2>
              <p class="text-lg text-cyan-400 font-medium drop-shadow-md">
                Cada mes depositas tu cuota puntualmente — y tu saldo en pesos sigue creciendo. Estás financiando al banco, no a tu vivienda.
              </p>
            </div>
          </div>

          <!-- The Scanner Line -->
          <div 
            ref="scannerLine" 
            class="absolute top-0 left-0 w-full h-[2px] bg-[#42A5F5] shadow-[0_0_20px_4px_rgba(66,165,245,0.8)] -translate-y-full"
          >
            <!-- Scanner gradient fade -->
            <div class="absolute bottom-full left-0 w-full h-32 bg-gradient-to-t from-[#42A5F5]/20 to-transparent"></div>
          </div>

        </div>
      </div>

      <!-- 2. The Cross Point Phase (Appears after scanner) -->
      <div 
        ref="crossPointPhase"
        class="absolute inset-0 flex flex-col items-center justify-center opacity-0 pointer-events-none"
      >
        <!-- Pain Cards (El Problema Real) -->
        <div class="relative w-[95%] max-w-5xl mb-6">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <!-- Card 1 -->
            <div class="relative overflow-hidden rounded-2xl bg-[#0A1628]/85 border border-[#1a2a3a] border-l-4 border-l-red-600 p-5 shadow-xl backdrop-blur-2xl">
              <h4 class="text-white font-semibold text-base mb-1.5">Tu saldo UVR sube aunque pagues</h4>
              <p class="text-neutral-400 text-xs md:text-sm font-light leading-relaxed">Cada mes depositas tu cuota puntualmente — y tu saldo en pesos sigue creciendo. Estás financiando al banco, no a tu vivienda.</p>
            </div>
            <!-- Card 2 -->
            <div class="relative overflow-hidden rounded-2xl bg-[#0A1628]/85 border border-[#1a2a3a] border-l-4 border-l-red-600 p-5 shadow-xl backdrop-blur-2xl">
              <h4 class="text-white font-semibold text-base mb-1.5">Los primeros 10 años pagas solo intereses</h4>
              <p class="text-neutral-400 text-xs md:text-sm font-light leading-relaxed">El 85% de tu cuota en los primeros años se va en intereses. El banco cobra primero. Siempre. Y tú no lo ves en el extracto.</p>
            </div>
            <!-- Card 3 -->
            <div class="relative overflow-hidden rounded-2xl bg-[#0A1628]/85 border border-[#1a2a3a] border-l-4 border-l-red-600 p-5 shadow-xl backdrop-blur-2xl">
              <h4 class="text-white font-semibold text-base mb-1.5">30 años es demasiado tiempo de deuda</h4>
              <p class="text-neutral-400 text-xs md:text-sm font-light leading-relaxed">Una hipoteca de 30 años no es una condena inevitable. Es una fórmula matemática que puede ser reescrita — si sabes cómo.</p>
            </div>
          </div>
        </div>

        <!-- Chart module (fintech-style glass panel) -->
        <div class="relative w-[90%] max-w-4xl">
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
              <div class="relative w-full h-[300px] border-b border-l border-white/10">
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

                  <!-- Area fills (area = dinero pagado) -->
                  <path class="area-red opacity-0" d="M 12,500 L 12,340 C 170,250 390,128 580,122 C 770,116 910,310 1000,498 L 1000,500 Z" fill="url(#uvrRedArea)" stroke="none" />
                  <path class="area-blue opacity-0" d="M 12,500 L 12,340 C 120,300 270,245 360,245 C 470,245 580,400 644,498 L 644,500 Z" fill="url(#uvrBlueArea)" stroke="none" />

                  <!-- Red curve: SIN estrategia → 30 años -->
                  <path ref="redPath" d="M 12,340 C 170,250 390,128 580,122 C 770,116 910,310 1000,498" fill="none" stroke="#ef4444" stroke-width="5" stroke-linecap="round" class="drop-shadow-[0_0_12px_rgba(239,68,68,0.5)]" stroke-dasharray="2000" stroke-dashoffset="2000" />
                  <!-- Blue curve: CON abono inteligente → paga antes (P.E.) -->
                  <path ref="bluePath" d="M 12,340 C 120,300 270,245 360,245 C 470,245 580,400 644,498" fill="none" stroke="#1565C0" stroke-width="6" stroke-linecap="round" class="drop-shadow-[0_0_16px_rgba(21,101,192,0.85)]" stroke-dasharray="2000" stroke-dashoffset="2000" />
                </svg>

                <!-- Vertical dashed marker from the baseline up to the blue curve's peak -->
                <div class="absolute bottom-0 left-[36%] h-[51%] border-l border-dashed border-primary/40"></div>
                <!-- Vertical dashed marker from the baseline up to the red curve's peak -->
                <div class="absolute bottom-0 left-[58%] h-[76%] border-l border-dashed border-red-500/60"></div>

                <!-- Axis labels -->
                <span class="absolute -bottom-7 left-0 text-xs font-mono text-neutral-500">0</span>
                <span class="absolute -bottom-7 left-[36%] -translate-x-1/2 text-xs font-bold text-primary-light">P.E.</span>
                <span class="absolute -bottom-7 left-[58%] -translate-x-1/2 text-xs font-bold text-red-400">P.E.</span>
                <span class="absolute -bottom-7 right-0 text-xs font-bold text-red-400">30 años</span>
                <span class="absolute -bottom-[3.1rem] left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.35em] text-neutral-600">Años</span>

                <!-- Animated annotation at the P.E. -->
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

    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const scannerContainer = ref(null)

const statementPhase = ref(null)
const scannerLine = ref(null)
const revealTextWrapper = ref(null)

const crossPointPhase = ref(null)
const redPath = ref(null)
const bluePath = ref(null)
const crossText = ref(null)

let ctx

onMounted(() => {
  if (!process.client) return
  gsap.registerPlugin(ScrollTrigger)

  ctx = gsap.context(() => {

    // Reduced-motion fallback: collapse the 400vh scroll-jacking and reveal
    // the reveal text + the "punto de cruce" conclusion statically.
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      scannerContainer.value.style.height = '100vh'
      gsap.set(revealTextWrapper.value, { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' })
      gsap.set(scannerLine.value, { autoAlpha: 0 })
      gsap.set(statementPhase.value, { autoAlpha: 0 })
      gsap.set(crossPointPhase.value, { opacity: 1 })
      gsap.set([redPath.value, bluePath.value], { strokeDashoffset: 0 })
      gsap.set(['.area-red', '.area-blue'], { opacity: 1 })
      gsap.set(crossText.value, { opacity: 1 })
      return
    }

    // Normalize each curve's dash array to its real length so the draw fills perfectly
    const curves = [redPath.value, bluePath.value]
    curves.forEach((p) => {
      if (!p) return
      const len = p.getTotalLength()
      p.style.strokeDasharray = String(len)
      p.style.strokeDashoffset = String(len)
    })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: scannerContainer.value,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
      }
    })

    // Phase 1: Scanner moves down [0 to 3]
    tl.to(scannerLine.value, {
      top: '100%',
      ease: 'none',
      duration: 3
    }, 0)
    
    // Reveal text in sync with scanner [0 to 3]
    tl.to(revealTextWrapper.value, {
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      ease: 'none',
      duration: 3
    }, 0)

    // Fade out statement phase [3.5 to 4.5]
    tl.to(statementPhase.value, {
      opacity: 0,
      scale: 0.95,
      duration: 1,
      ease: 'power2.inOut'
    }, 3.5)

    // Phase 2: Fade in cross point phase [4.5 to 5.5]
    tl.to(crossPointPhase.value, {
      opacity: 1,
      duration: 1,
      ease: 'power2.out'
    }, 4.5)

    // Draw Red Line (Bank/Inflation) [5.5 to 7.5]
    tl.to(redPath.value, {
      strokeDashoffset: 0,
      ease: 'power1.inOut',
      duration: 2
    }, 5.5)

    // Fill the red area as its line draws
    tl.to('.area-red', {
      opacity: 1,
      duration: 1.4,
      ease: 'power1.out'
    }, 5.8)

    // Draw Blue Line (Intervention) aggressively [6.5 to 8.5]
    tl.to(bluePath.value, {
      strokeDashoffset: 0,
      ease: 'power3.inOut',
      duration: 2
    }, 6.5)

    // Fill the blue area as its line draws
    tl.to('.area-blue', {
      opacity: 1,
      duration: 1.4,
      ease: 'power1.out'
    }, 6.8)

    // Show Crossing text exactly when blue crosses red [7.5 to 8]
    tl.to(crossText.value, {
      opacity: 1,
      y: -10,
      duration: 0.5,
      ease: 'power2.out'
    }, 7.5)

    // Hold at the end [8.5 to 10] (done implicitly by timeline duration)
    tl.to({}, { duration: 1.5 })

  }, scannerContainer.value)
})

onUnmounted(() => {
  if (ctx) ctx.revert()
})
</script>
