<script setup lang="ts">
const show = ref(true)

function handleReset() {
  show.value = false
  nextTick(() => {
    show.value = true
  })
}
</script>

<template>
  <KmBlurReveal
    v-if="show"
    class="p-4"
  >
    <h2 class="text-6xl tracking-tighter font-bold">
      你好呀 👋
    </h2>
    <div class="text-2xl tracking-tighter mt-4 text-pretty">
      最近怎么样？
    </div>
  </KmBlurReveal>
  <KmButton @click="handleReset">
    重新执行
  </KmButton>
</template>
