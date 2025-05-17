import type { RecursiveRequired, Settings } from '#/global'
import settingsDefault from '@/settings.default'
import { merge } from '@/utils/object'
import { cloneDeep } from 'es-toolkit'

const globalSettings: Settings.all = {
  app: {
    enablePermission: true,
    enableDynamicTitle: true,
    enableErrorLog: true,
  },
  navbar: {
    mode: 'fixed',
  },
  tabbar: {
    list: [
      {
        name: 'default',
        list: [
          {
            path: '/',
            icon: 'i-ic:sharp-home',
            activeIcon: 'i-ic:twotone-home',
            text: 'tabbar.default.index',
          },
          {
            path: '/user/',
            icon: 'i-ic:baseline-person',
            activeIcon: 'i-ic:twotone-person',
            text: 'tabbar.default.user',
          },
        ],
      },
    ],
  },
  copyright: {
    dates: '2024-present',
    company: 'Kpu-mobile',
    website: 'https://kpu-mobile.kpui.top',
  },
}

export default merge(globalSettings, cloneDeep(settingsDefault)) as RecursiveRequired<Settings.all>
