<script setup lang="ts">
definePage({
  meta: {
    title: 'pages.function.font',
  },
})
</script>

<template>
  <KmPageLayout navbar navbar-start-side="back">
    <div class="flex flex-col gap-4 p-4">
      <KmPageMain class="my-0">
        自定义字体需要下载字体文件，不建议在非英文环境中使用。以下为框架预设字体：
      </KmPageMain>
      <KmPageMain title="Digital 7" class="my-0">
        <p class="digital-7">
          kpu-mobile
        </p>
        <p class="digital-7">
          1234567890,.
        </p>
      </KmPageMain>
      <KmPageMain title="Digital 7（等宽）" class="my-0">
        <p class="digital-7_mono">
          kpu-mobile
        </p>
        <p class="digital-7_mono">
          1234567890,.
        </p>
      </KmPageMain>
    </div>
  </KmPageLayout>
</template>

<style scoped>
@import "@/assets/fonts/digital-7/stylesheet.css";
@import "@/assets/fonts/digital-7_mono/stylesheet.css";

.digital-7,
.digital-7_mono {
  margin: 10px 0;
  font-size: 36px;
}

.digital-7 {
  font-family: "digital-7regular";
}

.digital-7_mono {
  font-family: "digital-7_monomono";
}
</style>
