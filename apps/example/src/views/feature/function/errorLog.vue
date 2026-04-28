<script setup lang="ts">
definePage({
  meta: {
    title: 'pages.function.errorLog',
  },
})
const development = import.meta.env.MODE
const appSettingsStore = useAppSettingsStore()
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
  <AppPageLayout navbar navbar-start-side="back">
    <div v-if="development !== 'development'" class="p-4 flex flex-col gap-4 items-center">
      <div v-if="appSettingsStore.settings.app.errorLog " class="w-full">
        <div class="flex justify-evenly">
          <KmButton @click="onError(1)">
            模拟触发错误1
          </KmButton>
          <KmButton @click="onError(2)">
            模拟触发错误2
          </KmButton>
        </div>
        <KmDivider />
        <div v-for="(item, index) in data" :key="index" class="p-4 rounded bg-white flex flex-col gap-2 break-words">
          <div>
            <div>错误信息</div>
            <div class="text-gray-5 text-xs">
              {{ item.err.message }}
            </div>
          </div>
          <div>
            <div>错误详情</div><div class="text-gray-5 text-xs">
              {{ item.err.stack }}
            </div>
          </div>
          <div>
            <div>错误链接</div>
            <div class="text-gray-5 text-xs">
              {{ item.url }}
            </div>
          </div>
          <div>
            <div>时间</div>
            <div class="text-gray-5 text-xs">
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
  </AppPageLayout>
</template>
