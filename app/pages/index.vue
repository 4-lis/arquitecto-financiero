<template>
  <main class="w-full relative bg-[#050D1A]">
    <!-- Hero / Hook -->
    <HeroHook />
    
    <!-- UVR Scanner -->
    <UVRScanner />
    
    <!-- El Método ARES™ -->
    <StepsSection />
    
    <!-- Services Grid -->
    <BentoServices />
    
    <!-- Architect Profile -->
    <ArchitectProfile />
    
    <!-- Success Stories / Testimonials -->
    <SuccessStories />
    
    <!-- Reactive Savings Calculator -->
    <SavingsCalculator />
    
    <!-- FAQ Section -->
    <FaqSection />
    
    <!-- Conversion Wall / Lead Capture -->
    <ConversionWall />
  </main>
</template>

<script setup>
import HeroHook from '~/components/HeroHook.vue'
import UVRScanner from '~/components/UVRScanner.vue'
import StepsSection from '~/components/StepsSection.vue'
import BentoServices from '~/components/BentoServices.vue'
import ArchitectProfile from '~/components/ArchitectProfile.vue'
import SuccessStories from '~/components/SuccessStories.vue'
import SavingsCalculator from '~/components/SavingsCalculator.vue'
import FaqSection from '~/components/FaqSection.vue'
import ConversionWall from '~/components/ConversionWall.vue'

useHead({
  title: 'El Arquitecto Financiero — Construye tu libertad',
  meta: [
    { name: 'description', content: 'No dejes que tu casa sea del banco por 30 años. Inteligencia financiera para la construcción de tu libertad.' }
  ]
})
</script>
