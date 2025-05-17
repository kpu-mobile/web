<script setup lang="ts">
import type { navbarSideOptions } from '#/global'
// import { pascalCase } from 'es-toolkit'
import { pascalCase } from 'scule'

const props = defineProps<{
  side?: navbarSideOptions | navbarSideOptions[]
}>()
const modules = import.meta.glob('./*/index.vue', { import: 'default', eager: true })
const tools = computed(() => {
  return props.side ? typeof props.side == 'string' ? [props.side] : props.side : []
})
</script>

<template>
  <template v-for="(tool) in tools" :key="tool">
    <component :is="modules[`./${pascalCase(tool)}/index.vue`]" v-if="modules[`./${pascalCase(tool)}/index.vue`]" />
  </template>
</template>
