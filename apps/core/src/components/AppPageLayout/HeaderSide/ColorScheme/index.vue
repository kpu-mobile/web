<script setup lang="ts">
const appSettingsStore = useAppSettingsStore()
</script>

<template>
  <div class="px-1 flex-center h-full" @click.stop="appSettingsStore.currentColorScheme && appSettingsStore.setColorScheme(appSettingsStore.currentColorScheme === 'dark' ? 'light' : 'dark')">
    <KmIcon
      :name="{ 'light': 'i-ri:sun-line',
               'dark': 'i-ri:moon-line',
               '': 'i-codicon:color-mode' }[appSettingsStore.settings.theme.colorScheme]" class="text-4"
    />
  </div>
</template>
