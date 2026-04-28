<script setup lang="ts">
const status = ref<'loading' | 'success' | 'expired' | 'error'>('loading')
const qrValue = ref('https://kpu-mobile.github.io')

const statuses = [
  { label: '加载中', value: 'loading' as const },
  { label: '已扫描', value: 'success' as const },
  { label: '已过期', value: 'expired' as const },
  { label: '错误', value: 'error' as const },
]

function setStatus(s: typeof status.value) {
  status.value = s
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <KmButtonGroup>
      <KmButton
        v-for="item in statuses"
        :key="item.value"
        :variant="status === item.value ? 'default' : 'outline'"
        @click="setStatus(item.value)"
      >
        {{ item.label }}
      </KmButton>
    </KmButtonGroup>
    <KmQrcode :value="qrValue" :size="200" :status="status">
      <template #statusRender="{ status: s }">
        <template v-if="s === 'success'">
          <div class="text-success flex flex-col gap-1 items-center">
            <KmIcon name="i-mdi:check-circle" class="size-6" />
            <span class="text-xs">已扫描</span>
          </div>
        </template>
        <template v-else-if="s === 'expired'">
          <div class="text-muted-foreground flex flex-col gap-1 items-center">
            <KmIcon name="i-mdi:clock-alert" class="size-6" />
            <span class="text-xs">二维码已过期</span>
          </div>
        </template>
        <template v-else-if="s === 'error'">
          <div class="text-destructive flex flex-col gap-1 items-center">
            <KmIcon name="i-mdi:alert-circle" class="size-6" />
            <span class="text-xs">加载失败</span>
          </div>
        </template>
      </template>
    </KmQrcode>
  </div>
</template>
