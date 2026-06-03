<script setup lang="ts">
const errorCorrectionLevel = ref<'L' | 'M' | 'Q' | 'H'>('M')
const qrValue = ref('https://kpu-mobile.github.io')

const levels = [
  { label: 'L', value: 'L' as const, desc: '7%' },
  { label: 'M', value: 'M' as const, desc: '15%' },
  { label: 'Q', value: 'Q' as const, desc: '25%' },
  { label: 'H', value: 'H' as const, desc: '30%' },
]
</script>

<template>
  <div class="space-y-2">
    <KmButtonGroup>
      <KmButton
        v-for="item in levels"
        :key="item.value"
        :variant="errorCorrectionLevel === item.value ? 'default' : 'outline'"
        @click="errorCorrectionLevel = item.value"
      >
        {{ item.label }}
      </KmButton>
    </KmButtonGroup>
    <KmQrcode
      :value="qrValue"
      :size="150"
      :error-correction-level="errorCorrectionLevel"
    />
  </div>
</template>
