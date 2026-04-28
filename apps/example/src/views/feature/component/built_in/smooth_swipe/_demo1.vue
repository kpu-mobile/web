<script setup lang="ts">
const activeIndex = ref<number>(0)
</script>

<template>
  <KmButtonGroup>
    <KmButton v-for="index in 4" :key="index" :variant="activeIndex === index - 1 ? 'default' : 'outline'" @click="activeIndex = index - 1">
      {{ index }}
    </KmButton>
  </KmButtonGroup>
  <KmSmoothSwipe :active-index>
    <div class="text-20 flex-center h-50">
      1
    </div>
    <div class="text-20 flex-center h-75">
      2
    </div>
    <div class="text-20 flex-center h-100">
      3
    </div>
    <div class="text-20 flex-center h-25">
      4
    </div>
  </KmSmoothSwipe>
</template>
