<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/utils'
import dayjs from '@/utils/dayjs.ts'

interface TimelineItem extends Record<string, any> {
  datetime?: string
  content?: string
  name?: string
}
const props = withDefaults(
  defineProps<{
    class?: HTMLAttributes['class']
    merge?: boolean
    data?: TimelineItem[]
  }>(),
  {
    data: () => [],
    merge: false,
  },
)
const timelineItems = useTemplateRef<HTMLDivElement[]>('timelineItems')
const scrollTop = ref(0)

// 当前激活的时间线索引
const currentIndex = computed(() => {
  const offsets = timelineItems.value?.map(item => item?.offsetTop - 60 || 0)
  return (offsets?.findIndex(offset => offset > scrollTop.value) ?? 1) - 1
})

// 格式化日期函数
const getYear = (datetime?: string) => Number(dayjs(datetime).format('YYYY'))
const getMonth = (datetime?: string) => Number(dayjs(datetime).format('MM'))
const getDay = (datetime?: string) => Number(dayjs(datetime).format('DD'))

// 当前顶部显示的日期
const currentYear = computed(() => getYear(props.data[currentIndex.value]?.datetime || ''))
const currentMonth = computed(() => getMonth(props.data[currentIndex.value]?.datetime || ''))
const currentDay = computed(() => getDay(props.data[currentIndex.value]?.datetime || ''))

// 处理滚动事件
function handleScroll(event: Event) {
  scrollTop.value = (event.target as HTMLElement)?.scrollTop
}
</script>

<template>
  <KmScrollArea
    :content-class="cn('relative w-full', props.class)"
    @on-scroll="handleScroll"
  >
    <!-- 顶部日期显示 -->
    <div class="absolute top-0 z-1 w-20 flex-col-center-start p-2 backdrop-blur">
      <KmAnimatedCountTo
        :value="currentYear"
        will-change
        :format="{ notation: 'compact' }"
        class="text-lg font-bold opacity-20"
      />
      <div class="flex items-center">
        <KmAnimatedCountToGroup>
          <KmAnimatedCountTo
            :value="currentMonth"
            will-change
            :format="{ minimumIntegerDigits: 2, notation: 'compact' }"
            suffix="/"
            class="text-xl font-bold"
          />
          <KmAnimatedCountTo
            :value="currentDay"
            will-change
            :format="{ minimumIntegerDigits: 2, notation: 'compact' }"
            class="text-xl font-bold"
          />
        </KmAnimatedCountToGroup>
      </div>
    </div>

    <!-- 时间线内容 -->
    <div class="w-full flex flex-col gap-4">
      <div
        v-for="(item, index) in data"
        :key="index"
        ref="timelineItems"
        class="flex gap-4"
      >
        <!-- 左侧日期 -->
        <div
          class="w-20 flex-col-center-start p-2 transition-all" :class="[
            {
              'opacity-0 -translate-y-10': index <= currentIndex,
              'opacity-0': merge && index > 0 && item.datetime === data[index - 1].datetime,
            },
          ]"
        >
          <KmAnimatedCountTo
            :value="getYear(item.datetime)"
            :format="{ notation: 'compact' }"
            class="text-lg font-bold opacity-20"
          />
          <div class="flex items-center">
            <KmAnimatedCountTo
              :value="getMonth(item.datetime)"
              :format="{ minimumIntegerDigits: 2, notation: 'compact' }"
              suffix="/"
              class="text-xl font-bold"
            />
            <KmAnimatedCountTo
              :value="getDay(item.datetime)"
              :format="{ minimumIntegerDigits: 2, notation: 'compact' }"
              class="text-xl font-bold"
            />
          </div>
        </div>

        <!-- 右侧内容 -->
        <div class="flex-1">
          <slot :item="item" />
        </div>
      </div>
    </div>
  </KmScrollArea>
</template>

<style scoped>
number-flow-vue::part(suffix) {
  padding-inline: 0.5rem;
  font-size: 1.5rem;
  font-weight: 400;
  color: hsl(var(--muted-foreground) / 60%);
}
</style>
