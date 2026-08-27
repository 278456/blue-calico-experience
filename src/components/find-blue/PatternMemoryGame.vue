<script setup>
import { computed, onBeforeUnmount, ref } from 'vue'
import { Clock3, RotateCcw, Trophy, X } from 'lucide-vue-next'

const patternPool = [
  {
    id: 'lion',
    name: '瑞狮纳福纹',
    category: '瑞兽纹',
    image: '/assets/games/flip/pattern-01.png',
    meaning: '镇宅纳福，吉庆安康',
    desc: '瑞狮纹常见于蓝印花布被面、门帘与嫁妆织物，借威严兽形寄托守护家宅、迎祥纳福的愿望。',
  },
  {
    id: 'fish-lotus',
    name: '连年有余纹',
    category: '民俗纹样',
    image: '/assets/games/flip/pattern-02.jpg',
    meaning: '年年富足，阖家圆满',
    desc: '鱼与莲花谐音成意，是大临村传统被面经典纹样，适合表达丰收、团圆与绵延不断的生活祝福。',
  },
  {
    id: 'peony',
    name: '牡丹富贵纹',
    category: '花草纹',
    image: '/assets/games/flip/pattern-03.jpg',
    meaning: '花开富贵，生活兴旺',
    desc: '牡丹纹以饱满花形表现富贵气象，蓝白留白之间呈现朴素而隆重的民间审美。',
  },
  {
    id: 'pomegranate',
    name: '石榴多子纹',
    category: '花草纹',
    image: '/assets/games/flip/pattern-04.jpg',
    meaning: '多子多福，家族兴旺',
    desc: '石榴籽粒繁密，常被用于婚嫁和家用布饰，寓意人丁兴旺与福气延续。',
  },
  {
    id: 'shou',
    name: '团寿吉祥纹',
    category: '福寿纹',
    image: '/assets/games/flip/pattern-05.jpg',
    meaning: '福寿绵长，平安顺遂',
    desc: '寿字与团形结构结合，讲究对称与秩序，是蓝印花布中辨识度很高的祝寿类纹样。',
  },
  {
    id: 'butterfly',
    name: '蝶恋花纹',
    category: '花草纹',
    image: '/assets/games/flip/pattern-06.jpg',
    meaning: '美满相伴，春意常在',
    desc: '蝴蝶与花卉组合轻盈灵动，常用于表现生活中的喜悦、爱意与自然生机。',
  },
  {
    id: 'crane',
    name: '仙鹤延年纹',
    category: '瑞兽纹',
    image: '/assets/games/flip/pattern-07.png',
    meaning: '延年益寿，清雅高洁',
    desc: '仙鹤在传统图像中象征长寿与高洁，蓝印花布用简练的蓝白块面保留其舒展姿态。',
  },
  {
    id: 'gourd',
    name: '葫芦福禄纹',
    category: '民俗纹样',
    image: '/assets/games/flip/pattern-08.jpg',
    meaning: '福禄双全，辟邪纳祥',
    desc: '葫芦与福禄谐音，形体饱满，常被民间用来表达护佑、丰足与平安。',
  },
  {
    id: 'plum',
    name: '梅开五福纹',
    category: '花草纹',
    image: '/assets/games/flip/pattern-09.jpg',
    meaning: '坚韧清雅，五福临门',
    desc: '梅花不畏寒霜，蓝印花布中的梅花纹通过枝蔓与花点变化表现坚韧品格。',
  },
  {
    id: 'phoenix',
    name: '凤穿牡丹纹',
    category: '瑞兽纹',
    image: '/assets/games/flip/pattern-10.png',
    meaning: '吉祥华美，富贵和合',
    desc: '凤鸟与牡丹组合常见于喜庆织物，体现民间对婚姻美满与家业兴盛的祝愿。',
  },
  {
    id: 'coin',
    name: '方胜盘长纹',
    category: '几何纹',
    image: '/assets/games/flip/pattern-11.jpg',
    meaning: '连续不断，事事如意',
    desc: '几何纹样重视连续构成，方胜与盘长结构适合作为边饰或满地纹，象征福泽不断。',
  },
  {
    id: 'lotus',
    name: '莲花清廉纹',
    category: '花草纹',
    image: '/assets/games/flip/pattern-12.jpg',
    meaning: '清正雅洁，和美安宁',
    desc: '莲花纹以舒展花瓣和叶形构成画面中心，在蓝印工艺中呈现清爽、端正的视觉气质。',
  },
]

const modes = {
  standard: { label: '进阶 12 张', pairs: 6, cols: 4 },
}

const currentMode = ref('standard')
const cards = ref([])
const openedCards = ref([])
const matchedPairs = ref(0)
const moves = ref(0)
const seconds = ref(0)
const started = ref(false)
const locked = ref(false)
const activeKnowledge = ref(null)
const resultOpen = ref(false)
let timerId = null
let knowledgeTimerId = null
let pairTimerId = null

const totalPairs = computed(() => modes[currentMode.value].pairs)
const boardRows = computed(() => Math.ceil(cards.value.length / modes[currentMode.value].cols))
const boardStyle = computed(() => ({
  '--board-cols': String(modes[currentMode.value].cols),
  '--board-rows': String(boardRows.value),
  gridTemplateColumns: `repeat(${modes[currentMode.value].cols}, minmax(0, 1fr))`,
  gridTemplateRows: `repeat(${boardRows.value}, minmax(0, 1fr))`,
}))
const resultTitle = computed(() => {
  if (currentMode.value === 'standard' && seconds.value <= 55 && moves.value <= 10) return '蓝印识纹达人'
  if (moves.value <= 16) return '非遗纹样初学者'
  return '初识大临蓝印'
})

function shuffle(list) {
  const copied = [...list]
  for (let i = copied.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copied[i], copied[j]] = [copied[j], copied[i]]
  }
  return copied
}

function formatTime(value) {
  const minute = String(Math.floor(value / 60)).padStart(2, '0')
  const second = String(value % 60).padStart(2, '0')
  return `${minute}:${second}`
}

function startTimer() {
  if (started.value) return
  started.value = true
  timerId = window.setInterval(() => {
    seconds.value += 1
  }, 1000)
}

function stopTimer() {
  window.clearInterval(timerId)
  timerId = null
}

function stopPairResolution() {
  window.clearTimeout(pairTimerId)
  pairTimerId = null
}

function buildDeck() {
  const selected = shuffle(patternPool).slice(0, modes[currentMode.value].pairs)
  return shuffle(
    selected.flatMap((item) => [
      { ...item, cardId: `${item.id}-a`, state: 'hidden' },
      { ...item, cardId: `${item.id}-b`, state: 'hidden' },
    ]),
  )
}

function resetGame(mode = currentMode.value) {
  stopTimer()
  stopPairResolution()
  window.clearTimeout(knowledgeTimerId)
  currentMode.value = mode
  cards.value = buildDeck()
  openedCards.value = []
  matchedPairs.value = 0
  moves.value = 0
  seconds.value = 0
  started.value = false
  locked.value = false
  activeKnowledge.value = null
  resultOpen.value = false
}

function closeKnowledge() {
  window.clearTimeout(knowledgeTimerId)
  activeKnowledge.value = null
}

function setMode(mode) {
  if (mode === currentMode.value) return
  resetGame(mode)
}

function flipCard(cardId) {
  if (locked.value) return
  const card = cards.value.find((item) => item.cardId === cardId)
  if (!card || card.state !== 'hidden') return

  startTimer()
  card.state = 'open'
  openedCards.value = [...openedCards.value, card]

  if (openedCards.value.length === 2) {
    moves.value += 1
    checkPair()
  }
}

function checkPair() {
  const [first, second] = openedCards.value
  locked.value = true

  if (first.id === second.id) {
    pairTimerId = window.setTimeout(() => {
      pairTimerId = null
      cards.value.forEach((card) => {
        if (card.cardId === first.cardId || card.cardId === second.cardId) card.state = 'matched'
      })
      matchedPairs.value += 1
      activeKnowledge.value = first
      window.clearTimeout(knowledgeTimerId)
      knowledgeTimerId = window.setTimeout(() => {
        activeKnowledge.value = null
      }, 3000)
      openedCards.value = []
      locked.value = false
      if (matchedPairs.value === totalPairs.value) {
        stopTimer()
        resultOpen.value = true
      }
    }, 320)
    return
  }

  pairTimerId = window.setTimeout(() => {
    pairTimerId = null
    cards.value.forEach((card) => {
      if (card.cardId === first.cardId || card.cardId === second.cardId) card.state = 'hidden'
    })
    openedCards.value = []
    locked.value = false
  }, 760)
}

onBeforeUnmount(() => {
  stopTimer()
  stopPairResolution()
  window.clearTimeout(knowledgeTimerId)
})

resetGame()
</script>

<template>
  <div class="memory-game">
    <aside class="game-sidebar">
      <div class="game-title">
        <p class="eyebrow">Blue Calico Match</p>
        <h3>蓝印纹样翻翻乐</h3>
      </div>

      <div class="game-stats">
        <article><Clock3 :size="18" /><span>用时</span><strong>{{ formatTime(seconds) }}</strong></article>
        <article><span>步数</span><strong>{{ moves }}</strong></article>
        <article><Trophy :size="18" /><span>配对</span><strong>{{ matchedPairs }}/{{ totalPairs }}</strong></article>
      </div>

      <button class="secondary-button" type="button" @click="resetGame()">
        <RotateCcw :size="16" />
        重新开始
      </button>
    </aside>

    <section class="game-layout">
      <div class="board-shell">
        <div class="board" :style="boardStyle">
          <button
            v-for="card in cards"
            :key="card.cardId"
            type="button"
            class="memory-card"
            :class="[`state-${card.state}`]"
            @click="flipCard(card.cardId)"
          >
            <span class="memory-card-inner">
              <span class="memory-card-face memory-card-back">
                <img class="memory-card-back-image" src="/assets/games/flip/card-back.jpg" alt="" />
              </span>
              <span class="memory-card-face memory-card-front">
                <img :src="card.image" :alt="card.name" />
              </span>
            </span>
          </button>
        </div>
      </div>

      <Transition name="knowledge-panel">
        <aside v-if="activeKnowledge" class="knowledge-panel-overlay" @click="closeKnowledge">
          <div class="knowledge-panel-card">
            <img :src="activeKnowledge.image" :alt="activeKnowledge.name" />
            <div class="knowledge-panel-copy">
              <p class="eyebrow">配对成功</p>
              <h4>{{ activeKnowledge.name }}</h4>
              <strong>{{ activeKnowledge.meaning }}</strong>
              <p>{{ activeKnowledge.desc }}</p>
              <span>{{ activeKnowledge.category }}</span>
            </div>
            <button type="button" class="knowledge-close" aria-label="关闭纹样介绍" @click="closeKnowledge">
              <X :size="18" />
            </button>
          </div>
        </aside>
      </Transition>
    </section>

    <div v-if="resultOpen" class="result-overlay">
      <div class="result-card">
        <p class="eyebrow">全部配对完成</p>
        <h4>{{ resultTitle }}</h4>
        <div class="result-grid">
          <article><span>本局用时</span><strong>{{ formatTime(seconds) }}</strong></article>
          <article><span>总步数</span><strong>{{ moves }}</strong></article>
        </div>
        <p>你完成了 {{ totalPairs }} 组蓝印花布纹样配对，在翻牌中记住了纹样名称、寓意和文化背景。</p>
        <button class="primary-button" type="button" @click="resetGame()">再来一局</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.memory-game {
  position: relative;
  display: grid;
  grid-template-columns: 260px minmax(0, 1fr);
  gap: 14px;
  height: 100%;
  min-height: 0;
}

.game-sidebar,
.game-stats,
.board-shell {
  border: 1px solid rgba(26, 58, 92, 0.1);
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.74);
}

.game-sidebar {
  display: grid;
  align-content: start;
  gap: 18px;
  min-height: 0;
  padding: 20px 18px;
}

.game-title {
  display: grid;
  gap: 8px;
}

.game-title .eyebrow {
  margin: 0;
}

.game-title h3 {
  margin-top: 4px;
  color: var(--blue-primary);
  font-size: 34px;
  line-height: 1.05;
}

.game-stats {
  display: grid;
  gap: 10px;
  padding: 10px;
}

.game-stats article {
  display: grid;
  grid-template-columns: 20px 1fr auto;
  align-items: center;
  gap: 8px;
  min-height: 58px;
  padding: 0 12px;
  border-radius: 10px;
  background: rgba(240, 236, 227, 0.72);
}

.game-stats span {
  color: #6d6862;
  font-size: 13px;
  font-weight: 900;
}

.game-stats strong {
  color: var(--blue-primary);
  font-size: 26px;
  justify-self: end;
}

.game-layout {
  display: grid;
  position: relative;
  min-height: 0;
}

.board-shell {
  display: grid;
  place-items: center;
  min-height: 0;
  padding: clamp(16px, 1.7vw, 28px);
}

.board {
  display: grid;
  width: auto;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  min-height: 0;
  aspect-ratio: var(--board-cols) / var(--board-rows);
  gap: clamp(10px, 1vw, 16px);
}

.memory-card {
  width: 100%;
  height: 100%;
  aspect-ratio: 1 / 1;
  min-height: 0;
  border: 0;
  padding: 0;
  background: transparent;
  perspective: 1000px;
}

.memory-card-inner {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 420ms ease;
}

.memory-card.state-open .memory-card-inner,
.memory-card.state-matched .memory-card-inner {
  transform: rotateY(180deg);
}

.memory-card-face {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  border-radius: 14px;
  backface-visibility: hidden;
  overflow: hidden;
}

.memory-card-back {
  background: #1a3a5c;
  box-shadow: 0 16px 28px rgba(13, 31, 51, 0.16);
}

.memory-card-back-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: saturate(1.08) contrast(1.04);
}

.memory-card-front {
  border: 1px solid rgba(26, 58, 92, 0.08);
  background: #f7f5f0;
  transform: rotateY(180deg);
}

.memory-card-front img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.memory-card.state-matched .memory-card-front {
  box-shadow: 0 0 0 2px rgba(74, 123, 167, 0.36);
}

.knowledge-panel-overlay {
  position: absolute;
  inset: 14px;
  z-index: 8;
  display: grid;
  place-items: center;
  padding: clamp(16px, 2vw, 28px);
  background: rgba(247, 245, 240, 0.64);
  backdrop-filter: blur(14px);
}

.knowledge-panel-card {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(320px, 0.75fr);
  width: min(1100px, 100%);
  min-height: min(72vh, 720px);
  border: 1px solid rgba(26, 58, 92, 0.12);
  border-radius: 22px;
  overflow: hidden;
  background: rgba(247, 245, 240, 0.98);
  box-shadow: 0 30px 80px rgba(13, 31, 51, 0.24);
}

.knowledge-panel-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(13, 31, 51, 0.08), transparent 28%);
  pointer-events: none;
}

.knowledge-panel-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.knowledge-panel-copy {
  display: grid;
  align-content: center;
  gap: 14px;
  padding: clamp(24px, 3vw, 42px);
  background:
    radial-gradient(circle at top right, rgba(74, 123, 167, 0.08), transparent 28%),
    rgba(247, 245, 240, 0.98);
}

.knowledge-panel-copy h4 {
  color: var(--blue-deep);
  font-size: clamp(30px, 3.2vw, 48px);
  line-height: 1.06;
}

.knowledge-panel-copy strong {
  color: var(--blue-primary);
  font-size: 18px;
  font-weight: 900;
}

.knowledge-panel-copy p {
  margin: 0;
  color: #615c56;
  line-height: 1.8;
}

.knowledge-panel-copy span {
  width: fit-content;
  padding: 6px 10px;
  border-radius: 999px;
  color: var(--blue-primary);
  background: rgba(74, 123, 167, 0.12);
  font-size: 13px;
  font-weight: 900;
}

.knowledge-close {
  position: absolute;
  top: 18px;
  right: 18px;
  display: grid;
  width: 36px;
  height: 36px;
  place-items: center;
  border: 0;
  border-radius: 999px;
  color: var(--blue-primary);
  background: rgba(247, 245, 240, 0.96);
  box-shadow: 0 10px 24px rgba(13, 31, 51, 0.14);
}

.knowledge-panel-enter-active,
.knowledge-panel-leave-active {
  transition:
    opacity 0.28s ease,
    transform 0.28s ease;
}

.knowledge-panel-enter-from,
.knowledge-panel-leave-to {
  opacity: 0;
  transform: scale(0.98);
}

.knowledge-panel-enter-to,
.knowledge-panel-leave-from {
  opacity: 1;
  transform: scale(1);
}

.result-overlay {
  position: fixed;
  inset: 0;
  z-index: 60;
  display: grid;
  place-items: center;
  padding: 24px;
  background: rgba(13, 31, 51, 0.52);
  backdrop-filter: blur(10px);
}

.result-card {
  width: min(520px, 100%);
  padding: 28px;
  border-radius: 22px;
  background: rgba(247, 245, 240, 0.98);
  box-shadow: 0 28px 60px rgba(13, 31, 51, 0.22);
}

.result-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin: 18px 0;
}

.result-grid article {
  display: grid;
  gap: 6px;
  padding: 16px;
  border-radius: 14px;
  background: rgba(240, 236, 227, 0.84);
}

.result-grid span {
  color: #6d6862;
  font-size: 14px;
}

.result-grid strong {
  color: var(--blue-primary);
  font-size: 28px;
}

@media (max-width: 1040px) {
  .memory-game {
    grid-template-columns: 220px minmax(0, 1fr);
  }
}

@media (max-width: 760px) {
  .memory-game {
    grid-template-columns: 1fr;
    grid-template-rows: auto minmax(0, 1fr);
  }

  .secondary-button {
    width: 100%;
  }

  .board {
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
  }

  .result-grid {
    grid-template-columns: 1fr;
  }
}
</style>
