<script setup lang="ts">
definePage({
  meta: {
    title: 'pages.tabbar.mode',
  },
})
const router = useRouter()

const mode = ref<'fixed' | 'sticky'>('fixed')
</script>

<template>
  <AppPageLayout :navbar="false" tabbar :tabbar-mode="mode">
    <div class="p-4 flex flex-col gap-4">
      <KmTabs
        v-model="mode" :list="[
          {
            label: '固定',
            value: 'fixed',
          },
          {
            label: '粘性',
            value: 'sticky',
          }]"
        list-class="w-full border"
      />
      <KmButton @click="router.back()">
        返回
      </KmButton>
      <div v-for="(index) in 50" :key="index" class="text-center">
        {{ index }}
      </div>
    </div>
  </AppPageLayout>
</template>
