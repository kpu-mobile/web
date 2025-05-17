<script setup lang="ts">
import { localesName } from '@/locales'
import useSettingsStore from '@/store/modules/settings.ts'

const settingsStore = useSettingsStore()
const d = ref(!1)
const t = computed(() => Object.keys(localesName).map(name => ({
  label: localesName[name],
  disabled: settingsStore.lang === name,
  handle: () => {
    if (settingsStore.lang !== name) {
      settingsStore.setDefaultLang(name)
      d.value = !1
    }
  },
})))
</script>

<template>
  <div class="h-full flex-center px-1" @click.stop="d = true">
    <KmIcon name="i-ri:translate" class="text-4" />
    <KmModal v-model="d" :header="false" :footer="false" :closable="false" content-class="min-h-auto">
      <div class="flex-col-center gap-2">
        <div v-for="(item, index) in t" :key="index" class="rounded-mrd w-full flex-center cursor-pointer px-3 py-2" :class="item.disabled ? 'text-primary/30 cursor-not-allowed' : 'text-primary'" @click="item.handle">
          {{ item.label }}
        </div>
      </div>
    </KmModal>
  </div>
</template>
