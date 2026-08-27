<script setup>
import { ref } from 'vue'
import { Menu, Search, X } from 'lucide-vue-next'
import { navItems } from '../data'

defineProps({
  routeName: { type: String, required: true },
  routePath: { type: String, required: true },
})

const emit = defineEmits(['navigate'])
const mobileOpen = ref(false)

function go(path) {
  mobileOpen.value = false
  emit('navigate', path)
}
</script>

<template>
  <header class="site-header">
    <button class="brand" type="button" @click="go('/')">
      <img class="brand-logo" src="/assets/logo.jpg" alt="大临蓝印 logo" />
      <strong>大临蓝印</strong>
    </button>

    <nav :class="{ open: mobileOpen }">
      <button
        v-for="item in navItems"
        :key="item.path"
        type="button"
        :class="{
          active:
            routePath === item.path ||
            (item.path === '/library' && routeName === 'pattern') ||
            (item.path === '/find-blue' && routePath.startsWith('/find-blue')),
        }"
        @click="go(item.path)"
      >
        {{ item.label }}
      </button>
    </nav>

    <div class="header-actions">
      <button class="icon-button" type="button" aria-label="搜索" @click="go('/library')">
        <Search :size="19" />
      </button>
      <button class="icon-button menu-button" type="button" aria-label="菜单" @click="mobileOpen = !mobileOpen">
        <Menu v-if="!mobileOpen" :size="20" />
        <X v-else :size="20" />
      </button>
    </div>
  </header>
</template>
