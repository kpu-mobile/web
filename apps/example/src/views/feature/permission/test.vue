<script setup lang="ts">
definePage({
  meta: {
    title: '权限验证',
    auth: 'permission.browse',
  },
})
</script>

<template>
  <AppPageLayout navbar navbar-start-side="back">
    <KmPageMain>
      你能看到这个页面，说明你有访问权限。
    </KmPageMain>
  </AppPageLayout>
</template>
