<script setup lang="ts">
import useSettingsStore from '@/store/modules/settings.ts'
import useWatermarkStore from '@/store/modules/watermark.ts'
import dayjs from '@/utils/dayjs.ts'

definePage({
  meta: {
    title: 'pages.function.watermark',
  },
})
const settingsStore = useSettingsStore()
const watermarkStore = useWatermarkStore()
const enableWatermark = computed({
  get() {
    return settingsStore.settings.app.enableWatermark
  },
  set(value) {
    settingsStore.$patch((state) => {
      state.settings.app.enableWatermark = value
    })
  },
})
function updateWatermark() {
  watermarkStore.update({
    content: dayjs().format(`YYYY-MM-DD \n HH:mm:ss`),
  })
}
function resetWatermark() {
  watermarkStore.update()
}
</script>

<template>
  <KmPageLayout navbar navbar-start-side="back">
    <div class="flex flex-col items-center gap-4 p-4">
      <KmSwitch v-model="enableWatermark" />
      <KmButton v-show="enableWatermark" @click="updateWatermark">
        更新水印
      </KmButton>
      <KmButton v-show="enableWatermark" @click="resetWatermark">
        重置水印
      </KmButton>
    </div>
  </KmPageLayout>
</template>
