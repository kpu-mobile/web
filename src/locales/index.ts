import type { App } from 'vue'
import useSettingsStore from '@/store/modules/settings.ts'
import messages from '@intlify/unplugin-vue-i18n/messages'
import { cloneDeep } from 'es-toolkit'
import { createI18n } from 'vue-i18n'

export const i18n = createI18n({
  flatJson: true,
  fallbackLocale: 'zh-cn',
  messages,
  missingWarn: false,
  fallbackWarn: false,

})

function setupI18n(app: App) {
  const settingsStore = useSettingsStore()
  // 注释报错
  // eslint-disable-next-line ts/ban-ts-comment
  // @ts-expect-error
  i18n.global.locale.value = settingsStore.lang
  app.use(i18n)
}
function getLocales() {
  return cloneDeep(messages)
}

const localesName: Record<string, any> = {}
for (const key in messages) {
  switch (key) {
    case 'zh-cn':
      localesName[key] = '中文'
      break
    case 'en-us':
      localesName[key] = 'English'
      break
  }
}
// 用于路由 meta.i18n 配置，方便在 VSCode I18n Ally 插件进行显示，无实际作用
function $t(key: string) {
  return key
}
export default {
  install: setupI18n,
}
export {
  $t,
  getLocales,
  localesName,
  setupI18n,
}
