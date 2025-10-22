<script setup lang="ts">
const checked = ref(false)
</script>

<template>
  <div class="flex gap-4">
    <KmCheckbox v-model="checked">
      复选框
    </KmCheckbox>
    {{ checked }}
  </div>
</template>
