<script setup lang="ts">
import useSettingsStore from '@/store/modules/settings'

const settingsStore = useSettingsStore()
</script>

<template>
  <div class="relative h-50 w-full flex flex-col items-center justify-center overflow-hidden bg-background p-2">
    <span class="pointer-events-none whitespace-pre-wrap from-black to-gray-300/80 bg-gradient-to-b bg-clip-text text-center text-2xl text-transparent font-semibold leading-none dark:from-white dark:to-slate-900/10">
      Kpu-mobile 真好用 !
    </span>
    <FmParticlesBg
      class="absolute inset-0"
      :color="settingsStore.currentColorScheme === 'dark' ? '#FFF' : '#000'"
      :quantity="100"
      :ease="100"
      :staticity="10"
    />
  </div>
</template>
