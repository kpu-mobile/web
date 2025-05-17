<script setup lang="ts">
import useSettingsStore from '@/store/modules/settings.ts'

definePage({
  meta: {
    title: 'pages.function.errorLog',
  },
})
const development = import.meta.env.MODE
const settingsStore = useSettingsStore()
const text = ref('')
const data = computed(() => text.value ? [JSON.parse(text.value)] : [])
function onError(type: number) {
  nextTick(() => {
    text.value = sessionStorage.getItem('errorLog') || ''
  })
  switch (type) {
    case 1:
      // 模拟错误
      // eslint-disable-next-line ts/ban-ts-comment
      // @ts-expect-error
      a = abc
      break
    case 2:
      // 模拟错误
      // eslint-disable-next-line ts/ban-ts-comment
      // @ts-expect-error
      testMethod()
      break
  }
}
</script>

<template>
  <KmPageLayout navbar navbar-start-side="back">
    <div v-if="development !== 'development'" class="flex flex-col items-center gap-4 p-4">
      <div v-if="settingsStore.settings.app.enableErrorLog " class="w-full">
        <div class="flex justify-evenly">
          <KmButton @click="onError(1)">
            模拟触发错误1
          </KmButton>
          <KmButton @click="onError(2)">
            模拟触发错误2
          </KmButton>
        </div>
        <KmDivider />
        <div v-for="(item, index) in data" :key="index" class="flex flex-col gap-2 break-words rounded bg-white p-4">
          <div>
            <div>错误信息</div>
            <div class="text-xs text-gray-5">
              {{ item.err.message }}
            </div>
          </div>
          <div>
            <div>错误详情</div><div class="text-xs text-gray-5">
              {{ item.err.stack }}
            </div>
          </div>
          <div>
            <div>错误链接</div>
            <div class="text-xs text-gray-5">
              {{ item.url }}
            </div>
          </div>
          <div>
            <div>时间</div>
            <div class="text-xs text-gray-5">
              {{ item.datetime }}
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        请到 /src/settings.ts 里打开错误日志功能，再进入该页面查看演示
      </div>
    </div>
    <div v-else>
      当前为开发环境，该功能关闭演示
    </div>
  </KmPageLayout>
</template>
