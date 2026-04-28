import type { ThemeSettings } from '@kpu-mobile/settings'
import type { RouteLocationNormalized } from 'vue-router'
import { getLocales, localesName } from '@/locales'
import settingsDefault from '@/settings'

export const useAppSettingsStore = defineStore(
  'appSettings',
  () => {
    const settings = ref(settingsDefault)

    const prefersColorScheme = window.matchMedia('(prefers-color-scheme: dark)')

    watch(() => settings.value.theme.colorScheme, (val) => {
      document.documentElement.classList.add('disable-color-scheme-transition-duration')
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          document.documentElement.classList.remove('disable-color-scheme-transition-duration')
        })
      })
      if (val === '') {
        prefersColorScheme.addEventListener('change', updateTheme)
      }
      else {
        prefersColorScheme.removeEventListener('change', updateTheme)
      }
    }, {
      immediate: true,
    })
    const currentColorScheme = ref<Exclude<ThemeSettings['colorScheme'], ''>>()
    watch([() => settings.value.theme.colorScheme, () => settings.value.theme.light, () => settings.value.theme.dark, () => settings.value.theme.sync], updateTheme, {
      immediate: true,
    })
    function updateTheme() {
      let colorScheme = settings.value.theme.colorScheme
      if (colorScheme === '') {
        colorScheme = prefersColorScheme.matches ? 'dark' : 'light'
      }
      currentColorScheme.value = colorScheme
      switch (colorScheme) {
        case 'light':
          document.documentElement.classList.remove('dark')
          document.documentElement.setAttribute('data-theme', settings.value.theme.light)
          if (settings.value.theme.sync) {
            settings.value.theme.dark = settings.value.theme.light
          }
          break
        case 'dark':
          document.documentElement.classList.add('dark')
          document.documentElement.setAttribute('data-theme', settings.value.theme.dark)
          if (settings.value.theme.sync) {
            settings.value.theme.light = settings.value.theme.dark
          }
          break
      }
    }
    watch(() => settings.value.theme.radius, (val) => {
      document.documentElement.style.removeProperty('--radius')
      document.documentElement.style.setProperty('--radius', `${val}rem`)
    }, {
      immediate: true,
    })
    watch([
      () => settings.value.app.rip,
      () => settings.value.theme.colorAmblyopia,
    ], (val) => {
      document.documentElement.style.removeProperty('filter')
      if (val[0] && val[1]) {
        document.documentElement.style.setProperty('filter', 'grayscale(100%) invert(80%)')
      }
      else if (val[0]) {
        document.documentElement.style.setProperty('filter', 'grayscale(100%)')
      }
      else if (val[1]) {
        document.documentElement.style.setProperty('filter', 'invert(80%)')
      }
    }, {
      immediate: true,
    })

    const title = ref('')
    // 设置网页标题
    function setTitle(val: string) {
      title.value = val
    }
    // 自定义标题
    const customTitleList = ref<{
      fullPath: RouteLocationNormalized['fullPath']
      title: string
    }[]>([])
    // 设置自定义标题
    function setCustomTitle(fullPath: RouteLocationNormalized['fullPath'], title: string) {
      const index = customTitleList.value.findIndex(item => item.fullPath === fullPath)
      if (index > -1) {
        customTitleList.value[index].title = title
      }
      else {
        customTitleList.value.push({
          fullPath,
          title,
        })
      }
    }
    // 重置自定义标题
    function resetCustomTitle(fullPath: RouteLocationNormalized['fullPath']) {
      const index = customTitleList.value.findIndex(item => item.fullPath === fullPath)
      if (index > -1) {
        customTitleList.value.splice(index, 1)
      }
    }
    // 当前语言
    const lang = computed(() => {
      // 如果没设置默认语言，则返回当前浏览器语言设置默认语言
      if (settings.value.app.defaultLang === '') {
        const lang = navigator.language.toLowerCase()
        const locales = getLocales()
        if (locales?.[lang]) {
          return lang
        }
      }
      return settings.value.app.defaultLang || 'zh-cn'
    })
    // 设置默认语言
    function setDefaultLang(lang: string) {
      settings.value.app.defaultLang = lang
    }
    const langDirection = computed(() => {
      const direction = localesName[lang.value].direction
      return direction ?? 'ltr'
    })

    watch(langDirection, (val) => {
      document.documentElement.setAttribute('dir', val)
    }, {
      immediate: true,
    })
    function setColorScheme(colorScheme: Required<ThemeSettings>['colorScheme']) {
      settings.value.theme.colorScheme = colorScheme
    }
    return {
      settings,
      currentColorScheme,
      title,
      setTitle,
      customTitleList,
      setCustomTitle,
      resetCustomTitle,
      lang,
      setDefaultLang,
      setColorScheme,
    }
  },
)
