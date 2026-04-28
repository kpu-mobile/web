<script setup lang="ts">
const sizeValue = ref([200])
const qrValue = ref('https://kpu-mobile.kpui.top')

const size = computed(() => sizeValue.value[0])
</script>

<template>
  <div class="space-y-2">
    <div class="flex gap-4 items-center">
      <KmSlider v-model="sizeValue" :min="100" :max="400" :step="100" class="w-48" />
      <span class="text-sm text-muted-foreground w-16">{{ size }}px</span>
    </div>
    <KmQrcode
      :value="qrValue"
      :size="size"
    />
  </div>
</template>
