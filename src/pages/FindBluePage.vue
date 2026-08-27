<script setup>
import { computed, ref } from 'vue'
import { ArrowLeft, ArrowRight, Gamepad2, Sparkles, Stars } from 'lucide-vue-next'

const emit = defineEmits(['navigate'])

const slides = [
  {
    key: 'card',
    title: '专属蓝印卡',
    subtitle: '选择你的寓意',
    description: '从平安、富贵、长寿、团圆中选取心意，生成属于你的蓝印纹样卡。',
    path: '/find-blue/card',
    cover: '/assets/find-blue/card-cover.png',
    accent: '柔和生成',
    status: 'available',
  },
  {
    key: 'game',
    title: '纹样翻翻乐',
    subtitle: '翻牌识纹样',
    description: '在配对互动里认识大临村蓝印花布的经典图案，边玩边记住它们的寓意。',
    path: '/find-blue/game',
    cover: '/assets/find-blue/memory-cover.png',
    accent: '互动挑战',
    status: 'available',
  },
  {
    key: 'coming-soon',
    title: '更多体验',
    subtitle: '持续更新中',
    description: '后续将加入更多与蓝印花布相关的互动体验，形成完整的数字游览路径。',
    path: '',
    cover: '',
    accent: '敬请期待',
    status: 'coming',
  },
]

const activeIndex = ref(1)

const activeSlide = computed(() => slides[activeIndex.value])

function goPrev() {
  activeIndex.value = (activeIndex.value - 1 + slides.length) % slides.length
}

function goNext() {
  activeIndex.value = (activeIndex.value + 1) % slides.length
}

function getCardClass(index) {
  const diff = (index - activeIndex.value + slides.length) % slides.length
  if (diff === 0) return 'is-center'
  if (diff === 1) return 'is-right'
  return 'is-left'
}

function activateOrEnter(index) {
  if (index !== activeIndex.value) {
    activeIndex.value = index
    return
  }
  if (slides[index].status === 'available') {
    emit('navigate', slides[index].path)
  }
}
</script>

<template>
  <section class="find-menu-page">
    <div class="find-menu-hero">
      <p class="find-menu-kicker">SELECT YOUR BLUE EXPERIENCE</p>
      <h1>寻找你的蓝</h1>
    </div>

    <div class="find-menu-stage">
      <button class="carousel-arrow left" type="button" aria-label="上一个体验" @click="goPrev">
        <ArrowLeft :size="24" />
      </button>

      <div class="find-carousel" aria-label="互动体验轮播菜单">
        <button
          v-for="(slide, index) in slides"
          :key="slide.key"
          type="button"
          class="find-carousel-card"
          :class="[getCardClass(index), { disabled: slide.status !== 'available', 'has-cover': !!slide.cover }]"
          @click="activateOrEnter(index)"
        >
          <img v-if="slide.cover" class="card-cover-image" :src="slide.cover" :alt="slide.title" />
          <span class="card-overlay"></span>
          <span class="card-noise"></span>
          <span v-if="slide.cover" class="card-cover-intro">
            <b>{{ slide.subtitle }}</b>
            <small>{{ slide.description }}</small>
          </span>
          <span v-if="!slide.cover" class="card-copy">
            <i>{{ slide.accent }}</i>
            <strong>{{ slide.title }}</strong>
            <em>{{ slide.subtitle }}</em>
            <small>{{ slide.description }}</small>
          </span>
          <span v-if="!slide.cover" class="card-action">
            <component :is="slide.key === 'card' ? Sparkles : slide.key === 'game' ? Gamepad2 : Stars" :size="18" />
            {{ slide.status === 'available' ? '点击进入' : '即将开放' }}
          </span>
        </button>
      </div>

      <button class="carousel-arrow right" type="button" aria-label="下一个体验" @click="goNext">
        <ArrowRight :size="24" />
      </button>
    </div>

    <div class="find-menu-footer">
      <div class="find-menu-actions">
        <div class="find-menu-dots">
          <button
            v-for="(slide, index) in slides"
            :key="slide.key"
            type="button"
            :class="{ active: activeIndex === index }"
            :aria-label="`切换到${slide.title}`"
            @click="activeIndex = index"
          ></button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.find-menu-page {
  min-height: calc(100vh - 74px);
  padding: 126px clamp(24px, 5vw, 72px) 48px;
  color: rgba(247, 245, 240, 0.92);
  background:
    radial-gradient(circle at top, rgba(47, 87, 132, 0.24), transparent 24%),
    linear-gradient(180deg, #050709 0%, #070b10 36%, #0d1420 100%);
}

.find-menu-hero {
  display: grid;
  justify-items: center;
  gap: 12px;
  text-align: center;
}

.find-menu-kicker {
  margin: 0;
  color: rgba(247, 245, 240, 0.48);
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0.42em;
}

.find-menu-hero h1 {
  color: rgba(247, 245, 240, 0.92);
  font-size: clamp(56px, 9vw, 108px);
  font-weight: 500;
}

.find-menu-lead {
  width: min(760px, 100%);
  margin: 0;
  color: rgba(247, 245, 240, 0.66);
  font-size: 18px;
  line-height: 1.9;
}

.find-menu-stage {
  display: grid;
  grid-template-columns: 72px minmax(0, 1fr) 72px;
  gap: 18px;
  align-items: center;
  margin-top: 48px;
}

.carousel-arrow {
  display: grid;
  width: 56px;
  height: 108px;
  place-items: center;
  border: 1px solid rgba(247, 245, 240, 0.12);
  border-radius: 8px;
  color: rgba(247, 245, 240, 0.82);
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(8px);
}

.find-carousel {
  position: relative;
  height: 560px;
  perspective: 1800px;
  transform-style: preserve-3d;
}

.find-carousel-card {
  position: absolute;
  top: 0;
  left: 50%;
  display: grid;
  align-content: end;
  width: min(320px, 30vw);
  height: 100%;
  padding: 28px 24px;
  border: 1px solid rgba(247, 245, 240, 0.14);
  border-radius: 12px;
  overflow: hidden;
  color: rgba(247, 245, 240, 0.96);
  background-color: #10243a;
  box-shadow: 0 32px 70px rgba(0, 0, 0, 0.34);
  text-align: left;
  transform-origin: center center;
  transition:
    transform 620ms cubic-bezier(0.22, 0.72, 0.2, 1),
    opacity 420ms ease,
    filter 420ms ease,
    box-shadow 420ms ease;
}

.find-carousel-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, rgba(4, 10, 16, 0.18), rgba(4, 10, 16, 0.82)),
    linear-gradient(135deg, rgba(26, 58, 92, 0.64), rgba(39, 77, 121, 0.14));
}

.find-carousel-card.is-center {
  z-index: 3;
  opacity: 1;
  filter: saturate(1) brightness(1);
  transform: translateX(-50%) translateZ(0) rotateY(0deg) scale(1);
}

.find-carousel-card.is-left {
  z-index: 2;
  opacity: 0.58;
  filter: saturate(0.8) brightness(0.78);
  transform: translateX(calc(-50% - 340px)) translateZ(-240px) rotateY(32deg) scale(0.9);
}

.find-carousel-card.is-right {
  z-index: 2;
  opacity: 0.58;
  filter: saturate(0.8) brightness(0.78);
  transform: translateX(calc(-50% + 340px)) translateZ(-240px) rotateY(-32deg) scale(0.9);
}

.find-carousel-card.disabled {
  cursor: default;
}

.card-overlay,
.card-noise {
  position: absolute;
  inset: 0;
}

.card-overlay {
  background:
    radial-gradient(circle at 20% 18%, rgba(255, 255, 255, 0.18), transparent 24%),
    radial-gradient(circle at 78% 28%, rgba(247, 245, 240, 0.12), transparent 26%),
    linear-gradient(180deg, transparent 0%, rgba(5, 7, 9, 0.2) 38%, rgba(5, 7, 9, 0.82) 100%);
}

.card-noise {
  opacity: 0.12;
  mix-blend-mode: screen;
  background:
    linear-gradient(90deg, rgba(255, 255, 255, 0.18) 0 1px, transparent 1px 28px),
    linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0 1px, transparent 1px 28px);
}

.card-copy,
.card-action {
  position: relative;
  z-index: 1;
}

.card-copy {
  display: grid;
  gap: 10px;
}

.card-copy i {
  color: rgba(247, 245, 240, 0.78);
  font-size: 13px;
  font-style: normal;
  letter-spacing: 0.18em;
}

.card-copy strong {
  font-family: 'Noto Serif SC', 'Songti SC', serif;
  font-size: clamp(32px, 3.2vw, 44px);
  font-weight: 900;
  line-height: 1.08;
}

.card-copy em {
  color: rgba(247, 245, 240, 0.92);
  font-size: 18px;
  font-style: normal;
}

.card-copy small {
  color: rgba(247, 245, 240, 0.68);
  font-size: 14px;
  line-height: 1.8;
}

.card-action {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
  margin-top: 24px;
  padding: 10px 14px;
  border: 1px solid rgba(247, 245, 240, 0.18);
  border-radius: 999px;
  color: rgba(247, 245, 240, 0.92);
  background: rgba(255, 255, 255, 0.05);
  font-size: 13px;
  font-weight: 900;
}

.find-menu-footer {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 24px;
  margin: 36px auto 0;
  width: min(1180px, 100%);
}

.find-menu-meta {
  max-width: 520px;
}

.find-menu-meta h2 {
  margin-top: 8px;
  color: rgba(247, 245, 240, 0.96);
  font-size: clamp(34px, 4vw, 56px);
}

.find-menu-meta p:last-child {
  color: rgba(247, 245, 240, 0.68);
  line-height: 1.9;
}

.find-menu-actions {
  display: grid;
  justify-items: end;
  gap: 16px;
}

.find-menu-dots {
  display: inline-flex;
  gap: 10px;
}

.find-menu-dots button {
  width: 10px;
  height: 10px;
  border: 0;
  border-radius: 999px;
  background: rgba(247, 245, 240, 0.26);
}

.find-menu-dots button.active {
  width: 34px;
  background: rgba(247, 245, 240, 0.92);
}

.menu-enter-button {
  min-width: 220px;
}

@media (max-width: 1100px) {
  .find-carousel {
    height: 500px;
  }

  .find-carousel-card {
    width: min(290px, 34vw);
  }

  .find-carousel-card.is-left {
    transform: translateX(calc(-50% - 270px)) translateZ(-220px) rotateY(28deg) scale(0.88);
  }

  .find-carousel-card.is-right {
    transform: translateX(calc(-50% + 270px)) translateZ(-220px) rotateY(-28deg) scale(0.88);
  }
}

@media (max-width: 860px) {
  .find-menu-page {
    padding-inline: 18px;
  }

  .find-menu-stage {
    grid-template-columns: 1fr;
  }

  .carousel-arrow {
    display: none;
  }

  .find-carousel {
    height: 420px;
  }

  .find-carousel-card {
    width: min(280px, 78vw);
  }

  .find-carousel-card.is-left {
    transform: translateX(calc(-50% - 120px)) translateZ(-180px) rotateY(28deg) scale(0.78);
  }

  .find-carousel-card.is-right {
    transform: translateX(calc(-50% + 120px)) translateZ(-180px) rotateY(-28deg) scale(0.78);
  }

  .find-menu-footer {
    align-items: start;
    flex-direction: column;
  }

  .find-menu-actions {
    width: 100%;
    justify-items: stretch;
  }

  .menu-enter-button {
    width: 100%;
  }
}
</style>
