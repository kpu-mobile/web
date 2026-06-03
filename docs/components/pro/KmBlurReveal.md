# KmBlurReveal 模糊显现

元素进入视口时以模糊渐变的方式显现的动画组件。

## 基础用法

```vue
<template>
  <KmBlurReveal>
    <h1>模糊显现效果</h1>
    <p>滚动到可视区域时显示</p>
  </KmBlurReveal>
</template>
```

## 多元素依次显现

```vue
<template>
  <KmBlurReveal :delay="0.2">
    <div v-for="i in 3" :key="i">
      <p>内容 {{ i }}</p>
    </div>
  </KmBlurReveal>
</template>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| duration | 动画持续时间 (秒) | `number` | `1` |
| delay | 每个元素延迟时间 (秒) | `number` | `1` |
| blur | 模糊强度 | `string` | `'20px'` |
| yOffset | Y 轴偏移距离 (px) | `number` | `20` |
| class | 自定义类名 | `HTMLAttributes['class']` | `undefined` |

### Slots

| 名称 | 说明 |
|------|------|
| default | 默认插槽，放置要显示的内容 |

## 示例

### 标题淡入

```vue
<template>
  <KmBlurReveal :duration="1.5" :blur="10">
    <h1 class="text-4xl font-bold">
      欢迎访问我们的网站
    </h1>
  </KmBlurReveal>
</template>
```

### 列表项依次显现

```vue
<template>
  <KmBlurReveal :delay="0.3" :yOffset="30">
    <div v-for="item in features" :key="item.id" class="feature-item">
      <KmIcon :name="item.icon" />
      <span>{{ item.title }}</span>
    </div>
  </KmBlurReveal>
</template>

<script setup lang="ts">
const features = [
  { id: 1, icon: 'i-heroicons:star', title: '特性 1' },
  { id: 2, icon: 'i-heroicons:heart', title: '特性 2' },
  { id: 3, icon: 'i-heroicons:shield-check', title: '特性 3' },
]
</script>
```

### 卡片组显现

```vue
<template>
  <KmBlurReveal :duration="0.8" :delay="0.2">
    <KmCard v-for="i in 3" :key="i" class="p-4">
      <h4 class="font-bold">卡片 {{ i }}</h4>
      <p class="text-muted-foreground text-sm mt-2">内容描述</p>
    </KmCard>
  </KmBlurReveal>
</template>
```
