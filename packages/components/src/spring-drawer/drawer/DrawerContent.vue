<script setup lang="ts">
import type { DialogContentEmits, DialogContentProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import {
  DialogPortal,
  useForwardPropsEmits,
} from 'reka-ui'
import { DrawerContent } from 'vaul-vue'
import { cn } from '../../../utils'
import DrawerOverlay from './DrawerOverlay.vue'

interface SheetContentProps extends DialogContentProps {
  class?: HTMLAttributes['class']
}

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<SheetContentProps>(), {
})
const emits = defineEmits<DialogContentEmits>()
const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <DialogPortal>
    <DrawerOverlay />
    <DrawerContent
      v-bind="forwarded "
      :class="cn(
        'fixed inset-x-0 bottom-0 z-2000 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background',
        props.class)"
    >
      <div class="mx-auto mt-4 rounded-full bg-muted h-2 w-[100px]" />
      <slot />
    </DrawerContent>
  </DialogPortal>
</template>
