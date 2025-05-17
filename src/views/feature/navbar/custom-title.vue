<script setup lang="ts">
definePage({
  meta: {
    title: 'pages.navbar.custom-title',
  },
})

const router = useRouter()
</script>

<template>
  <KmPageLayout :title-center="false" navbar>
    <template #navbar>
      这是一段自定义的标题这是一段自定义的标题这是一段自定义的标题
    </template>
    <div class="flex flex-col gap-4 p-4">
      <div>
        注意，这种方式只能自定义 Navbar 区域的标题，并不会影响网页标题。如需同时修改网页标题，请参考动态标题。
      </div>
      <KmButton @click="router.back()">
        返回
      </KmButton>
    </div>
  </KmPageLayout>
</template>
