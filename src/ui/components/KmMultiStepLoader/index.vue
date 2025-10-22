<script setup lang="ts">
defineOptions({
  name: 'KmMultiStepLoader',
})

const props = withDefaults(defineProps<{
  loading?: boolean
  steps?: Step[]
  preventClose?: boolean
}>(), {
  loading: false,
  steps: () => [],
  preventClose: false,
})

const emits = defineEmits<{
  stateChange: [number]
  complete: []
  close: []
  error: [any, number]
}>()

export interface StepContext {
  [key: string]: any
}
export interface Step {
  text: string // 步骤文本
  afterText?: string // 步骤完成后的文本
  name?: string // 步骤返回数据对象名称
  action?: (context: StepContext) => Promise<any> // 步骤执行的函数
}

const currentStepIndex = ref(0)
const isCompleted = ref(false)
const stepContext = ref<Record<string, any>>({})
async function executeStep(step: Step) {
  if (typeof step.action == 'function') {
    try {
      const res = await step.action(stepContext.value)
      if (step.name) {
        stepContext.value[step.name] = res
      }
      return true
    }
    catch (error) {
      emits('error', error, currentStepIndex.value)
      return false
    }
  }
  return true
}
async function proceedToNextStep() {
  const step = props.steps[currentStepIndex.value]
  if (!step) {
    return
  }

  const passed = await executeStep(step) // 校验/处理当前步骤
  if (!passed) {
    return
  }

  if (currentStepIndex.value < props.steps.length - 1) {
    currentStepIndex.value++
    emits('stateChange', currentStepIndex.value)
    startCurrentStep()
  }
  else {
    isCompleted.value = true
    emits('complete')
  }
}

async function startCurrentStep() {
  props.steps[currentStepIndex.value] && await proceedToNextStep()
}
function handleClose() {
  emits('close')
}
watch(() => props.loading, (val) => {
  if (val) {
    currentStepIndex.value = 0
    isCompleted.value = false
    stepContext.value = {}
    startCurrentStep()
  }
})
</script>

<template>
  <Transition
    enter-active-class="transition-opacity duration-300"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity duration-300"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div v-if="loading && steps.length > 0" class="fixed inset-0 z-5000 size-full flex items-center justify-center backdrop-blur-2xl">
      <button
        v-show="!preventClose"
        class="absolute right-4 top-4 z-5001 h-9 inline-flex items-center justify-center whitespace-nowrap rounded-md bg-primary px-3 text-sm text-primary-foreground font-medium ring-offset-background transition-colors disabled:pointer-events-none hover:bg-primary/90 disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring"
        size="sm"
        @click="handleClose"
      >
        <KmIcon name="i-heroicons:x-mark" class="size-6" />
      </button>
      <div class="relative h-96">
        <div class="relative mx-auto mt-40 max-w-xl flex flex-col justify-start">
          <div v-for="(step, index) in steps" :key="index">
            <div
              class="mb-4 flex items-center gap-2 text-left transition-all duration-300 ease-in-out" :style="{
                opacity: index === currentStepIndex ? 1 : Math.max(1 - Math.abs(index - currentStepIndex) * .2, 0),
                transform: `translateY(${index === currentStepIndex ? -(currentStepIndex * 40) : -(currentStepIndex * 40)}px})` }"
            >
              <KmIcon v-if="index < currentStepIndex || index === props.steps.length - 1 && index === currentStepIndex && isCompleted" name="i-heroicons:check-circle-solid" class="size-6 text-primary" />

              <KmIcon v-else-if="index === currentStepIndex || (!isCompleted || index !== props.steps.length - 1)" name="i-heroicons:arrow-path" class="size-6 animate-spin text-primary" />
              <KmIcon v-else name="i-heroicons:check-circle" class="size-6 text-black opacity-50 dark:text-white" />
              <div class="flex flex-col">
                <span class="text-lg text-black dark:text-white" :class=" index === currentStepIndex && 'opacity-50'">{{ step.text }}</span>
                <Transition
                  enter-active-class="transition-all duration-300"
                  enter-from-class="opacity-0 -translate-y-1"
                  enter-to-class="opacity-100 translate-y-0"
                >
                  <span v-if="step.afterText && index < currentStepIndex || index === props.steps.length - 1 && index === currentStepIndex && isCompleted" class="text-sm text-black dark:text-white">
                    {{ step.afterText }}
                  </span>
                </Transition>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="[mask-image:radial-gradient(900px_at_center,hsl(var(--primary))_30%,transparent)] absolute inset-x-0 bottom-0 z--1 h-full bg-white bg-gradient-to-t dark:bg-black" />
    </div>
  </Transition>
</template>
