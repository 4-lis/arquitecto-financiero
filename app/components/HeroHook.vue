<template>
  <section
    id="inicio"
    class="relative w-full bg-[#050D1A] overflow-hidden flex items-center min-h-screen pt-28 pb-16 lg:pt-32 lg:pb-20"
  >
    <!-- Animated constellation / dots background -->
    <ParticlesBackground class="opacity-60" />

    <!-- Depth gradients over the particles -->
    <div class="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#050D1A]/40 via-transparent to-[#050D1A]"></div>
    <div class="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] sm:w-[700px] sm:h-[700px] bg-primary/10 blur-[100px] sm:blur-[150px] rounded-full"></div>

    <!-- Hero content -->
    <HeroContent class="relative z-10" />
  </section>
</template>

<script setup>
import ParticlesBackground from './ParticlesBackground.vue'
import HeroContent from './molecules/HeroContent.vue'
</script>
