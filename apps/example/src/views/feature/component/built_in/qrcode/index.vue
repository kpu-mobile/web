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
import Demo6 from './_demo6.vue'
import Demo6Code from './_demo6.vue?raw'

definePage({
  meta: {
    title: '二维码',
  },
})
</script>

<template>
  <AppPageLayout navbar navbar-start-side="back">
    <KmCodePreview :code="Demo1Code">
      <Demo1 />
    </KmCodePreview>
    <KmCodePreview title="交互式操作" :code="Demo2Code">
      <Demo2 />
    </KmCodePreview>
    <KmCodePreview title="纠错等级" :code="Demo3Code">
      <Demo3 />
    </KmCodePreview>
    <KmCodePreview title="尺寸设置" :code="Demo4Code">
      <Demo4 />
    </KmCodePreview>
    <KmCodePreview title="颜色定制" :code="Demo5Code">
      <Demo5 />
    </KmCodePreview>
    <KmCodePreview title="状态展示" :code="Demo6Code">
      <Demo6 />
    </KmCodePreview>
  </AppPageLayout>
</template>
