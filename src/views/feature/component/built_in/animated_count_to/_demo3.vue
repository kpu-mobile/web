<script setup lang="ts">
const value = ref(0)

setInterval(() => {
  value.value += Math.floor(Math.random() * 1000) * (Math.random() > 0.5 ? 1 : -1)
}, 2000)
</script>

<template>
  <div class="flex flex-col gap-2">
    <KmAnimatedCountTo :value :trend="1" will-change class="text-4xl font-bold" />
    <KmAnimatedCountTo :value :trend="0" will-change class="text-4xl font-bold" />
    <KmAnimatedCountTo :value :trend="-1" will-change class="text-4xl font-bold" />
  </div>
</template>
