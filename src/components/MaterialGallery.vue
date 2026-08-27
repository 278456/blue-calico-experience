<script setup>
import { computed, ref } from 'vue'
import { Layers3, X, ZoomIn } from 'lucide-vue-next'
import { collectedMaterials } from '../data/materials'

const activeFilter = ref('all')
const previewMaterial = ref(null)

const filters = [
  { key: 'all', label: '全部素材' },
  { key: 'png', label: '单纹样 / 刻版' },
  { key: 'jpg', label: '布面 / 版样' },
]

const filteredMaterials = computed(() => {
  if (activeFilter.value === 'all') return collectedMaterials
  return collectedMaterials.filter((material) => material.type === activeFilter.value)
})

function materialLabel(material) {
  return material.type === 'png' ? '单纹样 / 刻版素材' : '布面 / 版样素材'
}

function openPreview(material) {
  previewMaterial.value = material
}

function closePreview() {
  previewMaterial.value = null
}
</script>

<template>
  <section class="material-gallery" @keyup.esc="closePreview">
    <div class="material-gallery-heading">
      <div>
        <p class="eyebrow">Local Material Archive</p>
        <h2>本地采集素材图录</h2>
        <p>先把采集到的纹样、边饰和布面资料完整保留下来，后续再逐张补充名称、寓意与来源。</p>
      </div>
      <div class="material-gallery-count">
        <strong>{{ collectedMaterials.length }}</strong>
        <span>张本地素材</span>
      </div>
    </div>

    <div class="material-gallery-toolbar">
      <div class="material-gallery-filters" role="group" aria-label="素材类型筛选">
        <button
          v-for="filter in filters"
          :key="filter.key"
          type="button"
          :class="{ active: activeFilter === filter.key }"
          @click="activeFilter = filter.key"
        >
          {{ filter.label }}
        </button>
      </div>
      <span class="material-gallery-note"><Layers3 :size="16" />仅使用本地文件</span>
    </div>

    <div class="material-gallery-grid">
      <button
        v-for="(material, index) in filteredMaterials"
        :key="material.id"
        class="material-tile"
        type="button"
        @click="openPreview(material)"
      >
        <span class="material-tile-image">
          <img :src="material.src" :alt="`本地采集素材 ${index + 1}`" loading="lazy" decoding="async" />
          <span class="material-tile-zoom"><ZoomIn :size="17" /></span>
        </span>
        <span class="material-tile-meta">
          <strong>素材 {{ String(index + 1).padStart(2, '0') }}</strong>
          <small>{{ materialLabel(material) }}</small>
        </span>
      </button>
    </div>

    <div v-if="previewMaterial" class="material-lightbox" @click.self="closePreview">
      <button class="material-lightbox-close" type="button" aria-label="关闭素材预览" @click="closePreview">
        <X :size="22" />
      </button>
      <figure class="material-lightbox-content">
        <img :src="previewMaterial.src" alt="本地采集素材大图" />
        <figcaption>
          <span>{{ materialLabel(previewMaterial) }}</span>
          <small>本地素材文件 · {{ previewMaterial.id }}</small>
        </figcaption>
      </figure>
    </div>
  </section>
</template>

<style scoped>
.material-gallery {
  display: grid;
  gap: 24px;
  margin-top: 72px;
  padding-top: 44px;
  border-top: 1px solid rgba(26, 58, 92, 0.16);
}

.material-gallery-heading,
.material-gallery-toolbar {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 28px;
}

.material-gallery-heading h2 {
  margin-top: 6px;
  color: var(--blue-deep);
  font-family: "Noto Serif SC", "Songti SC", serif;
  font-size: clamp(30px, 4vw, 48px);
}

.material-gallery-heading p:last-child {
  max-width: 650px;
  margin: 14px 0 0;
  color: #6d6862;
  line-height: 1.75;
}

.material-gallery-count {
  display: grid;
  min-width: 150px;
  padding: 18px 20px;
  border-left: 3px solid var(--blue-light);
  background: rgba(240, 236, 227, 0.72);
}

.material-gallery-count strong {
  color: var(--blue-primary);
  font-size: 42px;
  line-height: 1;
}

.material-gallery-count span {
  margin-top: 8px;
  color: var(--gray-warm);
  font-size: 13px;
  font-weight: 900;
}

.material-gallery-filters {
  display: inline-flex;
  gap: 8px;
}

.material-gallery-filters button {
  min-height: 40px;
  padding: 0 16px;
  border: 1px solid rgba(26, 58, 92, 0.14);
  border-radius: 999px;
  color: var(--blue-primary);
  background: rgba(255, 255, 255, 0.58);
  font-weight: 900;
}

.material-gallery-filters button.active,
.material-gallery-filters button:hover {
  color: var(--white-warm);
  background: var(--blue-primary);
}

.material-gallery-note {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  color: var(--gray-warm);
  font-size: 13px;
  font-weight: 900;
}

.material-gallery-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 14px;
}

.material-tile {
  display: grid;
  min-width: 0;
  padding: 0;
  border: 1px solid rgba(26, 58, 92, 0.1);
  border-radius: 10px;
  overflow: hidden;
  text-align: left;
  background: rgba(255, 255, 255, 0.66);
  box-shadow: 0 14px 32px rgba(13, 31, 51, 0.08);
  transition: transform 220ms ease, box-shadow 220ms ease;
}

.material-tile:hover {
  transform: translateY(-4px);
  box-shadow: 0 22px 44px rgba(13, 31, 51, 0.16);
}

.material-tile-image {
  position: relative;
  display: block;
  aspect-ratio: 1 / 1.08;
  overflow: hidden;
  background: #e9e3d8;
}

.material-tile-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 360ms ease;
}

.material-tile:hover img {
  transform: scale(1.05);
}

.material-tile-zoom {
  position: absolute;
  right: 10px;
  bottom: 10px;
  display: grid;
  width: 32px;
  height: 32px;
  place-items: center;
  border-radius: 50%;
  color: var(--white-warm);
  background: rgba(13, 31, 51, 0.72);
  opacity: 0;
  transition: opacity 220ms ease;
}

.material-tile:hover .material-tile-zoom,
.material-tile:focus-visible .material-tile-zoom {
  opacity: 1;
}

.material-tile-meta {
  display: grid;
  gap: 5px;
  padding: 12px 13px 14px;
}

.material-tile-meta strong {
  color: var(--blue-deep);
  font-family: "Noto Serif SC", "Songti SC", serif;
  font-size: 15px;
}

.material-tile-meta small {
  color: var(--gray-warm);
  font-size: 12px;
}

.material-lightbox {
  position: fixed;
  inset: 0;
  z-index: 110;
  display: grid;
  place-items: center;
  padding: 40px;
  background: rgba(7, 17, 29, 0.9);
  backdrop-filter: blur(12px);
}

.material-lightbox-close {
  position: fixed;
  top: 24px;
  right: 28px;
  display: grid;
  width: 44px;
  height: 44px;
  place-items: center;
  border: 1px solid rgba(247, 245, 240, 0.24);
  border-radius: 50%;
  color: var(--white-warm);
  background: rgba(247, 245, 240, 0.1);
}

.material-lightbox-content {
  display: grid;
  gap: 14px;
  width: min(760px, 80vw);
  max-height: 88vh;
  margin: 0;
}

.material-lightbox-content img {
  width: 100%;
  max-height: 76vh;
  object-fit: contain;
  border: 12px solid rgba(247, 245, 240, 0.9);
  background: var(--white-warm);
}

.material-lightbox-content figcaption {
  display: grid;
  gap: 5px;
  color: var(--white-warm);
}

.material-lightbox-content figcaption span {
  font-weight: 900;
}

.material-lightbox-content figcaption small {
  color: rgba(247, 245, 240, 0.58);
  font-family: ui-monospace, SFMono-Regular, Consolas, monospace;
}
</style>
