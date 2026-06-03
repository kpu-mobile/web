# KmAnimatedCountTo 数字动画

数字滚动动画组件，基于 @number-flow/vue 实现平滑的数字过渡效果。

## 基础用法

```vue
<script setup lang="ts">
const value = ref(1000)
</script>

<template>
  <KmAnimatedCountTo :value="value" />
</template>
```

## 使用格式

```vue
<template>
  <!-- 货币格式 -->
  <KmAnimatedCountTo :value="1234.56" :format="{ style: 'currency', currency: 'CNY' }" />

  <!-- 百分比格式 -->
  <KmAnimatedCountTo :value="0.75" :format="{ style: 'percent' }" />

  <!-- 带前缀后缀 -->
  <KmAnimatedCountTo :value="100" prefix="¥" suffix=" 元" />
</template>
```

## 组合使用

```vue
<template>
  <KmAnimatedCountToGroup>
    <div>
      <KmAnimatedCountTo :value="100" />
    </div>
    <div>
      <KmAnimatedCountTo :value="200" />
    </div>
  </KmAnimatedCountToGroup>
</template>
```

## API

### KmAnimatedCountTo Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| value | 要显示的值 | `Value` | `required` |
| format | 数字格式配置 | `Format` | `undefined` |
| locales | 区域设置 | `string` | `undefined` |
| prefix | 前缀 | `string` | `undefined` |
| suffix | 后缀 | `string` | `undefined` |
| trend | 趋势标识 | `1 \| 0 \| -1` | `undefined` |
| transformTiming | 变换动画时机 | `EffectTiming` | `undefined` |
| spinTiming | 旋转动画时机 | `EffectTiming` | `undefined` |
| opacityTiming | 透明度动画时机 | `EffectTiming` | `undefined` |
| willChange | 是否优化性能 | `boolean` | `false` |
| class | 自定义类名 | `HTMLAttributes['class']` | `undefined` |

### KmAnimatedCountTo Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| animationsstart | 动画开始时触发 | `-` |
| animationsfinish | 动画结束时触发 | `-` |

### KmAnimatedCountToGroup

| 属性 | 说明 |
|------|------|
| 无 props | 仅用于包裹多个 KmAnimatedCountTo 组件 |

## 示例

### 数据统计卡片

```vue
<script setup lang="ts">
const stats = ref([
  { label: '用户数', value: 12345 },
  { label: '订单数', value: 8765 },
  { label: '销售额', value: 987654.32 },
])
</script>

<template>
  <div class="grid grid-cols-3 gap-4">
    <div v-for="stat in stats" :key="stat.label" class="text-center">
      <div class="text-2xl font-bold">
        <KmAnimatedCountTo
          :value="stat.value"
          :format="stat.label === '销售额' ? { style: 'currency', currency: 'CNY' } : undefined"
        />
      </div>
      <div class="text-sm text-muted-foreground">{{ stat.label }}</div>
    </div>
  </div>
</template>
```

### 带趋势标识

```vue
<template>
  <div class="flex items-center gap-2">
    <KmAnimatedCountTo :value="1234" :trend="1" />
    <KmIcon name="i-material-symbols:trending-up" class="text-green-500" />
  </div>
</template>
```
