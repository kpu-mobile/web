<script setup lang="ts">
const scrollbar = ref(true)
const mask = ref(false)
</script>

<template>
  <div class="flex-col-start gap-4">
    <div class="flex-col-start gap-4">
      <div class="flex-center-start gap-4">
        <div class="text-sm">
          显示滚动条
        </div>
        <KmSwitch v-model="scrollbar" />
      </div>
      <div class="flex-center-start gap-4">
        <div class="text-sm">
          显示遮罩
        </div>
        <KmSwitch v-model="mask" />
      </div>
    </div>
    <KmScrollArea :scrollbar :mask class="h-72 w-full border rounded-md">
      <div v-for="tag in 20" :key="tag" class="p-4 text-sm">
        {{ tag }}
      </div>
    </KmScrollArea>
    <KmScrollArea horizontal :scrollbar :mask class="w-full border rounded-md">
      <div class="flex-center-start">
        <div v-for="tag in 20" :key="tag" class="h-16 w-16 flex-center text-sm">
          {{ tag }}
        </div>
      </div>
    </KmScrollArea>
  </div>
</template>
