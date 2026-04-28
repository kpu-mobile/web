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
    <div class="p-4 flex flex-col gap-4">
      <KmButton @click="router.back()">
        返回
      </KmButton>
    </div>
  </KmPageLayout>
</template>
