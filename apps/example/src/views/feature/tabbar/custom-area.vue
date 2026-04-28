<script setup lang="ts">
definePage({
  meta: {
    title: 'pages.tabbar.custom-area',
  },
})

const router = useRouter()

const checked = ref(false)
</script>

<template>
  <AppPageLayout :navbar="false" tabbar>
    <template #tabbar>
      <div class="flex-center flex-1">
        <KmIcon name="https://kpu-admin.github.io/logo.svg" class="text-8" />
      </div>
      <div v-show="checked" class="flex-center flex-1">
        <KmIcon name="https://kpu-mobile.github.io/logo.png" class="text-8" />
      </div>
      <div class="flex-center flex-1">
        <KmIcon name="https://one-step-admin.github.io/logo.png" class="text-8" />
      </div>
    </template>
    <div class="p-4 flex flex-col gap-4">
      <div>可以根据业务逻辑做更精细化的处理，比如动态切换显示内容。</div>
      <div>
        <KmSwitch v-model="checked" size="16px" />
      </div>
      <KmButton @click="router.back()">
        返回
      </KmButton>
      <img src="https://picsum.photos/200/300">
    </div>
  </AppPageLayout>
</template>
