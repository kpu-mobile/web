<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from './empty'

defineOptions({
  name: 'KmEmpty',
})
const props = withDefaults(defineProps<{
  icon?: string
  title?: string
  description?: string
  class?: HTMLAttributes['class']
}>(), {})
const slots = useSlots()
</script>

<template>
  <Empty :class="props.class">
    <EmptyHeader>
      <EmptyMedia :variant="slots.icon ? 'default' : 'icon'">
        <slot name="icon">
          <KmIcon v-if="props.icon" :name="props.icon" class="size-6" />
        </slot>
      </EmptyMedia>

      <EmptyTitle v-if="slots.title || props.title">
        <slot name="title">
          {{ title }}
        </slot>
      </EmptyTitle>

      <EmptyDescription v-if="slots.description || props.description">
        <slot name="description">
          {{ description }}
        </slot>
      </EmptyDescription>
    </EmptyHeader>

    <EmptyContent v-if="slots.default">
      <slot />
    </EmptyContent>
  </Empty>
</template>
