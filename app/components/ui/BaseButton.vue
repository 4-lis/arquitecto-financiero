<template>
  <component
    :is="isExternal ? 'a' : 'button'"
    :href="isExternal ? to : undefined"
    :class="[
      'inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 active:scale-95',
      variantClasses[variant],
      customClass
    ]"
    @click="$emit('click')"
  >
    <slot />
  </component>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  to: String,
  variant: {
    type: String,
    default: 'primary'
  },
  customClass: String
})

defineEmits(['click'])

const isExternal = computed(() => {
  return props.to && (props.to.startsWith('http') || props.to.startsWith('#'))
})

const variantClasses = {
  primary: 'bg-primary text-white hover:bg-primary-hover hover:scale-[1.02] hover:shadow-glow-primary-lg',
  secondary: 'bg-white/10 text-white backdrop-blur-sm border border-white/20 hover:bg-white/20',
  danger: 'bg-red-600 text-white hover:bg-red-500 hover:shadow-[0_0_30px_rgba(239,68,68,0.5)]'
}
</script>
