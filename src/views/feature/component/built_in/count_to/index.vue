<script setup lang="ts">
import Demo1 from './_demo1.vue'
import Demo1Code from './_demo1.vue?raw'
import Demo2 from './_demo2.vue'
import Demo2Code from './_demo2.vue?raw'
import Demo3 from './_demo3.vue'
import Demo3Code from './_demo3.vue?raw'
import Demo4 from './_demo4.vue'
import Demo4Code from './_demo4.vue?raw'
import Demo5 from './_demo5.vue'
import Demo5Code from './_demo5.vue?raw'

definePage({
  meta: {
    title: '计数到',
  },
})
</script>

<template>
  <KmPageLayout navbar navbar-start-side="back">
    <KmCodePreview :code="Demo1Code">
      <Demo1 />
    </KmCodePreview>
    <KmCodePreview title="持续10秒" :code="Demo2Code">
      <Demo2 />
    </KmCodePreview>
    <KmCodePreview title="保留2位小数" :code="Demo3Code">
      <Demo3 />
    </KmCodePreview>
    <KmCodePreview title="带前缀和后缀" :code="Demo4Code">
      <Demo4 />
    </KmCodePreview>
    <KmCodePreview title="手动控制" :code="Demo5Code">
      <Demo5 />
    </KmCodePreview>
  </KmPageLayout>
</template>
