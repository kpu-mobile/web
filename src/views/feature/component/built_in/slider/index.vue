<script setup lang="ts">
import Demo1 from './_demo1.vue'
import Demo1Code from './_demo1.vue?raw'
import Demo2 from './_demo2.vue'
import Demo2Code from './_demo2.vue?raw'

definePage({
  meta: {
    title: '滑块',
  },
})
</script>

<template>
  <KmPageLayout navbar navbar-start-side="back">
    <KmCodePreview :code="Demo1Code">
      <Demo1 />
    </KmCodePreview>
    <KmCodePreview :code="Demo2Code">
      <Demo2 />
    </KmCodePreview>
  </KmPageLayout>
</template>
