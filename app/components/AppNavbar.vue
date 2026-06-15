<template>
  <header class="fixed top-0 inset-x-0 z-50 pointer-events-none flex flex-col items-stretch">
    <!-- Announcement Bar -->
    <div class="pointer-events-auto bg-[#1565C0] text-white text-center py-2.5 px-4 text-xs font-semibold tracking-wider w-full flex items-center justify-center gap-2 shadow-md">
      <span class="inline-flex items-center gap-1.5">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
        Solo 8 cupos de diagnóstico gratuito disponibles este mes — <a href="#contacto" class="underline cursor-pointer hover:text-white/80 transition-colors">Reserva el tuyo ahora</a>
      </span>
    </div>

    <div class="flex flex-col items-center px-4 pt-4 w-full">
      <!-- Floating glass pill -->
      <nav
        :class="[
          'pointer-events-auto relative flex items-center h-14 pl-5 pr-2 gap-1 rounded-full',
          'border border-white/10 backdrop-blur-2xl backdrop-saturate-150',
          'shadow-[0_8px_32px_rgba(0,0,0,0.45)] transition-all duration-500',
          isScrolled ? 'bg-neutral-900/70' : 'bg-neutral-900/40'
        ]"
      >
        <!-- Mirror sheen: soft top reflection + bright specular edge line -->
        <div class="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-white/10 via-white/[0.02] to-transparent"></div>
        <div class="pointer-events-none absolute inset-x-8 top-px h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>

        <!-- Logo -->
        <NuxtLink to="/" class="relative z-10 flex items-center gap-2.5 group" aria-label="El Arquitecto Financiero — inicio">
          <img
            src="/image/logo-mark-light.png"
            alt="El Arquitecto Financiero"
            class="h-8 w-auto transition-transform duration-300 group-hover:scale-105"
          >
          <div class="hidden sm:flex flex-col leading-none">
            <span class="text-[9px] font-bold tracking-[0.2em] text-cyan-400 uppercase">El Arquitecto</span>
            <span class="text-[13px] font-semibold tracking-widest text-white uppercase">Financiero</span>
          </div>
        </NuxtLink>

        <!-- Divider -->
        <span class="hidden lg:block w-px h-5 bg-white/10 mx-2"></span>

        <!-- Center Navigation (Desktop) -->
        <div class="hidden lg:flex items-center gap-0.5 relative z-10">
          <a
            v-for="item in navItems"
            :key="item.href"
            :href="item.href"
            class="px-4 py-2 text-sm font-medium text-neutral-300 rounded-full transition-colors duration-300 hover:text-white hover:bg-white/10"
          >
            {{ item.label }}
          </a>
        </div>

        <!-- CTA -->
        <a
          href="#contacto"
          class="relative z-10 hidden sm:inline-flex items-center ml-2 px-5 py-2 text-sm font-semibold bg-primary text-white rounded-full hover:bg-primary-hover transition-all duration-300 hover:scale-105 active:scale-95 shadow-glow-primary hover:shadow-glow-primary-lg"
        >
          Diagnóstico
        </a>

        <!-- Mobile Menu Toggle -->
        <button
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          aria-label="Abrir menú"
          class="relative z-10 lg:hidden ml-1 h-10 w-10 flex items-center justify-center text-white rounded-full hover:bg-white/10 transition-colors"
        >
          <div class="relative h-4 w-5">
            <span :class="['absolute left-0 w-5 h-0.5 bg-current transition-all duration-300 origin-center', isMobileMenuOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0']"></span>
            <span :class="['absolute left-0 top-1/2 -translate-y-1/2 w-5 h-0.5 bg-current transition-all duration-300', isMobileMenuOpen ? 'opacity-0' : '']"></span>
            <span :class="['absolute left-0 w-5 h-0.5 bg-current transition-all duration-300 origin-center', isMobileMenuOpen ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'bottom-0']"></span>
          </div>
        </button>
      </nav>

      <!-- Mobile dropdown panel (glass) -->
      <Transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-3 scale-95"
        enter-to-class="opacity-100 translate-y-0 scale-100"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0 scale-100"
        leave-to-class="opacity-0 -translate-y-3 scale-95"
      >
        <div
          v-if="isMobileMenuOpen"
          class="pointer-events-auto lg:hidden w-full max-w-sm mt-2 origin-top"
        >
          <div class="relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/70 backdrop-blur-2xl backdrop-saturate-150 shadow-[0_20px_50px_rgba(0,0,0,0.55)] p-3 flex flex-col gap-1">
            <!-- Mirror sheen -->
            <div class="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 to-transparent"></div>
            <div class="pointer-events-none absolute inset-x-8 top-px h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>

            <a
              v-for="item in navItems"
              :key="item.href"
              :href="item.href"
              class="relative z-10 px-4 py-3 rounded-2xl text-base font-medium text-neutral-200 hover:text-white hover:bg-white/10 transition-colors"
              @click="isMobileMenuOpen = false"
            >
              {{ item.label }}
            </a>

            <a
              href="#contacto"
              class="relative z-10 mt-1 w-full py-3.5 bg-primary text-white text-center font-semibold rounded-2xl shadow-glow-primary"
              @click="isMobileMenuOpen = false"
            >
              Diagnóstico Gratuito
            </a>
          </div>
        </div>
      </Transition>

    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

// Flat anchor links to the real sections on the page (read order)
const navItems = [
  { label: 'El Método', href: '#metodo' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Rafael', href: '#rafael' },
  { label: 'Contacto', href: '#contacto' },
]

function handleScroll() {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
