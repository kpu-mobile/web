<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <div class="h-full flex-center px-1" @click.stop="router.back()">
    <KmIcon name="i-ic:round-arrow-back-ios" class="text-4" />
  </div>
</template>
