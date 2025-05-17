// 该文件为系统默认配置，请勿修改！！！

import type { RecursiveRequired, Settings } from '#/global'

const globalSettingsDefault: RecursiveRequired<Settings.all> = {
  app: {
    themeSync: true,
    lightTheme: 'default',
    darkTheme: 'default',
    colorScheme: 'light',
    radius: 0.5,
    enableMournMode: false,
    enableColorAmblyopiaMode: false,
    defaultLang: 'zh-cn',
    enablePermission: false,
    enableProgress: true,
    enableDynamicTitle: false,
    enableBackTop: true,
    storagePrefix: 'km_',
    enableWatermark: false,
    enableErrorLog: false,
  },
  navbar: {
    enable: false,
    mode: 'fixed',
  },
  tabbar: {
    enable: false,
    mode: 'fixed',
    list: [],
  },
  mainPage: {
    enableTransition: true,
    transitionMode: 'fade',
  },
  copyright: {
    enable: false,
    dates: '',
    company: '',
    website: '',
    beian: '',
  },
}

export default globalSettingsDefault
