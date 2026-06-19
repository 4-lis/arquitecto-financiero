<template>
  <section
    id="inicio"
    class="relative w-full bg-[#050D1A] overflow-hidden flex items-center min-h-screen pt-28 pb-16 lg:pt-32 lg:pb-20"
  >
    <!-- Animated "Tech Network" background (ported from the v3 prototype) -->
    <ParticlesBackground />

    <!-- Only the bottom edge fades, so the network stays fully visible like the prototype -->
    <div class="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[#050D1A]"></div>

    <!-- Hero content -->
    <HeroContent class="relative z-10" />
  </section>
</template>

<script setup>
import ParticlesBackground from './ParticlesBackground.vue'
import HeroContent from './molecules/HeroContent.vue'
</script>
