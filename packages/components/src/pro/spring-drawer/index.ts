import type { HTMLAttributes } from 'vue'

export interface SpringDrawerProps {
  modelValue?: boolean
  title: string | (() => string)
  description?: string | (() => string)
  showConfirmButton?: boolean
  showCancelButton?: boolean
  confirmButtonText?: string | (() => string)
  cancelButtonText?: string | (() => string)
  confirmButtonDisabled?: boolean
  confirmButtonLoading?: boolean
  header?: boolean
  footer?: boolean
  closeOnClickOverlay?: boolean
  closeOnPressEscape?: boolean
  contentClass?: HTMLAttributes['class']
  headerClass?: HTMLAttributes['class']
  footerClass?: HTMLAttributes['class']
}

export interface SpringDrawerEmits {
  'update:modelValue': [value: boolean]
  'open': []
  'opened': []
  'close': []
  'closed': []
  'confirm': []
  'cancel': []
}
