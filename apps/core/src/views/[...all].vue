<i18n lang="json">
{
  "en-us": {
    "notFound": "Oops, page not found",
    "goBack": "Back to home"
  },
  "zh-cn": {
    "notFound": "哎呀，页面不存在",
    "goBack": "返回首页"
  }
}
</i18n>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

definePage({
  meta: {
    title: '找不到页面',
  },
})
const { t } = useI18n()
const router = useRouter()

function goBack() {
  router.push('/')
}
</script>

<template>
  <div class="bg-background flex flex-col h-vh">
    <div class="flex h-[5%]">
      <div class="w-[10%]" />
      <div class="border-inline border-dashed flex-1" />
      <div class="w-[10%]" />
    </div>
    <div class="border-block border-dashed flex flex-1">
      <div class="w-[10%]" />
      <div class="border-inline border-dashed flex-center flex-1 relative">
        <KmPatternBg variant="grid" size="lg" animate direction="top-right" mask="ellipse" :speed="20000" class="op-50 size-full absolute z-0" />
        <div class="p-4 flex-col-center gap-4 z-1 lg:p-12">
          <h1 class="text-6xl font-bold m-0">
            404
          </h1>
          <div class="text-xl text-secondary-foreground/50 mx-0 text-center">
            {{ t('notFound') }}
          </div>
          <KmButton variant="link" class="text-unset" @click="goBack">
            {{ t('goBack') }}
          </KmButton>
        </div>
      </div>
      <div class="w-[10%]" />
    </div>
    <div class="flex h-[5%]">
      <div class="w-[10%]" />
      <div class="border-inline border-dashed flex-1" />
      <div class="w-[10%]" />
    </div>
  </div>
</template>
