<script setup lang="ts">
const qrcodeRef = useTemplateRef('qrcodeRef')

const qrValue = ref('https://kpu-mobile.kpui.top')
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex gap-4 items-center">
      <KmInput v-model="qrValue" placeholder="输入二维码内容" class="w-64" />
      <KmButton variant="secondary" @click="qrcodeRef?.download('my-qrcode.png')">
        下载
      </KmButton>
    </div>
    <KmQrcode
      ref="qrcodeRef"
      :value="qrValue"
      :size="200"
    />
  </div>
</template>
