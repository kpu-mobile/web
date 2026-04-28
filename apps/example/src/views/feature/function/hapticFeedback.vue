<script setup lang="ts">
import { useWebHaptics } from 'web-haptics/vue'

// 数据列表
const list = [
  {
    type: 'success',
    title: 'Success',
    description: '轻快确认，适合完成操作时触发。',
    icon: 'i-ri:checkbox-circle-line',
    class: 'border-emerald-200 bg-gradient-to-br from-emerald-50 via-emerald-50 to-white text-emerald-700 dark:border-emerald-900 dark:from-emerald-950 dark:via-emerald-950 dark:to-background dark:text-emerald-300',
  },
  {
    type: 'nudge',
    title: 'Nudge',
    description: '轻微提示，用于引导或轻量提醒。',
    icon: 'i-ri:hand-heart-line',
    class: 'border-sky-200 bg-gradient-to-br from-sky-50 via-sky-50 to-white text-sky-700 dark:border-sky-900 dark:from-sky-950 dark:via-sky-950 dark:to-background dark:text-sky-300',
  },
  {
    type: 'error',
    title: 'Error',
    description: '更强的警示反馈，适合错误场景。',
    icon: 'i-ri:alarm-warning-line',
    class: 'border-rose-200 bg-gradient-to-br from-rose-50 via-rose-50 to-white text-rose-700 dark:border-rose-900 dark:from-rose-950 dark:via-rose-950 dark:to-background dark:text-rose-300',
  },
  {
    type: 'buzz',
    title: 'Buzz',
    description: '更明显的震动感，突出当前触发动作。',
    icon: 'i-ri:volume-vibrate-line',
    class: 'border-amber-200 bg-gradient-to-br from-amber-50 via-amber-50 to-white text-amber-700 dark:border-amber-900 dark:from-amber-950 dark:via-amber-950 dark:to-background dark:text-amber-300',
  },
]
const { trigger, isSupported } = useWebHaptics()
</script>

<template>
  <AppPageLayout navbar navbar-start-side="back">
    <div class="p-4 flex flex-col gap-4">
      <!-- 说明卡片 -->
      <KmPageMain class="m-0">
        <div
          class="text-xs font-medium px-3 py-1.5 rounded-full inline-block"
          :class="[
            isSupported
              ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300'
              : 'bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300',
          ]"
        >
          {{ isSupported ? '当前设备支持 Vibration API' : '当前环境不支持 Vibration API' }}
        </div>

        <div class="text-sm text-muted-foreground leading-6 mt-2">
          调用设备支持的触感反馈能力，快速体验不同反馈模式的触发效果。
        </div>

        <div class="text-xs text-muted-foreground leading-5 mt-2 px-3 py-2 rounded-lg bg-muted">
          不同浏览器和设备对触感反馈的支持程度不同，请在真机环境中体验更明显。
        </div>
      </KmPageMain>

      <!-- 反馈类型列表 -->
      <KmPageMain title="内置反馈" class="m-0">
        <div class="gap-3 grid grid-cols-2">
          <button
            v-for="item in list"
            :key="item.type"
            type="button"
            class="p-4 text-left border rounded-2xl transition-transform duration-200 active:scale-97" :class="[
              item.class,
            ]"
            @click="trigger(item.type)"
          >
            <div class="mb-3 flex gap-3 items-center justify-between">
              <div
                class="text-lg rounded-2xl bg-white/70 flex h-10 w-10 ring-1 ring-black/5 shadow-sm items-center justify-center dark:bg-white/8 dark:ring-white/8"
              >
                <KmIcon :name="item.icon" />
              </div>
              <div class="text-[11px] tracking-[0.14em] font-medium px-2.5 py-1 rounded-full bg-white/70 uppercase dark:bg-white/8">
                Tap
              </div>
            </div>

            <div class="text-base leading-none font-semibold">
              {{ item.title }}
            </div>
            <div class="text-xs text-current/75 leading-5 mt-2">
              {{ item.description }}
            </div>
          </button>
        </div>
      </KmPageMain>
    </div>
  </AppPageLayout>
</template>
