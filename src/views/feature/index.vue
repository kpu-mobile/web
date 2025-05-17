<script setup lang="ts">
import type { RouteNamedMap } from 'vue-router/auto-routes'
import { $t } from '@/locales'
import { cn } from '@/utils'
import { useI18n } from 'vue-i18n'

defineOptions({
  name: 'Feature',
})

definePage({
  meta: {
    title: '特色',
    cache: true,
  },
})

const { t, te } = useI18n()

const data: {
  title: string
  icon?: string
  routes: {
    path: keyof RouteNamedMap
    title: string
    icon?: string
    pro?: boolean
  }[]
}[] = [
  {
    title: $t('pages.navbar.root'),
    icon: 'i-fluent:document-header-16-regular',
    routes: [
      {
        path: '/feature/navbar/default',
        title: $t('pages.navbar.default'),
      },
      {
        path: '/feature/navbar/none',
        title: $t('pages.navbar.none'),
      },
      {
        path: '/feature/navbar/preset',
        title: $t('pages.navbar.preset'),
        pro: true,
      },
      {
        path: '/feature/navbar/mode',
        title: $t('pages.navbar.mode'),
        pro: true,
      },
      {
        path: '/feature/navbar/style',
        title: $t('pages.navbar.style'),
        pro: true,
      },
      {
        path: '/feature/navbar/title-no-center',
        title: $t('pages.navbar.title-no-center'),
        pro: true,
      },
      {
        path: '/feature/navbar/custom-title',
        title: $t('pages.navbar.custom-title'),
        pro: true,
      },
      {
        path: '/feature/navbar/custom-area',
        title: $t('pages.navbar.custom-area'),
      },
      {
        path: '/feature/navbar/custom-navbar',
        title: $t('pages.navbar.custom-navbar'),
      },
      {
        path: '/feature/navbar/extra',
        title: $t('pages.navbar.extra'),
        pro: true,
      },
    ],
  },
  {
    title: $t('pages.tabbar.root'),
    icon: 'i-fluent:document-footer-16-regular',
    routes: [
      {
        path: '/feature/tabbar/default',
        title: $t('pages.tabbar.default'),
      },
      {
        path: '/feature/tabbar/mode',
        title: $t('pages.tabbar.mode'),
        pro: true,
      },
      {
        path: '/feature/tabbar/style',
        title: $t('pages.tabbar.style'),
        pro: true,
      },
      {
        path: '/feature/tabbar/multi',
        title: $t('pages.tabbar.multi'),
        pro: true,
      },
      {
        path: '/feature/tabbar/badge',
        title: $t('pages.tabbar.badge'),
        pro: true,
      },
      {
        path: '/feature/tabbar/custom-area',
        title: $t('pages.tabbar.custom-area'),
      },
      {
        path: '/feature/tabbar/extra',
        title: $t('pages.tabbar.extra'),
        pro: true,
      },
    ],
  },
  {
    title: $t('pages.function.root'),
    icon: 'i-ri:function-add-line',
    routes: [
      {
        path: '/feature/function/unocss',
        title: 'UnoCSS',
        icon: 'i-logos:unocss',
      },
      {
        path: '/feature/function/icon',
        title: $t('pages.function.icon'),
        icon: 'i-ri:remixicon-line',
      },
      {
        path: '/feature/function/i18n',
        title: $t('pages.function.i18n'),
        icon: 'i-ri:earth-line',
        pro: true,
      },
      {
        path: '/feature/function/keepAlive',
        title: $t('pages.function.keepAlive'),
        icon: 'i-cil:window-restore',
      },
      {
        path: '/feature/function/font',
        title: $t('pages.function.font'),
        icon: 'i-ri:font-size',
        pro: true,
      },
      {
        path: '/feature/function/watermark',
        title: $t('pages.function.watermark'),
        icon: 'i-icon-park-outline:mosaic',
        pro: true,
      },
      {
        path: '/feature/function/errorLog',
        title: $t('pages.function.errorLog'),
        icon: 'i-ri:bug-line',
        pro: true,
      },
      {
        path: '/feature/function/zoomable',
        title: $t('pages.function.zoomable'),
        icon: 'i-mingcute:zoom-in-line',
        pro: true,
      },
      {
        path: '/feature/function/title',
        title: $t('pages.function.title'),
        icon: 'i-mdi:format-title',
        pro: true,
      },
      {
        path: '/feature/function/scroll',
        title: $t('pages.function.scroll'),
        icon: 'i-carbon:auto-scroll',
        pro: true,
      },
    ],
  },
  {
    title: $t('pages.permission.root'),
    icon: 'i-ri:shield-keyhole-line',
    routes: [
      {
        path: '/feature/permission/',
        title: '权限验证',
      },
    ],
  },
  {
    title: '基础组件',
    icon: 'i-bx:bxs-component',
    routes: [
      {
        path: '/feature/component/basic',
        title: '基础组件',
      },
      {
        path: '/feature/component/composite',
        title: '复合组件',
      },
    ],
  },
  {
    title: '内建组件',
    icon: 'i-bx:bxs-component',
    routes: [
      {
        path: '/feature/component/built_in/animated_count_to/',
        title: '数字动画',
        pro: true,
      },
      {
        path: '/feature/component/built_in/avatar/',
        title: '头像',
      },
      {
        path: '/feature/component/built_in/badge/',
        title: '徽章',
      },
      {
        path: '/feature/component/built_in/button/',
        title: '按钮',
      },
      {
        path: '/feature/component/built_in/card/',
        title: '卡片',
      },
      {
        path: '/feature/component/built_in/checkbox/',
        title: '复选框',
      },
      {
        path: '/feature/component/built_in/count_to/',
        title: '计数到',
        pro: true,
      },
      {
        path: '/feature/component/built_in/digital_card/',
        title: '数字卡片',
        pro: true,
      },
      {
        path: '/feature/component/built_in/divider/',
        title: '分割线',
      },
      {
        path: '/feature/component/built_in/drawer/',
        title: '抽屉',
      },
      {
        path: '/feature/component/built_in/input/',
        title: '输入框',
      },
      {
        path: '/feature/component/built_in/loading/',
        title: '加载遮罩',
      },
      {
        path: '/feature/component/built_in/marquee/',
        title: '跑马灯',
        pro: true,
      },
      {
        path: '/feature/component/built_in/modal/',
        title: '弹窗',
      },
      {
        path: '/feature/component/built_in/page_main/',
        title: '内容块',
      },
      {
        path: '/feature/component/built_in/particles_bg/',
        title: '粒子背景',
        pro: true,
      },
      {
        path: '/feature/component/built_in/pattern_bg/',
        title: '图案背景',
        pro: true,
      },
      {
        path: '/feature/component/built_in/scratch_off/',
        title: '刮刮乐',
        pro: true,
      },
      {
        path: '/feature/component/built_in/scroll_area/',
        title: '滚动区域',
      },
      {
        path: '/feature/component/built_in/select/',
        title: '选择器',
      },
      {
        path: '/feature/component/built_in/slider/',
        title: '滑块',
      },
      {
        path: '/feature/component/built_in/sparkline/',
        title: '迷你图',
        pro: true,
      },
      {
        path: '/feature/component/built_in/spring_drawer/',
        title: '弹簧抽屉',
        pro: true,
      },
      {
        path: '/feature/component/built_in/switch/',
        title: '开关',
      },
      {
        path: '/feature/component/built_in/tabs/',
        title: '标签页',
      },
      {
        path: '/feature/component/built_in/timeline/',
        title: '时间线',
        pro: true,
      },
      {
        path: '/feature/component/built_in/toast/',
        title: '轻提示',
      },
      {
        path: '/feature/component/built_in/trend/',
        title: '趋势符号',
      },
    ],
  },
  {
    title: '插件',
    icon: 'i-clarity:plugin-outline-alerted',
    routes: [
      {
        path: '/feature/plugin/qrcode',
        title: '二维码',
        icon: 'i-material-symbols:qr-code',
      },
      {
        path: '/feature/plugin/esign',
        title: '电子签名',
        icon: 'i-mdi:draw',
      },
      {
        path: '/feature/plugin/animation',
        title: '过渡动画',
        icon: 'i-clarity:animation-line',
      },
      {
        path: '/feature/plugin/swiper',
        title: '轮播动画',
        icon: 'i-carbon:carousel-horizontal',
      },
      {
        path: '/feature/plugin/echarts',
        title: 'ECharts',
        icon: 'i-ri:bar-chart-2-line',
      },
      {
        path: '/feature/plugin/vchart',
        title: 'VChart',
        icon: 'i-ri:bar-chart-2-line',
      },
    ],
  },
  {
    title: '页面',
    icon: 'i-ri:pages-line',
    routes: [
      {
        path: '/feature/page/loadmore',
        title: '加载更多',
      },
      {
        path: '/feature/page/schedule',
        title: '日程表',
        pro: true,
      },
      {
        path: '/feature/page/productlist',
        title: '商品列表',
        pro: true,
      },
    ],
  },
]
</script>

<template>
  <KmPageLayout :navbar="false" saved-position tabbar>
    <div class="p-4">
      <div v-for="(item, index) in data" :key="index" class="mb-4">
        <div class="inline-flex items-center gap-2 text-gray-7 dark-text-gray-3">
          <KmIcon v-if="item.icon" :name="item.icon" class="text-6" />
          <div class="relative z-0 inline-block text-2xl font-bold after:(absolute bottom-0 left-0 h-2 w-full bg-yellow content-[''] -z-1 dark-bg-yellow-9)">
            {{ te(item.title) ? t(item.title) : item.title }}
          </div>
        </div>
        <div class="grid grid-cols-2 mt-4 gap-3">
          <router-link
            v-for="route in item.routes" :key="route.path" :to="route.path" :class="cn('relative flex of-hidden border rounded-lg bg-card text-sm text-card-foreground/80 shadow-sm', {
              'bg-gradient-to-r from-transparent to-[#ffd700] dark-to-[#ffd70030] b-[#d4af37]': route.pro,
            })"
          >
            <KmIcon v-if="route.pro" name="i-mdi:professional-hexagon" class="z-0 rotate-40 text-6xl c-[#d4af37] absolute! -right-4 -top-3 dark-c-[#d4af3730]" />
            <div v-if="route.icon" class="z-1 flex-center border-r px-3 py-2 pe-2">
              <KmIcon :name="route.icon" />
            </div>
            <div class="z-1 flex-1 truncate px-3 py-2" :class="{ 'ps-2': route.icon }">
              {{ te(route.title) ? t(route.title) : route.title }}
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </KmPageLayout>
</template>
