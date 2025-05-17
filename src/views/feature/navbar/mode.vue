<script setup lang="ts">
import FaTabs from '@/ui/components/KmTabs/index.vue'

definePage({
  meta: {
    title: 'pages.navbar.mode',
  },
})
const router = useRouter()

const mode = ref<'fixed' | 'static' | 'show-hide-fixed' | 'sticky'>('fixed')
</script>

<template>
  <KmPageLayout navbar :navbar-mode="mode">
    <div class="flex flex-col gap-4 p-4">
      <FaTabs
        v-model="mode" :list="[
          {
            label: '静止',
            value: 'static',
          }, {
            label: '固定',
            value: 'fixed',
          }, {
            label: '显隐固定',
            value: 'show-hide-fixed',
          }, {
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
