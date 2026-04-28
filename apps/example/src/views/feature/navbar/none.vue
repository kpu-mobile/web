<script setup lang="ts">
definePage({
  meta: {
    title: 'pages.navbar.none',
  },
})
const router = useRouter()
</script>

<template>
  <AppPageLayout :navbar="false">
    <div class="p-4 flex flex-col gap-4">
      <KmButton @click="router.back()">
        返回
      </KmButton>
    </div>
  </AppPageLayout>
</template>
