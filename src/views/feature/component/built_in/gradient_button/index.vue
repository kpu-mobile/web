<script setup lang="ts">
import Demo1 from './_demo1.vue'
import Demo1Code from './_demo1.vue?raw'

definePage({
  meta: {
    title: '渐变按钮',
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
    </KmPageLayout>
  </div>
</template>
