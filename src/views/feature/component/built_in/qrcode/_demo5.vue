<script setup lang="ts">
const qrValue = ref('https://kpu-mobile.kpui.top')
</script>

<template>
  <div class="flex flex-wrap gap-6">
    <div class="flex flex-col gap-2 items-center">
      <span class="text-sm text-muted-foreground">经典黑白</span>
      <KmQrcode
        :value="qrValue"
        :size="120"
        foreground-color="#000000"
        background-color="#ffffff"
      />
    </div>

    <div class="flex flex-col gap-2 items-center">
      <span class="text-sm text-muted-foreground">品牌绿色</span>
      <KmQrcode
        :value="qrValue"
        :size="120"
        foreground-color="#059669"
        background-color="#f0fdf4"
      />
    </div>

    <div class="flex flex-col gap-2 items-center">
      <span class="text-sm text-muted-foreground">科技蓝</span>
      <KmQrcode
        :value="qrValue"
        :size="120"
        foreground-color="#2563eb"
        background-color="#eff6ff"
      />
    </div>

    <div class="flex flex-col gap-2 items-center">
      <span class="text-sm text-muted-foreground">活力橙</span>
      <KmQrcode
        :value="qrValue"
        :size="120"
        foreground-color="#ea580c"
        background-color="#fff7ed"
      />
    </div>

    <div class="flex flex-col gap-2 items-center">
      <span class="text-sm text-muted-foreground">暗色模式</span>
      <KmQrcode
        :value="qrValue"
        :size="120"
        foreground-color="#e5e5e5"
        background-color="#171717"
      />
    </div>
  </div>
</template>
