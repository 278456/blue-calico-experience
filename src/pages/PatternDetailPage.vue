<script setup>
import { computed, ref } from 'vue'
import { ArrowLeft, Box, X } from 'lucide-vue-next'
import PatternCard from '../components/PatternCard.vue'
import { patterns } from '../data'

const props = defineProps({
  patternId: { type: String, required: true },
})

const emit = defineEmits(['navigate', 'open-pattern', 'create-pattern'])
const lightboxOpen = ref(false)

const currentPattern = computed(() => patterns.find((item) => item.id === props.patternId) || patterns[0])
const relatedPatterns = computed(() => {
  const related = currentPattern.value.relatedIds
    .map((id) => patterns.find((pattern) => pattern.id === id))
    .filter(Boolean)
  return related.length ? related.slice(0, 4) : patterns.filter((item) => item.category === currentPattern.value.category).slice(0, 4)
})
</script>

<template>
  <section class="detail-page section top-section">
    <button class="text-link back-link" type="button" @click="$emit('navigate', '/library')">
      <ArrowLeft :size="17" />
      返回纹库
    </button>

    <div class="detail-layout">
      <button class="detail-image" :class="currentPattern.previewImage ? 'detail-image-real' : currentPattern.patternClass" :style="currentPattern.previewImage ? { backgroundImage: `url(${currentPattern.previewImage})` } : undefined" type="button" @click="lightboxOpen = true">
        <span>点击放大</span>
      </button>
      <article class="detail-content">
        <p class="eyebrow">{{ currentPattern.categoryName }}</p>
        <h1>{{ currentPattern.name }}</h1>
        <p class="lead">{{ currentPattern.meaning }}</p>
        <button class="primary-button detail-create-button" type="button" @click="emit('create-pattern', currentPattern)">
          <Box :size="18" /> 用此纹样进入 3D 工坊
        </button>
        <dl>
          <div><dt>年代</dt><dd>{{ currentPattern.era }}</dd></div>
          <div><dt>传统用途</dt><dd>{{ currentPattern.usage }}</dd></div>
          <div><dt>文化寓意</dt><dd>{{ currentPattern.meaningDetail }}</dd></div>
          <div><dt>背景故事</dt><dd>{{ currentPattern.story }}</dd></div>
        </dl>
      </article>
    </div>

    <div class="detail-block">
      <p class="eyebrow">Technique</p>
      <h2>工艺图解</h2>
      <div class="mini-timeline">
        <article v-for="step in currentPattern.technique" :key="step">{{ step }}</article>
      </div>
    </div>

    <div class="detail-block">
      <p class="eyebrow">Modern Use</p>
      <h2>创新应用</h2>
      <div class="use-grid">
        <article v-for="item in currentPattern.modernUse" :key="item">{{ item }}</article>
      </div>
    </div>

    <div class="detail-block">
      <div class="section-title-row">
        <div>
          <p class="eyebrow">Related</p>
          <h2>猜你喜欢</h2>
        </div>
      </div>
      <div class="library-grid compact-grid">
        <PatternCard v-for="pattern in relatedPatterns" :key="pattern.id" :pattern="pattern" @open="$emit('open-pattern', pattern)" @create="$emit('create-pattern', pattern)" />
      </div>
    </div>

    <div v-if="lightboxOpen" class="lightbox" @click.self="lightboxOpen = false">
      <button class="icon-button close-lightbox" type="button" @click="lightboxOpen = false"><X :size="22" /></button>
      <div class="lightbox-pattern" :class="currentPattern.previewImage ? 'detail-image-real' : currentPattern.patternClass" :style="currentPattern.previewImage ? { backgroundImage: `url(${currentPattern.previewImage})` } : undefined"></div>
    </div>
  </section>
</template>
