# KmCountTo 数字滚动组件

带动画效果的数字滚动组件，用于数据变化展示。

## 基础用法

```vue
<template>
  <KmCountTo :start-val="0" :end-val="1000" />
</template>
```

## Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `startVal` | `number` | **必需** | 起始值 |
| `endVal` | `number` | **必需** | 结束值 |
| `autoplay` | `boolean` | `true` | 是否自动开始 |
| `duration` | `number` | `2000` | 动画时长（毫秒） |
| `transition` | `string` | `'linear'` | 过渡效果名称 |
| `delay` | `number` | `0` | 延迟时间（毫秒） |
| `decimals` | `number` | `0` | 小数位数 |
| `separator` | `string` | `','` | 千分位分隔符 |
| `prefix` | `string` | `''` | 前缀 |
| `suffix` | `string` | `''` | 后缀 |

## Slots

无

## Events

| 事件名 | 参数 | 说明 |
|--------|------|------|
| `on-started` | - | 动画开始时触发 |
| `on-finished` | - | 动画结束时触发 |

## Exposed Methods

| 方法名 | 参数 | 说明 |
|--------|------|------|
| `start` | - | 开始动画 |
| `reset` | - | 重置到起始值 |

## 过渡效果

支持的过渡效果（来自 `@vueuse/core` 的 `TransitionPresets`）：

- `linear` - 线性
- `easeInQuad` - 二次方缓入
- `easeOutQuad` - 二次方缓出
- `easeInOutQuad` - 二次方缓入缓出
- `easeInCubic` - 三次方缓入
- `easeOutCubic` - 三次方缓出
- `easeInOutCubic` - 三次方缓入缓出
- `easeInQuart` - 四次方缓入
- `easeOutQuart` - 四次方缓出
- `easeInOutQuart` - 四次方缓入缓出
- 等...

## 示例

### 基础数字滚动

```vue
<template>
  <KmCountTo :start-val="0" :end-val="100" />
</template>
```

### 带千分位分隔符

```vue
<template>
  <KmCountTo :start-val="0" :end-val="1000000" separator="," />
</template>
```

### 带小数

```vue
<template>
  <KmCountTo :start-val="0" :end-val="100" :decimals="2" />
</template>
```

### 带前后缀

```vue
<template>
  <KmCountTo :start-val="0" :end-val="100" prefix="¥" suffix="元" />
  <KmCountTo :start-val="0" :end-val="100" suffix="%" />
</template>
```

### 自定义动画时长

```vue
<template>
  <KmCountTo :start-val="0" :end-val="100" :duration="3000" />
</template>
```

### 使用缓动效果

```vue
<template>
  <KmCountTo :start-val="0" :end-val="100" transition="easeOutExpo" />
</template>
```

### 手动控制

```vue
<script setup lang="ts">
const countRef = ref<InstanceType<typeof KmCountTo>>()
const endVal = ref(100)

function handleStart() {
  countRef.value?.start()
}

function handleReset() {
  countRef.value?.reset()
  setTimeout(() => {
    countRef.value?.start()
  }, 100)
}
</script>

<template>
  <div class="space-y-4">
    <KmCountTo ref="countRef" :start-val="0" :end-val="endVal" />
    <div class="flex gap-2">
      <KmButton @click="handleStart">开始</KmButton>
      <KmButton @click="handleReset">重置</KmButton>
    </div>
  </div>
</template>
```

### 数据看板

```vue
<template>
  <div class="grid grid-cols-4 gap-4">
    <KmCard title="总用户数">
      <KmCountTo :start-val="0" :end-val="123456" class="text-3xl font-bold text-primary" />
    </KmCard>
    <KmCard title="今日访问">
      <KmCountTo :start-val="0" :end-val="8888" class="text-3xl font-bold text-green-600" />
    </KmCard>
    <KmCard title="订单总数">
      <KmCountTo :start-val="0" :end-val="56789" separator="," class="text-3xl font-bold text-blue-600" />
    </KmCard>
    <KmCard title="销售额">
      <KmCountTo :start-val="0" :end-val="999999" prefix="¥" separator="," class="text-3xl font-bold text-purple-600" />
    </KmCard>
  </div>
</template>
```

### 监听事件

```vue
<script setup lang="ts">
const loading = ref(false)

function handleStarted() {
  console.log('动画开始')
  loading.value = true
}

function handleFinished() {
  console.log('动画结束')
  loading.value = false
}
</script>

<template>
  <div>
    <KmCountTo 
      :start-val="0" 
      :end-val="1000"
      @on-started="handleStarted"
      @on-finished="handleFinished"
    />
    <KmLoading v-if="loading" />
  </div>
</template>
```

### 动态更新

```vue
<script setup lang="ts">
const sales = ref(0)

// 模拟实时数据
onMounted(() => {
  setInterval(() => {
    sales.value += Math.floor(Math.random() * 100)
  }, 3000)
})
</script>

<template>
  <div class="text-center">
    <p class="text-muted-foreground">实时销售额</p>
    <KmCountTo :start-val="0" :end-val="sales" prefix="¥" class="text-4xl font-bold" />
  </div>
</template>
```

## 注意事项

1. **自动播放**：默认 `autoplay` 为 `true`，组件挂载后自动开始动画
2. **值变化**：`endVal` 变化时会自动重新播放动画
3. **格式化**：支持小数位数、千分位分隔符、前后缀
4. **过渡效果**：可使用多种缓动函数实现不同动画效果

## 典型使用场景

- 数据看板指标展示
- 销售数据实时展示
- 用户数/访问量统计
- 倒计时/计时器
- 成绩/分数展示
- 进度百分比展示
