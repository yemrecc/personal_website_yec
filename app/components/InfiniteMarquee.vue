<template>
  <div class="overflow-hidden relative" :class="maskClass">
    <div
      class="flex gap-8 w-max"
      :class="reverse ? 'animate-marquee-reverse' : 'animate-marquee'"
    >
      <!-- Duplicate content for seamless loop -->
      <template v-for="n in 2" :key="n">
        <div class="flex items-center gap-8">
          <div
            v-for="item in items"
            :key="`${n}-${item}`"
            class="flex items-center gap-2.5 text-sm font-medium text-zinc-500 whitespace-nowrap group hover:text-zinc-200 transition-colors duration-200"
          >
            <span class="w-1 h-1 rounded-full bg-zinc-700 group-hover:bg-sky-500 transition-colors" />
            {{ item }}
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    items: string[]
    reverse?: boolean
    fade?: boolean
  }>(),
  {
    reverse: false,
    fade: true,
  },
)

const maskClass = computed(() =>
  props.fade
    ? '[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]'
    : '',
)
</script>
