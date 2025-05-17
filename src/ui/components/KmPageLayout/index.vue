<script setup lang="ts">
import type { navbarSideOptions } from '#/global'
import type { HTMLAttributes } from 'vue'
import useSettingsStore from '@/store/modules/settings'
import HeaderSide from '@/ui/HeaderSide/index.vue'
import { cn } from '@/utils'
import { useElementSize, useScroll } from '@vueuse/core'
import { useI18n } from 'vue-i18n'

defineOptions({
  name: 'KmPageLayout',
})

const props = withDefaults(
  defineProps<{
    /** 导航栏中标题是否居中 */
    titleCenter?: boolean
    /** 是否启用导航栏，默认使用应用配置 `navbar.enable` */
    navbar?: boolean
    /** 导航栏模式，默认使用应用配置 navbar.mode */
    navbarMode?: 'fixed' | 'static' | 'show-hide-fixed' | 'sticky'
    /** 导航栏模式，默认使用应用配置 navbar.mode */
    navbarStartSide?: navbarSideOptions | navbarSideOptions[]
    /** 导航栏模式，默认使用应用配置 navbar.mode */
    navbarEndSide?: navbarSideOptions | navbarSideOptions[]
    /** 导航栏是否启用边框 */
    navbarBorder?: boolean
    /** 是否启用导航栏圆角 */
    navbarRadius?: boolean
    /** 是否启用导航栏渐变遮罩 */
    navbarMask?: boolean
    /** 导航栏样式 */
    navbarClass?: HTMLAttributes['class']
    /** 是否启用标签栏，默认使用应用配置 `tabbar.enable` */
    tabbar?: boolean
    /** 标签栏模式，默认使用应用配置 tabbar.mode */
    tabbarMode?: 'fixed' | 'sticky'
    /** 标签栏名称，如果应用配置里配置了多套标签栏，需设置当前页面使用哪套标签栏，默认使用第一套 */
    tabbarName?: string
    /** 标签栏是否启用边框 */
    tabbarBorder?: boolean
    /** 是否启用标签栏圆角 */
    tabbarRadius?: boolean
    /** 是否启用标签栏渐变遮罩 */
    tabbarMask?: boolean
    /** 标签栏样式 */
    tabbarClass?: HTMLAttributes['class']
    /** 是否展示底部版权信息，默认使用应用配置 `copyright.enable` */
    copyright?: boolean
    /** 是否启用返回顶部按钮，默认使用应用配置 `app.enableBackTop` */
    backTop?: boolean
    /** 是否记忆滚动位置（前提条件：需开启页面缓存） */
    savedPosition?: boolean
    /** 设置竖向滚动条位置 */
    scrollTop?: number
    /** 设置横向滚动条位置 */
    scrollLeft?: number
    /** 是否在设置滚动条位置时使用动画过渡 */
    scrollWithAnimation?: number
  }>(),
  {
    titleCenter: true,
    navbar: undefined,
    navbarBorder: true,
    navbarRadius: false,
    navbarMask: false,
    tabbar: undefined,
    tabbarBorder: true,
    tabbarMask: false,
    copyright: undefined,
    backTop: undefined,
  },
)

const emits = defineEmits<{
  scroll: [Event]
  reachTop: []
  reachBottom: []
}>()

const route = useRoute()
const settingsStore = useSettingsStore()
const { t, te } = useI18n()
const layoutRef = useTemplateRef('layoutRef')
const { y, arrivedState } = useScroll(layoutRef)
watch(toRef(arrivedState), (val) => {
  if (val.top) {
    emits('reachTop')
  }
  if (val.bottom) {
    emits('reachBottom')
  }
}, {
  deep: true,
})

defineExpose({
  ref: layoutRef,
})
function handleMainScroll(e: Event) {
  emits('scroll', e)
}

// Navbar
// 计算出左右两侧的最大宽度，让左右两侧的宽度保持一致
const startSideRef = useTemplateRef('startSideRef')
const endSideRef = useTemplateRef('endSideRef')
const sideWidth = ref(0)
onMounted(() => {
  const { width: startWidth } = useElementSize(startSideRef, undefined, { box: 'border-box' })
  const { width: endWidth } = useElementSize(endSideRef, undefined, { box: 'border-box' })
  watch([startWidth, endWidth], (val) => {
    sideWidth.value = Math.max(...val)
  }, {
    immediate: true,
  })
})
// 处理 sticky 模式下的滚动隐藏
const navbarRef = useTemplateRef('navbarRef')
const { height: navbarHeight } = useElementSize(navbarRef, undefined, { box: 'border-box' })
const Q = ref(false)
watch(y, (a, w) => {
  Q.value = (props.navbarMode ?? settingsStore.settings.navbar.mode) === 'sticky' && a > w && a > navbarHeight.value
})
// Tabbar
const tabbarList = computed<any[]>(() => {
  if (settingsStore.settings.tabbar.list.length > 0) {
    if (Object.hasOwn(settingsStore.settings.tabbar.list[0], 'name')) {
      const a = settingsStore.settings.tabbar.list.find(w => w.name === props.tabbarName)
      if (a) {
        return a.list || settingsStore.settings.tabbar.list[0].list || []
      }
      else {
        return settingsStore.settings.tabbar.list[0].list || []
      }
    }
    else {
      return settingsStore.settings.tabbar.list
    }
  }
  return []
})
const tabbarRef = useTemplateRef('tabbarRef')
const { height: tabbarHeight } = useElementSize(tabbarRef, undefined, { box: 'border-box' })
const W = ref(false)
watch(y, (a, w) => {
  W.value = (props.tabbarMode ?? settingsStore.settings.navbar.mode) === 'sticky' && a > w && a > tabbarHeight.value
})
// 处理图标显示
function getIcon(item: any) {
  if (route.fullPath === item.path) {
    return item.activeIcon ?? item.icon ?? undefined
  }
  else {
    return item.icon ?? undefined
  }
}

// 返回顶部
function handleBackTopClick() {
  layoutRef.value?.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
const top = ref(0)
const left = ref(0)
onActivated(() => {
  if (props.savedPosition) {
    nextTick(() => {
      layoutRef.value?.scrollTo({
        top: top.value,
        left: left.value,
        behavior: 'auto',
      })
    })
  }
})
onBeforeRouteLeave((_to, _from, next) => {
  if (props.savedPosition) {
    top.value = layoutRef.value?.scrollTop ?? 0
    left.value = layoutRef.value?.scrollLeft ?? 0
  }
  next()
},
)
</script>

<template>
  <div
    ref="layoutRef" class="relative h-vh flex flex-col overflow-auto overscroll-none supports-[(height:100dvh)]:h-dvh" :style="{
      '--g-navbar-height': `max(${navbarHeight}px, var(--g-navbar-min-height))`,
      '--g-tabbar-height': `max(${tabbarHeight}px, var(--g-tabbar-min-height))`,
    }" @scroll="handleMainScroll($event)"
  >
    <!-- Navbar -->
    <header
      v-show="navbar ?? settingsStore.settings.navbar.enable"
      ref="navbarRef"
      :class="cn('navbar relative w-full flex-col-center bg-[var(--g-navbar-bg)] text-[var(--g-navbar-color)] transition-all pt-safe min-h+safe-t-[var(--g-navbar-min-height)]', {
        'navbar-static': (navbarMode ?? settingsStore.settings.navbar.mode) === 'static',
        'navbar-fixed': (navbarMode ?? settingsStore.settings.navbar.mode) !== 'static',
        ...(navbarMode ?? settingsStore.settings.navbar.mode) === 'show-hide-fixed' && {
          '-top-[var(--g-navbar-height)]!': y < navbarHeight,
        },
        ...(navbarMode ?? settingsStore.settings.navbar.mode) === 'sticky' && {
          '-top-[var(--g-navbar-height)]!': Q,
        },
        // 边框
        'shadow-[0_1px_0_0_hsl(var(--border))]': navbarBorder,
        'before:shadow-[0_-1px_0_0_hsl(var(--border))]': navbarBorder && navbarMask,
        'rounded-b-2xl overflow-hidden': navbarRadius,
        'before:pointer-events-none before:absolute before:left-0 before:bottom-0 before:z-1 before:h-10 before:w-full before:from-transparent before:to-[var(--g-navbar-bg)] before:bg-gradient-to-t before:opacity-0 before:transition-opacity before:content-empty before:translate-y-full': navbarMask,
        'before:opacity-100': navbarMask && !arrivedState.top,
      }, navbarClass)"
    >
      <div class="min-h-[var(--g-navbar-min-height)] w-full flex-center">
        <div
          class="h-full flex items-center justify-start" :style="{
            ...(titleCenter && sideWidth && { width: `round(up, ${sideWidth}px, 1px)` }),
          }"
        >
          <div ref="startSideRef" class="h-full flex-center whitespace-nowrap">
            <div class="h-full flex-center whitespace-nowrap px-2 empty:hidden">
              <slot name="navbar-start">
                <HeaderSide :side="navbarStartSide" />
              </slot>
            </div>
          </div>
        </div>
        <div
          class="min-w-0 flex-1 text-sm" :class="{
            'text-center': titleCenter,
          }"
        >
          <div class="truncate">
            <slot name="navbar">
              {{ settingsStore.customTitleList.find(he => he.fullPath === route.fullPath)?.title
                || settingsStore.title && (te(settingsStore.title) ? t(settingsStore.title) : settingsStore.title) }}
            </slot>
          </div>
        </div>
        <div
          class="h-full flex items-center justify-end" :style="{
            ...(titleCenter && sideWidth && { width: `round(up, ${sideWidth}px, 1px)` }),
          }"
        >
          <div ref="endSideRef" class="h-full flex-center whitespace-nowrap">
            <div class="h-full flex-center whitespace-nowrap px-2 empty:hidden">
              <slot name="navbar-end">
                <HeaderSide :side="navbarEndSide" />
              </slot>
            </div>
          </div>
        </div>
      </div>
      <div
        :class="cn('w-full empty:hidden',
                   {
                     'shadow-[0_-1px_0_0_hsl(var(--border))]': navbarBorder,
                   })"
      >
        <slot name="navbar-extra" />
      </div>
    </header>
    <div
      :class="cn('relative flex flex-1 flex-col transition-margin', {
        ...((navbar ?? settingsStore.settings.navbar.enable) && {
          'mt-safe': (navbarMode ?? settingsStore.settings.navbar.mode) === 'show-hide-fixed',
          'mt+safe-[var(--g-navbar-height)]': (navbarMode ?? settingsStore.settings.navbar.mode) !== 'show-hide-fixed',
        }),
        ...((tabbar ?? settingsStore.settings.tabbar.enable) && {
          'mb-safe': (tabbarMode ?? settingsStore.settings.tabbar.mode) === 'sticky',
          'mb+safe-[var(--g-tabbar-height)]': (tabbarMode ?? settingsStore.settings.tabbar.mode) === 'fixed',
        }),
      })"
    >
      <slot />
      <!-- 版权信息 -->
      <Transition
        v-bind="{
          enterActiveClass: 'ease-out',
          enterFromClass: 'opacity-0',
          enterToClass: 'opacity-100',
          leaveActiveClass: 'ease-in',
          leaveFromClass: 'opacity-100',
          leaveToClass: 'opacity-0',
        }"
      >
        <div v-if="copyright ?? settingsStore.settings.copyright.enable" class="copyright relative flex flex-wrap items-center justify-center p-4 text-sm text-primary/50">
          <span class="px-1">Copyright</span>
          <KmIcon name="i-ri:copyright-line" class="text-lg" />
          <span v-if="settingsStore.settings.copyright.dates" class="px-1">{{ settingsStore.settings.copyright.dates }}</span>
          <template v-if="settingsStore.settings.copyright.company">
            <a v-if="settingsStore.settings.copyright.website" :href="settingsStore.settings.copyright.website" target="_blank" rel="noopener" class="px-1 text-center no-underline">{{ settingsStore.settings.copyright.company }}</a>
            <span v-else class="px-1">{{ settingsStore.settings.copyright.company }}</span>
          </template>
          <a v-if="settingsStore.settings.copyright.beian" href="https://beian.miit.gov.cn/" target="_blank" rel="noopener" class="px-1 text-center no-underline">{{ settingsStore.settings.copyright.beian }}</a>
        </div>
      </Transition>
    </div>
    <!-- Tabbar -->
    <footer
      v-show="tabbar ?? settingsStore.settings.tabbar.enable"
      ref="tabbarRef"
      :class="cn('tabbar flex-col-center bg-[var(--g-tabbar-bg)] transition-all pb-safe min-h+safe-b-[calc(var(--g-tabbar-min-height))]', {
        ...(tabbarMode ?? settingsStore.settings.tabbar.mode) === 'sticky' && {
          '-bottom-[var(--g-tabbar-height)]!': W,
        },
        // 边框
        'shadow-[0_-1px_0_0_hsl(var(--border))]': tabbarBorder,
        'before:shadow-[0_1px_0_0_hsl(var(--border))]': tabbarBorder && tabbarMask,
        'rounded-t-2xl overflow-hidden': tabbarRadius,
        'before:pointer-events-none before:absolute before:left-0 before:top-0 before:z-0 before:h-10 before:w-full before:from-transparent before:to-[var(--g-tabbar-bg)] before:bg-gradient-to-b before:opacity-0 before:transition-opacity before:content-empty before:-translate-y-full': tabbarMask,
        'before:opacity-100': tabbarMask && !arrivedState.bottom,
      }, tabbarClass)"
    >
      <div
        :class="cn('w-full empty:hidden',
                   {
                     'shadow-[0_1px_0_0_hsl(var(--border))]': tabbarBorder,
                   })"
      >
        <slot name="tabbar-extra" />
      </div>
      <div class="min-h-[var(--g-tabbar-min-height)] w-full flex-center px-4">
        <slot name="tabbar">
          <template v-for="item in tabbarList" :key="JSON.stringify(item)">
            <RouterLink
              class="flex flex-1 flex-col items-center text-[var(--g-tabbar-color)] no-underline transition-all" :class="{
                'text-[var(--g-tabbar-active-color)]!': route.fullPath === item.path,
              }" :to="item.path" replace
            >
              <KmBadge
                :value="item.badge ? typeof item.badge == 'boolean' ? item.badge : typeof item.badge == 'function' ? item.badge() : item.badge : false"
                :variant="item.badgeVariant ? typeof item.badgeVariant == 'function' ? item.badgeVariant() : item.badgeVariant : undefined"
                class="flex-1 flex-col items-center gap-[2px]"
              >
                <KmIcon v-if="getIcon(item)" :name="getIcon(item) ?? ''" :class="item.text ? 'text-6' : 'text-8'" />
                <div v-if="item.text" class="text-xs">
                  {{ t(item.text) }}
                </div>
              </KmBadge>
            </RouterLink>
          </template>
        </slot>
      </div>
    </footer>
    <!-- 返回顶部 -->
    <Transition
      v-bind="{
        enterActiveClass: 'ease-out duration-300',
        enterFromClass: 'opacity-0 translate-y-4',
        enterToClass: 'opacity-100 translate-y-0',
        leaveActiveClass: 'ease-in duration-200',
        leaveFromClass: 'opacity-100 scale-100',
        leaveToClass: 'opacity-0 scale-50',
      }"
    >
      <div
        v-if="(backTop ?? settingsStore.settings.app.enableBackTop) && y >= 200"
        class="back-top size-12 flex-center cursor-pointer border rounded-full bg-background shadow-lg transition-all active:bg-border"
        :class="{
          ...((tabbar ?? settingsStore.settings.tabbar.enable) && {
            'bottom+safe-[16px]': W,
            'bottom+safe-[calc(var(--g-tabbar-height)+16px)]!': !W,
          }),
        }"
        @click="handleBackTopClick"
      >
        <KmIcon name="i-icon-park-outline:to-top-one" class="text-6" />
      </div>
    </Transition>
  </div>
</template>

<style scoped>
/**
 * https://github.com/wswmsword/postcss-mobile-forever#%E8%BE%93%E5%85%A5%E8%BE%93%E5%87%BA%E8%8C%83%E4%BE%8B%E5%92%8C%E5%8E%9F%E7%90%86
 */
.navbar-static {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
}

.navbar-fixed {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
}

.tabbar {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
}

.back-top {
  position: fixed;
  right: 16px;
  bottom: 16px;
  z-index: 1000;
}
</style>
