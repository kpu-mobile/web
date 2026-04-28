<script setup lang="ts">
definePage({
  meta: {
    title: 'pages.function.zoomable',
  },
})
</script>

<template>
  <KmPageLayout navbar navbar-start-side="back">
    <div class="p-4 flex flex-col gap-4">
      <KmPageMain>
        <img v-zoomable class="h-20 w-20 block" src="https://kpu-mobile.kpui.top/logo.png">
      </KmPageMain>
    </div>
  </KmPageLayout>
</template>
