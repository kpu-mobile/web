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
    title: '跑马灯',
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
      title="反向"
      :code="Demo2Code"
    >
      <template #default>
        <Demo2 />
      </template>
    </KmCodePreview>
    <KmCodePreview
      title="悬停暂停"
      :code="Demo3Code"
    >
      <template #default>
        <Demo3 />
      </template>
    </KmCodePreview>
    <KmCodePreview
      title="速度、间隔"
      :code="Demo4Code"
    >
      <template #default>
        <Demo4 />
      </template>
    </KmCodePreview>
    <KmCodePreview
      title="垂直"
      :code="Demo5Code"
    >
      <template #default>
        <Demo5 />
      </template>
    </KmCodePreview>
  </KmPageLayout>
</template>
