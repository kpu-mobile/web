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
    <div class="p-4 flex flex-col gap-4 h-full">
      现在你可以返回上一页查看效果。
      <KmButton @click="router.back()">
        返回
      </KmButton>
    </div>
  </KmPageLayout>
</template>
