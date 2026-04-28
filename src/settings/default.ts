// 该文件为系统默认配置，请勿修改！！！

import type { Settings } from '#/global'
import type { RequiredDeep } from 'type-fest'

const globalSettingsDefault: RequiredDeep<Settings.all> = {
  app: {
    auth: false,
    dynamicTitle: false,
    watermark: false,
    errorLog: false,
    rip: false,
    defaultLang: '',
  },
  theme: {
    sync: true,
    light: 'default',
    dark: 'default',
    colorScheme: 'light',
    radius: 0.5,
    colorAmblyopia: false,
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
  page: {
    transitionMode: '',
    progress: true,
    backTop: true,
  },
  copyright: {
    enable: false,
    dates: '',
    company: '',
    website: '',
  },
}

export default globalSettingsDefault
