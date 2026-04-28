import type { RouteNamedMap } from 'vue-router/auto-routes'

declare namespace Settings {
  interface app {
    /**
     * 是否开启哀悼模式
     * @默认值 `false`
     */
    rip?: boolean

    /**
     * 默认语言
     * @默认值 `'zh-cn'` 跟随浏览器语言设置
     * @可选值 参考 `/src/locales/index.ts` 里的语言列表
     */
    defaultLang?: string
    /**
     * 是否开启权限功能
     * @默认值 `false`
     */
    auth?: boolean
    /**
     * 是否开启动态标题
     * @默认值 `false`
     */
    dynamicTitle?: boolean

    /**
     * localStorage/sessionStorage 前缀
     * @默认值 `'kpu_'`
     */
    // storagePrefix?: string
    /**
     * 是否开启页面水印
     * @默认值 `false`
     */
    watermark?: boolean
    /**
     * 是否在非开发环境开启错误日志功能，具体业务代码在 `/src/utils/error.log.ts`
     * @默认值 `false`
     */
    errorLog?: boolean
  }
  interface theme {
    /**
     * 切换颜色方案将共用一套主题
     * @默认值 `true`
     */
    sync?: boolean
    /**
     * 亮色主题
     * @默认值 `'light'`
     * @可选值 可选择 `/themes/index.ts` 里所有 `color-scheme: light` 的主题
     */
    light?: string
    /**
     * 暗色主题
     * @默认值 `'dark'`
     * @可选值 可选择 `/themes/index.ts` 里所有 `color-scheme: dark` 的主题
     */
    dark?: string
    /**
     * 颜色方案
     * @默认值 `''` 跟随系统
     * @可选值 `'light'` 明亮模式
     * @可选值 `'dark'` 暗黑模式
     */
    colorScheme?: '' | 'light' | 'dark'
    /**
     * 圆角系数
     * @默认值 `0.5`
     * @可选值 `0到1区间的任意值`
     */
    radius?: number
    /**
     * 是否开启色弱模式
     * @默认值 `false`
     */
    colorAmblyopia?: boolean
  }
  interface navbar {
    /**
     * 模式
     * @默认值 `'static'` 静止，跟随页面滚动
     * @可选值 `'fixed'` 固定，不跟随页面滚动，始终固定在顶部
     * @可选值 `'sticky'` 粘性，页面往下滚动时隐藏，往上滚动时显示
     */
    mode?: 'fixed'
    /**
     * 是否启用
     * @默认值 `true`
     */
    enable?: boolean
  }
  interface tabbar {
    /**
     * 是否启用
     * @默认值 `false`
     */
    enable?: boolean
    /**
     * 模式
     * @默认值 `'static'` 静止，跟随页面滚动
     * @可选值 `'fixed'` 固定，不跟随页面滚动，始终固定在顶部
     * @可选值 `'sticky'` 粘性，页面往下滚动时隐藏，往上滚动时显示
     */
    mode?: 'fixed'
    /**
     * 导航菜单
     */
    list?: {
      name: string
      list?: {
        path: keyof RouteNamedMap
        icon?: string
        activeIcon?: string
        text?: string
        badge?: boolean | string | number | (() => boolean | string | number)
        badgeVariant?: 'default' | 'secondary' | 'destructive' | (() => 'default' | 'secondary' | 'destructive')
      }[]
    }[]
  }
  interface page {
    /**
     * 页面切换动画
     * @默认值 `'fade'` 淡入淡出
     * @可选值 `'slide-left'` 向左滑动
     * @可选值 `'slide-right'` 向右滑动
     * @可选值 `'slide-top'` 向上滑动
     * @可选值 `'slide-bottom'` 向下滑动
     */
    transitionMode?: 'fade' | 'slide-left' | 'slide-right' | 'slide-top' | 'slide-bottom' | ''
    /**
     * 是否开启载入进度条
     * @默认值 `true`
     */
    progress?: boolean
    /**
     * 是否开启返回顶部按钮
     * @默认值 `true`
     */
    backTop?: boolean

  }
  interface copyright {
    /**
     * 是否开启底部版权，同时在路由 meta 对象里可以单独设置某个路由是否显示底部版权信息
     * @默认值 `false`
     */
    enable?: boolean
    /**
     * 网站运行日期
     * @默认值 `''`
     */
    dates?: string
    /**
     * 公司名称
     * @默认值 `''`
     */
    company?: string
    /**
     * 网站地址
     * @默认值 `''`
     */
    website?: string
  }

  interface all {
    /** 应用设置 */
    app?: app
    /** 主题设置 */
    theme?: theme
    /** 顶部导航栏 */
    navbar?: navbar
    /** 底部导航栏 */
    tabbar?: tabbar
    /** 页面设置 */
    page?: page
    /** 底部版权设置 */
    copyright?: copyright
  }
}
export type navbarSideOptions = 'back' | 'home' | 'forward' | 'i18n' | 'colorScheme'
