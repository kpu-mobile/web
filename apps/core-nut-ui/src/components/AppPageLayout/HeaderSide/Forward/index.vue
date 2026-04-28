<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <div class="px-1 flex-center h-full" @click.stop="router.forward()">
    <KmIcon name="i-ic:round-arrow-forward-ios" class="text-4" />
  </div>
</template>
