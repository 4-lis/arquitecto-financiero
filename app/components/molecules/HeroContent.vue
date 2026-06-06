<template>
  <div 
    class="absolute inset-0 z-10 flex flex-col lg:flex-row items-center justify-center lg:justify-between max-w-7xl mx-auto px-6 lg:px-12 opacity-0"
  >
    <!-- Text Column -->
    <div class="w-full lg:w-1/2 flex flex-col items-start z-20">
      <h1 class="font-serif font-normal text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] tracking-tight mb-6">
        <div class="overflow-hidden pb-2"><div class="hero-line translate-y-full">No dejes que tu casa</div></div>
        <div class="overflow-hidden pb-2"><div class="hero-line translate-y-full text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-cyan-300">sea del banco</div></div>
        <div class="overflow-hidden pb-2"><div class="hero-line translate-y-full">por 30 años.</div></div>
      </h1>
      
      <p class="hero-sub text-lg md:text-xl text-neutral-400 max-w-lg mb-10 font-light leading-relaxed opacity-0 translate-y-4">
        Soy <strong class="text-white font-medium">El Arquitecto Financiero</strong>. Aplico inteligencia de datos y rigor matemático para optimizar tu hipoteca y devolverte décadas de libertad financiera.
      </p>
      
      <BaseButton 
        to="#diagnostico" 
        variant="primary"
        customClass="hero-cta opacity-0 translate-y-4"
      >
        <span>👉</span> Quiero mi diagnóstico de ahorro gratuito
      </BaseButton>

    </div>

    <!-- Visual Element Column -->
    <div class="w-full lg:w-1/2 flex justify-center lg:justify-end mt-12 lg:mt-0 z-20">
      <TikTokEmbed 
        class="floating-video opacity-0 translate-y-8"
        videoUrl="https://www.tiktok.com/@rafaelmrivera/video/7568528939937713429"
        videoId="7568528939937713429"
      >
        <a target="_blank" title="@rafaelmrivera" href="https://www.tiktok.com/@rafaelmrivera?refer=embed">@rafaelmrivera</a> 
        Respuesta a @janethgarca37 
        <a title="tiktokviral" target="_blank" href="https://www.tiktok.com/tag/tiktokviral?refer=embed">#tiktokviral</a> 
        <a title="tiktoklive" target="_blank" href="https://www.tiktok.com/tag/tiktoklive?refer=embed">#tiktoklive</a> 
        #<a title="livehighlights" target="_blank" href="https://www.tiktok.com/tag/livehighlights?refer=embed">#livehighlights</a> 
        <a title="paidpartnership" target="_blank" href="https://www.tiktok.com/tag/paidpartnership?refer=embed">#PaidPartnership</a> 
        <a title="liveincentiveprogram" target="_blank" href="https://www.tiktok.com/tag/liveincentiveprogram?refer=embed">#LIVEIncentiveProgram</a> 
        <a target="_blank" title="♬ Classic Rock N Roll Vibe - FiniteMusicForge" href="https://www.tiktok.com/@rafaelmrivera/video/7376311406062520370?refer=embed">♬ Classic Rock N Roll Vibe - FiniteMusicForge</a>
      </TikTokEmbed>
    </div>
  </div>
</template>

<script setup>
import { useHead } from '#imports'
import BaseButton from '../ui/BaseButton.vue'
import TikTokEmbed from '../ui/TikTokEmbed.vue'

// Script loading is now handled inside TikTokEmbed.vue
</script>

