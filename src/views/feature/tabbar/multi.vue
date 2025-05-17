<script setup lang="ts">
definePage({
  meta: {
    title: 'pages.tabbar.multi',
  },
})

const router = useRouter()
</script>

<template>
  <KmPageLayout :navbar="false" tabbar tabbar-name="second">
    <div class="flex flex-col gap-4 p-4">
      <div>可以配置多套底部导航，并在不同页面选择启用某一套。</div>
      <KmButton @click="router.back()">
        返回
      </KmButton>
    </div>
  </KmPageLayout>
</template>
