import type { RequiredDeep } from 'type-fest'
import type { SettingsOptions } from '../types'

const settingsDefault: RequiredDeep<SettingsOptions> = {
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

export default settingsDefault
