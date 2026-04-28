<script lang="ts" setup>
import { NumberFlowGroup } from '@number-flow/vue'

defineOptions({
  name: 'KmAnimatedCountToGroup',
})
</script>

<template>
  <NumberFlowGroup>
    <slot />
  </NumberFlowGroup>
</template>
