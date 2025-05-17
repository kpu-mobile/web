<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <div class="h-full flex-center px-1" @click.stop="router.forward()">
    <KmIcon name="i-ic:round-arrow-forward-ios" class="text-4" />
  </div>
</template>
