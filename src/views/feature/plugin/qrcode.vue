<script setup lang="ts">
import QRCode from 'qrcode'

definePage({
  meta: {
    title: '二维码',
  },
})

const show = ref(false)

const url1 = ref('')
const url2 = ref('')
const url3 = ref('')

const canvasRef = useTemplateRef('canvasRef')

onMounted(() => {
  // 渲染成 img 标签
  QRCode.toDataURL('Kpu-mobile 真棒！').then((url: string) => {
    url1.value = url
  }).catch((err: any) => {
    // eslint-disable-next-line no-console
    console.log(err)
  })
  // 渲染成 canvas 标签
  QRCode.toCanvas(canvasRef.value, 'Kpu-mobile 真棒！').then(() => {
    // 渲染成功
  }).catch((err: any) => {
    // eslint-disable-next-line no-console
    console.log(err)
  })
  // 自定义颜色
  QRCode.toDataURL('Kpu-mobile 真棒！', {
    color: {
      dark: '#5482EE',
      light: '#E8E8E8',
    },
  }).then((url: string) => {
    url2.value = url
  }).catch((err: any) => {
    // eslint-disable-next-line no-console
    console.log(err)
  })
  // 指定宽度
  QRCode.toDataURL('Kpu-mobile 真棒！', {
    width: 100,
  }).then((url: string) => {
    url3.value = url
  }).catch((err: any) => {
    // eslint-disable-next-line no-console
    console.log(err)
  })
})
</script>

<template>
  <KmPageLayout navbar navbar-start-side="back">
    <template #navbar-end>
      <div class="h-full flex-center px-1" @click="show = true">
        <KmIcon name="i-mdi:information" class="text-4" />
      </div>
      <van-action-sheet v-model:show="show" teleport="body">
        <div class="whitespace-break-spaces p-4 space-y-2">
          <div>
            「插件」栏目下均为第三方插件的演示页面，框架默认并不包含这些插件。如需使用，请先安装对应插件。
          </div>
          <div>安装命令：</div>
          <div class="space-x-2">
            <van-tag type="primary" plain>
              pnpm add qrcode
            </van-tag>
            <van-tag type="primary" plain>
              pnpm add @types/qrcode -D
            </van-tag>
          </div>
        </div>
      </van-action-sheet>
    </template>
    <div class="flex flex-col gap-4 p-4">
      <KmPageMain title="渲染成 img 标签" class="m-0">
        <img :src="url1">
      </KmPageMain>
      <KmPageMain title="渲染成 canvas 标签" class="m-0">
        <canvas ref="canvasRef" />
      </KmPageMain>
      <KmPageMain title="自定义颜色" class="m-0">
        <img :src="url2">
      </KmPageMain>
      <KmPageMain title="指定宽度" class="m-0">
        <img :src="url3">
      </KmPageMain>
    </div>
  </KmPageLayout>
</template>
