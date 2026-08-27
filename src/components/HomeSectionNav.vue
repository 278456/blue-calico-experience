<script setup>
defineProps({
  sections: { type: Array, required: true },
  activeIndex: { type: Number, required: true },
})

defineEmits(['select'])
</script>

<template>
  <nav class="section-dot-nav" aria-label="首页模块导航">
    <button
      v-for="(section, index) in sections"
      :key="section.id"
      type="button"
      :class="{ active: activeIndex === index }"
      @click="$emit('select', index)"
    >
      <span></span>
      <em>{{ section.label }}</em>
    </button>
  </nav>
</template>
