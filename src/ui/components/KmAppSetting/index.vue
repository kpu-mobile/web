<script setup lang="ts">
import settingsDefault from '@/settings.default'
import useSettingsStore from '@/store/modules/settings'
import eventBus from '@/utils/eventBus'
import { diffTwoObj } from '@/utils/object'
import { useClipboard } from '@vueuse/core'
import { toast } from 'vue-sonner'
import themes from '../../../../themes'

defineOptions({
  name: 'KmAppSetting',
})

const settingsStore = useSettingsStore()
const themeList = computed(() => {
  return Object.keys(themes).map((key) => {
    return {
      label: key,
      value: (themes as any)[key][settingsStore.currentColorScheme || 'light'],
    }
  })
})
const isShow = ref(false)

onMounted(() => {
  eventBus.on('global-app-setting-toggle', () => {
    isShow.value = !isShow.value
  })
})

const appRadius = computed<number[]>({
  get() {
    return [settingsStore.settings.app.radius]
  },
  set(value) {
    settingsStore.settings.app.radius = value[0]
  },
})

const { copy, copied, isSupported } = useClipboard()

watch(copied, (val) => {
  if (val) {
    toast.success('复制成功，请粘贴到 src/settings.ts 文件中！', {
      position: 'top-center',
    })
  }
})

function handleCopy() {
  copy(JSON.stringify(diffTwoObj(settingsDefault, settingsStore.settings), null, 2))
}
</script>

<template>
  <KmDrawer v-model="isShow" title="应用配置" description="在生产环境中应关闭该模块" :footer="isSupported">
    <div class="rounded-2 bg-rose/20 px-4 py-2 text-sm/6 c-rose">
      应用配置可实时预览效果，但只是临时生效，要想真正应用于项目，可以点击下方的「复制配置」按钮，并将配置粘贴到 src/settings.ts 文件中。
    </div>
    <div>
      <KmDivider>颜色主题风格</KmDivider>
      <div class="flex items-center justify-center pb-4">
        <KmTabs
          v-model="settingsStore.settings.app.colorScheme"
          :list="[
            { icon: 'i-ri:sun-line', label: '明亮', value: 'light' },
            { icon: 'i-ri:moon-line', label: '暗黑', value: 'dark' },
            { icon: 'i-codicon:color-mode', label: '系统', value: '' },
          ]"
          class="w-60"
        />
      </div>
      <div class="grid grid-cols-4 gap-4 pb-4 p-inline-8">
        <div
          v-for="item in themeList" :key="item.label" class="h-12 w-12 flex cursor-pointer items-center justify-center rounded-2 ring-1 ring-border transition"
          :class="{ 'ring-primary ring-2': settingsStore.currentColorScheme === 'dark'
            ? settingsStore.settings.app.darkTheme === item.label
            : settingsStore.settings.app.lightTheme === item.label }" @click="settingsStore.currentColorScheme === 'dark' ? settingsStore.settings.app.darkTheme = item.label : settingsStore.settings.app.lightTheme = item.label"
        >
          <div
            class="h-4 w-6 rounded-1/2 transition -rotate-45"
            :class="{ 'rotate-0!': settingsStore.currentColorScheme === 'dark'
              ? settingsStore.settings.app.darkTheme === item.label
              : settingsStore.settings.app.lightTheme === item.label }"
            :style="`background-color: hsl(${item.value['--primary']});`"
          />
        </div>
      </div>
      <div class="flex items-center justify-between gap-4 rounded-2 px-4 py-2">
        <div class="flex flex-shrink-0 items-center gap-2 text-sm">
          主题同步
        </div>
        <KmSwitch v-model="settingsStore.settings.app.themeSync" />
      </div>
      <div class="flex items-center justify-between gap-4 rounded-2 px-4 py-2">
        <div class="flex flex-shrink-0 items-center gap-2 text-sm">
          圆角系数
        </div>
        <KmSlider v-model="appRadius" :min="0" :max="1" :step="0.25" class="w-1/2" />
      </div>
    </div>
    <div>
      <KmDivider>页面切换动画</KmDivider>
      <div class="flex items-center justify-center pb-4">
        <KmSwitch v-model="settingsStore.settings.mainPage.enableTransition" />
      </div>
      <div v-if="settingsStore.settings.mainPage.enableTransition" class="flex items-center justify-center gap-4 pb-4">
        <div class="mode mode-fade relative h-10 w-14 flex cursor-pointer items-center justify-center rounded-2 ring-1 ring-border" :class=" { 'ring-primary! ring-2': settingsStore.settings.mainPage.transitionMode === 'fade' }" @click="settingsStore.settings.mainPage.transitionMode = 'fade'" />
        <div class="mode mode-slide-left relative h-10 w-14 flex cursor-pointer items-center justify-center rounded-2 ring-1 ring-border" :class="{ 'ring-primary! ring-2': settingsStore.settings.mainPage.transitionMode === 'slide-left' }" @click="settingsStore.settings.mainPage.transitionMode = 'slide-left'" />
        <div class="mode mode-slide-right relative h-10 w-14 flex cursor-pointer items-center justify-center rounded-2 ring-1 ring-border" :class="{ 'ring-primary! ring-2': settingsStore.settings.mainPage.transitionMode === 'slide-right' }" @click="settingsStore.settings.mainPage.transitionMode = 'slide-right'" />
        <div class="mode mode-slide-top relative h-10 w-14 flex cursor-pointer items-center justify-center rounded-2 ring-1 ring-border" :class="{ 'ring-primary! ring-2': settingsStore.settings.mainPage.transitionMode === 'slide-top' }" @click="settingsStore.settings.mainPage.transitionMode = 'slide-top'" />
        <div class="mode mode-slide-bottom relative h-10 w-14 flex cursor-pointer items-center justify-center rounded-2 ring-1 ring-border" :class="{ 'ring-primary! ring-2': settingsStore.settings.mainPage.transitionMode === 'slide-bottom' }" @click="settingsStore.settings.mainPage.transitionMode = 'slide-bottom'" />
      </div>
    </div>
    <div>
      <KmDivider>底部版权</KmDivider>
      <div class="flex items-center justify-between gap-4 rounded-2 px-4 py-2">
        <div class="flex flex-shrink-0 items-center gap-2 text-sm">
          是否启用
        </div>
        <KmSwitch v-model="settingsStore.settings.copyright.enable" />
      </div>
      <div class="flex items-center justify-between gap-4 rounded-2 px-4 py-2">
        <div class="flex flex-shrink-0 items-center gap-2 text-sm">
          日期
        </div>
        <KmInput v-model="settingsStore.settings.copyright.dates" :disabled="!settingsStore.settings.copyright.enable" />
      </div>
      <div class="flex items-center justify-between gap-4 rounded-2 px-4 py-2">
        <div class="flex flex-shrink-0 items-center gap-2 text-sm">
          公司
        </div>
        <KmInput v-model="settingsStore.settings.copyright.company" :disabled="!settingsStore.settings.copyright.enable" />
      </div>
      <div class="flex items-center justify-between gap-4 rounded-2 px-4 py-2">
        <div class="flex flex-shrink-0 items-center gap-2 text-sm">
          网址
        </div>
        <KmInput v-model="settingsStore.settings.copyright.website" :disabled="!settingsStore.settings.copyright.enable" />
      </div>
      <div class="flex items-center justify-between gap-4 rounded-2 px-4 py-2">
        <div class="flex flex-shrink-0 items-center gap-2 text-sm">
          备案
        </div>
        <KmInput v-model="settingsStore.settings.copyright.beian" :disabled="!settingsStore.settings.copyright.enable" />
      </div>
    </div>
    <div>
      <KmDivider>其它</KmDivider>
      <div class="flex items-center justify-between gap-4 rounded-2 px-4 py-2">
        <div class="flex flex-shrink-0 items-center gap-2 text-sm">
          是否启用权限
        </div>
        <KmSwitch v-model="settingsStore.settings.app.enablePermission" />
      </div>
      <div class="flex items-center justify-between gap-4 rounded-2 px-4 py-2">
        <div class="flex flex-shrink-0 items-center gap-2 text-sm">
          载入进度条
        </div>
        <KmSwitch v-model="settingsStore.settings.app.enableProgress" />
      </div>
      <div class="flex items-center justify-between gap-4 rounded-2 px-4 py-2">
        <div class="flex flex-shrink-0 items-center gap-2 text-sm">
          哀悼模式
        </div>
        <KmSwitch v-model="settingsStore.settings.app.enableMournMode" />
      </div>
      <div class="flex items-center justify-between gap-4 rounded-2 px-4 py-2">
        <div class="flex flex-shrink-0 items-center gap-2 text-sm">
          色弱模式
        </div>
        <KmSwitch v-model="settingsStore.settings.app.enableColorAmblyopiaMode" />
      </div>
      <div class="flex items-center justify-between gap-4 rounded-2 px-4 py-2">
        <div class="flex flex-shrink-0 items-center gap-2 text-sm">
          返回顶部
        </div>
        <KmSwitch v-model="settingsStore.settings.app.enableBackTop" />
      </div>
      <div class="flex items-center justify-between gap-4 rounded-2 px-4 py-2">
        <div class="flex flex-shrink-0 items-center gap-2 text-sm">
          动态标题
        </div>
        <KmSwitch v-model="settingsStore.settings.app.enableDynamicTitle" />
      </div>
      <div class="flex items-center justify-between gap-4 rounded-2 px-4 py-2">
        <div class="flex flex-shrink-0 items-center gap-2 text-sm">
          Storage前缀
        </div>
        <KmInput v-model="settingsStore.settings.app.storagePrefix" />
      </div>
      <div class="flex items-center justify-between gap-4 rounded-2 px-4 py-2">
        <div class="flex flex-shrink-0 items-center gap-2 text-sm">
          页面水印
        </div>
        <KmSwitch v-model="settingsStore.settings.app.enableWatermark" />
      </div>
    </div>
    <template #footer>
      <KmButton class="w-full" @click="handleCopy">
        <KmIcon name="i-ep:document-copy" />
        复制配置
      </KmButton>
    </template>
  </KmDrawer>
</template>

<style scoped>
.mode {
  &::after {
    --uno: content-empty absolute w-3/5 h-3/5 top-1/5 left-1/5 rounded-2 bg-stone-2 dark-bg-stone-9 transition;
  }

  &.mode-fade {
    &::after {
      animation: transition-mode-fade-after 1.5s infinite;
    }

    @keyframes transition-mode-fade-after {
      0% {
        opacity: 1;
      }

      30%,
      35% {
        opacity: 0;
      }

      65% {
        opacity: 1;
      }
    }
  }

  &.mode-slide-left {
    &::after {
      animation: transition-mode-slide-left 1.5s infinite;
    }

    @keyframes transition-mode-slide-left {
      0% {
        opacity: 1;
      }

      30% {
        opacity: 0;
        transform: translate(-30%, 0);
      }

      35% {
        opacity: 0;
        transform: translate(30%, 0);
      }

      65% {
        opacity: 1;
      }
    }
  }

  &.mode-slide-right {
    &::after {
      animation: transition-mode-slide-right 1.5s infinite;
    }

    @keyframes transition-mode-slide-right {
      0% {
        opacity: 1;
      }

      30% {
        opacity: 0;
        transform: translate(30%, 0);
      }

      35% {
        opacity: 0;
        transform: translate(-30%, 0);
      }

      100% {
        opacity: 1;
      }
    }
  }

  &.mode-slide-top {
    &::after {
      animation: transition-mode-slide-top 1.5s infinite;
    }

    @keyframes transition-mode-slide-top {
      0% {
        opacity: 1;
      }

      30% {
        opacity: 0;
        transform: translate(0, -30%);
      }

      35% {
        opacity: 0;
        transform: translate(0, 30%);
      }

      100% {
        opacity: 1;
      }
    }
  }

  &.mode-slide-bottom {
    &::after {
      animation: transition-mode-slide-bottom 1.5s infinite;
    }

    @keyframes transition-mode-slide-bottom {
      0% {
        opacity: 1;
      }

      30% {
        opacity: 0;
        transform: translate(0, 30%);
      }

      35% {
        opacity: 0;
        transform: translate(0, -30%);
      }

      100% {
        opacity: 1;
      }
    }
  }
}
</style>
