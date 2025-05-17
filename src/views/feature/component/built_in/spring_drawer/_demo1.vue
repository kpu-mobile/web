<script setup lang="ts">
const drawer = ref(false)
// TODO 未实现
</script>

<template>
  <KmButton @click="drawer = true">
    打开
  </KmButton>
  <KmSpringDrawer v-model="drawer" title="标题">
    这里是弹簧抽屉内容
  </KmSpringDrawer>
</template>
