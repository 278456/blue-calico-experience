<script setup>
import { ArrowRight, BookOpen, Camera, HandHeart, Layers3, MapPin, Route, Sparkles, UsersRound } from 'lucide-vue-next'
import { craftSteps } from '../data'

const emit = defineEmits(['navigate'])

const heroImage = '/assets/heritage/dalin-workshop.png'
const storyImages = [
  { src: '/assets/heritage/artisan-at-work.jpeg', alt: '传承人在花版上进行刮浆工序', caption: '手上的工艺：刮浆与花版' },
  { src: '/assets/heritage/artisan-portrait.png', alt: '蓝印花布传承人与工坊布样', caption: '工坊里的传承人和布样' },
  { src: '/assets/heritage/dalin-workshop.png', alt: '大临村蓝印花布工坊外景', caption: '大临村工坊与晾晒布样' },
  { src: '/assets/heritage/archive-pattern-table.png', alt: '桌面上的蓝印花布样品', caption: '一桌蓝白：纹样与日用布品' },
  { src: '/assets/heritage/archive-table-runner.png', alt: '蓝印花布桌旗', caption: '传统纹样进入当代日用' },
  { src: '/assets/heritage/archive-craft-store.png', alt: '游客挑选蓝印花布文创', caption: '在工坊挑选一片属于自己的蓝' },
  { src: '/assets/heritage/archive-visitor-demo.png', alt: '游客观看蓝印花布体验演示', caption: '围在工作台前看见手艺' },
  { src: '/assets/heritage/archive-cultural-products.png', alt: '蓝印花布文创产品与花版', caption: '从花版到可带走的日常物件' },
  { src: '/assets/heritage/archive-tote-bag.png', alt: '蓝印花布帆布袋', caption: '把蓝白纹样带进生活' },
  { src: '/assets/heritage/archive-apparel.png', alt: '蓝印花布服装与围裙', caption: '蓝印花布的新衣与新用法' },
  { src: '/assets/heritage/archive-drying.png', alt: '晾晒中的蓝印花布', caption: '阳光下定格的靛蓝与素白' },
  { src: '/assets/heritage/archive-family-workshop.png', alt: '儿童参与蓝印花布体验', caption: '亲子体验：让手艺被下一代看见' },
  { src: '/assets/heritage/archive-drying-tour.png', alt: '游客参观蓝印花布晾晒场景', caption: '走进布样之间，听见村庄的故事' },
]

const visitorFocus = [
  { value: '01', label: '先看人', text: '从传承人的手、工具和故事进入蓝印花布。' },
  { value: '02', label: '再看工艺', text: '理解刻版、防染、入靛、刮白这些关键步骤。' },
  { value: '03', label: '最后看纹样', text: '把花草、瑞兽、吉祥符号和江南生活联系起来。' },
]

const storyBlocks = [
  {
    icon: HandHeart,
    title: '匠人 / 传承故事',
    text: '大临村的蓝印花布先存在于人的手上。老一辈把纹样、浆料比例、入靛火候和晾晒经验留在日复一日的制作里，年轻人则用展览、文创和数字方式让它继续被看见。',
  },
  {
    icon: Layers3,
    title: '制作过程',
    text: '一块布从画稿到成品，需要经过刻版、刮浆、染色、刮白、清洗、晾晒。每一步都不只是技术，也是一种和时间相处的方式。',
  },
  {
    icon: Camera,
    title: '相关图片资料',
    text: '图片资料记录布样、工具、纹样细节和村落现场。游客可以通过这些图像，把展柜里的蓝白纹样重新放回真实生活。',
  },
  {
    icon: BookOpen,
    title: '文化价值',
    text: '蓝印花布连接江南日用审美、礼俗祝福、女性手工经验和地方记忆。它既是一匹布，也是一座村庄可以向外讲述的文化名片。',
  },
]

const visitPath = [
  { icon: MapPin, title: '来到大临村', text: '先认识蓝印花布与村落之间的关系，知道这门手艺为什么在这里生长。' },
  { icon: UsersRound, title: '听见传承人', text: '从口述故事里理解手艺人的坚持、家庭记忆和代际传承。' },
  { icon: Route, title: '走完工艺线', text: '按制作顺序观看工序，把“蓝”和“白”如何出现看明白。' },
  { icon: Sparkles, title: '带走一片蓝', text: '在纹样库、互动卡片或文创体验中，选择一个属于自己的蓝印记忆。' },
]
</script>

<template>
  <section class="heritage-page section top-section">
    <div class="heritage-hero heritage-visitor-hero">
      <div class="page-heading heritage-visitor-copy">
        <p class="eyebrow">People Story Of Dalin Blue Calico</p>
        <h1>她与蓝</h1>
        <p>给来到大临村的游客看的传承故事：看见做布的人，理解靛蓝的工艺，也把一段江南记忆带回去。</p>
        <div class="heritage-hero-actions">
          <button class="primary-button" type="button" @click="emit('navigate', '/library')">
            去看纹样
            <ArrowRight :size="18" />
          </button>
          <button class="secondary-button" type="button" @click="emit('navigate', '/find-blue')">
            寻找你的蓝
          </button>
        </div>
      </div>
      <div class="heritage-hero-image heritage-visitor-image">
        <img :src="heroImage" alt="大临村蓝印花布现场资料" />
        <span>大临村蓝印花布 · 人物与工艺故事</span>
      </div>
    </div>

    <div class="heritage-visitor-focus">
      <article v-for="item in visitorFocus" :key="item.value">
        <strong>{{ item.value }}</strong>
        <span>{{ item.label }}</span>
        <p>{{ item.text }}</p>
      </article>
    </div>

    <section class="heritage-section">
      <div class="section-title-row">
        <div>
          <p class="eyebrow">For Visitors</p>
          <h2>这页想带游客看什么</h2>
        </div>
      </div>
      <div class="heritage-story-grid">
        <article v-for="block in storyBlocks" :key="block.title">
          <component :is="block.icon" :size="24" />
          <h2>{{ block.title }}</h2>
          <p>{{ block.text }}</p>
        </article>
      </div>
    </section>

    <section class="heritage-section heritage-visit-section">
      <div class="section-title-row">
        <div>
          <p class="eyebrow">Village Visit Path</p>
          <h2>游客在村里的一条观看路径</h2>
        </div>
      </div>
      <div class="heritage-visit-path">
        <article v-for="(item, index) in visitPath" :key="item.title">
          <span>{{ String(index + 1).padStart(2, '0') }}</span>
          <component :is="item.icon" :size="24" />
          <strong>{{ item.title }}</strong>
          <p>{{ item.text }}</p>
        </article>
      </div>
    </section>

    <section class="heritage-section">
      <div class="section-title-row">
        <div>
          <p class="eyebrow">Craft Process</p>
          <h2>一块布经过的路</h2>
        </div>
      </div>
      <div class="heritage-process">
        <article v-for="(step, index) in craftSteps" :key="step.title">
          <span>{{ String(index + 1).padStart(2, '0') }}</span>
          <strong>{{ step.title }}</strong>
          <p>{{ step.text }}</p>
        </article>
      </div>
    </section>

    <section class="heritage-section">
      <div class="section-title-row">
        <div>
          <p class="eyebrow">Image Archive</p>
          <h2>相关图片资料</h2>
        </div>
      </div>
      <div class="heritage-gallery">
        <figure v-for="image in storyImages" :key="image.src">
          <img :src="image.src" :alt="image.alt" loading="lazy" decoding="async" />
          <figcaption>{{ image.caption }}</figcaption>
        </figure>
      </div>
    </section>

    <section class="heritage-value">
      <p class="eyebrow">Cultural Value</p>
      <h2>让游客带走的不只是照片</h2>
      <p>大临村蓝印花布的价值，不只在“好看”，也在它把地方、家庭、祝福和手艺连接起来。游客看完这一页，应该能记住：蓝印花布是一种生活里的美，也是一代代人共同守住的村庄记忆。</p>
    </section>
  </section>
</template>
