import { setSettings } from '@kpu-mobile/settings'
import { $t } from './locales'

export default setSettings({
  // 请在此处编写或粘贴配置代码
  tabbar: {
    list: [
      {
        name: 'default',
        list: [

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
    ],
  },
})
