<script setup lang="ts">
const value1 = ref(0)
const value2 = ref(0)

setInterval(() => {
  value1.value += Math.floor(Math.random() * 1000) * (Math.random() > 0.5 ? 1 : -1)
  value2.value += Math.random() * (Math.random() > 0.5 ? 1 : -1)
}, 2000)
</script>

<template>
  <div class="flex-center-start gap-2">
    <KmAnimatedCountToGroup>
      <KmAnimatedCountTo :value="value1" locales="zh-CN" :format="{ style: 'currency', currency: 'CNY' }" will-change class="text-4xl font-bold" />
      <KmAnimatedCountTo :value="value2" locales="zh-CN" :format="{ style: 'percent', maximumFractionDigits: 2, signDisplay: 'always' }" will-change class="text-2xl text-green-500 font-bold" :class="{ 'text-red-500': value2 < 0 }" />
    </KmAnimatedCountToGroup>
  </div>
</template>
