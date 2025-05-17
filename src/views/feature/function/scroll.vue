<script setup lang="ts">
defineOptions({
  name: 'FeatureFunctionScroll',
})
definePage({
  meta: {
    title: 'pages.navbar.scroll',
    cache: '/feature/function/scroll2',
  },
})
const router = useRouter()
</script>

<template>
  <KmPageLayout navbar navbar-start-side="back" saved-position>
    <template #navbar-end>
      <KmButton size="sm" @click="router.push('/feature/function/scroll2')">
        下一页
      </KmButton>
    </template>
    <div class="h-full flex flex-col gap-4 p-4">
      随意滚动当前页面到任意位置并点击右上角的「下一页」按钮，再次返回页面时会定位在离开时的位置
      <KmButton @click="router.back()">
        返回
      </KmButton>
      <div v-for="i in 50" :key="i" class="text-center">
        {{ i }}
      </div>
    </div>
  </KmPageLayout>
</template>
