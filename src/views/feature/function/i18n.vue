<script setup lang="ts">
import { getLocales, i18n } from '@/locales'
import useSettingsStore from '@/store/modules/settings.ts'
import dayjs from '@/utils/dayjs.ts'
import { useI18n } from 'vue-i18n'

definePage({
  meta: {
    title: 'pages.function.i18n',
  },
})

const { t } = useI18n()
const settingsStore = useSettingsStore()
const r = ref('')
watch(() => settingsStore.lang, () => {
  r.value = dayjs().format('MMMM-dddd')
}, {
  immediate: true,
})
function i(lang: string) {
  const messages = getLocales()
  if (messages) {
    if (lang === 'zh-cn') {
      Object.assign(messages['zh-cn'], {
        hello: {
          world: '你好，世界！',
        },
      })
      i18n.global.setLocaleMessage(lang, messages['zh-cn'])
    }
    else {
      Object.assign(messages['en-us'], {
        hello: {
          world: 'Hello World !',
        },
      })
      i18n.global.setLocaleMessage(lang, messages['en-us'])
    }
  }
}
</script>

<template>
  <KmPageLayout navbar navbar-start-side="back" navbar-end-side="i18n">
    <div class="m-4 c-gray">
      Vant 组件国际化
    </div>
    <KmPageMain class="my-0">
      <van-calendar
        :poppable="false"
        :show-confirm="false"
        style="height: 500px;"
      />
    </KmPageMain>
    <div class="m-4 c-gray">
      Dayjs
    </div>
    <KmPageMain class="my-0">
      {{ r }}
    </KmPageMain>
    <div class="m-4 c-gray">
      延迟加载
    </div>
    <KmPageMain class="my-0">
      <div class="flex justify-center gap-4">
        <KmButton @click="i('zh-cn')">
          载入中文
        </KmButton>
        <KmButton @click="i('en-us')">
          载入英文
        </KmButton>
      </div>
      <div class="mt-4 text-center">
        {{ t('hello.world') }}
      </div>
    </KmPageMain>
  </KmPageLayout>
</template>
