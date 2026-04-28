<script setup lang="ts">
import dayjs from '@/utils/dayjs.ts'

definePage({
  meta: {
    title: 'pages.function.watermark',
  },
})
const appSettingsStore = useAppSettingsStore()
const appWatermarkStore = useAppWatermarkStore()
const enableWatermark = computed({
  get() {
    return appSettingsStore.settings.app.watermark
  },
  set(value) {
    appSettingsStore.$patch((state) => {
      state.settings.app.watermark = value
    })
  },
})
function updateWatermark() {
  appWatermarkStore.update({
    content: dayjs().format(`YYYY-MM-DD \n HH:mm:ss`),
  })
}
function resetWatermark() {
  appWatermarkStore.update()
}
</script>

<template>
  <AppPageLayout navbar navbar-start-side="back">
    <div class="p-4 flex flex-col gap-4 items-center">
      <KmSwitch v-model="enableWatermark" />
      <KmButton v-show="enableWatermark" @click="updateWatermark">
        更新水印
      </KmButton>
      <KmButton v-show="enableWatermark" @click="resetWatermark">
        重置水印
      </KmButton>
    </div>
  </AppPageLayout>
</template>
