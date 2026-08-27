<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { ArrowRight, Expand, Film, Images, MapPin, Sparkles, X } from 'lucide-vue-next'
import { craftSteps } from '../data'

const emit = defineEmits(['navigate'])
const selectedImage = ref(null)

const workshopImages = [
  { src: '/assets/fieldwork/studio-textiles.webp', alt: '工坊墙面悬挂的蓝印花布布样', caption: '布样陈列', note: '工坊现场 · 2026' },
  { src: '/assets/fieldwork/carving-detail.webp', alt: '手工刻制蓝印花布花版的细节', caption: '花版刻制', note: '手艺细节 · 2026' },
  { src: '/assets/fieldwork/artisan-guide.webp', alt: '传承人向来访者讲解蓝印花布花版', caption: '现场讲解', note: '人与手艺 · 2026' },
  { src: '/assets/fieldwork/studio-products.webp', alt: '工坊中的蓝印花布文创与制作工具', caption: '工具与产品', note: '工作台 · 2026' },
  { src: '/assets/fieldwork/workshop-room.webp', alt: '大临村蓝印花布工坊室内空间', caption: '工坊空间', note: '大临村 · 2026' },
]

const outreachStories = [
  { src: '/assets/fieldwork/exhibition-haining.webp', kicker: '展览', title: '守艺 · 大临蓝印花布非遗展', text: '从村庄工坊走入公共文化空间，让布样、花版和生活器物共同讲述手艺。' },
  { src: '/assets/fieldwork/exhibition-yiwu.webp', kicker: '博览会', title: '义乌文化和旅游产品交易博览会', text: '以文创产品和现场展示连接更广泛的观众，让传统纹样进入当代消费场景。' },
  { src: '/assets/fieldwork/runway.webp', kicker: '走秀', title: '黄湾文化旅游节非遗蓝印花走秀', text: '蓝印花布从平面布样变成可穿着的当代设计，在行走中呈现新的尺度。' },
  { src: '/assets/fieldwork/school-class.webp', kicker: '非遗进学校', title: '黄湾小学兴趣课堂', text: '通过彩色拷花布体验，让孩子从动手开始认识纹样、色彩与地方文化。' },
  { src: '/assets/fieldwork/enterprise-class.webp', kicker: '非遗进企业', title: '小候鸟公益课堂', text: '把非遗体验带进企业暑期课堂，让更多家庭在共同制作中接触传统工艺。' },
  { src: '/assets/fieldwork/scenic-class.webp', kicker: '非遗进景区', title: '南关厢蓝印花布体验', text: '在景区设置开放式体验，让游客把一次观看转化为亲手参与的记忆。' },
]

const creativeImages = [
  { src: '/assets/fieldwork/creative-products.webp', alt: '蓝印花布包袋、扇子等文创产品', caption: '包袋、扇面与日用器物' },
  { src: '/assets/fieldwork/creative-fashion.webp', alt: '蓝印花布服饰与包袋展示', caption: '传统纹样进入当代穿搭' },
]

function openImage(image) {
  selectedImage.value = image
  document.documentElement.classList.add('media-lightbox-open')
}

function closeImage() {
  selectedImage.value = null
  document.documentElement.classList.remove('media-lightbox-open')
}

function handleKeydown(event) {
  if (event.key === 'Escape') closeImage()
}

onMounted(() => window.addEventListener('keydown', handleKeydown))
onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown)
  document.documentElement.classList.remove('media-lightbox-open')
})
</script>

<template>
  <section class="field-page">
    <section class="field-hero">
      <img src="/assets/fieldwork/workshop-aerial.webp" alt="大临村蓝印花布工坊航拍" />
      <div class="field-hero-shade"></div>
      <div class="field-hero-copy">
        <p class="eyebrow">FIELD ARCHIVE · DALIN VILLAGE</p>
        <h1>她与蓝</h1>
        <p>从工坊的一匹布，到校园、景区与展览现场。真实影像记录大临蓝印花布如何被制作、被观看，也被继续使用。</p>
        <div class="field-hero-actions">
          <button class="primary-button" type="button" @click="emit('navigate', '/library')">浏览纹样档案 <ArrowRight :size="18" /></button>
          <a class="field-anchor-link" href="#field-film">观看工坊影像</a>
        </div>
      </div>
      <div class="field-hero-index" aria-label="页面内容索引">
        <span><b>01</b> 工坊现场</span>
        <span><b>02</b> 传播足迹</span>
        <span><b>03</b> 文创转译</span>
      </div>
    </section>

    <section id="field-film" class="field-band field-film-section">
      <div class="field-section-heading">
        <div><p class="eyebrow">Workshop Film</p><h2>十秒，走进一间仍在工作的工坊</h2></div>
        <Film :size="30" aria-hidden="true" />
      </div>
      <div class="field-film-layout">
        <video controls playsinline preload="metadata" poster="/assets/fieldwork/workshop-room.webp">
          <source src="/assets/fieldwork/workshop-film.webm" type="video/webm" />
          <source src="/assets/fieldwork/workshop-film.mp4" type="video/mp4" />
        </video>
        <div class="field-film-copy">
          <span>现场记录 · 2026.08</span>
          <p>镜头从工坊的布样、花版和工作台之间经过。它不是一段摆拍式宣传片，而是对真实制作空间的短暂凝视。</p>
          <dl>
            <div><dt>地点</dt><dd>浙江嘉兴 · 大临村</dd></div>
            <div><dt>内容</dt><dd>布样陈列、工具与制作现场</dd></div>
            <div><dt>形式</dt><dd>720p 现场影像</dd></div>
          </dl>
        </div>
      </div>
    </section>

    <section class="field-band field-workshop-section">
      <div class="field-section-heading">
        <div><p class="eyebrow">Inside The Workshop</p><h2>手、花版与一屋子的蓝</h2></div>
        <Images :size="30" aria-hidden="true" />
      </div>
      <div class="field-workshop-grid">
        <button v-for="(image, index) in workshopImages" :key="image.src" type="button" :class="`field-workshop-item field-workshop-item-${index + 1}`" @click="openImage(image)">
          <img :src="image.src" :alt="image.alt" loading="lazy" decoding="async" />
          <span><small>{{ image.note }}</small><strong>{{ image.caption }}</strong></span>
          <Expand :size="18" aria-hidden="true" />
        </button>
      </div>
    </section>

    <section class="field-band field-outreach-section">
      <div class="field-section-heading">
        <div><p class="eyebrow">Living Heritage In Public</p><h2>一门手艺，走向六种现场</h2></div>
        <MapPin :size="30" aria-hidden="true" />
      </div>
      <div class="field-outreach-list">
        <article v-for="(story, index) in outreachStories" :key="story.title">
          <button type="button" @click="openImage({ ...story, alt: story.title, caption: story.title })">
            <img :src="story.src" :alt="story.title" loading="lazy" decoding="async" />
            <Expand :size="18" aria-hidden="true" />
          </button>
          <div class="field-outreach-index">{{ String(index + 1).padStart(2, '0') }}</div>
          <div class="field-outreach-copy"><span>{{ story.kicker }}</span><h3>{{ story.title }}</h3><p>{{ story.text }}</p></div>
        </article>
      </div>
    </section>

    <section class="field-band field-creative-section">
      <div class="field-creative-copy">
        <p class="eyebrow">Contemporary Objects</p>
        <h2>纹样不只留在展板上</h2>
        <p>从包袋、扇面到服饰，蓝印花布在新的材料与使用场景中继续生长。传统不是被封存，而是被重新穿戴、携带和使用。</p>
        <button class="secondary-button" type="button" @click="emit('navigate', '/patternx')">进入纹脉工坊 <Sparkles :size="18" /></button>
      </div>
      <button v-for="image in creativeImages" :key="image.src" class="field-creative-image" type="button" @click="openImage(image)">
        <img :src="image.src" :alt="image.alt" loading="lazy" decoding="async" /><span>{{ image.caption }}</span>
      </button>
    </section>

    <section class="field-band field-process-section">
      <div class="field-section-heading"><div><p class="eyebrow">Craft Process</p><h2>从刻版到晾晒</h2></div></div>
      <ol class="field-process-line">
        <li v-for="(step, index) in craftSteps" :key="step.title"><span>{{ String(index + 1).padStart(2, '0') }}</span><strong>{{ step.title }}</strong><p>{{ step.short }}</p></li>
      </ol>
    </section>

    <section class="field-closing">
      <p class="eyebrow">KEEP THE BLUE MOVING</p><h2>看见现场，再去读懂一枚纹样</h2>
      <button class="primary-button" type="button" @click="emit('navigate', '/library')">进入蓝印纹库 <ArrowRight :size="18" /></button>
    </section>

    <Transition name="media-lightbox">
      <div v-if="selectedImage" class="field-lightbox" role="dialog" aria-modal="true" :aria-label="selectedImage.caption" @click.self="closeImage">
        <button type="button" aria-label="关闭大图" @click="closeImage"><X :size="24" /></button>
        <figure><img :src="selectedImage.src" :alt="selectedImage.alt || selectedImage.caption" /><figcaption>{{ selectedImage.caption }}</figcaption></figure>
      </div>
    </Transition>
  </section>
</template>
