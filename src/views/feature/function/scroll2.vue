<script setup lang="ts">
definePage({
  meta: {
    title: 'pages.navbar.scroll',
  },
})

const router = useRouter()
</script>

<template>
  <KmPageLayout navbar navbar-start-side="back">
    <div class="h-full flex flex-col gap-4 p-4">
      现在你可以返回上一页查看效果。
      <KmButton @click="router.back()">
        返回
      </KmButton>
    </div>
  </KmPageLayout>
</template>
