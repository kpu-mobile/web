# KmGradientButton 渐变按钮

带有彩虹渐变边框动画效果的按钮组件。

## 基础用法

```vue
<template>
  <KmGradientButton>
    渐变按钮
  </KmGradientButton>
</template>
```

## 自定义颜色

```vue
<template>
  <KmGradientButton
    :colors="['#ff0000', '#ffff00', '#00ff00', '#00ffff', '#0000ff', '#ff00ff', '#ff0000']"
    :duration="3000"
  >
    自定义渐变
  </KmGradientButton>
</template>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| colors | 渐变颜色数组 | `string[]` | 彩虹七色 |
| duration | 动画周期 (ms) | `number` | `2500` |
| class | 外层容器类名 | `HTMLAttributes['class']` | `undefined` |
| contentClass | 内容区域类名 | `HTMLAttributes['class']` | `undefined` |

### Slots

| 名称 | 说明 |
|------|------|
| default | 默认插槽，按钮内容 |

## 示例

### 彩虹按钮

```vue
<template>
  <KmGradientButton>
    <span class="px-6 py-2">彩虹按钮</span>
  </KmGradientButton>
</template>
```

### 蓝色主题

```vue
<template>
  <KmGradientButton
    :colors="['#3b82f6', '#60a5fa', '#93c5fd', '#3b82f6']"
    :duration="2000"
  >
    <span class="px-6 py-2">蓝色渐变</span>
  </KmGradientButton>
</template>
```

### 火焰主题

```vue
<template>
  <KmGradientButton
    :colors="['#ff4500', '#ff6347', '#ffa500', '#ff4500']"
    :duration="1500"
  >
    <span class="px-6 py-2">火焰效果</span>
  </KmGradientButton>
</template>
```

### 带图标按钮

```vue
<template>
  <KmGradientButton>
    <div class="flex items-center gap-2 px-6 py-2">
      <KmIcon name="i-heroicons:sparkles" />
      <span>开始使用</span>
    </div>
  </KmGradientButton>
</template>
```

### 大尺寸按钮

```vue
<template>
  <KmGradientButton
    content-class="px-8 py-3 text-lg font-bold"
    :duration="2000"
  >
    立即注册
  </KmGradientButton>
</template>
```
