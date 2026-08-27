<script setup>
defineProps({
  pattern: { type: Object, required: true },
})

defineEmits(['open', 'create'])
</script>

<template>
  <article class="pattern-card">
    <button class="pattern-card-main" type="button" @click="$emit('open', pattern)">
      <span
        class="pattern-thumb"
        :class="pattern.previewImage ? 'pattern-thumb-real' : pattern.patternClass"
        :style="pattern.previewImage ? { backgroundImage: `url(${pattern.previewImage})` } : undefined"
      ></span>
      <span class="tag">{{ pattern.categoryName }}</span>
      <strong>{{ pattern.name }}</strong>
      <em>{{ pattern.meaning }}</em>
    </button>
    <button class="pattern-card-create" type="button" @click="$emit('create', pattern)">用于 3D 创作</button>
  </article>
</template>
