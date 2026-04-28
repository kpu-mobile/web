<script lang="ts" setup>
import { cn } from '../../utils'

const props = defineProps({
  title: {
    type: null,
    default: null,
  },
  icon: {
    type: null,
    default: null,
  },
  digital: {
    type: null,
    default: null,
  },
  description: {
    type: null,
    default: null,
  },
  trend: {
    type: null,
    default: null,
  },
  class: {
    type: null,
    default: null,
  },
})

const trendIcon = computed(() => {
  switch (props.trend) {
    case 'up':
      return 'i-material-symbols:trending-up'
    case 'stable':
      return 'i-material-symbols:trending-flat'
    case 'down':
      return 'i-material-symbols:trending-down'
    default:
      return ''
  }
})
</script>

<template>
  <KmCard :class="cn('w-full', props.class)" header-class="pb-2" footer-class="flex flex-col items-start gap-y-1">
    <template #header>
      <div class="flex flex-row gap-y-1.5 items-center justify-between space-y-0">
        <h3 class="text-sm tracking-tight font-medium flex-center-start gap-x-1">
          {{ title }}
        </h3>
        <template v-if="icon">
          <KmIcon :name="icon" class="text-muted-foreground" />
        </template>
      </div>
    </template>
    <template #footer>
      <div class="text-2xl font-bold flex-center-start gap-x-1">
        {{ digital }}
        <template v-if="trendIcon">
          <KmIcon :name="trendIcon" />
        </template>
      </div>
      <template v-if="description">
        <p class="text-sm text-gray-500">
          {{ description }}
        </p>
      </template>
    </template>
  </KmCard>
</template>
