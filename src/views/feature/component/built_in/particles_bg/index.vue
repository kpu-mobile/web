<script setup lang="ts">
import Demo1 from './_demo1.vue'
import Demo1Code from './_demo1.vue?raw'
import Demo2 from './_demo2.vue'
import Demo2Code from './_demo2.vue?raw'
import Demo3 from './_demo3.vue'
import Demo3Code from './_demo3.vue?raw'

definePage({
  meta: {
    title: '粒子背景',
  },
})
</script>

<template>
  <KmPageLayout navbar navbar-start-side="back">
    <KmCodePreview
      :code="Demo1Code"
    >
      <template #default>
        <Demo1 />
      </template>
    </KmCodePreview>
    <KmCodePreview
      :code="Demo2Code"
    >
      <template #default>
        <Demo2 />
      </template>
    </KmCodePreview>
    <KmCodePreview
      :code="Demo3Code"
    >
      <template #default>
        <Demo3 />
      </template>
    </KmCodePreview>
  </KmPageLayout>
</template>
