<script setup lang="ts">
definePage({
  meta: {
    title: 'pages.function.zoomable',
  },
})
</script>

<template>
  <KmPageLayout navbar navbar-start-side="back">
    <div class="flex flex-col gap-4 p-4">
      <KmPageMain>
        <img v-zoomable class="block h-20 w-20" src="https://kpu-mobile.kpui.top/logo.png">
      </KmPageMain>
    </div>
  </KmPageLayout>
</template>
