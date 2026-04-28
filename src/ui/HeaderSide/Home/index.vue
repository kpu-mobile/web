<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <div class="px-1 flex-center h-full" @click.stop="router.push('/')">
    <KmIcon name="i-ic:baseline-home" class="text-4" />
  </div>
</template>
