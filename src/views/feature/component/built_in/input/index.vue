<script setup lang="ts">
definePage({
  meta: {
    title: '输入框',
  },
})

const value = ref('')
</script>

<template>
  <KmPageLayout navbar navbar-start-side="back">
    <KmPageMain>
      <KmInput v-model="value" placeholder="请输入内容" />
    </KmPageMain>
  </KmPageLayout>
</template>
