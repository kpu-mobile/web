# KmPatternBg 图案背景

带有几何图案的背景组件，支持多种图案样式和动画效果。

## 基础用法

```vue
<template>
  <KmPatternBg>
    <div class="p-6">
      内容
    </div>
  </KmPatternBg>
</template>
```

## 图案类型

```vue
<template>
  <!-- 网格图案 -->
  <KmPatternBg variant="grid" />

  <!-- 点状图案 -->
  <KmPatternBg variant="dots" />

  <!-- 线条图案 -->
  <KmPatternBg variant="lines" />
</template>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| variant | 图案类型 | `'grid' \| 'dots' \| 'lines'` | `'grid'` |
| size | 图案尺寸 | `'sm' \| 'md' \| 'lg'` | `'md'` |
| mask | 遮罩形状 | `'ellipse' \| 'circle' \| 'none'` | `'ellipse'` |
| animate | 是否动画 | `boolean` | `false` |
| direction | 动画方向 | `'top' \| 'bottom' \| 'left' \| 'right' \| 'top-right' \| 'top-left' \| 'bottom-right' \| 'bottom-left'` | `'top'` |
| speed | 动画速度 (ms) | `number` | `10000` |
| class | 自定义类名 | `HTMLAttributes['class']` | `undefined` |

### Slots

| 名称 | 说明 |
|------|------|
| default | 默认插槽，放置内容 |

## 示例

### 网格背景

```vue
<template>
  <KmPatternBg variant="grid" size="md" class="h-96">
    <div class="flex items-center justify-center h-full">
      <h2 class="text-2xl font-bold">网格背景</h2>
    </div>
  </KmPatternBg>
</template>
```

### 点状背景

```vue
<template>
  <KmPatternBg variant="dots" size="sm" class="h-64">
    <div class="p-6">
      <h3>点状图案</h3>
    </div>
  </KmPatternBg>
</template>
```

### 动画背景

```vue
<template>
  <KmPatternBg
    variant="grid"
    :animate="true"
    direction="top-right"
    :speed="15000"
  />
</template>
```

### 圆形遮罩

```vue
<template>
  <KmPatternBg mask="circle" variant="grid">
    <div class="p-6">
      圆形遮罩图案背景
    </div>
  </KmPatternBg>
</template>
```
