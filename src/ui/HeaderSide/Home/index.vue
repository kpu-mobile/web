<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <div class="h-full flex-center px-1" @click.stop="router.push('/')">
    <KmIcon name="i-ic:baseline-home" class="text-4" />
  </div>
</template>
