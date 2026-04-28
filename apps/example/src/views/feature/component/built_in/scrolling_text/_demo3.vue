<script setup lang="ts">
const items = [
  '点击查看：Vue 3 最佳实践指南',
  '点击查看：TypeScript 进阶教程',
  '点击查看：Vite 构建优化技巧',
  '点击查看：Pinia 状态管理详解',
  'kpu mobile 最新功能介绍',
]

function handleClick(text: string, index: number) {
  kmToast.info(`点击了第 ${index + 1} 条：${text}`)
}
</script>

<template>
  <KmScrollingText
    :items="items"
    direction="down"
    :duration="2000"
    class="text-sm text-primary h-8 cursor-pointer"
    @item-click="handleClick"
  />
</template>
