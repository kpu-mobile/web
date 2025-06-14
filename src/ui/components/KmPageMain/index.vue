<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/utils'

defineOptions({
  name: 'KmPageMain',
})

const props = withDefaults(
  defineProps<{
    title?: string
    collaspe?: boolean
    height?: string
    class?: HTMLAttributes['class']
    titleClass?: HTMLAttributes['class']
    mainClass?: HTMLAttributes['class']
  }>(),
  {
    title: '',
    collaspe: false,
    height: '',
  },
)

const slots = defineSlots<{
  title?: () => VNode
  default?: () => VNode
}>()

const isCollaspe = ref(props.collaspe)
function handleCollaspe() {
  isCollaspe.value = !isCollaspe.value
}
</script>

<template>
  <div
    :class="cn('m-4 flex flex-col border rounded-lg bg-card transition-[background-color,border-color]', {
      'overflow-hidden': collaspe,
    }, props.class)"
  >
    <div v-if="!!slots.title || title" :class="cn('border-b px-5 py-4 transition-border-color', props.titleClass)">
      <slot name="title">
        {{ title }}
      </slot>
    </div>
    <div
      :class="cn('relative h-[calc-size(auto,size)] p-5 transition-height after:(pointer-events-none absolute bottom-0 left-0 z-1 h-12 max-h-full w-full from-transparent to-[hsl(var(--card))] bg-gradient-to-b opacity-0 transition-opacity content-empty)', {
        'overflow-hidden': collaspe,
        'after:(opacity-100)': isCollaspe,
      }, props.mainClass)" :style="{
        height: isCollaspe ? height : '',
      }"
    >
      <slot />
      <KmButton v-if="collaspe" variant="link" size="icon" class="absolute inset-b-0 inset-s-1/2 transition-all -translate-x-1/2" :class="{ 'rotate-x-180': !isCollaspe }" @click="handleCollaspe">
        <KmIcon name="i-ep:arrow-down" class="text-xl" />
      </KmButton>
    </div>
  </div>
</template>
