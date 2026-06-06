<template>
  <div 
    class="absolute inset-0 z-50 flex items-center justify-center pointer-events-none"
  >
    <!-- Cinematic Background Layer (image + dark veils — faded out as the hero reveals) -->
    <div class="hook-overlay absolute inset-0 z-[-1] overflow-hidden">
      <img 
        src="/hero-bg.png" 
        class="hook-bg w-full h-full object-cover opacity-40 scale-110"
        alt="Architectural background"
      />
      <!-- Dark Gradient Overlay -->
      <div class="absolute inset-0 bg-gradient-to-b from-neutral-950 via-transparent to-neutral-950"></div>
      <div class="absolute inset-0 bg-neutral-950/60"></div>
    </div>

    <div 
      class="counter-number text-6xl md:text-8xl lg:text-[8rem] font-bold text-red-500 drop-shadow-[0_0_40px_rgba(239,68,68,0.8)] tracking-tighter"
      style="transform-origin: center center;"
    >
      $ <span class="counter-text">{{ formattedValue }}</span>
    </div>
    
    <!-- Instruction to scroll -->
    <div class="scroll-hint absolute bottom-12 left-1/2 -translate-x-1/2 text-red-500/50 text-sm uppercase tracking-widest flex flex-col items-center gap-2">
      <span>El costo real de tu crédito</span>
      <div class="w-px h-8 bg-gradient-to-b from-red-500/50 to-transparent"></div>
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted, computed } from 'vue'
import { gsap } from 'gsap'

const props = defineProps({
  startValue: {
    type: Number,
    default: 50000000
  },
  endValue: {
    type: Number,
    default: 150000000
  },
  duration: {
    type: Number,
    default: 2
  }
})

const currentValue = ref(props.startValue)

const formattedValue = computed(() => {
  return Math.floor(currentValue.value).toLocaleString('es-CO')
})

onMounted(() => {
  gsap.to(currentValue, {
    value: props.endValue,
    duration: props.duration,
    ease: 'power2.out'
  })
})
</script>
