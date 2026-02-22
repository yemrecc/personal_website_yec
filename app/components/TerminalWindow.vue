<template>
  <div class="glass-strong rounded-2xl overflow-hidden w-full max-w-md shadow-2xl shadow-black/40 font-mono text-sm border border-white/10">
    <!-- Title bar -->
    <div class="flex items-center gap-2 px-4 py-3 bg-white/[0.03] border-b border-white/8">
      <span class="w-3 h-3 rounded-full bg-rose-500/80 shadow-sm shadow-rose-500/30" />
      <span class="w-3 h-3 rounded-full bg-amber-500/80 shadow-sm shadow-amber-500/30" />
      <span class="w-3 h-3 rounded-full bg-emerald-500/80 shadow-sm shadow-emerald-500/30" />
      <span class="ml-3 text-xs text-zinc-500 tracking-widest uppercase">yemrecc — zsh</span>
    </div>

    <!-- Terminal body -->
    <div class="p-5 bg-black/50 min-h-[200px] space-y-2">
      <!-- Prompt line -->
      <div class="flex items-center gap-2 text-zinc-500 text-xs mb-3">
        <span class="text-emerald-400">➜</span>
        <span class="text-sky-400">~/portfolio</span>
        <span class="text-purple-400">git:(main)</span>
        <span class="text-zinc-600">node index.js</span>
      </div>

      <!-- Output lines with typing effect -->
      <div v-for="(line, i) in visibleLines" :key="i" class="flex items-start gap-2">
        <span class="text-zinc-700 select-none w-5 text-right">{{ String(i + 1).padStart(2, '0') }}</span>
        <span :class="line.color" class="leading-relaxed">{{ line.text }}</span>
      </div>

      <!-- Current typing line -->
      <div v-if="currentLine" class="flex items-start gap-2">
        <span class="text-zinc-700 select-none w-5 text-right">{{ String(visibleLines.length + 1).padStart(2, '0') }}</span>
        <span class="text-zinc-100 leading-relaxed">
          {{ displayedText }}<span class="animate-blink text-sky-400 font-bold">|</span>
        </span>
      </div>

      <!-- Idle cursor when all done -->
      <div v-if="!currentLine && visibleLines.length > 0" class="flex items-center gap-2 mt-2">
        <span class="text-emerald-400">➜</span>
        <span class="animate-blink text-sky-400 font-bold">|</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const messages = [
  { text: 'Initializing AI models...', color: 'text-sky-400' },
  { text: '✓ Neural networks loaded [3.2s]', color: 'text-emerald-400' },
  { text: 'Connecting to Web3 nodes...', color: 'text-purple-400' },
  { text: '✓ Web3 nodes connected', color: 'text-emerald-400' },
  { text: 'Deploying logic layer...', color: 'text-amber-400' },
  { text: '✓ Smart contracts compiled', color: 'text-emerald-400' },
  { text: 'Launching FreqAI trading bot...', color: 'text-pink-400' },
  { text: '✓ System ready. Welcome. 🚀', color: 'text-white' },
]

const visibleLines = ref<{ text: string; color: string }[]>([])
const currentLine = ref<{ text: string; color: string } | null>(null)
const displayedText = ref('')

let timeout: ReturnType<typeof setTimeout> | null = null

async function sleep(ms: number) {
  return new Promise((r) => (timeout = setTimeout(r, ms)))
}

async function typeText(text: string) {
  displayedText.value = ''
  for (const char of text) {
    displayedText.value += char
    await sleep(35)
  }
}

async function runSequence() {
  while (true) {
    visibleLines.value = []
    for (const msg of messages) {
      currentLine.value = msg
      await typeText(msg.text)
      await sleep(400)
      visibleLines.value.push({ text: msg.text, color: msg.color })
      currentLine.value = null
      displayedText.value = ''
      await sleep(100)
    }
    await sleep(2500)
  }
}

onMounted(() => {
  runSequence()
})

onUnmounted(() => {
  if (timeout) clearTimeout(timeout)
})
</script>
