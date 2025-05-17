<script setup lang="ts">
definePage({
  meta: {
    title: '滑块',
  },
})

const value = ref<number[]>([0])
</script>

<template>
  <KmPageLayout navbar navbar-start-side="back">
    <div>
      <KmPageMain>
        <KmSlider v-model="value" />
      </KmPageMain>
      <KmPageMain>
        <KmSlider v-model="value" orientation="vertical" class="data-[orientation=vertical]:h-50" />
      </KmPageMain>
    </div>
  </KmPageLayout>
</template>
