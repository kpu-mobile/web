import type { RouteNamedMap } from 'vue-router/auto-routes'

// Internal helper types
type ThemeColorScheme = '' | 'light' | 'dark'

// Public settings types
export interface AppSettings {
  /**
   * 是否开启权限功能
   * @默认值 `false`
   */
  auth?: boolean
  /**
   * 动态标题
   * @默认值 `false`
   */
  dynamicTitle?: boolean
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
  /**
   * 哀悼模式
   * @默认值 `false`
   */
  rip?: boolean
  /**
   * 默认语言
   * @默认值 `'zh-cn'` 跟随浏览器语言设置
   * @可选值 参考 `/src/locales/index.ts` 里的语言列表
   */
  defaultLang?: string
}

export interface ThemeSettings {
  /**
   * 切换颜色方案将共用一套主题
   * @默认值 `true`
   */
  sync?: boolean
  /**
   * 亮色主题
   * @默认值 `'default'`
   * @可选值 可选择 `/themes/index.ts` 里所有 `color-scheme: light` 的主题
   */
  light?: string
  /**
   * 暗色主题
   * @默认值 `'default'`
   * @可选值 可选择 `/themes/index.ts` 里所有 `color-scheme: dark` 的主题
   */
  dark?: string
  /**
   * 颜色方案
   * @默认值 `''` 跟随系统
   * @可选值 `'light'` 明亮模式
   * @可选值 `'dark'` 暗黑模式
   */
  colorScheme?: ThemeColorScheme
  /**
   * 圆角系数
   * @默认值 `0.5`
   * @可选值 `0到1区间的任意值`
   */
  radius?: number
  /**
   * 色弱模式
   * @默认值 `false`
   */
  colorAmblyopia?: boolean
}

export interface NavbarSettings {
  /**
   * 是否启用
   * @默认值 `true`
   */
  enable?: boolean
  /**
   * 模式
   * @默认值 `'static'` 静止，跟随页面滚动
   * @可选值 `'fixed'` 固定，不跟随页面滚动，始终固定在顶部
   * @可选值 `'sticky'` 粘性，页面往下滚动时隐藏，往上滚动时显示
   */
  mode?: 'fixed'
}

// Internal tabbar helper types
interface TabbarListItem {
  path: keyof RouteNamedMap
  icon?: string
  activeIcon?: string
  text?: string
  badge?: boolean | string | number | (() => boolean | string | number)
  badgeVariant?: 'default' | 'secondary' | 'destructive' | (() => 'default' | 'secondary' | 'destructive')
}

export interface TabbarSettings {
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
    list: TabbarListItem[]
  }[]
}

export interface PageSettings {
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
   * 载入进度条
   * @默认值 `true`
   */
  progress?: boolean
  /**
   * 返回顶部按钮
   * @默认值 `true`
   */
  backTop?: boolean
}

export interface CopyrightSettings {
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

// Root settings type
export interface SettingsOptions {
  /** 应用设置 */
  app?: AppSettings
  /** 主题设置 */
  theme?: ThemeSettings
  /** 顶部导航栏 */
  navbar?: NavbarSettings
  /** 底部导航栏 */
  tabbar?: TabbarSettings
  /** 页面设置 */
  page?: PageSettings
  /** 底部版权设置 */
  copyright?: CopyrightSettings
}
