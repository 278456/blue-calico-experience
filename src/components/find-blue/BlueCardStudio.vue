<script setup>
import { computed, ref } from 'vue'
import { ArrowRight, Download, RotateCcw } from 'lucide-vue-next'
import { patterns } from '../../data'

const answers = ref([])
const generatedAt = ref('')

const questions = [
  {
    title: '旅行到大临村，你最先被什么吸引？',
    options: [
      { text: '老街、河道和安静的生活气息', trait: 'steady' },
      { text: '工坊里一双双正在制作的手', trait: 'warm' },
      { text: '蓝白纹样里不断重复的秩序', trait: 'wise' },
      { text: '可以亲手体验的新鲜感', trait: 'free' },
    ],
  },
  {
    title: '面对一件需要耐心完成的事，你通常会？',
    options: [
      { text: '按步骤慢慢推进', trait: 'steady' },
      { text: '先理解它背后的意义', trait: 'wise' },
      { text: '边做边找新的方法', trait: 'free' },
      { text: '希望和身边人一起完成', trait: 'warm' },
    ],
  },
  {
    title: '你更喜欢哪一种蓝印花布寓意？',
    options: [
      { text: '平安长久', trait: 'steady' },
      { text: '花开富贵', trait: 'joyful' },
      { text: '生生不息', trait: 'resilient' },
      { text: '自在生长', trait: 'free' },
    ],
  },
  {
    title: '朋友眼中的你更接近？',
    options: [
      { text: '可靠，能让人安心', trait: 'steady' },
      { text: '热情，愿意照顾别人', trait: 'warm' },
      { text: '清醒，善于观察判断', trait: 'wise' },
      { text: '有趣，喜欢尝试变化', trait: 'free' },
    ],
  },
  {
    title: '如果把一天交给你安排，你会选择？',
    options: [
      { text: '走一条熟悉但舒服的路线', trait: 'steady' },
      { text: '约上亲友一起吃饭聊天', trait: 'warm' },
      { text: '看展、读资料、慢慢理解一件事', trait: 'wise' },
      { text: '临时出发，遇见什么算什么', trait: 'free' },
    ],
  },
  {
    title: '你希望这张蓝印卡给你什么力量？',
    options: [
      { text: '稳稳向前', trait: 'steady' },
      { text: '被爱与好运围绕', trait: 'joyful' },
      { text: '在低谷里继续生长', trait: 'resilient' },
      { text: '保持心里的清明', trait: 'wise' },
    ],
  },
  {
    title: '看到复杂纹样时，你会先注意到？',
    options: [
      { text: '边框和对称结构', trait: 'steady' },
      { text: '花朵与枝蔓的生命感', trait: 'resilient' },
      { text: '里面藏着的祝福符号', trait: 'joyful' },
      { text: '它可以被重新设计的可能', trait: 'free' },
    ],
  },
  {
    title: '离开大临村时，你最想带走？',
    options: [
      { text: '一份安定的记忆', trait: 'steady' },
      { text: '一份给家人的祝福', trait: 'warm' },
      { text: '一份继续探索的灵感', trait: 'free' },
      { text: '一份关于传统的理解', trait: 'wise' },
    ],
  },
]

const profiles = {
  steady: {
    title: '静水守心型',
    patternId: 'huiwen',
    blessing: '愿你岁岁平安，步履从容，心中常有安定的蓝。',
    summary: '你重视秩序、稳定和长久的陪伴。适合你的蓝印纹样，像回纹一样周而复始，把平安与耐心织进日常。',
  },
  warm: {
    title: '暖枝相伴型',
    patternId: 'shiliu',
    blessing: '愿你所到之处皆有温情，家人团圆，福气生长。',
    summary: '你很在意人与人之间的连接，也愿意把好运分享给身边的人。石榴团圆纹适合这种温暖、丰足的性格。',
  },
  wise: {
    title: '清蓝观照型',
    patternId: 'chanzhi-lian',
    blessing: '愿你心有清明，见微知著，在纷繁里保持自己的判断。',
    summary: '你喜欢理解事物背后的脉络，安静却有力量。缠枝莲纹的连绵结构，像你对世界持续而细致的观察。',
  },
  free: {
    title: '风蝶自在型',
    patternId: 'hudie',
    blessing: '愿你自由生长，所行皆有新意，所遇皆成风景。',
    summary: '你愿意尝试、变化，也愿意让生活保持弹性。蝶恋花纹轻盈灵动，适合你的自在与好奇。',
  },
  resilient: {
    title: '青藤生生型',
    patternId: 'pan-chang',
    blessing: '愿你穿过风雨仍能生长，福运绵延，心力不断。',
    summary: '你有韧性，遇到困难也会慢慢找到出路。盘长纹回环不绝，正适合这种持续向前的生命力。',
  },
  joyful: {
    title: '喜花迎福型',
    patternId: 'mudan',
    blessing: '愿你花开富贵，喜气常在，每一天都有热闹的好光景。',
    summary: '你容易被美好、庆祝和丰盛的气氛打动。牡丹团花纹饱满明亮，适合你的喜悦和好运感。',
  },
}

const currentIndex = computed(() => Math.min(answers.value.length, questions.length - 1))
const currentQuestion = computed(() => questions[currentIndex.value])
const isComplete = computed(() => answers.value.length === questions.length)
const progressPercent = computed(() => Math.round((answers.value.length / questions.length) * 100))

const topTrait = computed(() => {
  const scores = answers.value.reduce((total, answer) => {
    total[answer.trait] = (total[answer.trait] || 0) + 1
    return total
  }, {})

  return Object.entries(scores).sort((first, second) => second[1] - first[1])[0]?.[0] || 'steady'
})

const resultProfile = computed(() => profiles[topTrait.value])
const recommendedPattern = computed(() => patterns.find((pattern) => pattern.id === resultProfile.value.patternId) || patterns[0])
const answerTags = computed(() => answers.value.map((answer) => answer.text))
const resultImage = computed(() => `/assets/personality-card/${resultProfile.value.patternId}.jpg`)

function answerQuestion(option) {
  if (isComplete.value) return
  answers.value = [...answers.value, option]
  if (answers.value.length === questions.length) generateBlueCard()
}

function resetTest() {
  answers.value = []
  generatedAt.value = ''
}

function generateBlueCard() {
  generatedAt.value = new Intl.DateTimeFormat('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date())
}

function escapeSvgText(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
}

function wrapSvgText(text, x, y, maxChars, lineHeight, attrs) {
  const lines = []
  for (let index = 0; index < text.length; index += maxChars) {
    lines.push(text.slice(index, index + maxChars))
  }
  return lines
    .map((line, index) => `<text x="${x}" y="${y + index * lineHeight}" ${attrs}>${escapeSvgText(line)}</text>`)
    .join('')
}

function downloadCard() {
  if (!isComplete.value) return

  const pattern = recommendedPattern.value
  const profile = resultProfile.value
  const svgPattern = Array.from({ length: 9 })
    .map((_, row) =>
      Array.from({ length: 6 })
        .map((__, col) => {
          const cx = 150 + col * 132
          const cy = 150 + row * 78
          return `<circle cx="${cx}" cy="${cy}" r="14"/><circle cx="${cx + 22}" cy="${cy + 22}" r="10"/><circle cx="${cx - 22}" cy="${cy + 22}" r="10"/>`
        })
        .join(''),
    )
    .join('')

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="960" height="1280" viewBox="0 0 960 1280">
      <rect width="960" height="1280" fill="#f7f5f0"/>
      <rect x="64" y="64" width="832" height="1152" rx="34" fill="#1a3a5c"/>
      <g fill="#f7f5f0" opacity=".88">${svgPattern}</g>
      <rect x="112" y="680" width="736" height="420" rx="26" fill="#f7f5f0" opacity=".96"/>
      <text x="152" y="750" fill="#4a7ba7" font-size="24" font-family="sans-serif" font-weight="700" letter-spacing="4">DALIN BLUE CALICO</text>
      <text x="152" y="830" fill="#0d1f33" font-size="58" font-family="serif" font-weight="700">${escapeSvgText(profile.title)}</text>
      <text x="152" y="900" fill="#1a3a5c" font-size="38" font-family="serif" font-weight="700">${escapeSvgText(pattern.name)}</text>
      ${wrapSvgText(profile.blessing, 152, 960, 18, 36, 'fill="#2c2c2c" font-size="28" font-family="sans-serif"')}
      <text x="152" y="1112" fill="#8a8580" font-size="22" font-family="sans-serif">生成时间：${escapeSvgText(generatedAt.value)}</text>
    </svg>`

  const blob = new Blob([svg], { type: 'image/svg+xml;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = `大临蓝印-${profile.title}-${pattern.name}.svg`
  link.click()
  URL.revokeObjectURL(url)
}
</script>

<template>
  <div class="blue-card-studio">
    <div class="personality-layout" :class="{ complete: isComplete }">
      <section v-if="!isComplete" class="quiz-panel">
        <div class="quiz-progress">
          <span>{{ answers.length }}/{{ questions.length }}</span>
          <div><i :style="{ width: `${progressPercent}%` }"></i></div>
        </div>

        <div class="quiz-question">
          <p class="eyebrow">Blue Personality Test</p>
          <h3>{{ currentQuestion.title }}</h3>
          <div class="quiz-options">
            <button
              v-for="option in currentQuestion.options"
              :key="option.text"
              type="button"
              @click="answerQuestion(option)"
            >
              {{ option.text }}
              <ArrowRight :size="16" />
            </button>
          </div>
        </div>
      </section>

      <section v-if="isComplete" class="card-preview-panel">
        <article class="blue-personality-card" :class="{ ready: isComplete }">
          <img class="blue-card-pattern" :src="resultImage" :alt="recommendedPattern.name" />
          <div class="personality-card-copy">
            <p class="eyebrow">大临蓝印 · 性格纹样卡</p>
            <h2>{{ resultProfile.title }}</h2>
            <h3>{{ recommendedPattern.name }}</h3>
            <p>{{ resultProfile.blessing }}</p>
            <div class="selected-tags">
              <span v-for="answer in answerTags.slice(-3)" :key="answer">{{ answer }}</span>
            </div>
            <small>{{ generatedAt }}</small>
          </div>
        </article>

        <div class="studio-actions result-actions">
          <button class="primary-button" type="button" @click="downloadCard">
            <Download :size="18" />
            下载保存卡片
          </button>
          <button class="secondary-button" type="button" @click="resetTest">
            <RotateCcw :size="18" />
            重新测试
          </button>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.personality-layout {
  display: grid;
  grid-template-columns: minmax(720px, 980px);
  justify-content: center;
  gap: 24px;
  align-items: start;
}

.personality-layout.complete {
  grid-template-columns: minmax(760px, 1020px);
  justify-content: center;
}

.quiz-panel,
.card-preview-panel {
  display: grid;
  gap: 14px;
}

.card-preview-panel {
  width: 100%;
}

.quiz-panel {
  min-height: 580px;
  padding: clamp(34px, 5vw, 58px);
  border: 1px solid rgba(26, 58, 92, 0.1);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.74);
  box-shadow: 0 24px 54px rgba(13, 31, 51, 0.1);
}

.quiz-progress {
  display: grid;
  gap: 10px;
}

.quiz-progress span {
  color: var(--blue-primary);
  font-weight: 900;
}

.quiz-progress div {
  height: 8px;
  border-radius: 999px;
  background: rgba(26, 58, 92, 0.1);
  overflow: hidden;
}

.quiz-progress i {
  display: block;
  height: 100%;
  border-radius: inherit;
  background: var(--blue-primary);
  transition: width 260ms ease;
}

.quiz-question {
  display: grid;
  gap: 26px;
}

.quiz-question h3 {
  max-width: 820px;
  font-size: clamp(38px, 4vw, 58px);
  line-height: 1.15;
}

.quiz-options {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.quiz-options button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  min-height: 112px;
  padding: 22px 20px 22px 24px;
  border: 1px solid rgba(26, 58, 92, 0.12);
  border-radius: 8px;
  color: var(--blue-primary);
  background: rgba(247, 245, 240, 0.92);
  font-size: 18px;
  font-weight: 900;
  text-align: left;
}

.quiz-options button:hover {
  color: var(--white-warm);
  border-color: var(--blue-primary);
  background: var(--blue-primary);
}

.studio-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.result-actions {
  justify-content: center;
}

.blue-personality-card {
  overflow: hidden;
  border-radius: 8px;
  color: var(--blue-primary);
  background: transparent;
  box-shadow: 0 24px 64px rgba(13, 31, 51, 0.22);
}

.blue-personality-card.ready {
  box-shadow: 0 30px 78px rgba(13, 31, 51, 0.28);
}

.blue-card-pattern {
  display: block;
  width: 100%;
  height: 420px;
  min-height: 420px;
  object-fit: cover;
  object-position: center;
  background-color: var(--blue-primary);
}

.personality-card-copy {
  padding: 16px 28px 18px;
  background: transparent;
}

.personality-card-copy h2,
.personality-card-copy h3,
.personality-card-copy .eyebrow {
  color: var(--blue-primary);
}

.personality-card-copy h2 {
  margin: 4px 0 0;
  font-size: clamp(28px, 3vw, 42px);
  line-height: 1.1;
}

.personality-card-copy h3 {
  margin: 4px 0 0;
  font-size: 19px;
}

.personality-card-copy p {
  margin: 10px 0 0;
  color: rgba(26, 58, 92, 0.78);
  font-size: 14px;
  line-height: 1.6;
}

.selected-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 10px 0;
}

.selected-tags span {
  padding: 4px 8px;
  border: 1px solid rgba(26, 58, 92, 0.25);
  border-radius: 999px;
  color: var(--blue-primary);
  background: transparent;
  font-size: 12px;
  font-weight: 900;
}

.personality-card-copy small {
  font-size: 12px;
}

@media (max-width: 980px) {
  .personality-layout {
    grid-template-columns: 1fr;
  }

  .quiz-options {
    grid-template-columns: 1fr;
  }
}
</style>
