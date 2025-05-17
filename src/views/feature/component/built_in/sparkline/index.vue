<script setup lang="ts">
import Demo1 from './_demo1.vue'
import Demo1Code from './_demo1.vue?raw'

definePage({
  meta: {
    title: '迷你图',
  },
})
</script>

<template>
  <KmPageLayout navbar navbar-start-side="back">
    <KmCodePreview :code="Demo1Code">
      <Demo1 />
    </KmCodePreview>
  </KmPageLayout>
</template>
