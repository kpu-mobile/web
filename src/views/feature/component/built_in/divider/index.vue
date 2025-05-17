<script setup lang="ts">
definePage({
  meta: {
    title: '分割线',
  },
})
</script>

<template>
  <KmPageLayout navbar navbar-start-side="back">
    <KmPageMain>
      <KmDivider>center</KmDivider>
      <KmDivider position="start">
        left
      </KmDivider>
      <KmDivider position="end">
        right
      </KmDivider>
    </KmPageMain>
  </KmPageLayout>
</template>
