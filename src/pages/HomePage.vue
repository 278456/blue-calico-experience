<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { ArrowDown, ArrowRight, Sparkles } from 'lucide-vue-next'
import HomeSectionNav from '../components/HomeSectionNav.vue'
import PatternCard from '../components/PatternCard.vue'
import { patternCategories, patterns } from '../data'
import { collectedMaterials } from '../data/materials'

const emit = defineEmits(['navigate', 'open-pattern', 'select-category', 'create-pattern'])

const activeIndex = ref(0)
const craftBoardRef = ref(null)
const craftSpotlight = ref({ x: 0, y: 0, r: 0, active: false })
const craftStarted = ref(false)
let wheelLocked = false

const CRAFT_SPOTLIGHT_RADIUS = 140
const CRAFT_IMAGE_RATIO = 16 / 9

const featuredPatternPreviews = [
  { id: 'chanzhi-lian', previewImage: '/assets/patterns/preview-plant.png' },
  { id: 'huiwen', previewImage: '/assets/patterns/preview-geometry.png' },
  { id: 'hudie', previewImage: '/assets/patterns/preview-animal.png' },
  { id: 'shouzi', previewImage: '/assets/patterns/preview-auspicious.png' },
]

const featuredPatterns = computed(() =>
  featuredPatternPreviews
    .map(({ id, previewImage }) => {
      const pattern = patterns.find((item) => item.id === id)
      return pattern ? { ...pattern, previewImage } : null
    })
    .filter(Boolean),
)
const materialPreview = computed(() => collectedMaterials.find((material) => material.type === 'jpg') || collectedMaterials[0])

const introStats = [
  { index: '01', value: '128', unit: '枚', label: '收录纹样', english: 'Pattern Archive' },
  { index: '02', value: '6', unit: '道', label: '工艺步骤', english: 'Craft Process' },
  { index: '03', value: '800+', unit: '年', label: '传承历史', english: 'Living Heritage' },
]

const homeSections = [
  { id: 'hero', label: '大临蓝印' },
  { id: 'intro', label: '项目引言' },
  { id: 'categories', label: '纹样分类' },
  { id: 'craft', label: '工艺时间轴' },
  { id: 'featured', label: '精选纹样' },
  { id: 'cta', label: '寻找你的蓝' },
]

function goSection(index) {
  activeIndex.value = Math.min(Math.max(index, 0), homeSections.length - 1)
}

function handleWheel(event) {
  if (Math.abs(event.deltaY) < 8 || wheelLocked) return
  event.preventDefault()
  wheelLocked = true
  goSection(activeIndex.value + (event.deltaY > 0 ? 1 : -1))
  window.setTimeout(() => {
    wheelLocked = false
  }, 720)
}

function openCategory(categoryKey) {
  emit('select-category', categoryKey)
  emit('navigate', '/library')
}

function getCraftImageBounds() {
  const board = craftBoardRef.value
  if (!board) return null

  const width = board.clientWidth
  const height = board.clientHeight
  if (!width || !height) return null

  const boardRatio = width / height
  const imageRatio = CRAFT_IMAGE_RATIO

  if (boardRatio > imageRatio) {
    const renderedWidth = height * imageRatio
    return {
      left: (width - renderedWidth) / 2,
      top: 0,
      width: renderedWidth,
      height,
    }
  }

  const renderedHeight = width / imageRatio
  return {
    left: 0,
    top: (height - renderedHeight) / 2,
    width,
    height: renderedHeight,
  }
}

function centerCraftSpotlight() {
  const bounds = getCraftImageBounds()
  if (!bounds) return

  craftSpotlight.value = {
    x: bounds.left + bounds.width / 2,
    y: bounds.top + bounds.height / 2,
    r: 0,
    active: false,
  }
}

function startCraftSpotlight() {
  craftStarted.value = true
  window.requestAnimationFrame(centerCraftSpotlight)
}

function restartCraftSpotlight() {
  craftStarted.value = false
  window.requestAnimationFrame(centerCraftSpotlight)
}

function updateCraftSpotlight(event) {
  if (!craftStarted.value) return

  const board = craftBoardRef.value
  const imageBounds = getCraftImageBounds()
  if (!board || !imageBounds) return

  const bounds = board.getBoundingClientRect()
  const localX = event.clientX - bounds.left
  const localY = event.clientY - bounds.top
  const padX = Math.min(CRAFT_SPOTLIGHT_RADIUS, imageBounds.width / 2)
  const padY = Math.min(CRAFT_SPOTLIGHT_RADIUS, imageBounds.height / 2)
  const x = Math.min(Math.max(localX, imageBounds.left + padX), imageBounds.left + imageBounds.width - padX)
  const y = Math.min(Math.max(localY, imageBounds.top + padY), imageBounds.top + imageBounds.height - padY)

  craftSpotlight.value = { x, y, r: CRAFT_SPOTLIGHT_RADIUS, active: true }
}

function resetCraftSpotlight() {
  centerCraftSpotlight()
}

onMounted(() => {
  document.documentElement.classList.add('home-lock-scroll')
  window.addEventListener('resize', centerCraftSpotlight, { passive: true })
  window.requestAnimationFrame(centerCraftSpotlight)
})

onBeforeUnmount(() => {
  document.documentElement.classList.remove('home-lock-scroll')
  window.removeEventListener('resize', centerCraftSpotlight)
})
</script>

<template>
  <section class="home-page" @wheel="handleWheel">
    <HomeSectionNav :sections="homeSections" :active-index="activeIndex" @select="goSection" />

    <div class="home-stage" :style="{ transform: `translateY(-${activeIndex * 100}vh)` }">
      <section class="home-panel hero-panel">
        <video class="hero-video" autoplay muted loop playsinline poster="/assets/heritage/dalin-workshop.png" aria-hidden="true">
          <source src="/assets/home/dalin-workshop-ambience.mp4" type="video/mp4" />
        </video>
        <div class="hero-pattern pattern-floral"></div>
        <div class="hero-content">
          <p class="eyebrow">浙江嘉兴桐乡市大临村</p>
          <h1>
            <span v-for="(char, index) in '大临蓝印'" :key="`${char}-${index}`" :style="{ animationDelay: `${index * 50}ms` }">
              {{ char }}
            </span>
          </h1>
          <p class="hero-subtitle">千年药斑布，一靛染江南</p>
          <button class="primary-button" type="button" @click="$emit('navigate', '/library')">
            探索纹样
            <ArrowRight :size="18" />
          </button>
        </div>
        <button class="scroll-cue" type="button" @click="goSection(1)">
          <ArrowDown :size="24" />
        </button>
      </section>

      <section class="home-panel intro-panel">
        <div class="home-panel-inner intro-section">
          <div class="section-copy">
            <p class="eyebrow">Project Introduction</p>
            <h2>以数字之名，让靛蓝重新流动</h2>
            <p>大临村，浙江桐乡石门镇的一座江南古村，是蓝印花布的发源地之一。这里的一布一纹，承载着从宋元走来的防染智慧。我们以数字之名，让靛蓝重新流动。</p>
          </div>
          <div class="intro-side">
            <div class="stats" :class="{ 'is-visible': activeIndex === 1 }" aria-label="蓝印花布数字档案概览">
              <article v-for="stat in introStats" :key="stat.index">
                <span class="stat-index">{{ stat.index }}</span>
                <div class="stat-value">
                  <strong>{{ stat.value }}</strong>
                  <small>{{ stat.unit }}</small>
                </div>
                <div class="stat-meta">
                  <span>{{ stat.label }}</span>
                  <em>{{ stat.english }}</em>
                </div>
              </article>
            </div>
            <button class="intro-material-card" type="button" @click="$emit('navigate', '/library')">
              <img :src="materialPreview.src" alt="本地采集的蓝印花布布面纹样" loading="lazy" decoding="async" />
              <span class="intro-material-overlay">
                <small>LOCAL MATERIAL ARCHIVE</small>
                <strong>82 张采集素材</strong>
                <em>进入纹样图录 <ArrowRight :size="16" /></em>
              </span>
            </button>
          </div>
        </div>
        <button class="scroll-cue scroll-cue-on-light" type="button" aria-label="继续浏览纹样分类" @click="goSection(2)">
          <ArrowDown :size="24" />
        </button>
      </section>

      <section class="home-panel">
        <div class="home-panel-inner">
          <div class="section-title-row">
            <div>
              <p class="eyebrow">Pattern System</p>
              <h2>四大纹样分类</h2>
            </div>
            <button class="text-link" type="button" @click="$emit('navigate', '/library')">
              进入纹库 <ArrowRight :size="16" />
            </button>
          </div>
          <div class="category-grid">
            <button v-for="category in patternCategories" :key="category.key" type="button" @click="openCategory(category.key)">
              <span
                class="category-image"
                :class="category.image ? ['category-image-real', `category-image-${category.key}`] : category.patternClass"
                :style="{ backgroundImage: `url(${category.image})` }"
              ></span>
              <span class="category-copy">
                <strong>{{ category.title }}</strong>
                <em>{{ category.description }}</em>
                <i>查看全部 →</i>
              </span>
            </button>
          </div>
        </div>
        <button class="scroll-cue scroll-cue-on-light" type="button" aria-label="继续浏览工艺流程" @click="goSection(3)">
          <ArrowDown :size="24" />
        </button>
      </section>

      <section class="home-panel craft-panel">
        <div class="home-panel-inner craft-spotlight-layout">
          <div class="section-copy craft-intro" v-if="false">
            <p class="eyebrow">Craft Timeline</p>
            <h2>从刻版到晾晒，一块布要走过六道手艺</h2>
            <p>移动鼠标，像拿起一束探照灯。被照亮的位置会显出彩色工艺图，其余部分保持灰度，帮助游客直观看到六道工序的完整流转。</p>
          </div>

          <div
            ref="craftBoardRef"
            class="craft-spotlight-board"
            :style="{
              '--spotlight-x': `${craftSpotlight.x}px`,
              '--spotlight-y': `${craftSpotlight.y}px`,
              '--spotlight-r': `${craftSpotlight.r}px`,
            }"
            @mousemove="updateCraftSpotlight"
            @mouseleave="resetCraftSpotlight"
          >
            <div v-if="!craftStarted" class="craft-poster">
              <div class="craft-poster-inner">
                <p class="eyebrow">Craft Timeline</p>
                <h2>从刻版到晾晒，一块布要走过六道手艺</h2>
                <p>点击海报开启探照体验。彩色会在鼠标所到之处显现，帮助游客直观看到大临蓝印花布六道工序的完整流转。</p>
                <button class="primary-button craft-start-button" type="button" @click="startCraftSpotlight">开启探照</button>
              </div>
            </div>
            <img class="craft-board-image grayscale" src="/assets/home-craft-gray.png" alt="craft grayscale board" />
            <img class="craft-board-image color" src="/assets/home-craft-color.png" alt="craft color board" />
            <div class="craft-spotlight-glow" :class="{ active: craftSpotlight.active }"></div>
            <div v-if="craftStarted" class="craft-spotlight-tip">
              <span>探照工艺图</span>
              <em>鼠标移动到哪里，哪里就恢复彩色</em>
              <button class="craft-restart-button" type="button" @click.stop="restartCraftSpotlight">重新开始</button>
            </div>
          </div>
        </div>
        <button class="scroll-cue" type="button" aria-label="继续浏览精选纹样" @click="goSection(4)">
          <ArrowDown :size="24" />
        </button>
      </section>

      <section class="home-panel">
        <div class="home-panel-inner">
          <div class="section-title-row">
            <div>
              <p class="eyebrow">Selected Patterns</p>
              <h2>精选纹样预览</h2>
            </div>
            <button class="primary-button compact" type="button" @click="$emit('navigate', '/library')">进入纹库</button>
          </div>
          <div class="pattern-slider">
            <PatternCard v-for="pattern in featuredPatterns" :key="pattern.id" :pattern="pattern" @open="$emit('open-pattern', pattern)" @create="$emit('create-pattern', pattern)" />
          </div>
        </div>
        <button class="scroll-cue scroll-cue-on-light" type="button" aria-label="继续寻找你的蓝" @click="goSection(5)">
          <ArrowDown :size="24" />
        </button>
      </section>

      <section class="home-panel cta-panel">
        <p class="eyebrow">Find Your Blue</p>
        <h2>你的蓝，是什么？</h2>
        <p>选择几个关键词，生成一张属于你的大临蓝印纹样卡。</p>
        <button class="primary-button" type="button" @click="$emit('navigate', '/find-blue')">
          寻找你的蓝
          <Sparkles :size="18" />
        </button>
      </section>
    </div>
  </section>
</template>
