<template>
  <section ref="heroContainer" class="relative w-full bg-[#050D1A] h-auto lg:h-[200vh]">
    <!-- Sticky / Scrollable Container -->
    <div class="relative w-full flex flex-col items-center justify-center py-12 gap-12 min-h-screen lg:sticky lg:top-0 lg:h-screen lg:overflow-hidden lg:py-0 lg:gap-0 lg:min-h-0">

      <!-- 1. The Red Number Hook (Atomized Molecule) -->
      <HeroHookCounter ref="hookCounter" />

      <!-- 2. The Actual Hero Content (Atomized Molecule) -->
      <HeroContent ref="heroContent" />

      <!-- Background glow that fades in -->
      <div ref="bgGlow" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 blur-[150px] rounded-full pointer-events-none opacity-0"></div>

    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import HeroHookCounter from './molecules/HeroHookCounter.vue'
import HeroContent from './molecules/HeroContent.vue'

const heroContainer = ref(null)
const hookCounter = ref(null)
const heroContent = ref(null)
const bgGlow = ref(null)

let ctx

onMounted(() => {
  if (!process.client) return
  gsap.registerPlugin(ScrollTrigger)

  ctx = gsap.context(() => {

    // Respect users who prefer reduced motion: skip the scroll-jacking zoom
    // and present the hero content statically so the headline + CTA are visible.
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      heroContainer.value.style.height = '100vh'
      gsap.set(hookCounter.value?.$el, { autoAlpha: 0 })
      gsap.set(heroContent.value?.$el, { autoAlpha: 1 })
      gsap.set('.hero-line', { y: 0 })
      gsap.set(['.hero-sub', '.hero-cta', '.floating-video'], { opacity: 1, y: 0 })
      gsap.set(bgGlow.value, { autoAlpha: 1 })
      return
    }

    const mm = gsap.matchMedia()

    // 1. The Master Scroll Timeline (Zoom-in Hook) - Desktop Only
    mm.add("(min-width: 1024px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroContainer.value,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1, // Smooth scrub
        }
      })

      // Zoom the red number MASSIVELY so it breaks/fades past the camera
      // Added blur and autoAlpha to prevent flickering and ensure a clean exit
      tl.to('.counter-number', {
        scale: 60,
        autoAlpha: 0,
        filter: 'blur(20px)', // Professional blur as it gets too close to "camera"
        duration: 3,
        ease: 'power4.in'
      }, 0)

      // Dolly Zoom effect: background image scales DOWN while the number scales UP
      tl.to('.hook-bg', {
        scale: 1,
        filter: 'blur(10px)',
        duration: 3,
        ease: 'power2.inOut'
      }, 0)

      // Fade out the ENTIRE backdrop layer (image + both dark veils), otherwise the
      // 60% black veil lingers at z-50 over the hero and the headline reads hazy.
      tl.to('.hook-overlay', {
        autoAlpha: 0,
        duration: 2.2,
        ease: 'power2.inOut'
      }, 0.3)
      
      tl.to('.scroll-hint', {
        autoAlpha: 0,
        duration: 0.5
      }, 0)

      // Fade in the actual Hero Content
      // Delaying it slightly more ensures the counter is mostly gone
      tl.to([heroContent.value?.$el, bgGlow.value], {
        autoAlpha: 1,
        duration: 1.2,
        ease: 'power2.out'
      }, 1.8) // Adjusted timing for smoother hand-off

      // Animate Hero text lines (Masking)
      tl.to('.hero-line', {
        y: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power4.out'
      }, 2)

      // Subtitle & CTA
      tl.to(['.hero-sub', '.hero-cta'], {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
      }, 2.3)

      // Floating Video Slide up
      tl.to('.floating-video', {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out'
      }, 2.5)

      // Hold the fully-revealed hero on screen so the headline + CTA get
      // real resting time before the section releases into the next one.
      tl.to({}, { duration: 2 })
    })

    // Mobile: Show static hero elements immediately
    mm.add("(max-width: 1023px)", () => {
      gsap.set(hookCounter.value?.$el, { autoAlpha: 1 })
      gsap.set(heroContent.value?.$el, { autoAlpha: 1 })
      gsap.set('.hero-line', { y: 0 })
      gsap.set(['.hero-sub', '.hero-cta', '.floating-video'], { opacity: 1, y: 0 })
      gsap.set(bgGlow.value, { autoAlpha: 1 })
    })

    // 2. High-Fidelity Spatial Drift Animation for the floating video
    // This creates a much more premium "weightless" feel
    const driftTl = gsap.timeline({
      repeat: -1,
      defaults: { duration: 4, ease: 'sine.inOut' }
    })

    driftTl.to('.floating-video', {
      y: -20,
      rotationZ: 2,
      rotationY: 5,
    })
    .to('.floating-video', {
      y: 10,
      x: 10,
      rotationZ: -1,
      rotationY: -5,
    })
    .to('.floating-video', {
      y: 0,
      x: 0,
      rotationZ: 0,
      rotationY: 0,
    })

    // 3. Add a subtle "breathing" scale effect to the background glow
    gsap.to(bgGlow.value, {
      scale: 1.2,
      opacity: 0.2,
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    })

  }, heroContainer.value)
})

onUnmounted(() => {
  if (ctx) ctx.revert()
})
</script>

