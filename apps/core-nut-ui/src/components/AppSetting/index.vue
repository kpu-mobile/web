<i18n lang="json">
{
  "zh-cn": {
    "titleSettings": "应用配置",
    "description": "在生产环境中应关闭该模块",
    "warning": "在此处调整配置只是临时生效，要想真正应用于项目，请点击「 @:copy 」按钮，并粘贴到 {path} 文件中。",
    "copy": "复制配置"
  },
  "en-us": {
    "titleSettings": "Application Settings",
    "description": "This module should be turned off in production environments",
    "warning": "Adjusting the configuration here is only temporarily effective. To truly apply it to the project, click the 「 @:copy 」 button and paste it into the {path} file.",
    "copy": "Copy Configuration"
  }
}
</i18n>

<script setup lang="ts">
import { setSettings } from '@kpu-mobile/settings'
import themes from '@kpu-mobile/themes'
import { useClipboard } from '@vueuse/core'
import { useI18n } from 'vue-i18n'
import { toast } from 'vue-sonner'
import { localesName } from '@/locales'
import eventBus from '@/utils/eventBus'

defineOptions({
  name: 'AppSetting',
})
const { t } = useI18n()
const appSettingsStore = useAppSettingsStore()
const settingsDefault = setSettings({})
const themeList = computed(() => {
  return Object.keys(themes).map((key) => {
    return {
      label: key,
      value: (themes as any)[key][appSettingsStore.currentColorScheme || 'light'],
    }
  })
})
const isShow = ref(false)

onMounted(() => {
  eventBus.on('global-app-setting-toggle', () => {
    isShow.value = !isShow.value
  })
})

const themeRadius = computed<number[]>({
  get() {
    return [appSettingsStore.settings.theme.radius]
  },
  set(value) {
    appSettingsStore.settings.theme.radius = value[0]
  },
})
const appDefaultLang = computed({
  get() {
    return appSettingsStore.settings.app.defaultLang === '' ? '-' : appSettingsStore.settings.app.defaultLang
  },
  set(value) {
    appSettingsStore.settings.app.defaultLang = value === '-' ? '' : value
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
  copy(JSON.stringify(diffTwoObj(settingsDefault, appSettingsStore.settings), null, 2))
}

function isObject(value: unknown): value is Record<string, any> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function diffTwoObj(originalObj: Record<string, any>, diffObj: Record<string, any>) {
  if (!isObject(originalObj) || !isObject(diffObj)) {
    return diffObj
  }
  const diff: Record<string, any> = {}
  for (const key in diffObj) {
    const originalValue = originalObj[key]
    const diffValue = diffObj[key]
    if (JSON.stringify(originalValue) !== JSON.stringify(diffValue)) {
      if (isObject(originalValue) && isObject(diffValue)) {
        const nestedDiff = diffTwoObj(originalValue, diffValue)
        if (Object.keys(nestedDiff).length > 0) {
          diff[key] = nestedDiff
        }
      }
      else {
        diff[key] = diffValue
      }
    }
  }
  return diff
}
</script>

<template>
  <KmModal
    v-model="isShow" :title="t('titleSettings')" :description="t('description')" :footer="isSupported" :destroy-on-close="false"
    content-class="bg-[var(--g-bg)] transition-background-color"
  >
    <div>
      <KmPageMain
        title="主题" class="m-0 mb-4 break-inside-avoid light:border-none"
        title-class="pb-0 border-none font-bold text-base" main-class="space-y-4"
      >
        <div class="themes">
          <div
            v-for="item in themeList" :key="item.label" class="theme" :class="[{
              active: appSettingsStore.currentColorScheme === 'dark'
                ? appSettingsStore.settings.theme.dark === item.label
                : appSettingsStore.settings.theme.light === item.label,
            }]"
            @click="appSettingsStore.currentColorScheme === 'dark' ? appSettingsStore.settings.theme.dark = item.label : appSettingsStore.settings.theme.light = item.label"
          >
            <div class="content" :style="{ backgroundColor: `oklch(${item.value['--primary']})` }" />
          </div>
        </div>
        <div class="setting-item">
          <div class="label">
            颜色方案
          </div>
          <KmButtonGroup>
            <KmButton
              v-for="(item, index) in [
                { icon: 'i-ri:sun-line', value: 'light' },
                { icon: 'i-ri:moon-line', value: 'dark' },
                { icon: 'i-codicon:color-mode', value: '' },
              ]" :key="index"
              :variant="appSettingsStore.settings.theme.colorScheme === item.value ? 'default' : 'outline'" size="sm"
              :class="{ 'z-1': appSettingsStore.settings.theme.colorScheme === item.value }"
              @click="appSettingsStore.settings.theme.colorScheme = (item.value as any)"
            >
              <KmIcon :name="item.icon" />
            </KmButton>
          </KmButtonGroup>
        </div>
        <div class="setting-item">
          <div class="label">
            主题同步
          </div>
          <KmSwitch v-model="appSettingsStore.settings.theme.sync" />
        </div>

        <div class="setting-item">
          <div class="label">
            圆角
          </div>
          <KmSlider v-model="themeRadius" :min="0" :max="1" :step="0.25" class="w-1/2" />
        </div>
        <div class="setting-item">
          <div class="label">
            色弱模式
          </div>
          <KmSwitch v-model="appSettingsStore.settings.theme.colorAmblyopia" />
        </div>
      </KmPageMain>
    </div>
    <KmPageMain
      title="页面" class="m-0 mb-4 break-inside-avoid light:border-none"
      title-class="pb-0 border-none font-bold text-base" main-class="space-y-4"
    >
      <div class="transition-mode">
        <div
          class="mode" :class="[{ active: appSettingsStore.settings.page.transitionMode === '' }]"
          @click="appSettingsStore.settings.page.transitionMode = ''"
        />
        <div class="mode mode-fade" :class="{ active: appSettingsStore.settings.page.transitionMode === 'fade' }" @click="appSettingsStore.settings.page.transitionMode = 'fade'" />
        <div class="mode mode-slide-left" :class="{ active: appSettingsStore.settings.page.transitionMode === 'slide-left' }" @click="appSettingsStore.settings.page.transitionMode = 'slide-left'" />
        <div class="mode mode-slide-right" :class="{ active: appSettingsStore.settings.page.transitionMode === 'slide-right' }" @click="appSettingsStore.settings.page.transitionMode = 'slide-right'" />
        <div class="mode mode-slide-top" :class="{ active: appSettingsStore.settings.page.transitionMode === 'slide-top' }" @click="appSettingsStore.settings.page.transitionMode = 'slide-top'" />
        <div class="mode mode-slide-bottom" :class="{ active: appSettingsStore.settings.page.transitionMode === 'slide-bottom' }" @click="appSettingsStore.settings.page.transitionMode = 'slide-bottom'" />
      </div>
      <div class="setting-item">
        <div class="label">
          进度条
        </div>
        <KmSwitch v-model="appSettingsStore.settings.page.progress" />
      </div>
      <div class="setting-item">
        <div class="label">
          返回顶部
        </div>
        <KmSwitch v-model="appSettingsStore.settings.page.backTop" />
      </div>
    </KmPageMain>

    <KmPageMain
      title="版权" class="m-0 mb-4 break-inside-avoid light:border-none"
      title-class="pb-0 border-none font-bold text-base" main-class="space-y-4"
    >
      <div class="setting-item">
        <div class="label">
          启用
        </div>
        <KmSwitch v-model="appSettingsStore.settings.copyright.enable" />
      </div>
      <div class="setting-item">
        <div class="label">
          日期
        </div>
        <KmInput
          v-model="appSettingsStore.settings.copyright.dates"
          :disabled="!appSettingsStore.settings.copyright.enable"
        />
      </div>
      <div class="setting-item">
        <div class="label">
          公司
        </div>
        <KmInput
          v-model="appSettingsStore.settings.copyright.company"
          :disabled="!appSettingsStore.settings.copyright.enable"
        />
      </div>
      <div class="setting-item">
        <div class="label">
          网址
        </div>
        <KmInput
          v-model="appSettingsStore.settings.copyright.website"
          :disabled="!appSettingsStore.settings.copyright.enable"
        />
      </div>
    </KmPageMain>
    <KmPageMain
      title="应用" class="m-0 mb-4 break-inside-avoid light:border-none"
      title-class="pb-0 border-none font-bold text-base" main-class="space-y-4"
    >
      <div class="setting-item">
        <div class="label">
          启用权限
        </div>
        <KmSwitch v-model="appSettingsStore.settings.app.auth" />
      </div>
      <div class="setting-item">
        <div class="label">
          哀悼模式
        </div>
        <KmSwitch v-model="appSettingsStore.settings.app.rip" />
      </div>
      <div class="setting-item">
        <div class="label">
          动态标题
        </div>
        <KmSwitch v-model="appSettingsStore.settings.app.dynamicTitle" />
      </div>
      <div class="setting-item">
        <div class="label">
          水印
        </div>
        <KmSwitch v-model="appSettingsStore.settings.app.watermark" />
      </div>
      <div class="setting-item">
        <div class="label">
          默认语言
        </div>
        <KmSelect
          v-model="appDefaultLang" :options="[{
            label: '跟随系统',
            value: '-',
          }, ...Object.keys(localesName).map(item => {
            return {
              label: localesName[item].label,
              value: item,
            }
          })]"
        />
      </div>
    </KmPageMain>

    <template #footer>
      <div class="w-full">
        <i18n-t tag="div" keypath="warning" class="text-sm/6 c-rose mb-2 px-4 py-2 text-center rounded-lg bg-rose/20">
          <template #path>
            <code
              class="text-sm font-mono font-semibold px-[0.3rem] py-[0.2rem] rounded bg-muted relative"
            >src/settings.ts</code>
          </template>
        </i18n-t>
        <KmButton class="w-full" @click="handleCopy">
          <KmIcon :name="copied ? 'i-tabler:clipboard-check' : 'i-tabler:clipboard'" class="size-5" />
          {{ t('copy') }}
        </KmButton>
      </div>
    </template>
  </KmModal>
</template>

<style scoped>
.setting-item {
  --uno: flex items-center justify-between gap-4;

  .label {
    --uno: flex items-center gap-2 text-sm;
  }
}

.themes {
  --uno: grid grid-cols-4 gap-4;

  .theme {
    --uno: flex-center-center w-full h-12 cursor-pointer rounded-lg ring-1 ring-border transition;

    &.active {
      --uno: ring-primary ring-2;

      .content {
        --uno: rotate--0;
      }
    }

    .content {
      --uno: w-6 h-4 rounded-1/2 -rotate-45 transition;
    }
  }
}

.transition-mode {
  --uno: flex items-center justify-center gap-4;

  .mode {
    --uno: relative flex items-center justify-center w-14 h-10 rounded-2 ring-1 ring-border cursor-pointer;

    &.active {
      --uno: ring-primary ring-2;
    }

    &::after {
      --uno: content-empty absolute w-3/5 h-3/5 top-1/5 left-1/5 rounded-2 bg-primary/20 transition;

      animation: transition-mode-after 1.5s infinite;
    }

    @keyframes transition-mode-after {
      0% {
        visibility: visible;
      }

      30%,
      35% {
        visibility: hidden;
      }

      65% {
        visibility: visible;
      }
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
}
</style>
