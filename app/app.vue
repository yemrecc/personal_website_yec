<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  // Ensure the page starts at the top on every refresh
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
})
</script>
