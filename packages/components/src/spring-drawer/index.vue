<script setup lang="ts">
import type { SpringDrawerEmits, SpringDrawerProps } from '.'
import { cn } from '../../utils'
import KmButton from '../button/index.vue'
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from './drawer'

defineOptions({
  name: 'KmSpringDrawer',
})

const props = withDefaults(
  defineProps<SpringDrawerProps>(),
  {
    modelValue: false,
    showConfirmButton: true,
    showCancelButton: false,
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    confirmButtonDisabled: false,
    confirmButtonLoading: false,
    header: true,
    footer: true,
    closeOnClickOverlay: true,
    closeOnPressEscape: true,
  },
)

const emits = defineEmits<SpringDrawerEmits>()

const isOpen = ref(props.modelValue)

watch(() => props.modelValue, (newValue) => {
  isOpen.value = newValue
})

async function updateOpen(value: boolean) {
  isOpen.value = value
  emits('update:modelValue', value)
  if (value) {
    emits('open')
  }
  else {
    emits('close')
  }
}

async function onConfirm() {
  isOpen.value = false
  emits('confirm')
}

async function onCancel() {
  isOpen.value = false
  emits('cancel')
}
</script>

<template>
  <Drawer :open="isOpen" @update:open="updateOpen">
    <DrawerContent :class="cn(props.contentClass)">
      <DrawerHeader
        v-if="header" :class="cn(props.headerClass)"
      >
        <slot name="header">
          <DrawerTitle>
            {{ typeof props.title === 'function' ? props.title() : props.title }}
          </DrawerTitle>
          <DrawerDescription class="empty:hidden">
            {{ typeof props.description === 'function' ? props.description() : props.description }}
          </DrawerDescription>
        </slot>
      </DrawerHeader>

      <div :class="cn('p-4 flex-col-center', props.contentClass)">
        <slot />
      </div>
      <DrawerFooter
        v-if="footer" :class="cn(props.footerClass)"
      >
        <slot name="footer">
          <KmButton v-if="showConfirmButton" :disabled="confirmButtonDisabled" :loading="confirmButtonLoading" @click="onConfirm">
            {{ typeof props.confirmButtonText === 'function' ? props.confirmButtonText() : props.confirmButtonText }}
          </KmButton>
          <KmButton v-if="showCancelButton" variant="outline" @click="onCancel">
            {{ typeof props.cancelButtonText === 'function' ? props.cancelButtonText() : props.cancelButtonText }}
          </KmButton>
        </slot>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
</template>
