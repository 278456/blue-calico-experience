<script setup>
defineEmits(['navigate'])
</script>

<template>
  <footer class="site-footer">
    <div>
      <strong>大临蓝印</strong>
      <p>一个关于大临村蓝印花布的数字展示平台，让非遗纹样被看见、被理解、被重新使用。</p>
    </div>
    <div>
      <span>快速链接</span>
      <button type="button" @click="$emit('navigate', '/library')">蓝印纹库</button>
      <button type="button" @click="$emit('navigate', '/heritage')">她与蓝</button>
      <button type="button" @click="$emit('navigate', '/find-blue')">寻找你的蓝</button>
    </div>
    <div>
      <span>非遗信息</span>
      <p>浙江嘉兴桐乡市大临村（石门镇） · 国家级非物质文化遗产</p>
      <small>© 2026 大临村蓝印花布数字展示平台</small>
    </div>
  </footer>
</template>
