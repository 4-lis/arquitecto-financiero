<template>
  <div class="bg-neutral-950 min-h-screen font-sans text-neutral-50 antialiased selection:bg-primary/30 selection:text-white">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

let lenis
let ctx
let onAnchorClick

onMounted(() => {
  if (!process.client) return

  gsap.registerPlugin(ScrollTrigger)

  // ── Lenis smooth scroll ─────────────────────────────────────────────
  lenis = new Lenis({
    lerp: 0.1,
    smoothWheel: true,
  })

  // Integrate with GSAP ticker
  function rafLoop(time) {
    lenis.raf(time * 1000)
    ScrollTrigger.update()
  }

  gsap.ticker.add(rafLoop)
  gsap.ticker.lagSmoothing(0)

  // Store loop ref for cleanup
  lenis._gsapRaf = rafLoop

  // ── Smooth-scroll for in-page anchor links (#diagnostico, etc.) ──────
  // Lenis does not intercept native anchor jumps, so we route them through it.
  onAnchorClick = (e) => {
    const anchor = e.target.closest('a[href^="#"]')
    if (!anchor) return
    const id = anchor.getAttribute('href')
    if (!id || id === '#') return
    const target = document.querySelector(id)
    if (!target) return
    e.preventDefault()
    lenis.scrollTo(target, { offset: -96 })
    history.replaceState(null, '', id)
  }
  document.addEventListener('click', onAnchorClick)
  
  // Context to easily clear animations in the global scope if needed
  ctx = gsap.context(() => {})
})

onUnmounted(() => {
  if (!process.client) return
  if (onAnchorClick) document.removeEventListener('click', onAnchorClick)
  if (lenis) {
    gsap.ticker.remove(lenis._gsapRaf)
    lenis.destroy()
  }
  if (ctx) ctx.revert()
})
</script>
