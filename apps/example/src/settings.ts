import { setSettings } from '@kpu-mobile/settings'
import { $t } from '@/locales'
import pinia from '@/store'

const tabbarBadge = useTabbarBadgeStore(pinia)

export default setSettings({
  app: {
    auth: true,
    dynamicTitle: true,
    errorLog: true,
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
            text: $t('tabbar.default.feature'),
          },
          {
            path: '/',
            icon: 'i-ic:sharp-home',
            activeIcon: 'i-ic:twotone-home',
            text: $t('tabbar.default.index'),
          },
          {
            path: '/user/',
            icon: 'i-ic:baseline-person',
            activeIcon: 'i-ic:twotone-person',
            text: $t('tabbar.default.user'),
          },
        ],
      },
      {
        name: 'second',
        list: [
          {
            path: '/',
            icon: 'i-mdi:flower',
            text: $t('tabbar.second.flower'),
          },
          {
            path: '/',
            icon: 'i-mdi:grass',
            text: $t('tabbar.second.grass'),
          },
        ],
      },
      {
        name: 'third',
        list: [
          {
            path: '/',
            icon: 'i-ic:sharp-home',
            text: $t('tabbar.third.dot'),
            badge: () => tabbarBadge.dot,
            badgeVariant: () => tabbarBadge.variant,
          },
          {
            path: '/',
            icon: 'i-ic:sharp-home',
            text: $t('tabbar.third.number'),
            badge: () => tabbarBadge.number,
            badgeVariant: () => tabbarBadge.variant,
          },
          {
            path: '/',
            icon: 'i-ic:sharp-home',
            text: $t('tabbar.third.text'),
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
    website: 'https://kpu-mobile.github.io',
  },
})
