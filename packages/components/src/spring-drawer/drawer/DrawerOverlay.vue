<script setup lang="ts">
import type { DialogOverlayProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { reactiveOmit } from '@vueuse/core'
import { DrawerOverlay } from 'vaul-vue'
import { cn } from '../../../utils'

const props = defineProps<DialogOverlayProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = reactiveOmit(props, 'class')
</script>

<template>
  <DrawerOverlay
    data-slot="sheet-overlay"
    :class="cn('fixed inset-0 z-2000 bg-black/80', props.class)"
    v-bind="delegatedProps"
  >
    <slot />
  </DrawerOverlay>
</template>
