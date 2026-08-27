<script setup>
import { computed, defineAsyncComponent, ref } from 'vue'
import SiteFooter from './components/SiteFooter.vue'
import SiteHeader from './components/SiteHeader.vue'
import { useRouterState } from './composables/useRouterState'
import { patterns } from './data'
import FindBlueCardPage from './pages/FindBlueCardPage.vue'
import FindBlueGamePage from './pages/FindBlueGamePage.vue'
import FindBluePage from './pages/FindBluePage.vue'
import HeritagePage from './pages/HeritagePage.vue'
import HomePage from './pages/HomePage.vue'
import LibraryPage from './pages/LibraryPage.vue'
import PatternDetailPage from './pages/PatternDetailPage.vue'

const PatternXPage = defineAsyncComponent(() => import('./pages/PatternXPage.vue'))

const { routeName, routePath, navigate } = useRouterState()
const libraryInitialCategory = ref('all')

const currentPatternId = computed(() => decodeURIComponent(routePath.value.replace('/pattern/', '')))
const currentPatternExists = computed(() => patterns.some((pattern) => pattern.id === currentPatternId.value))

function openPattern(pattern) {
  navigate(`/pattern/${pattern.id}`)
}

function selectCategory(categoryKey) {
  libraryInitialCategory.value = categoryKey
}

function createWithPattern(pattern) {
  navigate(`/patternx?pattern=${encodeURIComponent(pattern.id)}&view=studio`)
}
</script>

<template>
  <div class="app-shell">
    <SiteHeader
      v-if="routeName !== 'find-game' && routeName !== 'find-card'"
      :route-name="routeName"
      :route-path="routePath"
      @navigate="navigate"
    />

    <Transition name="page" mode="out-in">
      <main :key="routeName + routePath" class="page" :class="{ 'page-find-menu': routeName === 'find-menu' }">
        <HomePage
          v-if="routeName === 'home'"
          @navigate="navigate"
          @open-pattern="openPattern"
          @select-category="selectCategory"
          @create-pattern="createWithPattern"
        />
        <LibraryPage
          v-else-if="routeName === 'library'"
          :initial-category="libraryInitialCategory"
          @open-pattern="openPattern"
          @create-pattern="createWithPattern"
        />
        <PatternDetailPage
          v-else-if="routeName === 'pattern' && currentPatternExists"
          :pattern-id="currentPatternId"
          @navigate="navigate"
          @open-pattern="openPattern"
          @create-pattern="createWithPattern"
        />
        <HeritagePage v-else-if="routeName === 'heritage'" @navigate="navigate" />
        <FindBluePage v-else-if="routeName === 'find-menu'" @navigate="navigate" />
        <FindBlueCardPage v-else-if="routeName === 'find-card'" @navigate="navigate" />
        <FindBlueGamePage v-else-if="routeName === 'find-game'" @navigate="navigate" />
        <PatternXPage v-else-if="routeName === 'patternx'" @navigate="navigate" @select-category="selectCategory" />
        <HomePage v-else @navigate="navigate" @open-pattern="openPattern" @select-category="selectCategory" @create-pattern="createWithPattern" />
      </main>
    </Transition>

    <SiteFooter v-if="routeName !== 'home' && routeName !== 'find-menu' && routeName !== 'find-card' && routeName !== 'patternx'" @navigate="navigate" />
  </div>
</template>
