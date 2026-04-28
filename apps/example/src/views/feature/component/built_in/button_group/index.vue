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
    title: '按钮组',
  },
})
</script>

<template>
  <AppPageLayout navbar navbar-start-side="back">
    <KmCodePreview :code="Demo1Code">
      <Demo1 />
    </KmCodePreview>
    <KmCodePreview title="垂直" :code="Demo2Code">
      <Demo2 />
    </KmCodePreview>
    <KmCodePreview title="分割线" :code="Demo3Code">
      <Demo3 />
    </KmCodePreview>
    <KmCodePreview title="嵌套" :code="Demo4Code">
      <Demo4 />
    </KmCodePreview>
    <KmCodePreview title="与其他组件组合" :code="Demo5Code">
      <Demo5 />
    </KmCodePreview>
  </AppPageLayout>
</template>
