<script setup>
import { onBeforeUnmount, onMounted } from 'vue'
import { ArrowLeft } from 'lucide-vue-next'
import PatternMemoryGame from '../components/find-blue/PatternMemoryGame.vue'

defineEmits(['navigate'])

onMounted(() => {
  document.documentElement.classList.add('game-lock-scroll')
})

onBeforeUnmount(() => {
  document.documentElement.classList.remove('game-lock-scroll')
})
</script>

<template>
  <section class="section top-section find-game-page" @wheel.prevent>
    <div class="find-game-header">
      <button class="text-link back-link" type="button" @click="$emit('navigate', '/find-blue')">
        <ArrowLeft :size="17" />
        返回体验菜单
      </button>

      <div class="page-heading">
        <p class="eyebrow">Pattern Memory Game</p>
        <h1>蓝印纹样翻翻乐</h1>
      </div>
    </div>

    <PatternMemoryGame />
  </section>
</template>
