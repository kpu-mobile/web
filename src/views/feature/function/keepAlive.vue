<script setup lang="ts">
defineOptions({
  name: 'FeatureStandardKeepAlive',
})

definePage({
  meta: {
    title: 'pages.function.keepAlive',
    cache: true,
  },
})

const value = ref(1)
</script>

<template>
  <KmPageLayout navbar navbar-start-side="back">
    <KmPageMain>
      <van-stepper v-model="value" />
    </KmPageMain>
  </KmPageLayout>
</template>
