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
    title: '数字动画',
  },
})
</script>

<template>
  <KmPageLayout navbar navbar-start-side="back">
    <KmCodePreview :code="Demo1Code">
      <Demo1 />
    </KmCodePreview>
    <KmCodePreview title="前缀/后缀" :code="Demo2Code">
      <Demo2 />
    </KmCodePreview>
    <KmCodePreview title="方向" :code="Demo3Code">
      <Demo3 />
    </KmCodePreview>
    <KmCodePreview title="格式化" :code="Demo4Code">
      <Demo4 />
    </KmCodePreview>
    <KmCodePreview title="时机" :code="Demo5Code">
      <Demo5 />
    </KmCodePreview>
    <KmCodePreview title="组" :code="Demo6Code">
      <Demo6 />
    </KmCodePreview>
  </KmPageLayout>
</template>
