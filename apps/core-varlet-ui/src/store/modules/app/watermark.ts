import type { WatermarkOptions } from 'watermark-js-plus'
import { Watermark } from 'watermark-js-plus'

export const useAppWatermarkStore = defineStore(
  // 唯一ID
  'appWatermark',
  () => {
    const appSettingsStore = useAppSettingsStore()
    const appAuthStore = useAppAuthStore()

    const customSettings = ref<Partial<WatermarkOptions>>()
    const settings = computed({
      get() {
        const options: Partial<WatermarkOptions> = {
          contentType: 'multi-line-text',
          content: `Kpu-mobile\n当前用户：${appAuthStore.account}`,
          fontColor: appSettingsStore.currentColorScheme === 'light' ? '#000' : '#fff',
          globalAlpha: 0.2,
          width: 200,
          height: 200,
          ...customSettings.value,
        }
        return options
      },
      set(val) {
        update(val)
      },
    })

    const watermark = new Watermark(settings.value)
    watch(settings, async () => {
      if (appSettingsStore.settings.app.watermark) {
        await watermark.check()
        watermark.changeOptions(settings.value)
      }
    }, {
      deep: true,
    })
    watch(() => appSettingsStore.settings.app.watermark, (val) => {
      if (val) {
        watermark.create()
      }
      else {
        watermark.destroy()
      }
    }, {
      immediate: true,
    })

    watch(() => appSettingsStore.settings.theme.colorScheme, async () => {
      if (appSettingsStore.settings.app.watermark) {
        await watermark.check()
        await nextTick()

        watermark.changeOptions(settings.value)
      }
    })

    // 更新水印设置
    function update(config: Partial<WatermarkOptions> = {}) {
      customSettings.value = config
    }

    return {
      update,
    }
  },
)
