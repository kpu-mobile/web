<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'
import { cn } from '../../utils'

defineOptions({
  name: 'KmScrollingText',
})

const props = withDefaults(defineProps<{
  items?: string[]
  visibleCount?: number
  duration?: number
  transition?: number
  animation?: 'slide' | 'fade'
  direction?: 'up' | 'down'
  class?: HTMLAttributes['class']
  itemClass?: HTMLAttributes['class']

}>(), {
  items: () => [],
  visibleCount: 1,
  duration: 3000,
  transition: 500,
  animation: 'slide',
  direction: 'up',
  class: '',
  itemClass: '',
})

const emit = defineEmits<{
  (e: 'itemClick', text: string, index: number): void
}>()

// 响应式变量
const currentIndex = ref(0)
const isTransitioning = ref(false)
const isPaused = ref(false)
const containerRef = ref<HTMLDivElement | null>(null)
const firstItemRef = ref<Element | ComponentPublicInstance | null>(null)
const itemHeight = ref(0)
const translateY = ref(0)
let animationTimer: ReturnType<typeof setTimeout> | null = null
let resizeObserver: ResizeObserver | null = null

// 计算属性
const slots = useSlots()
const hasItem = computed(() => !!slots.item)
const singleItemHeight = computed(() => hasItem.value && itemHeight.value ? itemHeight.value : containerRef.value ? containerRef.value.clientHeight / props.visibleCount : 0)
const containerStyle = computed(() => hasItem.value && itemHeight.value
  ? {
      height: `${itemHeight.value * props.visibleCount}px`,
    }
  : {})

// 显示的条目列表
const displayItems = computed(() => {
  if (!props.items.length) {
    return []
  }

  return props.direction === 'down'
    ? Array.from({ length: props.visibleCount * 2 }, (_, idx) => {
        const realIndex = (currentIndex.value - props.visibleCount + idx + props.items.length) % props.items.length
        return {
          text: props.items[realIndex],
          originalIndex: realIndex,
        }
      })
    : Array.from({ length: props.visibleCount * 2 }, (_, idx) => ({
        text: props.items[(currentIndex.value + idx) % props.items.length],
        originalIndex: (currentIndex.value + idx) % props.items.length,
      }))
})

// 滑动样式
const slideStyle = computed(() => ({
  transform: `translateY(${translateY.value}px)`,
  transition: isTransitioning.value ? `transform ${props.transition}ms ease` : 'none',
}))

// 淡入淡出样式
const fadeStyle = computed(() => ({
  opacity: isTransitioning.value ? 0 : 1,
  transition: `opacity ${props.transition}ms ease`,
}))

// 单个条目样式
const itemStyle = computed(() => {
  if (hasItem.value && itemHeight.value) {
    return { height: `${itemHeight.value}px` }
  }
  return { height: `${100 / props.visibleCount}%` }
})

// 核心动画逻辑
function animate() {
  if (isPaused.value) {
    return
  }

  if (props.animation === 'slide') {
    if (props.direction === 'up') {
      // 向上滑动
      isTransitioning.value = true
      translateY.value = -(singleItemHeight.value * props.visibleCount)
      animationTimer = setTimeout(() => {
        if (!isPaused.value) {
          isTransitioning.value = false
          translateY.value = 0
          currentIndex.value = (currentIndex.value + props.visibleCount) % props.items.length
          scheduleNextAnimation()
        }
      }, props.transition)
    }
    else {
      // 向下滑动
      isTransitioning.value = false
      translateY.value = -(singleItemHeight.value * props.visibleCount)
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (!isPaused.value) {
            isTransitioning.value = true
            translateY.value = 0
            animationTimer = setTimeout(() => {
              if (!isPaused.value) {
                isTransitioning.value = false
                translateY.value = -(singleItemHeight.value * props.visibleCount)
                currentIndex.value = (currentIndex.value - props.visibleCount + props.items.length) % props.items.length
                scheduleNextAnimation()
              }
            }, props.transition)
          }
        })
      })
    }
  }
  else {
    // 淡入淡出动画
    isTransitioning.value = true
    animationTimer = setTimeout(() => {
      if (!isPaused.value) {
        currentIndex.value = props.direction === 'up'
          ? (currentIndex.value + props.visibleCount) % props.items.length
          : (currentIndex.value - props.visibleCount + props.items.length) % props.items.length

        nextTick(() => {
          isTransitioning.value = false
          scheduleNextAnimation()
        })
      }
    }, props.transition)
  }
}

// 调度下一次动画
function scheduleNextAnimation() {
  animationTimer = setTimeout(animate, props.duration)
}

// 暂停动画
function pauseAnimation() {
  isPaused.value = true
  if (animationTimer) {
    clearTimeout(animationTimer)
    animationTimer = null
  }
  isTransitioning.value = false
  translateY.value = 0
}

// 恢复动画
function resumeAnimation() {
  isPaused.value = false
  if (animationTimer) {
    clearTimeout(animationTimer)
  }
  scheduleNextAnimation()
}

// 处理条目点击
function handleItemClick(text: string, index: number) {
  emit('itemClick', text, index)
}

// 监听items变化
watch(() => props.items, () => {
  currentIndex.value = 0
  if (animationTimer) {
    clearTimeout(animationTimer)
  }
  if (props.items.length > props.visibleCount) {
    scheduleNextAnimation()
  }
})

// 挂载时初始化
onMounted(() => {
  if (props.items.length > props.visibleCount) {
    scheduleNextAnimation()
  }

  // 监听元素尺寸变化
  resizeObserver = new ResizeObserver((entries) => {
    const height = entries[0]?.contentRect.height
    if (height) {
      itemHeight.value = height
    }
  })

  watch(() => firstItemRef.value, (el) => {
    if (resizeObserver) {
      resizeObserver.disconnect()
    }
    if (el) {
      resizeObserver?.observe(el as Element)
    }
  }, { immediate: true })
})

// 卸载时清理
onUnmounted(() => {
  if (animationTimer) {
    clearTimeout(animationTimer)
  }
  if (resizeObserver) {
    resizeObserver.disconnect()
  }
})
</script>

<template>
  <div
    ref="containerRef"
    :class="cn('relative overflow-hidden h-8', props.class)"
    :style="containerStyle"
    @mouseenter="pauseAnimation"
    @mouseleave="resumeAnimation"
  >
    <!-- 滑动动画 -->
    <div
      v-if="animation === 'slide'"
      class="h-full"
      :style="slideStyle"
    >
      <div
        v-for="(item, index) in displayItems" :key="`${index}-${item.originalIndex}`"
        :ref="el => { index === 0 && (firstItemRef = el) }"
        class="flex items-center" :class="[$attrs.onItemClick ? 'cursor-pointer' : '', itemClass]"
        :style="itemStyle"
        @click="handleItemClick(item.text, item.originalIndex)"
      >
        <slot name="item" :item="item.text" :index="item.originalIndex">
          {{ item.text }}
        </slot>
      </div>
    </div>

    <!-- 淡入淡出动画 -->
    <div
      v-else
      class="h-full"
      :style="fadeStyle"
    >
      <template v-for="(item, index) in displayItems.slice(0, visibleCount)" :key="item.originalIndex">
        <div
          :ref="el => index === 0 && (firstItemRef = el)"
          class="flex items-center" :class="[$attrs.onItemClick ? 'cursor-pointer' : '', itemClass]"
          :style="itemStyle"
          @click="handleItemClick(item.text, item.originalIndex)"
        >
          <slot name="item" :item="item.text" :index="item.originalIndex">
            {{ item.text }}
          </slot>
        </div>
      </template>
    </div>
  </div>
</template>
