<script setup lang="ts">
import useSettingsStore from '@/store/modules/settings.ts'

const settingsStore = useSettingsStore()
</script>

<template>
  <div class="h-full flex-center px-1" @click.stop="settingsStore.currentColorScheme && settingsStore.setColorScheme(settingsStore.currentColorScheme === 'dark' ? 'light' : 'dark')">
    <KmIcon
      :name="{ 'light': 'i-ri:sun-line',
               'dark': 'i-ri:moon-line',
               '': 'i-codicon:color-mode' }[settingsStore.settings.app.colorScheme]" class="text-4"
    />
  </div>
</template>
