<script setup lang="ts">
definePage({
  meta: {
    title: '复选框',
  },
})

const checked = ref(false)
</script>

<template>
  <KmPageLayout navbar navbar-start-side="back">
    <KmPageMain>
      <div class="flex gap-4">
        <KmCheckbox v-model="checked">
          复选框
        </KmCheckbox>
        {{ checked }}
      </div>
    </KmPageMain>
  </KmPageLayout>
</template>
