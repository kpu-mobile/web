<script setup lang="ts">
definePage({
  meta: {
    title: '权限验证',
    auth: 'permission.browse',
  },
})
</script>

<template>
  <KmPageLayout navbar>
    <KmPageMain>
      你能看到这个页面，说明你有访问权限。
    </KmPageMain>
  </KmPageLayout>
</template>
