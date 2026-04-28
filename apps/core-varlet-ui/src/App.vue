<script setup lang="ts">
import dayjs from 'dayjs'
import { useI18n } from 'vue-i18n'
import eventBus from '@/utils/eventBus'
import Provider from './ui/provider/index.vue'

const route = useRoute()

const appSettingsStore = useAppSettingsStore()
const appKeepAliveStore = useAppKeepAliveStore()

const { auth } = useAppAuth()

const isAuth = computed(() => {
  return route.matched.every((item) => {
    return item.meta.auth ? (item.meta.auth === true ? true : auth(item.meta.auth)) : true
  })
})
const { t, te, locale } = useI18n()
watch(() => appSettingsStore.lang, () => {
  locale.value = appSettingsStore.lang
})

watch([
  () => appSettingsStore.settings.app.dynamicTitle,
  () => appSettingsStore.title,
  () => appSettingsStore.customTitleList,
  () => appSettingsStore.lang,
], () => {
  nextTick(() => {
    if (appSettingsStore.settings.app.dynamicTitle && appSettingsStore.title) {
      const title = (appSettingsStore.customTitleList.find(d => d.fullPath === route.fullPath)?.title) || (appSettingsStore.title && (te(appSettingsStore.title) ? t(appSettingsStore.title) : appSettingsStore.title))
      document.title = title ?? import.meta.env.VITE_APP_TITLE
    }
    else {
      document.title = import.meta.env.VITE_APP_TITLE
    }
  })
}, {
  immediate: true,
  deep: true,
})
watch(
  () => appSettingsStore.lang,
  () => {
    switch (appSettingsStore.lang) {
      case 'zh-cn':
        dayjs.locale('zh-cn')
        break
      case 'en-us':
        dayjs.locale('en')
        break
    }
  },
  {
    immediate: true,
  },
)
const enableAppSetting = import.meta.env.VITE_APP_SETTING
</script>

<template>
  <Provider>
    <RouterView v-slot="{ Component }">
      <Transition :name="appSettingsStore.settings.page.transitionMode" mode="out-in" appear>
        <KeepAlive :include="appKeepAliveStore.list">
          <component :is="Component" v-if="isAuth" :key="route.fullPath" />
          <AppNotAllowed v-else />
        </KeepAlive>
      </Transition>
    </RouterView>
    <template v-if="enableAppSetting">
      <div class="app-setting" @click="eventBus.emit('global-app-setting-toggle')">
        <KmIcon name="i-uiw:setting-o" class="icon" />
      </div>
      <AppSetting />
    </template>
    <KmToast />
  </Provider>
</template>

<style scoped>
.app-setting {
  --uno: bg-primary text-primary-foreground rounded-l-md;

  position: fixed;
  inset-inline-end: 0;
  top: 70%;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  font-size: 24px;
  cursor: pointer;

  .icon {
    animation: rotate 5s linear infinite;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
}

.navbar-enter-active,
.navbar-leave-active {
  transition: transform 0.15s ease-in-out;
}

.navbar-enter-from,
.navbar-leave-to {
  transform: translateY(-100%);
}

.tabbar-enter-active,
.tabbar-leave-active {
  transition: transform 0.15s ease-in-out;
}

.tabbar-enter-from,
.tabbar-leave-to {
  transform: translateY(100%);
}

/* 主内容区动画 */
.fade-enter-active {
  transition: 0.2s;
}

.fade-leave-active {
  transition: 0.15s;
}

.fade-enter-from {
  opacity: 0;
}

.fade-leave-to {
  opacity: 0;
}

.slide-left-enter-from {
  margin-right: -20px;
  margin-left: 20px;
  opacity: 0;
}

.slide-left-leave-to,
.slide-right-enter-from {
  margin-right: 20px;
  margin-left: -20px;
  opacity: 0;
}

.slide-right-leave-to {
  margin-right: -20px;
  margin-left: 20px;
  opacity: 0;
}

.slide-top-enter-from {
  margin-top: 20px;
  opacity: 0;
}

.slide-top-leave-to,
.slide-bottom-enter-from {
  margin-top: -20px;
  opacity: 0;
}

.slide-bottom-leave-to {
  margin-top: 20px;
  opacity: 0;
}
</style>
