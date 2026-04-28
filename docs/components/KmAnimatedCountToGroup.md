# KmAnimatedCountToGroup 数字动画组

用于包裹多个 KmAnimatedCountTo 组件，使多个数字动画同步执行。

## 基础用法

```vue
<template>
  <KmAnimatedCountToGroup>
    <div class="stat-item">
      <KmAnimatedCountTo :value="1000" />
    </div>
    <div class="stat-item">
      <KmAnimatedCountTo :value="2000" />
    </div>
    <div class="stat-item">
      <KmAnimatedCountTo :value="3000" />
    </div>
  </KmAnimatedCountToGroup>
</template>
```

## API

### Props

无

### Slots

| 名称 | 说明 |
|------|------|
| default | 默认插槽，放置多个 KmAnimatedCountTo 组件 |

## 示例

### 统计数据面板

```vue
<script setup lang="ts">
const stats = [
  { label: '总访问量', value: 1234567 },
  { label: '今日访问', value: 8765 },
  { label: '在线用户', value: 432 },
]
</script>

<template>
  <KmCard>
    <KmAnimatedCountToGroup>
      <div class="grid grid-cols-3 gap-4">
        <div v-for="stat in stats" :key="stat.label" class="text-center">
          <div class="text-3xl font-bold text-primary">
            <KmAnimatedCountTo :value="stat.value" />
          </div>
          <div class="text-sm text-muted-foreground mt-1">{{ stat.label }}</div>
        </div>
      </div>
    </KmAnimatedCountToGroup>
  </KmCard>
</template>
```

### 仪表盘数据

```vue
<template>
  <div class="flex items-baseline gap-2">
    <KmAnimatedCountToGroup>
      <span class="text-4xl font-bold">
        <KmAnimatedCountTo :value="98.5" :format="{ minimumFractionDigits: 1, maximumFractionDigits: 1 }" />
      </span>
      <span class="text-xl">%</span>
    </KmAnimatedCountToGroup>
  </div>
</template>
```
