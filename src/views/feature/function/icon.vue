<script setup lang="ts">
definePage({
  meta: {
    title: 'pages.function.icon',
  },
})

const webImage = ref('https://picsum.photos/50')
function change() {
  webImage.value = ''
  webImage.value = `https://picsum.photos/50?random=${Math.random()}`
}

const km = new URL('@/assets/images/logo.png', import.meta.url).href
</script>

<template>
  <KmPageLayout navbar navbar-start-side="back">
    <KmPageMain>
      <p>单色 Icon</p>
      <div>
        <KmIcon name="example-emotion-line" class="size-12" />
        <KmIcon name="example-emotion-laugh-line" class="size-12" />
        <KmIcon name="example-emotion-unhappy-line" class="size-12" />
      </div>
      <p>彩色 Icon</p>
      <div>
        <KmIcon name="example-crown" class="size-12" />
        <KmIcon name="example-star" class="size-12" />
        <KmIcon name="example-vip" class="size-12" />
      </div>
      <p>Iconify Icon</p>
      <div>
        <KmIcon name="i-carbon:4k" class="size-12" />
        <KmIcon name="i-carbon:play-filled-alt" class="size-12" />
        <KmIcon name="i-carbon:pause-filled" class="size-12" />
      </div>
      <p>网络图片</p>
      <KmIcon :name="webImage" class="size-12" />
      <div class="space-x-2">
        <KmButton @click="change">
          更改图片
        </KmButton>
        <KmButton @click="webImage = ''">
          创建错误
        </KmButton>
      </div>
      <p>本地图片</p>
      <KmIcon :name="km" class="size-12" />
    </KmPageMain>
  </KmPageLayout>
</template>
