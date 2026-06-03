<script setup lang="ts">
import Demo1 from './_demo1.vue'
import Demo1Code from './_demo1.vue?raw'
import Demo2 from './_demo2.vue'
import Demo2Code from './_demo2.vue?raw'
import Demo3 from './_demo3.vue'
import Demo3Code from './_demo3.vue?raw'

definePage({
  meta: {
    title: '提示',
  },
})
</script>

<template>
  <AppPageLayout navbar>
    <div>
      <KmCodePreview :code="Demo1Code">
        <Demo1 />
      </KmCodePreview>
      <KmCodePreview title="不同样式" :code="Demo2Code">
        <Demo2 />
      </KmCodePreview>
      <KmCodePreview title="自定义描述" :code="Demo3Code">
        <Demo3 />
      </KmCodePreview>
    </div>
  </AppPageLayout>
</template>
