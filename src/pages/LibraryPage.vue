<script setup>
import { computed, ref, watch } from 'vue'
import { BookOpen, Search } from 'lucide-vue-next'
import MaterialGallery from '../components/MaterialGallery.vue'
import PatternCard from '../components/PatternCard.vue'
import { patternCategories, patterns } from '../data'
import { collectedMaterials } from '../data/materials'

const props = defineProps({
  initialCategory: { type: String, default: 'all' },
})

defineEmits(['open-pattern', 'create-pattern'])

const activeCategory = ref(props.initialCategory)
const searchText = ref('')
const visibleCount = ref(8)

const categoryOptions = computed(() => [{ key: 'all', name: '全部' }, ...patternCategories])

const filteredPatterns = computed(() => {
  const keyword = searchText.value.trim()
  return patterns.filter((pattern) => {
    const inCategory = activeCategory.value === 'all' || pattern.category === activeCategory.value
    const text = `${pattern.name}${pattern.categoryName}${pattern.meaning}${pattern.meaningDetail}${pattern.tags.join('')}`
    return inCategory && (!keyword || text.includes(keyword))
  })
})

const visiblePatterns = computed(() => filteredPatterns.value.slice(0, visibleCount.value))

watch(
  () => props.initialCategory,
  (category) => {
    activeCategory.value = category
  },
)

watch([activeCategory, searchText], () => {
  visibleCount.value = 8
})
</script>

<template>
  <section class="library-page section top-section">
    <div class="page-heading">
      <p class="eyebrow">Pattern Archive</p>
      <h1>蓝印纹库</h1>
      <p>已整理 {{ patterns.length }} 个有语义说明的示范纹样，并接入 {{ collectedMaterials.length }} 张本地采集素材。</p>
    </div>

    <div class="library-tools">
      <label class="search-field">
        <Search :size="18" />
        <input v-model="searchText" type="search" placeholder="搜索纹样名称、寓意、标签" />
      </label>
      <div class="filter-tabs">
        <button v-for="category in categoryOptions" :key="category.key" type="button" :class="{ active: activeCategory === category.key }" @click="activeCategory = category.key">
          {{ category.name }}
        </button>
      </div>
    </div>

    <div v-if="visiblePatterns.length" class="library-grid">
      <PatternCard v-for="pattern in visiblePatterns" :key="pattern.id" :pattern="pattern" @open="$emit('open-pattern', pattern)" @create="$emit('create-pattern', pattern)" />
    </div>
    <div v-else class="empty-state">
      <BookOpen :size="34" />
      <h2>未找到相关纹样</h2>
      <p>试试“莲花”“平安”“富贵”这样的关键词。</p>
    </div>

    <button v-if="visibleCount < filteredPatterns.length" class="secondary-button load-more" type="button" @click="visibleCount += 8">
      加载更多
    </button>

    <MaterialGallery />
  </section>
</template>
