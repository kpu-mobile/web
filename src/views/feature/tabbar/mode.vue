<script setup lang="ts">
import FaTabs from '@/ui/components/KmTabs/index.vue'

definePage({
  meta: {
    title: 'pages.tabbar.mode',
  },
})
const router = useRouter()

const mode = ref<'fixed' | 'sticky'>('fixed')
</script>

<template>
  <KmPageLayout :navbar="false" tabbar :tabbar-mode="mode">
    <div class="flex flex-col gap-4 p-4">
      <FaTabs
        v-model="mode" :list="[
          {
            label: '固定',
            value: 'fixed',
          },
          {
            label: '粘性',
            value: 'sticky',
          }]"
      />
      <KmButton @click="router.back()">
        返回
      </KmButton>
      <div v-for="(index) in 50" :key="index" class="text-center">
        {{ index }}
      </div>
    </div>
  </KmPageLayout>
</template>
