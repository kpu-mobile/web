<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <div class="px-1 flex-center h-full" @click.stop="router.back()">
    <KmIcon name="i-ic:round-arrow-back-ios" class="text-4" />
  </div>
</template>
