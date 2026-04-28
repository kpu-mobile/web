# KmSmoothSwipe 平滑滑动

支持平滑切换动画的内容滑动组件，适用于选项卡、步骤切换等场景。

## 基础用法

```vue
<script setup lang="ts">
const activeIndex = ref(0)
</script>

<template>
  <KmButtonGroup>
    <KmButton
      v-for="i in 4"
      :key="i"
      :variant="activeIndex === i - 1 ? 'default' : 'outline'"
      @click="activeIndex = i - 1"
    >
      选项 {{ i }}
    </KmButton>
  </KmButtonGroup>

  <KmSmoothSwipe :active-index="activeIndex">
    <div v-for="i in 4" :key="i" class="p-4">
      内容 {{ i }}
    </div>
  </KmSmoothSwipe>
</template>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| activeIndex | 当前激活的索引 | `number` | `required` |

### Slots

| 名称 | 说明 |
|------|------|
| default | 默认插槽，放置多个内容块 |

## 示例

### 选项卡切换

```vue
<script setup lang="ts">
const tabs = ['首页', '产品', '关于', '联系']
const activeIndex = ref(0)
</script>

<template>
  <div class="border-b">
    <div class="flex gap-2">
      <button
        v-for="(tab, index) in tabs"
        :key="tab"
        :class="[
          'px-4 py-2 transition-colors',
          activeIndex === index
            ? 'text-primary border-b-2 border-primary'
            : 'text-muted-foreground hover:text-foreground'
        ]"
        @click="activeIndex = index"
      >
        {{ tab }}
      </button>
    </div>
  </div>

  <KmSmoothSwipe :active-index="activeIndex">
    <div v-for="tab in tabs" :key="tab" class="p-4 min-h-48">
      <h3 class="text-lg font-bold">{{ tab }}</h3>
      <p class="text-muted-foreground mt-2">{{ tab }}的内容区域</p>
    </div>
  </KmSmoothSwipe>
</template>
```

### 步骤表单

```vue
<script setup lang="ts">
const currentStep = ref(0)
const steps = ['基本信息', '详细信息', '确认提交']

function next() {
  if (currentStep.value < steps.length - 1) {
    currentStep.value++
  }
}

function prev() {
  if (currentStep.value > 0) {
    currentStep.value--
  }
}
</script>

<template>
  <div class="flex gap-2 mb-4">
    <span
      v-for="(step, index) in steps"
      :key="step"
      :class="[
        'text-sm',
        currentStep === index ? 'text-primary font-bold' : 'text-muted-foreground'
      ]"
    >
      {{ step }}
    </span>
  </div>

  <KmSmoothSwipe :active-index="currentStep">
    <div v-for="step in steps" :key="step" class="p-4 border rounded-lg">
      <h4 class="font-bold mb-2">{{ step }}</h4>
      <!-- 表单内容 -->
    </div>
  </KmSmoothSwipe>

  <div class="flex gap-2 mt-4">
    <KmButton @click="prev" :disabled="currentStep === 0">上一步</KmButton>
    <KmButton @click="next" :disabled="currentStep === steps.length - 1">
      {{ currentStep === steps.length - 1 ? '提交' : '下一步' }}
    </KmButton>
  </div>
</template>
```

### 图片展示

```vue
<script setup lang="ts">
const activeIndex = ref(0)
const images = [
  { src: '/img1.jpg', title: '图片 1' },
  { src: '/img2.jpg', title: '图片 2' },
  { src: '/img3.jpg', title: '图片 3' },
]
</script>

<template>
  <div class="relative">
    <KmSmoothSwipe :active-index="activeIndex">
      <div v-for="(img, index) in images" :key="img.src" class="relative">
        <img :src="img.src" class="w-full h-64 object-cover rounded-lg" />
        <div class="absolute bottom-0 left-0 right-0 p-2 bg-black/50 text-white rounded-b-lg">
          {{ img.title }}
        </div>
      </div>
    </KmSmoothSwipe>

    <div class="flex justify-center gap-2 mt-4">
      <KmButton
        v-for="(_, index) in images"
        :key="index"
        size="sm"
        :variant="activeIndex === index ? 'default' : 'outline'"
        @click="activeIndex = index"
      >
        {{ index + 1 }}
      </KmButton>
    </div>
  </div>
</template>
```
