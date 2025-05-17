import type { RecursiveRequired, Settings } from '#/global'
import settingsDefault from '@/settings.default'
import pinia from '@/store'
import useTabbarBadgeStore from '@/store/modules/tabbarBadge.ts'
import { merge } from '@/utils/object'
import { cloneDeep } from 'es-toolkit'

const tabbarBadge = useTabbarBadgeStore(pinia)
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
            path: '/feature/',
            icon: 'i-ic:sharp-auto-awesome',
            activeIcon: 'i-ic:twotone-auto-awesome',
            text: 'tabbar.default.feature',
          },
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
      {
        name: 'second',
        list: [{
          path: '/',
          icon: 'i-mdi:flower',
          text: 'tabbar.second.flower',
        }, {
          path: '/',
          icon: 'i-mdi:grass',
          text: 'tabbar.second.grass',
        }],
      },
      {
        name: 'third',
        list: [
          {
            path: '/',
            icon: 'i-ic:sharp-home',
            text: 'tabbar.third.dot',
            badge: () => tabbarBadge.dot,
            badgeVariant: () => tabbarBadge.variant,
          },
          {
            path: '/',
            icon: 'i-ic:sharp-home',
            text: 'tabbar.third.number',
            badge: () => tabbarBadge.number,
            badgeVariant: () => tabbarBadge.variant,
          },
          {
            path: '/',
            icon: 'i-ic:sharp-home',
            text: 'tabbar.third.text',
            badge: () => tabbarBadge.text,
            badgeVariant: () => tabbarBadge.variant,
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
