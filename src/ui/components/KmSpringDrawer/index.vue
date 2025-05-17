<script setup lang="ts">
import type { ModalProps } from '.'
// import {
//   Dialog,
// } from './drawer'

defineOptions({
  name: 'KmModal',
})

withDefaults(
  defineProps<ModalProps>(),
  {
    modelValue: false,
    loading: false,
    closable: true,
    center: false,
    border: true,
    overlay: true,
    overlayBlur: false,
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
//
// const emits = defineEmits<ModalEmits>()
//
// const slots = defineSlots<{
//   header?: () => VNode
//   default?: () => VNode
//   footer?: () => VNode
// }>()
//
// const dialogHeaderRef = ref()
// const dialogAreaRef = useTemplateRef('dialogAreaRef')
//
// defineExpose({
//   areaRef: dialogAreaRef,
// })
//
// const id = useId()
// provide('ModalId', id)
//
// const isOpen = ref(props.modelValue)
//
// watch(() => props.modelValue, (newValue) => {
//   isOpen.value = newValue
// })
//
// function updateOpen(value: boolean) {
//   isOpen.value = value
//   emits('update:modelValue', value)
//   if (value) {
//     emits('open')
//   }
//   else {
//     emits('close')
//   }
// }
//
// function onConfirm() {
//   updateOpen(false)
//   emits('confirm')
// }
//
// function onCancel() {
//   updateOpen(false)
//   emits('cancel')
// }
</script>

<template>
  <!--  <Dialog :modal="false" :open="isOpen" @update:open="updateOpen" /> -->
  <div>
    test
  </div>
</template>
