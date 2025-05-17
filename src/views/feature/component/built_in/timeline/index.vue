<script setup lang="ts">
import Demo1 from './_demo1.vue'
import Demo1Code from './_demo1.vue?raw'
import Demo2 from './_demo2.vue'
import Demo2Code from './_demo2.vue?raw'
import Demo3 from './_demo3.vue'
import Demo3Code from './_demo3.vue?raw'

definePage({
  meta: {
    title: '时间线',
  },
})
</script>

<template>
  <KmPageLayout navbar navbar-start-side="back">
    <KmCodePreview :code="Demo1Code">
      <Demo1 />
    </KmCodePreview>
    <KmCodePreview title="合并时间线" :code="Demo2Code">
      <Demo2 />
    </KmCodePreview>
    <KmCodePreview title="设置高度并出现滚动条" :code="Demo3Code">
      <Demo3 />
    </KmCodePreview>
  </KmPageLayout>
</template>
