<script setup lang="ts">
definePage({
  meta: {
    title: 'pages.navbar.default',
  },
})

const router = useRouter()
</script>

<template>
  <KmPageLayout navbar>
    <div class="p-4 flex flex-col gap-4">
      <KmButton @click="router.back()">
        返回
      </KmButton>
    </div>
  </KmPageLayout>
</template>
