<script setup lang="ts">
import { localesName } from '@/locales'

const appSettingsStore = useAppSettingsStore()
const d = ref(!1)
const t = computed(() => Object.keys(localesName).map(name => ({
  label: localesName[name],
  disabled: appSettingsStore.lang === name,
  handle: () => {
    if (appSettingsStore.lang !== name) {
      appSettingsStore.setDefaultLang(name)
      d.value = !1
    }
  },
})))
</script>

<template>
  <div class="px-1 flex-center h-full" @click.stop="d = true">
    <KmIcon name="i-ri:translate" class="text-4" />
    <KmModal v-model="d" :header="false" :footer="false" :closable="false" content-class="min-h-auto">
      <div class="flex-col-center gap-2">
        <div v-for="(item, index) in t" :key="index" class="rounded-mrd px-3 py-2 flex-center w-full cursor-pointer" :class="item.disabled ? 'text-primary/30 cursor-not-allowed' : 'text-primary'" @click="item.handle">
          {{ item.label }}
        </div>
      </div>
    </KmModal>
  </div>
</template>
