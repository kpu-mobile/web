<script setup lang="ts">
import useSettingsStore from '@/store/modules/settings'
import { Locale } from 'vant'
import enUS from 'vant/es/locale/lang/en-US'
import zhCN from 'vant/es/locale/lang/zh-CN'
// 此处的对象属性和 src/locales/index.ts 中的 messages 对象属性一一对应
const locales: Record<string, any> = {
  'zh-cn': zhCN,
  'en-us': enUS,
}
const settingsStore = useSettingsStore()
watch(() => settingsStore.lang, () => {
  Locale.use(settingsStore.lang, locales[settingsStore.lang])
})
</script>

<template>
  <VanConfigProvider :theme="settingsStore.currentColorScheme" class="min-h-vh supports-[(min-height:100dvh)]:min-h-dvh">
    <slot />
  </VanConfigProvider>
</template>
