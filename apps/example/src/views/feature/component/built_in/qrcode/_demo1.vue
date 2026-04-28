<script setup lang="ts">
import logo from '@/assets/images/logo.png'

const qrValue = ref('https://kpu-mobile.github.io')
</script>

<template>
  <div class="flex flex-col gap-6">
    <div class="flex flex-col gap-2 items-center">
      <span class="text-sm text-muted-foreground">基础二维码</span>
      <KmQrcode :value="qrValue" :size="150" />
    </div>

    <div class="flex flex-col gap-2 items-center">
      <span class="text-sm text-muted-foreground">带 Logo (网络图片)</span>
      <KmQrcode
        :value="qrValue"
        :size="150"
        logo="https://kpu-mobile.github.io/logo.png"
      />
    </div>

    <div class="flex flex-col gap-2 items-center">
      <span class="text-sm text-muted-foreground">带 Logo (本地图片)</span>
      <KmQrcode
        :value="qrValue"
        :size="150"
        :logo="logo"
      />
    </div>
  </div>
</template>
