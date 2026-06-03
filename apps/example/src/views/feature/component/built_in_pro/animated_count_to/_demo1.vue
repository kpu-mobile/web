<script setup lang="ts">
const value = ref(0)

setInterval(() => {
  value.value += Math.floor(Math.random() * 1000) * (Math.random() > 0.5 ? 1 : -1)
}, 2000)
</script>

<template>
  <KmAnimatedCountTo :value will-change class="text-4xl font-bold" />
</template>
