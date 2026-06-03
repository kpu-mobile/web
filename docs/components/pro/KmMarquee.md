# KmMarquee 滚动横幅

无限滚动的内容展示组件，支持水平/垂直滚动和悬停暂停。

## 基础用法

```vue
<template>
  <KmMarquee>
    <div v-for="i in 5" :key="i" class="px-4">
      滚动内容 {{ i }}
    </div>
  </KmMarquee>
</template>
```

## 垂直滚动

```vue
<template>
  <KmMarquee vertical>
    <div v-for="i in 5" :key="i" class="py-2">
      垂直滚动 {{ i }}
    </div>
  </KmMarquee>
</template>
```

## 反向滚动

```vue
<template>
  <KmMarquee :reverse="true">
    <div v-for="i in 5" :key="i" class="px-4">
      反向滚动 {{ i }}
    </div>
  </KmMarquee>
</template>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| reverse | 是否反向滚动 | `boolean` | `false` |
| pauseOnHover | 悬停时暂停 | `boolean` | `false` |
| vertical | 是否垂直滚动 | `boolean` | `false` |
| repeat | 重复次数 | `number` | `4` |
| class | 自定义类名 | `HTMLAttributes['class']` | `undefined` |

### Slots

| 名称 | 说明 |
|------|------|
| default | 默认插槽，滚动内容 |

## 示例

### 客户评价滚动

```vue
<template>
  <KmMarquee :pause-on-hover="true">
    <KmCard v-for="review in reviews" :key="review.id" class="w-80 p-4 mx-2">
      <div class="flex items-center gap-2">
        <img :src="review.avatar" class="w-10 h-10 rounded-full" />
        <div>
          <div class="font-bold">{{ review.name }}</div>
          <div class="text-sm text-muted-foreground">{{ review.rating }}⭐</div>
        </div>
      </div>
      <p class="mt-2 text-sm">{{ review.content }}</p>
    </KmCard>
  </KmMarquee>
</template>

<script setup lang="ts">
const reviews = [
  { id: 1, name: '用户 A', avatar: '/a.jpg', rating: 5, content: '非常好用！' },
  { id: 2, name: '用户 B', avatar: '/b.jpg', rating: 4, content: '值得推荐' },
  { id: 3, name: '用户 C', avatar: '/c.jpg', rating: 5, content: '效率提升明显' },
]
</script>
```

### 合作伙伴 Logo

```vue
<template>
  <KmMarquee :pause-on-hover="true" :repeat="6">
    <div v-for="i in 6" :key="i" class="px-8">
      <img :src="`/partner-${i}.svg`" class="h-12 w-auto opacity-70" />
    </div>
  </KmMarquee>
</template>
```

### 垂直公告栏

```vue
<template>
  <KmMarquee vertical :pause-on-hover="true" class="h-64">
    <div v-for="notice in notices" :key="notice.id" class="py-3 border-b">
      <KmIcon name="i-heroicons:bell" class="text-primary" />
      <span class="ml-2">{{ notice.title }}</span>
    </div>
  </KmMarquee>
</template>
```

### 慢速滚动

```vue
<template>
  <KmMarquee :reverse="true" class="[--duration:60s]">
    <div v-for="i in 8" :key="i" class="px-6 text-lg">
      慢速滚动内容 {{ i }}
    </div>
  </KmMarquee>
</template>
```
