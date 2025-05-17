<script setup lang="ts">
definePage({
  meta: {
    title: '标签页',
  },
})

const tabs = ref(1)
</script>

<template>
  <KmPageLayout navbar navbar-start-side="back">
    <KmPageMain>
      <KmTabs v-model="tabs" :list="[{ label: '标签1', value: 1 }, { label: '标签2', value: 2 }, { label: '标签3', value: 3 }]">
        <template #1>
          <div class="flex-center">
            标签1
          </div>
        </template>
        <template #2>
          <div class="flex-center">
            标签2
          </div>
        </template>
        <template #3>
          <div class="flex-center">
            标签3
          </div>
        </template>
      </KmTabs>
    </KmPageMain>
  </KmPageLayout>
</template>
