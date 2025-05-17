<script setup lang="ts">
import useSettingsStore from '@/store/modules/settings'

const settingsStore = useSettingsStore()
</script>

<template>
  <div class="relative h-50 w-full flex flex-col items-center justify-center overflow-hidden bg-background p-2">
    <KmParticlesBg
      class="absolute inset-0"
      :color="settingsStore.currentColorScheme === 'dark' ? '#FFF' : '#000'"
    />
  </div>
</template>
