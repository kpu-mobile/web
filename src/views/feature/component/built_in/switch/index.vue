<script setup lang="ts">
definePage({
  meta: {
    title: '开关',
  },
})

const switchVal = ref(false)
</script>

<template>
  <KmPageLayout navbar navbar-start-side="back">
    <KmPageMain>
      <div class="flex gap-4">
        <KmSwitch v-model="switchVal" />
        <KmSwitch v-model="switchVal" on-icon="ri:sun-line" off-icon="ri:moon-line" />
      </div>
    </KmPageMain>
  </KmPageLayout>
</template>
