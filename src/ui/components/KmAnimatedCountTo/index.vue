<script lang="ts" setup>
import type { Format, Trend, Value } from 'number-flow'
import type { HTMLAttributes } from 'vue'
import NumberFlow from '@number-flow/vue'

const props = withDefaults(
  defineProps<
    {
      value: Value
      format?: Format
      locales?: Intl.LocalesArgument
      prefix?: string
      suffix?: string
      trend?: Trend
      transformTiming?: EffectTiming
      spinTiming?: EffectTiming
      opacityTiming?: EffectTiming
      willChange?: boolean
      class?: HTMLAttributes['class']
    }
  >(),
  {
  },
)

defineEmits(['animationsstart', 'animationsfinish'])
</script>

<template>
  <NumberFlow v-bind="props" @animationsstart="$emit('animationsstart', $event)" @animationsfinish="$emit('animationsfinish', $event)" />
</template>
