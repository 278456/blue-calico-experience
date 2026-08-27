<script setup>
import { ArrowLeft } from 'lucide-vue-next'
import BlueCardStudio from '../components/find-blue/BlueCardStudio.vue'

defineEmits(['navigate'])
</script>

<template>
  <section class="section top-section find-blue-card-page">
    <button class="text-link back-link" type="button" @click="$emit('navigate', '/find-blue')">
      <ArrowLeft :size="17" />
      返回体验菜单
    </button>

    <div class="page-heading">
      <p class="eyebrow">Blue Personality Test</p>
      <h1>专属蓝印性格卡</h1>
      <p>回答 8 个问题，生成与你性格相合的蓝印花布纹样、祝福语和可下载纪念卡。</p>
    </div>

    <BlueCardStudio />
  </section>
</template>
