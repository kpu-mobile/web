<script setup lang="ts">
definePage({
  meta: {
    title: 'pages.navbar.title-no-center',
  },
})

const router = useRouter()
</script>

<template>
  <KmPageLayout :title-center="false" navbar>
    <div class="flex flex-col gap-4 p-4">
      <KmButton @click="router.back()">
        返回
      </KmButton>
    </div>
  </KmPageLayout>
</template>
