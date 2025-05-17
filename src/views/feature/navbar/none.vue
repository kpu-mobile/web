<script setup lang="ts">
definePage({
  meta: {
    title: 'pages.navbar.none',
  },
})
const router = useRouter()
</script>

<template>
  <KmPageLayout :navbar="false">
    <div class="flex flex-col gap-4 p-4">
      <KmButton @click="router.back()">
        返回
      </KmButton>
    </div>
  </KmPageLayout>
</template>
