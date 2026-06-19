<template>
  <div
    class="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-10 lg:gap-12 max-w-7xl mx-auto px-6 lg:px-12 w-full"
  >
    <!-- Text Column -->
    <div class="w-full lg:w-[58%] flex flex-col items-start">
      <div class="animate-fade-up text-emerald-400 text-xs md:text-sm font-semibold tracking-widest uppercase mb-4">
        Consultor financiero · Estrategia hipotecaria
      </div>

      <h1 class="font-serif font-normal text-5xl md:text-7xl lg:text-[5.5rem] text-white leading-[1.05] tracking-tight mb-6 animate-fade-up" style="animation-delay: 0.08s">
        Paga tu crédito hipotecario
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-cyan-300">en 5 años,</span>
        no en 30.
      </h1>

      <p class="animate-fade-up text-lg md:text-xl text-primary-light italic mb-5 max-w-xl" style="animation-delay: 0.16s">
        La matemática ya estaba de tu lado. Solo nadie te lo había explicado.
      </p>

      <p class="animate-fade-up text-sm md:text-base text-neutral-400 max-w-xl mb-8 font-light leading-relaxed" style="animation-delay: 0.22s">
        Soy Rafael Rivera, Contador Público y Especialista en Gerencia Financiera. Hemos ayudado a +1.000 familias colombianas a recuperar un promedio de 8, 10 y hasta 15 años y ahorro en más de $150MM en intereses — sin cambiar de banco.
      </p>

      <!-- Trust Row -->
      <div class="animate-fade-up flex flex-wrap gap-2.5 mb-8" style="animation-delay: 0.28s">
        <span class="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-neutral-900 border border-primary/20 text-xs text-neutral-300">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          +1.000 familias
        </span>
        <span class="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-neutral-900 border border-primary/20 text-xs text-neutral-300">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          +$150MM ahorrado
        </span>
        <span class="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-neutral-900 border border-primary/20 text-xs text-neutral-300">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
          Hasta 15 años recuperados
        </span>
      </div>

      <div class="animate-fade-up flex flex-wrap gap-4" style="animation-delay: 0.34s">
        <BaseButton
          to="https://wa.me/573115998747?text=Hola+Rafael,+quiero+mi+diagnóstico+hipotecario+gratuito"
          variant="primary"
          class="!inline-flex !items-center !gap-2 hover:scale-105 active:scale-95"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.88-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.876 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
          Diagnóstico gratuito
        </BaseButton>
        <BaseButton
          to="#problema"
          variant="secondary"
          class="hover:scale-105 active:scale-95"
        >
          Ver cómo funciona ↓
        </BaseButton>
      </div>
    </div>

    <!-- Visual Element Column -->
    <div class="w-full lg:w-[42%] flex flex-col items-center justify-center mt-2 lg:mt-0">
      <div class="animate-fade-up flex flex-col items-center gap-4" style="animation-delay: 0.3s">
        <img
          src="/rafael_rivera_profile.jpg"
          alt="Rafael Mauricio Rivera"
          class="w-[280px] h-[340px] md:w-[320px] md:h-[380px] object-cover object-top rounded-2xl border-2 border-primary/40 shadow-xl shadow-primary/10 transition-transform duration-300 hover:scale-[1.02]"
        />
        <div class="text-center">
          <div class="text-primary-light font-semibold text-sm">Rafael Mauricio Rivera</div>
          <div class="text-neutral-500 text-xs mt-1">Contador Público · Esp. Gerencia Financiera</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import BaseButton from '../ui/BaseButton.vue'
</script>
