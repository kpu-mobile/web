# KmScratchOff 刮刮乐

可刮开涂层查看内容的互动组件，支持鼠标和触摸操作。

## 基础用法

```vue
<script setup lang="ts">
function handleComplete() {
  faToast.success('恭喜你刮中了！')
}
</script>

<template>
  <KmScratchOff
    :width="200"
    :height="200"
    @complete="handleComplete"
  >
    <div class="flex items-center justify-center h-full text-4xl">
      🎁
    </div>
  </KmScratchOff>
</template>
```

## 自定义涂层颜色

```vue
<template>
  <KmScratchOff
    :width="250"
    :height="250"
    :gradient-colors="['#ffd700', '#ffec8b', '#ffd700']"
    :min-scratch-percentage="30"
  >
    <div class="flex items-center justify-center h-full">
      ¥ 100
    </div>
  </KmScratchOff>
</template>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| width | 宽度 (px) | `number` | `required` |
| height | 高度 (px) | `number` | `required` |
| minScratchPercentage | 最小刮开百分比触发完成 | `number` | `50` |
| gradientColors | 涂层渐变颜色数组 | `[string, string, string]` | `['#A97CF8', '#F38CB8', '#FDCC92']` |
| class | 自定义类名 | `HTMLAttributes['class']` | `undefined` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| complete | 刮开完成时触发 | `-` |

### Slots

| 名称 | 说明 |
|------|------|
| default | 默认插槽，刮开后显示的内容 |

## 示例

### 抽奖活动

```vue
<script setup lang="ts">
const prizes = ['🎉 谢谢参与', '🎁 一等奖', '🎊 二等奖', '🎈 三等奖']
const currentPrize = ref(prizes[Math.floor(Math.random() * prizes.length)])

function handleComplete() {
  faToast.success(currentPrize.value)
}
</script>

<template>
  <div class="text-center">
    <h3 class="text-lg font-bold mb-4">幸运大抽奖</h3>
    <KmScratchOff
      :width="200"
      :height="200"
      :min-scratch-percentage="50"
      class="mx-auto border-2 rounded-xl bg-gray-100 flex items-center justify-center overflow-hidden"
      @complete="handleComplete"
    >
      <div class="text-6xl">{{ currentPrize.split(' ')[0] }}</div>
    </KmScratchOff>
  </div>
</template>
```

### 优惠券展示

```vue
<template>
  <KmScratchOff
    :width="300"
    :height="120"
    :min-scratch-percentage="30"
    :gradient-colors="['#ff6b6b', '#ff8e8e', '#ff6b6b']"
    class="rounded-lg flex items-center justify-center"
  >
    <div class="flex items-center gap-4 px-6">
      <div class="text-3xl font-bold text-red-600">
        ¥50
      </div>
      <div>
        <div class="font-bold">满减优惠券</div>
        <div class="text-sm text-muted-foreground">
          满 200 元可用
        </div>
      </div>
    </div>
  </KmScratchOff>
</template>
```

### 节日贺卡

```vue
<script setup lang="ts">
function onComplete() {
  faToast.success('新年快乐！🎊')
}
</script>

<template>
  <KmScratchOff
    :width="280"
    :height="280"
    :gradient-colors="['#dc2626', '#ef4444', '#f87171']"
    class="rounded-xl flex items-center justify-center bg-white"
    @complete="onComplete"
  >
    <div class="text-center">
      <div class="text-5xl mb-2">🧧</div>
      <div class="text-xl font-bold">新年快乐</div>
      <div class="text-sm text-muted-foreground mt-1">
        恭喜发财 万事如意
      </div>
    </div>
  </KmScratchOff>
</template>
```
