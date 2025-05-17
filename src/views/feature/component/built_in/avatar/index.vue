<script setup lang="ts">
definePage({
  meta: {
    title: '头像',
  },
})
</script>

<template>
  <KmPageLayout navbar navbar-start-side="back">
    <KmPageMain>
      <div class="flex gap-4">
        <KmAvatar src="https://kpu-mobile.kpui.top/logo.png" />
        <KmAvatar src="https://kpu-mobile.kpui.top/logo.png" shape="square" />
        <KmAvatar src="" fallback="Hooray" />
      </div>
    </KmPageMain>
  </KmPageLayout>
</template>
