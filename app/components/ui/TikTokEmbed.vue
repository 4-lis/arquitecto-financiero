<template>
  <div 
    class="tiktok-container relative w-full max-w-[325px] rounded-[2.5rem] bg-white/5 backdrop-blur-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_20px_rgba(59,130,246,0.1)] overflow-hidden flex items-center justify-center transition-shadow duration-500 hover:shadow-[0_20px_80px_rgba(0,0,0,0.9),0_0_40px_rgba(59,130,246,0.2)]"
  >
    <!-- Inner Glow -->
    <div class="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>

    <blockquote 
      ref="tiktokBlockquote"
      class="tiktok-embed !m-0 !p-0" 
      :cite="videoUrl" 
      :data-video-id="videoId" 
      style="max-width: 605px; min-width: 325px;"
      allow="accelerometer; gyroscope; devicemotion"
    > 
      <section> 
        <slot />
      </section> 
    </blockquote>

  </div>
</template>

<script setup>
import { onMounted, ref, nextTick } from 'vue'
import { useHead } from '#imports'

const props = defineProps({
  videoUrl: String,
  videoId: String
})

const tiktokBlockquote = ref(null)

useHead({
  script: [
    { src: 'https://www.tiktok.com/embed.js', async: true, id: 'tiktok-embed-script' }
  ]
})

onMounted(() => {
  // Force TikTok to re-process the embed after the component is mounted
  nextTick(() => {
    if (window.Tiktok && window.Tiktok.embed && window.Tiktok.embed.render) {
      window.Tiktok.embed.render();
    } else {
      // If the script isn't fully loaded yet, it will run on its own when ready,
      // but we can try to re-trigger it if it exists.
      const script = document.getElementById('tiktok-embed-script');
      if (script) {
        // Re-injecting the script is a common hack for TikTok embeds in SPAs
        const newScript = document.createElement('script');
        newScript.src = 'https://www.tiktok.com/embed.js';
        newScript.async = true;
        document.body.appendChild(newScript);
      }
    }
  });
})
</script>

<style scoped>
/* Ensure the TikTok iframe respects the container's rounded corners */
:deep(iframe) {
  border-radius: 2.5rem !important;
}
</style>

