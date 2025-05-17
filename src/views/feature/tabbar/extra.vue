<script setup lang="ts">
definePage({
  meta: {
    title: 'pages.tabbar.extra',
  },
})
const router = useRouter()
</script>

<template>
  <KmPageLayout :navbar="false" tabbar>
    <template #tabbar-extra>
      <div class="flex gap-2 p-2">
        <KmButton size="sm" class="w-full">
          提交
        </KmButton>
        <KmButton variant="outline" size="sm" class="w-full">
          取消
        </KmButton>
      </div>
    </template>
    <div class="flex flex-col gap-4 p-4">
      <p>
        额外区域位于底部标签栏上方，可以放置任何内容，例如状态栏、操作按钮等。
      </p>
      <KmButton @click="router.back()">
        返回
      </KmButton>
      <div v-for="(index) in 50" :key="index" class="text-center">
        {{ index }}
      </div>
    </div>
  </KmPageLayout>
</template>
