<script setup lang="ts">
import useKeepAliveStore from '@/store/modules/keepAlive'
import useSettingsStore from '@/store/modules/settings'
import eventBus from '@/utils/eventBus'
import dayjs from 'dayjs'
import { useI18n } from 'vue-i18n'
import Provider from './ui/provider/index.vue'

const route = useRoute()

const settingsStore = useSettingsStore()
const keepAliveStore = useKeepAliveStore()

const { auth } = useAuth()

const isAuth = computed(() => {
  return route.matched.every((item) => {
    return item.meta.auth ? (item.meta.auth === true ? true : auth(item.meta.auth)) : true
  })
})
const { t, te, locale } = useI18n()
watch(() => settingsStore.lang, () => {
  locale.value = settingsStore.lang
})

watch([
  () => settingsStore.settings.app.enableDynamicTitle,
  () => settingsStore.title,
  () => settingsStore.customTitleList,
  () => settingsStore.lang,
], () => {
  nextTick(() => {
    if (settingsStore.settings.app.enableDynamicTitle && settingsStore.title) {
      const title = (settingsStore.customTitleList.find(d => d.fullPath === route.fullPath)?.title) || (settingsStore.title && (te(settingsStore.title) ? t(settingsStore.title) : settingsStore.title))
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
  () => settingsStore.lang,
  () => {
    switch (settingsStore.lang) {
      case 'zh-cn':
        dayjs.locale('zh-cn')
        break
      case 'en-us':
        dayjs.locale('en')
        break
    }
  },
  {
    immediate: !0,
  },
)
const enableAppSetting = import.meta.env.VITE_APP_SETTING
</script>

<template>
  <Provider>
    <RouterView v-slot="{ Component }">
      <Transition :name="settingsStore.settings.mainPage.enableTransition ? settingsStore.settings.mainPage.transitionMode : ''" mode="out-in" appear>
        <KeepAlive :include="keepAliveStore.list">
          <component :is="Component" v-if="isAuth" :key="route.fullPath" />
          <KmNotAllowed v-else />
        </KeepAlive>
      </Transition>
    </RouterView>
    <template v-if="enableAppSetting">
      <div class="app-setting" @click="eventBus.emit('global-app-setting-toggle')">
        <KmIcon name="i-uiw:setting-o" class="icon" />
      </div>
      <KmAppSetting />
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
