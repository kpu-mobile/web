<script setup lang="ts">
defineOptions({
  name: 'FeatureStandardKeepAlive',
})

definePage({
  meta: {
    title: 'pages.function.keepAlive',
    keepAlive: true,
  },
})

const value = ref(1)
</script>

<template>
  <AppPageLayout navbar navbar-start-side="back">
    <KmPageMain>
      <van-stepper v-model="value" />
    </KmPageMain>
  </AppPageLayout>
</template>
