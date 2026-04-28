<script setup lang="ts">
import Demo1 from './_demo1.vue'
import Demo1Code from './_demo1.vue?raw'
import Demo2 from './_demo2.vue'
import Demo2Code from './_demo2.vue?raw'

definePage({
  meta: {
    title: '模糊显示',
  },
})
</script>

<template>
  <div>
    <KmPageLayout navbar navbar-start-side="back">
      <KmCodePreview
        :code="Demo1Code"
      >
        <template #default>
          <Demo1 />
        </template>
      </KmCodePreview>
      <KmCodePreview
        title="延迟、持续时间、模糊、偏移量"
        :code="Demo2Code"
      >
        <template #default>
          <Demo2 />
        </template>
      </KmCodePreview>
    </KmPageLayout>
  </div>
</template>
