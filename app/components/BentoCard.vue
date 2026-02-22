<template>
  <div
    ref="cardRef"
    class="relative group rounded-2xl overflow-hidden cursor-default transition-all duration-500 border-gradient"
    :class="[sizeClass, 'glass border border-white/8 hover:border-white/20 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-black/20']"
  >
    <!-- Spotlight effect -->
    <div
      class="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      :style="spotlightStyle"
    />

    <!-- Top gradient glow (smoother) -->
    <div
      class="absolute inset-x-0 top-0 h-32 pointer-events-none opacity-0 group-hover:opacity-[0.15] transition-opacity duration-700 blur-xl"
      :style="`background: linear-gradient(to bottom, ${accentColor}, transparent)`"
    />

    <!-- Content -->
    <div class="relative z-10 h-full flex flex-col p-6" :class="size === 'large' ? 'p-8' : 'p-6'">
      <!-- Tag -->
      <div class="flex items-center justify-between mb-4">
        <span
          class="text-xs font-medium px-2.5 py-1 rounded-full border"
          :style="`color: ${accentColor}; border-color: ${accentColor}30; background: ${accentColor}10`"
        >
          {{ tag }}
        </span>
        <div
          class="w-9 h-9 rounded-lg flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
          :style="`background: ${accentColor}15`"
        >
          <span class="text-sm" :style="`color: ${accentColor}`" v-html="icon" />
        </div>
      </div>

      <!-- Title & description -->
      <h3
        class="font-display font-bold text-white mb-2 leading-tight group-hover:text-glow transition-all duration-300"
        :class="size === 'large' ? 'text-2xl' : 'text-lg'"
      >
        {{ title }}
      </h3>
      <p class="text-zinc-500 text-sm leading-relaxed flex-1">
        {{ description }}
      </p>

      <!-- Slot for extra content -->
      <slot />

      <!-- Footer link -->
      <div v-if="link" class="mt-5 flex items-center gap-1.5 text-xs font-semibold group-hover:gap-3 transition-all duration-300" :style="`color: ${accentColor}`">
        <span>{{ link }}</span>
        <svg class="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useMouseInElement } from '@vueuse/core'

const props = withDefaults(defineProps<{
  title: string
  tag: string
  description: string
  icon?: string
  size?: 'large' | 'small' | 'medium'
  accentColor?: string
  link?: string
}>(), {
  icon: '✦',
  size: 'small',
  accentColor: '#38bdf8',
})

const cardRef = ref<HTMLElement | null>(null)
const { elementX, elementY, elementWidth, elementHeight } = useMouseInElement(cardRef)

const mouseX = computed(() =>
  elementWidth.value ? (elementX.value / elementWidth.value) * 100 : 50,
)
const mouseY = computed(() =>
  elementHeight.value ? (elementY.value / elementHeight.value) * 100 : 50,
)

const spotlightStyle = computed(() => ({
  background: `radial-gradient(300px circle at ${elementX.value}px ${elementY.value}px, ${props.accentColor}20, transparent 70%)`,
}))

const sizeClass = computed(() => {
  switch (props.size) {
    case 'large': return 'col-span-2 row-span-2 min-h-[340px]'
    case 'medium': return 'col-span-1 row-span-2 min-h-[280px]'
    default: return 'col-span-1 row-span-1 min-h-[180px]'
  }
})
</script>
