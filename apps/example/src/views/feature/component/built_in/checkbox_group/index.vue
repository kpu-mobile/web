<script setup lang="ts">
import Demo1 from './_demo1.vue'
import Demo1Code from './_demo1.vue?raw'
import Demo2 from './_demo2.vue'
import Demo2Code from './_demo2.vue?raw'
import Demo3 from './_demo3.vue'
import Demo3Code from './_demo3.vue?raw'
import Demo4 from './_demo4.vue'
import Demo4Code from './_demo4.vue?raw'

definePage({
  meta: {
    title: '复选框组',
  },
})
</script>

<template>
  <AppPageLayout navbar>
    <div>
      <KmCodePreview :code="Demo1Code">
        <Demo1 />
      </KmCodePreview>
      <KmCodePreview title="带描述和禁用态" :code="Demo2Code">
        <Demo2 />
      </KmCodePreview>
      <KmCodePreview title="自定义选项内容" :code="Demo3Code">
        <Demo3 />
      </KmCodePreview>
      <KmCodePreview title="最少 / 最多选择" :code="Demo4Code">
        <Demo4 />
      </KmCodePreview>
    </div>
  </AppPageLayout>
</template>
